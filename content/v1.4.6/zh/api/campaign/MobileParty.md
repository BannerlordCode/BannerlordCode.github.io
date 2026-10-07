---
title: "MobileParty"
description: "地图上的移动部队实体：位置与移动、士气与工资、部队名册与物品栏、AI 行为目标、军队与围城归属，以及海陆过渡状态。"
---
# MobileParty

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Source:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`MobileParty` 是战役地图上所有移动部队的基类——领主队伍、商队、村民、驻军、匪徒、巡逻队、自定义队伍都是它。它把「一支在地图上移动的部队」拆成四个正交维度：**空间状态**（位置、朝向、移动目标、路径、海陆过渡）、**组织状态**（所属 `PartyComponent` 决定它是领主/商队/匪徒等、军队归属、围城归属、当前聚落）、**人员与物资**（`MemberRoster` / `PrisonRoster` / `ItemRoster` 三个名册，士气、工资、食物、负重）、以及 **AI 行为**（`DefaultBehavior` + `ShortTermBehavior` 双层行为状态机，由 `MobilePartyAi` 驱动）。

它是 `sealed` 类，5,450 行，是 campaign 桶里最大的实体类之一。mod 对它的读远多于写：绝大多数 mod 通过 `Campaign.Current.MobileParties` 或 `MobileParty.All` 遍历部队，读位置、士气、名册、行为文本来做决策；写操作则集中在 `SetMove*` 系列方法（让部队去某地/追击/围攻）和 `SetPartyComponent`（改变部队类型）。

## 心智模型

**它是「地图上一个有坐标、有编制、有行为意图的移动实体」，不是「战斗单位」。**

- 它管**地图层的一切**：位置怎么算、路径怎么走、什么时候到、士气怎么变、工资怎么扣、食物怎么消耗。
- 它**不管战斗层**：战斗打响后逻辑在 `Mission` 层，`MobileParty` 只提供 `Party`（`PartyBase`）作为战斗接口的桥。
- 它**不管 AI 决策**：`MobilePartyAi` 负责「下一步该干什么」，`MobileParty` 只负责「执行 AI 的决定」——设置目标点、计算路径、推进位置。
- 它**不管部队类型语义**：`PartyComponent`（`LordPartyComponent` / `CaravanPartyComponent` / `BanditPartyComponent` 等）决定「这支部队是什么」，`MobileParty` 只提供 `IsLordParty` / `IsCaravan` / `IsBandit` 等标志位。

**为什么它这么大**：地图移动是战役层最复杂子系统之一。一支部队同时要处理寻路（`ComputePath`）、海陆过渡（`IsCurrentlyAtSea` + `NavigationTransition`）、军队编队（`ArmyPositionAdder` + `AttachedTo`）、围城（`BesiegerCamp`）、遭遇战（`MapEventSide`）、饥饿（`FoodChange`）、士气（`Morale`）、工资（`TotalWage`）……这些逻辑全部内聚在 `MobileParty` 里，因为它们是「一支部队在地图上移动时」不可分割的方面。

**三个常见误用**。一是**直接 `new MobileParty()`**：构造函数是 `internal`，mod 只能通过 `MobileParty.CreateParty(stringId, component)` 创建。二是**把 `Position` 当只读**：它是可写的，但写它会绕过寻路系统，可能导致部队卡住或穿模。三是**在 `Speed` 里读非活跃部队**：`Speed` 对 `!IsActive` 的部队会 `FailedAssert` 并返回 0。

## 怎么用

### 怎么拿到

```csharp
// 玩家主队
MobileParty main = MobileParty.MainParty;

// 全部部队
foreach (MobileParty party in MobileParty.All) { /* ... */ }

// 按类型过滤
foreach (MobileParty lord in MobileParty.AllLordParties) { /* ... */ }
foreach (MobileParty caravan in MobileParty.AllCaravanParties) { /* ... */ }
```

### 典型用法

