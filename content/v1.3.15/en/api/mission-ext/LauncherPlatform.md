---
title: "LauncherPlatform"
description: "Auto-generated class reference for LauncherPlatform."
---
# LauncherPlatform

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class LauncherPlatform`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherPlatform.cs`

## Overview

`LauncherPlatform` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlatformType` | `public static LauncherPlatformType PlatformType { get; }` |

## Key Methods

### Initialize
`public static void Initialize(List<string> args)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
LauncherPlatform.Initialize(args);
```

### Destroy
`public static void Destroy()`

**Purpose:** **Purpose:** Executes the Destroy logic.

```csharp
// Static call; no instance required
LauncherPlatform.Destroy();
```

### SetLauncherMode
`public static void SetLauncherMode(bool isLauncherModeActive)`

**Purpose:** **Purpose:** Assigns a new value to launcher mode and updates the object's internal state.

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