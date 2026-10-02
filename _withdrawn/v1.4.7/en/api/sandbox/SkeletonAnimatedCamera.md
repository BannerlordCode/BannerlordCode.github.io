---
title: "SkeletonAnimatedCamera"
description: "SkeletonAnimatedCamera — class in SandBox.Objects.Cinematics. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# SkeletonAnimatedCamera

**Namespace:** `SandBox.Objects.Cinematics`  
**Module:** `SandBox`  
**Type:** `public class SkeletonAnimatedCamera : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs`

## Overview

`SkeletonAnimatedCamera` is a named type in the SandBox.Objects.Cinematics namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (8): `OnInit`, `OnEditorInit`, `OnTick`, `OnEditorTick`, `OnEditorVariableChanged`, `SkeletonName`, ….
- **Extension points** (5): `OnInit`, `OnEditorInit`, `OnTick`, `OnEditorTick`, `OnEditorVariableChanged`.
- **Data and constants** (2): `BoneIndex`, `Restart`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnEditorInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AnimationName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `AttachmentOffset` | property | Instance entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `SkeletonName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `BoneIndex` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Restart` | field | Instance entry point `SimpleButton` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// SkeletonAnimatedCamera is read through its properties:
//   SkeletonName : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AnimationPoint](../AnimationPoint/) — `SandBox.Objects.AnimationPoints`.

Section: [api/sandbox/](../) — the other types in this bucket.
