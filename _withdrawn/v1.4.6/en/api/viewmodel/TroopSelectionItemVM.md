---
title: "TroopSelectionItemVM"
description: "TroopSelectionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection, inheriting ViewModel; 17 exposed members (3 methods, 13 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TroopSelectionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

TroopSelectionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TroopSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 17 public/protected members: 3 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopSelectionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`, inheritance chain TroopSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/17, methods 3/17), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Troop` | `public TroopRosterElement Troop` | property |
| `TroopSelectionItemVM` | `public TroopSelectionItemVM(TroopRosterElement troop, Action<TroopSelectionItemVM>onAdd, Action<TroopSelectionItemVM>onRemove)` | constructor |
| `ExecuteAdd` | `public void ExecuteAdd()` | method |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `MaxAmount` | `public int MaxAmount` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsRosterFull` | `public bool IsRosterFull` | property |
| `IsTroopHero` | `public bool IsTroopHero` | property |
| `IsLocked` | `public bool IsLocked` | property |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `HeroHealthPercent` | `public int HeroHealthPercent` | property |
| `Name` | `public string Name` | property |
| `AmountText` | `public string AmountText` | property |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | property |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenuTroopSelectionVM](../GameMenuTroopSelectionVM/)
- [same namespace TroopItemComparer](../TroopItemComparer/)
