---
title: "MissionNetworkHelper"
description: "Auto-generated class reference for MissionNetworkHelper."
---
# MissionNetworkHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MissionNetworkHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`MissionNetworkHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `MissionNetworkHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentFromIndex
`public static Agent GetAgentFromIndex(int agentIndex, bool canBeNull = false)`

**Purpose:** Reads and returns the `agent from index` value held by the current object.

```csharp
// Static call; no instance required
MissionNetworkHelper.GetAgentFromIndex(0, false);
```

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**Purpose:** Reads and returns the `m b team from team index` value held by the current object.

```csharp
// Static call; no instance required
MissionNetworkHelper.GetMBTeamFromTeamIndex(0);
```

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**Purpose:** Reads and returns the `team from team index` value held by the current object.

```csharp
// Static call; no instance required
MissionNetworkHelper.GetTeamFromTeamIndex(0);
```

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**Purpose:** Reads and returns the `mission object from mission object id` value held by the current object.

```csharp
// Static call; no instance required
MissionNetworkHelper.GetMissionObjectFromMissionObjectId(missionObjectId);
```

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**Purpose:** Reads and returns the `combat log data for combat log network message` value held by the current object.

```csharp
// Static call; no instance required
MissionNetworkHelper.GetCombatLogDataForCombatLogNetworkMessage(message);
```

## Usage Example

```csharp
MissionNetworkHelper.Initialize();
```

## See Also

- [Area Index](../)