import "./Main.css";

import EntryForm from "../EntryForm";
import Entries from "../Entries";

export default function Main (){
    return (
      <div>
        < EntryForm />
        < Entries /> 

        <section className="Entries">
          <button className='Entries--tab'></button>
            <span className='Entries--tab__badge'></span>
          <button className='Entries--tab'></button>
            <span className='Entries--tab__badge'></span>
          <ul className='Entries--list'>
            <li>
              <h3></h3>
              <p className='Entries--list__date'></p>
              <p className='Entries--list__text'></p>
              <button></button>
            </li>
            <li>
              <h3></h3>
              <p className='Entries--list__date'></p>
              <p className='Entries--list__text'></p>
              <button></button>
            </li>              
            <li>
              <h3></h3>
              <p className='Entries--list__date'></p>
              <p className='Entries--list__text'></p>
              <button></button>
            </li>
          </ul>
        </section>
      </div>
    )
}

        