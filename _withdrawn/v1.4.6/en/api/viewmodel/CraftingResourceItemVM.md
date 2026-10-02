---
title: "CraftingResourceItemVM"
description: "CraftingResourceItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting, inheriting ViewModel; 10 exposed members (0 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingResourceItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingResourceItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingResourceItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingResourceItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingResourceItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingResourceItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingResourceItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingResourceItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`, inheritance chain CraftingResourceItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/10, methods 0/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingResourceItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ResourceItem` | `public ItemObject ResourceItem` | property |
| `ResourceMaterial` | `public CraftingMaterials ResourceMaterial` | property |
| `CraftingResourceItemVM` | `public CraftingResourceItemVM(CraftingMaterials material, int amount, int changeAmount = 0)` | constructor |
| `ResourceName` | `public string ResourceName` | property |
| `ResourceHint` | `public HintViewModel ResourceHint` | property |
| `ResourceMaterialTypeAsStr` | `public string ResourceMaterialTypeAsStr` | property |
| `ResourceAmount` | `public int ResourceAmount` | property |
| `ResourceChangeAmount` | `public int ResourceChangeAmount` | property |
| `ResourceItemStringId` | `public string ResourceItemStringId` | property |
| `IsResourceAvailable` | `public bool IsResourceAvailable` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/)
- [same namespace CraftingHeroPopupVM](../CraftingHeroPopupVM/)
- [same namespace CraftingListPropertyItem](../CraftingListPropertyItem/)
- [same namespace CraftingPerkVM](../CraftingPerkVM/)
