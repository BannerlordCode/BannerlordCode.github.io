---
title: "SteamLauncherModuleExtension"
description: "Auto-generated class reference for SteamLauncherModuleExtension."
---
# SteamLauncherModuleExtension

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Steam
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SteamLauncherModuleExtension : IPlatformModuleExtension`
**Base:** `IPlatformModuleExtension`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Steam/TaleWorlds.MountAndBlade.Launcher.Steam/SteamLauncherModuleExtension.cs`

## Overview

`SteamLauncherModuleExtension` lives in `TaleWorlds.MountAndBlade.Launcher.Steam` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Steam` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize(List<string> args)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SteamLauncherModuleExtension from the subsystem API first
SteamLauncherModuleExtension steamLauncherModuleExtension = ...;
steamLauncherModuleExtension.Initialize(args);
```

### GetModulePaths
`public string GetModulePaths()`

**Purpose:** Reads and returns the module paths value held by the this instance.

```csharp
// Obtain an instance of SteamLauncherModuleExtension from the subsystem API first
SteamLauncherModuleExtension steamLauncherModuleExtension = ...;
var result = steamLauncherModuleExtension.GetModulePaths();
```

### Destroy
`public void Destroy()`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of SteamLauncherModuleExtension from the subsystem API first
SteamLauncherModuleExtension steamLauncherModuleExtension = ...;
steamLauncherModuleExtension.Destroy();
```

### SetLauncherMode
`public void SetLauncherMode(bool isLauncherModeActive)`

**Purpose:** Assigns a new value to launcher mode and updates the object's internal state.

```csharp
// Obtain an instance of SteamLauncherModuleExtension from the subsystem API first
SteamLauncherModuleExtension steamLauncherModuleExtension = ...;
steamLauncherModuleExtension.SetLauncherMode(false);
```

### CheckEntitlement
`public bool CheckEntitlement(string title)`

**Purpose:** Verifies whether entitlement holds true for the this instance.

```csharp
// Obtain an instance of SteamLauncherModuleExtension from the subsystem API first
SteamLauncherModuleExtension steamLauncherModuleExtension = ...;
var result = steamLauncherModuleExtension.CheckEntitlement("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SteamLauncherModuleExtension steamLauncherModuleExtension = ...;
steamLauncherModuleExtension.Initialize(args);
```

## See Also

- [Area Index](../)