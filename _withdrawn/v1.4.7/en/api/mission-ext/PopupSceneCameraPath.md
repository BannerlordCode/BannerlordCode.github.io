---
title: "PopupSceneCameraPath"
description: "PopupSceneCameraPath — class in TaleWorlds.MountAndBlade.View.Scripts. 43 public members (0 static)."
---

<!-- v147-skeleton -->
# PopupSceneCameraPath

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class PopupSceneCameraPath : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs`

## Overview

`PopupSceneCameraPath` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScriptComponentBehavior, so the members it does not redeclare are inherited from there. 17 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (30): `OnInit`, `OnEditorInit`, `Initialize`, `SetInitialState`, `SetPositiveState`, `SetNegativeState`, ….
- **Extension points** (6): `OnInit`, `OnEditorInit`, `GetTickRequirement`, `OnTick`, `OnEditorTick`, `OnEditorVariableChanged`.
- **Data and constants** (13): `BoneIndex`, `InitialPathStartTime`, `InitialInterpolation`, `InitialFadeOut`, `PositivePathStartTime`, `PositiveInterpolation`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTickRequirement` | method (override) | Overrides the base member. Takes no arguments. Returns `ScriptComponentBehavior.TickRequirement`. Read path: prefer it over reaching for the backing store. |
| `OnEditorInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AttachmentOffset` | property | Instance entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `Destroy` | method | Instance entry point. Takes no arguments. |
| `GetCameraFade` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `InitialAnimationClip` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Initialize` | method | Instance entry point. Takes no arguments. |
| `InitialPath` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `InitialPathDuration` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `InitialSound` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `InterpolationType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `LookAtEntity` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeAnimationClip` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NegativePath` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NegativePathDuration` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeSound` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PathAnimationState` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `PositiveAnimationClip` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PositivePath` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PositivePathDuration` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |

19 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScriptComponentBehavior.

// Lifecycle hooks this type declares:
//   protected override void OnInit()
//   protected override void OnEditorInit()
//   public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
//   protected override void OnTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
