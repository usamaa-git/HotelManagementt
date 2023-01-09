import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed,faPlane,faCar,faTaxi,faCalendarDays,faPerson} from "@fortawesome/free-solid-svg-icons"
import "./header.css"
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";

export const Header = ({type}) => {
    const [destination,setdestination] = useState("")
    const [opendate,setopendate] = useState(false)
    const [date, setdate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
      ]);
      const [openoptions,setopenoptions] = useState(false)
      const [options,setoptions]=useState({
          adult:1,
          children:0,
          room:1,
      });
const handleOption = (name,operation)=>{
        setoptions(prev=>{return{
            ...prev,[name]: operation==="i" ? options[name]+1 : options[name]-1
        };
    });
};
const navigate =useNavigate()
const handleSerch = ()=>{
    navigate("/hotels",{state:{destination,date,options}} )
}
  return (
    <div className="header">
        <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
         </div>
         <div className="headerListItem">
         <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
         </div>
         <div className="headerListItem">
         <FontAwesomeIcon icon={faCar} />
            <span>CarRentals</span>
         </div>
         <div className="headerListItem">
         <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
         </div>
         <div className="headerListItem">
         <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort Texis</span>  
         </div>
         </div>
         { type !== "list" && 
             <>
             <h1 className="headerTitle">A LifeTime of Discounts? Its a Genius</h1>
            <p className="headerDes">Get Rewarded For Your Travels. Unlock Instant Savings of 10% or more with a free LamaBooking Account</p>
        <button className="headerBtn">
                Sign In/Register
        </button>
        <div className="headerSearch">
            <div className="headerSerchItem">
            <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
            <input type="text"
             placeholder="Where are u going?" 
             className="headerSerchInput"
             onChange={(e) => setdestination(e.target.value)}>
            </input>
            </div>
            <div className="headerSerchItem">
            <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
            <span onClick={()=>(setopendate(!opendate))} className="headerSerchText">
            {`${format(
                date[0].startDate,
                "MM/dd/yyyy")}
                 to
                 ${format(date[0].endDate,"MM/dd/yyyy")}`}
           </span> 
           {opendate && <DateRange
                 editableDateInputs={true}
                onChange={item => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
            />}
            </div>
            <div className="headerSerchItem">
            <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
            <span onClick={()=>setopenoptions(!openoptions)} className="headerSerchText">
                {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                {openoptions && <div className="options">
                <div className="optionItems">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button disabled={options.adult<=1} className="optionCounterBtn" onClick={()=>handleOption("adult","d")} >-</button>
                    <span className="optionCounterNo">{options.adult}</span>
                    <button className="optionCounterBtn" onClick={()=>handleOption("adult","i")} >+</button>
                    </div>
                </div>
                <div className="optionItems">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button disabled={options.children<=0} className="optionCounterBtn" onClick={()=>handleOption("children","d")}>-</button>
                    <span className="optionCounterNo">{options.children}</span>
                    <button className="optionCounterBtn" onClick={()=>handleOption("children","i")} >+</button>
                    </div>
                </div>
                <div className="optionItems">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button disabled={options.room<=1} className="optionCounterBtn" onClick={()=>handleOption("room","d")}>-</button>
                    <span className="optionCounterNo">{options.room}</span>
                    <button className="optionCounterBtn" onClick={()=>handleOption("room","i")} >+</button>
                    </div>
                </div>
                </div>}
            </span>
            </div>
            <div className="headerSerchItem">
           <button className="headerBtn" onClick={handleSerch} >Search</button>
            </div>
        </div>
        </>
        }
         </div>
    </div>
  )
}
