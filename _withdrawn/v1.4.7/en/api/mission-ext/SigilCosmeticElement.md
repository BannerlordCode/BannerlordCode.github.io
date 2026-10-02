---
title: "SigilCosmeticElement"
description: "SigilCosmeticElement — class in TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# SigilCosmeticElement

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class SigilCosmeticElement : CosmeticElement`  
**Base:** `CosmeticElement`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticTypes/SigilCosmeticElement.cs`

## Overview

`SigilCosmeticElement` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends CosmeticElement, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SigilCosmeticElement`.
- **Data and constants** (1): `BannerCode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SigilCosmeticElement` | ctor | Instance entry point. Takes 4 arguments: `string id`, `CosmeticsManager.CosmeticRarity rarity`, `int cost`, `string bannerCode`. Returns ``. |
| `BannerCode` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public SigilCosmeticElement(string id, CosmeticsManager.CosmeticRarity rarity, int cost, string bannerCode)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: CosmeticElement.
var sigilCosmeticElement = new SigilCosmeticElement(id, rarity, cost, bannerCode);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticTypes/SigilCosmeticElement.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CosmeticElement](../CosmeticElement/) — `TaleWorlds.MountAndBlade.Diamond.Cosmetics`.
- [CosmeticsManager](../CosmeticsManager/) — `TaleWorlds.MountAndBlade.Diamond.Cosmetics`.

Section: [api/mission-ext/](../) — the other types in this bucket.
