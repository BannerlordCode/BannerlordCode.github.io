---
title: "Campaign"
description: "战役运行时根对象：Current 单例持有全部管理器、行为与实体集合，并提供时间控制、地图边界与自定义组件挂载点。"
---
# Campaign

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class Campaign : GameType`
**Source:** `TaleWorlds.CampaignSystem/Campaign.cs`

## 概述

`Campaign` 是战役模式的根聚合对象，继承 `TaleWorlds.Core.GameType`。它本身不做游戏规则，只做三件事：持有全部子系统管理器（`QuestManager`、`FactionManager`、`MapEventManager`、`GameMenuManager`……），持有全部实体集合（`AliveHeroes`、`Clans`、`Settlements`、`MobileParties` 等只读列表），以及提供 Behavior 的注册与取回入口。

它是 `static Campaign Current { get; private set; }` 单例，`private set` 意味着只有游戏自己能赋值。mod 全程通过 `Campaign.Current` 访问它。这个属性在战役建立之前与销毁之后都是 `null`——模块加载期访问会直接抛 `NullReferenceException`，这是 mod 崩溃的头号原因。

它提供两个官方扩展位：`AddCustomManager<T>()` / `GetCustomManager<T>()` 用于挂自定义系统管理器，`AddEntityComponent<TComponent>()` / `GetEntityComponent<TComponent>()` 用于挂实体组件。前者按类型唯一（重复调用 `Add` 会多出一个实例），后者属于 ECS 风格注册。

## 心智模型

启动顺序：`new Campaign(gameMode)` → `InitializeSinglePlayerReferences()` → `InitializeGamePlayReferences()` → `SetLoadingParameters(...)` → `InitializeMainParty()` → 各 Behavior 调 `RegisterEvents()` → `WaitAsyncTasks()` → `GameStarted = true`。

运行期每帧由 `CampaignTick` 类机制推进游戏时间：`CampaignDt` 是本帧的战役时间增量，`CurrentTime` 是当前累计游戏小时，`SetTimeSpeed(int speed)` 控制推进速度，`TimeControlMode` 报告当前是暂停、正常还是快进。玩家在地图上推进一天会一次性把 `HourlyTickEvent`、`DailyTickEvent` 等全部触发完，**不**分散到后续帧。

三个常见误用。一是**在 `OnGameStart`（模块加载期）访问 `Campaign.Current`**：此刻战役尚未建立，所有属性都是 null。正确的第一个安全点是 Behavior 的 `RegisterEvents()` 或 `CampaignEvents.OnGameLoadedEvent`。二是**把状态挂到 `AddCustomManager` 的实例上而不走 `IDataStore`**：自定义管理器不参与存档，读档后状态全丢。三是**在 `DailyTickEvent` 里遍历 `Campaign.Current.Heroes`**：`Heroes` 是个大列表，而按实体的 `DailyTickHeroEvent` 本来就是为逐个处理设计的。

地图边界那几个公开字段（`MinSettlementX` / `MaxSettlementX` / `MinSettlementY` / `MaxSettlementY`）是 `public` 字段而非属性，可写；`MapMinimumPosition` / `MapMaximumPosition` / `MapDiagonal` 等则是 `static` 只读，值在加载地图时算好，mod 只能读不能改。

## 关键成员

### 单例与生命周期

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Current` | `public static Campaign Current { get; private set; }` | 当前战役实例。战役建立前与销毁后为 null。**所有静态访问的第一道门禁** |
| `Campaign(GameMode gameMode)` | `public Campaign(CampaignGameMode gameMode)` | 由引擎构造。mod 不要手动 `new`——那会造出一个 `Current` 不会被指向的空壳 |
| `GameMode` | `public CampaignGameMode GameMode { get; private set; }` | 当前战役模式（沙盒 / 故事模式 / 编辑器）。行为分支判断用这个 |
| `CampaignGameLoadingType` | `public Campaign.GameLoadingType CampaignGameLoadingType` | 加载类型：`Tutorial` / `NewCampaign` / `SavedCampaign` / `Editor`。读档与新档流程的差异都要靠它区分 |
| `InitializeSinglePlayerReferences` | `public void InitializeSinglePlayerReferences()` | 建立单局需要的引用 |
| `InitializeGamePlayReferences` | `public void InitializeGamePlayReferences()` | 建立玩法相关引用 |
| `InitializeParameters` | `public override void InitializeParameters()` | 初始化地图边界与速度估算等参数 |
| `SetLoadingParameters` | `public void SetLoadingParameters(Campaign.GameLoadingType gameLoadingType)` | 记录本次加载的类型 |
| `InitializeMainParty` | `public void InitializeMainParty()` | 建立玩家主队，读取 `PartyTemplateObject` 模板 |
| `WaitAsyncTasks` | `public void WaitAsyncTasks()` | 等待异步加载任务完成。进入可玩状态前的最后一步 |
| `OnDestroy` | `public override void OnDestroy()` | 战役销毁。`Campaign.Current` 在此后失效 |
| `OnStateChanged` | `public override void OnStateChanged(GameState oldState)` | 切换 `GameState` 时回调 |
| `OnMissionIsStarting` | `public override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)` | 进入任务前回调 |
| `SupportsSaving` | `public override bool SupportsSaving` | 战役是否支持存档。任务模式下为 false |
| `IsDevelopment` | `public override bool IsDevelopment` | 是否开发构建 |
| `IsInventoryAccessibleAtMission` | `public override bool IsInventoryAccessibleAtMission` | 任务中背包是否可用 |
| `IsPartyWindowAccessibleAtMission` | `public override bool IsPartyWindowAccessibleAtMission` | 任务中部队窗口是否可用 |
| `OnGameOver` | `public void OnGameOver()` | 战役结束 |
| `OnPlayerCharacterChanged` | `public void OnPlayerCharacterChanged(out bool isMainPartyChanged)` | 玩家操控的领主改变，回传主队是否也变了 |
| `GameStarted` | `public bool GameStarted` | 是否已完成启动流程。用来做一次性初始化的稳妥标志 |
| `IsSinglePlayerReferencesInitialized` | `public bool IsSinglePlayerReferencesInitialized` | 单局引用是否已建好 |

