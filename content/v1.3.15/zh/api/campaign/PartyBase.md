---
title: "PartyBase"
description: "战役世界里「部队」的统一句柄：既包裹移动中的 MobileParty，也包裹据点的守军；集中暴露名册、规模上限、位置、阵营与战斗力。不对外继承、不直接 new。"
---
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`  
**Base:** 无（直接继承 `System.Object`）；实现 `IBattleCombatant`、`IRandomOwner`、`IInteractablePoint`  
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`

## 一句话职责

`PartyBase` 是战役地图上**「一支部队」的统一抽象句柄**：它要么包裹一支会移动的 `MobileParty`，要么包裹一个据点（`Settlement`）的守军，并对外提供同一套接口——成员/俘虏名册、物品栏、规模上限、地图位置、阵营、领袖与战斗力——让遭遇、战斗、可见性、补给等系统不必区分「这是移动的还是驻扎的」。

> 注意：源码里 `PartyBase` 是 `sealed` 的**具体类**，不是抽象基类。它靠 `IsMobile` / `IsSettlement` 两个布尔来判断自己当前是哪一副面孔，而不是靠子类化。你的 mod 不应继承它，也不应自己 `new` 它。

## 心智模型

把 `PartyBase` 想成**「贴在 MobileParty 或 Settlement 上的同一张身份证」**：

- **两种形态，永远只有其一。** 构造时二选一：`new PartyBase(MobileParty)` 或 `new PartyBase(Settlement)`（见 `PartyBase.cs:899` 与 `:904`）。由此 `IsMobile` 与 `IsSettlement` 互斥，`MobileParty` 和 `Settlement` 属性恰好一个为 `null`。
- **谁创建、谁持有。** 引擎在 `MobileParty` 与 `Settlement` 的构造流程里各自 `new` 出配套的 `PartyBase`，并分别挂在 `MobileParty.Party` / `Settlement.Party` 上。你拿到的 `PartyBase` 永远来自这两个属性，而不是自己构造——私有构造器里会调用 `Campaign.Current.GeneratePartyId(this)` 分配 `Index`，脱离战役上下文无法正确创建。
- **所在层。** 纯 **Campaign（战役）层** 对象，由 `SaveSystem` 跟踪存档。它跟战斗场景（Mission）无关；进入战斗后，它的 `MapEvent`/`MapEventSide` 才被临时指派。
- **它是「被传递的那个对象」。** 遭遇判定、兵力计算、可见性刷新、守军/商队逻辑，拿到的参数类型都是 `PartyBase`，而不是具体的 `MobileParty` 或 `Settlement`。

## 何时用 / 何时不要用

**用 `PartyBase` 当：**

- 你手上有 `MobileParty` 或 `Settlement`，但需要的是「部队」层面的通用能力：读名册、读规模上限、读位置/阵营/领袖、算战斗力。
- 你在写接收 `PartyBase` 参数的 Behavior / Action / Model（例如自定义遭遇、自定义兵力模型、遍历所有部队）。

**不要：**

- **不要 `new PartyBase(...)`。** 直接读 `mobileParty.Party` 或 `settlement.Party`。自己 new 出来的实例没有合法 `Index`，也不会被战役追踪。
- **不要继承它。** 它是 `sealed`。
- **不要给英雄直接改名册。** 给部队加英雄要用 `AddHeroToPartyAction` / `TakePrisonerAction`，而不是 `AddMember` / `AddPrisoner`（见风险段）。
- **不要在 Mission（战斗场景）里改名册或读 `MapEvent`。** 这些是战役态数据，场景里改会和每帧同步冲突，可能坏档。
- **不要把 `MapEvent` / `MapEventSide` 当成长期状态。** 只在「正处于一场地图事件」期间有效，事件结束后会变 `null` 或被重新指派。

## 依赖图

```text
                    Campaign.Current (GeneratePartyId / Models / CameraFollowParty)
                                  │
              ┌───────────────────┴───────────────────┐
         MobileParty (IsMobile)                  Settlement (IsSettlement)
              │  .PartyComponent                       │  .PartyComponent (SettlementPartyComponent)
              └───────────────────┬───────────────────┘
                              PartyBase  ◄── 你通常通过 .Party 拿到它
                 │   │   │   │   │
        ┌────────┘   │   │   └────────┐
   TroopRoster   ItemRoster      MapEvent / MapEventSide      Hero (Owner / LeaderHero)
   (MemberRoster,                (仅事件期间)
    PrisonRoster)
```

