import { Sidebar } from 'components/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { PreviewContent } from 'components/PreviewContent';
import { ResumeInfo } from 'components/ResumeInfo';

const App: React.FC = () => {
    const { theme } = useTheme();
    document.body.className = theme;

    return (
        <div className="App">
            <Sidebar />
            <PreviewContent />
            <ResumeInfo />
        </div>
    );
};

export default App;
