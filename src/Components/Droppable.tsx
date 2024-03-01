import React from  'react';
import { useDroppable } from '@dnd-kit/core';


export function Droppable(props) {
    const {isOver,setNodeRef} = useDroppable({
        id: props.id,
    });

    const style = {
        color: isOver ? 'blue' : undefined,
    };

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}