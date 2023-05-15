import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
        ligula massa, at volutpat quam blandit vitae. Curabitur semper, sem ut
        iaculis dictum, eros est semper nisl, id vehicula justo quam vitae
        neque. Quisque purus nulla, vehicula eget porttitor at, sollicitudin at
        mauris. Phasellus vel feugiat nibh. Cras id ligula vel sapien
        consectetur sagittis sed lacinia velit. Nulla eu elementum dolor. Cras
        eget lacinia dui. Quisque imperdiet sagittis mauris in cursus. Sed sed
        ipsum in ex commodo rutrum sit amet quis massa. Ut non enim eget metus
        sollicitudin tristique. Ut non ante metus. In in suscipit metus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
        ligula massa, at volutpat quam blandit vitae. Curabitur semper, sem ut
        iaculis dictum, eros est semper nisl, id vehicula justo quam vitae
        neque. Quisque purus nulla, vehicula eget porttitor at, sollicitudin at
        mauris. Phasellus vel feugiat nibh. Cras id ligula vel sapien
        consectetur sagittis sed lacinia velit. Nulla eu elementum dolor. Cras
        eget lacinia dui. Quisque imperdiet sagittis mauris in cursus. Sed sed
        ipsum in ex commodo rutrum sit amet quis massa. Ut non enim eget metus
        sollicitudin tristique. Ut non ante metus. In in suscipit metus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
        ligula massa, at volutpat quam blandit vitae. Curabitur semper, sem ut
        iaculis dictum, eros est semper nisl, id vehicula justo quam vitae
        neque. Quisque purus nulla, vehicula eget porttitor at, sollicitudin at
        mauris. Phasellus vel feugiat nibh. Cras id ligula vel sapien
        consectetur sagittis sed lacinia velit. Nulla eu elementum dolor. Cras
        eget lacinia dui. Quisque imperdiet sagittis mauris in cursus. Sed sed
        ipsum in ex commodo rutrum sit amet quis massa. Ut non enim eget metus
        sollicitudin tristique. Ut non ante metus. In in suscipit metus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
        ligula massa, at volutpat quam blandit vitae. Curabitur semper, sem ut
        iaculis dictum, eros est semper nisl, id vehicula justo quam vitae
        neque. Quisque purus nulla, vehicula eget porttitor at, sollicitudin at
        mauris. Phasellus vel feugiat nibh. Cras id ligula vel sapien
        consectetur sagittis sed lacinia velit. Nulla eu elementum dolor. Cras
        eget lacinia dui. Quisque imperdiet sagittis mauris in cursus. Sed sed
        ipsum in ex commodo rutrum sit amet quis massa. Ut non enim eget metus
        sollicitudin tristique. Ut non ante metus. In in suscipit metus.
      </p>
      <Button onClick={handleClick} primary>
        Open modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
