import React from 'react'

export default ({ size, setSize, difficulty, setDifficulty }) => {
  return (
    <div className="settings">
      <label>Difficulty</label>
      <select id="difficulty" onChange={e => setDifficulty(Number(e.target.value))}>
        <option value={0.1}>Easy</option>
        <option value={0.2}>Medium</option>
        <option value={0.5}>Hard</option>
        <option value={0.75}>INSANITY</option>
      </select>

      <label>Size</label>
      <select id="size" onChange={e => setSize(Number(e.target.value))}>
        <option value={10}>Small</option>
        <option value={20}>Medium</option>
        <option value={40}>Large</option>
      </select>
    </div>
  )
}
