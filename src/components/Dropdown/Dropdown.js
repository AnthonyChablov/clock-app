import Info from "../Info/Info";

const Dropdown = ({showDropDown}) => {
    return (
        <div className="dropdown">
            <Info title={'Current Timezone'} data={'Europe/London'}/>
            <Info title={'Day Of the year'} data={'295'}/>
            <Info title={'Day of the week'} data={'5'}/>
            <Info title={'Week number'} data={'42'}/>
        </div>
    )
}

export default Dropdown;