### Behavior 注册

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetCampaignBehavior<T>` | `public T GetCampaignBehavior<T>()` | 取第一个匹配类型的已注册 Behavior。找不到返回 `default(T)`，必须判空 |
| `GetCampaignBehaviors<T>` | `public IEnumerable<T> GetCampaignBehaviors<T>()` | 取全部匹配类型的 Behavior，顺序不保证 |
| `AddCampaignBehaviorManager` | `public void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)` | 注册一个 Behavior 管理器实现。可替换官方默认管理器的行为 |
| `CampaignBehaviorManager` | `public ICampaignBehaviorManager CampaignBehaviorManager` | 当前生效的 Behavior 管理器。改它能改变 Behavior 的存储与查找策略 |

### 实体集合

这些属性全部转发给 `CampaignObjectManager`，返回的是只读包装而非活视图。

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AliveHeroes` | `public MBReadOnlyList<Hero> AliveHeroes` | 在世领主。mod 里最常用的一张表 |
| `DeadOrDisabledHeroes` | `public MBReadOnlyList<Hero> DeadOrDisabledHeroes` | 死亡或被禁用的领主 |
| `Characters` | `public MBReadOnlyList<CharacterObject> Characters` | 全部兵种定义 |
| `Clans` | `public MBReadOnlyList<Clan> Clans` | 全部家族 |
| `Kingdoms` | `public MBReadOnlyList<Kingdom> Kingdoms` | 全部王国 |
| `Factions` | `public IEnumerable<IFaction> Factions` | 全部势力（王国 + 部落） |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements` | 全部定居点 |
| `MobileParties` | `public MBReadOnlyList<MobileParty> MobileParties` | 全部部队 |
| `LordParties` / `CaravanParties` / `MilitiaParties` / `GarrisonParties` / `VillagerParties` / `PatrolParties` / `BanditParties` | 各自 `public MBReadOnlyList<MobileParty> ...` | 按职能分类的部队子集。命名即语义，不用自己过滤 |
| `CustomParties` | `public MBReadOnlyList<MobileParty> CustomParties` | 玩家自定义创建的部队 |
| `PartiesWithoutPartyComponent` | `public MBReadOnlyList<MobileParty> PartiesWithoutPartyComponent` | 没有 `PartyComponent` 的部队，通常是尚未装配完的 |
| `Workshops` | `public MBReadOnlyList<WorkshopType> Workshops` | 全部工坊类型 |
| `ItemModifiers` | `public MBReadOnlyList<ItemModifier> ItemModifiers` | 全部物品词条 |
| `ItemModifierGroups` | `public MBReadOnlyList<ItemModifierGroup> ItemModifierGroups` | 全部词条组 |
| `Concepts` | `public MBReadOnlyList<Concept> Concepts` | 百科条目概念 |
| `MainParty` | `public MobileParty MainParty { get; private set; }` | 玩家主队。最常用的单例式对象 |
| `CameraFollowParty` | `public PartyBase CameraFollowParty` | 相机当前跟随的部队。可为 null |
| `CurrentTime` | `public static float CurrentTime` | 当前累计游戏小时（浮点） |
| `IsDay` / `IsNight` | `public bool IsDay` / `public bool IsNight` | 当前是白天还是夜晚 |
| `IsMainPartyWaiting` | `public bool IsMainPartyWaiting` | 主队是否在等待状态 |
| `CurrentMenuContext` | `public MenuContext CurrentMenuContext` | 当前打开的游戏菜单；没打开时为 null |
| `CurrentConversationContext` | `public ConversationContext CurrentConversationContext` | 当前对话上下文 |
| `PlayerEncounter` | `public PlayerEncounter PlayerEncounter { get; internal set; }` | 玩家遭遇（双方军队是否已在地图上）。`internal set` |

### 时间控制

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CampaignDt` | `public float CampaignDt` | 本帧的战役时间增量。乘算消耗/速度时用它，不要用固定常量 |
| `TimeControlMode` | `public CampaignTimeControlMode TimeControlMode` | 时间推进模式。暂停 / 正常 / 快进 |
| `LastTimeControlMode` | `public CampaignTimeControlMode LastTimeControlMode` | 上一次的时间模式，用于判断切换 |
| `SetTimeSpeed` | `public void SetTimeSpeed(int speed)` | 设置推进速度档位 |
| `GetSimplifiedTimeControlMode` | `public CampaignTimeControlMode GetSimplifiedTimeControlMode()` | 把细分模式归并成简化模式，判断「是否在走」用它 |
| `SetTimeControlModeLock` | `public void SetTimeControlModeLock(bool isLocked)` | 锁定时间模式，锁定后玩家不能改速度 |
| `TimeControlModeLock` | `public bool TimeControlModeLock { get; private set; }` | 当前是否处于锁定状态 |
| `SpeedUpMultiplier` | `public float SpeedUpMultiplier { get; set; }` | 快进倍率，初值 4f。调试时改它能显著缩短等待 |
| `CurrentTickCount` | `public int CurrentTickCount` | 战役已推进的 tick 计数 |
| `ConfigTimeMultiplier` | `public const float ConfigTimeMultiplier = 0.25f` | 配置项的时间倍率常量 |
| `ConfigTimeMultiplier` 相关常量 | — | 与上同一条，不重复列 |

