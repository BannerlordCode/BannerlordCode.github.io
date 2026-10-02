---
title: "PartyTroopManagerItemVM"
description: "PartyTroopManagerItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp, inheriting ViewModel; 9 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyTroopManagerItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyTroopManagerItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PartyTroopManagerItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartyTroopManagerItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTroopManagerItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`, inheritance chain PartyTroopManagerItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyRecruitTroopVM](../PartyRecruitTroopVM/)
- [same namespace PartyTroopManagerVM](../PartyTroopManagerVM/)
- [same namespace PartyUpgradeTroopVM](../PartyUpgradeTroopVM/)
