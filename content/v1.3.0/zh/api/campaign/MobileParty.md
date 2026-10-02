---
title: "MobileParty"
description: "战役地图上会移动的部队：名册、移动指令、AI 状态、职务、食物、士气、可见性、船只与部队组件。"
---

# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`
**Base:** `CampaignObjectBase`
**File:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## 概述

`MobileParty` 是战役地图上的**移动**部队：商队、领主的战争部队、村民部队、守备队、民兵、巡逻队或强盗团。它不是名册——名册在 `MobileParty.Party`，也就是一个 [PartyBase](../PartyBase)。`MobileParty` 补上的是只有“会动的东西”才需要的东西：指令、路径、AI 状态、位置、职务、士气、食物与可见性。

它的结构分三层：

| 层 | 成员 | 生命周期 |
|----|------|----------|
| 身份 | `Name`、`Id`、`Index`、`PartyComponent`、`IsMainParty` | 可存档 |
| 名册 | 通过 `.Party`：`MemberRoster`、`PrisonRoster`、`ItemRoster`、`AddMember` | 可存档 |
| 移动 | `SetMove*` 指令、`Ai`、`Objective`、`Position`、`Speed`、`ShortTermBehavior` | 多为瞬态，会重算 |

一个 `PartyComponent` 负责分类：`LordPartyComponent`、`CaravanPartyComponent`、`VillagerPartyComponent`、`GarrisonPartyComponent`、`MilitiaPartyComponent`、`PatrolPartyComponent`、`WarPartyComponent`、`BanditPartyComponent`。`IsLordParty` / `IsCaravan` / `IsVillager` / `IsGarrison` / `IsMilitia` / `IsPatrolParty` / `IsBandit` / `IsCustomParty` 这些标志都是由此推导出来的。

## 心智模型

```
MobileParty (CampaignObjectBase)
 ├─ .Party ──► PartyBase (IsMobile)  ──► MemberRoster / PrisonRoster / ItemRoster
 ├─ PartyComponent ──► Lord / Caravan / Villager / Garrison / Militia / Patrol / War / Bandit
 ├─ LeaderHero / Owner / ActualClan / MapFaction
 ├─ EffectiveScout / Quartermaster / Engineer / Surgeon   （职务担任者）
 ├─ Ai (MobilePartyAi) ──► Objective、ShortTermBehavior、TargetSettlement
 ├─ SetMove* 指令 ──► 移动模式、目标、路径
 └─ Position / Speed / Morale / Food / IsVisible / IsInspected
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    MobileParty.All 已填充；MainParty 已解析
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.HourlyTickPartyEvent / DailyTickPartyEvent / AiHourlyTickEvent
HourlyTick（直接传入部队对象）
    读取 party.Speed、party.Food、party.Morale
    通过 party.SetMoveGoToSettlement(...) / SetMoveHold() 下达指令
    AI 在下一次 AI tick 依该指令重新规划路线
```

实际开发中最容易踩的坑：

- **`MobileParty` 上没有 `AddMember`。** 加兵要走 `party.Party.AddMember(...)` 或 `party.AddElementToMemberRoster(...)`。`AddPrisoner` 则两边都有。这种不对称是部队代码最常见的编译错误。
- **移动指令是目标，不是路径。** `SetMoveGoToSettlement` 设置的是目标；走哪条路由 AI 决定。下达指令后立刻读 `Position` 并假设部队已经移动，是错的。
- **`Position` 是 `CampaignVec2`，不是 `Vec2`。** `GetPosition2D()` 返回 `Vec2`。混用两者会悄悄破坏距离计算。
- **要读 `Party.MemberRoster`，而不是缓存副本。** 名册对象是原地修改的；缓存下来的 `TroopRosterElement` 计数在下一次每日 tick 之后就过期了。
- **附属部队不是独立军队。** `AttachedTo` 与 `AttachedParties` 构成一棵树。对宿主与附属部队的 `Party.EstimatedStrength` 求和会重复计算，因为附属士兵已经在宿主名册里了。
- **`SetPartyComponent` 会重新推导所有 `Is*Party` 标志。** 在运行时替换组件会把领主部队变成商队，让之前基于旧分类做出的 AI 决策全部失效。
- **`CreateParty` 需要组件参数。** 用 `null` 创建的部队没有分类、没有名册行为、也没有 AI 默认值。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 基类 | `CampaignObjectBase` → `MBObjectBase` | 可存档身份 |
| 名册 | [PartyBase](../PartyBase) | `Party` 持有 `MemberRoster` / `PrisonRoster` / `ItemRoster` |
| 人物 | [Hero](../Hero) | `LeaderHero`、`Owner`、职务担任者、`PartyBelongedTo` |
| 政治 | [Clan](../Clan)、[Kingdom](../Kingdom) | `ActualClan`、`MapFaction` |
| 地点 | [Settlement](../Settlement) | `CurrentSettlement`、`HomeSettlement`、`TargetSettlement`、`BesiegedSettlement` |
| AI | `MobilePartyAi`、`PartyThinkParams`、`AiBehavior` | `Ai`、`ShortTermBehavior`、`Objective` |
| 地图场景 | [MobilePartyVisual](../../campaign-ext/MobilePartyVisual) | 视觉对应物 |
| 事件 | [CampaignEvents](../CampaignEvents) | `HourlyTickPartyEvent`、`DailyTickPartyEvent`、`MobilePartyDestroyed` |

