    import React, { useState } from "react";
    import Accordion from "./Accordion";
    import PropTypes from "prop-types";

    const FAQ = ({ initialItems }) => {
    const [items, setItems] = useState(initialItems);

    // const addAccordionItem = () => {
    //     const newItem = {
    //     title: "New Accordion Title",
    //     answer: "New Accordion Answer",
    //     };
    //     setItems([...items, newItem]);
    // };

    return (
        <div className="p-4 bg-gray-200 rounded-lg">
        {items.map((item, index) => (
            <Accordion key={index} title={item.title} answer={item.answer} />
        ))}
        {/* <button
            onClick={addAccordionItem}
            className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded"
        >
            Add Accordion
        </button> */}
        </div>
    );
    };

    FAQ.propTypes = {
    initialItems: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
        })
    ).isRequired,
    };

    export default FAQ;
