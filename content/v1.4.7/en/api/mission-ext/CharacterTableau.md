---
title: "CharacterTableau"
description: "CharacterTableau — class in TaleWorlds.MountAndBlade.View.Tableaus. 33 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterTableau

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class CharacterTableau`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs`

## Overview

`CharacterTableau` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterTableau`.
- **Instance members** (32): `Texture`, `IsRunningCustomAnimation`, `ShouldLoopCustomAnimation`, `CustomAnimationWaitDuration`, `OnTick`, `GetCustomAnimationProgressRatio`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CustomAnimationWaitDuration` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetCustomAnimationProgressRatio` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `IsRunningCustomAnimation` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnCharacterTableauMouseMove` | method | Instance entry point. Takes 1 argument: `int mouseMoveX`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RotateCharacter` | method | Instance entry point. Takes 1 argument: `bool value`. |
| `SetArmorColor1` | method | Instance entry point. Takes 1 argument: `uint clothColor1`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetArmorColor2` | method | Instance entry point. Takes 1 argument: `uint clothColor2`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetBannerCode` | method | Instance entry point. Takes 1 argument: `string value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetBodyProperties` | method | Instance entry point. Takes 1 argument: `string bodyPropertiesCode`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCharStringID` | method | Instance entry point. Takes 1 argument: `string charStringId`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCustomAnimation` | method | Instance entry point. Takes 1 argument: `string animation`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCustomRenderScale` | method | Instance entry point. Takes 1 argument: `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetEnabled` | method | Instance entry point. Takes 1 argument: `bool enabled`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetEquipmentCode` | method | Instance entry point. Takes 1 argument: `string equipmentCode`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIdleAction` | method | Instance entry point. Takes 1 argument: `string idleAction`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIdleFaceAnim` | method | Instance entry point. Takes 1 argument: `string idleFaceAnim`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIsBannerShownInBackground` | method | Instance entry point. Takes 1 argument: `bool isBannerShownInBackground`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIsEquipmentAnimActive` | method | Instance entry point. Takes 1 argument: `bool value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetIsFemale` | method | Instance entry point. Takes 1 argument: `bool isFemale`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetLeftHandWieldedEquipmentIndex` | method | Instance entry point. Takes 1 argument: `int index`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetMountCreationKey` | method | Instance entry point. Takes 1 argument: `string value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetRace` | method | Instance entry point. Takes 1 argument: `int race`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public CharacterTableau()`.

9 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var characterTableau = new CharacterTableau();

// Lifecycle hooks this type declares:
//   public void OnTick(float dt)
//   public void OnFinalize()
//   public void OnCharacterTableauMouseMove(int mouseMoveX)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/CharacterTableau.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [CharacterViewModel](../../viewmodel/CharacterViewModel/) — `TaleWorlds.Core.ViewModelCollection`.
- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [UserData](../UserData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
