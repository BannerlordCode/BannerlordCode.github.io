---
title: "VisualTestsScreen"
description: "Auto-generated class reference for VisualTestsScreen."
---
# VisualTestsScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualTestsScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/VisualTestsScreen.cs`

## Overview

`VisualTestsScreen` lives in `TaleWorlds.MountAndBlade.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartedRendering
`public bool StartedRendering()`

**Purpose:** Starts the `ed rendering` flow or state machine.

```csharp
// Obtain an instance of VisualTestsScreen from the subsystem API first
VisualTestsScreen visualTestsScreen = ...;
var result = visualTestsScreen.StartedRendering();
```

### GetSubTestName
`public string GetSubTestName(CameraPointTestType type)`

**Purpose:** Reads and returns the `sub test name` value held by the current object.

```csharp
// Obtain an instance of VisualTestsScreen from the subsystem API first
VisualTestsScreen visualTestsScreen = ...;
var result = visualTestsScreen.GetSubTestName(type);
```

### GetRenderMode
`public EngineRenderDisplayMode GetRenderMode(CameraPointTestType type)`

**Purpose:** Reads and returns the `render mode` value held by the current object.

```csharp
// Obtain an instance of VisualTestsScreen from the subsystem API first
VisualTestsScreen visualTestsScreen = ...;
var result = visualTestsScreen.GetRenderMode(type);
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of VisualTestsScreen from the subsystem API first
VisualTestsScreen visualTestsScreen = ...;
visualTestsScreen.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VisualTestsScreen visualTestsScreen = ...;
visualTestsScreen.StartedRendering();
```

## See Also

- [Area Index](../)