---
title: "WeaponDesignResultPropertyItemVM"
description: "WeaponDesignResultPropertyItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign, inheriting ViewModel; 14 exposed members (1 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeaponDesignResultPropertyItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignResultPropertyItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

WeaponDesignResultPropertyItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponDesignResultPropertyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 1 methods, 11 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponDesignResultPropertyItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`, inheritance chain WeaponDesignResultPropertyItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/14, methods 1/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPropertyItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM/)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM/)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent/)