```csharp
// 让一支部队去某个聚落
party.SetMoveGoToSettlement(targetSettlement, MobileParty.NavigationType.Default, false);

// 让一支部队追击另一支部队
party.SetMoveEngageParty(targetParty, MobileParty.NavigationType.All);

// 读部队状态
float morale = party.Morale;
int wage = party.TotalWage;
bool isMoving = party.IsMoving;
TextObject behaviorText = party.GetBehaviorText();

// 改名册
party.AddElementToMemberRoster(character, 10);
party.AddPrisoner(prisonerCharacter, 1);
```

### 坑

- **`SetMove*` 系列会重置所有移动参数**。调 `SetMoveGoToSettlement` 会清掉 `TargetParty`、`TargetPosition`、`MoveTargetPoint`，设新的 `DefaultBehavior`。不要在设完一个目标后调另一个 `SetMove*` 而不意识到前一个被清了。
- **`IsCurrentlyAtSea` 的 setter 会级联**。设它会同步所有 `AttachedParties` 的海陆状态，触发 `OnMobilePartyNavigationStateChanged` 事件，并重算路径。
- **`PartyComponent` 决定一切类型语义**。`IsLordParty` / `IsCaravan` / `IsBandit` 等只是 `_partyComponent is XxxPartyComponent` 的缓存标志。换 `PartyComponent` 会调 `UpdatePartyComponentFlags()` 刷新全部标志。
- **`VersionNo` 是缓存失效信号**。名册、物品栏、位置变化都会 `UpdateVersionNo()`。读 `PartySizeRatio` / `TotalWeightCarried` 等缓存属性时，它们内部检查 `VersionNo` 来决定是否重算。

## 关键成员

### 静态入口

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `MainParty` | `public static MobileParty MainParty` | 玩家主队。转发 `Campaign.Current.MainParty` | `MobileParty.cs:427` |
| `All` | `public static MBReadOnlyList<MobileParty> All` | 全部部队。转发 `Campaign.Current.MobileParties` | `MobileParty.cs:437` |
| `AllLordParties` | `public static MBReadOnlyList<MobileParty> AllLordParties` | 全部领主部队 | `MobileParty.cs:477` |
| `AllCaravanParties` | `public static MBReadOnlyList<MobileParty> AllCaravanParties` | 全部商队 | `MobileParty.cs:447` |
| `AllBanditParties` | `public static MBReadOnlyList<MobileParty> AllBanditParties` | 全部匪徒部队 | `MobileParty.cs:467` |
| `AllGarrisonParties` | `public static MBReadOnlyList<MobileParty> AllGarrisonParties` | 全部驻军 | `MobileParty.cs:487` |
| `AllMilitiaParties` | `public static MBReadOnlyList<MobileParty> AllMilitiaParties` | 全部民兵 | `MobileParty.cs:497` |
| `AllVillagerParties` | `public static MBReadOnlyList<MobileParty> AllVillagerParties` | 全部村民 | `MobileParty.cs:507` |
| `AllCustomParties` | `public static MBReadOnlyList<MobileParty> AllCustomParties` | 全部自定义部队 | `MobileParty.cs:517` |
| `Count` | `public static int Count` | 部队总数 | `MobileParty.cs:537` |
| `CreateParty` | `public static MobileParty CreateParty(string stringId, PartyComponent component)` | 创建新部队。`stringId` 会被自动去重 | `MobileParty.cs:4900` |

