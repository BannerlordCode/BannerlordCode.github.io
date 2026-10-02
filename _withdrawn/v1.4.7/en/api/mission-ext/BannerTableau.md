---
title: "BannerTableau"
description: "BannerTableau — class in TaleWorlds.MountAndBlade.View.Tableaus. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# BannerTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class BannerTableau`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTableau.cs`

## Overview

`BannerTableau` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerTableau`.
- **Instance members** (11): `Texture`, `OnTick`, `SetTargetSize`, `SetBannerCode`, `OnFinalize`, `SetCustomRenderScale`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetBannerCode` | method | Instance entry point. Takes 1 argument: `string value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCustomRenderScale` | method | Instance entry point. Takes 1 argument: `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIsNineGrid` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetMeshIndexToUpdate` | method | Instance entry point. Takes 1 argument: `int value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTargetSize` | method | Instance entry point. Takes 2 arguments: `int width`, `int height`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetUpdatePositionValueManual` | method | Instance entry point. Takes 1 argument: `Vec2 value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetUpdateRotationValueManual` | method | Instance entry point. Takes 2 arguments: `ValueTuple<float`, `bool> value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetUpdateSizeValueManual` | method | Instance entry point. Takes 1 argument: `Vec2 value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Texture` | property | Instance entry point `Texture` property. Read it for current state; a declared setter writes that state in place. |
| `BannerTableau` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public BannerTableau()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var bannerTableau = new BannerTableau();

// Lifecycle hooks this type declares:
//   public void OnTick(float dt)
//   public void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTableau.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerTextureCreator](../BannerTextureCreator/) — `TaleWorlds.MountAndBlade.View.Tableaus`.
- [UserData](../UserData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
