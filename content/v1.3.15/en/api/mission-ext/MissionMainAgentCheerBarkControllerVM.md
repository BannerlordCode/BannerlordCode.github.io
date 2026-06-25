---
title: "MissionMainAgentCheerBarkControllerVM"
description: "Auto-generated class reference for MissionMainAgentCheerBarkControllerVM."
---
# MissionMainAgentCheerBarkControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentCheerBarkControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs`

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

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionMainAgentCheerBarkControllerVM from the subsystem API first
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnFinalize();
```

### SelectItem
`public void SelectItem(int itemIndex, int subNodeIndex = -1)`

**Purpose:** **Purpose:** Executes the SelectItem logic.

```csharp
// Obtain an instance of MissionMainAgentCheerBarkControllerVM from the subsystem API first
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.SelectItem(0, 0);
```

### ExecuteActivate
`public void ExecuteActivate()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with activate.

```csharp
// Obtain an instance of MissionMainAgentCheerBarkControllerVM from the subsystem API first
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.ExecuteActivate();
```

### ExecuteDeactivate
`public void ExecuteDeactivate(bool applySelection)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with deactivate.

```csharp
// Obtain an instance of MissionMainAgentCheerBarkControllerVM from the subsystem API first
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.ExecuteDeactivate(false);
```

### OnNodeFocused
`public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)`

**Purpose:** **Purpose:** Invoked when the node focused event is raised.

```csharp
// Obtain an instance of MissionMainAgentCheerBarkControllerVM from the subsystem API first
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnNodeFocused(focusedNode);
```

### OnNodeTooltipToggled
`public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)`

**Purpose:** **Purpose:** Invoked when the node tooltip toggled event is raised.

```csharp
// Obtain an instance of MissionMainAgentCheerBarkControllerVM from the subsystem API first
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnNodeTooltipToggled(node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMainAgentCheerBarkControllerVM missionMainAgentCheerBarkControllerVM = ...;
missionMainAgentCheerBarkControllerVM.OnFinalize();
```

## See Also

- [Area Index](../)