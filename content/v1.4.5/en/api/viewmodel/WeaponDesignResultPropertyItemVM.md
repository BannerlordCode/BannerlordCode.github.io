---
title: "WeaponDesignResultPropertyItemVM"
description: "Auto-generated class reference for WeaponDesignResultPropertyItemVM."
---
# WeaponDesignResultPropertyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignResultPropertyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/WeaponDesignResultPropertyItemVM.cs`

## Overview

`WeaponDesignResultPropertyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyLbl` | `public string PropertyLbl { get; set; }` |
| `InitialValue` | `public float InitialValue { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `RequiredValueText` | `public string RequiredValueText { get; set; }` |
| `ChangeAmount` | `public float ChangeAmount { get; set; }` |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint { get; set; }` |
| `IsOrderResult` | `public bool IsOrderResult { get; set; }` |
| `HasBenefit` | `public bool HasBenefit { get; set; }` |
| `OrderRequirementTooltip` | `public HintViewModel OrderRequirementTooltip { get; set; }` |
| `CraftedValueTooltip` | `public HintViewModel CraftedValueTooltip { get; set; }` |
| `BonusPenaltyTooltip` | `public HintViewModel BonusPenaltyTooltip { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of WeaponDesignResultPropertyItemVM from the subsystem API first
WeaponDesignResultPropertyItemVM weaponDesignResultPropertyItemVM = ...;
weaponDesignResultPropertyItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponDesignResultPropertyItemVM weaponDesignResultPropertyItemVM = ...;
weaponDesignResultPropertyItemVM.RefreshValues();
```

## See Also

- [Area Index](../)