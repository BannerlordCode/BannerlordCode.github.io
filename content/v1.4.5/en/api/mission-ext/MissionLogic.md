---
title: "MissionLogic"
description: "Auto-generated class reference for MissionLogic."
---
# MissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLogic : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionLogic.cs`

## Overview

`MissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnEndMissionRequest
`public virtual InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
var result = missionLogic.OnEndMissionRequest(canLeave);
```

### MissionEnded
`public virtual bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
var result = missionLogic.MissionEnded(missionResult);
```

### OnBattleEnded
`public virtual void OnBattleEnded()`

**Purpose:** Invoked when the battle ended event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnBattleEnded();
```

### ShowBattleResults
`public virtual void ShowBattleResults()`

**Purpose:** Displays the UI or element associated with battle results.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.ShowBattleResults();
```

### OnRetreatMission
`public virtual void OnRetreatMission()`

**Purpose:** Invoked when the retreat mission event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnRetreatMission();
```

### OnSurrenderMission
`public virtual void OnSurrenderMission()`

**Purpose:** Invoked when the surrender mission event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnSurrenderMission();
```

### OnAutoDeployTeam
`public virtual void OnAutoDeployTeam(Team team)`

**Purpose:** Invoked when the auto deploy team event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnAutoDeployTeam(team);
```

### GetExtraEquipmentElementsForCharacter
`public virtual List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**Purpose:** Reads and returns the extra equipment elements for character value held by the this instance.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
var result = missionLogic.GetExtraEquipmentElementsForCharacter(character, false);
```

### OnMissionResultReady
`public virtual void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Invoked when the mission result ready event is raised.

```csharp
// Obtain an instance of MissionLogic from the subsystem API first
MissionLogic missionLogic = ...;
missionLogic.OnMissionResultReady(missionResult);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionLogic instance = ...;
```

## See Also

- [Area Index](../)