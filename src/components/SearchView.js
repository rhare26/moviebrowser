import Hero from './Hero'

const SearchView = ({ keyword, searchResults }) => {
    const title = `Search results for ${keyword}`
    return (
        <>
            <Hero text={title} />
        </>

     )
}

export default SearchView;