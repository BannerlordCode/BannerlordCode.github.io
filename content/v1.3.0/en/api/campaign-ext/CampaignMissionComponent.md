---
title: "CampaignMissionComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignMissionComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignMissionComponent

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CampaignMissionComponent.cs`

## Overview

`CampaignMissionComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CampaignMissionComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public GameState State { get; set; }` |
| `AgentSupplier` | `public IMissionTroopSupplier AgentSupplier { get; set; }` |
| `Location` | `public Location Location { get; set; }` |
| `LastVisitedAlley` | `public Alley LastVisitedAlley { get; set; }` |
| `Agent` | `public Agent Agent { get; }` |

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** Called when the `agent created` event is raised.

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Called when the `pre display mission tick` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Called when the `mission result ready` event is raised.

### PlayConversationSoundEvent
`public void PlayConversationSoundEvent(string soundPath)`

**Purpose:** Handles logic related to `play conversation sound event`.

### FadeOutCharacter
`public void FadeOutCharacter(CharacterObject characterObject)`

**Purpose:** Handles logic related to `fade out character`.

### IsChannelModified
`public bool IsChannelModified(int channelNo)`

**Purpose:** Handles logic related to `is channel modified`.

### SetChannelModified
`public void SetChannelModified(int channelNo)`

**Purpose:** Sets the value or state of `channel modified`.

## Usage Example

```csharp
var component = agent.GetComponent<CampaignMissionComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)