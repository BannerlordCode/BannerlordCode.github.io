---
title: "MissionAgentLookHandler"
description: "MissionAgentLookHandler — class in SandBox.Missions.MissionLogics. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAgentLookHandler

**Namespace:** `SandBox.Missions.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class MissionAgentLookHandler : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs`

## Overview

`MissionAgentLookHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionAgentLookHandler`.
- **Instance members** (4): `AfterStart`, `OnMissionTick`, `OnAgentBuild`, `OnAgentRemoved`.
- **Extension points** (4): `AfterStart`, `OnMissionTick`, `OnAgentBuild`, `OnAgentRemoved`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentBuild` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Banner banner`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionAgentLookHandler` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionAgentLookHandler()`.

## Usage Example

```csharp
var missionAgentLookHandler = new MissionAgentLookHandler();
missionAgentLookHandler.AfterStart();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConversationMission](../ConversationMission/) — `SandBox.Conversation`.

Section: [api/sandbox/](../) — the other types in this bucket.
