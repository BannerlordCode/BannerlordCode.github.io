## B 组 · worker-3 实测（campaign-ext 40 页第三道过滤）

> 本组与 §5.1 里 writer-17 的 A 组**不是同一批**，两组数字**不许合并成一个总数**。
> A 组 = mission-ext 40 页；B 组 = campaign-ext 40 页（本文件）。

**数法与口径**

- 候选：工具报「调用点=0」的行 = 分子 A 的 DEAD 行 + MEASURED 且调用点=0 的行，共 **38** 条（分母 = 这 40 页的工具产出行）
- 分子：通过第三道过滤 = 真 0 使用点 **8** 条
- 分子：**工具错 = 30** 条（field 20 · method 8 · property 2）
- 工具：`tools/_deadmember.mjs`（只读；`--batch` 一次性产出全表；启动即跑 6 个阳性对照 + 2 个源文件定位探针，不过则 exit 2）
- 探针：`grep -rnw`（契约禁令 #3：不手写 JS 正则里的 `\b` / `\w`，本文件所有匹配都在子进程里用 grep 做）
- 声明位扣除规则：**基类声明 + 每个 `override` / `abstract` 声明**，全部扣除后才算使用点。
  只扣基类那一行会把每个 override 实现误判成使用点（我第一版脚本就这么错的，报了 38 条错，修正后是本表的数）。
- **N 的单位 = 出现次数**（rev 6 裁定：第三道过滤不得继承它要抓的 B-7）。
- 计数探针：`grep -rown --include=*.cs <name> .` —— `-o` 让每个命中各占一行，输出行数即出现次数。
  **N 是「词边界」出现次数，不是子串次数**：`-w` 保证前缀包含不算命中
  （例：`GivePlayerAHaircut` 不算进 `GivePlayerAHaircutCondition`。我第一版用裸子串计数，
  把这条错报成 4 次(2 行)；换回 `grep -o -w` 后才对此纠正。）
  行数（`grep -c` 口径）只作**对照列**列出，不用于任何结论。
  fixture：`a.BodyCap = x; b.BodyCap = y;` + `BodyCap once` → `grep -c`=2（错），`grep -o | wc -l`=3（真值）。
- 本表 30 条里，行数与次数**不一致的有 2 条**。
- enum 成员另有一条规则：整行只有一个标识符、没有访问修饰符，必须单独认成声明位。
  （漏了这条会把 `NumTypes` 的声明行当成 1 处活跃引用 —— 我第二版脚本的错误，已修正。）

**表**

| 页面 | 成员 | 工具报的数 | 复核出的 N（出现次数） | 命中行数对照 | file:line 出处 | 误报类型 |
|---|---|---:|---:|---:|---|---|
| `AgentBehavior.md`（en） | `BehaviorGroup` | 0 | **4 次** | 4 行 | `AgentBehavior.cs:10` | 类内裸引用（无点前缀）（field） |
| `BarberCampaignBehavior.md`（en） | `_isOpenedFromBarberDialogue` | 0 | **3 次** | 3 行 | `BarberCampaignBehavior.cs:60` | 类内裸引用（无点前缀）（field） |
| `BarberCampaignBehavior.md`（en） | `_previousBodyProperties` | 0 | **2 次** | 2 行 | `BarberCampaignBehavior.cs:62` | 类内裸引用（无点前缀）（field） |
| `BarberCampaignBehavior.md`（en） | `ChargeThePlayer` | 0 | **1 次** | 1 行 | `BarberCampaignBehavior.cs:143` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `CreateBarber` | 0 | **1 次** | 1 行 | `BarberCampaignBehavior.cs:197` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `DidPlayerNotHaveAHaircut` | 0 | **1 次** | 1 行 | `BarberCampaignBehavior.cs:148` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `DoesPlayerHaveEnoughGold` | 0 | **2 次** | 2 行 | `BarberCampaignBehavior.cs:130` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `GivePlayerAHaircut` | 0 | **2 次** | 2 行 | `BarberCampaignBehavior.cs:175` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `GivePlayerAHaircutCondition` | 0 | **2 次** | 2 行 | `BarberCampaignBehavior.cs:169` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `InDisguiseSpeakingToBarber` | 0 | **1 次** | 1 行 | `BarberCampaignBehavior.cs:121` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `InitializeBarberConversation` | 0 | **2 次** | 2 行 | `BarberCampaignBehavior.cs:187` | 委托/方法组引用（method） |
| `CampaignMusicHandler.md`（en） | `_restTimer` | 0 | **4 次** | 4 行 | `CampaignMusicHandler.cs:18` | 类内裸引用（无点前缀）（field） |
| `CampaignSiegeStateHandler.md`（en） | `_defenderVictory` | 0 | **2 次** | 2 行 | `CampaignSiegeStateHandler.cs:15` | 类内裸引用（无点前缀）（field） |
| `CampaignSiegeStateHandler.md`（en） | `_isRetreat` | 0 | **2 次** | 2 行 | `CampaignSiegeStateHandler.cs:13` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_characterCreationStateState` | 0 | **9 次** | 2 行 | `CharacterCreationScreen.cs:24` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_cultureAmbientSoundEvent` | 0 | **4 次** | 4 行 | `CharacterCreationScreen.cs:32` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_currentStageView` | 0 | **7 次** | 7 行 | `CharacterCreationScreen.cs:28` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_genericScene` | 0 | **8 次** | 8 行 | `CharacterCreationScreen.cs:34` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_shownLayers` | 0 | **5 次** | 5 行 | `CharacterCreationScreen.cs:26` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_stageViews` | 0 | **4 次** | 4 行 | `CharacterCreationScreen.cs:30` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationStageViewBase.md`（en） | `_cameraPosition` | 0 | **3 次** | 3 行 | `CharacterCreationStageViewBase.cs:31` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationStageViewBase.md`（en） | `_refreshAction` | 0 | **2 次** | 2 行 | `CharacterCreationStageViewBase.cs:21` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_allocatedTroops` | 0 | **18 次** | 18 行 | `MapEventSide.cs:31` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_partyStrengthCache` | 0 | **3 次** | 3 行 | `MapEventSide.cs:34` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_readyTroopsTemporaryCache` | 0 | **5 次** | 5 行 | `MapEventSide.cs:25` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_requiresTroopCacheUpdate` | 0 | **6 次** | 6 行 | `MapEventSide.cs:28` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_simulationTroopList` | 0 | **13 次** | 10 行 | `MapEventSide.cs:64` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_troopAllocationsLocked` | 0 | **6 次** | 6 行 | `MapEventSide.cs:67` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `SimulationShipList` | 0 | **11 次** | 11 行 | `MapEventSide.cs:88` | 类内裸引用（无点前缀）（property） |
| `MapEventSide.md`（zh） | `WeightedShipCombatFactor` | 0 | **1 次** | 1 行 | `MapEventSide.cs:91` | 类内裸引用（无点前缀）（property） |

