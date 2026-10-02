---
title: "RefinementActionItemVM"
description: "RefinementActionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 9 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs."
---
# RefinementActionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RefinementActionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs`

## Overview

RefinementActionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is RefinementActionItemVM → ViewModel. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RefinementActionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement) the module directory; inheritance chain RefinementActionItemVM → ViewModel. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RefinementVM](../RefinementVM)
