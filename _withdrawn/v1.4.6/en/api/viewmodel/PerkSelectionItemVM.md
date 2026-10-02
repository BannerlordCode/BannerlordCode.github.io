---
title: "PerkSelectionItemVM"
description: "PerkSelectionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PerkSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PerkSelectionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PerkSelectionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PerkSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkSelectionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`, inheritance chain PerkSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PerkSelectionItemVM` | `public PerkSelectionItemVM(PerkObject perk, Action<PerkSelectionItemVM>onSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `PickText` | `public string PickText` | property |
| `PerkName` | `public string PerkName` | property |
| `PerkDescription` | `public string PerkDescription` | property |
| `PerkRole` | `public string PerkRole` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PerkSelectedByPlayerEvent](../PerkSelectedByPlayerEvent/)
- [same namespace PerkSelectionToggleEvent](../PerkSelectionToggleEvent/)
- [same namespace PerkSelectionVM](../PerkSelectionVM/)