**上游（它依赖谁）**

- [MobileParty](./MobileParty/) — `IsMobile` 形态时的本体，`MobileParty.Party` 返回它。
- [Settlement](./Settlement/) — `IsSettlement` 形态时的本体（守军），`Settlement.Party` 返回它。
- [PartyComponent](../campaign-ext/PartyComponent/) — `MobileParty` 持有的组件基类（守军用 `SettlementPartyComponent`）；决定部队的「类型」与行为。
- [TroopRoster](../campaign-ext/TroopRoster/) / [ItemRoster](../campaign-ext/ItemRoster/) — 实际存成员、俘虏、物品的数据容器。
- [Campaign](./Campaign/) — `Campaign.Current` 提供 `Models`、`GeneratePartyId`、`CameraFollowParty`。

**下游 / 消费者**

- [MapEvent](../campaign-ext/MapEvent/) — 战斗事件把参战双方收纳进 `MapEventSide`，并反向挂到 `PartyBase.MapEventSide`。
- 遭遇/可见性/兵力 系统（见下方相关 Models）。

**相关 Models（点击即真实页）**

- [PartySizeLimitModel](../campaign-ext/PartySizeLimitModel/) — `PartySizeLimit` / `PrisonerSizeLimit` 的计算来源。
- [PartyWageModel](../campaign-ext/PartyWageModel/) — 部队工资（由 `MobileParty` 汇总，规划人力成本时参考）。
- [PartyHealingModel](../campaign-ext/PartyHealingModel/) — `HealingRateForMember*` 的计算来源。
- [MilitaryPowerModel](../campaign-ext/MilitaryPowerModel/) — `EstimatedStrength` / `CalculateCurrentStrength` / `GetCustomStrength` 的算力来源。
- [EncounterModel](../campaign-ext/EncounterModel/) — `IsPartyUnderPlayerCommand` 与遭遇距离判定。
- [MapVisibilityModel](../campaign-ext/MapVisibilityModel/) — `UpdateVisibilityAndInspected` 中的可见性计算。

**相关 Actions（改名册/英雄的正确入口）**

- [AddHeroToPartyAction](../campaign-ext/AddHeroToPartyAction/) — 把英雄加入某部队（触发英雄状态）。
- [TakePrisonerAction](../campaign-ext/TakePrisonerAction/) — 把英雄收为俘虏。
- [TransferPrisonerAction](../campaign-ext/TransferPrisonerAction/) — 转移俘虏。

## 风险段（崩溃 / 坏档）

> 以下用法**可能导致 NullReferenceException 或存档损坏**，务必规避。

1. **形态判断与空引用。** `PartyBase` 是 `sealed`，无子类可转型。访问前先用 `IsMobile` / `IsSettlement` 判断形态：对守军直接读 `party.MobileParty` 会得到 `null`（反之亦然）。例如 `party.MobileParty.Position` 在据点守军上会直接 NRE。

2. **直接改名册而不走 Action（英雄）。** `AddMember` / `AddPrisoner` 只是 `TroopRoster.AddToCounts` 的薄封装（见 `PartyBase.cs:966` / `:971`），**不会**触发 `Hero.OnAddedToPartyAsPrisoner`、`PartyBase.OnHeroAdded`，也**不会**更新英雄的 `PartyBelongedTo` / `PartyBelongedToAsPrisoner`。给部队加英雄必须用 `AddHeroToPartyAction.Apply` / `TakePrisonerAction.Apply`；只有**普通兵种**才用 `AddMember`。

3. **名册改动时机。** 这些方法直接改战役状态，应在 Campaign 的 tick / Behavior / Action 中调用。在 Mission（战斗场景）里改 `MemberRoster` / `PrisonRoster`，会和每帧同步逻辑冲突，导致视觉不一致甚至坏档。

4. **需要 `Campaign.Current` 的属性。** `PartySizeLimit`、`PartySizeLimitExplainer`、`Culture`（= `MapFaction.Culture`）、`HealingRateForMember*`、`EstimatedStrength`、`CalculateCurrentStrength` 内部都访问 `Campaign.Current.Models.*`。在 `Campaign.Current == null`（主菜单、战役外）或 `MapFaction == null` 时调用会抛 **NullReferenceException**。`Culture` 对无阵营的瞬态部队尤其危险——先确认 `MapFaction != null`。

