---
title: "PartyTroopManagerVM"
description: "PartyTroopManagerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 48 exposed members (18 methods, 24 properties, 5 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs."
---
# PartyTroopManagerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class PartyTroopManagerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs`

## Overview

PartyTroopManagerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is PartyTroopManagerVM → ViewModel. It exposes 48 public/protected members: 18 methods, 24 properties, 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTroopManagerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp) the module directory; inheritance chain PartyTroopManagerVM → ViewModel. The surface is property-led (properties 24/48, methods 18/48), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ExecuteItemPrimaryAction` | `public virtual void ExecuteItemPrimaryAction()` | method |
| `ExecuteItemSecondaryAction` | `public virtual void ExecuteItemSecondaryAction()` | method |
| `ExecuteItemTertiaryAction` | `public virtual void ExecuteItemTertiaryAction()` | method |
| `PartyTroopManagerVM` | `public PartyTroopManagerVM(PartyVM partyVM)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OpenPopUp` | `public virtual void OpenPopUp()` | method |
| `ExecuteDone` | `public virtual void ExecuteDone()` | method |
| `ConfirmCancel` | `protected virtual void ConfirmCancel()` | method |
| `UpdateOpenButtonHint` | `public void UpdateOpenButtonHint(bool isDisabled, bool isIrrelevant, bool isUpgradesDisabled)` | method |
| `ExecuteCancel` | `public abstract void ExecuteCancel();` | method |
| `ShowCancelInquiry` | `protected void ShowCancelInquiry(Action confirmCancel)` | method |
| `UpdateLabels` | `protected void UpdateLabels()` | method |
| `SetFocusedCharacter` | `protected void SetFocusedCharacter(PartyTroopManagerItemVM troop)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetPrimaryActionInputKey` | `public void SetPrimaryActionInputKey(HotKey hotKey)` | method |
| `SetSecondaryActionInputKey` | `public void SetSecondaryActionInputKey(HotKey hotKey)` | method |
| `SetTertiaryActionInputKey` | `public void SetTertiaryActionInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey` | property |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey` | property |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey` | property |
| `IsFocusedOnACharacter` | `public bool IsFocusedOnACharacter` | property |
| `IsOpen` | `public bool IsOpen` | property |
| `IsUpgradePopUp` | `public bool IsUpgradePopUp` | property |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable` | property |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable` | property |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable` | property |
| `FocusedTroop` | `public PartyTroopManagerItemVM FocusedTroop` | property |
| `MBBindingList` | `public MBBindingList<PartyTroopManagerItemVM>Troops` | property |
| `OpenButtonHint` | `public HintViewModel OpenButtonHint` | property |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint` | property |
| `TitleText` | `public string TitleText` | property |
| `AvatarText` | `public string AvatarText` | property |
| `NameText` | `public string NameText` | property |
| `CountText` | `public string CountText` | property |
| `GoldChangeText` | `public string GoldChangeText` | property |
| `HorseChangeText` | `public string HorseChangeText` | property |
| `MoraleChangeText` | `public string MoraleChangeText` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `_openButtonEnabledHint` | `protected TextObject _openButtonEnabledHint` | field |
| `_openButtonNoTroopsHint` | `protected TextObject _openButtonNoTroopsHint` | field |
| `_openButtonIrrelevantScreenHint` | `protected TextObject _openButtonIrrelevantScreenHint` | field |
| `_openButtonUpgradesDisabledHint` | `protected TextObject _openButtonUpgradesDisabledHint` | field |
| `int>>_initialUsedUpgradeHorsesHistory` | `protected List<Tuple<EquipmentElement, int>>_initialUsedUpgradeHorsesHistory` | field |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyRecruitTroopVM](../PartyRecruitTroopVM)
- [same namespace PartyTroopManagerItemVM](../PartyTroopManagerItemVM)
- [same namespace PartyUpgradeTroopVM](../PartyUpgradeTroopVM)
