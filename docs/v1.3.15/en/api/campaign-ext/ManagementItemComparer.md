<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementItemComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagementItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>`
**Base:** `IComparer<ArmyManagementItemVM>`
**Area:** campaign-ext

## Overview

`ManagementItemComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `SortControllerVM` | `public ArmyManagementSortControllerVM SortControllerVM { get; set; }` |
| `BoostTitleText` | `public string BoostTitleText { get; set; }` |
| `DisbandArmyText` | `public string DisbandArmyText { get; set; }` |
| `CohesionBoostAmountText` | `public string CohesionBoostAmountText { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `CostText` | `public string CostText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |
| `LordsText` | `public string LordsText { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `TotalStrength` | `public int TotalStrength { get; set; }` |
| `TotalCost` | `public int TotalCost { get; set; }` |
| `TotalLords` | `public string TotalLords { get; set; }` |
| `CanCreateArmy` | `public bool CanCreateArmy { get; set; }` |
| `CanBoostCohesion` | `public bool CanBoostCohesion { get; set; }` |
| `CanDisbandArmy` | `public bool CanDisbandArmy { get; set; }` |
| `CanAffordInfluenceCost` | `public bool CanAffordInfluenceCost { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### ExecuteDisbandArmy
`public void ExecuteDisbandArmy()`

**Purpose:** Executes the `disband army` operation or workflow.

### ExecuteBoostCohesionManual
`public void ExecuteBoostCohesionManual()`

**Purpose:** Executes the `boost cohesion manual` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `reset input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `remove input key`.

### Compare
`public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ManagementItemComparer instance from game state, then call one of its public methods
var value = new ManagementItemComparer();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
