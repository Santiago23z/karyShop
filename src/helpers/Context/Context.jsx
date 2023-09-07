import React from "react";

const contextGB = React.createContext()

function ProviderContext ({ children }) {
    
    let [count, setCount] = React.useState(0)
    let [aside, setAside] = React.useState(false)
    let [products, setProducts] = React.useState({})
    let [saveCart, setSaveCart] = React.useState([])
    let [sidebar, setSidebar] = React.useState(false)
    let [order, setOrder] = React.useState([])
    let [data, setData] = React.useState([])
    let [searchValue, setSearchValue] = React.useState()
    
    
    function filteredProducts (data, value) {
        return data.filter(item => item.title.toLowerCase().includes(value?.toLowerCase()))
    }

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(DataTransfer => {
        
        setData(DataTransfer)
      })
  }, [])

    function handleSide () {
        setSidebar(true)
    }
    function handleCloseSide () {
        setSidebar(false)
        setCount(0)
    }
    function handleAsideCart () {
        setAside(true)
    }
    function handleCloseAside () {
        setAside(false)
    }

    function handleCount () {
        setCount(count++);
    }

    return (
        <contextGB.Provider value={({
            handleCount,
            count,
            setCount,
            aside,
            handleAsideCart,
            handleCloseAside,
            setProducts,
            products,
            setSaveCart,
            saveCart,
            handleCloseSide,
            handleSide,
            sidebar,
            order,
            setOrder,
            data,
            searchValue,
            setSearchValue,
            filteredProducts
        })}>
            {children}
        </contextGB.Provider>
    )
}

export {
    contextGB,
    ProviderContext
}