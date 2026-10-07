---
title: "AlleyHelper"
description: "巷战（Alley）管理界面的薄适配层：转发给 PartyScreenHelper，并注入兵种可转移性判据和确认按钮的上下限条件。"
---

# AlleyHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class AlleyHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/AlleyHelper.cs`（声明见第 15 行）

## 概述

`AlleyHelper` 是巷战（Alley）玩法与通用部队界面之间的**薄适配层**。它自己不持有任何状态，只做两件事：把「管理巷战」的界面调用转发给 `PartyScreenHelper`，并在转发时注入两个私有策略——哪些兵种可以转移、确认按钮什么时候能按。此外它还提供一个多选询问，让玩家在家族成员里挑一个来统领巷战。

## 心智模型

把 `AlleyHelper` 想成**巷战规则与通用部队 UI 之间的翻译官**。游戏里的巷战本质上是一次「把部队成员派驻到巷子里」的操作，但底层 UI 是通用的 `PartyScreenHelper`，它不知道巷战的规则。`AlleyHelper` 的工作就是把巷战规则（英雄和囚犯不能转移、驻兵数有上下限）打包成两个委托，塞给通用 UI。

两个私有策略的分工很清晰：`IsTroopTransferable` 管**单个兵种能不能进巷子**（英雄和囚犯一律不行），`DoneButtonCondition` 管**整体数量合不合法**（驻兵数必须落在 `AlleyModel` 给出的上下限之间）。两者都通过 `Campaign.Current.Models.AlleyModel` 读规则，所以 mod 改了 `AlleyModel` 的上下限，这里的行为会跟着变。

`CreateMultiSelectionInquiryForSelectingClanMemberToAlley` 则是另一条路径：它不问 UI，直接弹一个多选框让玩家挑统领，可选项和禁用理由都来自 `AlleyModel`。

**要改规则就换模型，不要改这个 helper。**

## 何时使用 / 何时不要使用

**何时使用：**
- 你要打开巷战管理界面，让玩家派驻或调整巷子驻军。
- 你要让玩家选一个家族成员来统领巷战。
- 你要理解「为什么确认按钮是灰的」——答案在 `AlleyModel` 的上下限里。

**何时不要使用：**
- 你要改巷战的规则（上下限、可选同伴）——改 `AlleyModel`，不是改这个 helper。
- 你要直接操作 `PartyScreenHelper`——如果你不需要巷战规则，直接调它。
- 你要处理巷战的创建、销毁、归属——那些在别处，不在这个 helper 里。

## 成员说明

| 成员 | 用途、副作用与时机 |
|---|---|
| `OpenScreenForManagingAlley(bool isNewAlley, TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)` | 薄包装，把调用转发给 `PartyScreenHelper.OpenScreenForManagingAlley`，并注入两个私有策略（兵种可转移性、确认按钮条件）。`AlleyHelper.cs:18` |
| `DoneButtonCondition(TroopRoster leftMemberRoster, TroopRoster leftPrisonRoster, TroopRoster rightMemberRoster, TroopRoster rightPrisonRoster, int lefLimitNum, int rightLimitNum)` | **私有，不对外**。确认按钮可用性：驻兵数超上限或下限时返回 `(false, 本地化文本)`，否则 `(true, null)`。`AlleyHelper.cs:24` |
| `IsTroopTransferable(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase leftOwnerParty)` | **私有，不对外**。判据 `!character.IsHero && type != PartyScreenLogic.TroopType.Prisoner`——英雄与囚犯都不可转移。`AlleyHelper.cs:42` |
| `CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)` | 遍历 `AlleyModel.GetClanMembersAndAvailabilityDetailsForLeadingAnAlley`，为每个成员造 `InquiryElement`，弹多选询问让玩家挑统领。`AlleyHelper.cs:48` |

## 示例

```csharp
// 规则的真源是 AlleyModel；AlleyHelper 只是把它的答案接到 UI 上
AlleyModel alleyModel = Campaign.Current.Models.AlleyModel;
int max = alleyModel.MaximumTroopCountInPlayerOwnedAlley;
int min = alleyModel.MinimumTroopCountInPlayerOwnedAlley;

TroopRoster left = MobileParty.MainParty.MemberRoster;
AlleyHelper.OpenScreenForManagingAlley(false, left, null, new TextObject("{=MyMod_alley}Alley garrison"), null);
// 只有 left.TotalRegulars ∈ [min, max] 且不含英雄/囚犯时，确认按钮才会亮
```

## 风险与边界

1. **两个私有策略决定了「谁能被转移」与「确认键何时可点」**——只看公开方法会以为规则在这里，其实**规则来自 `AlleyModel`**，本类只是把模型答案接到 UI 上。
2. **`DoneButtonCondition` 的 `lefLimitNum` / `rightLimitNum` 两个参数没有被使用**（24–39 行没有引用它们）——传什么都不会影响结果。
3. **英雄与囚犯恒不可转移**（44 行）——即使你把英雄放进了 `TroopRoster`，他在巷战界面里也是灰的。
4. **上下限是硬约束**——`DoneButtonCondition` 在 `TotalRegulars` 超过 `MaximumTroopCountInPlayerOwnedAlley` 或低于 `MinimumTroopCountInPlayerOwnedAlley` 时都会禁用确认按钮，并给出对应的本地化文本。
5. **`onCancelButtonClicked` 是可选的**——默认 `null`，但如果你需要取消时做清理（比如回滚临时状态），必须显式传。
6. **多选询问的 min/max 都是 1**——虽然用的是 `ShowMultiSelectionInquiry`，但实际是单选，回调里拿到的列表最多一个元素。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models.AlleyModel` 是巷子兵员上下限与可选同伴的真源。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 想改巷子规则就走替换模型，而不是改这个 helper。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[CaravanHelper](../CaravanHelper)
