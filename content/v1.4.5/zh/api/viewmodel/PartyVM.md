---
title: "PartyVM"
description: "PartyVM 的自动生成类参考。"
---
# PartyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PartyVM.cs`

## 概述

`PartyVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; }` |
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

### Compare
`public int Compare(PartyCharacterVM x, PartyCharacterVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
var result = partyVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.RefreshValues();
```

### SetSelectedCharacter
`public void SetSelectedCharacter(PartyCharacterVM troop)`

**用途 / Purpose:** 为 selected character 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetSelectedCharacter(troop);
```

### ExecuteSelectCharacterTuple
`public void ExecuteSelectCharacterTuple(PartyCharacterVM troop)`

**用途 / Purpose:** 执行 select character tuple 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteSelectCharacterTuple(troop);
```

### ExecuteClearSelectedCharacterTuple
`public void ExecuteClearSelectedCharacterTuple()`

**用途 / Purpose:** 执行 clear selected character tuple 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteClearSelectedCharacterTuple();
```

### ExecuteTransferWithParameters
`public void ExecuteTransferWithParameters(PartyCharacterVM party, int index, string targetTag)`

**用途 / Purpose:** 执行 transfer with parameters 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteTransferWithParameters(party, 0, "example");
```

### OnUpgradePopUpClosed
`public void OnUpgradePopUpClosed(bool isCancelled)`

**用途 / Purpose:** 在 upgrade pop up closed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.OnUpgradePopUpClosed(false);
```

### OnRecruitPopUpClosed
`public void OnRecruitPopUpClosed(bool isCancelled)`

**用途 / Purpose:** 在 recruit pop up closed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.OnRecruitPopUpClosed(false);
```

### ExecuteTransferAllMainTroops
`public void ExecuteTransferAllMainTroops()`

**用途 / Purpose:** 执行 transfer all main troops 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllMainTroops();
```

### ExecuteTransferAllOtherTroops
`public void ExecuteTransferAllOtherTroops()`

**用途 / Purpose:** 执行 transfer all other troops 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllOtherTroops();
```

### ExecuteTransferAllMainPrisoners
`public void ExecuteTransferAllMainPrisoners()`

**用途 / Purpose:** 执行 transfer all main prisoners 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllMainPrisoners();
```

### ExecuteTransferAllOtherPrisoners
`public void ExecuteTransferAllOtherPrisoners()`

**用途 / Purpose:** 执行 transfer all other prisoners 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteTransferAllOtherPrisoners();
```

### ExecuteOpenUpgradePopUp
`public void ExecuteOpenUpgradePopUp()`

**用途 / Purpose:** 执行 open upgrade pop up 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteOpenUpgradePopUp();
```

### ExecuteOpenRecruitPopUp
`public void ExecuteOpenRecruitPopUp()`

**用途 / Purpose:** 执行 open recruit pop up 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteOpenRecruitPopUp();
```

### ExecuteUpgrade
`public void ExecuteUpgrade(PartyCharacterVM troop, int upgradeTargetType, int maxUpgradeCount)`

**用途 / Purpose:** 执行 upgrade 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteUpgrade(troop, 0, 0);
```

### ExecuteRecruit
`public void ExecuteRecruit(PartyCharacterVM character, bool recruitAll = false)`

**用途 / Purpose:** 执行 recruit 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteRecruit(character, false);
```

### ExecuteExecution
`public void ExecuteExecution()`

**用途 / Purpose:** 执行 execution 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteExecution();
```

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**用途 / Purpose:** 执行 remove zero counts 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteRemoveZeroCounts();
```

### ExecuteTalk
`public void ExecuteTalk()`

**用途 / Purpose:** 执行 talk 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteTalk();
```

### ExecuteDone
`public void ExecuteDone()`

**用途 / Purpose:** 执行 done 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteDone();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** 执行 reset 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteReset();
```

### ExecuteCancelWithoutInquiry
`public void ExecuteCancelWithoutInquiry()`

**用途 / Purpose:** 执行 cancel without inquiry 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteCancelWithoutInquiry();
```

### ExecuteCancel
`public void ExecuteCancel(bool showCancelInquiry = false)`

**用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.ExecuteCancel(false);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.OnFinalize();
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 reset input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetResetInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetDoneInputKey(hotKey);
```

### SetTakeAllTroopsInputKey
`public void SetTakeAllTroopsInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 take all troops input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetTakeAllTroopsInputKey(hotKey);
```

### SetDismissAllTroopsInputKey
`public void SetDismissAllTroopsInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 dismiss all troops input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetDismissAllTroopsInputKey(hotKey);
```

### SetTakeAllPrisonersInputKey
`public void SetTakeAllPrisonersInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 take all prisoners input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetTakeAllPrisonersInputKey(hotKey);
```

### SetDismissAllPrisonersInputKey
`public void SetDismissAllPrisonersInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 dismiss all prisoners input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetDismissAllPrisonersInputKey(hotKey);
```

### SetOpenUpgradePanelInputKey
`public void SetOpenUpgradePanelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 open upgrade panel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetOpenUpgradePanelInputKey(hotKey);
```

### SetOpenRecruitPanelInputKey
`public void SetOpenRecruitPanelInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 open recruit panel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetOpenRecruitPanelInputKey(hotKey);
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 为 get key text from key i d func 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyVM 实例
PartyVM partyVM = ...;
partyVM.SetGetKeyTextFromKeyIDFunc(func<string, getKeyTextFromKeyId);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyVM partyVM = ...;
partyVM.Compare(x, y);
```

## 参见

- [本区域目录](../)