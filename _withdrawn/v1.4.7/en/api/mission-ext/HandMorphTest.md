---
title: "HandMorphTest"
description: "HandMorphTest — class in TaleWorlds.MountAndBlade.View.Scripts. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# HandMorphTest

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class HandMorphTest : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs`

## Overview

`HandMorphTest` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (9): `ClothColor1`, `ClothColor2`, `OnInit`, `OnEditorInit`, `OnEditorTick`, `SpawnCharacter`, ….
- **Extension points** (4): `OnInit`, `OnEditorInit`, `OnEditorTick`, `OnRemoved`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnEditorInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRemoved` | method (override) | Overrides the base member. Takes 1 argument: `int removeReason`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ClothColor1` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `ClothColor2` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `InitWithCharacter` | method | Instance entry point. Takes 1 argument: `CharacterCode characterCode`. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `SpawnCharacter` | method | Instance entry point. Takes no arguments. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScriptComponentBehavior.

// Lifecycle hooks this type declares:
//   protected override void OnInit()
//   protected override void OnEditorInit()
//   protected override void OnEditorTick(float dt)
//   protected override void OnRemoved(int removeReason)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/HandMorphTest.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/mission-ext/](../) — the other types in this bucket.
