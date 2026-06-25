---
title: "MissionAlleyHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAlleyHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAlleyHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAlleyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAlleyHandler.cs`

## Overview

`MissionAlleyHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAlleyHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanThugConversationBeTriggered` | `public bool CanThugConversationBeTriggered { get; }` |

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

### StartCommonAreaBattle
`public void StartCommonAreaBattle(Alley alley)`

**Purpose:** Handles logic related to `start common area battle`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionAlleyHandler());
```

## See Also

- [Complete Class Catalog](../catalog)