5. **跨存档持有引用 / 瞬态字段。** `PartyBase` 是 `SaveSystem` 跟踪对象，会话内引用稳定；但 `MapEvent` / `MapEventSide` 是**瞬态**的，事件结束后变 `null` 或被复用，不要当作长期状态缓存。另外 `RandomValue` 在旧档升级载入时若读到 0 会被重新随机（`AfterLoad`），**不要依赖它在存档间的确定性**。

6. **类型转换陷阱。** 没有「PartyBase 抽象基类」可供你向下转型的集合——它本身就已是具体实例，形态由 `IsMobile` / `IsSettlement` 决定，不要尝试在两者间强转或当成同一基类族处理。

## 成员说明（按主题）

### 规模与上限

| 成员 | 含义 / 副作用 / 调用时机 |
|------|--------------------------|
| `PartySizeLimit` (`int`) | 部队可容纳的成员上限。**缓存值**：以 `MemberRoster.VersionNo` 为版本号，名册变化才重算；重算走 `PartySizeLimitModel.GetPartyMemberSizeLimit`。需在战役内调用（依赖 `Campaign.Current`）。UI 显示容量、招募判定时读它。 |
| `PrisonerSizeLimit` (`int`) | 俘虏上限，逻辑同上但基于 `PrisonRoster`。 |
| `PartySizeLimitExplainer` / `PrisonerSizeLimitExplainer` (`ExplainedNumber`) | 带逐项拆解的上限来源（便于 tooltip 显示「为什么是这个数」）。同样依赖 `Campaign.Current`。 |
| `NumberOfHealthyMembers` / `NumberOfRegularMembers` / `NumberOfWoundedTotalMembers` / `NumberOfAllMembers` | 全部由 `MemberRoster` 派生（`TotalManCount - TotalWounded` 等）。只读，随时可查。 |
| `NumberOfPrisoners` | 来自 `PrisonRoster.TotalManCount`。 |
| `NumberOfMounts` / `NumberOfPackAnimals` | 来自 `ItemRoster`。 |
| `NumberOfMenWithHorse` / `NumberOfMenWithoutHorse` | 按 `CharacterObject.IsMounted` 统计；带版本缓存，名册变化才重算。 |
| `EstimatedStrength` (`float`) | 估算战斗力（用于 AI/显示），走 `MilitaryPowerModel.GetPowerOfParty(... Estimated)`。移动部队才有值，据点守军返回 0。依赖 `Campaign.Current`。 |
| `CalculateCurrentStrength()` | 基于当前 `MapEvent`/位置实时算战斗力；非移动部队返回 0。 |
| `GetCustomStrength(BattleSideEnum, MapEvent.PowerCalculationContext)` | 用你指定的阵营与上下文算战力，常用于自定义兵力评估。 |
| `HealingRateForMemberRegulars` / `HealingRateForMemberHeroes` (`float`) 及其 `*Explained` (`ExplainedNumber`) | 每日治疗量，走 `PartyHealingModel`。依赖 `Campaign.Current`。 |

### 形态、身份与归属

| 成员 | 含义 / 副作用 / 调用时机 |
|------|--------------------------|
| `IsMobile` / `IsSettlement` (`bool`) | **形态判别首选**。两者互斥，恰好一个为 `true`。 |
| `MobileParty` (`MobileParty`) | `IsMobile` 时为本体，否则 `null`。 |
| `Settlement` (`Settlement`) | `IsSettlement` 时为本体（守军），否则 `null`。 |
| `Owner` (`Hero`) | 优先返回自定义拥有者 `_customOwner`，否则退回 `MobileParty.Owner` / `Settlement.Owner`。 |
| `LeaderHero` (`Hero`) | 仅移动部队有（`MobileParty.LeaderHero`），守军为 `null`。 |
| `MapFaction` (`IFaction`) | 取 `MobileParty.MapFaction` 或 `Settlement.MapFaction`；两者皆无则为 `null`（见风险 4）。 |
| `Culture` (`CultureObject`) | = `MapFaction.Culture`。`MapFaction` 为 `null` 时抛 NRE。 |
| `Id` (`string`) | = `MobileParty?.StringId ?? Settlement.StringId`，全战役唯一。 |
| `Index` (`int`) | 引擎分配的部队序号（`Campaign.GeneratePartyId`）；`IsValid => Index >= 0`。 |
| `IsValid` (`bool`) | `Index >= 0`。 |
| `RandomValue` (`int`) | 随机种子；升级载入时若为 0 会重随机（见风险 5）。 |
| `CustomName` (`TextObject`) / `CustomBanner` (`Banner`) / `Banner` (`Banner`) | 自定义名/旗；`Banner` 退回 `MobileParty.Banner` / `Settlement.Banner`。 |
| `MainParty` (`static PartyBase`) | = `Campaign.Current.MainParty.Party`；战役外返回 `null`。 |
| `General` (`BasicCharacterObject`) | 部队主将角色：若在军团中返回军团领袖英雄的 `CharacterObject`，否则返回 `LeaderHero?.CharacterObject`。 |

