---
title: "Settlement"
description: "sealed 的定居点实体：城镇/城堡/村庄/据点统一容器，承载驻军、围城侧、街区、库存、估值与可见性。"
---
# Settlement

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, IMapPoint, ITrackableCampaignObject, ITrackableBase, ISiegeEventSide, IRandomOwner, ISettlementDataHolder`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Settlement.cs`

## 概述

`Settlement` 把城镇、城堡、村庄、匪徒据点四种地图地点统一成一个实体。四者的差别不靠类型区分，而是靠 `SettlementComponent` 的实际子类（`Town` / `Village` / `Hideout`）以及一组布尔属性（`IsTown` / `IsCastle` / `IsVillage` / `IsHideout`）。1.4.6 的 `Settlement` 上**没有** `SettlementType` 枚举——按类型分派请用那组布尔，或直接判 `Town` / `Village` / `Hideout` 字段是否非 null。

它是 `sealed` 的，且实现了 `ISiegeEventSide`：作为防守方参与围城时，`BattleSide`、`SiegeEvent`、`SiegeStrategy`、`SiegeEngines` 都挂在它上面。因此「给某聚落加一批攻城器械」这类需求必须先确认 `settlement.IsUnderSiege`。

它的静态入口 `Settlement.CurrentSettlement` 是玩家当前所在定居点，`Settlement.All` 是全部定居点，`Find(string)` / `FindFirst` / `FindAll` 是查询；按位置搜附近聚落靠 `StartFindingLocatablesAroundPosition(Vec2, float)` 与 `FindNextLocatable(ref LocatableSearchData<Settlement>)` 这一对静态方法（`Settlement` 实现的是 `ILocatable<Settlement>` 接口，位置搜索的游标类型是 `LocatableSearchData<Settlement>`），这是路径查找里高频用到的一组。

## 心智模型

一个聚落从建立到可用：`new Settlement(name, locationComplex, pt)` → `Deserialize` 读 XML（建筑、驻军、绑定村庄）→ `OnGameCreated()` → `OnSessionStart()` → `CheckPositionsForMapChangeAndUpdateIfNeeded()` 对齐地图坐标 → 进入正常 tick。

围城侧的时序：`SiegeEvent` 被创建并 `InitializeSiegeEventSide()` → `SetSiegeStrategy(...)` 选策略 → `SetNextSiegeState()` 推进 `CurrentSiegeState`（`OnTheWalls` → `InTheLordsHall` → `Invalid`）→ `OnTroopsKilledOnSide(killCount)` 累计战果 → `FinalizeSiegeEvent()` 收尾。

三个常见误用。一是**在没有围城的聚落上调攻城相关成员**：`SiegeEvent` 为 null，`GetAttackTarget(...)` 这类方法会崩。二是**改 `HitPoints` 直接判死亡**：城防耐久要走 `SetWallSectionHitPointsRatioAtIndex` 与 `SettlementHitPoints` 的配套流程，手写数值会与城墙分段脱节。三是**在 `DailyTickEvent` 里遍历 `Settlement.All`**：大地图上有几百个聚落，用 `CampaignEvents.DailyTickSettlementEvent` 逐个处理。

## 关键成员

### 身份、类型与归属

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | 聚落名。本地化文本 |
| `Town` | `public Town Town` | 若为城镇则非 null |
| `Village` | `public Village Village` | 若为村庄则非 null |
| `Hideout` | `public Hideout Hideout` | 若为匪徒据点则非 null |
| `SettlementComponent` | `public SettlementComponent SettlementComponent { get; private set; }` | 组件对象，实际类型区分城镇/村庄/据点。要取具体数据用 `as Town` 向下转型 |
| `IsTown` / `IsCastle` / `IsVillage` / `IsHideout` | 各自 `public bool` | 类型判定。城堡与城镇都 `IsFortification` 为真 |
| `IsFortification` | `public bool IsFortification` | 是否有城墙（城镇 + 城堡） |
| `Owner` | `public Hero Owner` | 个人所有者；公有领地为 null |
| `OwnerClan` | `public Clan OwnerClan` | 家族所有者 |
| `MapFaction` | `public IFaction MapFaction` | 该聚落在地图上代表的势力 |
| `Culture` | `public CultureObject Culture` | 文化 |
| `HasVisited` | `public bool HasVisited` | 玩家是否到访过 |
| `LastVisitTimeOfOwner` | `public float LastVisitTimeOfOwner` | 所有者上次到访时间 |
| `IsVisible` | `public bool IsVisible` | 迷雾下是否已可见。`true` 时才允许交互 |
| `IsInspected` | `public bool IsInspected { get; set; }` | 玩家是否已实地勘察过。影响物品与驻军信息的显示 |
| `IsActive` | `public bool IsActive { get; set; }` | 是否启用（编辑器里可以关掉某个聚落） |
| `RandomValue` | `public int RandomValue` | 该聚落专属的确定性随机种子，进存档。改它会改变该聚落所有随机结果 |

