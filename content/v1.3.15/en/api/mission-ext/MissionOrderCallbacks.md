---
title: "MissionOrderCallbacks"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOrderCallbacks`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `refresh visuals delegate` event is raised.

### OnToggleActivateOrderStateDelegate
`public delegate void OnToggleActivateOrderStateDelegate()`

**Purpose:** Called when the `toggle activate order state delegate` event is raised.

### OnTransferTroopsFinishedDelegate
`public delegate void OnTransferTroopsFinishedDelegate()`

**Purpose:** Called when the `transfer troops finished delegate` event is raised.

### OnBeforeOrderDelegate
`public delegate void OnBeforeOrderDelegate()`

**Purpose:** Called when the `before order delegate` event is raised.

### ToggleOrderPositionVisibilityDelegate
`public delegate void ToggleOrderPositionVisibilityDelegate(bool value)`

**Purpose:** Handles logic related to `toggle order position visibility delegate`.

### GetOrderExecutionParametersDelegate
`public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate()`

**Purpose:** Gets the current value of `order execution parameters delegate`.

## Usage Example

```csharp
var value = new MissionOrderCallbacks();
value.OnRefreshVisualsDelegate();
```

## See Also

- [Complete Class Catalog](../catalog)