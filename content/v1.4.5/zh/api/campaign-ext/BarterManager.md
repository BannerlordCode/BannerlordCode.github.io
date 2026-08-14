---
title: "BarterManager"
description: "战役中玩家与领主、家族、王国之间讨价还价的运行时协调器：打开交易窗口、评估报价价值、套用并结算 Barterable。"
---
# BarterManager

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BarterManager`  
**Base:** 无（直接继承 `System.Object`）  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterManager.cs`

## 一句话职责

它负责在战役里把「玩家想给对方钱/物/俘虏，换对方答应某事」这件事组织成一个可谈判的窗口：收集报价项、算出双方是否划算、在玩家点头时真正把金币和物品过户。

## 心智模型

把 `BarterManager` 理解为**战役层的一段谈判流程控制器**，而不是一个能自己存钱或搬货的仓库。

- 它平时由 `Campaign` 持有，整个存档里只有一份，写作 `Campaign.Current.BarterManager`，也有一个等价的静态入口 `BarterManager.Instance`。不要 `new BarterManager()`，也不要把它当单例长期缓存——存档读档后实例会被重建。
- 一次谈判的数据都装在 [`BarterData`](../BarterData/) 里：`BarterData` 持有参与双方英雄 [`Hero`](../../campaign/Hero/)、双方 [`PartyBase`](../../campaign/PartyBase/)，以及一组 [`Barterable`](../Barterable/)（金币、物品、俘虏、安全通行等报价项）。`BarterManager` 只是这些数据的「导演」。
- 玩家交易几乎总是在**一对一对话的 consequence** 里被触发：`StartBarterOffer` 内部会调用 `BeginPlayerBarter`，把当前 `CampaignMission` 切到 `MissionMode.Barter`，交给 Gauntlet 的交易界面。谈完后由 `ApplyAndFinalizePlayerBarter` / `CancelAndFinalizePlayerBarter` 收尾并把对话推进下去。
- AI 之间的交易不走 UI，`ExecuteAiBarter` 会自己平衡报价，只有两边阵营都觉得「不亏」（报价价值 ≥ 0）才真正结算。
- 结算不是直接改字段：`GoldBarterable.Apply` 内部调用的是 `GiveGoldAction.ApplyBetweenCharacters`，所以交易会同时触发金币转移事件、关系加成和存档边——这正是不要把交易逻辑搬去手写的原因。

## 如何获取 BarterManager

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;

// 两个写法等价，前者更短
BarterManager manager = BarterManager.Instance;
BarterManager sameManager = Campaign.Current.BarterManager;

