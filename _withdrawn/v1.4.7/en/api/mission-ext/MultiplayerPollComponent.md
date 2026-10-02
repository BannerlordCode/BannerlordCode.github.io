---
title: "MultiplayerPollComponent"
description: "MultiplayerPollComponent — class in TaleWorlds.MountAndBlade. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# MultiplayerPollComponent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MultiplayerPollComponent : MissionNetwork`  
**Base:** `MissionNetwork`  
**Source:** `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`

## Overview

`MultiplayerPollComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends MissionNetwork, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Instance members** (5): `OnBehaviorInitialize`, `OnMissionTick`, `Vote`, `RequestKickPlayerPoll`, `AddRemoveMessageHandlers`.
- **Extension points** (3): `OnBehaviorInitialize`, `OnMissionTick`, `AddRemoveMessageHandlers`.
- **Data and constants** (4): `MinimumParticipantCountRequired`, `OnPollRejected`, `OnPollClosed`, `OnPollCancelled`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddRemoveMessageHandlers` | method (override) | Overrides the base member. Takes 1 argument: `GameNetwork.NetworkMessageHandlerRegistererContainer registerer`. Adds to the collection or relation this type owns. |
| `RequestKickPlayerPoll` | method | Instance entry point. Takes 2 arguments: `NetworkCommunicator peer`, `bool banPlayer`. |
| `Vote` | method | Instance entry point. Takes 1 argument: `bool accepted`. |
| `MinimumParticipantCountRequired` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `OnPollCancelled` | field | Instance entry point `Action` field — direct storage with no validation or notification. |
| `OnPollClosed` | field | Instance entry point `Action` field — direct storage with no validation or notification. |
| `OnPollRejected` | field | Instance entry point `Action<MultiplayerPollRejectReason>` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// MultiplayerPollComponent exposes no public members in TaleWorlds.MountAndBlade.
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [GameNetworkMessage](../GameNetworkMessage/) — `TaleWorlds.MountAndBlade.Network.Messages`.

Section: [api/mission-ext/](../) — the other types in this bucket.
