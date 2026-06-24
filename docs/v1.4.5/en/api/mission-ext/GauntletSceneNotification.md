<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletSceneNotification`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletSceneNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**Base:** `GlobalLayer`
**Area:** mission-ext

## Overview

`GauntletSceneNotification` lives in `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletSceneNotification Current { get; }` |

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
// Prepare the required context, then call the static entry point directly
GauntletSceneNotification.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
