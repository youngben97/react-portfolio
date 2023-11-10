// need to add functionality for active/inactive links depending on what page, act 21 + 22


export default function Navbar({ links }) {

    return (
        <>
          <header className= 'container-fluid p-0' style={{ height: '200px' }}>
            <div className= 'row h-100'>
              <div className= 'col-4 d-flex align-items-center'>
                <h1 className= 'my-name' style={{ margin: '25px 50px 0 50px'}}>Ben Young</h1>
              </div>
              <div className= 'col d-flex align-items-center' style={{ paddingLeft: '250px' }}>
                <nav className='navbar navbar-expand-lg pt-5' style={{ width: '100%' }}>
                      <ul className='navbar-nav d-flex justify-content-around w-100'>
                        {links.map((link) => link)}
                      </ul> 
                </nav>
              </div>
            </div>
          </header>
        </>
    );
}