// 读取上一次玩家谈判是否成交（通常在对谈后续 condition 里用）
bool accepted = Campaign.Current.BarterManager.LastBarterIsAccepted;
```

注意：`Campaign.Current` 尚未初始化时（例如 `MBSubModuleBase` 的 `OnSubModuleLoad` 早期、或战役还没开始）`BarterManager.Instance` 会是 `null`，此时访问任何成员都会抛空引用。

## 何时用 / 何时不要用

**用 `BarterManager` 当：**
- 你需要在玩家与领主/家族/王国之间，就金币、物品、俘虏、安全通行、和平、加入阵营等做**有 UI、可讨价还价**的谈判。
- 你只是想扩展现有交易窗口（往 `BarterData` 里塞自定义 [`Barterable`](../Barterable/)），而不是另起一套转账系统。

**不要用 `BarterManager` 当：**
- 只是想从 A 给 B 一笔钱 → 直接用 [`GiveGoldAction.ApplyBetweenCharacters`](../GiveGoldAction/)，不要为了一次转账打开整个谈判窗口。
- 只是想增减物品/俘虏 → 走 [`ItemRoster`](../ItemRoster/) 与对应的 `*Action`（如 `SellItemsAction`、`TakePrisonerAction`），不要绕过 `Barterable.Apply` 手写过户。
- 在 Mission 战斗场景或地图每日 tick 里调用 `StartBarterOffer`：它依赖对话与 `CampaignMission` 状态，脱离对话上下文调用会拿不到有效的 `MissionMode.Barter`。

## 关键成员与调用时机

按主题分组，每个成员给出用途、副作用与合适的调用时机。

### 访问入口与状态

#### `public static BarterManager Instance { get; }`
静态快捷入口，等价于 `Campaign.Current.BarterManager`。模组最常用它发起谈判或读取 `LastBarterIsAccepted`。`Campaign.Current` 为 `null` 时本属性也返回 `null`。

#### `public bool LastBarterIsAccepted { get; internal set; }`
本次玩家谈判是否最终被接受。`StartBarterOffer` 一开始把它置 `false`，`ApplyAndFinalizePlayerBarter` 结算成功时置 `true`。应在谈判真正收尾后（对话后续 consequence / condition）读取，不要把它当长期状态保存。

```csharp
bool success = Campaign.Current.BarterManager.LastBarterIsAccepted;
```

### 事件（订阅谈判边界）

#### `public BarterBeginEventDelegate BarterBegin`
委托类型 `bool BarterBeginEventDelegate(BarterData args)`。`BeginPlayerBarter` 在切入 `MissionMode.Barter` 之前触发。可以在这里对 `BarterData` 做最后调整或埋点。

#### `public BarterCloseEventDelegate Closed`
委托类型 `void BarterCloseEventDelegate()`。`Close` 在恢复 `MissionMode.Conversation` 之后触发，适合清理你自己在谈判期间挂的状态。

> 这两个都是普通多播委托（`BarterBegin` / `Closed`），直接用 `+=` / `-=` 订阅即可，没有专门的 `CampaignEventDispatcher` 包装。

### 发起玩家谈判

#### `public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)`
**用途**：打开一次玩家谈判窗口，这是模组最常用的入口。  
**副作用**：构造新的 `BarterData`；触发 `CampaignEventDispatcher.OnBarterablesRequested` 让各 `CampaignBehavior` 往里塞可谈判项；重置 `LastBarterIsAccepted = false`；调用 `BeginPlayerBarter` 切入 `MissionMode.Barter`。当 `offerer == Hero.MainHero && other != null && InitContext == null` 时会先检查玩家与该英雄的冷却，冷却中直接 `Debug.FailedAssert` 并返回（不打开窗口）。  
**调用时机**：几乎总是从对话树的 `on_consequence` 里调用。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.BarterSystem;
using TaleWorlds.CampaignSystem.Party;

// 与当前对话的领主打开一次普通谈判窗口
BarterManager.Instance.StartBarterOffer(
    Hero.MainHero,
    Hero.OneToOneConversationHero,
    PartyBase.MainParty,
    Hero.OneToOneConversationHero.PartyBelongedTo?.Party);
```

若想预设一笔金币报价再开窗，把 `Barterable` 放进最后一个参数：

```csharp
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

Hero other = Hero.OneToOneConversationHero;
Barterable goldOffer = new GoldBarterable(
    Hero.MainHero, other, PartyBase.MainParty, other.PartyBelongedTo?.Party, 500);

BarterManager.Instance.StartBarterOffer(
    Hero.MainHero, other, PartyBase.MainParty, other.PartyBelongedTo?.Party,
    null, null, 0, isAIBarter: false,
    new Barterable[] { goldOffer });
```

#### `public void BeginPlayerBarter(BarterData args)`
**用途**：正式把谈判切到前台——触发 `BarterBegin` 并把 `CampaignMission.Current` 设为 `MissionMode.Barter`。  
**副作用**：若当时没有 `CampaignMission` 则什么都不做；触发后玩家进入交易 UI。  
**调用时机**：一般由 `StartBarterOffer`（非 AI 分支）内部调用。除非你自己手搓了一个 `BarterData` 并要复用谈判 UI，否则不要直接调。