### 位置

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Position` | `public CampaignVec2 Position` | 战役地图坐标 |
| `GetPosition2D` | `public Vec2 GetPosition2D()` | 二维坐标。与 `GetPositionAsVec3()` 是两个不同用途的入口 |
| `GetPositionAsVec3` | `public Vec3 GetPositionAsVec3()` | 三维坐标 |
| `GetPosition` | `public Vec3 GetPosition()` | 坐标访问别名 |
| `GatePosition` | `public CampaignVec2 GatePosition { get; private set; }` | 大门位置。部队进出城的判定点 |
| `PortPosition` | `public CampaignVec2 PortPosition { get; private set; }` | 港口位置 |
| `SetPortPosition` | `public void SetPortPosition(CampaignVec2 position)` | 设置港口位置 |
| `HasPort` | `public bool HasPort { get; private set; }` | 是否有港口 |
| `LocationComplex` | `public LocationComplex LocationComplex { get; private set; }` | 建筑拓扑。进入聚落界面后的空间结构 |
| `CurrentNavigationFace` | `public PathFaceRecord CurrentNavigationFace` | 当前寻路所在的面。自动寻路入口 |
| `CheckPositionsForMapChangeAndUpdateIfNeeded` | `public void CheckPositionsForMapChangeAndUpdateIfNeeded()` | 检测地图切换后位置是否失效并修正。切换大地图后要调 |

### 驻军与人口

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Party` | `public PartyBase Party { get; private set; }` | 驻军部队。要看具体队伍就往下转型到 `GarrisonPartyComponent` / `MilitiaPartyComponent`（两者都是 `PartyComponent` 子类，取实体用它们的 `MobileParty` 属性） |
| `PatrolParty` | `public PatrolPartyComponent PatrolParty { get; private set; }` | 驻军部队的组件 |
| `MilitiaPartyComponent` | `public MilitiaPartyComponent MilitiaPartyComponent` | 民兵组件 |
| `Militia` | `public float Militia` | 民兵数量（浮点） |
| `GarrisonWagePaymentLimit` | `public int GarrisonWagePaymentLimit { get; private set; }` | 驻军工资上限 |
| `SetGarrisonWagePaymentLimit` | `public void SetGarrisonWagePaymentLimit(int limit)` | 调整驻军规模上限 |
| `Parties` | `public MBReadOnlyList<MobileParty> Parties` | 聚落里的所有部队（含驻军与路过） |
| `HeroesWithoutParty` | `public MBReadOnlyList<Hero> HeroesWithoutParty` | 在场但无部队的领主 |
| `Notables` | `public MBReadOnlyList<Hero> Notables` | 本地名人列表 |
| `AddGarrisonParty` | `public void AddGarrisonParty()` | 按驻军上限补足士兵 |

### 估值与繁忙度

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetValue` | `public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)` | 聚落总价值。给 `hero` 时按其文化与背景修正；`countAlsoBoundedSettlements` 控制是否计入绑定村庄 |
| `GetSettlementValueForEnemyHero` | `public float GetSettlementValueForEnemyHero(Hero hero)` | 敌对领主眼中的价值（会放大）。AI 评估威胁时用它 |
| `GetSettlementValueForFaction` | `public float GetSettlementValueForFaction(IFaction faction)` | 某势力眼中的价值 |
| `IsSettlementBusy` | `public bool IsSettlementBusy(object asker)` | 该 `asker` 是否被聚落占用。会触发 `IsSettlementBusyEvent` |
| `IsSettlementBusy` | `public bool IsSettlementBusy(object asker, int limitingPriority)` | 带优先级版本。`limitingPriority` 是上限 |
| `GetSettlementBusynessPriority` | `public int GetSettlementBusynessPriority(object asker)` | 该 `asker` 的占用优先级 |

### 物品与村庄

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ItemRoster` | `public ItemRoster ItemRoster` | 存取的物品栏 |
| `Stash` | `public readonly ItemRoster Stash` | 只读字段形式的仓库物品栏。与 `ItemRoster` 是两个独立容器 |
| `BoundVillages` | `public MBReadOnlyList<Village> BoundVillages` | 绑定的村庄 |
| `BribePaid` | `public int BribePaid { get; set; }` | 已支付的贿赂额，影响驻军与好感度 |
| `Alleys` | `public List<Alley> Alleys { get; private set; }` | 城镇街区列表 |

