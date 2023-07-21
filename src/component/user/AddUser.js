import React from 'react'

const AddUser = () => {

   const onChangeInput = event => {

   }

  return (
    <div className='container'>
        <div className='w-75 mx-auto p-5 shadow-sm'>
          <h2 className='text-center mb-4'>Add User</h2>
          <form>
            <div className='form-group mb-2'>
              <input type='text'
               className='form-control from-control-lg'
               placeholder='Enter your full name'
               name='fullname'
               value=""
               onChange={(event)=>onChangeInput(event)}

              />  
              </div>
           <div className='form-group mb-2'>
              <input type='text'
               className='form-control from-control-lg'
               placeholder='Enter your username'
               name='username'
               value=""
               onChange={(event)=>onChangeInput(event)}

              />  
            </div>
            <div className='form-group mb-2'>
              <input type='email'
               className='form-control from-control-lg'
               placeholder='Enter your email'
               name='email'
               value=""
               onChange={(event)=>onChangeInput(event)}

              />  
            </div>
            <div className='form-group mb-2'>
              <input type='text'
               className='form-control from-control-lg'
               placeholder='Enter your phone number'
               name='phone'
               value=""
               onChange={(event)=>onChangeInput(event)}

              />  
            </div>
            <div className='form-group mb-2'>
              <input type='text'
               className='form-control from-control-lg'
               placeholder='Enter your website'
               name='website'
               value=""
               onChange={(event)=>onChangeInput(event)}

              />  
            </div>
            <button className='btn btn-info text-white col-12'>Add User</button>
          </form>
        </div>

    </div>
  );
}

export default AddUser