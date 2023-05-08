import Title from './TitleView';

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
    return null;
};

export default FormSelector;
