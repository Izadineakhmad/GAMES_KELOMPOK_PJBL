import React, { useEffect } from 'react'

function Mantap() {

    useEffect(() => {
        // dels()
        generatePyramid()
    }, [])

    function generatePyramid() {

        for (let i = 1; i <= 10; i++) {
            let rows = ""
            for(let j = 1; j <= 10 - i; j++) {
                rows += " "
            }
            for (let k = 1; k <=  2 * i - 1; k++) {
                rows += "*"
            }
            console.log(rows)
        }

    }

  return (
    <div>
    </div>
  )
}

export default Mantap