### 威胁与状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsUnderSiege` | `public bool IsUnderSiege` | 是否在被围城 |
| `IsUnderRaid` | `public bool IsUnderRaid` | 是否正被劫掠 |
| `InRebelliousState` | `public bool InRebelliousState` | 是否处于叛乱状态 |
| `IsUnderRebellionAttack` | `public bool IsUnderRebellionAttack()` | 是否正遭叛乱攻击。注意这是方法不是属性 |
| `IsStarving` | `public bool IsStarving` | 是否饥荒 |
| `IsRaided` | `public bool IsRaided` | 是否被洗劫过 |
| `NearbyLandThreatIntensity` | `public float NearbyLandThreatIntensity { get; set; }` | 附近陆上威胁强度。AI 决策读它 |
| `NearbyNavalThreatIntensity` | `public float NearbyNavalThreatIntensity { get; set; }` | 附近海上威胁强度 |
| `NearbyLandAllyIntensity` | `public float NearbyLandAllyIntensity { get; set; }` | 附近陆上友方强度 |
| `NearbyNavalAllyIntensity` | `public float NearbyNavalAllyIntensity { get; set; }` | 附近海上友方强度 |
| `LastThreatTime` | `public CampaignTime LastThreatTime { get; private set; }` | 上次遭遇威胁的时间 |
| `LastAttackerParty` | `public MobileParty LastAttackerParty` | 上次的攻击方 |

### 城墙耐久

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `WallSectionCount` | `public int WallSectionCount` | 城墙分段数 |
| `SettlementWallSectionHitPointsRatioList` | `public MBReadOnlyList<float> SettlementWallSectionHitPointsRatioList` | 各分段当前耐久比例（0..1） |
| `SetWallSectionHitPointsRatioAtIndex` | `public void SetWallSectionHitPointsRatioAtIndex(int index, float hitPointsRatio)` | 写单个分段的耐久比例。越界会抛 `ArgumentOutOfRangeException` |
| `MaxHitPointsOfOneWallSection` | `public float MaxHitPointsOfOneWallSection` | 单段城墙的耐久上限 |
| `SettlementTotalWallHitPoints` | `public float SettlementTotalWallHitPoints` | 城墙总耐久（当前） |
| `MaxWallHitPoints` | `public float MaxWallHitPoints` | 城墙总耐久上限 |
| `SettlementHitPoints` | `public float SettlementHitPoints { get; internal set; }` | 聚落整体耐久。`internal set` 意味着 mod 只能通过配套方法改 |

### 围城侧（ISiegeEventSide）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; set; }` | 当前围城事件。没有围城时为 null——所有围城成员都要先判它 |
| `BattleSide` | `public BattleSideEnum BattleSide` | 该聚落在围城中的阵营 |
| `SiegeStrategy` | `public SiegeStrategy SiegeStrategy { get; private set; }` | 防守策略对象 |
| `SetSiegeStrategy` | `public void SetSiegeStrategy(SiegeStrategy strategy)` | 设定防守策略 |
| `InitializeSiegeEventSide` | `public void InitializeSiegeEventSide()` | 围城建立时初始化防守侧。由围城系统调 |
| `CurrentSiegeState` | `public Settlement.SiegeState CurrentSiegeState { get; private set; }` | 防守方当前阶段：`OnTheWalls` / `InTheLordsHall` / `Invalid` |
| `SetNextSiegeState` | `public void SetNextSiegeState()` | 推进到下一阶段。城墙失守时就是从 `OnTheWalls` 走到 `InTheLordsHall` |
| `ResetSiegeState` | `public void ResetSiegeState()` | 把阶段重置回初始值 |
| `Settlement.SiegeState` | `public enum SiegeState`，值 `OnTheWalls` / `InTheLordsHall` / `Invalid` | 防守阶段枚举 |
| `NumberOfTroopsKilledOnSide` | `public int NumberOfTroopsKilledOnSide { get; private set; }` | 该侧累计击杀数 |
| `OnTroopsKilledOnSide` | `public void OnTroopsKilledOnSide(int killCount)` | 累加击杀数 |
| `SiegeEngines` | `public SiegeEvent.SiegeEnginesContainer SiegeEngines { get; private set; }` | 围城器械容器 |
| `SiegeEngineMissiles` | `public MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles` | 在飞的攻城弹药 |
| `AddSiegeEngineMissile` | `public void AddSiegeEngineMissile(SiegeEvent.SiegeEngineMissile missile)` | 登记一发弹药 |
| `RemoveDeprecatedMissiles` | `public void RemoveDeprecatedMissiles()` | 清理失效弹药 |
| `GetAttackTarget` | `public void GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)` | 让该侧选择轰击目标。`out` 参数回写目标类型与索引 |
| `GetInvolvedPartiesForEventType` | `public IEnumerable<PartyBase> GetInvolvedPartiesForEventType(MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)` | 该侧参与的部队 |
| `GetNextInvolvedPartyForEventType` | `public PartyBase GetNextInvolvedPartyForEventType(ref int partyIndex, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)` | 按游标取下一支，无则 null |
| `HasInvolvedPartyForEventType` | `public bool HasInvolvedPartyForEventType(PartyBase party, MapEvent.BattleTypes mapEventType = MapEvent.BattleTypes.Siege)` | 某部队是否参与该类型事件 |
| `FinalizeSiegeEvent` | `public void FinalizeSiegeEvent()` | 围城结束时的收尾 |

