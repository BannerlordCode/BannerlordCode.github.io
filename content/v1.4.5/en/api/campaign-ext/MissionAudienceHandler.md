---
title: "MissionAudienceHandler"
description: "Auto-generated class reference for MissionAudienceHandler."
---
# MissionAudienceHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionAudienceHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionAudienceHandler.cs`

## Overview

`MissionAudienceHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAudienceHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionAudienceHandler from the subsystem API first
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.EarlyStart();
```

### OnInit
`public void OnInit()`

**Purpose:** Invoked when the init event is raised.

```csharp
// Obtain an instance of MissionAudienceHandler from the subsystem API first
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnInit();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionAudienceHandler from the subsystem API first
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionAudienceHandler from the subsystem API first
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnMissionTick(0);
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Invoked when the mission mode change event is raised.

```csharp
// Obtain an instance of MissionAudienceHandler from the subsystem API first
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnMissionModeChange(oldMissionMode, false);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionAudienceHandler from the subsystem API first
MissionAudienceHandler missionAudienceHandler = ...;
missionAudienceHandler.OnMissionScreenFinalize();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAudienceHandler>();
```

## See Also

- [Area Index](../)