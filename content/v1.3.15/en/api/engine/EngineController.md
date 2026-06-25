---
title: "EngineController"
description: "Auto-generated class reference for EngineController."
---
# EngineController

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineController`
**Base:** none
**File:** `TaleWorlds.Engine/EngineController.cs`

## Overview

`EngineController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `EngineController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetVersionStr
`public static string GetVersionStr()`

**Purpose:** Reads and returns the `version str` value held by the current object.

```csharp
// Static call; no instance required
EngineController.GetVersionStr();
```

### GetApplicationPlatformName
`public static string GetApplicationPlatformName()`

**Purpose:** Reads and returns the `application platform name` value held by the current object.

```csharp
// Static call; no instance required
EngineController.GetApplicationPlatformName();
```

### GetModulesVersionStr
`public static string GetModulesVersionStr()`

**Purpose:** Reads and returns the `modules version str` value held by the current object.

```csharp
// Static call; no instance required
EngineController.GetModulesVersionStr();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<EngineController>();
```

## See Also

- [Area Index](../)