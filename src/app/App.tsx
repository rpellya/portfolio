import { Sidebar } from 'components/Sidebar';
import { Home } from 'components/Home';
import { ProfileOverview } from 'components/ProfileOverview';
import { useTheme } from './providers/ThemeProvider';

const App: React.FC = () => {
    const { theme } = useTheme();
    document.body.className = theme;

    return (
        <div className="App">
            <Home />
            <Sidebar />
            <ProfileOverview />
        </div>
    );
};

export default App;
