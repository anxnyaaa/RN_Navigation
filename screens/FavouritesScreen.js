import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavouritesScreen() {
    const favoriteMealCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id));
    
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }
    return (
        <MealsList items={favoriteMeals}/>
    )
}

export default FavouritesScreen;

const styles= StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})