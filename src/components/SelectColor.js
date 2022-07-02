import React from 'react';
import { ColorConsumer } from '../contexts/color';
const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',]

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {color.map(c => {
              return (
                <div
                  key={c}
                  style={{
                    background: c,
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer'
                  }}
                  onClick={() => actions.setColor(c)}
                  onContextMenu={e => {
                    //기존 마우스 오른클릭 액션을 막는다...
                    e.preventDefault();
                    actions.setSubcolor(c)
                  }}

                />
              )
            })}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  )
}



export default SelectColors