---
title: "SmeltingItemVM"
description: "SmeltingItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting, inheriting ViewModel; 15 exposed members (4 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SmeltingItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SmeltingItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

SmeltingItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SmeltingItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 4 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmeltingItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`, inheritance chain SmeltingItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/15, methods 4/15), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EquipmentElement` | `public EquipmentElement EquipmentElement` | property |
| `SmeltingItemVM` | `public SmeltingItemVM(EquipmentElement equipmentElement, Action<SmeltingItemVM>onSelection, Action<SmeltingItemVM, bool>onItemLockedStateChange, bool isLocked, int numOfItems)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `ExecuteShowItemTooltip` | `public void ExecuteShowItemTooltip()` | method |
| `ExecuteHideItemTooltip` | `public void ExecuteHideItemTooltip()` | method |
| `Visual` | `public ItemImageIdentifierVM Visual` | property |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>Yield` | property |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>InputMaterials` | property |
| `Name` | `public string Name` | property |
| `NumOfItems` | `public int NumOfItems` | property |
| `HasMoreThanOneItem` | `public bool HasMoreThanOneItem` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `LockHint` | `public HintViewModel LockHint` | property |
| `IsLocked` | `public bool IsLocked` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SmeltingSortControllerVM](../SmeltingSortControllerVM/)
- [same namespace SmeltingVM](../SmeltingVM/)
