---
title: "PartyVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyVM.cs`

## 概述

`PartyVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; }` |
| `CanRightPartyTakeMoreTroops` | `public bool CanRightPartyTakeMoreTroops { get; }` |
| `CanRightPartyTakeMorePrisoners` | `public bool CanRightPartyTakeMorePrisoners { get; }` |
| `CurrentCharacter` | `public PartyCharacterVM CurrentCharacter { get; set; }` |
| `OtherPartySortController` | `public PartySortControllerVM OtherPartySortController { get; set; }` |
| `MainPartySortController` | `public PartySortControllerVM MainPartySortController { get; set; }` |
| `OtherPartyComposition` | `public PartyCompositionVM OtherPartyComposition { get; set; }` |
| `MainPartyComposition` | `public PartyCompositionVM MainPartyComposition { get; set; }` |
| `CurrentFocusedCharacter` | `public PartyCharacterVM CurrentFocusedCharacter { get; set; }` |
| `CurrentFocusedUpgrade` | `public UpgradeTargetVM CurrentFocusedUpgrade { get; set; }` |
| `HeaderLbl` | `public string HeaderLbl { get; set; }` |
| `OtherPartyNameLbl` | `public string OtherPartyNameLbl { get; set; }` |
| `OtherPartyTroops` | `public MBBindingList<PartyCharacterVM> OtherPartyTroops { get; set; }` |
| `OtherPartyPrisoners` | `public MBBindingList<PartyCharacterVM> OtherPartyPrisoners { get; set; }` |
| `MainPartyTroops` | `public MBBindingList<PartyCharacterVM> MainPartyTroops { get; set; }` |
| `MainPartyPrisoners` | `public MBBindingList<PartyCharacterVM> MainPartyPrisoners { get; set; }` |
| `UpgradePopUp` | `public PartyUpgradeTroopVM UpgradePopUp { get; set; }` |
| `RecruitPopUp` | `public PartyRecruitTroopVM RecruitPopUp { get; set; }` |
| `SelectedCharacter` | `public HeroViewModel SelectedCharacter { get; set; }` |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl { get; set; }` |
| `CurrentCharacterWageLbl` | `public string CurrentCharacterWageLbl { get; set; }` |
| `TransferAllOtherTroopsHint` | `public BasicTooltipViewModel TransferAllOtherTroopsHint { get; set; }` |
| `TransferAllOtherPrisonersHint` | `public BasicTooltipViewModel TransferAllOtherPrisonersHint { get; set; }` |
| `TransferAllMainTroopsHint` | `public BasicTooltipViewModel TransferAllMainTroopsHint { get; set; }` |
| `TransferAllMainPrisonersHint` | `public BasicTooltipViewModel TransferAllMainPrisonersHint { get; set; }` |
| `CurrentCharacterTier` | `public StringItemWithHintVM CurrentCharacterTier { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `OtherPartyAccompanyingLbl` | `public string OtherPartyAccompanyingLbl { get; set; }` |
| `MoraleHint` | `public HintViewModel MoraleHint { get; set; }` |
| `TotalWageHint` | `public HintViewModel TotalWageHint { get; set; }` |
| `SpeedHint` | `public BasicTooltipViewModel SpeedHint { get; set; }` |
| `MainPartyTroopSizeLimitHint` | `public BasicTooltipViewModel MainPartyTroopSizeLimitHint { get; set; }` |
| `MainPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel MainPartyPrisonerSizeLimitHint { get; set; }` |
| `OtherPartyTroopSizeLimitHint` | `public BasicTooltipViewModel OtherPartyTroopSizeLimitHint { get; set; }` |
| `OtherPartyPrisonerSizeLimitHint` | `public BasicTooltipViewModel OtherPartyPrisonerSizeLimitHint { get; set; }` |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint { get; set; }` |
| `DenarHint` | `public HintViewModel DenarHint { get; set; }` |
| `LevelHint` | `public HintViewModel LevelHint { get; set; }` |
| `WageHint` | `public HintViewModel WageHint { get; set; }` |
| `TitleLbl` | `public string TitleLbl { get; set; }` |
| `MainPartyNameLbl` | `public string MainPartyNameLbl { get; set; }` |
| `FormationHint` | `public HintViewModel FormationHint { get; set; }` |
| `TalkLbl` | `public string TalkLbl { get; set; }` |
| `InfoLbl` | `public string InfoLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `TroopsLabel` | `public string TroopsLabel { get; set; }` |
| `PrisonersLabel` | `public string PrisonersLabel { get; set; }` |
| `MainPartyTotalGoldLbl` | `public string MainPartyTotalGoldLbl { get; set; }` |
| `MainPartyTotalMoraleLbl` | `public string MainPartyTotalMoraleLbl { get; set; }` |
| `MainPartyTotalSpeedLbl` | `public string MainPartyTotalSpeedLbl { get; set; }` |
| `MainPartyTotalWeeklyCostLbl` | `public string MainPartyTotalWeeklyCostLbl { get; set; }` |
| `IsCurrentCharacterFormationEnabled` | `public bool IsCurrentCharacterFormationEnabled { get; set; }` |
| `IsCurrentCharacterWageEnabled` | `public bool IsCurrentCharacterWageEnabled { get; set; }` |
| `CanChooseRoles` | `public bool CanChooseRoles { get; set; }` |
| `OtherPartyTroopsLbl` | `public string OtherPartyTroopsLbl { get; set; }` |
| `OtherPartyPrisonersLbl` | `public string OtherPartyPrisonersLbl { get; set; }` |
| `MainPartyTroopsLbl` | `public string MainPartyTroopsLbl { get; set; }` |
| `MainPartyPrisonersLbl` | `public string MainPartyPrisonersLbl { get; set; }` |
| `ShowQuestProgress` | `public bool ShowQuestProgress { get; set; }` |
| `QuestProgressRequiredCount` | `public int QuestProgressRequiredCount { get; set; }` |
| `QuestProgressCurrentCount` | `public int QuestProgressCurrentCount { get; set; }` |
| `UpgradableTroopCount` | `public int UpgradableTroopCount { get; set; }` |
| `RecruitableTroopCount` | `public int RecruitableTroopCount { get; set; }` |
| `IsDoneDisabled` | `public bool IsDoneDisabled { get; set; }` |
| `IsUpgradePopUpDisabled` | `public bool IsUpgradePopUpDisabled { get; set; }` |
| `IsRecruitPopUpDisabled` | `public bool IsRecruitPopUpDisabled { get; set; }` |
| `IsMainPrisonersLimitWarningEnabled` | `public bool IsMainPrisonersLimitWarningEnabled { get; set; }` |
| `IsMainTroopsLimitWarningEnabled` | `public bool IsMainTroopsLimitWarningEnabled { get; set; }` |
| `IsOtherPrisonersLimitWarningEnabled` | `public bool IsOtherPrisonersLimitWarningEnabled { get; set; }` |
| `IsUpgradePopupButtonHighlightEnabled` | `public bool IsUpgradePopupButtonHighlightEnabled { get; set; }` |
| `IsOtherTroopsLimitWarningEnabled` | `public bool IsOtherTroopsLimitWarningEnabled { get; set; }` |
| `IsMainTroopsHaveTransferableTroops` | `public bool IsMainTroopsHaveTransferableTroops { get; set; }` |
| `IsMainPrisonersHaveTransferableTroops` | `public bool IsMainPrisonersHaveTransferableTroops { get; set; }` |
| `IsOtherTroopsHaveTransferableTroops` | `public bool IsOtherTroopsHaveTransferableTroops { get; set; }` |
| `IsOtherPrisonersHaveTransferableTroops` | `public bool IsOtherPrisonersHaveTransferableTroops { get; set; }` |
| `IsCancelDisabled` | `public bool IsCancelDisabled { get; set; }` |
| `AreMembersRelevantOnCurrentMode` | `public bool AreMembersRelevantOnCurrentMode { get; set; }` |
| `ArePrisonersRelevantOnCurrentMode` | `public bool ArePrisonersRelevantOnCurrentMode { get; set; }` |
| `GoldChangeText` | `public string GoldChangeText { get; set; }` |
| `MoraleChangeText` | `public string MoraleChangeText { get; set; }` |
| `HorseChangeText` | `public string HorseChangeText { get; set; }` |
| `InfluenceChangeText` | `public string InfluenceChangeText { get; set; }` |
| `IsAnyPopUpOpen` | `public bool IsAnyPopUpOpen { get; set; }` |
| `ScrollToCharacter` | `public bool ScrollToCharacter { get; set; }` |
| `IsScrollTargetPrisoner` | `public bool IsScrollTargetPrisoner { get; set; }` |
| `ScrollCharacterId` | `public string ScrollCharacterId { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `TakeAllTroopsInputKey` | `public InputKeyItemVM TakeAllTroopsInputKey { get; set; }` |
| `DismissAllTroopsInputKey` | `public InputKeyItemVM DismissAllTroopsInputKey { get; set; }` |
| `TakeAllPrisonersInputKey` | `public InputKeyItemVM TakeAllPrisonersInputKey { get; set; }` |
| `DismissAllPrisonersInputKey` | `public InputKeyItemVM DismissAllPrisonersInputKey { get; set; }` |
| `OpenUpgradePanelInputKey` | `public InputKeyItemVM OpenUpgradePanelInputKey { get; set; }` |
| `OpenRecruitPanelInputKey` | `public InputKeyItemVM OpenRecruitPanelInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetSelectedCharacter
`public void SetSelectedCharacter(PartyCharacterVM troop)`

**用途 / Purpose:** 设置 `selected character` 的值或状态。

### ExecuteSelectCharacterTuple
`public void ExecuteSelectCharacterTuple(PartyCharacterVM troop)`

**用途 / Purpose:** 执行 `select character tuple` 操作或流程。

### ExecuteClearSelectedCharacterTuple
`public void ExecuteClearSelectedCharacterTuple()`

**用途 / Purpose:** 执行 `clear selected character tuple` 操作或流程。

### ExecuteTransferWithParameters
`public void ExecuteTransferWithParameters(PartyCharacterVM party, int index, string targetTag)`

**用途 / Purpose:** 执行 `transfer with parameters` 操作或流程。

### OnUpgradePopUpClosed
`public void OnUpgradePopUpClosed(bool isCancelled)`

**用途 / Purpose:** 当 `upgrade pop up closed` 事件触发时调用此方法。

### OnRecruitPopUpClosed
`public void OnRecruitPopUpClosed(bool isCancelled)`

**用途 / Purpose:** 当 `recruit pop up closed` 事件触发时调用此方法。

### ExecuteTransferAllMainTroops
`public void ExecuteTransferAllMainTroops()`

**用途 / Purpose:** 执行 `transfer all main troops` 操作或流程。

### ExecuteTransferAllOtherTroops
`public void ExecuteTransferAllOtherTroops()`

**用途 / Purpose:** 执行 `transfer all other troops` 操作或流程。

### ExecuteTransferAllMainPrisoners
`public void ExecuteTransferAllMainPrisoners()`

**用途 / Purpose:** 执行 `transfer all main prisoners` 操作或流程。

### ExecuteTransferAllOtherPrisoners
`public void ExecuteTransferAllOtherPrisoners()`

**用途 / Purpose:** 执行 `transfer all other prisoners` 操作或流程。

### ExecuteOpenUpgradePopUp
`public void ExecuteOpenUpgradePopUp()`

**用途 / Purpose:** 执行 `open upgrade pop up` 操作或流程。

### ExecuteOpenRecruitPopUp
`public void ExecuteOpenRecruitPopUp()`

**用途 / Purpose:** 执行 `open recruit pop up` 操作或流程。

### ExecuteUpgrade
`public void ExecuteUpgrade(PartyCharacterVM troop, int upgradeTargetType, int maxUpgradeCount)`

**用途 / Purpose:** 执行 `upgrade` 操作或流程。

### ExecuteRecruit
`public void ExecuteRecruit(PartyCharacterVM character, bool recruitAll = false)`

**用途 / Purpose:** 执行 `recruit` 操作或流程。

### ExecuteExecution
`public void ExecuteExecution()`

**用途 / Purpose:** 执行 `execution` 操作或流程。

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**用途 / Purpose:** 执行 `remove zero counts` 操作或流程。

### ExecuteTalk
`public void ExecuteTalk()`

**用途 / Purpose:** 执行 `talk` 操作或流程。

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 `done` 操作或流程。

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 `reset` 操作或流程。

### ExecuteResetAndCancel
`public void ExecuteResetAndCancel()`

**用途 / Purpose:** 执行 `reset and cancel` 操作或流程。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetTakeAllTroopsInputKey
`public void SetTakeAllTroopsInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `take all troops input key` 的值或状态。

### SetDismissAllTroopsInputKey
`public void SetDismissAllTroopsInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `dismiss all troops input key` 的值或状态。

### SetTakeAllPrisonersInputKey
`public void SetTakeAllPrisonersInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `take all prisoners input key` 的值或状态。

### SetDismissAllPrisonersInputKey
`public void SetDismissAllPrisonersInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `dismiss all prisoners input key` 的值或状态。

### SetOpenUpgradePanelInputKey
`public void SetOpenUpgradePanelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `open upgrade panel input key` 的值或状态。

### SetOpenRecruitPanelInputKey
`public void SetOpenRecruitPanelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `open recruit panel input key` 的值或状态。

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 设置 `get key text from key i d func` 的值或状态。

### Compare
`public int Compare(PartyCharacterVM x, PartyCharacterVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new PartyVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)