#### `public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`
**用途**：玩家点「接受」后由交易 UI 调用，真正套用所有被勾选的报价项并结束谈判。  
**副作用**：把 `LastBarterIsAccepted` 置 `true`；对每个 `GetOfferedBarterables()` 调 `Apply()`；触发 `OnBarterAccepted`；若玩家是多付的一方且对方不处于交战，调用 `ChangeRelationAction` 加关系；对 `otherHero` 写入冷却；恢复对话模式。  
**调用时机**：交易界面确认接受时。模组自定义交易收尾也可以调用它，但要保证传入的 `barterData` 与开窗时一致。

#### `public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`
**用途**：玩家拒绝/退出时收尾，不套用任何报价。  
**副作用**：调用 `Close()`；提示「报价被拒绝」；触发 `OnBarterCanceled`；继续对话。  
**调用时机**：交易界面取消时。

#### `public void Close()`
**用途**：结束当前谈判并把场景模式切回 `MissionMode.Conversation`。  
**副作用**：恢复对话模式、触发 `Closed` 事件。  
**调用时机**：通常由结算/取消流程内部调用；手动管理谈判 UI 时可在清理阶段调用。

### 评估报价价值

#### `public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)`
**用途**：判断 `hero`/`party` 这一方是否会接受当前报价。  
**副作用**：无副作用，纯计算。  
**调用时机**：UI 在玩家勾选/取消报价项时实时判定「接受」按钮是否可点；返回 `GetOfferValue(...) > -0.01f`。

#### `public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)`
**用途**：算出 `selfHero`/`selfParty` 这一方对一组报价的「划算程度」（正值=赚、负值=亏）。  
**副作用**：会顺带把 `_overpayAmount`（玩家多付部分）记下来，供后续关系加成使用。  
**调用时机**：`IsOfferAcceptable` 与 UI 实时评估时内部使用；也可以自己拿来自定义判定。

```csharp
float myValue = BarterManager.Instance.GetOfferValue(
    Hero.MainHero, PartyBase.MainParty,
    other.PartyBelongedTo?.Party,
    barterData.GetOfferedBarterables());
```

#### `public float GetOfferValueForFaction(BarterData barterData, IFaction faction)`
**用途**：算出某个阵营对整笔报价的价值合计。  
**副作用**：无。  
**调用时机**：AI 谈判里用来判断 `faction1` / `faction2` 是否都划算；模组扩展 AI 谈判时可复用。

### AI 自动谈判

#### `public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)`
**用途**：`ExecuteAiBarter(..., IEnumerable<Barterable>)` 的单条重载，内部包成数组后调用。  
**副作用**：见下方数组重载。  
**调用时机**：只有一个报价项时。

#### `public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)`
**用途**：在 `faction1` 与 `faction2` 之间做一次无 UI 的自动谈判。  
**副作用**：构造 `BarterData`（标记为 AI 谈判）、触发 `OnBarterablesRequested`、然后转调 `ExecuteAIBarter`。  
**调用时机**：王国 AI 之间议和、送礼、换俘等，由对应 `CampaignBehavior` 驱动，不在玩家对话里。

#### `public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)`
**用途**：低层 AI 结算：自动补齐平衡项，再判断两边阵营价值是否都 ≥ 0，是则直接 `Apply`。  
**副作用**：两边价值都非负时才套用 `Barterable` 并触发 `OnBarterAccepted`；否则**静默不结算**，不会发任何交易事件。  
**调用时机**：一般通过上述两个 `ExecuteAiBarter` 进入，模组很少直接调。

```csharp
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

Hero otherLeader = someLord;
BarterManager.Instance.ExecuteAiBarter(
    Hero.MainHero.MapFaction, otherLeader.MapFaction,
    Hero.MainHero, otherLeader,
    new GoldBarterable(Hero.MainHero, otherLeader, PartyBase.MainParty,
                       otherLeader.PartyBelongedTo?.Party, 1000));
```

### 前置条件

#### `public bool CanPlayerBarterWithHero(Hero hero)`
**用途**：玩家当前是否还能与该英雄谈判（冷却期内返回 `false`）。  
**副作用**：无。  
**调用时机**：打开玩家谈判前自己先判断，避免撞上 `StartBarterOffer` 内部的 `Debug.FailedAssert`。

