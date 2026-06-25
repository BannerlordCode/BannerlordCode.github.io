---
title: "PlayerFledBattleMessage"
description: "Auto-generated class reference for PlayerFledBattleMessage."
---
# PlayerFledBattleMessage

**Namespace:** Messages.FromBattleServerManager.ToBattleServer
**Module:** Messages.FromBattleServerManager
**Type:** `public class PlayerFledBattleMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromBattleServerManager.ToBattleServer/PlayerFledBattleMessage.cs`

## Overview

`PlayerFledBattleMessage` lives in `Messages.FromBattleServerManager.ToBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromBattleServerManager.ToBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PlayerFledBattleMessage instance = ...;
```

## See Also

- [Area Index](../)