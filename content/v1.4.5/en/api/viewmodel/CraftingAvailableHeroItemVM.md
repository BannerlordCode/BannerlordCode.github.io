---
title: "CraftingAvailableHeroItemVM"
description: "Auto-generated class reference for CraftingAvailableHeroItemVM."
---
# CraftingAvailableHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingAvailableHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting/CraftingAvailableHeroItemVM.cs`

## Overview

`CraftingAvailableHeroItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; set; }` |
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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingAvailableHeroItemVM from the subsystem API first
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshValues();
```

### RefreshStamina
`public void RefreshStamina()`

**Purpose:** Keeps the display or cache of `stamina` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingAvailableHeroItemVM from the subsystem API first
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshStamina();
```

### RefreshOrderAvailability
`public void RefreshOrderAvailability(CraftingOrder order)`

**Purpose:** Keeps the display or cache of `order availability` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingAvailableHeroItemVM from the subsystem API first
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshOrderAvailability(order);
```

### RefreshSkills
`public void RefreshSkills()`

**Purpose:** Keeps the display or cache of `skills` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingAvailableHeroItemVM from the subsystem API first
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshSkills();
```

### RefreshPerks
`public void RefreshPerks()`

**Purpose:** Keeps the display or cache of `perks` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingAvailableHeroItemVM from the subsystem API first
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshPerks();
```

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Runs the operation or workflow associated with `selection`.

```csharp
// Obtain an instance of CraftingAvailableHeroItemVM from the subsystem API first
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.ExecuteSelection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshValues();
```

## See Also

- [Area Index](../)