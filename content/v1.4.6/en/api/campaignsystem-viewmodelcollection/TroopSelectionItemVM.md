---
title: "TroopSelectionItemVM"
description: "TroopSelectionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 17 exposed members (3 methods, 13 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs."
---
# TroopSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TroopSelectionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs`

## Overview

TroopSelectionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TroopSelectionItemVM → ViewModel. It exposes 17 public/protected members: 3 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopSelectionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection) the module directory; inheritance chain TroopSelectionItemVM → ViewModel. The surface is property-led (properties 13/17, methods 3/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenuTroopSelectionVM](../GameMenuTroopSelectionVM)
- [same namespace TroopItemComparer](../TroopItemComparer)
