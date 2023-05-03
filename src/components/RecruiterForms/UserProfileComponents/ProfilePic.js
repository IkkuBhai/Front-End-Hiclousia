import React,{ useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

const ProfilePic = () => {

    const [image, setImage] = useState(" ")
    return (
     <div className="profile_img text-center p-4">
        <div className='flex flex-column justify-content-center'>

            <InputText 
            type='file'
            accept='/image/*'
            onChange={(event) => {
                const file = event.target.files[0];
            }} 
            />

        </div>
     </div>
    )
}

export default ProfilePic