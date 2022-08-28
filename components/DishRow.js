import { StyleSheet, Text, View , TouchableOpacity,Image } from 'react-native'
import React ,{ useState , useEffect} from 'react'
import { urlFor } from '../sanity';
import { MinusCircleIcon , PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch , useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../redux/basketSlice';


const DishRow = ({ id, title, description,price,imgUrl}) => {

  const [isPressed,setIsPressed]  = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state,id));

  const addItemsToBasket = () => {
     dispatch(addToBasket({id, title, description,price,imgUrl}));
  };
  const removeItemsFromBasket   = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({id}));
  };
  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)} 
    className={`bg-white border p-4 border-gray-400 ${isPressed && "border-b-0"}`}>
    <View className='flex-row'>
      <View className='flex-1 pr-2'>
      <Text className="text-base mb-2">{title}</Text>
      <Text className='text-gray-400'>{description}</Text>
      <Text className="mt-2 text-black-400">$ {price}</Text>
    </View>
    <View>
      <Image 
      styles={{
        borderWidth : 1,
        borderColor : '#F3F4F4'
      }}
      source={{uri:imgUrl}}
      className="h-20 w-20 bg-gray-300 p-4 mt-6 rounded"
      />
      </View>
    </View>
    </TouchableOpacity>
    {isPressed && (
      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
          <TouchableOpacity disabled={!items.length} onPress={removeItemsFromBasket}>
            <MinusCircleIcon  
            color={items.length > 0 ? "#00CCBB" : 'gray'} size={40} />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addItemsToBasket}>
            <PlusCircleIcon color='#00CCBB' size={40} />
          </TouchableOpacity>
        </View>
      </View>
    )}
    </>
  )
}

export default DishRow

const styles = StyleSheet.create({})