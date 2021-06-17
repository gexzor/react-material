export interface IPlayer {
	match_id: number;
	player_slot: number;
	actions_per_min: number;
	assists: number;
	buyback_count: number;
	courier_kills: number;
	deaths: number;
	denies: number;
	deny_t: number;
	firstblood_claimed: boolean;
	gold_per_min: number;
	gold_spent: number;
	gold_time: number[];
	hero_damage: number;
	hero_healing: number;
	hero_id: number;
	item_0: number;
	item_1: number;
	item_2: number;
	item_3: number;
	item_4: number;
	item_5: number;
	isRadiant: boolean;
	kills: number;
	kills_per_min: number;
	lane_kills: number;
	last_hits: number;
	level: number;
	lasthit_t: number[];
	lose: boolean;
	net_worth: number;
	neutral_kills: number;
	personaname: string;
	radiant_win: boolean;
	total_gold: number;
	total_xp: number;
	tower_damage: number;
	tower_kills: number;
	win: boolean;
	xp_per_min: number;
	xp_t: number[];
}

/**
 * @param players An array of players containing an excess of data.
 * @returns An array of IPlayer objects, that have been reduced to fit the interface model.
 */
export function reducePlayersData(players: any[]): IPlayer[] {
	return players.map(
		(player, index: number): IPlayer => {
			return {
				match_id: player.match_id,
				player_slot: index,
				actions_per_min: player.actions_per_min,
				assists: player.assists,
				buyback_count: player.buyback_count,
				courier_kills: player.courier_kills,
				deaths: player.deaths,
				denies: player.denies,
				deny_t: player.deny_t,
				firstblood_claimed: player.firstblood_claimed,
				gold_per_min: player.gold_per_min,
				gold_spent: player.gold_spent,
				gold_time: player.gold_time,
				hero_damage: player.hero_damage,
				hero_healing: player.hero_healing,
				hero_id: player.hero_id,
				item_0: player.item_0,
				item_1: player.item_1,
				item_2: player.item_2,
				item_3: player.item_3,
				item_4: player.item_4,
				item_5: player.item_5,
				isRadiant: player.isRadiant,
				kills: player.kills,
				kills_per_min: player.kills_per_min,
				lane_kills: player.lane_kills,
				last_hits: player.last_hits,
				level: player.level,
				lasthit_t: player.lasthit_t,
				lose: player.lose,
				net_worth: player.net_worth,
				neutral_kills: player.neutral_kills,
				personaname: player.personaname,
				radiant_win: player.radiant_win,
				total_gold: player.total_gold,
				total_xp: player.total_xp,
				tower_damage: player.tower_damage,
				tower_kills: player.tower_kills,
				win: player.win,
				xp_per_min: player.xp_per_min,
				xp_t: player.xp_t,
			};
		}
	);
}
