import Link from "next/link";
import StudentInfo from "../StudentInfo";

export default function Week2()
{
    const headingStyle = {
        textAlign: 'center', 
        color: 'lightblu',    
        fontWeight: 'a700',       
        fontSize: '36px',       
        fontFamily: 'Lucida Console, Monaco, monospace'
    };
    return (
        <main>
            <div style = {headingStyle}>
                <h1>My Shopping List</h1>
                <StudentInfo />
            </div>
        </main>
    );
}