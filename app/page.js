import Link from "next/link"
import StudentInfo from "./StudentInfo"

export default function Page() {
    return (
      <main>
        
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      
      <StudentInfo />
      <div>
        <ul>
          <li><Link href="/week1">Week 1</Link></li>
          <li><Link href="/week2">Week 2</Link></li>
          <li><Link href="/week3">Week 3</Link></li>
          <li><Link href="/week4">Week 4</Link></li>
          <li><Link href="/week5">Week 5</Link></li>
          <li><Link href="/week6">Week 6</Link></li>
          <li><Link href="/week7">Week 7</Link></li>
          <li><Link href="/week8">Week 8</Link></li>
        </ul>
      </div>
      </main>
  )
}