import { Sidebar } from 'components/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { BackgroundImage } from 'components/BackgroundImage';
import { ProfileOverview } from 'components/ProfileOverview';

const App: React.FC = () => {
    const { theme } = useTheme();
    document.body.className = theme;

    return (
        <div className="App">
            <Sidebar />
            <BackgroundImage />
            <ProfileOverview />
        </div>
    );
};

export default App;