### 地图边界与速度估算

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MapDiagonal` | `public static float MapDiagonal { get; private set; }` | 地图对角线长度，只读静态 |
| `MapDiagonalSquared` | `public static float MapDiagonalSquared { get; private set; }` | 对角线长度的平方。做平方距离比较时用它省一次开根号 |
| `MapMinimumPosition` | `public static Vec2 MapMinimumPosition { get; private set; }` | 地图最小坐标 |
| `MapMaximumPosition` | `public static Vec2 MapMaximumPosition { get; private set; }` | 地图最大坐标 |
| `MapMaximumHeight` | `public static float MapMaximumHeight { get; private set; }` | 地图最大高度 |
| `MinSettlementX` / `MaxSettlementX` / `MinSettlementY` / `MaxSettlementY` | 各自 `public float` | 可写的定居点活动范围。放大它等于扩大可用地图 |
| `GetAverageDistanceBetweenClosestTwoTownsWithNavigationType` | `public float GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(MobileParty.NavigationType navigationType)` | 按导航类型算最近两座城镇的平均距离。调 `Settlement` 里的距离加成时常用 |
| `EstimatedMaximumLordPartySpeedExceptPlayer` | `public float EstimatedMaximumLordPartySpeedExceptPlayer { get; set; }` | 非玩家领主部队的最高速度估算 |
| `EstimatedAverageLordPartySpeed` | `public float EstimatedAverageLordPartySpeed { get; set; }` | 领主部队平均速度估算 |
| `EstimatedAverageCaravanPartySpeed` | `public float EstimatedAverageCaravanPartySpeed { get; set; }` | 商队平均速度估算 |
| `EstimatedAverageVillagerPartySpeed` | `public float EstimatedAverageVillagerPartySpeed { get; set; }` | 村民队伍平均速度估算 |
| `EstimatedAverageBanditPartySpeed` | `public float EstimatedAverageBanditPartySpeed { get; set; }` | 匪徒平均速度估算 |
| `EstimatedAverageLordPartyNavalSpeed` | `public float EstimatedAverageLordPartyNavalSpeed { get; set; }` | 领主舰船平均速度估算 |
| `EstimatedAverageCaravanPartyNavalSpeed` | `public float EstimatedAverageCaravanPartyNavalSpeed { get; set; }` | 商船平均速度估算 |
| `EstimatedAverageVillagerPartyNavalSpeed` | `public float EstimatedAverageVillagerPartyNavalSpeed { get; set; }` | 渔船平均速度估算 |
| `EstimatedAverageBanditPartyNavalSpeed` | `public float EstimatedAverageBanditPartyNavalSpeed { get; set; }` | 海盗船平均速度估算 |
| `AverageWage` | `public float AverageWage { get; private set; }` | 全局平均工资，招募消耗的计算基准 |
| `PathFindingMaxCostLimit` | `public static int PathFindingMaxCostLimit` | 寻路代价上限。改动会直接影响 AI 愿意走多远 |
| `PlayerRegionSwitchCostFromLandToSea` | `public static int PlayerRegionSwitchCostFromLandToSea` | 玩家从陆区切到海区的代价 |
| `DefaultWeatherNodeDimension` | `public int DefaultWeatherNodeDimension` | 天气节点网格边长 |

### 子系统管理器

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ObjectManager` | `public MBObjectManager ObjectManager`（继承自 `GameType`） | 全局对象注册表。`Hero` / `Clan` / `Settlement` 都在里面 |
| `CampaignObjectManager` | `public CampaignObjectManager CampaignObjectManager { get; private set; }` | 战役专用对象管理器，上面所有实体集合由它提供 |
| `Models` | `public GameModels Models` | 全部 GameModel 的访问入口，如 `Campaign.Current.Models.MapDistanceModel` |
| `SaveHandler` | `public SaveHandler SaveHandler { get; private set; }` | 存档处理器 |
| `QuestManager` | `public QuestManager QuestManager { get; private set; }` | 任务管理器 |
| `IssueManager` | `public IssueManager IssueManager { get; private set; }` | 问题（issue）管理器 |
| `FactionManager` | `public FactionManager FactionManager { get; private set; }` | 势力管理器 |
| `CharacterRelationManager` | `public CharacterRelationManager CharacterRelationManager { get; private set; }` | 人物关系管理器 |
| `Romance` | `public Romance Romance { get; private set; }` | 恋爱与婚姻系统 |
| `PlayerCaptivity` | `public PlayerCaptivity PlayerCaptivity { get; private set; }` | 玩家俘虏状态 |
| `KingdomManager` | `public KingdomManager KingdomManager` | 王国管理器 |
| `TournamentManager` | `public ITournamentManager TournamentManager` | 赛事管理器接口 |
| `GameMenuManager` | `public GameMenuManager GameMenuManager { get; private set; }` | 游戏菜单管理器 |
| `GameMenuCallbackManager` | `public GameMenuCallbackManager GameMenuCallbackManager { get; private set; }` | 菜单回调分发 |
| `ConversationManager` | `public ConversationManager ConversationManager { get; private set; }` | 对话管理器 |
| `MapEventManager` | `public MapEventManager MapEventManager { get; internal set; }` | 地图事件（遭遇）管理器 |
| `SiegeEventManager` | `public SiegeEventManager SiegeEventManager { get; internal set; }` | 攻城事件管理器 |
| `MapMarkerManager` | `public MapMarkerManager MapMarkerManager { get; internal set; }` | 地图标记管理器 |
| `CampaignMissionManager` | `public CampaignMission.ICampaignMissionManager CampaignMissionManager { get; set; }` | 战役任务管理接口，**可写**——自定义任务流程从这里接 |
| `BarterManager` | `public BarterManager BarterManager { get; private set; }` | 以物易物管理器 |
| `EncyclopediaManager` | `public EncyclopediaManager EncyclopediaManager { get; private set; }` | 百科管理器 |
| `LogEntryHistory` | `public LogEntryHistory LogEntryHistory` | 日志条目历史 |
| `SandBoxManager` | `public SandBoxManager SandBoxManager { get; private set; }` | 沙盒管理器；故事模式下也可能为 null |
| `MapSceneCreator` | `public IMapSceneCreator MapSceneCreator { get; set; }` | 地图场景创建器接口，可写 |
| `MapStateData` | `public MapStateData MapStateData { get; private set; }` | 地图可见性状态数据 |
| `VisualCreator` | `public VisualCreator VisualCreator { get; set; }` | 视觉对象创建器，可写 |
| `VisualTrackerManager` | `public VisualTrackerManager VisualTrackerManager { get; set; }` | 视觉追踪管理，可写 |
| `CampaignInformationManager` | `public CampaignInformationManager CampaignInformationManager { get; set; }` | 战役信息面板管理，可写 |
| `SkillLevelingManager` | `public ISkillLevelingManager SkillLevelingManager { get; set; }` | 技能成长管理接口，可写 |
| `PlayerTraitDeveloper` | `public PropertyOwner<PropertyObject> PlayerTraitDeveloper` | 玩家特质的属性容器 |
| `Options` | `public readonly CampaignOptions Options` | 本局战役选项，只读引用 |
| `CampaignEntityComponents` | `public MBReadOnlyList<CampaignEntityComponent> CampaignEntityComponents` | 已注册的全部实体组件 |