## 主要成员

### 身份

#### `public static MBReadOnlyList<MobileParty> All`（以及各分类列表）

`All` 加上 `AllCaravanParties`、`AllPatrolParties`、`AllBanditParties`、`AllLordParties`、`AllGarrisonParties`、`AllMilitiaParties`、`AllVillagerParties`、`AllCustomParties`、`AllPartiesWithoutPartyComponent`。都是战役维护的活动视图。

#### `public static MobileParty MainParty`

玩家部队。在编辑器与菜单场景下为 `null`。

#### `public static MobileParty CreateParty(string stringId, PartyComponent component)`

引擎工厂，返回一个已注册的部队。`new MobileParty()` 产出的是未注册对象，永远不会出现在 `All` 中，也不会被存档。

#### `public bool IsMainParty`

上面那个静态成员的实例视图；对任意部队都安全。

#### `public PartyComponent PartyComponent` / `public void SetPartyComponent(PartyComponent partyComponent, bool firstTimePartyComponentCreation = true)` / `public void UpdatePartyComponentFlags()`

分类。`SetPartyComponent` 会重新推导所有 `Is*Party` 标志，并在首次创建时初始化该组件的部队。

### 名册访问

#### `public PartyBase Party { get; private set; }`

名册对象。全部士兵、俘虏与物品的修改都在这里发生。

#### `public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)` / `public int AddPrisoner(CharacterObject element, int numberToAdd)`

部队上的直接名册修改。返回实际加入的数量（受规模上限钳制）。想让规模上限规则生效，就用它们而不是直接改名册。

#### `public MBReadOnlyList<Ship> Ships` / `public bool HasNavalNavigationCapability` / `public bool HasLandNavigationCapability`

海军状态。海军部队的速度模型、视觉与 AI 都不同。

### 移动指令

#### `public void SetMoveHold()`

取消一切移动，部队原地待命。

#### `public void SetMoveGoToSettlement(Settlement settlement, MobileParty.NavigationType navigationType, bool isTargetingThePort)`

前往某聚落。`navigationType` 取 `Default`、`Naval` 或 `All`；`isTargetingThePort` 对海军部队有意义。

#### `public void SetMoveGoToPoint(CampaignVec2 point, MobileParty.NavigationType navigationType)`

前往某个地图坐标。

#### `public void SetMoveRaidSettlement(Settlement, MobileParty.NavigationType)` / `SetMoveBesiegeSettlement(...)` / `SetMoveDefendSettlement(Settlement, bool isTargetingPort, MobileParty.NavigationType)`

进攻性与防御性指令。它们正是 AI 会挑选的指令，因此脚本部队使用它们时会参与劫掠 / 攻城逻辑，而不像独立行动者。

#### `public void SetMoveEngageParty(MobileParty party, MobileParty.NavigationType)` / `SetMoveGoAroundParty(...)` / `SetMoveEscortParty(...)` / `SetMovePatrolAroundPoint(...)` / `SetMovePatrolAroundSettlement(...)` / `SetMoveGoToInteractablePoint(IInteractablePoint, MobileParty.NavigationType)` / `SetMoveToNearestLand(Settlement)`

其余指令词汇。合起来覆盖了战役自带的每一种 `AiSet`。

#### `public void SetTargetSettlement(Settlement settlement, bool isTargetingPort)`

设置长期目标而不下达移动指令。当指令来自别处（任务、对话选项）时使用它。

#### `public bool RecalculateLongTermPath()` / `public void RecalculateShortTermBehavior()`

强制重算路径或短期行为。开销大；只在传送部队时调用，不要逐 tick 调用。

#### `public void SetPositionAfterMapChange(CampaignVec2 newPosition)` / `public void MovePartyToTheClosestLand()` / `public void CheckPositionsForMapChangeAndUpdateIfNeeded()` / `public void CheckAiForMapChangeAndUpdateIfNeeded()`