### 生命周期与交互

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Settlement()` | `public Settlement()` | 无参构造，给反序列化用 |
| `Settlement` | `public Settlement(TextObject name, LocationComplex locationComplex, PartyTemplateObject pt)` | 标准构造：名称、建筑拓扑、驻军模板 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 从 XML 读取聚落定义。必须调 `base` |
| `GetName` | `public override TextObject GetName()` | 返回 `Name` |
| `ToString` | `public override string ToString()` | 调试用字符串 |
| `OnGameCreated` | `public void OnGameCreated()` | 新档创建后初始化 |
| `OnSessionStart` | `public void OnSessionStart()` | 进入可玩状态时初始化 |
| `OnFinishLoadState` | `public void OnFinishLoadState()` | 读档完成后补算派生状态 |
| `OnPartyInteraction` | `public void OnPartyInteraction(MobileParty engagingParty)` | 部队与聚落交互（谈判、招募等）后回调 |
| `OnPlayerEncounterFinish` | `public void OnPlayerEncounterFinish()` | 玩家遭遇流程结束时回调 |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; private set; }` | 百科正文 |
| `EncyclopediaLink` | `public string EncyclopediaLink` | 百科链接 |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName` | 带名字的百科链接文本 |

### 静态入口

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CurrentSettlement` | `public static Settlement CurrentSettlement` | 玩家当前所在聚落。地图上时为 null |
| `All` | `public static MBReadOnlyList<Settlement> All` | 全部聚落 |
| `GetFirst` | `public static Settlement GetFirst` | 任意一个聚落。仅用于遍历起点，不要假设是某个特定城 |
| `Find` | `public static Settlement Find(string idString)` | 按 `StringId` 精确查找；找不到返回 null |
| `FindFirst` | `public static Settlement FindFirst(Func<Settlement, bool> predicate)` | 谓词取第一个命中 |
| `FindAll` | `public static IEnumerable<Settlement> FindAll(Func<Settlement, bool> predicate)` | 谓词筛选全部 |
| `StartFindingLocatablesAroundPosition` | `public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)` | 开始一次「按位置找附近聚落」的迭代搜索，返回游标数据 |
| `FindNextLocatable` | `public static Settlement FindNextLocatable(ref LocatableSearchData<Settlement> data)` | 沿上一步的游标取下一个结果；耗尽返回 null。**必须配对使用** |

## 怎么用

### 怎么拿到它

`Settlement` 是 `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, ...`（`TaleWorlds.CampaignSystem/Settlements/Settlement.cs:27`）。战役里的聚落全部走 XML，所以 mod 正常**只读不建**：唯一该用的构造器是 `public Settlement(TextObject name, LocationComplex locationComplex, PartyTemplateObject pt)`（`:923`），无参重载 `public Settlement()`（`:917`）只是转给它并塞一个 `"{=!}unnamed"` 占位名。

读取出口分两类：

