---
title: "MissionRecentPlayersComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionRecentPlayersComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionRecentPlayersComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRecentPlayersComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MissionRecentPlayersComponent.cs`

## Overview

`MissionRecentPlayersComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionRecentPlayersComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<MissionRecentPlayersComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)