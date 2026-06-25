---
title: "SceneNotificationVM"
description: "Auto-generated class reference for SceneNotificationVM."
---
# SceneNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/SceneNotificationVM.cs`

## Overview

`SceneNotificationVM` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveData` | `public SceneNotificationData ActiveData { get; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `Scene` | `public object Scene { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SceneNotificationVM from the subsystem API first
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.RefreshValues();
```

### CreateNotification
`public void CreateNotification(SceneNotificationData data)`

**Purpose:** Constructs a new notification entity and returns it to the caller.

```csharp
// Obtain an instance of SceneNotificationVM from the subsystem API first
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.CreateNotification(data);
```

### ClearData
`public void ClearData()`

**Purpose:** Removes all data from the this instance.

```csharp
// Obtain an instance of SceneNotificationVM from the subsystem API first
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ClearData();
```

### ExecuteAffirmativeProcess
`public void ExecuteAffirmativeProcess()`

**Purpose:** Runs the operation or workflow associated with affirmative process.

```csharp
// Obtain an instance of SceneNotificationVM from the subsystem API first
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ExecuteAffirmativeProcess();
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of SceneNotificationVM from the subsystem API first
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ExecuteClose();
```

### ExecuteNegativeProcess
`public void ExecuteNegativeProcess()`

**Purpose:** Runs the operation or workflow associated with negative process.

```csharp
// Obtain an instance of SceneNotificationVM from the subsystem API first
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.ExecuteNegativeProcess();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of SceneNotificationVM from the subsystem API first
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SceneNotificationVM sceneNotificationVM = ...;
sceneNotificationVM.RefreshValues();
```

## See Also

- [Area Index](../)