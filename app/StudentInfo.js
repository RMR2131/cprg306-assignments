import Link from "next/link";

export default function StudentInfo() {
    return (
      <main>
      <div>
      <p>
        Name: Ruth Reyes
      </p>
      <p>
        Course section: CPRG 306 C
      </p>
      <p>
        <a href="https://github.com/RMR2131">Github Account:RMR2131</a>
      </p>
      <p>
        <Link href="/week2"></Link>
      </p>
      </div>
    </main>
  )
}