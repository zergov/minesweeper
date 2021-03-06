import React from 'react'

export default ({ setSize, setDifficulty, setTheme, onUsernameChange }) => {
  return (
    <div className="settings" style={{ marginRight: 400 }}>
      <select id="difficulty" onChange={e => setDifficulty(Number(e.target.value))}>
        <option value={0.1}>Easy</option>
        <option value={0.15}>Medium</option>
        <option value={0.3}>Hard</option>
        <option value={0.5}>INSANITY</option>
      </select>

      <input type="number" placeholder="Size" onChange={e => setSize(Number(e.target.value))} />

      <select id="theme" onChange={e => setTheme(e.target.value)}>
        <option value={''}>Day</option>
        <option value={'night'}>Night</option>
        <option value={'unicorn'}>Unicorn</option>
      </select>

      <input type="text" onChange={e => {onUsernameChange(e.target.value)}} placeholder="username" />
    </div>
  )
}
