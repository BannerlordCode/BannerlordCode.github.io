---
title: "UpgradeRequirementsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpgradeRequirementsVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UpgradeRequirementsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class UpgradeRequirementsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### SetItemRequirement
`public void SetItemRequirement(ItemCategory category)`

**Purpose:** Sets the value or state of `item requirement`.

### SetPerkRequirement
`public void SetPerkRequirement(PerkObject perk)`

**Purpose:** Sets the value or state of `perk requirement`.

### SetRequirementsMet
`public void SetRequirementsMet(bool isItemRequirementMet, bool isPerkRequirementMet)`

**Purpose:** Sets the value or state of `requirements met`.

## Usage Example

```csharp
var value = new UpgradeRequirementsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)