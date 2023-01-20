import { View, ScrollView, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { BackButton } from './../components/BackButton';
import { Checkbox } from './../components/Checkbox';

const avaiableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if(weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView showsVerticalScrollIndicator={false} >
        <BackButton />

        <Text className='mt-6 text-white font-extrabold text-3xl'>
          Criar Hábito
        </Text>

        <Text className='mt-6 text-white font-semibold text-base'>
          Qual seu comprometimento?
        </Text>

        <TextInput
          className='h-12 p-4 rounded-lg mt-3 bg-zinc-800 text-white 
                      focus:border-2 focus: border-green-600'
        />

        <Text className='text-white font-semibold mt-4 mb-3'>
          Qual a recorrência?
        </Text>
        {
          avaiableWeekDays.map((weekDay, index) => (
            <Checkbox
              key={weekDay}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))
        }


      </ScrollView>

    </View>
  )
}