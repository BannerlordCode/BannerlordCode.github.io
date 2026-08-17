---
title: "MobileParty"
description: "战役战略地图上的移动队伍（领主队、商队、民兵、军队成员）：封装兵员/俘虏/物资 roster、领袖与派系归属、地图坐标与 AI 行为，是 Campaign 层最核心的动态实体之一。"
---
# MobileParty

**命名空间:** `TaleWorlds.CampaignSystem.Party`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`  
**基类:** `CampaignObjectBase`（战斗/roster 外壳由持有的 [PartyBase](../PartyBase) 通过 `Party` 属性提供，并非继承关系）  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobileParty.cs`

## 一句话职责

`MobileParty` 是战役地图上会移动、交易、战斗、加入军队、被消灭的「队伍」实体：它把 `PartyBase` 的兵员/俘虏/物资 roster 与战斗外壳，接到具体领袖、家族/派系、AI 决策、地图坐标与 Campaign 事件系统上。

## 心智模型

把 `MobileParty` 想成「战略地图上的一支活着的队伍」——它不是一个静态数据盒子，而是每帧、每 tick 都在被 Campaign 推进的动态对象。

- **它是什么**：一支在战略地图上拥有坐标、速度、目标和兵员的队伍。领主队（lord party）、商队（caravan）、民兵（militia）都是 `MobileParty`，区分只在于持有的 `PartyComponent` 类型（`LordPartyComponent` / `CaravanPartyComponent` / `WarPartyComponent` 等）。它的战斗与 roster 能力来自 `Party` 属性（一个 `PartyBase`），但 `MobileParty` 本身继承自 `CampaignObjectBase`，是 Campaign 层的追踪对象（`ITrackableCampaignObject`）。
- **谁创建与持有它**：`MobileParty.CreateParty(stringId, PartyComponent)` 静态方法创建队伍，并把它注册到当前 [Campaign](../Campaign)。之后必须调用 `InitializeMobilePartyAtPosition(...)` 把它放到地图上。原版的领主队、商队、村庄民兵都由对应的 `CampaignBehavior`（如 `CaravansCampaignBehavior`）在游戏进程中创建与维护；mod 不应绕过这套流程随意 `new`。
- **它在哪一层**：纯 Campaign（战略地图）层，不接触 Mission（战斗场景）。它的坐标用 `CampaignVec2`，移动由 AI（`MobilePartyAi`，通过 `Ai` 属性访问）和 `SetMove*` 系列方法驱动，而不是直接改坐标。
- **它如何被推进**：位置、食物、工资、士气等不是你写入的字段，而是在 Campaign 的每 tick 推进中由 `MobileParty` 自身的方法（基于 `PartySpeedModel`、`PartyWageModel`、`PartyMoraleModel`、`MapVisibilityModel` 等模型）重新计算。你读到的 `Food`、`TotalWage`、`Morale`、`SeeingRange` 都是「当前条件下的结果」。

## 何时用 / 何时不要用

- **用**：读取玩家队伍（`MobileParty.MainParty`）、遍历所有队伍（`Campaign.Current.MobileParties` / `MobileParty.All`）、读取领袖/兵员/俘虏/物资、当前据点、移动目标、所属军队、派系、速度/食物/工资等状态；或通过 `SetMove*` 给它下达移动意图。
- **用**：通过 `Settlement.Parties`、`Hero.Party`（领主所属队伍）或 `Army` 的成员集合获得已注册的队伍引用。
- **不要用（优先替代）**：不要直接把队伍从集合里移除、不要 `new MobileParty` 后只填一半、不要直接改 `Position`/`CurrentSettlement` 来「瞬移」队伍、不要直接清空 roster 或 `null` 掉 `LeaderHero`。任何**破坏性的结构性变更**（创建、解散、让英雄上下队、销毁）都必须走对应的 **Action**（`DestroyPartyAction`、`AddHeroToPartyAction` 等），让 Campaign 同步 Hero、`PartyBase`、`Army`、据点缓存与地图事件引用。
- **不要用**：不要把 `Food`/`TotalWage`/`Morale`/`Speed`/`SeeingRange` 当持久配置字段反向写入。要改规则，去替换或扩展对应的 Model，而不是每 tick 覆盖结果。

