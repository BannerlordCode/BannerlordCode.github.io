---
title: "DefaultMissionNameMarkerHandler"
description: "DefaultMissionNameMarkerHandler — class in SandBox.View.Missions.NameMarkers. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultMissionNameMarkerHandler

**Namespace:** `SandBox.View.Missions.NameMarkers`  
**Module:** `SandBox.View`  
**Type:** `public class DefaultMissionNameMarkerHandler : MissionNameMarkerProvider`  
**Base:** `MissionNameMarkerProvider`  
**Source:** `SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs`

## Overview

`DefaultMissionNameMarkerHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionNameMarkerProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Instance members** (4): `OnInitialize`, `OnDestroy`, `OnTick`, `CreateMarkers`.
- **Extension points** (4): `OnInitialize`, `OnDestroy`, `OnTick`, `CreateMarkers`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateMarkers` | method (override) | Overrides the base member. Takes 1 argument: `List<MissionNameMarkerTargetBaseVM> markers`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `OnDestroy` | method (override) | Overrides the base member. Takes 1 argument: `Mission mission`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes 1 argument: `Mission mission`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// DefaultMissionNameMarkerHandler exposes no public members in SandBox.View.Missions.NameMarkers.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Missions/NameMarkers/DefaultMissionNameMarkerHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerProvider](../MissionNameMarkerProvider/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [DisguiseMissionLogic](../DisguiseMissionLogic/) — `SandBox.Missions.MissionLogics`.
- [MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [MissionAgentMarkerTargetVM](../MissionAgentMarkerTargetVM/) — `SandBox.ViewModelCollection.Missions.NameMarker.Targets`.
- [CommonAreaMarker](../CommonAreaMarker/) — `SandBox.Objects.AreaMarkers`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MissionCommonAreaMarkerTargetVM](../MissionCommonAreaMarkerTargetVM/) — `SandBox.ViewModelCollection.Missions.NameMarker.Targets`.
- [MissionPassageUsePointNameMarkerTargetVM](../MissionPassageUsePointNameMarkerTargetVM/) — `SandBox.ViewModelCollection.Missions.NameMarker.Targets`.
- [BasicAreaIndicator](../BasicAreaIndicator/) — `SandBox.Objects.AreaMarkers`.
- [MissionBasicAreaIndicatorMarkerTargetVM](../MissionBasicAreaIndicatorMarkerTargetVM/) — `SandBox.ViewModelCollection.Missions.NameMarker.Targets`.

Section: [api/sandbox/](../) — the other types in this bucket.
