---
title: "ChangeGovernorAction"
description: "委任或解除城镇总督时一次性对齐驻地、忙碌状态、双向引用与总督变更事件的战役状态转换 Action。"
---

# ChangeGovernorAction

**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** `public static class ChangeGovernorAction`
**基类:** 无（静态类，不可实例化、不可继承）
**源文件路径:** `TaleWorlds.CampaignSystem/Actions/ChangeGovernorAction.cs`

## 一句话职责

在委任或解除一座城镇总督时，把「城镇引用、英雄引用、英雄驻地传送、总督变更事件」一次性对齐，避免出现「城镇说有总督、英雄却说自己不是总督」之类的单边引用。

## 心智模型

总督关系是一对**双向引用**：每座 [Town](../Town/)（城镇 / 城堡）有一个 `Governor` 指向担任总督的 [Hero](../../campaign/Hero)，反过来该 Hero 的 `GovernorOf` 指向这座 Town。`ChangeGovernorAction` 的全部价值，就是保证这对引用、相关传送和事件**同时**被写对。

- **它改动哪块战役状态**：目标 `Town.Governor`，以及被任命 / 被解任英雄的 `Hero.GovernorOf`、`Hero.IsWounded` 之外的忙碌标志；必要时还移动英雄的当前驻地。
- **为什么必须走 `Apply`，而不是直接改字段**：只写 `town.Governor = hero` 只会动一边，`hero.GovernorOf` 不会更新。后续读取 `hero.GovernorOf` 的生命周期代码（如 [GovernorCampaignBehavior](../GovernorCampaignBehavior/)）会基于过期链接做判断，甚至在英雄被移除时解引用一个已经不一致的引用，造成状态漂移、忠诚度 / 加成重算错位。直接字段赋值也不会触发下面的事件与传送。
- **触发什么级联**：派发 `OnGovernorChanged(fortification, oldGovernor, newGovernor)`（所有 [CampaignEventReceiver](../CampaignEventReceiver/) 订阅者都会看到旧总督已解除、新总督已设置的状态）；若新总督非空，紧接着派发 `OnHeroGetsBusy(governor, HeroGetsBusyReasons.BecomeGovernor)`，让英雄进入「忙碌」状态。
- **所在层**：纯战役层（Campaign），与任务（Mission）无关；必须在战役线程调用，且 Town / Hero 都未被销毁时调用。
- **Apply / ApplyInternal 契约**：`Apply` 是公开入口，只做参数透传，调用私有 `ApplyInternal` 执行全部真实逻辑（记忆旧总督、分支判定、传送、解引用旧总督、派发事件）。`RemoveGovernorOf` / `RemoveGovernorOfIfExists` 则走另一条私有路径 `ApplyGiveUpInternal`（「把某英雄从他当前的总督位上卸下」），不经由 `ApplyInternal`，因此**不会**进入「延迟传送」分支，也不会派发 `OnHeroGetsBusy`。

