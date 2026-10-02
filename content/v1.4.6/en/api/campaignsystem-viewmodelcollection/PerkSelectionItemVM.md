---
title: "PerkSelectionItemVM"
description: "PerkSelectionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs."
---
# PerkSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PerkSelectionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs`

## Overview

PerkSelectionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PerkSelectionItemVM → ViewModel. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkSelectionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection) the module directory; inheritance chain PerkSelectionItemVM → ViewModel. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PerkSelectionItemVM` | `public PerkSelectionItemVM(PerkObject perk, Action<PerkSelectionItemVM>onSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `PickText` | `public string PickText` | property |
| `PerkName` | `public string PerkName` | property |
| `PerkDescription` | `public string PerkDescription` | property |
| `PerkRole` | `public string PerkRole` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PerkSelectedByPlayerEvent](../PerkSelectedByPlayerEvent)
- [same namespace PerkSelectionToggleEvent](../PerkSelectionToggleEvent)
- [same namespace PerkSelectionVM](../PerkSelectionVM)
