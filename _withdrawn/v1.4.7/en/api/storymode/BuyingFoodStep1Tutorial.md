---
title: "BuyingFoodStep1Tutorial"
description: "BuyingFoodStep1Tutorial — class in StoryMode.GauntletUI.Tutorial. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# BuyingFoodStep1Tutorial

**Namespace:** `StoryMode.GauntletUI.Tutorial`  
**Module:** `StoryMode.GauntletUI`  
**Type:** `public class BuyingFoodStep1Tutorial : TutorialItemBase`  
**Base:** `TutorialItemBase`  
**Source:** `StoryMode.GauntletUI/Tutorial/BuyingFoodStep1Tutorial.cs`

## Overview

`BuyingFoodStep1Tutorial` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends TutorialItemBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BuyingFoodStep1Tutorial`.
- **Instance members** (4): `IsConditionsMetForCompletion`, `IsConditionsMetForActivation`, `OnTutorialContextChanged`, `GetTutorialsRelevantContext`.
- **Extension points** (4): `IsConditionsMetForCompletion`, `IsConditionsMetForActivation`, `OnTutorialContextChanged`, `GetTutorialsRelevantContext`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTutorialsRelevantContext` | method (override) | Overrides the base member. Takes no arguments. Returns `TutorialContexts`. Read path: prefer it over reaching for the backing store. |
| `IsConditionsMetForActivation` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsConditionsMetForCompletion` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnTutorialContextChanged` | method (override) | Overrides the base member. Takes 1 argument: `TutorialContextChangedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BuyingFoodStep1Tutorial` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public BuyingFoodStep1Tutorial()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: TutorialItemBase.
var buyingFoodStep1Tutorial = new BuyingFoodStep1Tutorial();

// Lifecycle hooks this type declares:
//   public override bool IsConditionsMetForCompletion()
//   public override bool IsConditionsMetForActivation()
//   public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)
//   public override TutorialContexts GetTutorialsRelevantContext()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode.GauntletUI/Tutorial/BuyingFoodStep1Tutorial.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TutorialItemBase](../../sandbox/TutorialItemBase/) — `SandBox.GauntletUI.Tutorial`.
- [TutorialItemVM](../../sandbox/TutorialItemVM/) — `SandBox.ViewModelCollection.Tutorial`.
- [TutorialHelper](../../sandbox/TutorialHelper/) — `SandBox.GauntletUI.Tutorial`.

Section: [api/storymode/](../) — the other types in this bucket.
