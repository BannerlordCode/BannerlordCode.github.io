---
title: "MissionBattleUIBaseView"
description: "MissionBattleUIBaseView — class in TaleWorlds.MountAndBlade.View.MissionViews. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionBattleUIBaseView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public abstract class MissionBattleUIBaseView : MissionView`  
**Base:** `MissionView`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs`

## Overview

`MissionBattleUIBaseView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (8): `IsViewCreated`, `OnCreateView`, `OnDestroyView`, `OnSuspendView`, `OnResumeView`, `OnMissionScreenInitialize`, ….
- **Extension points** (7): `OnCreateView`, `OnDestroyView`, `OnSuspendView`, `OnResumeView`, `OnMissionScreenInitialize`, `OnMissionScreenTick`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsViewCreated` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnCreateView` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDestroyView` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView.

// Lifecycle hooks this type declares:
//   protected abstract void OnCreateView()
//   protected abstract void OnDestroyView()
//   protected abstract override void OnSuspendView()
//   protected abstract override void OnResumeView()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.

Section: [api/mission-ext/](../) — the other types in this bucket.
