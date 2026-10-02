---
title: "PartyScreenLogic"
description: "PartyScreenLogic：TaleWorlds.CampaignSystem 的 public 类；公开成员 96 个（方法 42、属性 33、字段 0）。源文件 TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs。"
---
# PartyScreenLogic

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyScreenLogic`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## 概述

PartyScreenLogic 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs。它是一个 public 类，继承链为 PartyScreenLogic。public/protected 成员共 96 个：42 方法、33 属性、7 事件、1 构造函数、13 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyScreenLogic 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Party），继承链 PartyScreenLogic。成员构成以方法为主（方法 42/96，属性 33/96），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGoldChange;` | `public event PartyScreenLogic.PartyGoldDelegate PartyGoldChange;` | 事件 |
| `PartyMoraleChange;` | `public event PartyScreenLogic.PartyMoraleDelegate PartyMoraleChange;` | 事件 |
| `PartyInfluenceChange;` | `public event PartyScreenLogic.PartyInfluenceDelegate PartyInfluenceChange;` | 事件 |
| `PartyHorseChange;` | `public event PartyScreenLogic.PartyHorseDelegate PartyHorseChange;` | 事件 |
| `Update;` | `public event PartyScreenLogic.PresentationUpdate Update;` | 事件 |
| `PartyScreenClosedEvent;` | `public event PartyScreenClosedDelegate PartyScreenClosedEvent;` | 事件 |
| `AfterReset;` | `public event PartyScreenLogic.AfterResetDelegate AfterReset;` | 事件 |
| `ActiveOtherPartySortType` | `public PartyScreenLogic.TroopSortType ActiveOtherPartySortType` | 属性 |
| `ActiveMainPartySortType` | `public PartyScreenLogic.TroopSortType ActiveMainPartySortType` | 属性 |
| `IsOtherPartySortAscending` | `public bool IsOtherPartySortAscending` | 属性 |
| `IsMainPartySortAscending` | `public bool IsMainPartySortAscending` | 属性 |
| `MemberTransferState` | `public PartyScreenLogic.TransferState MemberTransferState` | 属性 |
| `PrisonerTransferState` | `public PartyScreenLogic.TransferState PrisonerTransferState` | 属性 |
| `AccompanyingTransferState` | `public PartyScreenLogic.TransferState AccompanyingTransferState` | 属性 |
| `LeftPartyName` | `public TextObject LeftPartyName` | 属性 |
| `RightPartyName` | `public TextObject RightPartyName` | 属性 |
| `Header` | `public TextObject Header` | 属性 |
| `LeftPartyMembersSizeLimit` | `public int LeftPartyMembersSizeLimit` | 属性 |
| `LeftPartyPrisonersSizeLimit` | `public int LeftPartyPrisonersSizeLimit` | 属性 |
| `RightPartyMembersSizeLimit` | `public int RightPartyMembersSizeLimit` | 属性 |
| `RightPartyPrisonersSizeLimit` | `public int RightPartyPrisonersSizeLimit` | 属性 |
| `DoNotApplyGoldTransactions` | `public bool DoNotApplyGoldTransactions` | 属性 |
| `ShowProgressBar` | `public bool ShowProgressBar` | 属性 |
| `DoneReasonString` | `public string DoneReasonString` | 属性 |
| `IsTroopUpgradesDisabled` | `public bool IsTroopUpgradesDisabled` | 属性 |
| `RightPartyLeader` | `public CharacterObject RightPartyLeader` | 属性 |
| `LeftPartyLeader` | `public CharacterObject LeftPartyLeader` | 属性 |
| `LeftOwnerParty` | `public PartyBase LeftOwnerParty` | 属性 |
| `RightOwnerParty` | `public PartyBase RightOwnerParty` | 属性 |
| `CurrentData` | `public PartyScreenData CurrentData` | 属性 |
| `TransferHealthiesGetWoundedsFirst` | `public bool TransferHealthiesGetWoundedsFirst` | 属性 |
| `QuestModeWageDaysMultiplier` | `public int QuestModeWageDaysMultiplier` | 属性 |
| `Game` | `public Game Game` | 属性 |
| `PartyScreenLogic` | `public PartyScreenLogic()` | 构造函数 |
| `Initialize` | `public void Initialize(PartyScreenLogicInitializationData initializationData)` | 方法 |
| `AddCommand` | `public void AddCommand(PartyScreenLogic.PartyCommand command)` | 方法 |
| `ValidateCommand` | `public bool ValidateCommand(PartyScreenLogic.PartyCommand command)` | 方法 |
| `TransferTroopToLeaderSlot` | `protected void TransferTroopToLeaderSlot(PartyScreenLogic.PartyCommand command)` | 方法 |
| `TransferTroop` | `protected void TransferTroop(PartyScreenLogic.PartyCommand command, bool invokeUpdate)` | 方法 |
| `ShiftTroop` | `protected void ShiftTroop(PartyScreenLogic.PartyCommand command)` | 方法 |
| `TransferPartyLeaderTroop` | `protected void TransferPartyLeaderTroop(PartyScreenLogic.PartyCommand command)` | 方法 |
| `UpgradeTroop` | `protected void UpgradeTroop(PartyScreenLogic.PartyCommand command)` | 方法 |
| `RecruitPrisoner` | `protected void RecruitPrisoner(PartyScreenLogic.PartyCommand command)` | 方法 |
| `ExecuteTroop` | `protected void ExecuteTroop(PartyScreenLogic.PartyCommand command)` | 方法 |
| `TransferAllTroops` | `protected void TransferAllTroops(PartyScreenLogic.PartyCommand command)` | 方法 |
| `SortTroops` | `protected void SortTroops(PartyScreenLogic.PartyCommand command)` | 方法 |
| `GetIndexToInsertTroop` | `public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, TroopRosterElement troop)` | 方法 |
| `GetActiveSortTypeForSide` | `public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side)` | 方法 |
| `GetIsAscendingSortForSide` | `public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side)` | 方法 |
| `IsDoneActive` | `public bool IsDoneActive()` | 方法 |
| `IsCancelActive` | `public bool IsCancelActive()` | 方法 |
| `DoneLogic` | `public bool DoneLogic(bool isForced)` | 方法 |
| `OnPartyScreenClosed` | `public void OnPartyScreenClosed(bool fromCancel)` | 方法 |
| `IsTroopTransferable` | `public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType, CharacterObject character, int side)` | 方法 |
| `IsTroopRosterTransferable` | `public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType)` | 方法 |
| `IsPrisonerRecruitable` | `public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)` | 方法 |
| `GetRecruitableReasonString` | `public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)` | 方法 |
| `IsExecutable` | `public bool IsExecutable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)` | 方法 |
| `GetExecutableReasonString` | `public string GetExecutableReasonString(CharacterObject character, bool isExecutable)` | 方法 |
| `GetCurrentQuestCurrentCount` | `public int GetCurrentQuestCurrentCount(bool includePrisoners, bool includeMembers)` | 方法 |
| `GetCurrentQuestRequiredCount` | `public int GetCurrentQuestRequiredCount()` | 方法 |
| `Reset` | `public void Reset(bool fromCancel)` | 方法 |
| `SavePartyScreenData` | `public void SavePartyScreenData()` | 方法 |
| `ResetToLastSavedPartyScreenData` | `public void ResetToLastSavedPartyScreenData(bool fromCancel)` | 方法 |
| `RemoveZeroCounts` | `public void RemoveZeroCounts()` | 方法 |
| `GetTroopRecruitableAmount` | `public int GetTroopRecruitableAmount(CharacterObject troop)` | 方法 |
| `GetRoster` | `public TroopRoster GetRoster(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType troopType)` | 方法 |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | 方法 |
| `HaveRightSideGainedTroops` | `public bool HaveRightSideGainedTroops()` | 方法 |
| `GetComparer` | `public PartyScreenLogic.TroopComparer GetComparer(PartyScreenLogic.TroopSortType sortType)` | 方法 |
| `TroopSortType` | `public enum TroopSortType` | 属性 |
| `byte` | `public enum PartyRosterSide : byte` | 属性 |
| `TroopType` | `public enum TroopType` | 属性 |
| `PartyCommandCode` | `public enum PartyCommandCode` | 属性 |
| `TransferState` | `public enum TransferState` | 属性 |
| `PresentationUpdate` | `public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command);` | 方法 |
| `PartyGoldDelegate` | `public delegate void PartyGoldDelegate();` | 方法 |
| `PartyMoraleDelegate` | `public delegate void PartyMoraleDelegate();` | 方法 |
| `PartyInfluenceDelegate` | `public delegate void PartyInfluenceDelegate();` | 方法 |
| `PartyHorseDelegate` | `public delegate void PartyHorseDelegate();` | 方法 |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel);` | 方法 |
| `ISerializableObject` | `public class PartyCommand : ISerializableObject` | 属性 |
| `IComparer` | `public abstract class TroopComparer : IComparer<TroopRosterElement>` | 属性 |
| `TroopSortType` | `public enum TroopSortType` | 嵌套类型 |
| `byte` | `public enum PartyRosterSide : byte` | 嵌套类型 |
| `TroopType` | `public enum TroopType` | 嵌套类型 |
| `PartyCommandCode` | `public enum PartyCommandCode` | 嵌套类型 |
| `TransferState` | `public enum TransferState` | 嵌套类型 |
| `PresentationUpdate` | `public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command)` | 嵌套类型 |
| `PartyGoldDelegate` | `public delegate void PartyGoldDelegate()` | 嵌套类型 |
| `PartyMoraleDelegate` | `public delegate void PartyMoraleDelegate()` | 嵌套类型 |
| `PartyInfluenceDelegate` | `public delegate void PartyInfluenceDelegate()` | 嵌套类型 |
| `PartyHorseDelegate` | `public delegate void PartyHorseDelegate()` | 嵌套类型 |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel)` | 嵌套类型 |
| `ISerializableObject` | `public class PartyCommand : ISerializableObject` | 嵌套类型 |
| `IComparer` | `public abstract class TroopComparer : IComparer<TroopRosterElement>` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AiBehavior](../AiBehavior)
- [同命名空间 CanTalkToHeroDelegate](../CanTalkToHeroDelegate)
- [同命名空间 IsTroopTransferableDelegate](../IsTroopTransferableDelegate)
- [同命名空间 MobileParty](../MobileParty)