传送辅助。只有 `SetPositionAfterMapChange` 会同时让路径失效。

### 人物与职务

#### `public Hero LeaderHero` / `public Hero Owner`

谁在指挥部队、谁拥有它。民兵与村民部队的 `LeaderHero` 为 `null`。

#### `public void ChangePartyLeader(Hero newLeader)` / `public void RemovePartyLeader()`

领导权变更。这些都走部队领袖路径，以便同时更新前任领袖的 `PartyBelongedTo`。

#### `public void SetHeroPartyRole(Hero hero, PartyRole partyRole)` / `GetHeroPartyRole(Hero)` / `RemoveHeroPartyRole(Hero)` / `public Hero GetRoleHolder(PartyRole)` / `GetEffectiveRoleHolder(PartyRole)`

部队职务（队长、工匠、军医、军需官、斥候）。`GetRoleHolder` 是精确匹配；无人担任该职务时 `GetEffectiveRoleHolder` 会按技能推导一个替补。

#### `public Hero EffectiveScout` / `EffectiveQuartermaster` / `EffectiveEngineer` / `EffectiveSurgeon`

已经应用了替补逻辑的职务属性。速度、食物与导航读的就是它们。

#### `public bool HasPerk(PerkObject perk, bool checkSecondaryRole = false)`

专长检查；`checkSecondaryRole` 为 true 时还会考虑军需官——这正是 AI 权重使用的形式。

### 编成与补给

#### `public int TotalWage` / `public ExplainedNumber TotalWageExplained`

每日薪饷总额。`TotalWageExplained` 携带按士兵的明细。

#### `public float Food` / `public int TotalFoodAtInventory` / `public float FoodChange` / `public float BaseFoodChange` / `public ExplainedNumber FoodChangeExplained`

食物存量与消耗。`FoodChangeExplained` 显示哪些物资在贡献变化。

#### `public float Morale` / `public ExplainedNumber MoraleExplained`

士气及其成因。

#### `public float Speed` / `public ExplainedNumber SpeedExplained` / `public float LastCalculatedBaseSpeed`

当前速度，以及部队界面显示的解释。

#### `public float TotalWeightCarried` / `public int InventoryCapacity` / `public ExplainedNumber InventoryCapacityExplainedNumber`

负重与容量。超载会减速；解释数值会说明减速多少、原因是什么。

#### `public bool HasLimitedWage()` / `public int GetAvailableWageBudget()` / `public bool IsWageLimitExceeded()` / `public void SetWagePaymentLimit(int newLimit)` / `public int PaymentLimit` / `public float HasUnpaidWages`

薪饷结算机制。欠薪会累积士气损失。

### 贸易

#### `public bool IsPartyTradeActive { get; private set; }` / `public void InitializePartyTrade(int initialGold)` / `public int PartyTradeGold` / `public int PartyTradeTaxGold { get; private set; }` / `public void AddTaxGold(int amount)`

部队自己的贸易资金池，供商队与玩家使用。`InitializePartyTrade` 设定初始金币，`DefaultPartyTradeInitialGold` 为 5000。

### 位置、可见性与生命周期

#### `public CampaignVec2 Position` / `public Vec2 GetPosition2D()`

地图位置，分别为战役空间与旧版类型。

#### `public bool IsVisible` / `public bool IsInspected` / `public void UpdateVisibilityAndInspected(...)` 在 `PartyBase` 上

战争迷雾状态。为一个未被侦察的部队读取确切编成并展示出来，等于绕过视野模型。

#### `public MobileParty AttachedTo` / `public MBReadOnlyList<MobileParty> AttachedParties` / `public Army Army`

附属关系与军队归属。附属部队已经计入宿主名册。

#### `public void InitializeMobilePartyAtPosition(CampaignVec2 position)` 及其余三个名册 / 模板重载

战役创建时使用的布置辅助。它们一次性设置位置、填充名册并重置 AI 状态。

## 使用示例

