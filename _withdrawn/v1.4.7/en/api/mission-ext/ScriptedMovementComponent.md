---
title: "ScriptedMovementComponent"
description: "ScriptedMovementComponent — class in TaleWorlds.MountAndBlade.AI.AgentComponents. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# ScriptedMovementComponent

**Namespace:** `TaleWorlds.MountAndBlade.AI.AgentComponents`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class ScriptedMovementComponent : AgentComponent`  
**Base:** `AgentComponent`  
**Source:** `TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs`

## Overview

`ScriptedMovementComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends AgentComponent, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ScriptedMovementComponent`.
- **Instance members** (4): `SetTargetAgent`, `OnTick`, `ShouldConversationStartWithAgent`, `Reset`.
- **Extension points** (1): `OnTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `SetTargetAgent` | method | Instance entry point. Takes 1 argument: `Agent targetAgent`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ShouldConversationStartWithAgent` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ScriptedMovementComponent` | ctor | Instance entry point. Takes 3 arguments: `Agent agent`, `bool isCharacterToTalkTo`, `float dialogueProximityOffset`. Returns ``. |

- Constructed as `public ScriptedMovementComponent(Agent agent, bool isCharacterToTalkTo = false, float dialogueProximityOffset = 0f)`.

## Usage Example

```csharp
var scriptedMovementComponent = new ScriptedMovementComponent(agent, isCharacterToTalkTo, dialogueProximityOffset);
scriptedMovementComponent.SetTargetAgent(targetAgent);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/AI/AgentComponents/ScriptedMovementComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
