---
title: "ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage

**Namespace:** Messages.FromLobbyServer.ToLobbyServer
**Module:** Messages.FromLobbyServer
**Type:** `public class ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromLobbyServer.ToLobbyServer/ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage.cs`

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
var example = new ProcessBadgesAndStatsAfterCustomBattleServerFinishMessage();
```

## See Also

- [Complete Class Catalog](../catalog)