---
title: "SearchBodyMissionHandler"
description: "Auto-generated class reference for SearchBodyMissionHandler."
---
# SearchBodyMissionHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SearchBodyMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SearchBodyMissionHandler.cs`

## Overview

`SearchBodyMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SearchBodyMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of SearchBodyMissionHandler from the subsystem API first
SearchBodyMissionHandler searchBodyMissionHandler = ...;
searchBodyMissionHandler.OnAgentInteraction(userAgent, agent, 0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of SearchBodyMissionHandler from the subsystem API first
SearchBodyMissionHandler searchBodyMissionHandler = ...;
var result = searchBodyMissionHandler.IsThereAgentAction(userAgent, otherAgent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SearchBodyMissionHandler>();
```

## See Also

- [Area Index](../)