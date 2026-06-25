---
title: "MissionOrderCallbacks"
description: "Auto-generated class reference for MissionOrderCallbacks."
---
# MissionOrderCallbacks

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionOrderCallbacks`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs`

## Overview

`MissionOrderCallbacks` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnRefreshVisualsDelegate
`public delegate void OnRefreshVisualsDelegate()`

**Purpose:** **Purpose:** Invoked when the refresh visuals delegate event is raised.

```csharp
// Obtain an instance of MissionOrderCallbacks from the subsystem API first
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnRefreshVisualsDelegate();
```

### OnToggleActivateOrderStateDelegate
`public delegate void OnToggleActivateOrderStateDelegate()`

**Purpose:** **Purpose:** Invoked when the toggle activate order state delegate event is raised.

```csharp
// Obtain an instance of MissionOrderCallbacks from the subsystem API first
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnToggleActivateOrderStateDelegate();
```

### OnTransferTroopsFinishedDelegate
`public delegate void OnTransferTroopsFinishedDelegate()`

**Purpose:** **Purpose:** Invoked when the transfer troops finished delegate event is raised.

```csharp
// Obtain an instance of MissionOrderCallbacks from the subsystem API first
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnTransferTroopsFinishedDelegate();
```

### OnBeforeOrderDelegate
`public delegate void OnBeforeOrderDelegate()`

**Purpose:** **Purpose:** Invoked when the before order delegate event is raised.

```csharp
// Obtain an instance of MissionOrderCallbacks from the subsystem API first
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnBeforeOrderDelegate();
```

### ToggleOrderPositionVisibilityDelegate
`public delegate void ToggleOrderPositionVisibilityDelegate(bool value)`

**Purpose:** **Purpose:** Executes the ToggleOrderPositionVisibilityDelegate logic.

```csharp
// Obtain an instance of MissionOrderCallbacks from the subsystem API first
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.ToggleOrderPositionVisibilityDelegate(false);
```

### GetOrderExecutionParametersDelegate
`public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate()`

**Purpose:** **Purpose:** Reads and returns the order execution parameters delegate value held by the this instance.

```csharp
// Obtain an instance of MissionOrderCallbacks from the subsystem API first
MissionOrderCallbacks missionOrderCallbacks = ...;
var result = missionOrderCallbacks.GetOrderExecutionParametersDelegate();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnRefreshVisualsDelegate();
```

## See Also

- [Area Index](../)