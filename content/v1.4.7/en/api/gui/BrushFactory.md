---
title: "BrushFactory"
description: "BrushFactory — class in TaleWorlds.GauntletUI. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# BrushFactory

**Namespace:** `TaleWorlds.GauntletUI`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class BrushFactory`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs`

## Overview

`BrushFactory` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BrushFactory`.
- **Instance members** (7): `Brushes`, `DefaultBrush`, `Initialize`, `LoadBrushFile`, `GetBrush`, `SaveBrushAs`, ….
- **Data and constants** (1): `BrushChange`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Brushes` | property | Instance entry point `IEnumerable<Brush>` property. Read it for current state; a declared setter writes that state in place. |
| `CheckForUpdates` | method | Instance entry point. Takes no arguments. |
| `DefaultBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `GetBrush` | method | Instance entry point. Takes 1 argument: `string name`. Returns `Brush`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method | Instance entry point. Takes no arguments. |
| `LoadBrushFile` | method | Instance entry point. Takes 1 argument: `string name`. |
| `SaveBrushAs` | method | Instance entry point. Takes 2 arguments: `string name`, `Brush brush`. Returns `bool`. |
| `BrushFactory` | ctor | Instance entry point. Takes 4 arguments: `ResourceDepot resourceDepot`, `string resourceFolder`, `SpriteData spriteData`, `FontFactory fontFactory`. Returns ``. |
| `BrushChange` | field | Instance entry point `Action` field — direct storage with no validation or notification. |

- Constructed as `public BrushFactory(ResourceDepot resourceDepot, string resourceFolder, SpriteData spriteData, FontFactory fontFactory)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var brushFactory = new BrushFactory(resourceDepot, resourceFolder, spriteData, fontFactory);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushFactory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SpriteData](../SpriteData/) — `TaleWorlds.TwoDimension`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [AnimationInterpolation](../AnimationInterpolation/) — `TaleWorlds.GauntletUI`.
- [AudioProperty](../AudioProperty/) — `TaleWorlds.GauntletUI`.

Section: [api/gui/](../) — the other types in this bucket.
