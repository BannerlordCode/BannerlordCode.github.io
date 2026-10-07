---
title: "AlleyHelper"
description: "为巷战（Alley）管理界面提供薄包装与私有策略：转发给 PartyScreenHelper，并注入兵种可转移性判据和确认按钮的上下限条件。"
---

# AlleyHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class AlleyHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/AlleyHelper.cs`

## 概述

`AlleyHelper` 是巷战（Alley）玩法与通用部队界面之间的**薄适配层**。它自己不持有任何状态，只做两件事：把「管理巷战」的界面调用转发给 `PartyScreenHelper`，并在转发时注入两个私有策略——哪些兵种可以转移、确认按钮什么时候能按。此外它还提供一个多选询问，让玩家在家族成员里挑一个来统领巷战。

## 心智模型

把 `AlleyHelper` 想成**巷战规则与通用部队 UI 之间的翻译官**。游戏里的巷战本质上是一次「把部队成员派驻到巷子里」的操作，但底层 UI 是通用的 `PartyScreenHelper`，它不知道巷战的规则。`AlleyHelper` 的工作就是把巷战规则（英雄和囚犯不能转移、驻兵数有上下限）打包成两个委托，塞给通用 UI。

两个私有策略的分工很清晰：`IsTroopTransferable` 管**单个兵种能不能进巷子**（英雄和囚犯一律不行），`DoneButtonCondition` 管**整体数量合不合法**（驻兵数必须落在 `AlleyModel` 给出的上下限之间）。两者都通过 `Campaign.Current.Models.AlleyModel` 读规则，所以 mod 改了 `AlleyModel` 的上下限，这里的行为会跟着变。

`CreateMultiSelectionInquiryForSelectingClanMemberToAlley` 则是另一条路径：它不问 UI，直接弹一个多选框让玩家挑统领，可选项和禁用理由都来自 `AlleyModel`。

## 怎么用

### 怎么拿到它

静态类，直接调用。不需要实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**打开巷战管理界面**：调 `OpenScreenForManagingAlley`，传入左侧部队的 `TroopRoster`、完成回调、左侧标题文本，可选取消回调。界面打开后，确认按钮的亮灭由 `DoneButtonCondition` 自动接管，你不需要自己再判断。

**让玩家挑统领**：调 `CreateMultiSelectionInquiryForSelectingClanMemberToAlley`，传入目标巷子和两个回调（确认/取消）。每个家族成员的可选状态和禁用理由由 `AlleyModel` 决定，你只需要在回调里处理选中的那个成员。

### 最容易踩的坑

- **英雄和囚犯不可转移**：`IsTroopTransferable` 的判据是 `!character.IsHero && type != PartyScreenLogic.TroopType.Prisoner`，所以即使你把英雄放进了 `TroopRoster`，他在巷战界面里也是灰的。
- **上下限是硬约束**：`DoneButtonCondition` 在 `TotalRegulars` 超过 `MaximumTroopCountInPlayerOwnedAlley` 或低于 `MinimumTroopCountInPlayerOwnedAlley` 时都会禁用确认按钮，并给出对应的本地化文本。
- **`onCancelButtonClicked` 是可选的**：默认 `null`，但如果你需要取消时做清理（比如回滚临时状态），必须显式传。
- **多选询问的 min/max 都是 1**：虽然用的是 `ShowMultiSelectionInquiry`，但实际是单选，回调里拿到的列表最多一个元素。

## 关键成员

- `public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)` —— 薄包装，把调用转发给 `PartyScreenHelper.OpenScreenForManagingAlley`，并注入两个私有策略（兵种可转移性、确认按钮条件）。`AlleyHelper.cs:18`
- `private static Tuple<bool, TextObject> DoneButtonCondition(TroopRoster leftMemberRoster, TroopRoster leftPrisonRoster, TroopRoster rightMemberRoster, TroopRoster rightPrisonRoster, int lefLimitNum, int rightLimitNum)` —— 私有，不对外。确认按钮可用性：驻兵数超上限或下限时返回 `(false, 本地化文本)`，否则 `(true, null)`。`AlleyHelper.cs:24`
- `private static bool IsTroopTransferable(CharacterObject character, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, PartyBase leftOwnerParty)` —— 私有，不对外。判据 `!character.IsHero && type != PartyScreenLogic.TroopType.Prisoner`——英雄与囚犯都不可转移。`AlleyHelper.cs:42`
- `public static void CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)` —— 遍历 `AlleyModel.GetClanMembersAndAvailabilityDetailsForLeadingAnAlley`，为每个成员造 `InquiryElement`，弹多选询问让玩家挑统领。`AlleyHelper.cs:48`

## 真实示例

```csharp
AlleyModel alleyModel = Campaign.Current.Models.AlleyModel;
int max = alleyModel.MaximumTroopCountInPlayerOwnedAlley;
int min = alleyModel.MinimumTroopCountInPlayerOwnedAlley;

TroopRoster left = MobileParty.MainParty.MemberRoster;
AlleyHelper.OpenScreenForManagingAlley(false, left, null, new TextObject("{=MyMod_alley}Alley garrison"), null);
// 只有 left.TotalRegulars ∈ [min, max] 且不含英雄/囚犯时，确认按钮才会亮
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models` 是下面这些 helper 的真源
- ↔ [GameModels](../../campaign/GameModels) —— 强类型属性容器，模型的实际读取入口
- ↔ [GameModel](../GameModel) —— 所有玩法模型的抽象根类

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
