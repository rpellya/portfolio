import { Sidebar } from 'components/Sidebar';
import { useTheme } from './providers/ThemeProvider';

const App: React.FC = () => {
    const { theme } = useTheme();
    document.body.className = theme;

    return (
        <div className="App">
            <Sidebar />
        </div>
    );
};

export default App;
