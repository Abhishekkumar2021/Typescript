type Draggable = {
    drag : () => void
}

type Selectable = {
    select : () => void
}

type DraggableSelectable = Draggable & Selectable;

// DraggableSelectable is an intersection type. It is a combination of two types. It is a type that has all the properties of both types. In this case, it is a type that has both the drag and select properties.

let Box: DraggableSelectable = {
    drag: () => console.log("Dragging"),
    select: () => console.log("Selecting")
}

class Control implements DraggableSelectable {
    drag() {
        console.log("Dragging");
    }

    select() {
        console.log("Selecting");
    }
}

const control = new Control();
control.drag();
control.select();