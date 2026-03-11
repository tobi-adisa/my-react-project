export type ButtonProps = {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button disabled={props.disabled} onClick={props.onClick}>{props.label}</button>
};

export const buttonProps = {
    label: "Submit",
    disabled: true,
    onClick: () => console.log("Clicked")
}



// Button(rest)
