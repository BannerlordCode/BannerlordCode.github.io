---
title: "PartyTroopManagerItemVM"
description: "PartyTroopManagerItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 9 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs."
---
# PartyTroopManagerItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyTroopManagerItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs`

## Overview

PartyTroopManagerItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartyTroopManagerItemVM → ViewModel. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTroopManagerItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp) the module directory; inheritance chain PartyTroopManagerItemVM → ViewModel. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public Action<PartyTroopManagerItemVM>SetFocused` | property |
| `PartyTroopManagerItemVM` | `public PartyTroopManagerItemVM(PartyCharacterVM baseTroop, Action<PartyTroopManagerItemVM>setFocused)` | constructor |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | method |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | method |
| `ExecuteOpenTroopEncyclopedia` | `public void ExecuteOpenTroopEncyclopedia()` | method |
| `IsFocused` | `public bool IsFocused` | property |
| `PartyCharacter` | `public PartyCharacterVM PartyCharacter` | property |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable` | property |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyRecruitTroopVM](../PartyRecruitTroopVM)
- [same namespace PartyTroopManagerVM](../PartyTroopManagerVM)
- [same namespace PartyUpgradeTroopVM](../PartyUpgradeTroopVM)
