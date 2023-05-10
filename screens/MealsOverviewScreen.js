import { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../Components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // useEffect : 컴포넌트 로딩이 완료되고 실행
  // useLayoutEffect : 컴포넌트가 실행되면서 실행.
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
