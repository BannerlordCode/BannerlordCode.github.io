---
title: "LauncherPlatform"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherPlatform`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherPlatform

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class LauncherPlatform`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherPlatform.cs`

## Overview

`LauncherPlatform` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize(List<string> args)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Destroy
`public static void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### SetLauncherMode
`public static void SetLauncherMode(bool isLauncherModeActive)`

**Purpose:** Sets the value or state of `launcher mode`.

## Usage Example

```csharp
LauncherPlatform.Initialize(args);
```

## See Also

- [Complete Class Catalog](../catalog)