---
title: "RefinementActionItemVM"
description: "RefinementActionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement, inheriting ViewModel; 9 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RefinementActionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RefinementActionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

RefinementActionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is RefinementActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RefinementActionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`, inheritance chain RefinementActionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RefineFormula` | `public Crafting.RefiningFormula RefineFormula` | property |
| `RefinementActionItemVM` | `public RefinementActionItemVM(Crafting.RefiningFormula refineFormula, Action<RefinementActionItemVM>onSelect)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshDynamicProperties` | `public void RefreshDynamicProperties()` | method |
| `ExecuteSelectAction` | `public void ExecuteSelectAction()` | method |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>InputMaterials` | property |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>OutputMaterials` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace RefinementVM](../RefinementVM/)
