---
title: "CraftingSecondaryUsageItemVM"
description: "CraftingSecondaryUsageItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting, inheriting SelectorItemVM; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingSecondaryUsageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingSecondaryUsageItemVM : SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingSecondaryUsageItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is CraftingSecondaryUsageItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingSecondaryUsageItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`, inheritance chain CraftingSecondaryUsageItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingSecondaryUsageItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UsageIndex` | `public int UsageIndex` | property |
| `SelectorIndex` | `public int SelectorIndex` | property |
| `CraftingSecondaryUsageItemVM` | `public CraftingSecondaryUsageItemVM(TextObject name, int index, int usageIndex, SelectorVM<CraftingSecondaryUsageItemVM>parentSelector) : base(name)` | constructor |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SelectorItemVM](../SelectorItemVM/)
- [same namespace CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/)
- [same namespace CraftingHeroPopupVM](../CraftingHeroPopupVM/)
- [same namespace CraftingListPropertyItem](../CraftingListPropertyItem/)
- [same namespace CraftingPerkVM](../CraftingPerkVM/)
