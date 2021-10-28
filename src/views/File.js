import React from "react";
import Swal from "sweetalert2";
import FileView from "../components/FileView";
import cogoToast from "cogo-toast";
import Modal from "react-modal";
import FilteredSearch from "../components/FilteredSearch";
import { Filter } from "react-feather";

const File = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [clickedPosition, setClickedPosition] = React.useState(0);
  const [actionClicked, setActionClicked] = React.useState("");
  const [pics, setPics] = React.useState([
    {
      name: "Office Space",
      createdAt: "09-22-2021",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      sharedWith: [
        "john@doe.com",
        "rohit@gmail.com",
        "jane@doe.com",
        "johndoe@doe.com",
        "janedoe@doe.com",
        "jd@doe.com",
        "johnd@doe.com",
      ],
      tags: ["open", "clean", "cityview", "corner", "minimal", "coworking"],
    },
    {
      name: "Office Environment",
      createdAt: "08-10-2021",
      image:
        "https://images.indianexpress.com/2020/05/the-office-759.jpg",
      sharedWith: [
        "janedoe@doe.com",
        "jd@doe.com",
        "johnd@doe.com",
      ],
      tags: ["open", "clean", "cityview", "corner", "minimal", "coworking"],
    },
    {
      name: "My Boss",
      createdAt: "09-02-2021",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWRjZjhjNDQtODUxZi00YzE4LThjNTItNjE4NDQzMDU5YjRjXkEyXkFqcGdeQWFybm8@._V1_.jpg",
      sharedWith: [
        "john@doe.com",
      ],
      tags: ["open", "clean", "cityview", "corner", "minimal", "coworking"],
    },
    {
      name: "Work Time",
      createdAt: "09-18-2021",
      image:
        "https://images.unsplash.com/photo-1633114129669-78b1ff09902b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      sharedWith: [
        "john@doe.com",
        "rohit@gmail.com",
        "jane@doe.com",
        "johnd@doe.com",
      ],
      tags: ["open", "clean", "cityview", "corner", "minimal", "coworking"],
    },
    {
      name: "Coworking Fun Time",
      createdAt: "07-28-2021",
      image:
        "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
      sharedWith: [
      ],
      tags: ["minimal", "coworking"],
    },
  ]);

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

  const shareIt = async () => {
    const { value: recipientEmail } = await Swal.fire({
      title: "Share This Picture With",
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
    setActionClicked("sharedWith");
    setClickedPosition(position);
    openModal(true);
  };

  const viewTagsEditor = (position) => {
    setActionClicked("tagsEditor");
    setClickedPosition(position);
    openModal(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openImage = (url) => {
    Swal.fire({
        imageUrl: url
      })
  }
  return (
    <div className="h-screen w-screen bg-gray-100">
      {!isFilterOpen && <div className="flex justify-end">
        <button class="flex flex-row justify-center p-2 border w-1/5 rounded-md bg-gray-800 text-white" onClick={() => setIsFilterOpen(true)}>
          <div className="mt-1"><Filter color="#FFFFFF" size="18" className="mr-2" /></div>
          Search Filter
        </button>
      </div>}
      {isFilterOpen && <FilteredSearch searchByAlbum={false} searchByEmail={true} searchByDate={true} searchByTag={true} onClick={() => setIsFilterOpen(false)}/>}
      <FileView
        files={pics}
        shareIt={shareIt}
        viewSharedWith={viewSharedWith}
        viewTagsEditor={viewTagsEditor}
        openImage={openImage}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel="Example Modal"
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
                        {actionClicked === "sharedWith"
                          ? "Email Sent List"
                          : "TAGs Editor"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {actionClicked === "sharedWith" ? (
                      pics[clickedPosition].sharedWith.map((email, id) => (
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
                      ))
                    ) : (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="rounded text-sm text-gray-500 p-5 hover:bg-gray-100 cursor-pointer">
                                {pics[clickedPosition].tags.map((tag, id) => (
                                  <span
                                    key={id}
                                    className="mr-2 ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                  >
                                    {tag}{" "}
                                  </span>
                                ))}
                              </div>
                              <button
                                type="submit"
                                className="mt-5 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default File;
