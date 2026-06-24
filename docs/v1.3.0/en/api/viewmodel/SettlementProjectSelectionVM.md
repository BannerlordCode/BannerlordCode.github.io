<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementProjectSelectionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementProjectSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementProjectSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectSelectionVM.cs`

## Overview

`SettlementProjectSelectionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LocalDevelopmentList` | `public List<Building> LocalDevelopmentList { get; }` |
| `ProjectsText` | `public string ProjectsText { get; set; }` |
| `QueueText` | `public string QueueText { get; set; }` |
| `DailyDefaultsText` | `public string DailyDefaultsText { get; set; }` |
| `DailyDefaultsExplanationText` | `public string DailyDefaultsExplanationText { get; set; }` |
| `CurrentSelectedProject` | `public SettlementProjectVM CurrentSelectedProject { get; set; }` |
| `CurrentDailyDefault` | `public SettlementDailyProjectVM CurrentDailyDefault { get; set; }` |
| `AvailableProjects` | `public MBBindingList<SettlementBuildingProjectVM> AvailableProjects { get; set; }` |
| `CurrentDevelopmentQueue` | `public MBBindingList<SettlementBuildingProjectVM> CurrentDevelopmentQueue { get; set; }` |
| `DailyDefaultList` | `public MBBindingList<SettlementDailyProjectVM> DailyDefaultList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteChangeQueueOrder
`public void ExecuteChangeQueueOrder(SettlementBuildingProjectVM project, int index, string targetTag)`

**Purpose:** Executes the `change queue order` operation or workflow.

## Usage Example

```csharp
var value = new SettlementProjectSelectionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)