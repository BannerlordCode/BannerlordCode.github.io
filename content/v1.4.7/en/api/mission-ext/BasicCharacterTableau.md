---
title: "BasicCharacterTableau"
description: "BasicCharacterTableau — class in TaleWorlds.MountAndBlade.View.Tableaus. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# BasicCharacterTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class BasicCharacterTableau`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BasicCharacterTableau.cs`

## Overview

`BasicCharacterTableau` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BasicCharacterTableau`.
- **Instance members** (8): `Texture`, `IsVersionCompatible`, `OnTick`, `SetTargetSize`, `OnFinalize`, `DeserializeCharacterCode`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DeserializeCharacterCode` | method | Instance entry point. Takes 1 argument: `string code`. |
| `IsVersionCompatible` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RotateCharacter` | method | Instance entry point. Takes 1 argument: `bool value`. |
| `SetBannerCode` | method | Instance entry point. Takes 1 argument: `string value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetTargetSize` | method | Instance entry point. Takes 2 arguments: `int width`, `int height`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Texture` | property | Instance entry point `Texture` property. Read it for current state; a declared setter writes that state in place. |
| `BasicCharacterTableau` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public BasicCharacterTableau()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var basicCharacterTableau = new BasicCharacterTableau();

// Lifecycle hooks this type declares:
//   public void OnTick(float dt)
//   public void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BasicCharacterTableau.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [UserData](../UserData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
