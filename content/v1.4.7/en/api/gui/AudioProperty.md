---
title: "AudioProperty"
description: "AudioProperty — class in TaleWorlds.GauntletUI. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# AudioProperty

**Namespace:** `TaleWorlds.GauntletUI`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class AudioProperty`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AudioProperty.cs`

## Overview

`AudioProperty` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (1): `FillFrom`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `FillFrom` | method | Instance entry point. Takes 1 argument: `AudioProperty audioProperty`. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// No public constructor: the widget factory in the owning layer creates it.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AudioProperty.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
