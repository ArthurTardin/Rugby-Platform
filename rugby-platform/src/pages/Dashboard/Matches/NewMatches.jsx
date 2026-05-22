import { useState } from 'react'

import Input from '../../../components/Input/Input.jsx'
import Button from '../../../components/Button/Button.jsx'
import Select from '../../../components/Select/Select.jsx'


function NewMatch() {
  const [loading, setLoading] = useState(false)
  const [homeTeam, setHomeTeam] = useState('')
  const [awayTeam, setAwayTeam] = useState('')
  const [matchDate, setMatchDate] = useState('')

  const [sucess, setSucess] = useState(false)

  

  async function handleSubmit(event){

    event.preventDeFault()
    setLoading(true)
    console.log({
      homeTeam,
      awayTeam,
    })

    await new Promise((resolve) => setTimeout(resolve, 2000)
  )

    setSucess(true)
    

    setHomeTeam('')
    setAwayTeam('')
    setMatchDate('')
    setLoading(false)

  }
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">

      <div className="max-w-3xl mx-auto">

        <p className="text-green-400 font-bold uppercase tracking-widest mb-2">
          Match Creation
        </p>

        <h1 className="text-5xl font-black mb-10">
          New Match
        </h1>

        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-6">

          <div>

            <Input
            label="Home Team"
            placeholder="Enter Home Team"
            value={homeTeam}
            onCharge={(e) => setHomeTeam(e.target.value)}
            />

          </div>

          <div>

            <Input
            label="Away Team"
            placeholder="Enter Away Team"
            value={awayTeam}
            onCharge={(e) => setAwayTeam(e.target.value)}
            />

          </div>

          <div>

            <Input
            label="Match Date"
            placeholder="Enter Match Date"
            value={matchDate}
            onCharge={(e) => setMatchDate(e.target.value)}
            />

          </div>

          <div>

            <Select
            label="Referee"
            options={[
              'Arthur Tardin',
              'Cauã Ricardo',
              'Erika Weiss',
            ]}
            />

          </div>

          <Button
          loading={loading}
          >

            Create Match

          </Button>

        </form>
        {
          sucess && (
            <div className='mt-6 bg-green-400 text-black p-4 rounded-2x1 font-bold'>

              Match created Sucessfully!

            </div>

          )

        }

      </div>

    </div>
  )
}

export default NewMatch