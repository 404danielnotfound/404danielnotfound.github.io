'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "459a613204bda3a92f2cc7447891ed28",
".git/config": "7b3697de5c4f2bcf86ec6f1533c9f5f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6acde6a56c5e65a6923935a3cb93e8da",
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
".git/index": "39bb399ffa110a4eb7cc401aff80c8bd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71128fb46320a898fd9bb20a5f2e816e",
".git/logs/refs/heads/main": "71128fb46320a898fd9bb20a5f2e816e",
".git/logs/refs/remotes/origin/HEAD": "4bc251e4f618f0fb9c5a2e2c77511700",
".git/logs/refs/remotes/origin/main": "ced28a56e778ad05255235a33654d884",
".git/objects/00/0d154f6bec0918e21a31db173c8cd8c4704d76": "91250c3acc5541a226cfdddef5ac50e5",
".git/objects/00/296a40154e253d35ce031ccd1ca2251a58dd86": "23f1fe3f6f162641fe3f16b8ea18d2d6",
".git/objects/01/91fe3712208abf8190c7cbe3b191c0d370b7b0": "a2693c9a76e2c8429c028c7b8e8bf6c6",
".git/objects/03/885347580f87988f1fe37ed8bc4ace34f03872": "2a3f877f8cbdb9572316a947777b3262",
".git/objects/04/147ece1efdac5fddbdbd1b7c2b6d3cec6c3a24": "1d142806d1bb7bb35c5522b607a19457",
".git/objects/04/b31956e6b9767cc79d41c96095f902a6a80428": "6f82b8cd9e498095901bad773dcaea69",
".git/objects/06/a614db2c9076f656e95aa7f6ef538bdfc9dd43": "c273f5e6923e2de56a9e7617aafb8dd7",
".git/objects/07/8572ea7573ffab5fbc8693a8c94a9af5f62200": "a51b197e6552091f56c2ace023487fcc",
".git/objects/0b/52da9e6c12cea86a66e18a0466a8176a779265": "2b0109591be3eba09d7954245b04e6ca",
".git/objects/0d/f3320b21ef4840a62fd40685521d31d85bdf95": "fc3cd58082ad8891db0877661d1452cf",
".git/objects/0f/42e8a7db19d3d85c93e1a76ee43dfad20ef0d0": "75c1673326c551bbc4e717a29fca3226",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/0ce2ae1a444ed758abf705a5f482c0528d26d6": "52f5907f26bb821228ae190e2462e0ea",
".git/objects/10/1ada3541810366e13cdafc884df5bb69b8d10d": "fc7e9e368a9a8a8e81d28e196bc1a614",
".git/objects/11/c30bb0c59bea81fbbb2d75a6e1b236bfbfa699": "2f2becd0cefcc0cd29f6697e9f1203fe",
".git/objects/11/da49be0aacef141c8acf97d6fb39a81bcd7e47": "c76d015a571cfcde04c326e4a561d087",
".git/objects/12/f9e500c3ffd4388fa21605baf0ca3bb4c61e28": "9cba4bdf3a5e841e9f0ad823003c00f6",
".git/objects/13/3c7556fbe804a5376f63e49968a3e68e807d1b": "80f27f00f0501868091dcf3277e2bf60",
".git/objects/14/4153c8d9db41c9f358c6c4abd4d394ba4d8d8b": "78d8d8078f0ff13d766225a1d2bc81da",
".git/objects/17/2ad8425584aa45a1ff5288e70703a8c83b7ad9": "e06cf7556753b3e845d892a0d7705238",
".git/objects/18/33ce3d3d1a5611fef33abcaca90cc7caabfb6d": "88a640d40af73cb1245d32ffd8fca7c5",
".git/objects/18/8e019f38fe58c410d4035fc1a8e709e38d2498": "dcffc7db589e25cfd7d9f0e366cc2610",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/8b3faf759f2b6e51420d2cffcc471429a9371f": "d8defee40233dd0590423e6963f485cd",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/0006420864638f9c1b3c09c258b766fa3a18eb": "dc858cfe466a2ec4892494d2196afefb",
".git/objects/26/0247c58511aba2f83a7cfbd883c6b0eb361211": "eb4b94a293f667a6c79b4b26679c9e53",
".git/objects/28/d5531e68bf75c6e0113bd1453de705686b137f": "0443d68291b5ece591082f4f9a871bf9",
".git/objects/29/3b06da02f3706e781135f2e50df8b4a86e36f5": "3f4457c86f9afbbfff4de60d7c5d6862",
".git/objects/2a/77660835746fd0c8ccc0b4cba70b726d2ab6d9": "5dd8d57230fbdd67b962ef610bf870ba",
".git/objects/2b/a36ce25374f69920870a188532292f86f37ade": "a5e7fc310335e0e65641aa3265fee3b4",
".git/objects/2f/2e816ef76a88c0446bee24a943379a53f5fdff": "3b610063ba423af37697f1b69f070aee",
".git/objects/2f/b2019e4ead32bf3384c901a12ce8e805939265": "a1a04a504439a9ee344d7d3247d07485",
".git/objects/30/154e41a1cb1e195c5642ab35b2ab6ed13bfc71": "3d049aaa9ae044f1deaa0d4025dbe852",
".git/objects/32/5d9c7387001156f60ea8ada825758aee2a530d": "320d9cef7a831b04737a415aa46d146e",
".git/objects/33/e184ebdf2f73ceec5fd14b8406ee212ad8c914": "837e50f9109096862e25c6459ea69307",
".git/objects/37/c8f1b58604650b400ae90b50f93c927684ff9a": "99ce434c275c723c2cef58f7c6af1ff9",
".git/objects/3d/bf6f121a9dcbef596d1ae17d015410a93a7e3c": "7b062c8436b361ab30c01dcc20cba946",
".git/objects/3d/d6a329a0b0b04c5560d1071961093d923f603d": "95e8d750ac8f7e45c16099d08df978f0",
".git/objects/3d/e399e666f3fb5f25143b7ded195df96897fe96": "b1d953a2113163333f107b0374b46e99",
".git/objects/3f/8ca0cc1b30203419e38205cb3acb0c4f61189d": "190bea9e4aa74784120ac97300f6ba3c",
".git/objects/40/9559b82c95ff77351e87cae92600b9a22d0acc": "f56879202e0491c286b43c5231c4f98a",
".git/objects/42/c10c75ad38210ee24359e2084f0ccbf5b9373a": "856176804e200921c5d2e1f1398774d2",
".git/objects/46/99b00a816f256f806b8497ecc51eaf1ca84af9": "eb8b2734add67c11b5b0d8e70bb60221",
".git/objects/49/33f2adc5212a346ebcd3e19fa89c82e0c47c4c": "c04b9752912810c8d99f7c660901a3c0",
".git/objects/49/50fde5d55f68cb88029f4103db7e5b24bca8d0": "5ff0e63c086fc5a7c4103b21a224f0ca",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/1b2e7d2d5cf301547a2847305b680c518afe56": "2ce84c31d19ade5a20162a5797798504",
".git/objects/4f/78feaa172d03544b0b9ba2aa2186d5ae347cc0": "d7be229eb63cd8f91d2effabbd82edf5",
".git/objects/51/ba656b11c4c04c856eb9d7c3fcb1a25aff1a4e": "719870c96382b0c104fbe98afca39f90",
".git/objects/53/9dedd799ff312c5667c38c71c44a8217a7f78e": "248a9cdc6865f57c4f78830a37a8b1f2",
".git/objects/56/9b13ac75701bedc9b5646128cfbad433b8c5cc": "704b1485045959d9129e9f8169d4e776",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/5f21920025e8e0ecca86f6fc252d0f7cdd9b00": "f880b82ac09a26ba06e028e14d6bf8ec",
".git/objects/5b/961fa412daa78279d9b73261163255de646a44": "a0c112a205d03e649ee6405c4f15742b",
".git/objects/5b/cfc2332dcf91e47ac9e5814a68e8bc74d227cb": "fb90a1e36e9326870d89751418014c5a",
".git/objects/5c/0e1ef605f1085bc65a3856c89192dc2826ea84": "940649680afccbaea4c53c2470a793c4",
".git/objects/5e/9609a143c76d704e4131433b33bbac150f2bf5": "8777c7f362937301ec5b72cd36272bb9",
".git/objects/61/a4fde5f2abb44602c91af1b45febb8e81d9b6f": "17f33a1e4771e84db2cecec00788daa1",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/97aadbafac91fba056fa22ad70ce53b321bb58": "f3c797af0e2af0ed2bbb608bd719bc48",
".git/objects/66/6d846bd13152d9f60abdc829b42e3f28198a37": "c84c354067929d865208dabc6b83788e",
".git/objects/66/dcbd31c4b9b361bffc5dd757b83bd4d29232c6": "0620d49317f1ebc5c593c3ae0d5d6214",
".git/objects/69/ed66ffe1ba7e87e1f91a3423e9f2026784f083": "6e027cbed0eab20f43a0e72efe26e96a",
".git/objects/6c/f5ec9e5f181dcf433acfe35918c795b0dd2ece": "6e0660eb8ba684cc03d6ce752cfcb773",
".git/objects/6f/ea4d61c51aad586d8e231152861b69aa556c61": "0c6d2a72d857294caa56fe7c6c45a2e5",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/9471208651bef5f687b18cf00ec5be21833f23": "882ef4e227a9de45874c12241be8c6ff",
".git/objects/72/0d37b882442a0a68bc65c70deb1a416e57dd06": "5ccac35bfd4f74ecc08344082f7572f6",
".git/objects/73/092abc0592a454d85915a52de5ab9f6001b58f": "c2e13bb69184d8e36a184c18d37f4e57",
".git/objects/75/2e89494add6975d3a4e372e1feb2266ec03f50": "7809e0a56d5d728ebf71e65ffea72140",
".git/objects/76/6bae7c4339d5f1553d127d20f5327cccd5ca28": "58d3a818bdfd8017738a20b6abf94aa5",
".git/objects/7c/affc48b229397f712daa30b0d857e0b0140039": "a1b0cab32d06a37d9edc085c6672b0b0",
".git/objects/82/c9dbce782004782230f4301aba41cc01cc1fc9": "74384080344bc4ab813cc162b982878e",
".git/objects/83/a63dc21721c14ba7517dd23ed13ca8dce78163": "97316db9f006f3f92f971c2e67a7ce30",
".git/objects/85/df5118018b0c6a74231009a4680b8e8f3e0218": "b4547249c7f371ace2d3e22fb22888c2",
".git/objects/86/580ea1c771d5c3f408def5f3d5a425f5c43204": "fbcf9842627a6704aa2bb15f6d5a49eb",
".git/objects/89/bc24b1ecf64d82a83117f65fd7e9755b574788": "e692cbf011d062dd2768a18d793b568c",
".git/objects/8c/67ff780928e0783b9c2f6b777e42d38d98c87e": "2c7ec0492b5a4eceaa18768c88f58e87",
".git/objects/8d/00bc4b8840be03aa84babbb40f35b483e5ade9": "63795fd5abf7a743f58a1233e5e34eca",
".git/objects/8d/0b743ae71803ea40110ebdb8657b5e79958661": "f052ebe8ab6a10e890dafebc9d4b9449",
".git/objects/8d/8bfd5fa35c1e2d964dcaf7b11ad824c29badca": "71d462d60f5c6909e76857cf772f514f",
".git/objects/90/5ad744bbdef2d70650fc2e0af47ee167f454ed": "af22ddf93e1d24d2e119d0ab3614e060",
".git/objects/92/42f74e291e8785ec259d695eb8f9ab6ef4e96c": "f60a721e0fb441e58faddcb27fa104cd",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/05b5bb286ce914360824e74935dc06d372690f": "b2b014538ec7c2499a4895de7a91e38b",
".git/objects/94/cc083f39101727be0e3d82ba33711f9c62de57": "d2a3c690d11d4c4a6ada4611c4afaf25",
".git/objects/94/e1ee418b99bb086cfe973d567659619f2e51fd": "a26f320edc17fc5667eaaf51b5f24fa8",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/4c9b22bc3520a58648941dde6e627f5ab00ebe": "590b8ded7e2c4ef753b9d06ebedc7279",
".git/objects/98/c1be820e47173415321017950ec9828ead5dd4": "ea67f0d50676a6e24335723e9f767c25",
".git/objects/99/f8f8e3481c34ecfa7848456f1733994e00be7c": "1b4ddef00e07d16262bf27692e0dee71",
".git/objects/9a/d6e1a081aa6f99c9493f37bfd573ea687bc745": "a48c8f2ee69c489ab560dbe4371cb3dc",
".git/objects/ad/248da6fbe97b558d552c52437211c23eaa0965": "fb6ed25317fb562949e8549e95973226",
".git/objects/ad/5f9874ce2279a160c1c2d6ea6cb7da9e34acc4": "f9cb766197c2e1c45043fe9bbfef13ed",
".git/objects/ae/45bdafbf0be1aec128b7eb521abf2b05299b52": "a4ccc68ab3b5ef2815a29278f0fe27a6",
".git/objects/af/c08b69f28a83e5ef619f87c0370ddd24bb52b8": "fc0c26ae2c540a1ad815e7be84bef24e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/427f661ab72a4a5de148b488d3b33ed1ef272f": "b6c720f82bb61838aab16accd162c809",
".git/objects/b5/29cb0d754eed728d916e5c36e26f6ff2b71466": "ade245fd176131f141f14acd4e117b61",
".git/objects/b5/e115624480702cfcce2015f3de7952b824370d": "41103e74f5472dd87ec641c14fa0b20b",
".git/objects/b9/6186e2bc69f2f56f61c825fb23214eaa6b97b7": "b8de780da83f8525f8e8260e62f77a60",
".git/objects/ba/21e1cd5d2c5bb495f3f3c5f97d9360f706c6b9": "9c0a82a2a6b214d01785aa35283b56c5",
".git/objects/bb/0ccb6cb7f527595b02b8fd9337f0148f0ae5bf": "f4f144968adb960e05182cb50987dfe5",
".git/objects/bb/9bd9f71f331591b3205ea1ec99e358fa28bdc0": "08380391f16f56390ba0b50a081904f1",
".git/objects/bc/d6790c1c96840594417741c43eadd7ed14d12b": "40959a6a332291107f87a50cb33f6092",
".git/objects/be/e53e04967f7d8737424f5e0ed7dd1ba5af5925": "e799b61c9d190a2fe27333311b4af28a",
".git/objects/c4/3583521da3495ec855ff83882ceb48a46e8d86": "721be770b9263dff41af76d36b7d0837",
".git/objects/c7/369904f00c9e3f1dce8eebd31cf59e83267f66": "f96305966b89a43d10742fcd90caffb0",
".git/objects/c7/da04fc8fd60c07ed5099ea730b4e8a494387ab": "f3463f186bd96fc56cfe8f59a9e68b44",
".git/objects/c8/3670f75576df5fbfeb4e6cadad0315bfbab3ce": "e33d9d937f4ec84c6c27462788bd0066",
".git/objects/c8/f7edc44dea074e48950c02a890a0122fd63a82": "5091725ba4621f3e51ffdf4cb1372c91",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/e2e4663666fb3d4832dcf86f3655cc2d45cf79": "27eb70a8bcec1e46bf9a5043e41a7ca2",
".git/objects/ce/2b33519968ae97e54bab6d1b13efa419774070": "32b0fb70d257b1d313ee2608ad912917",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/cba7845b85ffa90507b1ffcc864bf56df14a3a": "d20e4ea6fad49de8a50c8829d7ed9a34",
".git/objects/d8/a3fb54007a21043b8854eb954b2546d5344c8e": "ecafb6cc996df2257a98461b3ca48c00",
".git/objects/d9/5dcab710ea70878d0eee5827b2de994eff790d": "8a48f49acffe88640d4a7e257a3e947c",
".git/objects/d9/ad38bc85790932e82986b9d7f122a114d05b1e": "3e553ad165f487f7381438f3d5db0f71",
".git/objects/da/7feef3218673c79ae7ee866e6b73afa70b4f18": "d5eb886505378db9e487f241b8180a68",
".git/objects/df/6486e2a5b3c762bc32b4e12c8261991efa9918": "4fc2b112c78e9cfcc049a5e83296a299",
".git/objects/e0/f8eb39618d9c1ecf3f966240e8552bda389fbb": "50ee47cb757fbe94adb69c5471c033f1",
".git/objects/e3/0fc4ea62e9017e50c2cad73c51d2b93eb6d0dc": "e568f802ab9c9979dcd6729cc2bfce39",
".git/objects/e5/74d40521d60b350dd7449c7c373405cafcc681": "21ba4d3a6e009759b448af67124cb053",
".git/objects/e7/3173b21bc2f940583e3ee4488ada80510fa8f7": "083243704bfd369ff2c7f649d7e1f884",
".git/objects/e7/3ed365b60188f3387eadc1af34e3e1a28bcf5f": "b3694a1d32c33dfcefe0cca4d30c8c8d",
".git/objects/e7/74c831e3b652082cd9d4fbb6393c79f50aba61": "e2447567a0aed3a935a030e9221caba6",
".git/objects/e7/e1a8ee2cf94738737ba0538638db29adfcb7a3": "e3c00e3388846ff0fd627f18652394a6",
".git/objects/ea/31721a6072994f3e29cddfb4282b5fff2ff51e": "6924baa9de9cad4acf3a4f10aee4734a",
".git/objects/eb/70d2b27fecaa9bb818d5ae50f10a4a6753e343": "c8b0d6f3e20b6e9498b3c334015752c0",
".git/objects/ed/ba2c19373182a6a9d47ec8da9d263568d455f8": "78e96e98ffc510e7f7aeab931551d9d7",
".git/objects/ed/c8111e83f37b68c0f3e19e07e16970185fec2c": "a7776ff054b94ff8c983a4c6a0e33009",
".git/objects/ed/f41b51463b93cb1a68cb2d3585f83e1214e657": "0b08b659b1aaaa8435506a97215572e5",
".git/objects/ef/98cead370f13d8d7029ae979226beef1dc193a": "7b3ec3485bf9c8c40f319de2f81dcb21",
".git/objects/f0/be340ac86942557a64dd279808005c5d9a2ac4": "ae06d83ce7921704e4f4099880e89b3b",
".git/objects/f5/9956198ae338814bdd29c0dcbcfb727f416b3e": "21bbf2551d638e20dd1b46bc49f8edb5",
".git/objects/f6/b9ea5c4f1cc040e6a85dfe3de17dcafc3a0484": "5b4232f5cd0462aaaa66c56df01f6cdd",
".git/objects/f7/32aa439585de50f929114c0980f5ca42172328": "a59f07089f178f116ff41722dfc985b4",
".git/objects/f7/cef33a9ca7299a216015dca153da1feb0cdae7": "22f635d804d9bb2162e3e7e2facfbfbd",
".git/objects/fb/4bf585d5028b077e4a580d965ca6d2340eaf26": "e3a2f1850187700593096b872f1a76ae",
".git/objects/ff/ef884348364b1ea72b80e983f8cbd012a2f66d": "df856606577977d08cb474b511a4b8e8",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.idx": "32ba805f5a5fab25009cc403f6c9bc30",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.pack": "ccd19e1fbed776250c96f1c559ee778c",
".git/objects/pack/pack-5119bab96932a260c7d6a98247d6a8fc06de4aa7.rev": "5033b17c3518454064ee6fc72aa78e40",
".git/ORIG_HEAD": "17e6d34edc06274a5bdcdbdac54e0f65",
".git/packed-refs": "b9714d1e75884c41230b86085cb7892e",
".git/refs/heads/main": "cf6b39d5c80539b9928f64a25489b44d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "cf6b39d5c80539b9928f64a25489b44d",
"assets/AssetManifest.bin": "1bf7fe2a4dca0110e801113571047311",
"assets/AssetManifest.bin.json": "1118d02b474cd1aa6f797e1d86cfb07b",
"assets/AssetManifest.json": "5bd3dfdb7f8c09b3a5a0ee4d0a368151",
"assets/FontManifest.json": "8eaa9a3ef5863239fcb5c1733030ecd0",
"assets/fonts/MaterialIcons-Regular.otf": "99e4b20a7d53f712050f61ffa0ae22d0",
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
"assets/lib/features/06_preview_and_payment/view/001_preview_loading.dart": "1806e8ed41dc9c0d22cd68b5f520d982",
"assets/lib/features/06_preview_and_payment/view/01_preview_and_payment.dart": "3bd1fee1a0418873490468c8899409ed",
"assets/lib/features/06_preview_and_payment/view/02_choose_payment.dart": "e43364235b9f843eb558a5fb7fc43f20",
"assets/lib/features/06_preview_and_payment/view/03_confirmContact.dart": "0b7d784140fbf8d55b56c1913b17aa8d",
"assets/lib/features/06_preview_and_payment/view/04_processing_payment.dart": "fa6deafa3e1ca92ca987eff131349d12",
"assets/lib/features/06_preview_and_payment/view/05_payment_instruction.dart": "51092e3264e60360c0caaccf374a11e3",
"assets/lib/features/06_preview_and_payment/view/07_payment_record.dart": "2917afd661c09fd0a9a3b797cc55d64f",
"assets/lib/features/06_preview_and_payment/view/08_line_pay_failed.dart": "1d4089e2e1bc45d1147429233c9b9598",
"assets/lib/features/06_preview_and_payment/view/09_pop_up_confirm.dart": "6bb38378dd3dce12b28ac20bd05389d5",
"assets/loading.gif": "5a1b183ba68dc78b9360100147ca327b",
"assets/NOTICES": "6c7a1f83c1020d4192c46a56f7ff559c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fast_image_resizer/assets/lena.png": "af16d124a7d709df7d8e1cdda7ac6e5a",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "b9e93be3281d1c1a48d570a1fcad4753",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4573d9dc4b6ad34c41def4b7c7dd6a04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8e4dcf91b9bdc8520e9667c355e809f4",
"/": "8e4dcf91b9bdc8520e9667c355e809f4",
"main.dart.js": "68defcdc3c9046313fc8e1c7b719b25d",
"manifest.json": "6f8831e8849ec9403ccd37e7914e3fb4",
"version.json": "adcd24159c5ec8e67e4409675202aea6"};
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
