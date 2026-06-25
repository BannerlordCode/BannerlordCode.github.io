---
title: "LauncherPlatform"
description: "Auto-generated class reference for LauncherPlatform."
---
# LauncherPlatform

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class LauncherPlatform`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherPlatform.cs`

## Overview

`LauncherPlatform` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize(List<string> args)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
LauncherPlatform.Initialize(args);
```

### Destroy
`public static void Destroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
LauncherPlatform.Destroy();
```

### SetLauncherMode
`public static void SetLauncherMode(bool isLauncherModeActive)`

**Purpose:** Assigns a new value to `launcher mode` and updates the object's internal state.

```csharp
// Static call; no instance required
LauncherPlatform.SetLauncherMode(false);
```

## Usage Example

```csharp
LauncherPlatform.Initialize(args);
```

## See Also

- [Area Index](../)