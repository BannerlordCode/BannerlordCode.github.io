---
title: "SceneLayer"
description: "SceneLayer — class in TaleWorlds.Engine.Screens. 30 public members (0 static)."
---

<!-- v147-skeleton -->
# SceneLayer

**Namespace:** `TaleWorlds.Engine.Screens`  
**Module:** `TaleWorlds.Engine`  
**Type:** `public class SceneLayer : ScreenLayer`  
**Base:** `ScreenLayer`  
**Source:** `TaleWorlds.Engine/Screens/SceneLayer.cs`

## Overview

`SceneLayer` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ScreenLayer, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SceneLayer`.
- **Instance members** (29): `ClearSceneOnFinalize`, `AutoToggleSceneView`, `SceneView`, `OnActivate`, `OnDeactivate`, `OnFinalize`, ….
- **Extension points** (7): `OnActivate`, `OnDeactivate`, `OnFinalize`, `RefreshGlobalOrder`, `HitTest`, `HitTest`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `FocusTest` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. |
| `HitTest` | method (override) | Overrides the base member. Takes 1 argument: `Vector2 position`. Returns `bool`. |
| `HitTest` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshGlobalOrder` | method (override) | Overrides the base member. Takes 1 argument: `ref int currentOrder`. Called from the owner’s update loop — do not assume a frame boundary. |
| `AutoToggleSceneView` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ClearAll` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ClearRuntimeGPUMemory` | method | Instance entry point. Takes 1 argument: `bool remove_terrain`. Removes from or clears the collection this type owns. |
| `ClearSceneOnFinalize` | property | Instance entry point `bool` property. Removes from or clears the collection this type owns. |
| `DoNotClear` | method | Instance entry point. Takes 1 argument: `bool value`. |
| `ProjectedMousePositionOnGround` | method | Instance entry point. Takes 5 arguments: `out Vec3 groundPosition`, `out Vec3 groundNormal`, `bool mouseVisible`, `BodyFlags excludeBodyOwnerFlags`, …. Returns `bool`. |
| `ReadyToRender` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `SceneView` | property | Instance entry point `SceneView` property. Read it for current state; a declared setter writes that state in place. |
| `ScreenPointToViewportPoint` | method | Instance entry point. Takes 1 argument: `Vec2 position`. Returns `Vec2`. |
| `SetCamera` | method | Instance entry point. Takes 1 argument: `Camera camera`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCleanScreenUntilLoadingDone` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetFocusedShadowmap` | method | Instance entry point. Takes 3 arguments: `bool enable`, `ref Vec3 center`, `float radius`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetPostfxConfigParams` | method | Instance entry point. Takes 1 argument: `int value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetPostfxFromConfig` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetRenderWithPostfx` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetScene` | method | Instance entry point. Takes 1 argument: `Scene scene`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSceneUsesContour` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public SceneLayer(bool clearSceneOnFinalize = true, bool autoToggleSceneView = true)`.

6 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ScreenLayer.
var sceneLayer = new SceneLayer(clearSceneOnFinalize, autoToggleSceneView);

// Lifecycle hooks this type declares:
//   protected override void OnActivate()
//   protected override void OnDeactivate()
//   protected override void OnFinalize()
//   protected override void RefreshGlobalOrder(ref int currentOrder)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Engine/Screens/SceneLayer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.

Section: [api/engine/](../) — the other types in this bucket.