### 默认数据表

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `DefaultPerks` | `public DefaultPerks DefaultPerks { get; private set; }` | 全部天赋定义 |
| `DefaultTraits` | `public DefaultTraits DefaultTraits { get; private set; }` | 全部特质定义 |
| `DefaultPolicies` | `public DefaultPolicies DefaultPolicies { get; private set; }` | 全部政策定义 |
| `DefaultBuildingTypes` | `public DefaultBuildingTypes DefaultBuildingTypes { get; private set; }` | 全部建筑类型 |
| `DefaultIssueEffects` | `public DefaultIssueEffects DefaultIssueEffects { get; private set; }` | 问题效果定义 |
| `DefaultItems` | `public DefaultItems DefaultItems { get; private set; }` | 全部物品定义 |
| `DefaultFigureheads` | `public DefaultFigureheads DefaultFigureheads { get; private set; }` | 全部船首像定义 |
| `DefaultSiegeStrategies` | `public DefaultSiegeStrategies DefaultSiegeStrategies { get; private set; }` | 攻城策略定义 |
| `DefaultSkillEffects` | `public DefaultSkillEffects DefaultSkillEffects { get; private set; }` | 技能效果定义 |
| `DefaultVillageTypes` | `public DefaultVillageTypes DefaultVillageTypes { get; private set; }` | 村庄类型定义 |
| `DefaultFeats` | `public DefaultCulturalFeats DefaultFeats { get; private set; }` | 文化功绩定义 |
| `UnlockedFigureheadsByMainHero` | `public List<Figurehead> UnlockedFigureheadsByMainHero = new List<Figurehead>()` | 主角已解锁的船首像。是可写字段 |
| `PlayerFormationPreferences` | `public MBReadOnlyDictionary<CharacterObject, FormationClass> PlayerFormationPreferences` | 玩家为各兵种设置的阵型偏好 |
| `SetPlayerFormationPreference` | `public void SetPlayerFormationPreference(CharacterObject character, FormationClass formation)` | 设置某个兵种的阵型偏好 |
| `UnlockFigurehead` | `public void UnlockFigurehead(Figurehead figurehead)` | 解锁船首像并记入列表 |
| `PlayerFormationPreferences` 写入入口 | 由上一条 `SetPlayerFormationPreference` 提供 | 不直接写字典 |

