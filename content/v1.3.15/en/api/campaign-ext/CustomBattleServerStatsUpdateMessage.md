---
title: "CustomBattleServerStatsUpdateMessage"
description: "Auto-generated class reference for CustomBattleServerStatsUpdateMessage."
---
# CustomBattleServerStatsUpdateMessage

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class CustomBattleServerStatsUpdateMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromCustomBattleServer/ToCustomBattleServerManager/CustomBattleServerStatsUpdateMessage.cs`

## Overview

`CustomBattleServerStatsUpdateMessage` lives in `Messages.FromCustomBattleServer.ToCustomBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServer.ToCustomBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public BattleResult BattleResult { get; set; }` |
| `TeamScores` | `public Dictionary<int, int> TeamScores { get; set; }` |
| `PlayerScores` | `public Dictionary<string, int> PlayerScores { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CustomBattleServerStatsUpdateMessage instance = ...;
```

## See Also

- [Area Index](../)