## 依赖

- 上游 / 持有者：
  - [Campaign](../Campaign) 持有队伍集合（`MobileParties`）、模型管理器与地图时间；`MobileParty.All` 与 `MainParty` 都从它取，不是跨存档的全局静态集合。
  - [PartyBase](../PartyBase) 提供 `MemberRoster`、`PrisonRoster`、`ItemRoster`、`MapEventSide` 与战斗交互，经 `Party` 属性暴露。
  - [Hero](../Hero) 通过 `LeaderHero` / `Owner` 接入；[Clan](../Clan) / [Kingdom](../Kingdom) 提供派系与领地上下文；[Settlement](../Settlement) 是当前据点或移动目标；[Army](../Army) 是所属军队。
  - [PartyComponent](../PartyComponent)（及其子类）决定队伍种类与职责。
- 下游 / 变更入口：
  - [MobilePartyAi](../MobilePartyAi) 驱动 AI 决策；[PartySpeedModel](../PartySpeedModel) / [PartyWageModel](../PartyWageModel) / [PartyMoraleModel](../PartyMoraleModel)（经 [GameModelsManager](../../core-extra/GameModelsManager/) 注册）计算移动/工资/士气。
  - [DestroyPartyAction](../../campaign-ext/DestroyPartyAction) 与 [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction) 是改变队伍结构关系的安全入口。
  - [CampaignEvents](../CampaignEvents) 上的「队伍创建/销毁、进入据点、地图事件、军队变化」等事件，是长期 `CampaignBehavior` 的观察点。
  - [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute) 标注了会被序列化进存档的字段（如 `_currentSettlement`、`_attachedTo`、`HasUnpaidWages`）。

## 风险边界

- **结构性变更必须走 Action**：直接把队伍从 `Campaign.Current.MobileParties` 移除、直接清空 `MemberRoster`/`PrisonRoster`、`null` 掉 `LeaderHero` 或 `RemoveParty()`（内部方法），会破坏 `Hero.PartyBelongedTo`、`Army` 成员关系、`CurrentSettlement` 的队伍缓存、地图事件（`MapEvent`）与附属（`AttachedTo`/`AttachedParties`）引用，并污染存档。销毁请用 `DestroyPartyAction`。
- **双向同步**：`PartyBase`、[Hero](../Hero)、[Settlement](../Settlement)、[Army](../Army)、`AttachedParties` 互相更新。只改其中一侧（例如只设 `CurrentSettlement` 而不走进入据点逻辑）会产生「英雄在 roster 里却不属于队伍」「队伍显示在某据点但据点不认识它」等坏状态。让英雄上下队用 `AddHeroToPartyAction` 等。
- **计算值是结果不是配置**：`Food`、`TotalWage`、`PaymentLimit`、`Morale`、`SeeingRange`、`PartySizeRatio` 都依赖当前 Model 与地图状态，可能随 tick 改变。缓存这些结果必须有明确的过期策略，不要拿旧值覆盖新状态。
- **短命目标引用**：`TargetParty`、`ShortTermTargetParty`、`ShortTermTargetSettlement`、当前的 `MapEvent`/`SiegeEvent` 都可能在你回调之后变为 `null` 或失效；使用前先判空，并尽量在用到时重新获取而非长期持有引用。
- **读档重建**：读档会重建 `PartyComponent`、路径、位置与 AI 缓存，旧的 `MobileParty`/`PartyBase` 引用不能当永久句柄。自定义 `CampaignBehavior` 应保存队伍的 `StringId`，读档完成后再用 `Campaign.Current.MobileParties` 查找。
- **创建时机**：`CreateParty` 依赖当前 Campaign；在模块加载、主菜单或 Campaign 已卸载阶段创建会缺少对象管理器与地图上下文，导致半成品队伍。

## 成员说明（按主题分组）

