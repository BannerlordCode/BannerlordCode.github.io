---
title: "UpgradeRequirementsVM"
description: "Auto-generated class reference for UpgradeRequirementsVM."
---
# UpgradeRequirementsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class UpgradeRequirementsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/UpgradeRequirementsVM.cs`

## Overview

`UpgradeRequirementsVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsItemRequirementMet` | `public bool IsItemRequirementMet { get; set; }` |
| `IsPerkRequirementMet` | `public bool IsPerkRequirementMet { get; set; }` |
| `HasItemRequirement` | `public bool HasItemRequirement { get; set; }` |
| `HasPerkRequirement` | `public bool HasPerkRequirement { get; set; }` |
| `PerkRequirement` | `public string PerkRequirement { get; set; }` |
| `ItemRequirement` | `public string ItemRequirement { get; set; }` |
| `ItemRequirementHint` | `public HintViewModel ItemRequirementHint { get; set; }` |
| `PerkRequirementHint` | `public HintViewModel PerkRequirementHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of UpgradeRequirementsVM from the subsystem API first
UpgradeRequirementsVM upgradeRequirementsVM = ...;
upgradeRequirementsVM.RefreshValues();
```

### SetItemRequirement
`public void SetItemRequirement(ItemCategory category)`

**Purpose:** Assigns a new value to item requirement and updates the object's internal state.

```csharp
// Obtain an instance of UpgradeRequirementsVM from the subsystem API first
UpgradeRequirementsVM upgradeRequirementsVM = ...;
upgradeRequirementsVM.SetItemRequirement(category);
```

### SetPerkRequirement
`public void SetPerkRequirement(PerkObject perk)`

**Purpose:** Assigns a new value to perk requirement and updates the object's internal state.

```csharp
// Obtain an instance of UpgradeRequirementsVM from the subsystem API first
UpgradeRequirementsVM upgradeRequirementsVM = ...;
upgradeRequirementsVM.SetPerkRequirement(perk);
```

### SetRequirementsMet
`public void SetRequirementsMet(bool isItemRequirementMet, bool isPerkRequirementMet)`

**Purpose:** Assigns a new value to requirements met and updates the object's internal state.

```csharp
// Obtain an instance of UpgradeRequirementsVM from the subsystem API first
UpgradeRequirementsVM upgradeRequirementsVM = ...;
upgradeRequirementsVM.SetRequirementsMet(false, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UpgradeRequirementsVM upgradeRequirementsVM = ...;
upgradeRequirementsVM.RefreshValues();
```

## See Also

- [Area Index](../)