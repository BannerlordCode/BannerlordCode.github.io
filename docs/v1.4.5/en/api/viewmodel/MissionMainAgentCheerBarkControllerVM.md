<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentCheerBarkControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentCheerBarkControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentCheerBarkControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionMainAgentCheerBarkControllerVM.cs`

## Overview

`MissionMainAgentCheerBarkControllerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `DisabledReasonText` | `public string DisabledReasonText { get; set; }` |
| `SelectedNodeText` | `public string SelectedNodeText { get; set; }` |
| `IsNodesCategories` | `public bool IsNodesCategories { get; set; }` |
| `Nodes` | `public MBBindingList<CheerBarkNodeItemVM> Nodes { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SelectItem
`public void SelectItem(int itemIndex, int subNodeIndex = -1)`

**Purpose:** Handles logic related to `select item`.

### ExecuteActivate
`public void ExecuteActivate()`

**Purpose:** Executes the `activate` operation or workflow.

### ExecuteDeactivate
`public void ExecuteDeactivate(bool applySelection)`

**Purpose:** Executes the `deactivate` operation or workflow.

### OnNodeFocused
`public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)`

**Purpose:** Called when the `node focused` event is raised.

### OnNodeTooltipToggled
`public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)`

**Purpose:** Called when the `node tooltip toggled` event is raised.

## Usage Example

```csharp
var value = new MissionMainAgentCheerBarkControllerVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)