```csharp
if (BarterManager.Instance.CanPlayerBarterWithHero(Hero.OneToOneConversationHero))
{
    BarterManager.Instance.StartBarterOffer(
        Hero.MainHero, Hero.OneToOneConversationHero,
        PartyBase.MainParty, Hero.OneToOneConversationHero.PartyBelongedTo?.Party);
}
```

### 上下文初始化器（作为 `InitContext` 委托）

下面四个方法签名都是 `bool InitializeXxxBarterContext(Barterable barterable, BarterData args, object obj)`，正好是 `StartBarterOffer` 的 `InitContext` 参数类型。它们用来从 `OnBarterablesRequested` 产出的一大堆候选里，挑出当前这场谈判真正该出现的那一项（例如「求婚」只显示对应两位英雄的 `MarriageBarterable`）。它们**不是**让你直接调用，而是作为方法组传给 `StartBarterOffer`：

```csharp
using TaleWorlds.CampaignSystem.BarterSystem.Barterables;

// 安全通行谈判：把初始化器作为委托传入
BarterManager.Instance.StartBarterOffer(
    Hero.MainHero, Hero.OneToOneConversationHero,
    PartyBase.MainParty, MobileParty.ConversationParty?.Party,
    null,
    BarterManager.Instance.InitializeSafePassageBarterContext,
    0, isAIBarter: false,
    new Barterable[]
    {
        new SafePassageBarterable(Hero.OneToOneConversationHero, Hero.MainHero,
                                  MobileParty.ConversationParty?.Party, PartyBase.MainParty),
        new NoAttackBarterable(Hero.MainHero, Hero.OneToOneConversationHero,
                               PartyBase.MainParty, MobileParty.ConversationParty?.Party,
                               CampaignTime.Days(5f))
    });
```

四个初始化器的匹配规则（来自源码）：

| 方法 | 期望的 `Barterable` 类型 | 匹配条件 |
|------|--------------------------|----------|
| `InitializeMarriageBarterContext` | `MarriageBarterable` | `obj` 为 `Tuple<Hero, Hero>`，且分别与求婚者/被求婚者一致 |
| `InitializeJoinFactionBarterContext` | `JoinKingdomAsClanBarterable` | `barterable.OriginalOwner == Hero.OneToOneConversationHero` |
| `InitializeMakePeaceBarterContext` | `PeaceBarterable` | `barterable.OriginalOwner == args.OtherHero` |
| `InitializeSafePassageBarterContext` | `SafePassageBarterable` | `barterable.OriginalParty == MobileParty.ConversationParty?.Party` |

### 委托类型

- `public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)` — `StartBarterOffer` 的 `InitContext` 参数类型。
- `public delegate void BarterBeginEventDelegate(BarterData args)` — `BarterBegin` 事件类型。
- `public delegate void BarterCloseEventDelegate()` — `Closed` 事件类型。

## 依赖图

`BarterManager` 自己不持有可谈判内容，它编排 [`BarterData`](../BarterData/)、[`Barterable`](../Barterable/) 与各种模型/行为：

- 上游：[`Campaign`](../../campaign/Campaign/) 持有唯一的 `BarterManager` 实例（`Campaign.Current.BarterManager`）；[`DiplomacyModel`](../DiplomacyModel/) 通过 `GetBarterGroups()` 提供默认 [`BarterGroup`](../BarterGroup/) 列表。
- 下游：[`BarterData`](../BarterData/) 收集报价项；各类 [`Barterable`](../Barterable/)（`GoldBarterable`、`ItemBarterable`、`PrisonerBarterable`、`SafePassageBarterable` 等）在 `Apply()` 时通过 [`GiveGoldAction`](../GiveGoldAction/)、`ChangeRelationAction`、`TakePrisonerAction` 等真正改变世界；[`BarterModel`](../BarterModel/) 决定冷却天数与多付关系加成。
- 行为/事件：各 `CampaignBehavior`（如 `LordConversationsCampaignBehavior`、`RomanceCampaignBehavior`、`BanditInteractionsCampaignBehavior`）在 `OnBarterablesRequested` 往 `BarterData` 加项；结算时经 `CampaignEventDispatcher.OnBarterAccepted` / `OnBarterCanceled` 通知全系统。
- 相关对象：[`Hero`](../../campaign/Hero/)、[`Clan`](../../campaign/Clan/)、[`Settlement`](../../campaign/Settlement/)、[`PartyBase`](../../campaign/PartyBase/)、[`ItemRoster`](../ItemRoster/) 是谈判两端的数据来源与落点。
- 边界：见 [崩溃与存档边界](../../../architecture/crash-boundaries/)。

