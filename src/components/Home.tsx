type MyComponentProps = {
	name: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
	return <div>My Component</div>;
};

export default MyComponent;