- 按 id：`public static Settlement Find(string idString)`（`:1370`），实现只有一行 `MBObjectManager.Instance.GetObject<Settlement>(idString)`，**找不到返回 null**。
- 按条件：`public static MBReadOnlyList<Settlement> All`（`:1389`，内部 `Campaign.Current.Settlements`）、`FindFirst(Func<Settlement,bool>)`（`:1376`，`FirstOrDefault`，找不到 null）、`FindAll(...)`（`:1382`）、`GetFirst`（`:1399`）。
- 「玩家现在在哪」：`public static Settlement CurrentSettlement`（`:952`）。

### 典型用法

```csharp
using TaleWorlds.CampaignSystem;

// 按 XML id 取（城镇 / 城堡 / 村庄共用一张表，id 前缀分别是 twn_ / cas_ / vil_）
Settlement capital = Settlement.Find("twn_calradia");           // Settlement.cs:1370
if (capital == null) { /* id 写错或该聚落不在当前战役 */ }

// 条件查询：所有被玩家敌对的城镇
foreach (Settlement s in Settlement.FindAll(x => x.IsFortification && x.SiegeEvent != null))   // :1382，IsFortification 见 :824
{
    Debug.Print(s.Name.ToString() + " hp=" + s.SettlementHitPoints, 0);   // :475（setter 是 internal）
    s.SetWallSectionHitPointsRatioAtIndex(0, 0.5f);                       // :461
    float full = s.SettlementTotalWallHitPoints;                          // :433
    float maxOne = s.MaxHitPointsOfOneWallSection;                        // :448
    float worth = s.GetSettlementValueForEnemyHero(Hero.MainHero);       // :939，走 Campaign.Models.SettlementValueModel
}

// 玩家所在聚落（可能是被俘时的关押处，不一定是 CurrentSettlement 那个分支）
Settlement here = Settlement.CurrentSettlement;                          // :952
if (here != null && here.IsFortification && here.HasVisited) { /* ... */ }

// 找最近的聚落，走 locatable 迭代器而不是 All 全表扫
LocatableSearchData<Settlement> data = Settlement.StartFindingLocatablesAroundPosition(pos, 40f);   // :1408
Settlement near = Settlement.FindNextLocatable(ref data);                                          // :1414
```

### 最容易踩的坑

**拿 `Settlement.Find(id)` 的结果不判空就开始用。** 它就是 `MBObjectManager.Instance.GetObject<Settlement>(idString)` 的透传（`Settlement.cs:1370-1372`），而 `MBObjectManager.GetObject<T>(string)` 找不到时 `return default(T)`（`MBObjectManager.cs:315-317`），**不抛异常也不打日志**。所以 mod 里最常见的现象是 `capital` 为 null，紧接着 `capital.Party` 空引用，而控制台没有一行提示告诉你 id 拼错了——尤其在 mod 只往部分地图里加聚落、或读的是另一个战役的存档时。同理 `Settlement.All`（`:1389`）在战役未建立时会直接让 `Campaign.Current` 空引用。

第二个坑是 `SettlementHitPoints`（`:475`）的 **setter 是 `internal`**——mod 读得到、改不了。想改变城墙血量只能用 `SetWallSectionHitPointsRatioAtIndex(int index, float hitPointsRatio)`（`:461`，按分段比例写），或者走 `SiegeEvent` 的官方攻城动作；直接赋值会编译不过，这也是为什么改血量类 mod 几乎都得改 XML 初始值而不是改运行时数值。

## 真实示例

```csharp
public class GarrisonAudit : CampaignBehaviorBase
{
    private readonly Dictionary<Settlement, int> _garrisonPeak = new Dictionary<Settlement, int>();

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickSettlementEvent += OnDailyPerSettlement;
        CampaignEvents.OnSettlementOwnerChangedEvent += OnOwnerChanged;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("garrisonPeak", ref _garrisonPeak);
    }

    private void OnDailyPerSettlement(Settlement settlement)
    {
        if (settlement == null || !settlement.IsVisible)
        {
            return;
        }

        PartyBase garrison = settlement.Party;
        if (garrison == null)
        {
            return;
        }

        int size = garrison.NumberOfHealthyMembers;
        if (size > 0)
        {
            _garrisonPeak[settlement] = size;
        }

        // 围城相关成员必须先判 SiegeEvent
        if (settlement.IsUnderSiege && settlement.SiegeEvent != null)
        {
            SiegeStrategy strategy = settlement.SiegeStrategy;
            if (strategy != null && !string.IsNullOrEmpty(strategy.Name?.DefaultId))
            {
                Debug.Print("[Audit] " + settlement.StringId + " strategy=" + strategy.Name);
            }
        }
    }

    private void OnOwnerChanged(Settlement settlement, bool openToClaim,
        Hero newOwner, Hero oldOwner, Hero capturerHero,
        ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)
    {
        // 换主后旧统计失效
        _garrisonPeak.Remove(settlement);
    }
}
```

