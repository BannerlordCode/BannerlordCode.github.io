---
title: "WeaponDesignResultPropertyItemVM"
description: "WeaponDesignResultPropertyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs."
---
# WeaponDesignResultPropertyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignResultPropertyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs`

## Overview

WeaponDesignResultPropertyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponDesignResultPropertyItemVM → ViewModel. It exposes 14 public/protected members: 1 methods, 11 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponDesignResultPropertyItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain WeaponDesignResultPropertyItemVM → ViewModel. The surface is property-led (properties 11/14, methods 1/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponDesignResultPropertyItemVM` | `public WeaponDesignResultPropertyItemVM(TextObject description, float value, float changeAmount, bool showFloatingPoint)` | constructor |
| `WeaponDesignResultPropertyItemVM` | `public WeaponDesignResultPropertyItemVM(TextObject description, float craftedValue, float requiredValue, float changeAmount, bool showFloatingPoint, bool isExceedingBeneficial, bool showTooltip = true)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `PropertyLbl` | `public string PropertyLbl` | property |
| `InitialValue` | `public float InitialValue` | property |
| `TargetValue` | `public float TargetValue` | property |
| `RequiredValueText` | `public string RequiredValueText` | property |
| `ChangeAmount` | `public float ChangeAmount` | property |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint` | property |
| `IsOrderResult` | `public bool IsOrderResult` | property |
| `HasBenefit` | `public bool HasBenefit` | property |
| `OrderRequirementTooltip` | `public HintViewModel OrderRequirementTooltip` | property |
| `CraftedValueTooltip` | `public HintViewModel CraftedValueTooltip` | property |
| `BonusPenaltyTooltip` | `public HintViewModel BonusPenaltyTooltip` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