### 身份与类型

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Name` | `public TextObject Name` | 部队名。优先 `Party.CustomName`，其次 `PartyComponent.Name` | `MobileParty.cs:557` |
| `Party` | `public PartyBase Party { get; private set; }` | 对应的 `PartyBase`。战斗与名册操作的入口 | `MobileParty.cs:744` |
| `PartyComponent` | `public PartyComponent PartyComponent { get; }` | 部队组件。决定部队类型语义 | `MobileParty.cs:4995` |
| `IsLordParty` | `public bool IsLordParty { get; private set; }` | 是否领主部队 | `MobileParty.cs:5038` |
| `IsCaravan` | `public bool IsCaravan { get; private set; }` | 是否商队 | `MobileParty.cs:5063` |
| `IsBandit` | `public bool IsBandit { get; private set; }` | 是否匪徒 | `MobileParty.cs:5087` |
| `IsGarrison` | `public bool IsGarrison { get; private set; }` | 是否驻军 | `MobileParty.cs:5075` |
| `IsVillager` | `public bool IsVillager { get; private set; }` | 是否村民 | `MobileParty.cs:5057` |
| `IsMilitia` | `public bool IsMilitia { get; private set; }` | 是否民兵 | `MobileParty.cs:5032` |
| `IsCustomParty` | `public bool IsCustomParty { get; private set; }` | 是否自定义部队 | `MobileParty.cs:5081` |
| `IsBanditBossParty` | `public bool IsBanditBossParty` | 是否匪首部队 | `MobileParty.cs:5091` |
| `SetPartyComponent` | `public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)` | 换部队组件。会调旧组件的 `Finish()` 和新组件的 `Create()` + `Initialize()` | `MobileParty.cs:5004` |
| `UpdatePartyComponentFlags` | `public void UpdatePartyComponentFlags()` | 刷新全部 `Is*` 标志 | `MobileParty.cs:5041` |

### 空间与移动

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Position` | `public CampaignVec2 Position` | 地图坐标。setter 会更新 `MobilePartyLocator` | `MobileParty.cs:3255` |
| `Bearing` | `public Vec2 Bearing { get; internal set; }` | 朝向向量 | `MobileParty.cs:584` |
| `MoveTargetPoint` | `public CampaignVec2 MoveTargetPoint` | 当前移动目标点 | `MobileParty.cs:5271` |
| `TargetPosition` | `public CampaignVec2 TargetPosition` | 目标位置。setter 会标记 AI 需重算 | `MobileParty.cs:1519` |
| `TargetSettlement` | `public Settlement TargetSettlement` | 目标聚落 | `MobileParty.cs:1493` |
| `TargetParty` | `public MobileParty TargetParty` | 目标部队 | `MobileParty.cs:1538` |
| `MoveTargetParty` | `public MobileParty MoveTargetParty` | 移动目标部队（AI 用） | `MobileParty.cs:5283` |
| `PartyMoveMode` | `public MoveModeType PartyMoveMode` | 移动模式：`Hold` / `Point` / `Party` | `MobileParty.cs:5275` |
| `IsMoving` | `public bool IsMoving` | 是否在移动 | `MobileParty.cs:4252` |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea` | 是否在海里。setter 级联到 `AttachedParties` | `MobileParty.cs:978` |
| `Speed` | `public float Speed` | 当前速度。对非活跃部队返回 0 | `MobileParty.cs:804` |
| `Path` | `public NavigationPath Path` | 当前路径 | `MobileParty.cs:5338` |
| `NextTargetPosition` | `public CampaignVec2 NextTargetPosition` | 下一个路径点 | `MobileParty.cs:5267` |
| `RecalculateLongTermPath` | `public bool RecalculateLongTermPath` | 重算长期路径 | `MobileParty.cs:4411` |
| `SetMoveModeHold` | `internal void SetMoveModeHold()` | 设为原地不动 | `MobileParty.cs:4655` |

### 移动指令（SetMove* 系列）

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `SetMoveModeHold` | `public void SetMoveModeHold()` | 原地不动。重置全部移动参数 | `MobileParty.cs:4655` |
| `SetMoveGoToSettlement` | `public void SetMoveGoToSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingThePort)` | 去聚落。`isTargetingThePort` 决定走城门还是港口 | `MobileParty.cs:4688` |
| `SetMoveGoToPoint` | `public void SetMoveGoToPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)` | 去指定坐标 | `MobileParty.cs:4700` |
| `SetMoveGoToInteractablePoint` | `public void SetMoveGoToInteractablePoint(IInteractablePoint point, MobileParty.NavigationType navigationType)` | 去可交互点 | `MobileParty.cs:4723` |
| `SetMoveEngageParty` | `public void SetMoveEngageParty(MobileParty party, MobileParty.NavigationType navigationType)` | 追击部队 | `MobileParty.cs:4668` |
| `SetMoveEscortParty` | `public void SetMoveEscortParty(MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isTargetingPort)` | 护送部队 | `MobileParty.cs:4734` |
| `SetMovePatrolAroundPoint` | `public void SetMovePatrolAroundPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)` | 巡逻 | `MobileParty.cs:4748` |
| `SetMovePatrolAroundSettlement` | `public void SetMovePatrolAroundSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingPort)` | 巡逻聚落周围 | `MobileParty.cs:4758` |
| `SetMoveRaidSettlement` | `public void SetMoveRaidSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingPort)` | 掠夺聚落 | `MobileParty.cs:4765` |
| `SetMoveBesiegeSettlement` | `public void SetMoveBesiegeSettlement(Settlement settlement, MobileParty.NavigationType navigationType)` | 围攻聚落 | `MobileParty.cs:4777` |
| `SetMoveDefendSettlement` | `public void SetMoveDefendSettlement(Settlement settlement, bool isTargetingPort, MobileParty.NavigationType navigationType)` | 防守聚落 | `MobileParty.cs:4790` |
| `SetMoveToNearestLand` | `public void SetMoveToNearestLand(Settlement settlement)` | 去最近陆地 | `MobileParty.cs:4711` |
| `SetMoveGoAroundParty` | `public void SetMoveGoAroundParty(MobileParty party, MobileParty.NavigationType navigationType)` | 绕到部队周围 | `MobileParty.cs:4678` |

### 组织归属

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Army` | `public Army Army` | 所属军队。setter 会处理加入/离开军队的事件 | `MobileParty.cs:1407` |
| `AttachedTo` | `public MobileParty AttachedTo` | 附属于哪支部队（军队编队） | `MobileParty.cs:1318` |
| `AttachedParties` | `public MBReadOnlyList<MobileParty> AttachedParties` | 附属部队列表 | `MobileParty.cs:588` |
| `BesiegerCamp` | `public BesiegerCamp BesiegerCamp` | 所属围城营地 | `MobileParty.cs:1441` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent` | 所属围城事件 | `MobileParty.cs:3661` |
| `BesiegedSettlement` | `public Settlement BesiegedSettlement` | 正在围的聚落 | `MobileParty.cs:3712` |
| `CurrentSettlement` | `public Settlement CurrentSettlement` | 当前所处聚落 | `MobileParty.cs:1241` |
| `HomeSettlement` | `public Settlement HomeSettlement` | 家乡聚落 | `MobileParty.cs:1291` |
| `MapEvent` | `public MapEvent MapEvent` | 所属遭遇战 | `MobileParty.cs:3357` |
| `MapEventSide` | `public MapEventSide MapEventSide` | 遭遇战中的阵营侧 | `MobileParty.cs:2002` |
| `ActualClan` | `public Clan ActualClan` | 实际所属家族 | `MobileParty.cs:2059` |
| `MapFaction` | `public IFaction MapFaction` | 地图势力。按 `ActualClan` → `Owner` → `HomeSettlement` 优先级推算 | `MobileParty.cs:3590` |

### 人员与物资

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `MemberRoster` | `public TroopRoster MemberRoster` | 成员名册。转发 `Party.MemberRoster` | `MobileParty.cs:3417` |
| `PrisonRoster` | `public TroopRoster PrisonRoster` | 俘虏名册。转发 `Party.PrisonRoster` | `MobileParty.cs:3427` |
| `ItemRoster` | `public ItemRoster ItemRoster` | 物品栏。转发 `Party.ItemRoster` | `MobileParty.cs:3552` |
| `Morale` | `public float Morale` | 士气。0–100，由 `PartyMoraleModel` 计算 | `MobileParty.cs:2026` |
| `TotalWage` | `public int TotalWage` | 总工资。由 `PartyWageModel` 计算 | `MobileParty.cs:3337` |
| `PaymentLimit` | `public int PaymentLimit` | 工资上限 | `MobileParty.cs:636` |
| `Food` | `public float Food` | 食物量 | `MobileParty.cs:3676` |
| `FoodChange` | `public float FoodChange` | 每日食物变化 | `MobileParty.cs:2037` |
| `TotalWeightCarried` | `public float TotalWeightCarried` | 总负重 | `MobileParty.cs:1986` |
| `InventoryCapacity` | `public int InventoryCapacity` | 物品栏容量 | `MobileParty.cs:1966` |
| `AddElementToMemberRoster` | `public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)` | 添加成员 | `MobileParty.cs:3577` |
| `AddPrisoner` | `public int AddPrisoner(CharacterObject element, int numberToAdd)` | 添加俘虏 | `MobileParty.cs:3583` |
| `ChangePartyLeader` | `public void ChangePartyLeader(Hero newLeader)` | 换领袖 | `MobileParty.cs:2107` |
| `GetNumDaysForFoodToLast` | `public int GetNumDaysForFoodToLast()` | 食物还能撑几天 | `MobileParty.cs:4127` |

### AI 行为

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Ai` | `public MobilePartyAi Ai { get; private set; }` | AI 决策器 | `MobileParty.cs:738` |
| `DefaultBehavior` | `public AiBehavior DefaultBehavior` | 默认行为。setter 会标记 AI 需重算 | `MobileParty.cs:1474` |
| `ShortTermBehavior` | `public AiBehavior ShortTermBehavior { get; internal set; }` | 短期行为 | `MobileParty.cs:884` |
| `ShortTermTargetParty` | `public MobileParty ShortTermTargetParty` | 短期目标部队 | `MobileParty.cs:832` |
| `ShortTermTargetSettlement` | `public Settlement ShortTermTargetSettlement` | 短期目标聚落 | `MobileParty.cs:847` |
| `IsFleeing` | `public bool IsFleeing` | 是否在逃跑 | `MobileParty.cs:3129` |
| `IsEngaging` | `public bool IsEngaging` | 是否在交战 | `MobileParty.cs:3877` |
| `GetBehaviorText` | `public TextObject GetBehaviorText` | 行为描述文本（UI 用） | `MobileParty.cs:2562` |
| `RecalculateShortTermBehavior` | `public void RecalculateShortTermBehavior()` | 重算短期行为 | `MobileParty.cs:3060` |