按位置找附近聚落（游标必须配对）：

```csharp
LocatableSearchData<Settlement> cursor =
    Settlement.StartFindingLocatablesAroundPosition(party.GetPosition2D(), 40f);
Settlement nearest = Settlement.FindNextLocatable(ref cursor);
if (nearest != null)
{
    party.SetMoveGoToSettlement(nearest);
}
```

## 风险与边界

- **sealed 不可继承**：同 [Hero](../Hero)，1.4.6 的 `Settlement` 没有继承扩展点。自定义数据放组件或 Behavior。
- **没有 `SettlementType` 枚举**：1.4.6 用 `IsTown` / `IsCastle` / `IsVillage` / `IsHideout` 与 `Town` / `Village` / `Hideout` 字段区分类型。凭记忆写 `settlement.SettlementType` 编译不过。
- **所有围城成员都要先判 `SiegeEvent`**：它为 null 时 `SiegeStrategy`、`SiegeEngines`、`SetNextSiegeState()`、`GetAttackTarget(...)` 全都会崩。`SiegeStrategy` 本身继承 `MBObjectBase`，没有围城时它也可能非 null 但语义无效。
- **`IsUnderRebellionAttack()` 是方法**：其它 `IsUnderSiege` / `IsUnderRaid` 是属性。混用会编译失败或读到错误的真值。
- **`GetPosition2D()` 与 `GetPositionAsVec3()` 是方法**：`Position` 才是属性。三者用途不同。
- **`SettlementHitPoints` 的 setter 是 internal**：mod 改整体耐久要走城墙分段的配套流程，直接写不进去。
- **城墙分段越界**：`SetWallSectionHitPointsRatioAtIndex` 的 `index` 必须小于 `WallSectionCount`，否则抛 `ArgumentOutOfRangeException`。
- **`ItemRoster` 与 `Stash` 是两个容器**：改一个不影响另一个。仓库物品在 `Stash`。
- **`Notables` / `Parties` / `HeroesWithoutParty` 是活视图**：在遍历它们时游戏可能增删成员，集合会抛枚举失效异常。要遍历先复制。
- **`IsVisible` 决定可交互性**：迷雾下未探索的聚落很多成员读了会拿到无效数据。UI 与交互逻辑都要先判它。
- **`RandomValue` 是存档字段**：改了会改变该聚落的全部随机结果，包括每日产量与事件。
- **主线程假设**：所有成员只在战役主循环读写；`OnPartyInteraction` 之类会触发 `IsSettlementBusyEvent`，在事件里再调同类方法会重入。
- **`FindNextLocatable` 游标易漏**：忘记消费或重复消费游标会让搜索结果错乱；它不是可重复使用的迭代器。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/`。1.4.6 相对它把 `Settlement` 上的「是否被围/是否被劫掠/是否叛乱」统一成布尔判定（`IsUnderSiege`、`IsUnderRaid`、`InRebelliousState`），并新增了 `SiegeState` 枚举与 `CurrentSiegeState` / `SetNextSiegeState()` / `ResetSiegeState()` 这组防守阶段成员，以及 `UnlockedFigureheadsByMainHero` 同批的 `Culture`、`Town`、`Village`、`Hideout`、`MilitiaPartyComponent`、`Stash` 这几组公开字段。核心的 `Party`、`Owner`、`OwnerClan`、`Settlements` 相关静态入口、`IsSettlementBusy`、`GetValue`、`Find(string)` 跨版本一致。

## 依赖关系

- 基类：[MBObjectBase](../../campaign-ext/MBObjectBase)。
- 战役根：[Campaign](../Campaign) — `Settlements` 集合与所有静态入口都转发给它。
- 领主：[Hero](../Hero) — `Owner`、`Notables`、`GetValue(hero)` 的参数类型。
- 事件源：[CampaignEvents](../CampaignEvents) — `IsSettlementBusy` 会触发 `IsSettlementBusyEvent`。
- Behavior 层：[CampaignBehaviorBase](../CampaignBehaviorBase) · [IDataStore](../IDataStore)。
- 对象注册表：[MBObjectManager](../../campaign-ext/MBObjectManager) — `Find` 最终落到它的 `GetObject<Settlement>`。
- 父级：[campaign API 目录导览](../)