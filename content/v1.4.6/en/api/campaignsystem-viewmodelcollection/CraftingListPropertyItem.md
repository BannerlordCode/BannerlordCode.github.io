---
title: "CraftingListPropertyItem"
description: "CraftingListPropertyItem: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (1 methods, 12 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs."
---
# CraftingListPropertyItem

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingListPropertyItem : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs`

## Overview

CraftingListPropertyItem lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingListPropertyItem → ViewModel. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingListPropertyItem is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting) the module directory; inheritance chain CraftingListPropertyItem → ViewModel. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM)
- [same namespace CraftingHeroPopupVM](../CraftingHeroPopupVM)
- [same namespace CraftingPerkVM](../CraftingPerkVM)
- [same namespace CraftingResourceItemVM](../CraftingResourceItemVM)
