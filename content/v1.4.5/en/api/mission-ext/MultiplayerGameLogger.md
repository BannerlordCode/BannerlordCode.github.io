---
title: "MultiplayerGameLogger"
description: "Auto-generated class reference for MultiplayerGameLogger."
---
# MultiplayerGameLogger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameLogger : GameHandler`
**Base:** `GameHandler`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameLogger.cs`

## Overview

`MultiplayerGameLogger` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Log
`public void Log(GameLog log)`

**Purpose:** **Purpose:** Executes the Log logic.

```csharp
// Obtain an instance of MultiplayerGameLogger from the subsystem API first
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.Log(log);
```

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** **Purpose:** Invoked when the before save event is raised.

```csharp
// Obtain an instance of MultiplayerGameLogger from the subsystem API first
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.OnBeforeSave();
```

### OnAfterSave
`public override void OnAfterSave()`

**Purpose:** **Purpose:** Invoked when the after save event is raised.

```csharp
// Obtain an instance of MultiplayerGameLogger from the subsystem API first
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.OnAfterSave();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.Log(log);
```

## See Also

- [Area Index](../)