---
title: "MultiplayerPracticeMissionComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPracticeMissionComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPracticeMissionComponent

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPracticeMissionComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Missions/MultiplayerPracticeMissionComponent.cs`

## Overview

`MultiplayerPracticeMissionComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerPracticeMissionComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerPracticeMissionComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)