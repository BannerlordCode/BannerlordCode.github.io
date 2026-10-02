---
title: "RecruitmentVM"
description: "RecruitmentVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 51 exposed members (13 methods, 37 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs."
---
# RecruitmentVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RecruitmentVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs`

## Overview

RecruitmentVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is RecruitmentVM → ViewModel. It exposes 51 public/protected members: 13 methods, 37 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RecruitmentVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment) the module directory; inheritance chain RecruitmentVM → ViewModel. The surface is property-led (properties 37/51, methods 13/51), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsQuitting` | `public bool IsQuitting` | property |
| `RecruitmentVM` | `public RecruitmentVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshScreen` | `public void RefreshScreen()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteForceQuit` | `public void ExecuteForceQuit()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteRecruitAll` | `public void ExecuteRecruitAll()` | method |
| `Deactivate` | `public void Deactivate()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ResetHint` | `public HintViewModel ResetHint` | property |
| `FocusedVolunteerTroop` | `public RecruitVolunteerTroopVM FocusedVolunteerTroop` | property |
| `FocusedVolunteerOwner` | `public RecruitVolunteerOwnerVM FocusedVolunteerOwner` | property |
| `PartyWageHint` | `public HintViewModel PartyWageHint` | property |
| `PartyCapacityHint` | `public HintViewModel PartyCapacityHint` | property |
| `PartySpeedHint` | `public BasicTooltipViewModel PartySpeedHint` | property |
| `RemainingFoodHint` | `public HintViewModel RemainingFoodHint` | property |
| `TotalWealthHint` | `public HintViewModel TotalWealthHint` | property |
| `TotalCostHint` | `public HintViewModel TotalCostHint` | property |
| `DoneHint` | `public HintViewModel DoneHint` | property |
| `RecruitAllHint` | `public BasicTooltipViewModel RecruitAllHint` | property |
| `PartyWage` | `public int PartyWage` | property |
| `PartyCapacityText` | `public string PartyCapacityText` | property |
| `PartyWageText` | `public string PartyWageText` | property |
| `RecruitAllText` | `public string RecruitAllText` | property |
| `PartySpeedText` | `public string PartySpeedText` | property |
| `ResetAllText` | `public string ResetAllText` | property |
| `CancelText` | `public string CancelText` | property |
| `RemainingFoodText` | `public string RemainingFoodText` | property |
| `TotalCostText` | `public string TotalCostText` | property |
| `Enabled` | `public bool Enabled` | property |
| `IsDoneEnabled` | `public bool IsDoneEnabled` | property |
| `IsPartyCapacityWarningEnabled` | `public bool IsPartyCapacityWarningEnabled` | property |
| `TitleText` | `public string TitleText` | property |
| `DoneText` | `public string DoneText` | property |
| `CanRecruitAll` | `public bool CanRecruitAll` | property |
| `TotalWealth` | `public int TotalWealth` | property |
| `PartyCapacity` | `public int PartyCapacity` | property |
| `InitialPartySize` | `public int InitialPartySize` | property |
| `CurrentPartySize` | `public int CurrentPartySize` | property |
| `MBBindingList` | `public MBBindingList<RecruitVolunteerVM>VolunteerList` | property |
| `MBBindingList` | `public MBBindingList<RecruitVolunteerTroopVM>TroopsInCart` | property |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetRecruitAllInputKey` | `public void SetRecruitAllInputKey(HotKey hotKey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `RecruitAllInputKey` | `public InputKeyItemVM RecruitAllInputKey` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RecruitVolunteerOwnerVM](../RecruitVolunteerOwnerVM)
- [same namespace RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM)
- [same namespace RecruitVolunteerVM](../RecruitVolunteerVM)
