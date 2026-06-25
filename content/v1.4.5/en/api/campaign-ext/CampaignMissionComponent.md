---
title: "CampaignMissionComponent"
description: "Auto-generated class reference for CampaignMissionComponent."
---
# CampaignMissionComponent

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignMissionComponent.cs`

## Overview

`CampaignMissionComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CampaignMissionComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Agent` | `public Agent Agent { get; }` |
| `AgentSupplier` | `public IMissionTroopSupplier AgentSupplier { get; set; }` |
| `Location` | `public Location Location { get; set; }` |
| `LastVisitedAlley` | `public Alley LastVisitedAlley { get; set; }` |

## Key Methods

### IsChannelModified
`public bool IsChannelModified(int channelNo)`

**Purpose:** **Purpose:** Determines whether the this instance is in the channel modified state or condition.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
var result = campaignMissionComponent.IsChannelModified(0);
```

### SetChannelModified
`public void SetChannelModified(int channelNo)`

**Purpose:** **Purpose:** Assigns a new value to channel modified and updates the object's internal state.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.SetChannelModified(0);
```

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnAgentCreated(agent);
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the pre display mission tick event is raised.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnPreDisplayMissionTick(0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnMissionTick(0);
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.EarlyStart();
```

### OnCreated
`public override void OnCreated()`

**Purpose:** **Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.AfterStart();
```

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** **Purpose:** Invoked when the mission result ready event is raised.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnMissionResultReady(missionResult);
```

### PlayConversationSoundEvent
`public void PlayConversationSoundEvent(string soundPath)`

**Purpose:** **Purpose:** Executes the PlayConversationSoundEvent logic.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.PlayConversationSoundEvent("example");
```

### FadeOutCharacter
`public void FadeOutCharacter(CharacterObject characterObject)`

**Purpose:** **Purpose:** Executes the FadeOutCharacter logic.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.FadeOutCharacter(characterObject);
```

### OnGameStateChanged
`public void OnGameStateChanged()`

**Purpose:** **Purpose:** Invoked when the game state changed event is raised.

```csharp
// Obtain an instance of CampaignMissionComponent from the subsystem API first
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnGameStateChanged();
```

## Usage Example

```csharp
var component = agent.GetComponent<CampaignMissionComponent>();
```

## See Also

- [Area Index](../)