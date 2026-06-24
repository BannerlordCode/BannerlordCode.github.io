<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionNetworkHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `agent from index`.

### GetMBTeamFromTeamIndex
`public static MBTeam GetMBTeamFromTeamIndex(int teamIndex)`

**Purpose:** Gets the current value of `m b team from team index`.

### GetTeamFromTeamIndex
`public static Team GetTeamFromTeamIndex(int teamIndex)`

**Purpose:** Gets the current value of `team from team index`.

### GetMissionObjectFromMissionObjectId
`public static MissionObject GetMissionObjectFromMissionObjectId(MissionObjectId missionObjectId)`

**Purpose:** Gets the current value of `mission object from mission object id`.

### GetCombatLogDataForCombatLogNetworkMessage
`public static CombatLogData GetCombatLogDataForCombatLogNetworkMessage(CombatLogNetworkMessage message)`

**Purpose:** Gets the current value of `combat log data for combat log network message`.

## Usage Example

```csharp
MissionNetworkHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)