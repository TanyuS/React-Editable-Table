/**
 * Created by Soul on 02.08.2017.
 */
export const CONTACTS_LOADING = 'CONTACTS_LOADING';
export const CONTACTS_SUCCESS = 'CONTACTS_SUCCESS';
export const CONTACTS_ERROR = 'CONTACTS_ERROR';
export const CONTACT_UPDATE = 'CONTACT_UPDATE';

export function updateContact(id, data) {
	return {
		type: CONTACT_UPDATE,
		id,
		data
	};
}

export function fetchStat() {
	return {
		type: CONTACTS_SUCCESS,
		body: {
			list: [
				{
					id: "5981d0debd6ac2c3945840c3",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2267,
					clicks: 1262,
					impressions: 4075,
					isChanging: false
				},
				{
					id: "5981d0de3fcb655cefd23714",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3525,
					clicks: 1469,
					impressions: 4685,
					isChanging: false
				},
				{
					id: "5981d0dea47fdcacd1ac78e4",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4202,
					clicks: 2363,
					impressions: 2967,
					isChanging: false
				},
				{
					id: "5981d0ded9960e5732280bb6",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1570,
					clicks: 4396,
					impressions: 2812,
					isChanging: false
				},
				{
					id: "5981d0de785c3d38125bc2f0",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1010,
					clicks: 3746,
					impressions: 576,
					isChanging: false
				},
				{
					id: "5981d0dec3eb80e0b5d5b87a",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 638,
					clicks: 5200,
					impressions: 5351,
					isChanging: false
				},
				{
					id: "5981d0de2885f61839c87154",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2691,
					clicks: 2343,
					impressions: 4581,
					isChanging: false
				},
				{
					id: "5981d0dee55c56d16e661027",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3886,
					clicks: 731,
					impressions: 4456,
					isChanging: false
				},
				{
					id: "5981d0de5234d4fdf195eefa",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1358,
					clicks: 1953,
					impressions: 2958,
					isChanging: false
				},
				{
					id: "5981d0dead99480b4ac0a387",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1332,
					clicks: 4965,
					impressions: 1373,
					isChanging: false
				},
				{
					id: "5981d0defbc35dd39a7e5570",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3926,
					clicks: 4432,
					impressions: 3320,
					isChanging: false
				},
				{
					id: "5981d0defe5180e7489a6c71",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3797,
					clicks: 4874,
					impressions: 1178,
					isChanging: false
				},
				{
					id: "5981d0ded92b3deec62c29bb",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4978,
					clicks: 736,
					impressions: 4146,
					isChanging: false
				},
				{
					id: "5981d0dedb96e826f94dbc8e",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2059,
					clicks: 3783,
					impressions: 3647,
					isChanging: false
				},
				{
					id: "5981d0de1a8f69946a29cfdc",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2203,
					clicks: 5199,
					impressions: 785,
					isChanging: false
				},
				{
					id: "5981d0de6919d94532818fa7",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1568,
					clicks: 1776,
					impressions: 614,
					isChanging: false
				},
				{
					id: "5981d0dec17612453d49f239",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2860,
					clicks: 4209,
					impressions: 3906,
					isChanging: false
				},
				{
					id: "5981d0de0a00de05c5ebf2d4",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3786,
					clicks: 825,
					impressions: 925,
					isChanging: false
				},
				{
					id: "5981d0dea27397701f0b8001",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 5396,
					clicks: 1548,
					impressions: 3708,
					isChanging: false
				},
				{
					id: "5981d0de6c36cb30231acf45",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4154,
					clicks: 2121,
					impressions: 4682,
					isChanging: false
				},
				{
					id: "5981d0de3d2725b1f461ec50",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2994,
					clicks: 1247,
					impressions: 2420,
					isChanging: false
				},
				{
					id: "5981d0de3eed3db001718c2d",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4296,
					clicks: 775,
					impressions: 751,
					isChanging: false
				},
				{
					id: "5981d0ded88fb12136a16cdd",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4984,
					clicks: 730,
					impressions: 1108,
					isChanging: false
				},
				{
					id: "5981d0de45a48a9edc02809f",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2565,
					clicks: 4827,
					impressions: 1011,
					isChanging: false
				},
				{
					id: "5981d0de999c02fd15585678",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3165,
					clicks: 5202,
					impressions: 3229,
					isChanging: false
				},
				{
					id: "5981d0de66db05e52b368db9",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2684,
					clicks: 1665,
					impressions: 3768,
					isChanging: false
				},
				{
					id: "5981d0dea6fd86143db9f27c",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4148,
					clicks: 5274,
					impressions: 3197,
					isChanging: false
				},
				{
					id: "5981d0de72f682944dae9a28",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 934,
					clicks: 3571,
					impressions: 1200,
					isChanging: false
				},
				{
					id: "5981d0deb160fd1200de9037",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3043,
					clicks: 3565,
					impressions: 3811,
					isChanging: false
				},
				{
					id: "5981d0dedfef8a41fcf89570",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2349,
					clicks: 3062,
					impressions: 4846,
					isChanging: false
				},
				{
					id: "5981d0deffc4e421912aa4cf",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2216,
					clicks: 5401,
					impressions: 4637,
					isChanging: false
				},
				{
					id: "5981d0de09e3ce137fd9700c",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4388,
					clicks: 2526,
					impressions: 561,
					isChanging: false
				},
				{
					id: "5981d0de487e00b8adfe8ccc",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1682,
					clicks: 765,
					impressions: 1753,
					isChanging: false
				},
				{
					id: "5981d0de71bd81cf1df769d2",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 5336,
					clicks: 3489,
					impressions: 1612,
					isChanging: false
				},
				{
					id: "5981d0de3f8a60ddcb4c4cf4",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1359,
					clicks: 568,
					impressions: 5143,
					isChanging: false
				},
				{
					id: "5981d0de17165a605fb07da8",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2975,
					clicks: 1986,
					impressions: 1825,
					isChanging: false
				},
				{
					id: "5981d0de642e8db3f5211bdb",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2330,
					clicks: 2537,
					impressions: 5046,
					isChanging: false
				},
				{
					id: "5981d0df0aa2683d94bc91be",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3630,
					clicks: 2454,
					impressions: 5148,
					isChanging: false
				},
				{
					id: "5981d0df5b18043ac261a82c",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3131,
					clicks: 663,
					impressions: 5326,
					isChanging: false
				},
				{
					id: "5981d0df482d89095a2a6eab",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1221,
					clicks: 847,
					impressions: 823,
					isChanging: false
				},
				{
					id: "5981d0df9979eb2a2ca88fd6",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3401,
					clicks: 926,
					impressions: 2265,
					isChanging: false
				},
				{
					id: "5981d0dfb9cac3e5010bba94",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4881,
					clicks: 859,
					impressions: 1890,
					isChanging: false
				},
				{
					id: "5981d0df2f5123dd665ec601",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1261,
					clicks: 5180,
					impressions: 1830,
					isChanging: false
				},
				{
					id: "5981d0df9819164065fb4a69",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4231,
					clicks: 693,
					impressions: 2354,
					isChanging: false
				},
				{
					id: "5981d0df6cc935315870df74",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2975,
					clicks: 5430,
					impressions: 3700,
					isChanging: false
				},
				{
					id: "5981d0df048bc1952076ffeb",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1375,
					clicks: 2301,
					impressions: 1704,
					isChanging: false
				},
				{
					id: "5981d0dfad96dfefb7631cd3",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 606,
					clicks: 4571,
					impressions: 4164,
					isChanging: false
				},
				{
					id: "5981d0df74b02207e9dca2f9",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 817,
					clicks: 2210,
					impressions: 1577,
					isChanging: false
				},
				{
					id: "5981d0df6239d5148879eb83",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1878,
					clicks: 2783,
					impressions: 1171,
					isChanging: false
				},
				{
					id: "5981d0dff105aafedffc0b1b",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1205,
					clicks: 2557,
					impressions: 5556,
					isChanging: false
				},
				{
					id: "5981d0dffa3c5858f4eef572",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4076,
					clicks: 3466,
					impressions: 1059,
					isChanging: false
				},
				{
					id: "5981d0df603953a6165d84c2",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3231,
					clicks: 2454,
					impressions: 3295,
					isChanging: false
				},
				{
					id: "5981d0df9526c6aaf1607894",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3769,
					clicks: 5143,
					impressions: 4651,
					isChanging: false
				},
				{
					id: "5981d0df19f5e43e34773b7a",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1684,
					clicks: 3047,
					impressions: 1928,
					isChanging: false
				},
				{
					id: "5981d0df243fbde82a4073c4",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2100,
					clicks: 3516,
					impressions: 3567,
					isChanging: false
				},
				{
					id: "5981d0dfc05b48b345a08cdc",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4945,
					clicks: 3659,
					impressions: 2895,
					isChanging: false
				},
				{
					id: "5981d0df72183888854be375",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4333,
					clicks: 2196,
					impressions: 2143,
					isChanging: false
				},
				{
					id: "5981d0df572f1cacaf524aab",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3183,
					clicks: 5027,
					impressions: 4161,
					isChanging: false
				},
				{
					id: "5981d0df780fc6bb4c619757",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4428,
					clicks: 3794,
					impressions: 4008,
					isChanging: false
				},
				{
					id: "5981d0df77c5d38dbed3059d",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1106,
					clicks: 4307,
					impressions: 2179,
					isChanging: false
				},
				{
					id: "5981d0df6bbdfa3114eda14c",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1400,
					clicks: 1991,
					impressions: 2043,
					isChanging: false
				},
				{
					id: "5981d0df3eccd733a5cce0f8",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3341,
					clicks: 2553,
					impressions: 4096,
					isChanging: false
				},
				{
					id: "5981d0dfad30e33ab29e9a41",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 4377,
					clicks: 2002,
					impressions: 5406,
					isChanging: false
				},
				{
					id: "5981d0df921e4eb92c68a9bc",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 873,
					clicks: 3746,
					impressions: 2455,
					isChanging: false
				},
				{
					id: "5981d0df9f3ed5f04aab4ca5",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 5326,
					clicks: 4749,
					impressions: 874,
					isChanging: false
				},
				{
					id: "5981d0df622258c61d23b688",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 2358,
					clicks: 2857,
					impressions: 1804,
					isChanging: false
				},
				{
					id: "5981d0df963badd00c4c3652",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1960,
					clicks: 4347,
					impressions: 4865,
					isChanging: false
				},
				{
					id: "5981d0df0d2db5975151c7da",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1771,
					clicks: 5280,
					impressions: 4483,
					isChanging: false
				},
				{
					id: "5981d0df77ec17404bb90518",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 3241,
					clicks: 5507,
					impressions: 5266,
					isChanging: false
				},
				{
					id: "5981d0df912999fe969a7537",
					date: "2017-07-05",
					networkName: "TVZAVR",
					requests: 1229,
					clicks: 2381,
					impressions: 2535,
					isChanging: false
				}
			]
		}
	};
}

/*
 export function fetchContacts() {
 return dispatch => (
 dispatch({
 method: 'get',
 url: '/api/contacts',
 data,
 types: [CONTACTS_SUCCESS, CONTACTS_LOADING, CONTACTS_ERROR]
 })
 );
 }
 */
