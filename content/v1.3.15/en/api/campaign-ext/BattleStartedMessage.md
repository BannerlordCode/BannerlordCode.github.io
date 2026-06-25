---
title: "BattleStartedMessage"
description: "Auto-generated class reference for BattleStartedMessage."
---
# BattleStartedMessage

**Namespace:** Messages.FromBattleServer.ToBattleServerManager
**Module:** Messages.FromBattleServer
**Type:** `public class BattleStartedMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromBattleServer/ToBattleServerManager/BattleStartedMessage.cs`

## Overview

`BattleStartedMessage` lives in `Messages.FromBattleServer.ToBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServer.ToBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Report` | `public bool Report { get; }` |
| `PlayerTeams` | `public Dictionary<string, int> PlayerTeams { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BattleStartedMessage instance = ...;
```

## See Also

- [Area Index](../)