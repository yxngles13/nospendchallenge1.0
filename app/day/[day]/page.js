export default function DayPage({params}){
    const {day} =  params;
    return(
        <div className="bg-white">
            <h1 className="text-black">Day {day}</h1>
            <p className="text-black">This is the page for day {day}.</p>
        </div>
    );
}