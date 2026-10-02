---
title: "GauntletTutorialSystem"
description: "GauntletTutorialSystem — class in SandBox.GauntletUI.Tutorial. 8 public members (3 static)."
---

<!-- v147-skeleton -->
# GauntletTutorialSystem

**Namespace:** `SandBox.GauntletUI.Tutorial`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletTutorialSystem : GlobalLayer`  
**Base:** `GlobalLayer`  
**Source:** `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs`

## Overview

`GauntletTutorialSystem` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends GlobalLayer, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletTutorialSystem`.
- **Static entry points** (2): `OnInitialize`, `OnUnload`.
- **Instance members** (4): `CurrentEncyclopediaPageContext`, `IsCharacterPortraitPopupOpen`, `CurrentContext`, `OnTick`.
- **Extension points** (1): `OnTick`.
- **Data and constants** (1): `Current`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnInitialize` | method (static) | Static entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUnload` | method (static) | Static entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Current` | field (static) | Static entry point `GauntletTutorialSystem` field — direct storage with no validation or notification. |
| `CurrentContext` | property | Instance entry point `TutorialContexts` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentEncyclopediaPageContext` | property | Instance entry point `EncyclopediaPages` property. Read it for current state; a declared setter writes that state in place. |
| `IsCharacterPortraitPopupOpen` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GauntletTutorialSystem` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public GauntletTutorialSystem()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: GlobalLayer.
var gauntletTutorialSystem = new GauntletTutorialSystem();
GauntletTutorialSystem.OnInitialize();

// Lifecycle hooks this type declares:
//   protected override void OnTick(float dt)
//   public static void OnInitialize()
//   public static void OnUnload()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GlobalLayer](../../gui/GlobalLayer/) — `TaleWorlds.ScreenSystem`.
- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [EncyclopediaPages](../../viewmodel/EncyclopediaPages/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [TutorialVM](../TutorialVM/) — `SandBox.ViewModelCollection.Tutorial`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [TutorialItemBase](../TutorialItemBase/) — `SandBox.GauntletUI.Tutorial`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [TutorialNotificationElementChangeEvent](../../viewmodel/TutorialNotificationElementChangeEvent/) — `TaleWorlds.Core.ViewModelCollection.Tutorial`.
- [EncyclopediaPageChangedEvent](../../viewmodel/EncyclopediaPageChangedEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [PerkSelectionToggleEvent](../../viewmodel/PerkSelectionToggleEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`.

Section: [api/sandbox/](../) — the other types in this bucket.
