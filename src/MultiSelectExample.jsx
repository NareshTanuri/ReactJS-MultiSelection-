import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { MultiSelect } from "react-multi-select-component";

const MultiselectionExample = () => {
    const [state, setState] = useState({
        fruits: [
            { id: 1, label: "Grapes 🍇", value: "grapes" },
            { id: 2, label: "Mango 🥭", value: "mango" },
            { id: 3, label: "Strawberry 🍓", value: "strawberry" },
            { id: 4, label: "Apple 🍎", value: "apple" },
            { id: 5, label: "Banana 🍌", value: "banana" },
            { id: 6, label: "Pineapple 🍍", value: "pineapple" },
            { id: 7, label: "Orange 🍊", value: "orange" },
            { id: 8, label: "Peach 🍑", value: "peach" },
            { id: 9, label: "Watermelon 🍉", value: "watermelon" },
            { id: 10, label: "Cherry 🍒", value: "cherry" },
            { id: 11, label: "Lemon 🍋", value: "lemon" },
            { id: 12, label: "Mango 🥭", value: "mango2" }
        ],
        selected: []
    });

    const colorMap = {
        1: "#9fd3c7",
        2: "#5585b5",
        3: "#f95959",
        4: "#a2a8d3",
        5: "#e0ffcd",
        6: "#ffcbcb",
        7: "#005792",
        8: "#ffb5b5",
        9: "#00bbf0",
        10: "#7c73e6",
        11: "#8ef6e4"
    };

    const getBackgroundColor = (id) => colorMap[id] || "#c3195d";

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            selected: prevState.fruits.map((fruit) => ({ label: fruit.label, value: fruit.id }))
        }))
    }, [])

    return (
        <div className="row text-center">
            <div className="col-lg-12">
                <MultiSelect
                    options={state.fruits.map((fruit) => ({ label: fruit.label, value: fruit.id }))}
                    value={state.selected}
                    onChange={(selectedOptions) => setState(prevState => ({ ...prevState, selected: selectedOptions }))}
                    labelledBy="Select"
                    clearable={true}
                />
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    {state.selected.map((item, index) => (
                        <div key={item.value} className="col-lg-6 mb-3">
                            <div className="card">
                                <div className="card-body text-center" style={{ backgroundColor: getBackgroundColor(item.value) }}>
                                    <div className="h6">{index + 1}.{item.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default MultiselectionExample;
