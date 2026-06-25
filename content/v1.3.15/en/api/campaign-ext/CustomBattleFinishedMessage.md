---
title: "CustomBattleFinishedMessage"
description: "Auto-generated class reference for CustomBattleFinishedMessage."
---
# CustomBattleFinishedMessage

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class CustomBattleFinishedMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromCustomBattleServer/ToCustomBattleServerManager/CustomBattleFinishedMessage.cs`

## Overview

`CustomBattleFinishedMessage` lives in `Messages.FromCustomBattleServer.ToCustomBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServer.ToCustomBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public BattleResult BattleResult { get; }` |
| `TeamScores` | `public Dictionary<int, int> TeamScores { get; }` |
| `PlayerScores` | `public Dictionary<string, int> PlayerScores { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CustomBattleFinishedMessage instance = ...;
```

## See Also

- [Area Index](../)