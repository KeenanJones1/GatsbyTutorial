import React from "react"
import Layout from "../components/Layout"
import {ExampleButton} from "../components/Button"


export default function Home() {
  return <div>
      <Layout>
        <h1>Hello World</h1>
        <ExampleButton>
          Click me
        </ExampleButton>
      </Layout>
    </div>
}
