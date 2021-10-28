const ContextMenu = ({ anchorPoint, onClickListeners, setShow }) => {
  const _ = onClickListeners();

  return (
    <ul
      className="menu"
      style={{
        top: anchorPoint.y,
        left: anchorPoint.x,
      }}
    >
      <li
        className="rounded-lg flex justify-center p-2 ml-2 mr-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs font-bold"
        onClick={() => {
          _.onAddNewFolder();
          setShow(false);
        }}
      >
        New Folder
      </li>
      <li
        className="rounded-lg flex justify-center p-2 ml-2 mr-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs font-bold"
        onClick={() => {
          _.settings();
          setShow(false);
        }}
      >
        Settings
      </li>
      <hr className="divider mt-1 mb-1" />
      <li
        className="rounded-lg flex justify-center p-2 ml-2 mr-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-xs font-bold"
        onClick={() => {
          _.about();
          setShow(false);
        }}
      >
        About
      </li>
    </ul>
  );
};

export default ContextMenu;
