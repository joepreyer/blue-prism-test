type PropertyItemProps = {
    name: string
    value?: string | number | boolean
}

const PropertyItem = ({ name, value }: PropertyItemProps) => {
    return (
        <div className="flex flex-row">
            <p className="font-bold">{name}:&nbsp;</p>
            <p>{value || "NA"}</p>
        </div>
    )
}

export default PropertyItem