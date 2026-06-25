---
title: "RegisterCustomGameMessage"
description: "Auto-generated class reference for RegisterCustomGameMessage."
---
# RegisterCustomGameMessage

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class RegisterCustomGameMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromCustomBattleServer/ToCustomBattleServerManager/RegisterCustomGameMessage.cs`

## Overview

`RegisterCustomGameMessage` lives in `Messages.FromCustomBattleServer.ToCustomBattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServer.ToCustomBattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameDefinitionId` | `public int GameDefinitionId { get; }` |
| `GameModule` | `public string GameModule { get; }` |
| `GameType` | `public string GameType { get; }` |
| `ServerName` | `public string ServerName { get; }` |
| `ServerAddress` | `public string ServerAddress { get; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; }` |
| `Map` | `public string Map { get; }` |
| `UniqueMapId` | `public string UniqueMapId { get; }` |
| `GamePassword` | `public string GamePassword { get; }` |
| `AdminPassword` | `public string AdminPassword { get; }` |
| `Port` | `public int Port { get; }` |
| `Region` | `public string Region { get; }` |
| `Permission` | `public int Permission { get; }` |
| `IsOverridingIP` | `public bool IsOverridingIP { get; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
RegisterCustomGameMessage instance = ...;
```

## See Also

- [Area Index](../)