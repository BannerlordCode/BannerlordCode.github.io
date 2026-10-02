---
title: "PartyRecruitTroopVM"
description: "PartyRecruitTroopVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting PartyTroopManagerVM; 12 exposed members (8 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyRecruitTroopVM.cs."
---
# PartyRecruitTroopVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyRecruitTroopVM : PartyTroopManagerVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyRecruitTroopVM.cs`

## Overview

PartyRecruitTroopVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyRecruitTroopVM.cs. It is a public class, implementing/inheriting PartyTroopManagerVM; the inheritance chain is PartyRecruitTroopVM → PartyTroopManagerVM → ViewModel. It exposes 12 public/protected members: 8 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyRecruitTroopVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp) the module directory; inheritance chain PartyRecruitTroopVM → PartyTroopManagerVM → ViewModel. The surface is method-led (methods 8/12, properties 3/12), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyRecruitTroopVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyRecruitTroopVM` | `public PartyRecruitTroopVM(PartyVM partyVM) : base(partyVM)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnTroopRecruited` | `public void OnTroopRecruited(PartyCharacterVM recruitedCharacter)` | method |
| `OpenPopUp` | `public override void OpenPopUp()` | method |
| `ExecuteDone` | `public override void ExecuteDone()` | method |
| `ExecuteCancel` | `public override void ExecuteCancel()` | method |
| `ConfirmCancel` | `protected override void ConfirmCancel()` | method |
| `ExecuteItemPrimaryAction` | `public override void ExecuteItemPrimaryAction()` | method |
| `ExecuteRecruitAll` | `public void ExecuteRecruitAll()` | method |
| `EffectText` | `public string EffectText` | property |
| `RecruitText` | `public string RecruitText` | property |
| `RecruitAllText` | `public string RecruitAllText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyTroopManagerVM](../PartyTroopManagerVM)
- [same namespace PartyTroopManagerItemVM](../PartyTroopManagerItemVM)
- [same namespace PartyTroopManagerVM](../PartyTroopManagerVM)
- [same namespace PartyUpgradeTroopVM](../PartyUpgradeTroopVM)
