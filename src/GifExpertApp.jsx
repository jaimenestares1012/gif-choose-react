
import { useState } from "react"
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setcategories] = useState([])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setcategories([newCategory, ...categories])
        // setcategories(cat => [...cat, 'holi'])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategories
                ontNewCategory={onAddCategory}
            />
            {categories.map(category =>
                <GifGrid key={category} category={category} />
            )
            }

        </>
    )
}
