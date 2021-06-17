import { IPlayer, reducePlayersData } from './IPlayer';

export interface IMatch {
	match_id: number;
	dire_score: number;
	radiant_score: number;
	duration: number;
	first_blood_time: number;
	radiant_win: boolean;
	radiant_gold_adv: number[];
	radiant_xp_adv: number[];
	players: IPlayer[];
}

/**
 * @param matchData A match object containing an excess of data.
 * @returns An object that has been reduced to fit the interface model.
 */
export function reduceMatchData(matchData: any): IMatch {
	return {
		match_id: matchData.match_id,
		dire_score: matchData.dire_score,
		radiant_score: matchData.radiant_score,
		duration: matchData.duration,
		first_blood_time: matchData.first_blood_time,
		radiant_win: matchData.radiant_win,
		radiant_gold_adv: matchData.radiant_gold_adv,
		radiant_xp_adv: matchData.radiant_xp_adv,
		players: reducePlayersData(matchData.players),
	};
}
