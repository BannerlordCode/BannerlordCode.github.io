---
title: "MissionTrainingFieldObjectiveView"
description: "MissionTrainingFieldObjectiveView — class in StoryMode.View.Missions. No public members of its own."
---

<!-- v147-skeleton -->
# MissionTrainingFieldObjectiveView

**Namespace:** `StoryMode.View.Missions`  
**Module:** `StoryMode.View`  
**Type:** `public class MissionTrainingFieldObjectiveView : MissionView`  
**Base:** `MissionView`  
**Source:** `StoryMode.View/Missions/MissionTrainingFieldObjectiveView.cs`

## Overview

`MissionTrainingFieldObjectiveView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on MissionTrainingFieldObjectiveView itself in `StoryMode.View.Missions`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView.
// No public constructor: the widget factory in the owning layer creates it.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `StoryMode.View/Missions/MissionTrainingFieldObjectiveView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/storymode/](../) — the other types in this bucket.
