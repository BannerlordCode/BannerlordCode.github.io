---
title: "BannerTextureCreator"
description: "BannerTextureCreator — class in TaleWorlds.MountAndBlade.View.Tableaus. No public members of its own."
---

<!-- v147-skeleton -->
# BannerTextureCreator

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `internal static class BannerTextureCreator`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTextureCreator.cs`

## Overview

`BannerTextureCreator` is an internal class in TaleWorlds.MountAndBlade.View.Tableaus. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`BannerTextureCreator` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on BannerTextureCreator itself in `TaleWorlds.MountAndBlade.View.Tableaus`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// BannerTextureCreator is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/BannerTextureCreator.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [BannerThumbnailCreationBaseData](../BannerThumbnailCreationBaseData/) — `TaleWorlds.MountAndBlade.View.Tableaus`.
- [BannerDebugInfo](../BannerDebugInfo/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.
- [BannerVisualCreator](../BannerVisualCreator/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/mission-ext/](../) — the other types in this bucket.
