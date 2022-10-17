import React, {useState, createContext, useEffect} from 'react';
export const AppContext = createContext(null);

const AppContextProvider = ({children}) => {
    const [quote, setQuote] = useState('The science of opperations, as derived from mathematics more exericall, is a scient of itself, and has its own abstract trush and value');
    const [author, setAuthor] = useState('Ada Lovelace');
    const [timeOfDay, setTimeOfDay]=useState('hero-day');

    const [dropdown, setDropDown] = useState(false);

    const value ={
        quote, 
        timeOfDay, 
        dropdown, 
        author
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;