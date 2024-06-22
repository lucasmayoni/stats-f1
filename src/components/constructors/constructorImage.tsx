import { useEffect, useState } from "react";
import { getTeams } from "../../api/sportsapi/teamsAPIClient";

interface ConstructorProps {
    constructorName : string;
}

const ConstructorImage: React.FC<ConstructorProps> = ({constructorName}) => {
    const [image, setImage] = useState<any>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imageData = await getTeams(constructorName);
                setImage(imageData);
            } catch(error){
                console.error('error', error);
            }
        }
        fetchImages();
    }, [constructorName]);
    return (
        <img src={image.src} />
    )
}

export default ConstructorImage;