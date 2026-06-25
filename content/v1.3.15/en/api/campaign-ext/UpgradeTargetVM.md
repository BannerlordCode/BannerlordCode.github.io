---
title: "UpgradeTargetVM"
description: "Auto-generated class reference for UpgradeTargetVM."
---
# UpgradeTargetVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class UpgradeTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs`

## Overview

`UpgradeTargetVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey { get; set; }` |
| `Requirements` | `public UpgradeRequirementsVM Requirements { get; set; }` |
| `TroopImage` | `public CharacterImageIdentifierVM TroopImage { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `AvailableUpgrades` | `public int AvailableUpgrades { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |
| `IsHighlighted` | `public bool IsHighlighted { get; set; }` |
| `IsMarinerTroop` | `public bool IsMarinerTroop { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of UpgradeTargetVM from the subsystem API first
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.RefreshValues();
```

### Refresh
`public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString, bool isMarinerTroop)`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Obtain an instance of UpgradeTargetVM from the subsystem API first
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.Refresh(0, false, false, false, false, "example", false);
```

### ExecuteUpgradeEncyclopediaLink
`public void ExecuteUpgradeEncyclopediaLink()`

**Purpose:** Runs the operation or workflow associated with `upgrade encyclopedia link`.

```csharp
// Obtain an instance of UpgradeTargetVM from the subsystem API first
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteUpgradeEncyclopediaLink();
```

### ExecuteUpgrade
`public void ExecuteUpgrade()`

**Purpose:** Runs the operation or workflow associated with `upgrade`.

```csharp
// Obtain an instance of UpgradeTargetVM from the subsystem API first
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteUpgrade();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Runs the operation or workflow associated with `set focused`.

```csharp
// Obtain an instance of UpgradeTargetVM from the subsystem API first
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Runs the operation or workflow associated with `set unfocused`.

```csharp
// Obtain an instance of UpgradeTargetVM from the subsystem API first
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.ExecuteSetUnfocused();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UpgradeTargetVM upgradeTargetVM = ...;
upgradeTargetVM.RefreshValues();
```

## See Also

- [Area Index](../)