### 身份、归属与分类

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MainParty`（`static`，`=> Campaign.Current.MainParty`，line 276） | 取玩家队伍。读取前确认 Campaign 已存在；可能为 `null`（主菜单/读档中）。 |
| `All`（`static`，`=> Campaign.Current.MobileParties`，line 278） | 取当前 Campaign 的全部队伍。遍历时若要销毁，先复制集合再走 Action。 |
| `PartyComponent` / `LordPartyComponent` / `CaravanPartyComponent` / `WarPartyComponent`（line 1252/1248/1240/1242） | 读队伍种类与职责。`PartyComponent` 是创建时注入的；替换它会重建旗帜、主人、AI 与分类标记，应走初始化流程而非直接赋值。 |
| `LeaderHero`（`=> PartyComponent?.Leader`，line 796） | 读队伍领袖英雄。领袖死亡/换人会影响工资、名称、军队与地图显示；置空应走对应 Action。 |
| `Owner`（`=> _partyComponent?.PartyOwner`，line 816） | 读经济主人（拥有该队伍的角色）。与 `ActualClan` 共同决定阵营与工资来源。 |
| `ActualClan`（line 963） | 读队伍实际所属家族。家族变更会同步派系、颜色与行为。 |
| `IsLordParty` / `IsCaravan` / `IsMilitia`（line 1258/1264/1255） | 按 `PartyComponent` 类型判断队伍种类；用于分类遍历与行为区分。 |

### Roster 与物资（经 `Party` 暴露）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Party`（`=> PartyBase`，line 374） | 战斗与 roster 外壳。所有兵员/俘虏/物资操作都经它，不要脱离 `PartyBase` 单独维护一份。 |
| `MemberRoster` / `PrisonRoster` / `ItemRoster`（`=> Party.*`，line 1092/1094/1096） | 读/改兵员、俘虏、物品。roster 变更会回调 Hero 的所属关系与战斗统计，不能只改 Hero 端。增删英雄用 `AddHeroToPartyAction` 等。 |
| `TotalFoodAtInventory`（line 1156） | 由 `ItemRoster.TotalFood` 得出现有物资食物量；是 `Food` 的组成部分。 |

### 位置、目标与移动

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Position`（`CampaignVec2`，line 1052） | 读当前地图坐标。不要当作可自由赋值的字段——移动由 AI 与 `SetMove*` 推进。 |
| `CurrentSettlement`（line 598） | 读队伍当前所在据点（在据点外为 `null`）。进入/离开据点的 setter 会同步据点队伍缓存、附属队伍与视觉状态，应走对应进入逻辑。 |
| `TargetSettlement`（line 762） / `TargetParty`（line 780） | 读长期移动目标（据点 / 目标队伍）。可能随 AI 重算而失效。 |
| `ShortTermTargetSettlement`（line 433） / `ShortTermTargetParty`（line 431） | 读 AI 当前帧的实际短期目标（来自 `Ai.AiBehaviorPartyBase`）。可能在下一 tick 改变。 |
| `IsCurrentlyAtSea`（line 502） | 读队伍是否处于海上。影响移动与遭遇逻辑。 |
| `SetMoveGoToSettlement(Settlement, NavigationType, bool isTargetingThePort)`（line 3950） | 下达「前往据点」意图；会同步 AI、路径、海陆与视觉状态。不是瞬移。 |
| `SetMoveEngageParty(MobileParty, NavigationType)`（line 3932） | 下达「交战目标队伍」意图；同上，走统一移动入口。 |
| `Ai`（`=> MobilePartyAi`，line 371） | 读 AI 决策上下文（`MobilePartyAi`）。要改变移动意图调 `SetMove*`，不要改 `Ai` 内部缓存。 |

### 军队与附属

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Army`（line 680） | 读所属军队。加入/离开/解散/围城都会同步 `MapEvent`、Siege 与位置，不能只设一侧。 |
| `AttachedTo`（line 665） / `AttachedParties`（`=> _attachedParties`，line 325） | 读队伍被哪支队伍附属 / 附属了哪些队伍。附属关系同步位置与移动（`AttachedParties[i].Position = Position`），改动须走对应逻辑而非直接增删 `_attachedParties`。 |