### 角色英雄

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `LeaderHero` | `public Hero LeaderHero` | 部队领袖 | `MobileParty.cs:1569` |
| `Owner` | `public Hero Owner` | 部队所有者 | `MobileParty.cs:1620` |
| `EffectiveScout` | `public Hero EffectiveScout` | 有效侦察英雄。若槽位英雄不属于本部队则回退到 `LeaderHero` | `MobileParty.cs:1635` |
| `EffectiveQuartermaster` | `public Hero EffectiveQuartermaster` | 有效军需官 | `MobileParty.cs:1649` |
| `EffectiveEngineer` | `public Hero EffectiveEngineer` | 有效工程师 | `MobileParty.cs:1663` |
| `EffectiveSurgeon` | `public Hero EffectiveSurgeon` | 有效外科医 | `MobileParty.cs:1677` |
| `EffectiveFirstMate` | `public Hero EffectiveFirstMate` | 有效大副 | `MobileParty.cs:1691` |
| `EffectiveNavigator` | `public Hero EffectiveNavigator` | 有效航海士 | `MobileParty.cs:1705` |
| `SetHeroPartyRole` | `public void SetHeroPartyRole(Hero hero, PartyRole partyRole)` | 设置英雄角色 | `MobileParty.cs:3886` |
| `GetRoleHolder` | `public Hero GetRoleHolder(PartyRole partyRole)` | 取角色英雄 | `MobileParty.cs:4061` |
| `GetEffectiveRoleHolder` | `public Hero GetEffectiveRoleHolder(PartyRole partyRole)` | 取有效角色英雄 | `MobileParty.cs:4084` |
| `RemoveAllPartyRolesOfHero` | `public void RemoveAllPartyRolesOfHero(Hero hero)` | 移除英雄全部角色 | `MobileParty.cs:3926` |
| `GetHeroPartyRoles` | `public List<PartyRole> GetHeroPartyRoles(Hero hero)` | 取英雄角色列表 | `MobileParty.cs:3956` |

