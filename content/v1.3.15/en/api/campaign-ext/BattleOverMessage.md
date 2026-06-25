---
title: "BattleOverMessage"
description: "Auto-generated class reference for BattleOverMessage."
---
# BattleOverMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class BattleOverMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/BattleOverMessage.cs`

## Overview

`BattleOverMessage` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OldExperience` | `public int OldExperience { get; }` |
| `NewExperience` | `public int NewExperience { get; }` |
| `EarnedBadges` | `public List<string> EarnedBadges { get; }` |
| `GoldGained` | `public int GoldGained { get; }` |
| `OldInfo` | `public RankBarInfo OldInfo { get; }` |
| `NewInfo` | `public RankBarInfo NewInfo { get; }` |
| `BattleCancelReason` | `public BattleCancelReason BattleCancelReason { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BattleOverMessage instance = ...;
```

## See Also

- [Area Index](../)