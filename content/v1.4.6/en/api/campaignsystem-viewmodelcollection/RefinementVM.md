---
title: "RefinementVM"
description: "RefinementVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs."
---
# RefinementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class RefinementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs`

## Overview

RefinementVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is RefinementVM → ViewModel. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RefinementVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement) the module directory; inheritance chain RefinementVM → ViewModel. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RefinementActionItemVM](../RefinementActionItemVM)
