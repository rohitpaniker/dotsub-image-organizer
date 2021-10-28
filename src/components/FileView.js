import { Eye, Share } from "react-feather";
const FileView = ({ files, shareIt, viewSharedWith, viewTagsEditor, openImage }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pictures
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Shared With
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tags
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {files.map((file, id) => (
                  <tr key={id} className="hover:bg-gray-100 cursor-pointer">
                    <td
                      className="hover:bg-gray-200 px-6 py-4 whitespace-nowrap"
                      onClick={() => openImage(file.image)}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={file.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {file.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{file.title}</div>
                      <div className="text-sm text-gray-500">
                        {file.createdAt}
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={(e) =>
                        file.sharedWith.length > 0 ? viewSharedWith(id) : null
                      }
                    >
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          file.sharedWith.length > 0
                            ? "bg-green-100"
                            : "bg-gray-100"
                        } text-green-800`}
                      >
                        <Eye color="#000000" size="18" className="mr-2" /> View
                      </span>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={(e) =>
                        file.tags.length > 0 ? viewTagsEditor(id) : null
                      }
                    >
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          file.tags.length > 0 ? "bg-green-100" : "bg-gray-100"
                        } text-green-800`}
                      >
                        <Eye color="#000000" size="18" className="mr-2" /> View
                      </span>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                      onClick={e => shareIt()}
                    >
                      <span className="pt-2 pb-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800">
                        <Share color="#000000" size="18" className="mr-2" />{" "}
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Share
                        </a>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileView;
