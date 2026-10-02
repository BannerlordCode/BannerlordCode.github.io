---
title: "PartyScreenLogic"
description: "PartyScreenLogic: a public class in TaleWorlds.CampaignSystem; 96 exposed members (42 methods, 33 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs."
---
# PartyScreenLogic

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyScreenLogic`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs`

## Overview

PartyScreenLogic lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs. It is a public class; the inheritance chain is PartyScreenLogic. It exposes 96 public/protected members: 42 methods, 33 properties, 7 events, 1 constructors, 13 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyScreenLogic is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Party) the module directory; inheritance chain PartyScreenLogic. The surface is method-led (methods 42/96, properties 33/96), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Party/PartyScreenLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGoldChange;` | `public event PartyScreenLogic.PartyGoldDelegate PartyGoldChange;` | event |
| `PartyMoraleChange;` | `public event PartyScreenLogic.PartyMoraleDelegate PartyMoraleChange;` | event |
| `PartyInfluenceChange;` | `public event PartyScreenLogic.PartyInfluenceDelegate PartyInfluenceChange;` | event |
| `PartyHorseChange;` | `public event PartyScreenLogic.PartyHorseDelegate PartyHorseChange;` | event |
| `Update;` | `public event PartyScreenLogic.PresentationUpdate Update;` | event |
| `PartyScreenClosedEvent;` | `public event PartyScreenClosedDelegate PartyScreenClosedEvent;` | event |
| `AfterReset;` | `public event PartyScreenLogic.AfterResetDelegate AfterReset;` | event |
| `ActiveOtherPartySortType` | `public PartyScreenLogic.TroopSortType ActiveOtherPartySortType` | property |
| `ActiveMainPartySortType` | `public PartyScreenLogic.TroopSortType ActiveMainPartySortType` | property |
| `IsOtherPartySortAscending` | `public bool IsOtherPartySortAscending` | property |
| `IsMainPartySortAscending` | `public bool IsMainPartySortAscending` | property |
| `MemberTransferState` | `public PartyScreenLogic.TransferState MemberTransferState` | property |
| `PrisonerTransferState` | `public PartyScreenLogic.TransferState PrisonerTransferState` | property |
| `AccompanyingTransferState` | `public PartyScreenLogic.TransferState AccompanyingTransferState` | property |
| `LeftPartyName` | `public TextObject LeftPartyName` | property |
| `RightPartyName` | `public TextObject RightPartyName` | property |
| `Header` | `public TextObject Header` | property |
| `LeftPartyMembersSizeLimit` | `public int LeftPartyMembersSizeLimit` | property |
| `LeftPartyPrisonersSizeLimit` | `public int LeftPartyPrisonersSizeLimit` | property |
| `RightPartyMembersSizeLimit` | `public int RightPartyMembersSizeLimit` | property |
| `RightPartyPrisonersSizeLimit` | `public int RightPartyPrisonersSizeLimit` | property |
| `DoNotApplyGoldTransactions` | `public bool DoNotApplyGoldTransactions` | property |
| `ShowProgressBar` | `public bool ShowProgressBar` | property |
| `DoneReasonString` | `public string DoneReasonString` | property |
| `IsTroopUpgradesDisabled` | `public bool IsTroopUpgradesDisabled` | property |
| `RightPartyLeader` | `public CharacterObject RightPartyLeader` | property |
| `LeftPartyLeader` | `public CharacterObject LeftPartyLeader` | property |
| `LeftOwnerParty` | `public PartyBase LeftOwnerParty` | property |
| `RightOwnerParty` | `public PartyBase RightOwnerParty` | property |
| `CurrentData` | `public PartyScreenData CurrentData` | property |
| `TransferHealthiesGetWoundedsFirst` | `public bool TransferHealthiesGetWoundedsFirst` | property |
| `QuestModeWageDaysMultiplier` | `public int QuestModeWageDaysMultiplier` | property |
| `Game` | `public Game Game` | property |
| `PartyScreenLogic` | `public PartyScreenLogic()` | constructor |
| `Initialize` | `public void Initialize(PartyScreenLogicInitializationData initializationData)` | method |
| `AddCommand` | `public void AddCommand(PartyScreenLogic.PartyCommand command)` | method |
| `ValidateCommand` | `public bool ValidateCommand(PartyScreenLogic.PartyCommand command)` | method |
| `TransferTroopToLeaderSlot` | `protected void TransferTroopToLeaderSlot(PartyScreenLogic.PartyCommand command)` | method |
| `TransferTroop` | `protected void TransferTroop(PartyScreenLogic.PartyCommand command, bool invokeUpdate)` | method |
| `ShiftTroop` | `protected void ShiftTroop(PartyScreenLogic.PartyCommand command)` | method |
| `TransferPartyLeaderTroop` | `protected void TransferPartyLeaderTroop(PartyScreenLogic.PartyCommand command)` | method |
| `UpgradeTroop` | `protected void UpgradeTroop(PartyScreenLogic.PartyCommand command)` | method |
| `RecruitPrisoner` | `protected void RecruitPrisoner(PartyScreenLogic.PartyCommand command)` | method |
| `ExecuteTroop` | `protected void ExecuteTroop(PartyScreenLogic.PartyCommand command)` | method |
| `TransferAllTroops` | `protected void TransferAllTroops(PartyScreenLogic.PartyCommand command)` | method |
| `SortTroops` | `protected void SortTroops(PartyScreenLogic.PartyCommand command)` | method |
| `GetIndexToInsertTroop` | `public int GetIndexToInsertTroop(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType type, TroopRosterElement troop)` | method |
| `GetActiveSortTypeForSide` | `public PartyScreenLogic.TroopSortType GetActiveSortTypeForSide(PartyScreenLogic.PartyRosterSide side)` | method |
| `GetIsAscendingSortForSide` | `public bool GetIsAscendingSortForSide(PartyScreenLogic.PartyRosterSide side)` | method |
| `IsDoneActive` | `public bool IsDoneActive()` | method |
| `IsCancelActive` | `public bool IsCancelActive()` | method |
| `DoneLogic` | `public bool DoneLogic(bool isForced)` | method |
| `OnPartyScreenClosed` | `public void OnPartyScreenClosed(bool fromCancel)` | method |
| `IsTroopTransferable` | `public bool IsTroopTransferable(PartyScreenLogic.TroopType troopType, CharacterObject character, int side)` | method |
| `IsTroopRosterTransferable` | `public bool IsTroopRosterTransferable(PartyScreenLogic.TroopType troopType)` | method |
| `IsPrisonerRecruitable` | `public bool IsPrisonerRecruitable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)` | method |
| `GetRecruitableReasonString` | `public string GetRecruitableReasonString(CharacterObject character, bool isRecruitable, int troopCount, out bool showStackModifierText)` | method |
| `IsExecutable` | `public bool IsExecutable(PartyScreenLogic.TroopType troopType, CharacterObject character, PartyScreenLogic.PartyRosterSide side)` | method |
| `GetExecutableReasonString` | `public string GetExecutableReasonString(CharacterObject character, bool isExecutable)` | method |
| `GetCurrentQuestCurrentCount` | `public int GetCurrentQuestCurrentCount(bool includePrisoners, bool includeMembers)` | method |
| `GetCurrentQuestRequiredCount` | `public int GetCurrentQuestRequiredCount()` | method |
| `Reset` | `public void Reset(bool fromCancel)` | method |
| `SavePartyScreenData` | `public void SavePartyScreenData()` | method |
| `ResetToLastSavedPartyScreenData` | `public void ResetToLastSavedPartyScreenData(bool fromCancel)` | method |
| `RemoveZeroCounts` | `public void RemoveZeroCounts()` | method |
| `GetTroopRecruitableAmount` | `public int GetTroopRecruitableAmount(CharacterObject troop)` | method |
| `GetRoster` | `public TroopRoster GetRoster(PartyScreenLogic.PartyRosterSide side, PartyScreenLogic.TroopType troopType)` | method |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | method |
| `HaveRightSideGainedTroops` | `public bool HaveRightSideGainedTroops()` | method |
| `GetComparer` | `public PartyScreenLogic.TroopComparer GetComparer(PartyScreenLogic.TroopSortType sortType)` | method |
| `TroopSortType` | `public enum TroopSortType` | property |
| `byte` | `public enum PartyRosterSide : byte` | property |
| `TroopType` | `public enum TroopType` | property |
| `PartyCommandCode` | `public enum PartyCommandCode` | property |
| `TransferState` | `public enum TransferState` | property |
| `PresentationUpdate` | `public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command);` | method |
| `PartyGoldDelegate` | `public delegate void PartyGoldDelegate();` | method |
| `PartyMoraleDelegate` | `public delegate void PartyMoraleDelegate();` | method |
| `PartyInfluenceDelegate` | `public delegate void PartyInfluenceDelegate();` | method |
| `PartyHorseDelegate` | `public delegate void PartyHorseDelegate();` | method |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel);` | method |
| `ISerializableObject` | `public class PartyCommand : ISerializableObject` | property |
| `IComparer` | `public abstract class TroopComparer : IComparer<TroopRosterElement>` | property |
| `TroopSortType` | `public enum TroopSortType` | nested type |
| `byte` | `public enum PartyRosterSide : byte` | nested type |
| `TroopType` | `public enum TroopType` | nested type |
| `PartyCommandCode` | `public enum PartyCommandCode` | nested type |
| `TransferState` | `public enum TransferState` | nested type |
| `PresentationUpdate` | `public delegate void PresentationUpdate(PartyScreenLogic.PartyCommand command)` | nested type |
| `PartyGoldDelegate` | `public delegate void PartyGoldDelegate()` | nested type |
| `PartyMoraleDelegate` | `public delegate void PartyMoraleDelegate()` | nested type |
| `PartyInfluenceDelegate` | `public delegate void PartyInfluenceDelegate()` | nested type |
| `PartyHorseDelegate` | `public delegate void PartyHorseDelegate()` | nested type |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(PartyScreenLogic partyScreenLogic, bool fromCancel)` | nested type |
| `ISerializableObject` | `public class PartyCommand : ISerializableObject` | nested type |
| `IComparer` | `public abstract class TroopComparer : IComparer<TroopRosterElement>` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AiBehavior](../AiBehavior)
- [same namespace CanTalkToHeroDelegate](../CanTalkToHeroDelegate)
- [same namespace IsTroopTransferableDelegate](../IsTroopTransferableDelegate)
- [same namespace MobileParty](../MobileParty)
