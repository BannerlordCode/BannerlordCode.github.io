<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UpgradeTargetVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UpgradeTargetVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class UpgradeTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/UpgradeTargetVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### Refresh
`public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString, bool isMarinerTroop)`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteUpgradeEncyclopediaLink
`public void ExecuteUpgradeEncyclopediaLink()`

**Purpose:** Executes the `upgrade encyclopedia link` operation or workflow.

### ExecuteUpgrade
`public void ExecuteUpgrade()`

**Purpose:** Executes the `upgrade` operation or workflow.

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Executes the `set focused` operation or workflow.

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Executes the `set unfocused` operation or workflow.

## Usage Example

```csharp
var value = new UpgradeTargetVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)