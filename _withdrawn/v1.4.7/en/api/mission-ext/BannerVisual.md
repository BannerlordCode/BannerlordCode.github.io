---
title: "BannerVisual"
description: "BannerVisual — class in TaleWorlds.MountAndBlade.View. 8 public members (1 static)."
---

<!-- v147-skeleton -->
# BannerVisual

**Namespace:** `TaleWorlds.MountAndBlade.View`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class BannerVisual : IBannerVisual`  
**Base:** `IBannerVisual`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs`

## Overview

`BannerVisual` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IBannerVisual, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerVisual`.
- **Static entry points** (1): `GetMeshMatrix`.
- **Instance members** (6): `Banner`, `ValidateCreateTableauTextures`, `GetTableauTextureSmall`, `GetTableauTextureLarge`, `GetTableauTextureLarge`, `ConvertToMultiMesh`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetMeshMatrix` | method (static) | Static entry point. Takes 8 arguments: `ref Mesh mesh`, `float marginLeft`, `float marginTop`, `float width`, …. Returns `MatrixFrame`. Read path: prefer it over reaching for the backing store. |
| `Banner` | property | Instance entry point `Banner` property. Read it for current state; a declared setter writes that state in place. |
| `ConvertToMultiMesh` | method | Instance entry point. Takes no arguments. Returns `MetaMesh`. |
| `GetTableauTextureLarge` | method | Instance entry point. Takes 3 arguments: `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`, `bool isTableauOrNineGrid`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |
| `GetTableauTextureLarge` | method | Instance entry point. Takes 4 arguments: `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`, `out BannerTextureCreationData creationData`, `bool isTableauOrNineGrid`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |
| `GetTableauTextureSmall` | method | Instance entry point. Takes 3 arguments: `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`, `bool isTableauOrNineGrid`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |
| `ValidateCreateTableauTextures` | method | Instance entry point. Takes no arguments. |
| `BannerVisual` | ctor | Instance entry point. Takes 1 argument: `Banner banner`. Returns ``. |

- Constructed as `public BannerVisual(Banner banner)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IBannerVisual.
var bannerVisual = new BannerVisual(banner);
BannerVisual.GetMeshMatrix(theTarget, marginLeft, marginTop, width, height, mirrored, rotation, deltaZ);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.

Section: [api/mission-ext/](../) — the other types in this bucket.
