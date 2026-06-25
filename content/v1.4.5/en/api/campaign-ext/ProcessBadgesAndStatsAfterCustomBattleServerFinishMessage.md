---
title: "ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage"
description: "Auto-generated class reference for ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage."
---
# ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage

**Namespace:** Messages.FromLobbyServer.ToLobbyServer
**Module:** Messages.FromLobbyServer
**Type:** `public class ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromLobbyServer.ToLobbyServer/ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage.cs`

## Overview

`ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage` lives in `Messages.FromLobbyServer.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BadgeDataEntries` | `public List<BadgeDataEntry> BadgeDataEntries { get; }` |
| `PlayerIds` | `public PlayerId PlayerIds { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage instance = ...;
```

## See Also

- [Area Index](../)