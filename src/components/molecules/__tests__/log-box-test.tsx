import { render } from '@testing-library/react';
import LogBox from '../log-box';
import { Log } from '../../../types';

const mockLog: Log = {
    id: 1,
    endTime: "2021-06-11T17:08:11.577Z",
    scheduleId: 2,
    serverName: 'Server 1',
    startTime: "2021-06-11T17:08:11.577Z",
    status: 'Successful',
};

describe('LogBox component', () => {
    it('renders log details correctly', () => {
        const { getByText } = render(<LogBox log={mockLog} />);

        expect(getByText(`ID: ${mockLog.id}`)).toBeInTheDocument();
        expect(getByText(`Start time:`)).toBeInTheDocument();
        expect(getByText(`End time:`)).toBeInTheDocument();
        expect(getByText(`Schedule id:`)).toBeInTheDocument();
        expect(getByText(`${mockLog.scheduleId}`)).toBeInTheDocument();
        expect(getByText(`Server name:`)).toBeInTheDocument();
        expect(getByText(`${mockLog.serverName}`)).toBeInTheDocument();
        expect(getByText(`Status:`)).toBeInTheDocument();
        expect(getByText(`${mockLog.status}`)).toBeInTheDocument();
    });
});
