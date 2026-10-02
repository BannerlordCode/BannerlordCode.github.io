---
title: "PartyUpgradeTroopVM"
description: "PartyUpgradeTroopVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting PartyTroopManagerVM; 13 exposed members (10 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs."
---
# PartyUpgradeTroopVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyUpgradeTroopVM : PartyTroopManagerVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs`

## Overview

PartyUpgradeTroopVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs. It is a public class, implementing/inheriting PartyTroopManagerVM; the inheritance chain is PartyUpgradeTroopVM → PartyTroopManagerVM → ViewModel. It exposes 13 public/protected members: 10 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyUpgradeTroopVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp) the module directory; inheritance chain PartyUpgradeTroopVM → PartyTroopManagerVM → ViewModel. The surface is method-led (methods 10/13, properties 2/13), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyUpgradeTroopVM` | `public PartyUpgradeTroopVM(PartyVM partyVM) : base(partyVM)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnRanOutTroop` | `public void OnRanOutTroop(PartyCharacterVM troop)` | method |
| `OnTroopUpgraded` | `public void OnTroopUpgraded()` | method |
| `OpenPopUp` | `public override void OpenPopUp()` | method |
| `ExecuteDone` | `public override void ExecuteDone()` | method |
| `ExecuteCancel` | `public override void ExecuteCancel()` | method |
| `ConfirmCancel` | `protected override void ConfirmCancel()` | method |
| `ExecuteItemPrimaryAction` | `public override void ExecuteItemPrimaryAction()` | method |
| `ExecuteItemSecondaryAction` | `public override void ExecuteItemSecondaryAction()` | method |
| `ExecuteItemTertiaryAction` | `public override void ExecuteItemTertiaryAction()` | method |
| `UpgradeCostText` | `public string UpgradeCostText` | property |
| `UpgradesAndRequirementsText` | `public string UpgradesAndRequirementsText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyTroopManagerVM](../PartyTroopManagerVM)
- [same namespace PartyRecruitTroopVM](../PartyRecruitTroopVM)
- [same namespace PartyTroopManagerItemVM](../PartyTroopManagerItemVM)
- [same namespace PartyTroopManagerVM](../PartyTroopManagerVM)
