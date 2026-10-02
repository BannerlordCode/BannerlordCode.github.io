---
title: "MissionAgentStatusUIHandler"
description: "MissionAgentStatusUIHandler — class in TaleWorlds.MountAndBlade.View.MissionViews. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionAgentStatusUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`  
**Base:** `MissionBattleUIBaseView, IInteractionInterfaceHandler`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs`

## Overview

`MissionAgentStatusUIHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionBattleUIBaseView, IInteractionInterfaceHandler, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Instance members** (7): `AddInteractionMessage`, `RemoveInteractionMessage`, `HasInteractionMessage`, `OnCreateView`, `OnDestroyView`, `OnSuspendView`, ….
- **Extension points** (7): `AddInteractionMessage`, `RemoveInteractionMessage`, `HasInteractionMessage`, `OnCreateView`, `OnDestroyView`, `OnSuspendView`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddInteractionMessage` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MissionInteractionItemBaseVM message`. Adds to the collection or relation this type owns. |
| `HasInteractionMessage` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MissionInteractionItemBaseVM message`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `RemoveInteractionMessage` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MissionInteractionItemBaseVM message`. Removes from or clears the collection this type owns. |
| `OnCreateView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDestroyView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// MissionAgentStatusUIHandler exposes no public members in TaleWorlds.MountAndBlade.View.MissionViews.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBattleUIBaseView](../MissionBattleUIBaseView/) — `TaleWorlds.MountAndBlade.View.MissionViews`.
- [IInteractionInterfaceHandler](../../viewmodel/IInteractionInterfaceHandler/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction`.
- [MissionInteractionItemBaseVM](../../viewmodel/MissionInteractionItemBaseVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems`.

Section: [api/mission-ext/](../) — the other types in this bucket.
