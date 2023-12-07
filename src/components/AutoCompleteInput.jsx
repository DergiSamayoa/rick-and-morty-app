import { useState } from 'react';

const AutocompleteInput = ({ options }) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        if (event.target.value) {
            setFilteredOptions(options.filter(option => 
                    option.toLowerCase().includes(event.target.value.toLowerCase())
            ));
            // console.log(filteredOptions)
        } else {
            setFilteredOptions([]);
        }
    };

    const handleOptionClick = (option) => {
        setInputValue(option);
        setFilteredOptions([]);
        // console.log("autocomplete:",option)
    };

    return (
        <div className="relative">
            <input
                name='newLocation'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Type a location name.'
                className="w-80 p-1 pl-4 border-2 border-red-950/70 rounded-2xl z-20
                        focus:outline-none focus:ring-0 focus:ring-yellow-200"
            />
            <button type="submit"
                        className="w-28 p-1 border-2 border-red-950/70 bg-yellow-200 rounded-2xl text-center absolute right-0 z-10
                                hover:border-yellow-200 hover:bg-red-950/90 hover:text-yellow-200 ">
                Search
            </button>
            {filteredOptions.length > 0 && (
                <ul className="absolute bg-yellow-200 text-red-950/70 border rounded mt-1 p-2 w-full z-50 text-">
                {filteredOptions.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="cursor-pointer bg-red-950/70 text-yellow-200 hover:text-red-950/90 hover:bg-yellow-200 p-2"
                    >
                    {option}
                    </li>
                )).slice(0, 10)}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteInput;