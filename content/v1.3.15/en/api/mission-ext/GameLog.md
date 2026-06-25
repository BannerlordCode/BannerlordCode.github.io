---
title: "GameLog"
description: "Auto-generated class reference for GameLog."
---
# GameLog

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameLog`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/GameLog.cs`

## Overview

`GameLog` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Type` | `public GameLogType Type { get; set; }` |
| `Player` | `public PlayerId Player { get; set; }` |
| `GameTime` | `public float GameTime { get; set; }` |
| `Data` | `public Dictionary<string, string> Data { get; set; }` |

## Key Methods

### GetDataAsString
`public string GetDataAsString()`

**Purpose:** **Purpose:** Reads and returns the data as string value held by the this instance.

```csharp
// Obtain an instance of GameLog from the subsystem API first
GameLog gameLog = ...;
var result = gameLog.GetDataAsString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameLog gameLog = ...;
gameLog.GetDataAsString();
```

## See Also

- [Area Index](../)