### 扩展点

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddCustomManager` | `public void AddCustomManager<T>() where T : ICustomSystemManager, new()` | 构造并登记一个自定义系统管理器。**不检查是否已存在**，重复调用会产生两个实例 |
| `GetCustomManager` | `public T GetCustomManager<T>() where T : ICustomSystemManager` | 取回自定义管理器；未注册时返回 `default(T)` |
| `AddEntityComponent` | `public TComponent AddEntityComponent<TComponent>() where TComponent : CampaignEntityComponent, new()` | 创建并登记一个实体组件，返回新实例。ECS 风格的扩展点 |
| `GetEntityComponent` | `public TComponent GetEntityComponent<TComponent>() where TComponent : CampaignEntityComponent` | 取单个组件；不存在返回 `default(T)` |
| `GetComponents` | `public List<TComponent> GetComponents<TComponent>() where TComponent : CampaignEntityComponent` | 取全部同类型组件，返回可写列表 |
| `RemoveEntityComponent` | `public void RemoveEntityComponent<TComponent>() where TComponent : CampaignEntityComponent` | 按类型移除组件 |
| `RemoveEntityComponent` | `public void RemoveEntityComponent<TComponent>(TComponent component) where TComponent : CampaignEntityComponent` | 按实例移除组件。传 null 会在内部匹配失败 |
| `AddCampaignEventReceiver` | `public void AddCampaignEventReceiver(CampaignEventReceiver receiver)` | 注册一个事件接收器。等价于在 Behavior 里 `RegisterEvents` |
| `MapSceneWrapper` | `public IMapScene MapSceneWrapper` | 当前地图场景包装 |
| `PlayerTraitDeveloper`（功能） | 见上 | 特质开发入口 |
| `DeadBattleEquipment` | `public Equipment DeadBattleEquipment { get; set; }` | 战场上玩家死亡时使用的装备 |
| `DeadCivilianEquipment` | `public Equipment DeadCivilianEquipment { get; set; }` | 非战斗场景死亡时的装备 |
| `DefaultStealthEquipment` | `public Equipment DefaultStealthEquipment { get; private set; }` | 潜行默认装备，只读 |
| `IsMainHeroDisguised` | `public bool IsMainHeroDisguised { get; set; }` | 主角是否处于伪装状态 |
| `IsCraftingEnabled` | `public bool IsCraftingEnabled { get; set; }` | 是否启用锻造。初值 true，关掉可省去锻造相关 tick |
| `IsBannerEditorEnabled` | `public bool IsBannerEditorEnabled { get; set; }` | 是否启用旗帜编辑器。初值 true |
| `IsFaceGenEnabled` | `public bool IsFaceGenEnabled { get; set; }` | 是否启用捏脸。初值 true |
| `IsMapTooltipLongForm` | `public bool IsMapTooltipLongForm { get; set; }` | 地图 tooltip 用长格式 |
| `TrueSight` | `public bool TrueSight { get; set; }` | 是否无视迷雾与视野限制。做调试或特殊玩法时打开 |
| `EnabledCheatsBefore` | `public bool EnabledCheatsBefore { get; set; }` | 此前是否已启用作弊 |
| `NewGameVersion` | `public string NewGameVersion` | 新档记录的版本号字符串 |
| `PreviouslyUsedModules` | `public MBReadOnlyList<string> PreviouslyUsedModules` | 此前使用过的模块列表 |
| `UsedGameVersions` | `public MBReadOnlyList<string> UsedGameVersions` | 使用过的游戏版本列表。存档兼容排查的第一手依据 |
| `PlatformID` | `public string PlatformID { get; private set; }` | 平台标识 |
| `UniqueGameId` | `public string UniqueGameId { get; private set; }` | 本局唯一 ID |
| `CampaignLateAITickTask` | `public ITask CampaignLateAITickTask` | 战役晚段 AI tick 任务句柄 |
| `LateAITick` | `public static void LateAITick()` | 静态方法：执行一轮战役晚段 AI tick |
| `MainHeroIllDays` | `public int MainHeroIllDays = -1` | 主角卧床天数，-1 表示健康。可写字段 |
| `ITask CampaignLateAITickTask` | 见上 | 与上一条同，不重复列 |

### 嵌套枚举

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Campaign.GameLoadingType` | `Tutorial` / `NewCampaign` / `SavedCampaign` / `Editor` | 本次战役是怎么进来的。判断「是否读档」的首选 |
| `Campaign.PartyRestFlags` | `None = 0` / `SafeMode = 1`，底层类型 `uint` | 队伍休息标志。`SafeMode` 表示处于安全休息（不掉士气） |
| `PartyRestFlags` 使用 | 由休息系统消费 | 不由 mod 直接设置 |

