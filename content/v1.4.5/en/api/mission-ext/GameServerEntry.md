---
title: "GameServerEntry"
description: "Auto-generated class reference for GameServerEntry."
---
# GameServerEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameServerEntry`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/GameServerEntry.cs`

## Overview

`GameServerEntry` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public CustomBattleId Id { get; }` |
| `Address` | `public string Address { get; }` |
| `Port` | `public int Port { get; }` |
| `Region` | `public string Region { get; }` |
| `PlayerCount` | `public int PlayerCount { get; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; }` |
| `ServerName` | `public string ServerName { get; }` |
| `GameModule` | `public string GameModule { get; }` |
| `GameType` | `public string GameType { get; }` |
| `Map` | `public string Map { get; }` |
| `UniqueMapId` | `public string UniqueMapId { get; }` |
| `Ping` | `public int Ping { get; }` |
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `ByOfficialProvider` | `public bool ByOfficialProvider { get; }` |
| `PasswordProtected` | `public bool PasswordProtected { get; }` |
| `Permission` | `public int Permission { get; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; }` |
| `HostId` | `public PlayerId HostId { get; }` |
| `HostName` | `public string HostName { get; }` |
| `LoadedModules` | `public List<ModuleInfoModel> LoadedModules { get; }` |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules { get; }` |

## Key Methods

### FilterGameServerEntriesBasedOnCrossplay
`public static void FilterGameServerEntriesBasedOnCrossplay(ref List<GameServerEntry> serverList, bool hasCrossplayPrivilege)`

**Purpose:** Executes the FilterGameServerEntriesBasedOnCrossplay logic.

```csharp
// Static call; no instance required
GameServerEntry.FilterGameServerEntriesBasedOnCrossplay(serverList, false);
```

## Usage Example

```csharp
GameServerEntry.FilterGameServerEntriesBasedOnCrossplay(serverList, false);
```

## See Also

- [Area Index](../)