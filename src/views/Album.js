import React from "react";
import Swal from "sweetalert2";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router-dom";
import DirectoryView from "./../components/DirectoryView";
import ContextMenu from "./../components/ContextMenu";
import FilteredSearch from "../components/FilteredSearch";
import { Filter } from "react-feather";
import Modal from "react-modal";

function Album() {
  const history = useHistory();
  const [dirs, setDirs] = React.useState([]);
  const [anchorPoint, setAnchorPoint] = React.useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [clickedPosition, setClickedPosition] = React.useState(0);

  document.addEventListener(
    "contextmenu",
    React.useCallback(
      (event) => {
        event.preventDefault();
        setAnchorPoint({ x: event.pageX, y: event.pageY });
        setShow(true);
      },
      [setAnchorPoint, setShow]
    )
  );
  const handleContextMenu = React.useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  React.useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);

    setDirs([
      {
        name: "Office",
        totalImages: 10,
        image:
          "https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-vector-folder-icon-png-image_555493.jpg",
        sharedWith: [
          "john@doe.com",
          "rohit@gmail.com",
          "jane@doe.com",
          "johndoe@doe.com",
          "janedoe@doe.com",
          "jd@doe.com",
          "johnd@doe.com",
        ],
      },
      {
        name: "Vacation",
        totalImages: 20,
        image:
          "https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-vector-folder-icon-png-image_555493.jpg",
        sharedWith: [
          "john@doe.com",
          "rohit@gmail.com",
          "jane@doe.com",
          "johndoe@doe.com",
          "janedoe@doe.com",
          "jd@doe.com",
          "johnd@doe.com",
        ],
      },
      {
        name: "Projects",
        totalImages: 0,
        image:
          "https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-vector-folder-icon-png-image_555493.jpg",
        sharedWith: [],
      }
    ]);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const onClickListeners = () => {
    return {
      onAddNewFolder: async () => {
        const { value: album } = await Swal.fire({
          title: "Name Your Album",
          input: "text",
          inputPlaceholder: "Bali Nomad Workcation",
        });

        if (album) {
          const _temp = dirs;
          _temp.push({
            name: album,
            totalImages: 0,
            image:
              "https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-vector-folder-icon-png-image_555493.jpg",
          });
          setDirs([..._temp]);
          cogoToast.success("Added New Album", {
            position: "top-right",
          });
        }
      },
      settings: async () => {
        Swal.fire("Add a settings modal!");
      },
      about: async () => {
        Swal.fire("Add an about modal!");
      },
    };
  };

  const shareIt = async () => {
    const { value: recipientEmail } = await Swal.fire({
      title: "Share This Album With",
      input: "text",
      inputPlaceholder: "somename@domain.com",
    });

    if (recipientEmail) {
      cogoToast.success(`Email Sent to ${recipientEmail}`, {
        position: "top-right",
      });
    }
  };

  const viewSharedWith = (position) => {
    setClickedPosition(position);
    openModal(true);
  };

  const navigateTo = () => {
    history.push("/file");
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div
      className="h-screen w-screen bg-gray-100"
      onClick={() => setShow(false)}
    >
      {!isFilterOpen && (
        <div className="flex justify-end">
          <button
            class="flex flex-row justify-center p-2 border w-1/5 rounded-md bg-gray-800 text-white"
            onClick={() => setIsFilterOpen(true)}
          >
            <div className="mt-1">
              <Filter color="#FFFFFF" size="18" className="mr-2" />
            </div>
            Search Filter
          </button>
        </div>
      )}
      {isFilterOpen && (
        <FilteredSearch
          searchByAlbum={true}
          searchByEmail={true}
          searchByDate={false}
          searchByTag={false}
          onClick={() => setIsFilterOpen(false)}
        />
      )}
      <DirectoryView
        dirs={dirs}
        shareIt={shareIt}
        viewSharedWith={viewSharedWith}
        navigateTo={navigateTo}
      />
      {show ? (
        <ContextMenu
          setShow={setShow}
          anchorPoint={anchorPoint}
          onClickListeners={onClickListeners}
        />
      ) : null}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel="Album Modal"
      >
        <div className="flex flex-col">
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email Sent List
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dirs.length > 0 && dirs[clickedPosition].sharedWith.map((email, id) => (
                      <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap hover:bg-gray-100 cursor-pointer">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm text-gray-500">
                                {email}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Album;