## 怎么用

### 怎么拿到它

`Campaign` 没有公开构造器，mod 侧**只通过静态属性 `public static Campaign Current { get; private set; }` 拿到它**（`TaleWorlds.CampaignSystem/Campaign.cs:508`，3000 行的大类）。setter 是 `private`，全文件只有两处写它：

- `public void SetLoadingParameters(Campaign.GameLoadingType gameLoadingType)`（`Campaign.cs:1871`）里第一句就是 `Campaign.Current = this;`（`:1873`），并且只有 `gameLoadingType == Campaign.GameLoadingType.SavedCampaign` 时才额外置 `GameStarted = true`（`:1876`）。
- 拆局路径把它置回 null（`Campaign.cs:1646`）。

构造与初始化在 `protected override void OnInitialize()`（`Campaign.cs:1889`）里，顺序对 mod 很重要：`new CampaignEvents()`（`:1891`）→ `new CampaignEventDispatcher(...)`（`:1892`）→ `new CampaignGameStarter(this.GameMenuManager, this.ConversationManager)`（`:1905`）→ `GameManager.InitializeGameStarter(game, campaignGameStarter)`（`:1907`，**这里才回调到 mod**）→ `SetBasicModels(campaignGameStarter.Models)`（`:1915`）→ `CreateGameManager()`（`:1920`）→ 按开新局/读档两条分支把 behaviors 交给 `CampaignBehaviorManager`（`:1945` 或 `:1949-1952`）。

