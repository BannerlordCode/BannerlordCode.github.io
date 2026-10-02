---
title: "PartyScreenLogic"
description: "PartyScreenLogic 的自动生成类参考。"
---
# PartyScreenLogic

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenLogic `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs

## 概述

`PartyScreenLogic` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public void Initialize(PartyScreenLogicInitializationData initializationData) `

### AddCommand
`public void AddCommand(PartyScreenLogic.PartyCommand command) `

### ValidateCommand
`public bool ValidateCommand(PartyScreenLogic.PartyCommand command) `

### TransferTroopToLeaderSlot
`protected void TransferTroopToLeaderSlot(PartyScreenLogic.PartyCommand command) `

### TransferTroop
`protected void TransferTroop(PartyScreenLogic.PartyCommand command,bool invokeUpdate) `

### ShiftTroop
`protected void ShiftTroop(PartyScreenLogic.PartyCommand command) `

### TransferPartyLeaderTroop
`protected void TransferPartyLeaderTroop(PartyScreenLogic.PartyCommand command) `

### UpgradeTroop
`protected void UpgradeTroop(PartyScreenLogic.PartyCommand command) `

### RecruitPrisoner
`protected void RecruitPrisoner(PartyScreenLogic.PartyCommand command) `

### ExecuteTroop
`protected void ExecuteTroop(PartyScreenLogic.PartyCommand command) `

### TransferAllTroops
`protected void TransferAllTroops(PartyScreenLogic.PartyCommand command) `

### SortTroops
`protected void SortTroops(PartyScreenLogic.PartyCommand command) `

### GetIndexToInsertTroop
`public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side,PartyScreenLogic.TroopType type,TroopRosterElement troop) `

### GetActiveSortTypeForSide
`public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side) `

### GetIsAscendingSortForSide
`public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side) `

### IsDoneActive
`public bool IsDoneActive() `

### IsCancelActive
`public bool IsCancelActive() `

### DoneLogic
`public bool DoneLogic(bool isForced) `

### OnPartyScreenClosed
`public void OnPartyScreenClosed(bool fromCancel) `

### IsTroopTransferable
`public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType,CharacterObject character,int side) `

### IsTroopRosterTransferable
`public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType) `

### IsPrisonerRecruitable
`public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType,CharacterObject character,PartyScreenLogic.PartyRosterSide side) `

### GetRecruitableReasonString
`public string GetRecruitableReasonString(CharacterObject character,bool isRecruitable,int troopCount,out bool showStackModifierText) `

### IsExecutable
`public bool IsExecutable(PartyScreenLogic.TroopType troopType,CharacterObject character,PartyScreenLogic.PartyRosterSide side) `

### GetExecutableReasonString
`public string GetExecutableReasonString(CharacterObject character,bool isExecutable) `

### GetCurrentQuestCurrentCount
`public int GetCurrentQuestCurrentCount(bool includePrisoners,bool includeMembers) `

### GetCurrentQuestRequiredCount
`public int GetCurrentQuestRequiredCount() `

### Reset
`public void Reset(bool fromCancel) `

### SavePartyScreenData
`public void SavePartyScreenData() `

### ResetToLastSavedPartyScreenData
`public void ResetToLastSavedPartyScreenData(bool fromCancel) `

### RemoveZeroCounts
`public void RemoveZeroCounts() `

### GetTroopRecruitableAmount
`public int GetTroopRecruitableAmount(CharacterObject troop) `

### GetRoster
`public TroopRoster GetRoster(PartyScreenLogic.PartyRosterSide side,PartyScreenLogic.TroopType troopType) `

### IsThereAnyChanges
`public bool IsThereAnyChanges() `

### HaveRightSideGainedTroops
`public bool HaveRightSideGainedTroops() `

### GetComparer
`public PartyScreenLogic.TroopComparer GetComparer(PartyScreenLogic.TroopSortType sortType) `

### PresentationUpdate
`public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command)`

### PartyGoldDelegate
`public delegate void PartyGoldDelegate()`

### PartyMoraleDelegate
`public delegate void PartyMoraleDelegate()`

### PartyInfluenceDelegate
`public delegate void PartyInfluenceDelegate()`

### PartyHorseDelegate
`public delegate void PartyHorseDelegate()`

### AfterResetDelegate
`public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic,bool fromCancel)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
