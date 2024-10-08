'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "29e0b5cbd385c3c9a899d6d7b5c6df2c",
".git/config": "7b3697de5c4f2bcf86ec6f1533c9f5f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "89d01b8f82e2f4a7ead551931e3e7e27",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de082cb1e03d5081ffb6d5c9e6dd22c2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e79f4ef05301bd13183428470980c822",
".git/logs/refs/heads/main": "e79f4ef05301bd13183428470980c822",
".git/logs/refs/remotes/origin/HEAD": "59701c3e63a89733e5f56ba994f60167",
".git/logs/refs/remotes/origin/main": "aec4e6139855fe73ae11a75b1db5e9f5",
".git/objects/01/533fdd405664d1f2cabeea8c368d12f402b6db": "70fe067736c19ef0f2ffa441d28a8924",
".git/objects/01/9cb0a04696ff63a7bd912f57c080acbb7b7fce": "9b4d2e05ef185954bf722edf71394183",
".git/objects/01/af4e5ccfe1c7848e71edf59529c745e34bb515": "e8d2aa911a0418484cd96f931148f186",
".git/objects/02/2bbc516b5551df580b74e1764239509a9fc8f0": "e6b578f3a08de6e5c31f82f126425976",
".git/objects/02/872dccf6b6310bfd7205247874ba41df9b2181": "3dbaf76b12f57cf2f7f8e5ffe9067e42",
".git/objects/02/e288ea7dd06f287c0f40319c811b0448880714": "bfcb458204e5ece8363f9c34130c0e87",
".git/objects/03/0be3da4ecade977bcdc10326e9fe4751efa44a": "7643a5d0ffab30e97663dcb4e934eef5",
".git/objects/03/124826599e385cee1ca21772d7842f83341d52": "752792418e436aa4e518f5e11f0060ee",
".git/objects/06/7b1ec05422ad7a62c0636b4d7282a8290fc812": "2612825f0ed2f987c4dd2efa98f48462",
".git/objects/07/86d610358352835cad9ed1a2e28015609e0a0d": "78bc408128319fc2b73001794373b101",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/62ba059225ffaff5b2ae8a476d749e477b58f6": "de894d7d97cc2b94bbf12cb00f17f771",
".git/objects/08/ce500e44e5956621c56626fc8e74cf636c2a90": "ad77a360da94a93b4d96cd4cd9cf8396",
".git/objects/09/6ff1aeb684093f29375116cec67d6412c9ea85": "c6e159fd9f4cbb17824a147d635e28da",
".git/objects/09/720627deea393a96a1e1e9c434abb56751ad8b": "a320e8f279436ddd2891a99e93112492",
".git/objects/09/8e1cdfa6622f70ba9c81e247b7bee9da33c75d": "6aab0829eef2cc470921f664e536ba9b",
".git/objects/09/a700e09025ce5f911fc9ec5fca1e3a8163a26a": "40e1c969433ab65a75ba72c2ec5ead5a",
".git/objects/0a/88d1f22ffd03dafa7bd87fa0ac3c19559e016d": "9ea3d816dff955ce90e674b4ae0fea1f",
".git/objects/0b/197f970ae1a0591c43b755082d7dd318e3ca84": "408056593f1a6ba78a9c73ad501317ee",
".git/objects/0c/0ef3b24a2328ada3fac1796910d7d840ff8e0a": "258ad79c86c90bed33166785b6013698",
".git/objects/0c/951ecd01116ffb6c66e0f04fa651d487b40fc6": "e9c84341f359b92d6dda0a066c8ea3ec",
".git/objects/0c/c8cc9e67418a649a184311e5c1cf90e7b0bb1c": "f5fb7417fba6e5e82272830be59ba99c",
".git/objects/0c/cb194d4426cd6e13206304c1d0cb2cb9aff15e": "82f78fa734ae5a44b0cb75bc9d2bb8fa",
".git/objects/0d/b10ca7cdea828c1bf68f92d797149711230486": "51cc95089cd819413b3ea20237a11c05",
".git/objects/0d/eebb36f64da15177511cde3d8b68214e8ff6d6": "04db48d27b5fb9825085ddfde74cc895",
".git/objects/0e/42aa0daeb2df7637f4ed43f0683e087a6ef357": "d0b0d5c32f07c09c3b71e20aa825a43d",
".git/objects/0f/029bdb76493d140f31878a27ef91888dd31d75": "aa9344fe758c4d580d0bc659a8909866",
".git/objects/10/0a5112cf3978a65fcf3869304aef1415ba79dc": "e24cb81b0272f9107a37502d7d067550",
".git/objects/11/e4880a4dade645b00fa96a18fe4558279c4f65": "8ab9e07e005498134b104c3bf20f6068",
".git/objects/14/48e9ebe5126285c09dc9c067208b2413d0025d": "6b8d9fd41e48e8e189fd5cccb63ad470",
".git/objects/17/918d483c087efa3c7f7fd083f996f24a053439": "c05cc53ce4ce49580c574c74a5ca1f75",
".git/objects/18/7695deedb4f5b96bbdb4cdf331d135b668ea9c": "623d6a7d30e5877aaa56e304620d09e2",
".git/objects/19/5f106526536c11cfcac619288e91aa6302d44d": "b95c7c0846eb3a1014467dd604c11cca",
".git/objects/19/7288ea1301812940cc21c7ab015fbbca178b38": "7ee6a52e5550cf7c46d322674b321e3b",
".git/objects/1a/68b6a5a62d1de3691aa0788f1ff4d51e94a7cf": "0c800ca487eb707aabd8e8bbceb28484",
".git/objects/1a/a640feb1f8ef3ef65a020902533c6e1badbb51": "607074bebd796dc2ed7173c662bfc372",
".git/objects/1a/d04854b7e9c836e53d2e4d45ddf419bcbca983": "358ec42588bb291b3bcf241343b949ed",
".git/objects/1b/3667da14cab919e28a3cdd4fd6db517bcb4654": "b7ee13343c8b7ea18a6c187218187c32",
".git/objects/1b/7b8b3ff657967160999a5c2f47452b39ca8bf2": "516e561a3fb4307775e010fbeb626113",
".git/objects/1c/9865f09a3720f61b6909f239665377c1bde5a7": "75e9b34684b40aae1f01df8b9e3473b5",
".git/objects/1c/a2ce448c72a791a09ff4742961f01cd3546e50": "6615a5c18ec878edfeb8dc885301bed1",
".git/objects/1c/cd71f5bf35b2b73004221f5c9764fa40ce2cbf": "84fd52fe6e0ef911641c43854876ad2e",
".git/objects/1c/f5cb4cdbce3f12faf7b7d94b45122bd5705c0c": "03ef3a516c5f2e51bccfd84c9c8da66e",
".git/objects/1d/36158d4a586ddb506a250516074e4f26443153": "fd282fda30a2be039c5681d5774b390c",
".git/objects/1f/2f6810e485b352dd83e85ea584df176705b45b": "6580a80e30025d5c751ff72b266d3d2d",
".git/objects/1f/ad7e2d3e35b71f95130a544387ca63d49838ab": "cacfae986327a3eaec56b3a93e9b5f6e",
".git/objects/20/3350431a60acabc71cd23d2f1d0e3fa88cc30b": "c013aba69906ed513b7c238307f18f09",
".git/objects/20/c39eeafecea2fb49e89393f2b981a43a942f74": "ad654d027bf086711ba32291593ebcca",
".git/objects/21/f41ae1760f88df6d7eefb98bae29c8c1371108": "c3ca30387c26ee9d425418bf500d501b",
".git/objects/24/5cb03ed271da0a47b35e9798d67a189f48424c": "c22961b04cf18e2139254155469702c5",
".git/objects/24/61e43f18b3d5d20d216c19c3b3af5a33314ee7": "e8e2cbcbb0070609e56fe4fc8180dfc8",
".git/objects/25/17ad1e2f61f17d13386f5ddb8fa9247d1594db": "9f9db5b9d45241e2b18629f1d666de9b",
".git/objects/26/48108580c75b9f19f99ac80fffb95f850e83da": "8736fa88a8ce357b8cec5a5117736e86",
".git/objects/26/5af85edc935bcdff988683dcd1d1a3e1ff0b6e": "fcc7305723206e5ce1125fc8d31731cf",
".git/objects/26/6713f6022e5515bde0b729c1cf1c5b7c0c387a": "b09ad883bcdd5c6098195b0db2123559",
".git/objects/28/db8ccc6d2d366e9a4a5121dfdd43c0df334932": "19ac6da83e407bcfaacb273fd0742c78",
".git/objects/28/f39b0038c0568faeb0a2dce57a00b4b46c5bce": "926d3eda8bc057ef4757deafd146b54a",
".git/objects/29/1e16cdedbe62bb6bb2372492a4a6d1afa53378": "77542f017520ce5ab2ecf3a074bfca99",
".git/objects/29/7e68e40569457613c50e76e6618f9e35cc8915": "1908750f896b1ba91307983f5ffa43f6",
".git/objects/29/a6fb2ca8074a3986179eeb5ee3bba602b3684e": "241149017b8b2d38c44d5a93c70b9640",
".git/objects/29/ea79114fe643c7fe24b30fd5106199c17e84d7": "5b8e82707fbf8568f85a95062a346537",
".git/objects/2b/2e3aa281693eb8ba6286be7cd25a5296fe0c83": "b65494ca94b82ce179178d9980972db5",
".git/objects/2d/342eb6a161843695f9fbe22b045a932d1ca3ec": "630036caae276ffde590687caeeb8440",
".git/objects/2f/0f48a95709632aa01c109b04fd1b8ad986b119": "13317eb80d43cd85284610d577442dcc",
".git/objects/2f/70c0c2a32dc53da74ffc365e43ca88d252ac54": "91d264875bab6bf7b76dd049e1fb9f03",
".git/objects/31/3c3b7a23dfc6705bb87a5d70d2a74ded84b64a": "b0597c28bebb2f4c2f5ae87d412dcd71",
".git/objects/31/702e158710175c449656d0476147a851b36680": "f9e2c9d99921fe7fc2fb8786ce6940d9",
".git/objects/31/a4188dce49ae18ea78efafe34880e2a6349ffa": "3a29e002e3c40f520e6de3563d0416d7",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/effffc6c823ce38bea859e22083ea122242787": "fbb3173d64b4fbaca4d4b9e97076c4d9",
".git/objects/32/f53454fed12868389ab9efe1d6bde41366f78c": "e6ad33fda43345e9b4494243bc9fd17a",
".git/objects/33/1e6f86737e76947ec9fb5dc000db318e839fe0": "cfb8ad2aa42d4b33135425f8b3307649",
".git/objects/33/c56603eb701b2d42cdb994ddb771956e4a398f": "541c643fefe0d4078422036d97a38d8f",
".git/objects/34/9821eaaddaca8fb44fda71a45cc168c943d0fa": "fd5099704471b60de385aa02fd089e91",
".git/objects/38/f68a649540faeed318b64cb7cf1cf87ffdb41a": "4254fe5bc3c2e7583708ac8e320d8f8f",
".git/objects/39/e2084f51ca2229120679598d54f0ad7936584d": "bdaa50c50e7b5beaf2783ac85e55b6db",
".git/objects/3a/1ed7f7894e09a854884b4d4f9160f3adc13a89": "8a160b491788e0719c5eae701b0023bf",
".git/objects/3a/60b98ba5b0a8b86d762781f8ec5c9a2ab2abd7": "947271053418f3f22ad877c3b69af2fb",
".git/objects/3a/6c6147d09beaa787d0f6453d22096a2a239b99": "5a9e4d2f193fc4ffe19684f877854277",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/7facf3e0614a4e3099fafffe6e6ca594c5c477": "b808e0f8ed67794b2429ba8bd5681c67",
".git/objects/3b/9952a97203c6ae53be3210fdab4e2b520bcba7": "fb8d5853ac5efbd90b07985357dd9614",
".git/objects/3e/1656c97c9812a003c3bdc28b57d92cc6ae4e64": "6cf0e23d1f0d78cac906c1fbc36a93d7",
".git/objects/3e/1a9064e55a62aa10dda2f59d89d6654ce8f6bf": "88be400d1db4318b8623f072156692de",
".git/objects/3e/cca11f9b4512e3354c3b53f355afe62dab6523": "8b435af1c74c09cd8ac930d601dcf686",
".git/objects/3f/eee8522a4943aec320b529c34f676d9ad05164": "6d19ae4218dfc100bd3d8e46b91f7cd0",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/63707ec78fa1e8d9650abf75187cb0eb21d0be": "763429820b26fe8370625f2429276474",
".git/objects/40/df345002ed8006a351718cd5e1b26e1484cd81": "976f8307865d98e2ec8de186d178bfca",
".git/objects/41/06dbf07d4bde9b542836bcc9fe18810d052d39": "79decde4cadbf6c75048cd4912187586",
".git/objects/42/5010e0b448156c5d7fd6ccb9c88473ee6cb561": "15b41af642d0f95bb3f3cfa342a6e96b",
".git/objects/43/353ee44d2d2fea12c1366b13294a03492d4f6f": "1cca95364121cbf200384c41dfa7c78c",
".git/objects/43/975a586618985801b0a8bca50fd8439973a1a7": "a3a868f6773e51ab261e6b642770c95a",
".git/objects/43/b171102706ef46de99919a73c4f8531f6c03fd": "1edc29e2f9e8ba1173de16f22ce16409",
".git/objects/43/b4614432cda39a799f98ee3332603c90c02b7e": "632c9e3415f261de388d7e6a7950eb08",
".git/objects/43/d65a2628b932eead5a752818b5f875b35089b6": "a1b5ca06f2c19fd7dc0d4962a479232c",
".git/objects/44/2a8ad13962451ab285304cedc47be191326bde": "4af4e27b89f2dd1d45efa6f0708dc91d",
".git/objects/44/77c170e21bf1d657e7d8d339aa22701eead743": "10a1b3eb73bff3955acb01deb3ff2a2b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/b28f0db62765252e21da38e191bbc9f572c4d9": "fc4ef2995e8cdaf149be5c41f9a7ff32",
".git/objects/45/6b2c5ac99f6874ba6ffef317d2942f44313530": "f436ee01dac8c5f5e1b8a0cadd7cd12c",
".git/objects/46/1b0a6837df13f56b22dc25e8b9cfd755eaf65f": "270e8c1cbcad8a9eb4e338239183e762",
".git/objects/46/d51feeea7d381bfd4f8efcd5febb27d51081b0": "f340cf86774fcfb6199849c80abeaa5a",
".git/objects/48/51bd54677ba51dd8ff29fc99e7f7b83ace2306": "4b0569adab91cf393dfa9baf24957df1",
".git/objects/48/93de7421351e10ae4846497c88d8bf020db5c4": "b682f3a96ec74fb9963ebbace706364e",
".git/objects/49/d7d90a39ca714723ba200a6578d3ff9551e823": "288bbf26762d1dac86e6f9d98fe17790",
".git/objects/4a/3162b92d132f22b16f4cec53b786752108cd5d": "6cb5ca472e1b646b073e0d4799dede2f",
".git/objects/4b/186011b05eeb7ca7ecd976289a9bd23e152975": "78f1c0594c7feca7ebc8b3748ec14b2c",
".git/objects/4c/1db9e08eb778382bb3bcbfcadecec3d526c698": "c031083418b7852ccab81a57c3e45a3e",
".git/objects/4d/1ad01f09e2bb5c3291d0b562b9025526781378": "a424ac3028d18a40bb7c8934cc423b83",
".git/objects/4e/301b7757740d50664c4ff52aab7e63b2a812c0": "a1652d3a7b2ddf1d80f9d4f8f9673f75",
".git/objects/4e/f9123fed907c45833b77461b6d416d8fc42037": "5dc0eff6f54265f7404a7208e6d4ed7c",
".git/objects/4f/d4049ada0b5c173e0239232c7c38501a84e353": "fd62a20a17ee8834b40cb1755e5c3f48",
".git/objects/50/1052c09c98e7e0a7a3e63a0296bbc154f9ed0a": "c4b84da178403e82ac68caaab3da8649",
".git/objects/50/7f8201567a77107d8299cedb091819fc0ed60f": "6a61a8d961c87bca1f34108fa581f74c",
".git/objects/51/22d6446fab7add9ff57db3ed662ff749525462": "cd4782d3a65fd9b891cdf8de849aa5b1",
".git/objects/51/69d411ad7aab3a4dcd568e58f9287b68413292": "a7d9d118e9a869dca1f09f4384f5d237",
".git/objects/51/a85d5255a494305dfe12c4eaba100782054fc6": "25c2bee482fea4cd916b909799791e28",
".git/objects/53/75b33e7bf986d27ac597a8986752ceb6d9093f": "a7fe70c2e4d83feb97a2539644e53fd7",
".git/objects/53/a02db111b2f4ae19aa8147d84f3f0faab458cc": "f714a9c77ece7da044d9afe5340f3e86",
".git/objects/54/8cce75bd4432cb6c666f070064c7ed5bdebb3c": "1d566e50a4a7b3d47367b5f7fabde192",
".git/objects/55/28a3e5fcb4d70d953551ece1ec84df94d0d36e": "3f977cf08994c56e279f968a6963b0b9",
".git/objects/55/746fc6383d0d30e294ca411d7b7af927b0f8e9": "253c9fa6eade92c76af1b362816e03bf",
".git/objects/55/bb9e0d0b277bbfdac048c998cc2f4e7ae225a8": "53269a23ebab7f5c160113f6c2105471",
".git/objects/55/bbd7075ebe1b13f4c2274797368e036ad21858": "2b0377a2833b58e946df11013974db0e",
".git/objects/57/661ef24dcf894b8975f6bb0c11f30bc056c506": "40dbf030373a082cba6f972f10245fbc",
".git/objects/57/9a51d6465d8712115924fb1d4cdbcbb09a44d5": "11a6359aa38d508d7c640bd12ca23301",
".git/objects/58/314f15faf3234d32ce6b20b84d5b3efa842e09": "2bf63dd2ddb1042070986ce522f84bfd",
".git/objects/58/8afcee61ec73cdd0b7fb3d5dfa6cabb3076495": "0dafbfab3c39e238a1eddd3b4547eeee",
".git/objects/58/bc92d552fd97f6bc3bd9e2fe5e90c8428384d5": "cbef20172d313b4d0f0208e12e5908ff",
".git/objects/5a/29e5cc3ae4a0248ab087f63756fec3d9e230d9": "c88905993e764e2fd8aff66201943825",
".git/objects/5c/84eaadf28001265d531c67b81cab2cefe764d8": "5ab6986eaf5bcbdc891293046f92b9a7",
".git/objects/5d/3cf2cd60b174d618289e6b3d59908ef233a31e": "483263c82307c0d30d41f228ec31a007",
".git/objects/5d/85f7e959a5385beaeb1c4686b31e86e59656f8": "0ceb0af5ebd15bef350061ad64947f19",
".git/objects/5e/3b9ef78ba9ada0723172aba9b49adf36c12df0": "aff82d37c9d08a4d8ffecc2cda29737d",
".git/objects/5e/6fdaf337c024cfe3599751c2bcb0e0289bacac": "4d487f82c8e614f5b7435e58b321c7a8",
".git/objects/5e/6ff3c70c9ad105dc1042ccf055769c627bc9b2": "73a3b6a7c72602d79ef587ea2ecae0fe",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/60/030eebaf5591217ac99ba4954a1b31e9238beb": "97034db12a3c9e82efb91793ad3ae277",
".git/objects/63/12fad6d9aa06c0822070faa82e3c18dd927bbb": "fcf82bfd3baaae8e0b02df3182903145",
".git/objects/63/81ff217e85c92e745723f08713423a0e643da9": "4c3da6031c282ce047a4a853c5d2fba2",
".git/objects/63/ead0041dd67a9d3b3d308b18fd1ab90f178a9f": "febcc5a77dd79ed67c9e72d3be9c2f13",
".git/objects/64/2aec0d1add4164d506ac488d84f7f8392eefd1": "da487fe11e5191fe411fd11b3412c182",
".git/objects/64/464e6b4cb9d3e0706d27b12f830cb81027aa83": "34bdd26328307705e3b894e902645089",
".git/objects/64/c76e8ee6d642aad3eec98cc689292fe3a7b117": "c4456e3de266ff0d88ae1280de9dcbc3",
".git/objects/65/513d70e8a7d16169d867eefb9165234330a947": "7a33f15f8afbb0171cdf0ddd6f4ec9b6",
".git/objects/66/49d093a072f869d6aa4020e87e76f49e349414": "e763eb7ec0805ce4eb718808f8c5ee88",
".git/objects/67/f829f5fec660ea1c48ee88600561f6d16ab994": "4a787ea3f2cd2b26f2b015cd38adc4d1",
".git/objects/68/38e6c675c76e1d7733c426b37e330fba6b3de3": "b07ef343c08d97113c8caa063531d9e8",
".git/objects/68/78eb53c75655daf7967f9dab31fdf682a19b9c": "2d5cb9ba92124f809a376dc3526e7128",
".git/objects/6a/607668ba1c83312672f0d8e1e2c90200bef678": "1178191d3d6edef165e18dc2e1ed6c8f",
".git/objects/6a/efd9d10eb8f6aa49da8dec0445da65aa3b83e8": "910b10932c753cd43aa16952eae33182",
".git/objects/6a/f69e51d62b4b339872c7a867c5f6a4cc635d27": "8519ab7f2af86dfd7b4bc98578886f0d",
".git/objects/6b/2226368dc7ee7a1dd338f338ed98af3046df66": "1aa92546a6be079c4cfaf343f2ce650e",
".git/objects/6b/e537e3a1350ab711da4c346e1bf39dcf7a57cf": "0fb0d157b80354fb9bef561c9686e37c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/ef566981e3040ba631960cb6b306393490497f": "02c820cc7ff17475f903b9d45ab99b3f",
".git/objects/6d/0b95f49281661b69e8d4d014b27a8e3ec886a4": "b41741d8a620f49a09c5d8441f65a156",
".git/objects/6d/fb32eb7fec5800e2d34cfa6ef1a93f0e7f4a12": "cf210119ef4808f3ba24016bd370d115",
".git/objects/70/a9ff8fa61795c487b4d5409703a07c67da9552": "2ef0ab3ea972f7522d1a09ff0cc9b1e0",
".git/objects/72/0aa547c47be558f83d3238da886a6523898a01": "67f90632a4b8a1cf939c55f37c3e8cc0",
".git/objects/72/eccb6cf4b4d340bc1f5f1440e3bfb550dc4803": "f28723b6c5ebdf6b93dcf4b599795f4c",
".git/objects/73/66c2360e52622d725f8dc6222d070d19f947f9": "850faed95f458b2df912d6d5e4bd91f0",
".git/objects/73/82760b9a83f138389cd42746833221e3398e2d": "ae91c4f1728c2f7c486e70a6b830a97b",
".git/objects/76/bf20296e99660dd2f83aab87c2630ad7d400d8": "3a4907edfce2780b24b8fbabf057dbcd",
".git/objects/76/bf99f22f8f5a85f2338486591a980be9467ec4": "6266b407a22be1c86de6203aba1f8d56",
".git/objects/77/8cbf6ff9d56e1bf6d47fc6aceeadaf07520fcc": "5cdce4acf3a5db1087bd1475e5b09c69",
".git/objects/77/f6627a275b6bed886f93a046fa7e94d1bcb58b": "6cdccc5b0d65a0b14a40b9ff8081a0fd",
".git/objects/79/a88e35dec444aa96c0e24ab80492a6ed326c14": "87bdbe5eba8273ba42125a32edd08d4f",
".git/objects/79/d67d0af44c278a8d06882089710cfd9fcf9ca4": "e05b04f72b4646f09d005ce28d3c58ca",
".git/objects/7a/c9351809f75adee9acdc99e76e22e560466bb0": "a035cb89dd940d923b2b2c72516e1cd0",
".git/objects/7b/92400c50db9cb0bb7d2a46bdd8de1d9d1dbfdb": "37f6c25c18c4e463106d38d99f923a5a",
".git/objects/7b/b239c9d6b0914095f88440337499f3664d2653": "d7082ff7bd9047a7825544ec1715f318",
".git/objects/7c/663c3dd061f0c86a4d16b4bb7d827a73958baa": "8d47e15c9313d1a9a4da129ffc97987d",
".git/objects/7d/111f032a41d0fed30bb81cd994c47816b99246": "0a0779d650eb27cc44ea6d94e8ad501f",
".git/objects/7e/0922fd8e0ca9b7174b105d8791f35eb83e403f": "61928b8be552d323a2e441dc9ec8bf73",
".git/objects/7e/5db897bb12a4b85a4258d2210db256aef76b0c": "4506f20213cb0d19fb6d8ed4adc86ba8",
".git/objects/7f/49e634c2c7b33a536e1341404fa95a312a4108": "46ce648feb45c740877e587082c72404",
".git/objects/7f/ff80007f2abb751cf387eb0a6401ba5bf4a5c2": "f4d51d119006db15df960c8d1d9060ad",
".git/objects/80/6a641c65785dbf6ea37fd252051dce9f303575": "854a9274d1464079218cad2eef9fb659",
".git/objects/81/5255ff396c00d5c2bc7c54c968d6ad584f9f92": "0141a75376277157f379bd7c53ec0f5e",
".git/objects/81/6329eab0d17a856d615a89cdf155f4748a3db8": "4fb7dc1fc6ab80a03775d26fa7a6cd1a",
".git/objects/82/79e5e1df0b72fb7e02d7ceefe888c37990fb02": "fb0366b6ef44c3a9acd92f22957a36f4",
".git/objects/82/b80beeb6c549c4cb6d261d11ee8e5d40cc08e0": "13ded152823e7cd9154811fcb0081740",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6e852f3f32941f98a603ef4cedda8833aec26c": "4b299b1d1fc3f88a149d52f14ca58dd1",
".git/objects/87/f44aed880670611a3ad4b79cf4b699ce7c8cd6": "f344abf43ac14b2b2b621f90c44d6ffc",
".git/objects/8a/9ef5c683f8eb8299d0729a7500651d8fa823c7": "fb8a17fe3fa7accca53eab93257bafba",
".git/objects/8b/07a7f0b3d295d7d1dc2718b981b64fa92990f2": "70f62f20b4bb5ebcfb794b0d95a05158",
".git/objects/8b/2890089ec790c5aaa477d5fb1350b32920d193": "f6bef9082ba8ee6917d3ba8d00cbfc1c",
".git/objects/8b/2af49e2218bb6471b739bcb45893f3fd293baf": "b4e7b695f9274f7edaa3d82ce4dd9d19",
".git/objects/8d/0964ef2bd45acf330672f33abf38924389345a": "ce72bf3ba3c259b45e412681ffeb3e82",
".git/objects/8d/3a30e1a04a092486ea00c8ff09c601667a86d2": "07e747fb286d397ae16e71eea22218d4",
".git/objects/8d/8c3577ffbc0b31d28b3d6fe75579fc7a56a418": "298f981f17770bd5adf453f93f057121",
".git/objects/8d/96a022166f35b25d6804d9cd87dfea57594ca9": "d0fbd11b8409d58e9badd65250aa4cc9",
".git/objects/8e/42b285ec26dddbc9ed769453d664c51801c027": "3f7dcfd348daad670f71340bffba0fef",
".git/objects/8e/5d0439bf6ce3cf430c35b25d9f5c1481a0c3bd": "9473e9e66a05186c9cdf146c99cbf74a",
".git/objects/8e/b42018defdd3b1bc366623f9ad30f065fa762e": "fe5d39f31ed73f25822233fb2e1c3b7c",
".git/objects/8f/3e7c8c6cca40d47a9f69f95c25967049af175d": "57f8595dc417f4bb90f96b9a45d8a506",
".git/objects/8f/3fd164237997f0a2f51334bc25965e1e4aa430": "06a5267dc9ea8f2f108337497d2fb977",
".git/objects/8f/b1a1d575253125fcf7147d86db1eb6c7e61937": "057d2ea5829f0d916a6d628813b6332a",
".git/objects/90/959cfb52f5875caf1d7eb4f4e93bbc15cd0f88": "412e21004ac9e7037fb38143f9a97617",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/ea50c2bf1ecd23ad65bdf903627cd121004f4c": "4bfb6d63f5aaaac094a4ea332ea7f01d",
".git/objects/92/58afd267f662790711ad647cf2a4bc154ad26f": "b4fcaa80dc1fac1637c6ca4618c5d23e",
".git/objects/92/fb68cfde7edca48c5dd350c29343d0c6671640": "888eb276b54dd05a32f9a47d890f1021",
".git/objects/94/122dcadc4169194527cc35f970644b87f704aa": "64d8bd242007e115d1a52cd1e7e9be11",
".git/objects/94/5f06e435fef4f8d5e24dbd0fa898b0aa3d2a37": "88081e06032ce5e044f76ac5efa5485f",
".git/objects/94/d8177a38c5295c8ba4f72c88c6dcbcf586f53a": "6b131fa165531c92d7246a619dfc1ffd",
".git/objects/95/04ff1c82aef8421a0b318b321d5eeeb349cf5d": "4c188590aa24b541d030053436b671a8",
".git/objects/95/3af6b07b587a717b22daf8226012e50ac3e8ec": "154a716c053bd03c91374c1dd4bc0351",
".git/objects/96/ab09eb48c445b23587acf5ecad2ce30874f68e": "7d3c91823be3ec4e8a61a788ec1fee43",
".git/objects/96/ec64d1be1281eb0268796de37827e98da7d1f2": "b0ea757dba0fc979ea25e3e94cbe4e3c",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/903aaf988bda563fd0e68e9979efb99b7f205b": "4af59e89a75fa2b76825093d952284b7",
".git/objects/99/75afe80bd2934f92d6dceb9e7cefbbe18b5679": "763d8f1d20629127ff4c081b50a07953",
".git/objects/99/f8c7f9a17c4c794e64fe9a8365066e44406c2a": "21101827c8782b604ac7039909a31c3a",
".git/objects/9a/09bfee8210149eade02f3605e87a7906d94e2b": "75c946b0cdcfa542800d652a0cbaea33",
".git/objects/9a/e6a0b5872f927bd23225baf35dc62af820b137": "c03b65cde5e2e7286df1f55565c18172",
".git/objects/9b/1866a03ba9489935ce32ee7c504647e785712b": "41dee5011034c1a0936630c731fcf9ae",
".git/objects/9c/8b4652b3ec70d28766e5f1dd58508e32c24ad2": "27ddbd009776c41293fae50cb0e6d450",
".git/objects/9f/1b5137e873d727f7a808453c9c4ccf7d5dc11b": "82e71068603ccccf6cede64b17f86d9f",
".git/objects/a1/c74ecd8dcf172add3b7c61cf2f523cc9eba1f8": "ba6bdbede08987f23bb75efc8544cfdf",
".git/objects/a2/2fd7b58b58e9e4e962100ce755fde434df25c3": "9f6791986b637995c019b56d06a1d480",
".git/objects/a2/3810dd45eff715c14581d8b7cf067ed466b14b": "385cc2afbae42c9e65c2b154cbc51dd8",
".git/objects/a2/4abf679c6b03bd31910f780a3e11f6acb01f20": "234e59d2ab5d7acbc4c4bf8895fd246b",
".git/objects/a3/1d454fecde67b22a70c42884e48b4be0aae95c": "3051b05bf411d3de59086a38539fe939",
".git/objects/a3/739871b3fc5e07d0c841f673785a3d953bd0b7": "31ed82593291c9f8f654a39df7cfa192",
".git/objects/a3/747bd2eda040b8d1d88858bcb51abb6fff7ad8": "066665e52c5afece83118773bc8cd610",
".git/objects/a5/13adb480f1e4c9b41e38ec03f3b01848ce75f7": "4c4a5b660069a4ca7c77f52aded029f6",
".git/objects/a5/456dc442e8c3ae3d7e4ad967e61626ece42a42": "05eb2f7bb2e2afd28df64a5841de1508",
".git/objects/a6/2edf2fe0884859f12b0cc6d33752d9db5311a1": "d8dfdf1f16df1dc6580de8524b1b3d13",
".git/objects/a6/c5049f461c314735691d5c9e990dc74f8caf5f": "7a1e7d8f0744c3038134f0bdc87beea9",
".git/objects/a7/5f2957f3762d817e8fabd04a41f4ea75b184ff": "005f9c7651023b8b5e2a4ea173a97004",
".git/objects/a8/929e132cb8314812d6900cc9d21dca3a03e6a0": "fc8fc0216a7854519d0202a2443e124b",
".git/objects/a9/026cbf4ec560cfe5dbaf3135f7a0a57ee0939b": "40299045920b11e3fd827ef863c5517d",
".git/objects/a9/2b9c73d6b9478a5e3d7b6aab66418337157b8b": "4f45773a53fa81cdaf8617ffa3a568bf",
".git/objects/ab/049dabefb8be6b7c9f19ebcdba8207a2178bfc": "aaac49fcf85284abf772fff1029f1183",
".git/objects/ab/8cc08139c0b6157e4211eab4803bc7bc958f16": "a9352efb2b3271504fbb60b2acda426a",
".git/objects/ab/a40c9d4c6974476f92baec04f7c62553ff2bb1": "e7593ae52512b7ebf1061b31f29f2928",
".git/objects/af/14fcb7d35ec0de8c80c3567174b70d7ce0f45d": "824b535e665586a5429efccc8d2b452b",
".git/objects/af/7f3a5bb2b746b42d515c4e9d709d44b436bc7f": "44b581ba821afe4c6ddf3ae13b06066a",
".git/objects/af/c8c16640002634e77d2e52b34fd8b28e705929": "509386d21fc12211d7f861237dbf2eaa",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/dab4a2e40ff0ea9ddf188105b4c3c50905ab03": "76214b150146917c010bf7022b7f6a9f",
".git/objects/b3/8ac906832bbc274970ea9fad87c08c469aec05": "7e9c2a9345fb85017f0bd5277f2997be",
".git/objects/b3/9fd02d3a0b713a2fbc051bba790f289c683977": "08a26a26e57c2402a97793292509616e",
".git/objects/b4/9bcff7f0d3ef7a403e90c626e4877bb753af46": "838b3bbe029c295df891138afed69e58",
".git/objects/b4/b624ec5c1918e1a9d437062db73e4cfebaeb53": "004e5d6d08a7b8f800b6298737bb75f9",
".git/objects/b5/99d9a5c511bee0733ce3929119ab32327aa3af": "745485100418244239cdb985ddf9beac",
".git/objects/b5/c5724757bc623a1052daa52a8ab061d75c6659": "ba5313f32f51af8a2b5e60bfbf1f2b4a",
".git/objects/b6/42bf6309355c60d11ba8abfcd35b9b31a14d08": "0a971657bb7e0f301f7d38782709a873",
".git/objects/b7/45703742fda0de54f823f2bbb754928358e54c": "5a763e82fb8cb73830a8e0f3160d98cc",
".git/objects/b9/900d2e3bf6b65c373fa3735a7bbd1883b21142": "26714c7f544866d87678ae850c7122ff",
".git/objects/b9/9c9b995a7639d4dfcaa38cabf78af6b6916bc1": "c2b553e390581b82502800e3f41843b3",
".git/objects/b9/abf5ff5782f9fe1be352420bf784d16a2bcc2b": "fc28323597aa64037d7c3dc7d988140e",
".git/objects/ba/2d96405093a6b3725d0a26f597d2721cb4eb79": "643eb4c94582f2a73deb08071e79bb21",
".git/objects/ba/a193cfbbcd5007db325cef456b0a7e79f7b186": "7bbfde7a9019503dc33e1c86a09cfe92",
".git/objects/bb/80f38cdaa2a9131d711ee3a860f03c0b870176": "32826c54ac73761d8fbb391df43ecbca",
".git/objects/bb/8200903b7b7642d03aafd96877cc544d388fc6": "ed6679f84a5c07f1b7d0720087a5575b",
".git/objects/bb/93a6bd5db13c99619c1d828def258893aca1f9": "0549c457e7514ef37d129236d7a4dd9d",
".git/objects/bd/0d00624e8df41b53238abf0d8d3d99c20ab699": "d01b97fcea88e451defabe7f3fdda562",
".git/objects/bd/c5d1adf9e493942bbe4b89d3fd100a4e2a33bb": "c67f74f1e9a06a08b8cbb547ed78281c",
".git/objects/bd/cfb2901219b9124edcb9c5a8ebf7d14aa7c1ab": "e1394d8d03274c0b71bd1166fd933daf",
".git/objects/be/121ae888ad0d9e65dd63651d06d7b8fdaeb350": "b6d76b10c7b6e5f775e6b1abbbb3acc3",
".git/objects/be/3d0f2d4b58fb5db2e53c06528e56e94181888a": "4863ba65e2869e9813339a3fc76a43b2",
".git/objects/be/43532a5f51c0f99bb5c9fbe3af7c9629f2f71a": "ab9bc56cc98467d995e4106901f66552",
".git/objects/bf/d80c56e91275b89a85bac7645548e9a42aa9f2": "2a0726e3cb0eac48c2621b7feca1f12e",
".git/objects/c0/238993e02a8e2d366873b887e0838ffa7b0e8f": "46e023b0390844d40f6e971157626ad6",
".git/objects/c1/eb363d983f4a09d84f18b4890b43fbd854e16d": "6d2f4886fdc4707e2abc918af60315ad",
".git/objects/c2/5244c43f7e1a7f253a0d9d917244f5be50c7ad": "d71749b3a5eef1d54a780eb36c8ffa78",
".git/objects/c2/6298b2147729df00e6124554f1195d4717d6de": "70ba44cb010348a6e3b20d7d81b6edd7",
".git/objects/c2/730b6472f45c90b6cc961d00561f67104bb29b": "d6d9388d880ef8309166ace50dfc0478",
".git/objects/c5/e3b20ca824a90c6d37dcb565b528ccee822739": "e25d93538caa9b5e6a6ae799d012deb8",
".git/objects/c6/0c315497f4bfcf25d9eafadb8fd5015568a54a": "4512e4d9d2b89d29632ae314d528eb05",
".git/objects/c6/4a29a43c8f2dabcf811d2699630c368be4f80e": "2190151c92e62bc9a42b3a9467b3f78f",
".git/objects/c6/c1ebd84590e4eb2e88c669c16ac8acae856e90": "a4da8b931ede5611b4b112fa9bc6ea3d",
".git/objects/c7/44d083d5509611f4906f52c79b54ea68f29a35": "31f70b27eec19d9706cc2e173a7082cf",
".git/objects/c7/bbbc757473033382df0388af4fa907bbcf3ae3": "22bcab26f2374b72d45b9025cd50b6d4",
".git/objects/c8/74e5ad371cf90ae85c3d47568775e65fd978a3": "f2b26f8770227341e294ff67cdb23abd",
".git/objects/c8/b11afc8e3b45d58914ac50d666c0f50a45dc28": "a015c57c77a373c04a9933bc08efb048",
".git/objects/c9/1a72b06dd196c44e50614561aa213d15d6110d": "792e268629f08f5140842da5817aa747",
".git/objects/c9/9a1117084c25f217de5e29e823486b7aadd5e6": "2db7e894d730edcaf7135ff0f8727819",
".git/objects/c9/db25b1a4177d5b83559a7c5d50b71b17f5edfe": "c85a56fd38432ca6a30ae9b0b79842d8",
".git/objects/ca/50b9054cd12b796373dee4b06e8dec35dc256b": "b1a2ea9e30334b9efd42f48b675ff661",
".git/objects/ca/6272122066fafbc77e47f8ff0b7526eea78d4a": "c5eee8775a0cb46aa9480d65bbc87abf",
".git/objects/ca/ac24be2a8de983bbec4ba984acdf2f69ef0507": "d0705e99bd98f553913b40f5b81aa067",
".git/objects/ce/2353a729e72f80c0df306b03b62fb3e7d3ce19": "8beaf47a8b53a1680443c0c4bf2297e6",
".git/objects/ce/8c7001246663059426fb0a6a3b405d9fd168d3": "b0cf851314edd924f273b108ac719849",
".git/objects/cf/03059862d45b74e4fa5f11fdca888488547073": "1d598ebe87daafdd0c8cb6cdc2fae00e",
".git/objects/cf/a6b824c3df666509f624305c71f700e3f04701": "463992c21c4c303fbf2ad8ee919a53e7",
".git/objects/cf/b5c5db9fcc2753f438443ba11a5aa023d6ee8b": "cbc1e4ff28baebdbd729155b2da08b97",
".git/objects/d0/11db7ea6d47684b9935448bcaf527a6f7e0ca9": "96e3636e344e055fa582b7eff5d54ec4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/7165b2cbeb5f35cb1e981b924798fcc5b3032c": "595897cbfa54a3d7dd6cdbe9f4e44e3f",
".git/objects/d0/c4c0c06ade4f65a2c7b2c421b18a3b6ccc140f": "c0b20557b6698c82d2a33f5da2ba1efa",
".git/objects/d1/76282b1401d6dcb79a8ac5ce578531e919b0a5": "562ba13eba8949af04a1e5fc1668417b",
".git/objects/d2/7b6b410e619273ea8b1f6408e0e1bcea95d0ba": "2e843cd37ab4e97f17d59063a59196ca",
".git/objects/d2/cb5b15033d07231822918db2c9194f70ab4354": "c95411150fd1e41355c5735febc0f4ff",
".git/objects/d3/dabfc8a817fe2a2e1404231d1786035835928d": "e655e73146ebc42af5d3aceadf64eeb7",
".git/objects/d3/f56eb5548ba7ee2485c9d1839833e4d75b73f5": "1bde3e8e3f45bc3ba374969c1e1bbe84",
".git/objects/d5/4b521fed15bf9315920b8dcc48890ea8cf892f": "7165b085f6788d793c4af239ad2cf8a3",
".git/objects/d5/97851a43bd442d6c0e43f16d7f92499aee2158": "4db100d45b18a1d4ca07a5c645cba27a",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/0c33958741a92aed201a879652a9e656d40593": "ccaf0e43d71485f82e88c0c89a6993ca",
".git/objects/d6/9fdff2f08c33f8ad992ff197a0a0222d59d873": "08f81ec9e95c35ad286ad60c06e23012",
".git/objects/d6/a2c9bea65f0c95adc461a45378b210e22b1821": "90c2e34cc0c690d23d3c6cd6ce2a3d29",
".git/objects/d7/1fed7f42e972bdc4257a6147281d65c3554252": "cd1f88b5b1551a8620a2963862739a38",
".git/objects/d7/4bd296676551e354a85a0d8f8c7ff69f4275f1": "ee2315fe5dcd215c0695cdcae411e412",
".git/objects/d7/6354bc2145fefee0fc75f11296a37b6c5ec40e": "a7a0828732e44014509d908f88251776",
".git/objects/d7/fcace199454ba9676e139f3aeba3cd11f29182": "19eafb656f1aca08b83a2e03ecbfb4c3",
".git/objects/d8/94e12ea3ce52dbbbace2ba1684d68871f22135": "6a8f56c36f379825492b34918030f00b",
".git/objects/d9/72917cebf2370fe53f9fdf7bab4e7157c99cb0": "b4096b1d1b9318753ace1767581535a5",
".git/objects/d9/aeaa2b1479622a826bf24ae19eb6fa04ff0342": "8e4732ed00dccba947874ed70ba779a5",
".git/objects/d9/f24347f195fa8ca9df9cbf4269ec6595e22701": "4122c0ef94932fe889455ea025d7c6aa",
".git/objects/da/07adcbe10ae8c43aeed6f3015cf56c250adf6b": "8dc9cabce198fb7783f52585b7d1d0c0",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/3d203605f4c8f0bbe07e2ef969ea446d903389": "e6bd89ff363d6564005e4ce316ace600",
".git/objects/db/48602b71aaf354d15109c2b0a11618b7575f67": "d9ee429ded144769ee4f9e1c2c8df1ab",
".git/objects/de/ae5c1ff7411649358dbc1fd3da73506d05ed12": "c6e38b74d69037a1dcb78b3e49b4d6e7",
".git/objects/e1/f1b893d753ec8aeeb3011bddb83a4ff938bb68": "5a15af46813868503bdc94c523fddab1",
".git/objects/e2/9f2e6db4b5dabee11312707742475d8208f2ec": "3a4906871c3ab39686f07d23deaef4f2",
".git/objects/e4/145048026a1c294185ee69a332a8ec7077cfe4": "17504a80f206798a597dd5fc91090afa",
".git/objects/e4/412dd783b3866f3ebefaf1168babfb06f69386": "5db8d8a67dbc859dc8b5a5962c1522c3",
".git/objects/e5/0f516b8baa9ea776d8f9cc5cbd14e2f714366c": "cbd181d702bf16848f356de18e35c0df",
".git/objects/e6/1b3686ddaa9a5e828a80265a634b0631d9e9e8": "781b663f71d3a02e245076f385a091b7",
".git/objects/ea/446a942e11e9f7ea55a53569b06cecb9b0f98c": "1045af42b6da3f14ed47cf277c925a15",
".git/objects/eb/a2892fbdfed0ded05554058ab8acaf4acbbed0": "91c706aed72d4bee40a0a64e777bbe53",
".git/objects/ed/16fd1e439a254511f4a8796f9ccf4d63eb5d0b": "b67d2a7aae564355e6c43f56949e3931",
".git/objects/ed/25191c418adffbe99e5046ebb30415c14c0092": "c0c4c12dac94d8032eb98dcad7a2fbcb",
".git/objects/ed/4923a6ce55ba6dfcee761841f054c2cef071fa": "9d0b4f4fae857e98f569f5d5c1b8d2cc",
".git/objects/ed/df41010bf17b354f12a6b018ec8f299210abf3": "33bd55286d4259002aa756a4d5d1ce2b",
".git/objects/ed/fafe869e1c350fbdbf867896da78c89e90d4ca": "d828a947ea1f8c7ba225efbc8496fd8f",
".git/objects/ee/12cca792180fd789a22d6d38965d51a5a87600": "11a0853ae55c821e8598d8d254a6afef",
".git/objects/ee/ff30ee6078bd5d0a7b4bc4a6cd7eac67ca8c48": "52edfafc06dd94fe383b0697f54fed04",
".git/objects/ef/e30f6fac110f034958c8b9bcea614e6924da3d": "e7f9c1daed4819b9315eaa2cc5e3689e",
".git/objects/f2/9df57db9ae88188cbf7ca0862ed1fbbb687cdb": "ede3fca1321b1de9bf8807f98f361606",
".git/objects/f3/1dab6342aaae19eefc30c30dfe23257f954aba": "afe4e57018ba81caee1776d71fdb4062",
".git/objects/f5/72a0978989ca36f399c89f570f00b26ed67f51": "423cdb3427c2da613bebaa8949bc04a8",
".git/objects/f5/b425554b308e2c0c9cf84d0df0a44a8c33eb27": "0253260df969b7b0a2f613eeb4fa3b03",
".git/objects/f6/dd9f24551fa12b7e1ee2e0b38f128b096ff756": "500022ebddb41408dec57a595ba79887",
".git/objects/f7/f9317f1bc88280f2aa90b43ccb926cf5987aa8": "3dc56592639406e5a2b370dbdf2feca5",
".git/objects/f8/7362ef74ed90991db8d2fdcb3953466736cb16": "981e1327385652b2b537082663a9f70b",
".git/objects/f8/eeb5cb9f65fba3619fcf3f91b431f51a4be0ca": "ccff0ee2230d154479c67b87eb729d99",
".git/objects/f9/9f323c01366e58f03cd5a1cfbb86bfdc804e51": "790748d0fd80fd3b5f12f6a275a92b81",
".git/objects/fc/7bead9df41a314f512e5b58025a65d6738fa67": "37fdad7494412e9aff5bb55b317f1e28",
".git/objects/fc/c7975c49b39ab773a3d340f68e71ba44d43463": "d0ec803f89abcd35db9c360387fad3cb",
".git/objects/fd/0bb7362975dd8983fe8cda12cdf714edabe6f6": "0596bfcf1fa4287a4134c5a3cab576ab",
".git/objects/ff/26a382962f5f971365ab19235169533b71c782": "460ffb1907cd825251e5f51028c1c2aa",
".git/objects/pack/pack-4978fc7e93abcbd2f27b492945ccf6abd1942cde.idx": "9a7d7e3d71789e57c62b549060b0c561",
".git/objects/pack/pack-4978fc7e93abcbd2f27b492945ccf6abd1942cde.pack": "176df26d7ab6eb5e7bbfd5fe5e854d42",
".git/objects/pack/pack-4978fc7e93abcbd2f27b492945ccf6abd1942cde.rev": "2079501fe52bc399c260271e22692dee",
".git/ORIG_HEAD": "b4c6ddffbc1ac4e462705a87c4369b76",
".git/packed-refs": "cdb3010fbc811018614c62a8ee352b68",
".git/refs/heads/main": "bc8df9b4623928a1357a3b5949db3a6d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bc8df9b4623928a1357a3b5949db3a6d",
"assets/AssetManifest.bin": "1bf7fe2a4dca0110e801113571047311",
"assets/AssetManifest.bin.json": "1118d02b474cd1aa6f797e1d86cfb07b",
"assets/AssetManifest.json": "5bd3dfdb7f8c09b3a5a0ee4d0a368151",
"assets/FontManifest.json": "8eaa9a3ef5863239fcb5c1733030ecd0",
"assets/fonts/MaterialIcons-Regular.otf": "7f566b8d671d92eb53c9630e0dc07573",
"assets/lib/assets/fonts/ChenYuluoyan.ttf": "46277c925406ad304fb7de66c0641ddc",
"assets/lib/assets/icon/instruction/bank.png": "116cec3961ba83682c1d8b4ad2da00fd",
"assets/lib/assets/icon/instruction/barcode.png": "193c8c208b8d0835d057edc8b0fd5bde",
"assets/lib/assets/icon/instruction/cashier.png": "d928e4ab9a09ab1db50102580d00bb5b",
"assets/lib/assets/icon/instruction/download.png": "c87fbb81e4c3e5e483ca795c770d61ee",
"assets/lib/assets/icon/instruction/info.png": "c4451256d004f163ae05024cb50f828b",
"assets/lib/assets/icon/instruction/phone.png": "2d77590a1e8fb9bad18904e9fa2d0aac",
"assets/lib/assets/icon/instruction/popUp.png": "cee78e1823acaf7b2a854b46363bd612",
"assets/lib/assets/icon/instruction/pressButton.png": "7f28d6c2dd23f8a11000ba10729f0577",
"assets/lib/assets/icon/instruction/store.png": "7ed630a2261ea15267e8b9da23fd4778",
"assets/lib/assets/icon/instruction/warning.png": "f9ce0f99c85a0989c0cc83e64bbb48b6",
"assets/lib/assets/icon/others/location.png": "f0456f76dae755d6a83b187469afd0bc",
"assets/lib/assets/icon/payment/atm.png": "5d3a8c613b6be6bbb4bb6e687e02e3d4",
"assets/lib/assets/icon/payment/card.png": "a411e3ec11fb03778098d9abbb73f6cb",
"assets/lib/assets/icon/payment/jkpay.png": "9b9db45afe28cbcf8853e49fec32ea3a",
"assets/lib/assets/icon/payment/jkpay2.png": "2cdbd78db3d3cd4d0caec5a6fada6346",
"assets/lib/assets/icon/payment/linepay.png": "9503db27924bc9e85a4b5f7ddd2dc8b7",
"assets/lib/assets/icon/payment/store.png": "789578e408ce8c538e027589880c5f0c",
"assets/lib/assets/icon/service/line.png": "37b0675d3f782dcca65bcee1d4d3e786",
"assets/lib/assets/icon/service/messenger.png": "0dec4abbc97e10b4ab4c99c6bdb45fe9",
"assets/lib/assets/icon/service/mobile.png": "db49d8ba3eeec30ae37982c1b647aa8c",
"assets/lib/assets/pics/checked.png": "8c87eb81e3961b45d2ffd1e4907dc2e7",
"assets/lib/assets/pics/round_arrow.png": "aef9bd821dc7aa3a6fde91be92ad42ae",
"assets/lib/assets/pics/wood_camera.png": "c4a96b33bb58364e42cf1169fd8a0998",
"assets/lib/assets/survey/surveyQuestion.json": "5f2711d61e2b4ac85bf2e34292b93990",
"assets/lib/features/06_preview_and_payment/view/001_preview_loading.dart": "ffcf49dff32d063a147757af701d9c71",
"assets/lib/features/06_preview_and_payment/view/01_preview_and_payment.dart": "f87bc0a6334e5d3aff53240bd78de870",
"assets/lib/features/06_preview_and_payment/view/02_choose_payment.dart": "a77d0c0720cad1c0b100052e4e97b1f0",
"assets/lib/features/06_preview_and_payment/view/03_confirmContact.dart": "a0e54bc2b11149cfbda275394f9c0be2",
"assets/lib/features/06_preview_and_payment/view/04_processing_payment.dart": "263a75f77413075fb39a52e72a06b316",
"assets/lib/features/06_preview_and_payment/view/05_payment_instruction.dart": "dd1ad3db2583762870b7410eca23562f",
"assets/lib/features/06_preview_and_payment/view/07_payment_record.dart": "baf2b0c4f600503206fad113a4e43fd9",
"assets/lib/features/06_preview_and_payment/view/08_line_pay_failed.dart": "1d4089e2e1bc45d1147429233c9b9598",
"assets/lib/features/06_preview_and_payment/view/09_pop_up_confirm.dart": "e05975320b7afd692e7ec4ce2029286f",
"assets/NOTICES": "f120f34c85e953da0682d5ac438b3bb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "b9e93be3281d1c1a48d570a1fcad4753",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "39c7cafbba793a0ecfa1df302a05d545",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6a9aaf8a2951cf7afbd2ea56bf905cef",
"/": "6a9aaf8a2951cf7afbd2ea56bf905cef",
"main.dart.js": "ce70f0b642b0ccf191e2f62e57615f6c",
"manifest.json": "06d02a054bdf94bd4df92a889136b5e3",
"version.json": "f0b606d5556d3cb7a359e5d4a834adba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
