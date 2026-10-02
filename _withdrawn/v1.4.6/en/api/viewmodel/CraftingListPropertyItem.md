---
title: "CraftingListPropertyItem"
description: "CraftingListPropertyItem: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting, inheriting ViewModel; 14 exposed members (1 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingListPropertyItem

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingListPropertyItem : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingListPropertyItem lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingListPropertyItem → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingListPropertyItem lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`, inheritance chain CraftingListPropertyItem → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CraftingListPropertyItem` | `public CraftingListPropertyItem(TextObject description, float maxValue, float value, float targetValue, CraftingTemplate.CraftingStatTypes propertyType, bool isAlternativeUsageProperty = false)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsValidForUsage` | `public bool IsValidForUsage` | property |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial` | property |
| `HasValidTarget` | `public bool HasValidTarget` | property |
| `HasValidValue` | `public bool HasValidValue` | property |
| `TargetValue` | `public float TargetValue` | property |
| `TargetValueText` | `public string TargetValueText` | property |
| `IsAlternativeUsageProperty` | `public bool IsAlternativeUsageProperty` | property |
| `PropertyLbl` | `public string PropertyLbl` | property |
| `PropertyValue` | `public float PropertyValue` | property |
| `PropertyMaxValue` | `public float PropertyMaxValue` | property |
| `PropertyValueText` | `public string PropertyValueText` | property |
| `SeparatorText` | `public string SeparatorText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/)
- [same namespace CraftingHeroPopupVM](../CraftingHeroPopupVM/)
- [same namespace CraftingPerkVM](../CraftingPerkVM/)
- [same namespace CraftingResourceItemVM](../CraftingResourceItemVM/)
