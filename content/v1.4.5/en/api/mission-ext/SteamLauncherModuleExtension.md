---
title: "SteamLauncherModuleExtension"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamLauncherModuleExtension`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamLauncherModuleExtension

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Steam
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SteamLauncherModuleExtension : IPlatformModuleExtension`
**Base:** `IPlatformModuleExtension`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Steam/TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs`

## Overview

`SteamLauncherModuleExtension` lives in `TaleWorlds.MountAndBlade.Launcher.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize(List<string> args)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetModulePaths
`public string GetModulePaths()`

**Purpose:** Gets the current value of `module paths`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### SetLauncherMode
`public void SetLauncherMode(bool isLauncherModeActive)`

**Purpose:** Sets the value or state of `launcher mode`.

### CheckEntitlement
`public bool CheckEntitlement(string title)`

**Purpose:** Handles logic related to `check entitlement`.

## Usage Example

```csharp
var value = new SteamLauncherModuleExtension();
value.Initialize(args);
```

## See Also

- [Complete Class Catalog](../catalog)