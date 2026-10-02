---
title: "PassageAI"
description: "PassageAI — class in SandBox.AI. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# PassageAI

**Namespace:** `SandBox.AI`  
**Module:** `SandBox`  
**Type:** `public class PassageAI : UsableMachineAIBase`  
**Base:** `UsableMachineAIBase`  
**Source:** `SandBox/AI/PassageAI.cs`

## Overview

`PassageAI` is a named type in the SandBox.AI namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsableMachineAIBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PassageAI`.
- **Instance members** (2): `GetScriptedFrameFlags`, `OnTick`.
- **Extension points** (2): `GetScriptedFrameFlags`, `OnTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetScriptedFrameFlags` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `Agent.AIScriptedFrameFlags`. Read path: prefer it over reaching for the backing store. |
| `OnTick` | method (override) | Overrides the base member. Takes 4 arguments: `Agent agentToCompareTo`, `Formation formationToCompareTo`, `Team potentialUsersTeam`, `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PassageAI` | ctor | Instance entry point. Takes 1 argument: `UsableMachine usableMachine`. Returns ``. |

- Constructed as `public PassageAI(UsableMachine usableMachine)`.

## Usage Example

```csharp
var passageAI = new PassageAI(usableMachine);
passageAI.GetScriptedFrameFlags(agent);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/AI/PassageAI.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
