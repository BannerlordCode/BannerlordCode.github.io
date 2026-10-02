---
title: "BannerVisualExtensions"
description: "BannerVisualExtensions — class in TaleWorlds.MountAndBlade.View. 6 public members (6 static)."
---

<!-- v147-skeleton -->
# BannerVisualExtensions

**Namespace:** `TaleWorlds.MountAndBlade.View`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public static class BannerVisualExtensions`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualExtensions.cs`

## Overview

`BannerVisualExtensions` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (6): `GetTableauTextureSmallForBannerEditor`, `GetTableauTextureLargeForBannerEditor`, `GetTableauTextureSmall`, `GetTableauTextureLarge`, `GetTableauTextureLarge`, `ConvertToMultiMesh`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ConvertToMultiMesh` | method (static) | Static entry point. Takes 1 argument: `this Banner banner`. Returns `MetaMesh`. |
| `GetTableauTextureLarge` | method (static) | Static entry point. Takes 3 arguments: `this Banner banner`, `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |
| `GetTableauTextureLarge` | method (static) | Static entry point. Takes 4 arguments: `this Banner banner`, `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`, `out BannerTextureCreationData creationData`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |
| `GetTableauTextureLargeForBannerEditor` | method (static) | Static entry point. Takes 4 arguments: `this Banner banner`, `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`, `out BannerEditorTextureCreationData textureCreationData`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |
| `GetTableauTextureSmall` | method (static) | Static entry point. Takes 3 arguments: `this Banner banner`, `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |
| `GetTableauTextureSmallForBannerEditor` | method (static) | Static entry point. Takes 4 arguments: `this Banner banner`, `in BannerDebugInfo debugInfo`, `Action<Texture> setAction`, `out BannerEditorTextureCreationData textureCreationData`. Returns `Texture`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Static entry points on BannerVisualExtensions:
BannerVisualExtensions.GetTableauTextureSmallForBannerEditor(theTarget, theTarget, setAction, theTarget);
BannerVisualExtensions.GetTableauTextureLargeForBannerEditor(theTarget, theTarget, setAction, theTarget);
BannerVisualExtensions.GetTableauTextureSmall(theTarget, theTarget, setAction);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualExtensions.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [BannerEditorTextureCreationData](../BannerEditorTextureCreationData/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [BannerVisual](../BannerVisual/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/mission-ext/](../) — the other types in this bucket.