### 示例 1：给玩家部队下令并确认指令已下达

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static void SendPlayerTo(Settlement settlement)
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || settlement == null)
    {
        return;
    }

    MobileParty party = campaign.MainParty;
    if (party == null)
    {
        return;
    }

    party.SetMoveGoToSettlement(settlement, MobileParty.NavigationType.Default, false);

    // 指令是目标而非传送：读目标，不要读位置。
    InformationManager.DisplayMessage(new InformationMessage(
        $"目标：{party.TargetSettlement?.Name.Name ?? "无"}，" +
        $"速度 {party.Speed:0.00}（{party.SpeedExplained.GetExplanations()}）"));
}
```

### 示例 2：通过部队而非名册加兵

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static int RecruitToMainParty(string characterId, int count)
{
    Campaign campaign = Campaign.Current;
    if (campaign?.MainParty == null)
    {
        return 0;
    }

    CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>(characterId);
    if (recruit == null)
    {
        return 0;
    }

    // MobileParty 自身没有 AddMember；名册对象才有。
    int added = campaign.MainParty.AddElementToMemberRoster(recruit, count);
    InformationManager.DisplayMessage(new InformationMessage(
        $"加入 {added} 人（上限 {campaign.MainParty.Party.PartySizeLimit}）"));
    return added;
}
```

### 示例 3：遍历有职务担任者的领主部队

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static string DescribeLordParties()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return "无战役";
    }

    string report = string.Empty;
    foreach (MobileParty party in campaign.LordParties)
    {
        Hero surgeon = party.EffectiveSurgeon;
        Hero leader = party.LeaderHero;
        report += $"{party.Name}：领袖 {leader?.Name.Name ?? "无"}，" +
                  $"军医 {surgeon?.Name.Name ?? "无"}，实力 {party.Party.EstimatedStrength:0}\n";
    }

    return report;
}
```

### 示例 4：传送后阻止部队乱走

```csharp
using TaleWorlds.CampaignSystem.Party;

public static void TeleportAndReset(MobileParty party, CampaignVec2 destination)
{
    if (party == null)
    {
        return;
    }

    party.SetMoveHold();
    party.SetPositionAfterMapChange(destination);

    // 传送后残留的过期路径会让部队走出地图边缘。
    party.RecalculateLongTermPath();
    party.RecalculateShortTermBehavior();
}
```

## 风险与崩溃边界

1. **名册 API 不对称。** `MobileParty` 暴露 `AddElementToMemberRoster` 与 `AddPrisoner`，但没有 `AddMember`；请用 `party.Party.AddMember`。混用两者的规模上限行为不同。
2. **未注册的部队。** `new MobileParty()` 不在 `All` 中、不会被存档、也没有 AI。请用 `MobileParty.CreateParty` 并传入 `PartyComponent`。
3. **位置类型不匹配。** `Position` 是 `CampaignVec2`，`GetPosition2D()` 是 `Vec2`。在某些方向上互相赋值是静默的逻辑错误而非编译错误。
4. **给活跃部队换分类。** `SetPartyComponent` 会重新推导所有 `Is*Party` 标志并让 AI 缓存的决策失效。应在部队开始移动之前做，而不是移动途中。
5. **附属部队重复计算。** `AttachedParties` 中的成员已经在宿主名册里。对宿主与附属部队的 `EstimatedStrength` 求和会夸大实力并带偏 AI。
6. **与存档耦合。** `Name`、`Position`、`IsActive`、`IsPartyTradeActive`、部队贸易金币、船只与组件分类都会序列化。重排存档 id 会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
7. **传送后路径失效。** 只调用 `SetPositionAfterMapChange` 会留下过期路径；之后必须调用 `RecalculateLongTermPath()`，否则部队会从新位置朝旧目的地走。
8. **逐 tick 开销。** 在多个行为里对每个小时 tick 扫描 `MobileParty.All`（或 `LordParties`）代价不低。请改订阅 `CampaignEvents.HourlyTickPartyEvent` / `DailyTickPartyEvent`，它们会直接把对象交给你。
9. **战争迷雾泄露。** 读取玩家尚未侦察到的部队名册并展示在 UI 或通知中，等于绕过视野模型。

## 跨版本提示

- `SetMove*` 指令词汇、`PartyComponent` 分类以及“名册放在 `PartyBase` 上”的分层在 1.3.x 与 1.4.x 中完全一致。
- 海战支持（`Ships`、`HasNavalNavigationCapability`、港口目标）在 1.3.0 中已存在并在此后扩展；旧存档在加载时会得到空船只列表。若要兼容很旧的存档，请对 `Ships` 做防御。

## 参见

- [PartyBase](../PartyBase) — 名册真正所在之处
- [Hero](../Hero) — 领袖、所有者与职务担任者
- [Clan](../Clan) — `ActualClan` 与所有权
- [Settlement](../Settlement) — 目的地、守备队与驻地
- [Kingdom](../Kingdom) — 领主部队效力的王国
- [Campaign](../Campaign) — 部队注册表与战役时钟
- [MobilePartyVisual](../../campaign-ext/MobilePartyVisual) — 地图场景对象
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南