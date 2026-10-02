---
title: "PerkSelectionVM"
description: "PerkSelectionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection, inheriting ViewModel; 9 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PerkSelectionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PerkSelectionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PerkSelectionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PerkSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PerkSelectionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`, inheritance chain PerkSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkSelection/PerkSelectionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PerkSelectionVM` | `public PerkSelectionVM(HeroDeveloper developer, Action<SkillObject>refreshPerksOf, Action onPerkSelection)` | constructor |
| `SetCurrentSelectionPerk` | `public void SetCurrentSelectionPerk(PerkVM perk)` | method |
| `ResetSelectedPerks` | `public void ResetSelectedPerks()` | method |
| `ApplySelectedPerks` | `public void ApplySelectedPerks()` | method |
| `IsPerkSelected` | `public bool IsPerkSelected(PerkObject perk)` | method |
| `IsAnyPerkSelected` | `public bool IsAnyPerkSelected()` | method |
| `ExecuteDeactivate` | `public void ExecuteDeactivate()` | method |
| `IsActive` | `public bool IsActive` | property |
| `MBBindingList` | `public MBBindingList<PerkSelectionItemVM>AvailablePerks` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PerkSelectedByPlayerEvent](../PerkSelectedByPlayerEvent/)
- [same namespace PerkSelectionItemVM](../PerkSelectionItemVM/)
- [same namespace PerkSelectionToggleEvent](../PerkSelectionToggleEvent/)
