---
title: "CraftingAvailableHeroItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingAvailableHeroItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingAvailableHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingAvailableHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs`

## Overview

`CraftingAvailableHeroItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HeroData` | `public HeroVM HeroData { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `CurrentStamina` | `public float CurrentStamina { get; set; }` |
| `MaxStamina` | `public int MaxStamina { get; set; }` |
| `StaminaPercentage` | `public string StaminaPercentage { get; set; }` |
| `SmithySkillLevel` | `public int SmithySkillLevel { get; set; }` |
| `CraftingPerks` | `public MBBindingList<CraftingPerkVM> CraftingPerks { get; set; }` |
| `PerksText` | `public string PerksText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshStamina
`public void RefreshStamina()`

**Purpose:** Refreshes the display or cache of `stamina`.

### RefreshOrderAvailability
`public void RefreshOrderAvailability(CraftingOrder order)`

**Purpose:** Refreshes the display or cache of `order availability`.

### RefreshSkills
`public void RefreshSkills()`

**Purpose:** Refreshes the display or cache of `skills`.

### RefreshPerks
`public void RefreshPerks()`

**Purpose:** Refreshes the display or cache of `perks`.

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

## Usage Example

```csharp
var value = new CraftingAvailableHeroItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)