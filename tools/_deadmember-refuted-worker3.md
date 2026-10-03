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
- N 的单位：**命中行数**，不是 occurrence 数（gates 计数纪律 / B-7：命中行数 ≠ 命中次数）。
- enum 成员另有一条规则：整行只有一个标识符、没有访问修饰符，必须单独认成声明位。
  （漏了这条会把 `NumTypes` 的声明行当成 1 处活跃引用 —— 我第二版脚本的错误，已修正。）

**表**

| 页面 | 成员 | 工具报的数 | 复核出的 N 处活跃引用 | file:line 出处 | 误报类型 |
|---|---|---:|---:|---|---|
| `AgentBehavior.md`（en） | `BehaviorGroup` | 0 | **3** | `AgentBehavior.cs:10` | 类内裸引用（无点前缀）（field） |
| `BarberCampaignBehavior.md`（en） | `_isOpenedFromBarberDialogue` | 0 | **3** | `BarberCampaignBehavior.cs:60` | 类内裸引用（无点前缀）（field） |
| `BarberCampaignBehavior.md`（en） | `_previousBodyProperties` | 0 | **2** | `BarberCampaignBehavior.cs:62` | 委托/方法组引用（field） |
| `BarberCampaignBehavior.md`（en） | `ChargeThePlayer` | 0 | **1** | `BarberCampaignBehavior.cs:143` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `CreateBarber` | 0 | **1** | `BarberCampaignBehavior.cs:197` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `DidPlayerNotHaveAHaircut` | 0 | **1** | `BarberCampaignBehavior.cs:148` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `DoesPlayerHaveEnoughGold` | 0 | **2** | `BarberCampaignBehavior.cs:130` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `GivePlayerAHaircut` | 0 | **2** | `BarberCampaignBehavior.cs:175` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `GivePlayerAHaircutCondition` | 0 | **2** | `BarberCampaignBehavior.cs:169` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `InDisguiseSpeakingToBarber` | 0 | **1** | `BarberCampaignBehavior.cs:121` | 委托/方法组引用（method） |
| `BarberCampaignBehavior.md`（en） | `InitializeBarberConversation` | 0 | **2** | `BarberCampaignBehavior.cs:187` | 委托/方法组引用（method） |
| `CampaignMusicHandler.md`（en） | `_restTimer` | 0 | **4** | `CampaignMusicHandler.cs:18` | 委托/方法组引用（field） |
| `CampaignSiegeStateHandler.md`（en） | `_defenderVictory` | 0 | **2** | `CampaignSiegeStateHandler.cs:15` | 类内裸引用（无点前缀）（field） |
| `CampaignSiegeStateHandler.md`（en） | `_isRetreat` | 0 | **2** | `CampaignSiegeStateHandler.cs:13` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_characterCreationStateState` | 0 | **2** | `CharacterCreationScreen.cs:24` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_cultureAmbientSoundEvent` | 0 | **4** | `CharacterCreationScreen.cs:32` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_currentStageView` | 0 | **7** | `CharacterCreationScreen.cs:28` | 委托/方法组引用（field） |
| `CharacterCreationScreen.md`（en） | `_genericScene` | 0 | **8** | `CharacterCreationScreen.cs:34` | 类内裸引用（无点前缀）（field） |
| `CharacterCreationScreen.md`（en） | `_shownLayers` | 0 | **5** | `CharacterCreationScreen.cs:26` | 委托/方法组引用（field） |
| `CharacterCreationScreen.md`（en） | `_stageViews` | 0 | **4** | `CharacterCreationScreen.cs:30` | 委托/方法组引用（field） |
| `CharacterCreationStageViewBase.md`（en） | `_cameraPosition` | 0 | **3** | `CharacterCreationStageViewBase.cs:31` | 委托/方法组引用（field） |
| `CharacterCreationStageViewBase.md`（en） | `_refreshAction` | 0 | **2** | `CharacterCreationStageViewBase.cs:21` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_allocatedTroops` | 0 | **18** | `MapEventSide.cs:31` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_partyStrengthCache` | 0 | **3** | `MapEventSide.cs:34` | 委托/方法组引用（field） |
| `MapEventSide.md`（zh） | `_readyTroopsTemporaryCache` | 0 | **5** | `MapEventSide.cs:25` | 委托/方法组引用（field） |
| `MapEventSide.md`（zh） | `_requiresTroopCacheUpdate` | 0 | **6** | `MapEventSide.cs:28` | 类内裸引用（无点前缀）（field） |
| `MapEventSide.md`（zh） | `_simulationTroopList` | 0 | **9** | `MapEventSide.cs:64` | 委托/方法组引用（field） |
| `MapEventSide.md`（zh） | `_troopAllocationsLocked` | 0 | **6** | `MapEventSide.cs:67` | 委托/方法组引用（field） |
| `MapEventSide.md`（zh） | `SimulationShipList` | 0 | **10** | `MapEventSide.cs:88` | 委托/方法组引用（property） |
| `MapEventSide.md`（zh） | `WeightedShipCombatFactor` | 0 | **1** | `MapEventSide.cs:91` | 类内裸引用（无点前缀）（property） |

**误报类型分布**：委托/方法组引用 19 条 · 类内裸引用（无点前缀） 11 条

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
