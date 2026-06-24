<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementItemComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>`
**Base:** `IComparer<ArmyManagementItemVM>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementVM.cs`

## Overview

`ManagementItemComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new ManagementItemComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)