import Col from "@components/Col";
import Box from "@components/Box";
import Text from "@components/Text";
import Spacer from "@components/Spacer";

function App() {
	return (
		<Box classes="flex items-center justify-center h-screen bg-gray-700">
			<Col>
				<Text classes="font-mono text-5xl font-semibold text-white">
					Enjoy Hacking!
				</Text>
				<Spacer py="py-4" />
				<Text classes="text-base text-white">
					Edit
					<Text classes="font-mono mx-2 px-3 py-1 mx-1 text-sm text-gray-700 bg-yellow-300">
						App.js
					</Text>
					to get started
				</Text>
			</Col>
		</Box>
	);
}

export default App;
