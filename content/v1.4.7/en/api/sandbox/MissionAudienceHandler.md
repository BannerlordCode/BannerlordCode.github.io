---
title: "MissionAudienceHandler"
description: "MissionAudienceHandler — class in SandBox.View.Missions. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAudienceHandler

**Namespace:** `SandBox.View.Missions`  
**Module:** `SandBox.View`  
**Type:** `public class MissionAudienceHandler : MissionView`  
**Base:** `MissionView`  
**Source:** `SandBox.View/Missions/MissionAudienceHandler.cs`

## Overview

`MissionAudienceHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionAudienceHandler`.
- **Instance members** (6): `EarlyStart`, `OnInit`, `OnAgentRemoved`, `OnMissionTick`, `OnMissionModeChange`, `OnMissionScreenFinalize`.
- **Extension points** (5): `EarlyStart`, `OnAgentRemoved`, `OnMissionTick`, `OnMissionModeChange`, `OnMissionScreenFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionModeChange` | method (override) | Overrides the base member. Takes 2 arguments: `MissionMode oldMissionMode`, `bool atStart`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionAudienceHandler` | ctor | Instance entry point. Takes 1 argument: `float density`. Returns ``. |

- Constructed as `public MissionAudienceHandler(float density)`.

## Usage Example

```csharp
var missionAudienceHandler = new MissionAudienceHandler(density);
missionAudienceHandler.EarlyStart();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Missions/MissionAudienceHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/sandbox/](../) — the other types in this bucket.
