---
title: "StealthTutorialView"
description: "StealthTutorialView — class in StoryMode.View.Missions. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# StealthTutorialView

**Namespace:** `StoryMode.View.Missions`  
**Module:** `StoryMode.View`  
**Type:** `public class StealthTutorialView : MissionView`  
**Base:** `MissionView`  
**Source:** `StoryMode.View/Missions/StealthTutorialView.cs`

## Overview

`StealthTutorialView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (2): `AfterStart`, `OnEndMission`.
- **Extension points** (2): `AfterStart`, `OnEndMission`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView.

// Lifecycle hooks this type declares:
//   public override void AfterStart()
//   protected override void OnEndMission()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode.View/Missions/StealthTutorialView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerFactory](../../sandbox/MissionNameMarkerFactory/) — `SandBox.ViewModelCollection.Missions.NameMarker`.
- [StealthTutorialMarkerProvider](../StealthTutorialMarkerProvider/) — `StoryMode.View.MarkerProviders`.

Section: [api/storymode/](../) — the other types in this bucket.