### 名册（真实数据容器）

| 成员 | 含义 / 副作用 / 调用时机 |
|------|--------------------------|
| `MemberRoster` (`TroopRoster`) | 成员名册（含英雄与普通兵种）。**直接改它请用下方方法或 `*Action`**。 |
| `PrisonRoster` (`TroopRoster`) | 俘虏名册。 |
| `ItemRoster` (`ItemRoster`) | 物品/马匹栏。 |
| `PrisonerHeroes` (`IEnumerable<CharacterObject>`) | 遍历俘虏中的英雄角色。 |
| `AddMember(CharacterObject, int, int wounded = 0)` | `MemberRoster.AddToCounts` 薄封装。**普通兵种**用这个；英雄请用 `AddHeroToPartyAction`。 |
| `AddPrisoner(CharacterObject, int)` | 同上，作用于 `PrisonRoster`。 |
| `AddMembers(TroopRoster)` / `AddPrisoners(TroopRoster)` | 整份名册合并。 |
| `AddElementToMemberRoster(CharacterObject, int, bool insertAtFront = false)` | 指定插入位置加成员。 |
| `AddToMemberRosterElementAtIndex(int, int, int wounded = 0)` | 按索引加人/伤员。 |
| `WoundMemberRosterElements(CharacterObject, int)` / `WoundMemberRosterElementsWithIndex(int, int)` | 把现有成员标记为伤员（等价于 `AddToCounts(..., woundedCount)`）。 |
| `SetCustomOwner(Hero)` / `SetCustomName(TextObject)` / `SetCustomBanner(Banner)` | 写入自定义归属/名/旗，并 `SetVisualAsDirty()` 触发地图视觉刷新。 |

### 地图位置、遭遇与状态

| 成员 | 含义 / 副作用 / 调用时机 |
|------|--------------------------|
| `Position` (`CampaignVec2`) | 退回 `Settlement.Position` 或 `MobileParty.Position`。 |
| `IsVisible` / `IsActive` | 退回被包裹对象的可见性/激活态。 |
| `IsStarving` / `DaysStarving` / `RemainingFoodPercentage` | 断粮状态；`RemainingFoodPercentage < 0` 即 `IsStarving`。 |
| `MapEvent` (`MapEvent`) / `MapEventSide` (`MapEventSide`) | **仅事件期间**有效；事件结束后变 `null`。写 `MapEventSide` 会自动从旧边移除、加入新边，并级联同步附属部队。 |
| `Side` (`BattleSideEnum`) / `OpponentSide` | 当前所处战斗边；非事件期间为 `None`。 |
| `SiegeEvent` (`SiegeEvent`) | 包围事件（若有）。 |
| `Ships` (`MBReadOnlyList<Ship>`) / `FlagShip` (`Ship`) | 海军：本部队船只与旗舰（按 `FlagshipScore` 取最高）。 |
| `UpdateVisibilityAndInspected(CampaignVec2, float mainPartySeeingRange = 0f)` | 引擎在地图 tick 中重算可见性/已侦察；mod 极少需要手动调用。 |
| `IsPartyUnderPlayerCommand(PartyBase)` (`static`) / `IsUnderPlayersCommand(BattleSideEnum)` | 是否处于玩家指挥下，走 `EncounterModel.IsPartyUnderPlayerCommand`。 |
| `SetAsCameraFollowParty()` | 设置 `Campaign.Current.CameraFollowParty = this`（地图镜头跟随）。 |
| `OnConsumedFood()` | 重置 `_lastEatingTime`；由补给逻辑调用，mod 一般不直接用。 |
| `OnVisibilityChanged(bool)` / `SetVisualAsDirty()` / `OnVisualsUpdated()` | 视觉脏标记与事件分发，通常由引擎在状态变化时触发。 |

