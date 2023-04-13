import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm () {
    return (        
        <fieldset>
            <legend>New Entry</legend>
            <form>
                <label htmlFor="motto">Motto</label>
                <input type="text" id="motto" name="motto"></input>
                <label htmlFor="notes">Notes</label>
                <textarea id="notes"></textarea>
                <Button></Button>
            </form>
        </fieldset>
  )
}