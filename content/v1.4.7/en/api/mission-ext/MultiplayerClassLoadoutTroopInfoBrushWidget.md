---
title: "MultiplayerClassLoadoutTroopInfoBrushWidget"
description: "MultiplayerClassLoadoutTroopInfoBrushWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# MultiplayerClassLoadoutTroopInfoBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class MultiplayerClassLoadoutTroopInfoBrushWidget : BrushWidget`  
**Base:** `BrushWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopInfoBrushWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopInfoBrushWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends BrushWidget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MultiplayerClassLoadoutTroopInfoBrushWidget`.
- **Instance members** (3): `OnHoverBegin`, `OnHoverEnd`, `OnBrushChanged`.
- **Extension points** (3): `OnHoverBegin`, `OnHoverEnd`, `OnBrushChanged`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnBrushChanged` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHoverBegin` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHoverEnd` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MultiplayerClassLoadoutTroopInfoBrushWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public MultiplayerClassLoadoutTroopInfoBrushWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: BrushWidget.
var multiplayerClassLoadoutTroopInfoBrushWidget = new MultiplayerClassLoadoutTroopInfoBrushWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnHoverBegin()
//   protected override void OnHoverEnd()
//   public override void OnBrushChanged()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopInfoBrushWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