## 风险与注意

1. **脱离对话调用**：`StartBarterOffer` 依赖 `CampaignMission.Current` 与对话状态（`CurrentConversationIsFirst`、`ConversationManager`）。从地图每日 tick、Mission 战斗回调或纯 UI 按钮直接调，可能无法切到 `MissionMode.Barter` 甚至抛空引用。只在对话 consequence 里开玩家窗口。
2. **冷却期**：玩家与同一英雄刚成交后进入冷却（`BarterModel.BarterCooldownWithHeroInDays`，存于 `_barteredHeroes` 字典）。`StartBarterOffer` 在 `InitContext == null` 时会 `Debug.FailedAssert` 并直接返回（开发构建直接断错、正式构建静默失败）。发起前用 `CanPlayerBarterWithHero` 检查；需要跳过冷却检查的特殊谈判则传入自定义 `InitContext`。
3. **绕过 `Barterable` 直接改钱/物**：金币、物品、俘虏的过户必须走对应 `Barterable.Apply`（内部用 `GiveGoldAction`、`TakePrisonerAction` 等），否则交易事件、关系加成、存档边都不会更新，世界状态会不一致。
4. **`LastBarterIsAccepted` 时序**：它在 `StartBarterOffer` 开头就被置 `false`，只有 `ApplyAndFinalizePlayerBarter` 真正成功才置 `true`。只能在一次谈判**收尾后**读取，不能跨谈判缓存。
5. **初始化前访问**：`Campaign.Current` 未就绪时 `BarterManager.Instance` 为 `null`，此时访问任何成员都会崩。在 `MBSubModuleBase` 早期或战役开始前不要碰它。
6. **AI 谈判静默失败**：`ExecuteAIBarter` 只在两边阵营价值都 ≥ 0 时结算，否则不触发任何 `Barterable.Apply`，也不会发 `OnBarterAccepted`。别假设 AI 谈判一定落地。

## 跨版本提示

- 1.3.15 与 1.4.5 的核心 API（`Instance`、`StartBarterOffer`、`ApplyAndFinalizePlayerBarter`、`ExecuteAiBarter`、`CanPlayerBarterWithHero`、四个 `Initialize*Context`）一致；本页以 1.4.5 源码为准。
- 1.4.5 明确显示：玩家成交后会依据 `BarterModel.CalculateOverpayRelationIncreaseCosts` 给「多付」的一方加关系，且对 `otherHero` 写入冷却；跨版本 mod 若要自定义交易，建议复用这些 `BarterModel` 钩子而不是自己重写结算。
- 业务只依赖本页列出的公开成员；不要依赖反编译文件里的私有字段（`_barteredHeroes`、`_overpayAmount`）或自动生成的 `AutoGenerated*` 收集方法。

## 导航

- [↑ 父级：campaign-ext 模块索引](../)
- [↔ 同级：BarterData](../BarterData/) · [BarterGroup](../BarterGroup/) · [Barterable](../Barterable/) · [BarterModel](../BarterModel/) · [SettlementComponent](../SettlementComponent/)
- [相关类：Settlement](../../campaign/Settlement/) · [Hero](../../campaign/Hero/) · [Clan](../../campaign/Clan/) · [PartyBase](../../campaign/PartyBase/) · [ItemRoster](../ItemRoster/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