### 计算结果（读，勿写回）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `TotalWage`（line 1086，`PartyWageModel.GetTotalWage`） | 依 roster 与 `PartyWageModel` 得当前应发工资；适合经济判断，不是应写回的预算字段。 |
| `PaymentLimit`（line 337） | 工资支付上限（组件 `WagePaymentLimit` 或 `PartyWageModel.MaxWagePaymentLimit`）。 |
| `Food`（line 1154） | `RemainingFoodPercentage` 与库存食物综合结果；随 tick 与库存变化。 |
| `Morale`（line 943） | 由 `PartyMoraleModel` 等计算，可能随状态波动。 |
| `SeeingRange`（line 1158，`MapVisibilityModel.GetPartySpottingRange`） | 视野/侦测范围，依赖地图与模型。 |
| `PartySizeRatio`（line 1188） | 容量使用比例；附属/军队会改变结果。 |
| `HasUnpaidWages`（field，line 113） | 累计未付工资，影响士气与行为；由工资结算流程维护。 |

## 最小真实示例

### 示例 1：读取玩家队伍并做安全检查

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

// 真实获取路径：玩家队伍来自当前 Campaign 的 MainParty
MobileParty playerParty = MobileParty.MainParty;
if (playerParty != null && playerParty.CurrentSettlement == null)
{
    float food = playerParty.Food;          // 经 PartyWageModel/库存实时计算
    int wage = playerParty.TotalWage;       // PartyWageModel.GetTotalWage
    CampaignVec2 pos = playerParty.Position; // 当前地图坐标
}
```

这些值来自当前玩家队伍与 AI/Model 结果；`Food`、`TotalWage`、坐标都可能在下一个 tick 变化，不要缓存为长期状态。

### 示例 2：遍历全部队伍并下达交战意图

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

// 真实集合：Campaign.Current.MobileParties（等价于 MobileParty.All）
foreach (MobileParty party in Campaign.Current.MobileParties)
{
    if (party.IsLordParty && party.TargetParty != null)
    {
        // 走统一移动入口，而非直接改 Position / TargetParty
        party.SetMoveEngageParty(party.TargetParty, NavigationType.Default);
    }
}
```

`IsLordParty`、`TargetParty`、`SetMoveEngageParty` 均已在该版本源码中验证。`TargetParty` 可能在迭代中途失效，使用前已判空；移动目标与队伍在执行时仍可能因遭遇、围城或地图状态而失效。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem.Party/MobileParty.cs` 源码为准，并交叉核对 `PartyBase`、`PartyComponent` 及 `TaleWorlds.CampaignSystem.Actions` 下相关 Action。跨版本使用时，重新核对 `CreateParty` 的构造参数、`SetMove*` 的 `NavigationType` 重载、`IsCurrentlyAtSea` 等海军相关成员，以及 AI 与 roster 回调的同步点。

## 导航

- ↑ 父级：[Campaign API 索引](../)
- ↔ 同级：[Campaign](../Campaign) · [Hero](../Hero) · [Clan](../Clan) · [Kingdom](../Kingdom) · [Settlement](../Settlement) · [Army](../Army) · [PartyBase](../PartyBase) · [CampaignObjectBase](../CampaignObjectBase) · [PartyComponent](../PartyComponent) · [TroopRoster](../TroopRoster) · [ItemRoster](../ItemRoster) · [CampaignEvents](../CampaignEvents)
- 相关模型与 AI：[MobilePartyAi](../MobilePartyAi) · [PartySpeedModel](../PartySpeedModel) · [PartyWageModel](../PartyWageModel) · [PartyMoraleModel](../PartyMoraleModel)
- 破坏性变更入口：[DestroyPartyAction](../../campaign-ext/DestroyPartyAction) · [AddHeroToPartyAction](../../campaign-ext/AddHeroToPartyAction) · [GameModelsManager](../../core-extra/GameModelsManager/) · [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute)