派生侧常用出口：`Campaign.Current.GetCampaignBehavior<T>()`、`Campaign.Current.AddCampaignEventReceiver(CampaignEventReceiver)`（`:1882`）、`Campaign.Current.QuestManager` / `SettlementManager` 等由 `CreateManagers()`（`:1903`）建立的子系统。

### 典型用法

在 `MBGameManager` 的战役钩子里拿 `Campaign.Current`，并注册自己的事件接收器：

```csharp
using TaleWorlds.CampaignSystem;

public class MyCampaignBehaviour : CampaignEventReceiver
{
    public override void OnHeroWounded(Hero woundedHero)      // CampaignEventReceiver.cs
    {
        Debug.Print("wounded: " + woundedHero.Name.ToString(), 0);
    }
}

public override void OnGameStart(Game game, IGameStarter gameStarter)
{
    // 此时 Campaign.Current 已由 SetLoadingParameters 写入（Campaign.cs:1873）
    Campaign campaign = Campaign.Current;
    campaign.AddCampaignEventReceiver(new MyCampaignBehaviour());   // Campaign.cs:1882
}

public override void OnGameInitializationFinished(Game game, object starterObject)
{
    // starterObject 就是 Campaign.cs:1905 建出来的那个 CampaignGameStarter
    var starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new MyPersistentBehaviour());
}
```

### 最容易踩的坑

**在 `Campaign.Current` 还是 null 的阶段就去取它。** 它只在 `SetLoadingParameters`（`Campaign.cs:1871-1873`）里被赋值，所以 `MBSubModuleBase.OnSubModuleLoad`、`OnGameInitializationFinished` 之前这些都拿不到值；反过来它又在拆局时被置 null（`Campaign.cs:1646`），所以任何把 `Campaign.Current` 缓存进静态字段的代码在**换局之后就是悬空引用**——第二次进战役时你的 mod 会拿着上一局的 `Campaign` 去查 `Settlement`，查到的是已经销毁的世界。正确做法是每次现取，或者把缓存挂在 `CampaignBehaviorBase` 实例上（它随局重建）。

同一个时间窗还有第二个坑：`Campaign.Models` 走的是 `SetBasicModels(campaignGameStarter.Models)`（`Campaign.cs:1915`），在**这行之前**读 `Campaign.Models` 拿到的是未初始化引用；`CreateGameManager()`（`:1920`）之前 `Game.Current.GameStateManager` 也还不存在。

## 真实示例

```csharp
public class LedgerCampaignBehavior : CampaignBehaviorBase
{
    private readonly Dictionary<Hero, int> _deeds = new Dictionary<Hero, int>();

    public override void RegisterEvents()
    {
        // Campaign.Current 在这里一定非 null：战役已建立
        MBObjectManager objects = Campaign.Current.ObjectManager;
        Debug.Print("[Ledger] heroes=" + objects.GetObjectTypeList<Hero>().Count);

        CampaignEvents.DailyTickHeroEvent += OnDailyPerHero;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("deeds", ref _deeds);
    }

    private void OnDailyPerHero(Hero hero)
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null || hero == null || hero.IsDead)
        {
            return;
        }

        Settlement home = hero.HomeSettlement;
        if (home == null)
        {
            return;
        }

        // 用地图静态边界做一次粗筛，再用官方模型算精确距离
        Vec2 pos = home.GetPosition2D;
        if (pos.X < campaign.MapMinimumPosition.X || pos.X > campaign.MapMaximumPosition.X)
        {
            return;
        }

        float townGap = campaign.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(
            MobileParty.NavigationType.All);
        if (townGap > 0f)
        {
            _deeds[hero] = _deeds.TryGetValue(hero, out int v) ? v + 1 : 1;
        }
    }
}
```

自定义管理器：

```csharp
// 读者侧演示组件：不是游戏 API，OnCampaignStart 只是示例形状
public class MyLedgerManager : ICustomSystemManager
{
    public void OnCampaignStart() { }
}

public override void OnGameInitializationFinished()
{
    base.OnGameInitializationFinished();
    Campaign.Current.AddCustomManager<MyLedgerManager>();
}

public override void OnCampaignStart()
{
    MyLedgerManager ledger = Campaign.Current.GetCustomManager<MyLedgerManager>();
    if (ledger == null)
    {
        Debug.Print("[Ledger] custom manager not registered");
    }
}
```

