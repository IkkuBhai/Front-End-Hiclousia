import React from 'react'

const EducationModal = () => {
    return (
        <>
            <div className="edu-Modal-wrapper">
                <div className="edu-Modal-container">

                    <h3 style={{ textAlign: 'center', marginBottom: '15px', fontFamily: "'Ubuntu', sans-serif", }}>Update Education</h3>

                    <div className='education-data'>

                        {userInfo.educationData?.map((education) => (
                            <Grid item xs={8} sm={8} key={education._id} >

                                <div style={{ margin: '10%', marginTop: '6%', marginBottom: '3px', }}>

                                    <button className="education-data-icon" onClick={() => setShowModalEdit(true)}><FiEdit2 /></button>
                                    {showEducationEdit && <MyModalEducationSecond />}

                                    <h5 style={{ fontFamily: "'Sans-Serif', Arial", }}>{education.educationLevel}</h5> <p style={{ fontSize: '10px', }}>from</p> <p>{education.collegeName}</p>

                                    <hr style={{ fontSize: '10px', }}></hr>
                                </div>


                            </Grid>
                        ))}

                    </div>

                    <button className="modal-btn" style={{ float: 'left' }} >save</button>
                    <button className="modal-btn" style={{ float: 'right' }} onClick={() => setShowModalEducation(false)}>cancel</button>

                </div>
            </div>
        </>
    )
}

export default EducationModal