### 海陆过渡

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `IsTransitionInProgress` | `public bool IsTransitionInProgress` | 是否在海陆过渡中 | `MobileParty.cs:1049` |
| `NavigationTransitionStartTime` | `public CampaignTime NavigationTransitionStartTime` | 过渡开始时间 | `MobileParty.cs:1066` |
| `NavigationTransitionDuration` | `public CampaignTime NavigationTransitionDuration` | 过渡持续时间 | `MobileParty.cs:1093` |
| `EndPositionForNavigationTransition` | `public CampaignVec2 EndPositionForNavigationTransition` | 过渡终点 | `MobileParty.cs:1061` |
| `SetSailAtPosition` | `public void SetSailAtPosition(CampaignVec2 position)` | 设为在海上 | `MobileParty.cs:1112` |
| `DisembarkToPosition` | `public void DisembarkToPosition(CampaignVec2 position)` | 设为上岸 | `MobileParty.cs:1126` |
| `CancelNavigationTransition` | `public void CancelNavigationTransition()` | 取消过渡 | `MobileParty.cs:1138` |
| `HasLandNavigationCapability` | `public bool HasLandNavigationCapability { get; private set; }` | 是否有陆地移动能力 | `MobileParty.cs:600` |
| `HasNavalNavigationCapability` | `public bool HasNavalNavigationCapability` | 是否有海上移动能力 | `MobileParty.cs:620` |
| `NavigationCapability` | `public MobileParty.NavigationType NavigationCapability` | 导航能力组合 | `MobileParty.cs:958` |

