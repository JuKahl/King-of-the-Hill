import Modal from "./Modal";
import useModal from "./useModal";

const App = () => {
  const { toggle, visible } = useModal();
  return (
    <div>
      <button onClick={toggle}>Show Modal</button>
      <Modal visible={visible} toggle={toggle} userPick={"TBA"} />
    </div>
  );
};

export default App;
