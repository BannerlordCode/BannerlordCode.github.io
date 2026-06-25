---
title: "ModLogger"
description: "Auto-generated class reference for ModLogger."
---
# ModLogger

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal static class ModLogger`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/ModLogger.cs`

## Overview

`ModLogger` lives in `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Log
`public static void Log(string message, int logLevel = 0, DebugColor color = (DebugColor)4)`

**Purpose:** **Purpose:** Executes the Log logic.

```csharp
// Static call; no instance required
ModLogger.Log("example", 0, (DebugColor)4);
```

### Warn
`public static void Warn(string message)`

**Purpose:** **Purpose:** Executes the Warn logic.

```csharp
// Static call; no instance required
ModLogger.Warn("example");
```

## Usage Example

```csharp
ModLogger.Log("example", 0, (DebugColor)4);
```

## See Also

- [Area Index](../)