### 嵌套类型

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `PartyObjective` | `enum { Neutral, Defensive, Aggressive, NumberOfPartyObjectives }` | 部队目标倾向 | `MobileParty.cs:5360` |
| `NavigationType` | `[Flags] enum { None = 0, Default = 1, Naval = 2, All = 3 }` | 导航能力标志 | `MobileParty.cs:5374` |
| `CachedPartyVariables` | `internal struct` | 每帧计算的缓存变量 | `MobileParty.cs:5387` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static class PartyUtils
{
    // 找玩家主队附近的所有敌对部队
    public static List<MobileParty> FindNearbyEnemies(float radius)
    {
        var result = new List<MobileParty>();
        MobileParty main = MobileParty.MainParty;
        foreach (MobileParty party in MobileParty.All)
        {
            if (party == main || !party.IsActive) continue;
            if (party.MapFaction == null || !party.MapFaction.IsAtWarWith(main.MapFaction)) continue;
            float dist = Campaign.Current.Models.MapDistanceModel.GetDistance(main, party);
            if (dist < radius) result.Add(party);
        }
        return result;
    }

    // 让一支部队去围攻一个聚落
    public static void StartSiege(MobileParty party, Settlement settlement)
    {
        party.SetMoveBesiegeSettlement(settlement, MobileParty.NavigationType.All);
    }

    // 读部队的食物状况
    public static string GetFoodStatus(MobileParty party)
    {
        int days = party.GetNumDaysForFoodToLast();
        if (days < 0) return "starving";
        if (days < 3) return "low";
        return "ok";
    }
}
```

## 参见

- [`../Campaign`](../Campaign) — 战役根对象，`MobileParty.All` 等静态属性的数据来源。
- [`../Hero`](../Hero) — 领主实体，`LeaderHero` / `Owner` 的类型。
- [`../Settlement`](../Settlement) — 定居点实体，`TargetSettlement` / `CurrentSettlement` 的类型。
- [`../Clan`](../Clan) — 家族实体，`ActualClan` 的类型。
- [`../CharacterObject`](../CharacterObject) — 人物模板，名册元素的类型。
- [`../../campaign-ext/MBObjectBase`](../../campaign-ext/MBObjectBase) — 战役对象基类，`MobileParty` 的祖先。

## 导航

- 同桶：[`../Campaign`](../Campaign) · [`../Hero`](../Hero) · [`../Settlement`](../Settlement) · [`../Clan`](../Clan) · [`../CharacterObject`](../CharacterObject)
- 父索引：[`../_index`](../_index)
