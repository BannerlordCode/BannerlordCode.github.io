---
title: "CharacterCreationStageViewBase"
description: "CharacterCreationStageViewBase — class in SandBox.View.CharacterCreation. 22 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationStageViewBase

**Namespace:** `SandBox.View.CharacterCreation`  
**Module:** `SandBox.View`  
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`  
**Base:** `ICharacterCreationStageListener`  
**Source:** `SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs`

## Overview

`CharacterCreationStageViewBase` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ICharacterCreationStageListener, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationStageViewBase`.
- **Instance members** (14): `SetGenericScene`, `OnRefresh`, `GetLayers`, `NextStage`, `PreviousStage`, `OnFinalize`, ….
- **Extension points** (11): `SetGenericScene`, `OnRefresh`, `GetLayers`, `NextStage`, `PreviousStage`, `OnFinalize`, ….
- **Data and constants** (7): `_affirmativeAction`, `_negativeAction`, `_refreshAction`, `_getTotalStageCountAction`, `_getCurrentStageIndexAction`, `_getFurthestIndexAction`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetLayers` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `IEnumerable<ScreenLayer>`. Read path: prefer it over reaching for the backing store. |
| `GetVirtualStageCount` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GoToIndex` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `int index`. |
| `LoadEscapeMenuMovie` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `NextStage` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `PreviousStage` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `ReleaseEscapeMenuMovie` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `SetGenericScene` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Scene scene`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetEscapeMenuItems` | method | Instance entry point. Takes 1 argument: `CharacterCreationStageViewBase view`. Returns `List<EscapeMenuItemVM>`. Read path: prefer it over reaching for the backing store. |
| `HandleEscapeMenu` | method | Instance entry point. Takes 2 arguments: `CharacterCreationStageViewBase view`, `ScreenLayer screenLayer`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRefresh` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_cameraPosition` | property | Protected — for subclasses only `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterCreationStageViewBase` | ctor | Protected — for subclasses only. Takes 7 arguments: `ControlCharacterCreationStage affirmativeAction`, `ControlCharacterCreationStage negativeAction`, `ControlCharacterCreationStage refreshAction`, `ControlCharacterCreationStageReturnInt getCurrentStageIndexAction`, …. Returns ``. |
| `_affirmativeAction` | field | Protected — for subclasses only `ControlCharacterCreationStage` field — direct storage with no validation or notification. |
| `_getCurrentStageIndexAction` | field | Protected — for subclasses only `ControlCharacterCreationStageReturnInt` field — direct storage with no validation or notification. |
| `_getFurthestIndexAction` | field | Protected — for subclasses only `ControlCharacterCreationStageReturnInt` field — direct storage with no validation or notification. |
| `_getTotalStageCountAction` | field | Protected — for subclasses only `ControlCharacterCreationStageReturnInt` field — direct storage with no validation or notification. |
| `_goToIndexAction` | field | Protected — for subclasses only `ControlCharacterCreationStageWithInt` field — direct storage with no validation or notification. |
| `_negativeAction` | field | Protected — for subclasses only `ControlCharacterCreationStage` field — direct storage with no validation or notification. |
| `_refreshAction` | field | Protected — for subclasses only `ControlCharacterCreationStage` field — direct storage with no validation or notification. |

- Constructed as `protected CharacterCreationStageViewBase(ControlCharacterCreationStage affirmativeAction, ControlCharacterCreationStage negativeAction, ControlCharacterCreationStage refreshAction, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ICharacterCreationStageListener.

// Lifecycle hooks this type declares:
//   protected virtual void OnRefresh()
//   protected virtual void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationContent](../../campaign/CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [ControlCharacterCreationStage](../../viewmodel/ControlCharacterCreationStage/) — `TaleWorlds.Core.ViewModelCollection`.
- [ControlCharacterCreationStageReturnInt](../../viewmodel/ControlCharacterCreationStageReturnInt/) — `TaleWorlds.Core.ViewModelCollection`.
- [EscapeMenuItemVM](../../viewmodel/EscapeMenuItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`.

Section: [api/sandbox/](../) — the other types in this bucket.
