import { FiCheckSquare } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { useRef } from 'react';
import { Input } from '../Input';
import Modal from '../Modal';
import { Form } from './styles';

export interface FoodType {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
  available: boolean;
}

export type FoodDataType = Omit<FoodType, "id" | "available">;

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodDataType) => void;
}

export function ModalAddFood({
  isOpen,
  handleAddFood,
  setIsOpen
}: ModalAddFoodProps) {
  //refs
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: FoodDataType) {
    handleAddFood(data);
    setIsOpen();
  }


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />
    
          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />
    
          <Input name="description" placeholder="Descrição" icon={FiCheckSquare}/>
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
  )
}

// class ModalAddFood extends Component {
//   constructor(props) {
//     super(props);

//     this.formRef = createRef();
//   }

//   handleSubmit = async data => {
//     const { setIsOpen, handleAddFood } = this.props;

//     handleAddFood(data);
//     setIsOpen();
//   };

//   render() {
//     const { isOpen, setIsOpen } = this.props;

//     return (
//      
//     );
//   }
// };

// export default ModalAddFood;
