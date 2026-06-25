---
title: "GauntletSceneNotification"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletSceneNotification`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletSceneNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs`

## Overview

`GauntletSceneNotification` lives in `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletSceneNotification Current { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RegisterContextProvider
`public void RegisterContextProvider(ISceneNotificationContextProvider provider)`

**Purpose:** Handles logic related to `register context provider`.

### RemoveContextProvider
`public bool RemoveContextProvider(ISceneNotificationContextProvider provider)`

**Purpose:** Removes `context provider` from the current collection or state.

## Usage Example

```csharp
GauntletSceneNotification.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)