`ApplyInternal` 的三条分支（见 [成员说明](#成员说明)）决定了「立即任命」「延迟任命」「解除」三种结局；理解这三条分支是避免误判 `Town.Governor` 何时非空的关键。

## 何时用 / 何时不要用

**用 `ChangeGovernorAction` 的场景**

- 玩家在领地管理 / 城镇管理 UI 里选了新总督，或取消了选择。
- 领地易主（[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)）后需要清掉旧家族的总督。
- 英雄被移除、结婚、死亡、换家族首领（[ChangeClanLeaderAction](../ChangeClanLeaderAction/)）等，需要先卸下他担任的总督。
- 叛乱、任务奖励等任何需要程序化任命 / 解任总督的战役逻辑。

**不要用，或改用正确替代**

- ❌ 直接写 `town.Governor = hero` / `hero.GovernorOf = town` —— 绕过 Action，留下单边引用、不触发事件与传送。**正确做法**：`ChangeGovernorAction.Apply(town, hero)`。
- ❌ 对一个「可能是也可能不是总督」的 Town 调用 `RemoveGovernorOf(hero)` —— 内部会读 `hero.GovernorOf` 后解引用，若该英雄不是总督会 `NullReferenceException`。**正确做法**：用 `RemoveGovernorOfIfExists(town)` 做防御性清理。
- ❌ 在 `OnGovernorChanged` 事件处理器里同步再安排另一位总督 —— 原候选人紧接着还会收到 `OnHeroGetsBusy`，可能重入或重复安排。**正确做法**：把后续任命延后到下一 tick 或事件之外。
- ❌ 在存档读档的瞬间手动重放 `Apply` —— 总督引用随战役存档自动序列化，重放会重复派发事件。

## 依赖图

| 角色 | 关联 | 原因 |
|---|---|---|
| 城镇状态（上游） | [Town](../Town/) | `Town.Governor` 是 Settlement 一侧的总督引用，是被写的核心字段。 |
| 据点位置（上游） | [Settlement](../../campaign/Settlement/) | 分支判定依赖 `governor.CurrentSettlement == town.Settlement` 判断英雄是否已在驻地。 |
| 英雄状态（上游） | [Hero](../../campaign/Hero/) | `Hero.GovernorOf`、囚犯状态、当前位置、忙碌状态共同决定走哪条分支。 |
| 家族归属（上游） | [Clan](../../campaign/Clan/) | 总督通常来自某家族；换家族首领 / 领地易主时连带清总督。 |
| 传送实现（下游） | [TeleportHeroAction](../TeleportHeroAction/) | 立即分支用 `ApplyImmediateTeleportToSettlement`，延迟分支用 `ApplyDelayedTeleportToSettlementAsGovernor`。 |
| 事件派发（下游） | [CampaignEventReceiver](../CampaignEventReceiver/) | 派发 `OnGovernorChanged` 与 `OnHeroGetsBusy`，所有订阅者（含下方 Behavior）据此反应。 |
| 总督行为（下游） | [GovernorCampaignBehavior](../GovernorCampaignBehavior/) | 消费事件、在每日 tick 重算忠诚度 / 总督加成，并维护总督生命周期。 |
| 易主流程（下游） | [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/) | 领地易主常是「先清旧总督」的上游原因，调用 `RemoveGovernorOfIfExists`。 |
| 换家族首领（下游） | [ChangeClanLeaderAction](../ChangeClanLeaderAction/) | 新首领若原为某地总督，会被先 `RemoveGovernorOf` 卸任。 |
| 存档点 | 战役存档（自动序列化） | `Town` / `Hero` 都是战役对象，总督双向引用随战役存档自动保存与恢复，无需额外调用。 |

## 风险段

- **在战役 tick 之外或对象销毁时调用**：本 Action 直接读写战役对象并派发事件，必须在战役线程、且 Town 与 Hero 都有效时调用；在 SubModule 初始化、对象已被移除后再调用会触发空引用或陈旧状态。
- **直接改字段绕过 Action**：只改 `Town.Governor` 或 `Hero.GovernorOf` 单边，会让双向引用不一致，[GovernorCampaignBehavior](../GovernorCampaignBehavior/) 等后续读取会基于错误状态做忠诚度 / 加成重算，严重时导致坏档。始终用 `Apply`。
- **指派不合格的英雄（不校验资格）**：`Apply` 本身**不校验**英雄是否适合当总督。若传入囚犯或不在目标驻地的英雄，会进入「延迟传送」分支——此时 `Town.Governor` 被先置为 `null`（城镇暂时无总督），英雄只是被安排以总督身份延迟传送。**不要**误以为 `Apply` 返回后 `town.Governor != null`；只有在英雄真正抵达后才会被设为总督。
- **对不是总督的 Hero 调 `RemoveGovernorOf` 会崩溃**：内部执行 `governor.GovernorOf.Governor = null`，若 `governor.GovernorOf` 为 `null`（该英雄根本不是总督）即 `NullReferenceException`。仅在已确认 `hero.GovernorOf != null` 时用它；否则用 `RemoveGovernorOfIfExists(town)`。
- **事件内重入**：`OnGovernorChanged` 的订阅者不应在同一回调里同步再 `Apply` 一位新总督，原候选人紧接着还会收到 `OnHeroGetsBusy`，可能重复安排或重入。
- **存档 / 重算交互**：总督加成、村庄 / 城镇忠诚度等效果由 [GovernorCampaignBehavior](../GovernorCampaignBehavior/) 在每日 tick 重算。任命后不要手算这些数值；读档瞬间也不要手动重放 `Apply`，否则会重复派发事件并可能破坏序列化状态。

## 成员说明

### `public static void Apply(Town fortification, Hero governor)`

- **用途**：委任或解除总督的统一公开入口。
- **副作用**：透传给 `ApplyInternal`，由它执行分支逻辑、传送、解引用旧总督、派发 `OnGovernorChanged`；当 `governor` 非空时再派发 `OnHeroGetsBusy`。
- **何时调用**：已确定目标 `Town` 与候选人后调用。传 `null` 表示解除该 Town 的总督（此时只派发 `OnGovernorChanged`，不派发 `OnHeroGetsBusy`）。

### `public static void RemoveGovernorOf(Hero governor)`

- **用途**：面向「已知该英雄就是某座 Town 的总督」的严格卸任。
- **副作用**：经 `ApplyGiveUpInternal` 同时清空 `Town.Governor` 与 `governor.GovernorOf`，并派发 `OnGovernorChanged(town, governor, null)`。
- **何时调用**：仅在已确认 `governor.GovernorOf != null` 时使用（例如英雄被移除、结婚、死亡、易主前，原版 `Hero.cs`、`KillCharacterAction`、`MarriageAction`、`RemoveCompanionAction`、`ChangeClanLeaderAction` 等均先确认其为总督）。前提不满足会 `NullReferenceException`。

### `public static void RemoveGovernorOfIfExists(Town town)`

- **用途**：防御性的 Town 侧清理：仅当 `town.Governor != null` 才卸任。
- **副作用**：有总督时等价于 `RemoveGovernorOf(town.Governor)`；无总督时是空操作，安全无异常。
- **何时调用**：菜单取消选择、领地易主 / 清理阶段等「这个 Town 可能有也可能没有总督」的场景（原版 `ClanFiefsVM`、`TownManagementVM`、`ChangeOwnerOfSettlementAction` 都走这条防御路径）。

### `private static void ApplyInternal(Town fortification, Hero governor)`（内部）

- **用途**：`Apply` 背后的全部真实逻辑。
- **逻辑**：先记住旧总督 `governor2 = fortification.Governor`，再分三支：
  1. `governor == null` → `fortification.Governor = null`（单纯解除）。
  2. `governor.CurrentSettlement == fortification.Settlement && !governor.IsPrisoner` → 立即任命 `fortification.Governor = governor`，并 `TeleportHeroAction.ApplyImmediateTeleportToSettlement` 就地传送。
  3. 其他（英雄不在驻地或正被囚禁）→ 先 `fortification.Governor = null`，再 `TeleportHeroAction.ApplyDelayedTeleportToSettlementAsGovernor` 安排延迟传送（城镇在此期间处于无总督状态）。
- **收尾**：若 `governor2 != null` 则清其 `GovernorOf`；派发 `OnGovernorChanged(fortification, governor2, governor)`；若 `governor != null` 再派发 `OnHeroGetsBusy`。

### `private static void ApplyGiveUpInternal(Hero governor)`（内部）

- **用途**：被 `RemoveGovernorOf` 与 `RemoveGovernorOfIfExists` 共用的卸任实现，假定 `governor.GovernorOf != null`。
- **逻辑**：`Town governorOf = governor.GovernorOf;` 然后 `governorOf.Governor = null; governor.GovernorOf = null;` 并派发 `OnGovernorChanged(governorOf, governor, null)`。

## 最小真实示例

### 示例 1：任命主角到其当前所在的城镇（已在驻地、非囚犯 → 立即任命）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;

Settlement current = Hero.MainHero.CurrentSettlement;
if (current?.Town != null && !Hero.MainHero.IsPrisoner)
{
    // 主角已在目标驻地且非囚犯 → 进入立即分支，直接任命并就地传送
    ChangeGovernorAction.Apply(current.Town, Hero.MainHero);
}
```

### 示例 2：防御性解任某 fief 的总督（是否真有总督未知，避免 NRE）

```csharp
using TaleWorlds.CampaignSystem.Actions;

// 取消选择 / 清理阶段，不知道该 fief 是否还有总督时，用 IfExists 变体
Town town = someSettlement.Town;
ChangeGovernorAction.RemoveGovernorOfIfExists(town);
```

### 示例 3：已确认英雄是总督时严格卸任（来自原版 ClanVariablesCampaignBehavior 的调用形态）

```csharp
using TaleWorlds.CampaignSystem.Actions;

// 仅在该英雄确实担任总督时调用，避免 NullReferenceException
if (someHero.GovernorOf != null)
{
    ChangeGovernorAction.RemoveGovernorOf(someHero);
}
```

## 导航

- ↑ [父级：战役扩展 API](../)
- ↔ 同级：
  - [ChangeClanInfluenceAction](../ChangeClanInfluenceAction/)
  - [ClaimSettlementAction](../ClaimSettlementAction/)
  - [ChangeVillageStateAction](../ChangeVillageStateAction/)
  - [ChangeClanLeaderAction](../ChangeClanLeaderAction/)
  - [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)
- 相关类：
  - [Town](../Town/) · [Settlement](../../campaign/Settlement/) · [Hero](../../campaign/Hero/) · [Clan](../../campaign/Clan/)
  - [TeleportHeroAction](../TeleportHeroAction/) · [CampaignEventReceiver](../CampaignEventReceiver/) · [GovernorCampaignBehavior](../GovernorCampaignBehavior/)
