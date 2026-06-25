---
title: "LauncherUI"
description: "Auto-generated class reference for LauncherUI."
---
# LauncherUI

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherUI`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs`

## Overview

`LauncherUI` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasUnofficialModulesSelected` | `public bool HasUnofficialModulesSelected { get; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of LauncherUI from the subsystem API first
LauncherUI launcherUI = ...;
launcherUI.Initialize();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of LauncherUI from the subsystem API first
LauncherUI launcherUI = ...;
launcherUI.OnFinalize();
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of LauncherUI from the subsystem API first
LauncherUI launcherUI = ...;
launcherUI.Update();
```

### CheckMouseOverWindowDragArea
`public bool CheckMouseOverWindowDragArea()`

**Purpose:** Verifies whether mouse over window drag area holds true for the this instance.

```csharp
// Obtain an instance of LauncherUI from the subsystem API first
LauncherUI launcherUI = ...;
var result = launcherUI.CheckMouseOverWindowDragArea();
```

### HitTest
`public bool HitTest()`

**Purpose:** Executes the HitTest logic.

```csharp
// Obtain an instance of LauncherUI from the subsystem API first
LauncherUI launcherUI = ...;
var result = launcherUI.HitTest();
```

### AddHintInformation
`public static void AddHintInformation(string message)`

**Purpose:** Adds hint information to the current collection or state.

```csharp
// Static call; no instance required
LauncherUI.AddHintInformation("example");
```

### HideHintInformation
`public static void HideHintInformation()`

**Purpose:** Hides the UI or element associated with hint information.

```csharp
// Static call; no instance required
LauncherUI.HideHintInformation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LauncherUI launcherUI = ...;
launcherUI.Initialize();
```

## See Also

- [Area Index](../)