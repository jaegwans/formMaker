import Title from './Title';

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
    return <div>dd</div>;
};

export default FormSelector;
