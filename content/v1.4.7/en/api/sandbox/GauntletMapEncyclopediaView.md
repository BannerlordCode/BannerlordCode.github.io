---
title: "GauntletMapEncyclopediaView"
description: "GauntletMapEncyclopediaView — class in SandBox.GauntletUI.Encyclopedia. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletMapEncyclopediaView

**Namespace:** `SandBox.GauntletUI.Encyclopedia`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletMapEncyclopediaView : MapEncyclopediaView`  
**Base:** `MapEncyclopediaView`  
**Source:** `SandBox.GauntletUI/Encyclopedia/GauntletMapEncyclopediaView.cs`

## Overview

`GauntletMapEncyclopediaView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapEncyclopediaView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (4): `CreateLayout`, `OnFinalize`, `CloseEncyclopedia`, `GetTutorialContext`.
- **Extension points** (4): `CreateLayout`, `OnFinalize`, `CloseEncyclopedia`, `GetTutorialContext`.
- **Data and constants** (1): `ListViewDataController`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CloseEncyclopedia` | method (override) | Overrides the base member. Takes no arguments. |
| `CreateLayout` | method (override) | Overrides the base member. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetTutorialContext` | method (override) | Overrides the base member. Takes no arguments. Returns `TutorialContexts`. Read path: prefer it over reaching for the backing store. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ListViewDataController` | field | Instance entry point `EncyclopediaListViewDataController` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapEncyclopediaView.

// Lifecycle hooks this type declares:
//   protected override void CreateLayout()
//   protected override void OnFinalize()
//   public override void CloseEncyclopedia()
//   protected override TutorialContexts GetTutorialContext()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Encyclopedia/GauntletMapEncyclopediaView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaHomeVM](../../viewmodel/EncyclopediaHomeVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [EncyclopediaPageArgs](../../viewmodel/EncyclopediaPageArgs/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`.
- [EncyclopediaNavigatorVM](../../viewmodel/EncyclopediaNavigatorVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [EncyclopediaListViewDataController](../EncyclopediaListViewDataController/) — `SandBox.GauntletUI.Encyclopedia`.
- [EncyclopediaData](../EncyclopediaData/) — `SandBox.GauntletUI.Encyclopedia`.
- [SpriteCategory](../../gui/SpriteCategory/) — `TaleWorlds.TwoDimension`.

Section: [api/sandbox/](../) — the other types in this bucket.
