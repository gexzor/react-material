import axios from 'axios';
import { environment } from '../../environment';
import { IMatch, reduceMatchData } from '../models/IMatch';

export class MatchService {
	private apiEndpoint = '/matches/';

	public async getMatchData(matchId: string): Promise<IMatch> {
		const matchData = await axios
			.get(environment.databaseURL + this.apiEndpoint + matchId)
			.then((response) => {
				const matchData: IMatch = reduceMatchData(response.data);
				console.log(matchData);
				return matchData;
			});
		return matchData;
	}
}