**行数 vs 次数不一致的条目**（B-7 在本组实际发作处）：

- `_characterCreationStateState`（`CharacterCreationScreen.cs:24`）：**9 次（2 行）**，差 +7
- `_simulationTroopList`（`MapEventSide.cs:64`）：**13 次（10 行）**，差 +3

**三处脚本缺陷 · 32 → 30 的可追溯记录**（交付前自行发现 / 经复核指出后改正，不得在重写时丢失）

| # | 缺陷 | 被误判的行 | 实证 |
|---|---|---|---|
| 1 | enum 成员行**没有访问修饰符**（整行只有一个标识符），声明位判定未覆盖 | `NumTypes`（-1） | `grep -rnw NumTypes` 全树仅 1 行 = `BoardGameHelper.cs:10` 声明本身 |
| 2 | 修饰符前是 **TAB** 而非空格时，带空格的修饰符判定匹配不到 | `DebugAssertSimulationConsistency`（-1） | 全树仅 1 行 = `MapEventSide.cs:852` 的 `internal void` 声明本身 |
| 3 | 修饰符存在时 `before` **未去尾部空格**，末段算成空串，表达式体属性 `=> ` 的使用行被判成声明 | `_simulationTroopList`（少算 1） | 声明只有 `:64` 一处；`MapEventSide.cs:126` 是 `public int NumRemainingSimulationTroops => _simulationTroopList`，属使用。经 lead-2 独立复核指出后改正为 **13 次（10 行）** |

前两处是**把声明行误当成活跃引用**（虚报工具错），第 3 处相反，是**把使用行误当成声明**（漏报使用点）。三次都在**把证据算少/算错**；方向不一致，说明单靠一个方向自查抓不全。

「过于整齐」的教训：`occByLine` 的 key 前缀不匹配曾输出「工具错 = 0」。**全零与全命中一样需要对照。**

**误报类型分布**：类内裸引用（无点前缀） 22 条 · 委托/方法组引用 8 条

**对照组：同一批候选里通过第三道过滤的 8 条**（工具的 0 这次是对的，但按 boss 裁的 (c) 口径，field 行仍不得把 0 写进页面）

| 页面 | 成员 | 声明 file:line | kind | 是否分子 A |
|---|---|---|---|---|
| `AgentBehavior.md`（en） | `CheckStartWithBehavior` | `AgentBehavior.cs:72` | method | 否（override=0） |
| `AgentBehavior.md`（en） | `GetDebugInfo` | `AgentBehavior.cs:89` | method | **是**（override>0 且 0 调用点） |
| `BarberCampaignBehavior.md`（en） | `BarberCost` | `BarberCampaignBehavior.cs:58` | field | 否（override=0） |
| `CampaignMusicHandler.md`（en） | `MinRestDurationInSeconds` | `CampaignMusicHandler.cs:14` | field | 否（override=0） |
| `CampaignMusicHandler.md`（en） | `MaxRestDurationInSeconds` | `CampaignMusicHandler.cs:16` | field | 否（override=0） |
| `CharacterCreationStageViewBase.md`（en） | `GetVirtualStageCount` | `CharacterCreationStageViewBase.cs:76` | method | **是**（override>0 且 0 调用点） |
| `AIDifficulty.md`（zh） | `NumTypes` | `BoardGameHelper.cs:10` | enum-member | 否（override=0） |
| `MapEventSide.md`（zh） | `DebugAssertSimulationConsistency` | `MapEventSide.cs:852` | method | 否（override=0） |

**口径边界（引用本组数字时必须一起带上）**

- 「复核出 N 处活跃引用」**只证明工具漏了**，不证明这些引用都指向本页那个类型（同文件同声明类的裸引用无法静态区分类型归属）。
- 这些 N **不是 modder 陷阱**，恰恰相反：它们是**被工具误报成陷阱的活成员**。页面表述应为「工具报 0 调用点，实际有 N 处类内引用 —— 这是提取口径的盲区，不是死成员」。
- 源码树：`bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`，全树 8,583 个 `.cs`（含 `bin/`）。
- 文档树：`BannerlordCode.github.io` HEAD `56e94022941f1b16d86b934330620b145029ee90`。
- 工具：`tools/_deadmember.mjs --batch`（退出码 0，阳性对照 6/6 + 定位探针 2/2）。
- 复现：`node tools/_deadmember.mjs --batch` 后按本文件口径重跑第三道过滤。
