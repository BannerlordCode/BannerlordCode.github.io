---
title: "ChangeLightIntensityScript"
description: "ChangeLightIntensityScript — class in SandBox.Missions. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# ChangeLightIntensityScript

**Namespace:** `SandBox.Missions`  
**Module:** `SandBox`  
**Type:** `public class ChangeLightIntensityScript : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `SandBox/Missions/ChangeLightIntensityScript.cs`

## Overview

`ChangeLightIntensityScript` is a named type in the SandBox.Missions namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `GetTickRequirement`, `OnTick`, `OnEditorTick`, `OnEditorVariableChanged`.
- **Extension points** (4): `GetTickRequirement`, `OnTick`, `OnEditorTick`, `OnEditorVariableChanged`.
- **Data and constants** (2): `Preview`, `Reset`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTickRequirement` | method (override) | Overrides the base member. Takes no arguments. Returns `ScriptComponentBehavior.TickRequirement`. Read path: prefer it over reaching for the backing store. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Preview` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |
| `Reset` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// ChangeLightIntensityScript exposes no public members in SandBox.Missions.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/ChangeLightIntensityScript.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