`ICustomSystemManager` 在 1.4.6 里是**空接口**（没有成员），它的意义只是作为类型键让 `AddCustomManager<T>` / `GetCustomManager<T>` 成对工作；生命周期钩子由各管理器自己通过 `CampaignEvents` 订阅实现，上面的 `OnCampaignStart()` 是演示形状而非框架调用。

## 风险与边界

- **`Current` 的空引用窗口**：模块加载期、`OnGameStart` 早期、战役销毁后访问 `Campaign.Current` 都会抛 `NullReferenceException`。所有静态访问点都要么保证在 `RegisterEvents()` 之后，要么显式判空。
- **`Current` 的 setter 是 private**：mod 无法手动替换或清空它。测试里想造一个假 `Campaign` 是不可能的，只能改用 `ICustomManager` 之类的接口隔离依赖。
- **实体集合是只读包装**：`AliveHeroes` 等返回 `MBReadOnlyList<Hero>`，直接改它不会生效也不会报错。增删实体必须走对应的动作 API 或 `MBObjectManager`。
- **集合与实体数量同阶**：新开的大战役 `AliveHeroes` 可能有上千项。在 `DailyTickEvent` 里遍历它就是每帧 O(n)，用 `DailyTickHeroEvent` 替掉。
- **遍历时可能发生增删**：在 `SettlementEntered` 这类回调里遍历 `MobileParties` 时游戏可能正在增删部队，集合会抛枚举失效异常。要遍历就先复制一份。
- **速度估算字段可写**：`EstimatedAverage*` 系列是 `public get; set;`，改它们能全局改变 AI 与经济节奏。默认值由 `InitializeParameters` 设定，覆盖太早会被冲掉。
- **地图边界可写但影响全局**：`MinSettlementX` 等是 `public` 字段，放大范围会让距离模型、AI 决策与寻路代价一起失真。
- **`internal set` 的管理器**：`SiegeEventManager`、`MapEventManager`、`MapMarkerManager`、`PlayerEncounter` 的 setter 是 internal，mod 只能读。
- **自定义管理器不去重**：`AddCustomManager<T>()` 连调两次会得到两个独立实例，`GetCustomManager<T>()` 返回其中一个——另一个的 `OnCampaignStart` 仍会被调用，状态分裂。
- **实体组件的泛型约束**：`AddEntityComponent<TComponent>()` 要求 `new()` 约束，无法给需要构造参数的组件用。
- **调试开关有代价**：`TrueSight` / `IsMapTooltipLongForm` 这类可写开关会影响正常玩家的体验，发布前要复位。
- **主线程假设**：`Campaign` 的绝大多数成员只在战役主循环读写，没有锁。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/`。1.4.6 相对它把大量「只有 get」的集合改成了 `{ get; private set; }` 形式（例如 `CampaignObjectManager`、`ConversationManager`、`EncyclopediaManager`、`Romance`、`SkillLevelingManager`），并新增了 `Workshops`、`ItemModifiers`、`ItemModifierGroups`、`Concepts`、`CampaignInformationManager`、`VisualTrackerManager` 这几组属性；同时 `MaxRegisteredTypes` 之类被挪到了 `MBObjectManager`。跨版本 mod 若用反射按 `get_` / `set_` 方法名访问属性，需要为 1.4.5 单独核对。核心的 `Campaign.Current`、`GetCampaignBehavior<T>`、`AddCustomManager<T>`、`AddEntityComponent<TComponent>()` 四个成员跨版本一致。

## 依赖关系

- Behavior 层：[CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignGameStarter](../CampaignGameStarter) · [IDataStore](../IDataStore)。
- 事件总线：[CampaignEvents](../CampaignEvents) — 由本类的 `AddCampaignEventReceiver` 驱动。
- 对象注册表：[MBObjectManager](../../campaign-ext/MBObjectManager) — `ObjectManager` 属性的类型。
- 实体基类：[MBObjectBase](../../campaign-ext/MBObjectBase) — 所有集合元素的公共祖先。
- 典型实体：[Hero](../Hero) 与 [Settlement](../Settlement)。
- 战斗内扩展：[MissionBehavior](../../mission/MissionBehavior) 与 [Mission](../../mission/Mission)。
- 父级：[campaign API 目录导览](../)

## 导航

- 同桶：[`../CampaignBehaviorBase`](../CampaignBehaviorBase) · [`../CampaignEvents`](../CampaignEvents) · [`../CampaignGameStarter`](../CampaignGameStarter)
- 父索引：[`../_index`](../_index)
