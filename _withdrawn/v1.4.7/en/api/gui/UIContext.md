---
title: "UIContext"
description: "UIContext — class in TaleWorlds.GauntletUI. 48 public members (0 static)."
---

<!-- v147-skeleton -->
# UIContext

**Namespace:** `TaleWorlds.GauntletUI`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class UIContext`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs`

## Overview

`UIContext` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `UIContext`, `UIContext`.
- **Instance members** (46): `ActiveCursorOfContext`, `IsDynamicScaleEnabled`, `ScaleModifier`, `Name`, `IsActive`, `ContextAlpha`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Activate` | method | Instance entry point. Takes no arguments. |
| `ActiveCursorOfContext` | property | Instance entry point `UIContext.MouseCursors` property. Read it for current state; a declared setter writes that state in place. |
| `Brushes` | property | Instance entry point `IEnumerable<Brush>` property. Read it for current state; a declared setter writes that state in place. |
| `BrushFactory` | property | Instance entry point `BrushFactory` property. Read it for current state; a declared setter writes that state in place. |
| `CancelMouseClick` | method | Instance entry point. Takes no arguments. Capability check used to gate an operation. |
| `ContextAlpha` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentLanugageCode` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CustomInverseScale` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CustomScale` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Deactivate` | method | Instance entry point. Takes no arguments. |
| `DefaultBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `DrawWidgetDebugInfo` | method | Instance entry point. Takes no arguments. |
| `EventManager` | property | Instance entry point `EventManager` property. Read it for current state; a declared setter writes that state in place. |
| `FocusTest` | method | Instance entry point. Takes 1 argument: `Widget root`. Returns `bool`. |
| `FontFactory` | property | Instance entry point `FontFactory` property. Read it for current state; a declared setter writes that state in place. |
| `GamepadNavigation` | property | Instance entry point `IGamepadNavigationContext` property. Read it for current state; a declared setter writes that state in place. |
| `GetBrush` | method | Instance entry point. Takes 1 argument: `string name`. Returns `Brush`. Read path: prefer it over reaching for the backing store. |
| `HitTest` | method | Instance entry point. Takes 2 arguments: `Widget root`, `Vector2 position`. Returns `bool`. |
| `HitTest` | method | Instance entry point. Takes 1 argument: `Widget root`. Returns `bool`. |
| `Initialize` | method | Instance entry point. Takes no arguments. |
| `InitializeGamepadNavigation` | method | Instance entry point. Takes 1 argument: `IGamepadNavigationContext context`. |
| `InputContext` | property | Instance entry point `IReadonlyInputContext` property. Read it for current state; a declared setter writes that state in place. |
| `InverseScale` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

- Constructed as `public UIContext(TwoDimensionContext twoDimensionContext, IInputContext inputContext, SpriteData spriteData, FontFactory fontFactory, BrushFactory brushFactory)`.
- Constructed as `public UIContext(TwoDimensionContext twoDimensionContext, IInputContext inputContext)`.

24 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var uIContext = new UIContext(twoDimensionContext, inputContext, spriteData, fontFactory, brushFactory);

// Lifecycle hooks this type declares:
//   public void OnFinalize()
//   public void OnOnScreenkeyboardTextInputDone(string inputText)
//   public void OnOnScreenKeyboardCanceled()
//   public void OnMovieLoaded(string movieName)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/UIContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [BrushFactory](../BrushFactory/) — `TaleWorlds.GauntletUI`.
- [SpriteData](../SpriteData/) — `TaleWorlds.TwoDimension`.
- [IReadonlyInputContext](../IReadonlyInputContext/) — `TaleWorlds.GauntletUI.GauntletInput`.
- [GauntletInputContext](../GauntletInputContext/) — `TaleWorlds.GauntletUI.GauntletInput`.
- [BrushWidget](../BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/gui/](../) — the other types in this bucket.
