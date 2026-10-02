---
title: "RefinementVM"
description: "RefinementVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement, inheriting ViewModel; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RefinementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RefinementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

RefinementVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is RefinementVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RefinementVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`, inheritance chain RefinementVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RefinementVM` | `public RefinementVM(Action onRefinementSelectionChange, Func<CraftingAvailableHeroItemVM>getCurrentHero)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelectedRefinement` | `public void ExecuteSelectedRefinement(Hero currentCraftingHero)` | method |
| `RefreshRefinementActionsList` | `public void RefreshRefinementActionsList(Hero craftingHero)` | method |
| `CurrentSelectedAction` | `public RefinementActionItemVM CurrentSelectedAction` | property |
| `IsValidRefinementActionSelected` | `public bool IsValidRefinementActionSelected` | property |
| `MBBindingList` | `public MBBindingList<RefinementActionItemVM>AvailableRefinementActions` | property |
| `RefinementText` | `public string RefinementText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace RefinementActionItemVM](../RefinementActionItemVM/)
