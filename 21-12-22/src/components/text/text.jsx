import './text.css';

const variantMap = {
    body: `text-md`,
    title: `text-xl `
}

export const Text = (props) => {
    const {
        as = 'div', 
        children,
        variant = 'body',
        ...attrs
    } = props;

    const Element = as;

    return <Element className={`Text ${variantMap[variant] ?? ''}`}
                    {...attrs}
    >{children}</Element>
}