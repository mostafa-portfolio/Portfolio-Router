

export default  function Side(){
    return (
        <aside className="side-bar">
            <figure><img src="src\assets\Profile.jpg" alt="" /></figure>
            <div className="side-intro">
                <h2>Mostafa Reda</h2>
                <p className="title">D365 F&O Functional Consultant @ Mindzer Systems | Industrial Engineer</p>
            </div>
            
            <hr />

            {/* EMAIL */}
            <div className="contacts">
{/*                 <div><svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></rect><path stroke-linecap="round" stroke-linejoin="round" d="M112 160l144 112 144-112" class="ionicon-fill-none ionicon-stroke-width"></path></svg></div>
 */}                <div>
                    <p>EMAIL</p>
                    <p className="white-highlight">Mo.Mohammed@nu.edu.eg</p>
                </div>
            </div>

            {/* lOCATION */}
            <div className="contacts">
{/*                 <div><svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Location</title><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></path><circle cx="256" cy="192" r="48" stroke-linecap="round" stroke-linejoin="round" class="ionicon-fill-none ionicon-stroke-width"></circle></svg></div>
 */}                <div>
                    <p>LOCATION</p>
                    <p className="white-highlight">6th of October , Giza , Egypt</p>
                </div>
            </div>

            {/* Social Media */}
            <div ><svg  xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" viewBox="0 0 512 512"><title>Logo Linkedin</title><path  d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg></div>
        </aside>
    )
}