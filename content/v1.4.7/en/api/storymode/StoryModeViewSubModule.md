---
title: "StoryModeViewSubModule"
description: "StoryModeViewSubModule — class in StoryMode.View. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# StoryModeViewSubModule

**Namespace:** `StoryMode.View`  
**Module:** `StoryMode.View`  
**Type:** `public class StoryModeViewSubModule : MBSubModuleBase`  
**Base:** `MBSubModuleBase`  
**Source:** `StoryMode.View/StoryModeViewSubModule.cs`

## Overview

`StoryModeViewSubModule` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MBSubModuleBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (8): `OnGameInitializationFinished`, `OnGameEnd`, `OnSubModuleLoad`, `FillDataForCampaign`, `OnSubModuleUnloaded`, `OnSubModuleDeactivated`, ….
- **Extension points** (8): `OnGameInitializationFinished`, `OnGameEnd`, `OnSubModuleLoad`, `FillDataForCampaign`, `OnSubModuleUnloaded`, `OnSubModuleDeactivated`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnGameEnd` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameInitializationFinished` | method (override) | Overrides the base member. Takes 1 argument: `Game game`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeGameStart` | method (override) | Overrides the base member. Takes 2 arguments: `MBGameManager mbGameManager`, `List<string> disabledModules`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSubModuleUnloaded` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FillDataForCampaign` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MBSubModuleBase.

// Lifecycle hooks this type declares:
//   public override void OnGameInitializationFinished(Game game)
//   public override void OnGameEnd(Game game)
//   protected override void OnSubModuleLoad()
//   protected override void OnSubModuleUnloaded()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode.View/StoryModeViewSubModule.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [StoryModePermissionsSystem](../StoryModePermissionsSystem/) — `StoryMode.View.Permissions`.
- [CampaignStoryMode](../CampaignStoryMode/) — `StoryMode`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [EntityVisualManagerBase](../../sandbox/EntityVisualManagerBase/) — `SandBox.View.Map.Managers`.
- [SandBoxViewSubModule](../../sandbox/SandBoxViewSubModule/) — `SandBox.View`.
- [MapEntityVisual](../../sandbox/MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [MobilePartyVisual](../../sandbox/MobilePartyVisual/) — `SandBox.View.Map.Visuals`.

Section: [api/storymode/](../) — the other types in this bucket.
