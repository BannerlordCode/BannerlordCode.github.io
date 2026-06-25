---
title: "BattleCancelledDueToPlayerQuitMessage"
description: "Auto-generated class reference for BattleCancelledDueToPlayerQuitMessage."
---
# BattleCancelledDueToPlayerQuitMessage

**Namespace:** Messages.FromBattleServer.ToBattleServerManager
**Module:** Messages.FromBattleServer
**Type:** `public class BattleCancelledDueToPlayerQuitMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServer.ToBattleServerManager/BattleCancelledDueToPlayerQuitMessage.cs`

## Overview

`BattleCancelledDueToPlayerQuitMessage` lives in `Messages.FromBattleServer.ToBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServer.ToBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `GameType` | `public string GameType { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BattleCancelledDueToPlayerQuitMessage instance = ...;
```

## See Also

- [Area Index](../)