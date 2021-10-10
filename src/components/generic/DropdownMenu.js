import React, { useState } from 'react'
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </span>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled" style={{marginBottom: '0'}}>
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);
export {CustomToggle, CustomMenu}


// return (
//     <Dropdown>
//         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//             Custom toggle
//         </Dropdown.Toggle>

//         <Dropdown.Menu as={CustomMenu}>
//             <Dropdown.Item eventKey="1">Red</Dropdown.Item>
//             <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
//             <Dropdown.Item eventKey="3" active>
//                 Orange
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
//         </Dropdown.Menu>
//     </Dropdown>,
// );