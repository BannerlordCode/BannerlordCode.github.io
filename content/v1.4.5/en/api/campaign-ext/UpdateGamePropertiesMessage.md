---
title: "UpdateGamePropertiesMessage"
description: "Auto-generated class reference for UpdateGamePropertiesMessage."
---
# UpdateGamePropertiesMessage

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class UpdateGamePropertiesMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromCustomBattleServer.ToCustomBattleServerManager/UpdateGamePropertiesMessage.cs`

## Overview

`UpdateGamePropertiesMessage` lives in `Messages.FromCustomBattleServer.ToCustomBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServer.ToCustomBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public string GameType { get; }` |
| `Scene` | `public string Scene { get; }` |
| `UniqueSceneId` | `public string UniqueSceneId { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
UpdateGamePropertiesMessage instance = ...;
```

## See Also

- [Area Index](../)