## 最小真实示例

### 示例 1：从 MobileParty / Settlement 拿到 PartyBase，读取规模与名册

```csharp
// 移动部队：MobileParty.Party 就是它的 PartyBase
MobileParty party = MobileParty.MainParty;
PartyBase pb = party.Party;

int memberLimit   = pb.PartySizeLimit;       // 成员上限（依赖 Campaign.Current）
int regulars      = pb.NumberOfRegularMembers;
int wounded       = pb.NumberOfWoundedTotalMembers;
int prisoners     = pb.NumberOfPrisoners;
TroopRoster roster = pb.MemberRoster;         // 真实名册容器

// 据点守军：Settlement.Party 是它的 PartyBase
Settlement town = Settlement.CurrentSettlement;
if (town != null && town.IsTown)
{
    PartyBase garrison = town.Party;
    if (garrison.IsSettlement)                // 永远先判断形态
    {
        int garrisonSize = garrison.NumberOfAllMembers;
    }
}
```

### 示例 2：加人要用对入口——兵种走 AddMember，英雄走 Action

```csharp
PartyBase party = MobileParty.MainParty.Party;

// 普通兵种：直接走名册封装即可
CharacterObject recruit = CharacterObject.All.FirstOrDefault(c => c.StringId == "looter");
if (recruit != null)
{
    party.AddMember(recruit, 5);   // 加 5 个，不触发英雄逻辑，安全
}

// 英雄：必须走 Action，否则英雄的 PartyBelongedTo / 俘虏状态不会更新
Hero someLord = Hero.FindFirst(h => h.IsLord && h.IsPrisoner);
if (someLord != null)
{
    // 错误：party.AddPrisoner(someLord.CharacterObject, 1);  ← 不更新英雄状态
    TakePrisonerAction.Apply(party, someLord);   // 正确：走 Action
}
```

### 示例 3：遍历所有部队并读取战斗力（仅在战役运行中）

```csharp
// 所有移动部队
foreach (MobileParty mp in MobileParty.All)
{
    PartyBase pb = mp.Party;
    float strength = pb.EstimatedStrength;   // 仅移动部队有值
    IFaction faction = pb.MapFaction;        // 先判 null 再用 Culture
    if (faction != null)
    {
        CultureObject culture = pb.Culture;
    }
}
```

## 跨版本提示

- 本页语义以 **bannerlord-1.4.5** 源码为准（`PartyBase` 为 `sealed` 具体类，`PartySizeLimit` 等带版本缓存）。
- v1.3.15 中 `PartyBase` 同样是 `sealed class`，核心接口一致；v1.4.5 在 `AfterLoad` 增加了旧档（`< v1.3.11`）主角俘虏迁移与船队初始化逻辑，写跨版本 mod 时无需特殊处理 `PartyBase` 本身。

## 参见

- ↑ 父级：[Campaign](./Campaign/) — 战役枢纽，`Campaign.Current` 提供 Models 与 `GeneratePartyId`
- ↑ 区域索引：[本区域目录](../)
- ↔ 同级（形态本体）：[MobileParty](./MobileParty/) · [Settlement](./Settlement/)
- ↔ 同层数据：[CharacterObject](./CharacterObject/) — 名册里的角色模板
- 相关组件：[PartyComponent](../campaign-ext/PartyComponent/)
- 相关名册：[TroopRoster](../campaign-ext/TroopRoster/) · [ItemRoster](../campaign-ext/ItemRoster/)
- 相关事件：[MapEvent](../campaign-ext/MapEvent/)
- 相关模型：[PartySizeLimitModel](../campaign-ext/PartySizeLimitModel/) · [PartyWageModel](../campaign-ext/PartyWageModel/) · [PartyHealingModel](../campaign-ext/PartyHealingModel/) · [MilitaryPowerModel](../campaign-ext/MilitaryPowerModel/) · [EncounterModel](../campaign-ext/EncounterModel/) · [MapVisibilityModel](../campaign-ext/MapVisibilityModel/)
- 相关行动：[AddHeroToPartyAction](../campaign-ext/AddHeroToPartyAction/) · [TakePrisonerAction](../campaign-ext/TakePrisonerAction/) · [TransferPrisonerAction](../campaign-ext/TransferPrisonerAction/)
- 对象管理：[MBObjectManager](../campaign-ext/MBObjectManager/)
