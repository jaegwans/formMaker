import Title from './form/Title';

const FormSelector = ({ props }: { props: any }) => {
    if (props.type === 'title') {
        return (
            <Title
                key={props.id}
                title={props.title}
                description={props.description}
            />
        );
    }
    return <div></div>;
};

export default FormSelector;
