---
title: "VisualTestsScreen"
description: "VisualTestsScreen — class in TaleWorlds.MountAndBlade.View.Screens. 13 public members (1 static)."
---

<!-- v147-skeleton -->
# VisualTestsScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class VisualTestsScreen : ScreenBase`  
**Base:** `ScreenBase`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs`

## Overview

`VisualTestsScreen` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenBase, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `VisualTestsScreen`.
- **Static entry points** (1): `isSceneSuccess`.
- **Instance members** (11): `StartedRendering`, `GetSubTestName`, `GetRenderMode`, `OnInitialize`, `OnActivate`, `OnDeactivate`, ….
- **Extension points** (5): `OnInitialize`, `OnActivate`, `OnDeactivate`, `OnFrameTick`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `isSceneSuccess` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CameraPoint` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `CameraPointTestType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `GetRenderMode` | method | Instance entry point. Takes 1 argument: `VisualTestsScreen.CameraPointTestType type`. Returns `Utilities.EngineRenderDisplayMode`. Read path: prefer it over reaching for the backing store. |
| `GetSubTestName` | method | Instance entry point. Takes 1 argument: `VisualTestsScreen.CameraPointTestType type`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `StartedRendering` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `VisualTestsScreen` | ctor | Instance entry point. Takes 5 arguments: `bool isValidTest`, `NativeOptions.ConfigQuality preset`, `string sceneName`, `DateTime testTime`, …. Returns ``. |

- Constructed as `public VisualTestsScreen(bool isValidTest, NativeOptions.ConfigQuality preset, string sceneName, DateTime testTime, List<string> testTypesToCheck)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenBase.
var visualTestsScreen = new VisualTestsScreen(isValidTest, preset, sceneName, testTime, testTypesToCheck);

// Lifecycle hooks this type declares:
//   protected override void OnInitialize()
//   protected override void OnActivate()
//   protected override void OnDeactivate()
//   protected override void OnFrameTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.

Section: [api/mission-ext/](../) — the other types in this bucket.
