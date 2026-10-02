---
title: "ItemImageTextureProvider"
description: "ItemImageTextureProvider — class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# ItemImageTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class ItemImageTextureProvider : ImageIdentifierTextureProvider`  
**Base:** `ImageIdentifierTextureProvider`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ItemImageTextureProvider.cs`

## Overview

`ItemImageTextureProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ImageIdentifierTextureProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (1): `OnCreateImageWithId`.
- **Extension points** (1): `OnCreateImageWithId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnCreateImageWithId` | method (override) | Overrides the base member. Takes 2 arguments: `string id`, `string additionalArgs`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// ItemImageTextureProvider exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ItemImageTextureProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ImageIdentifierTextureProvider](../ImageIdentifierTextureProvider/) — `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`.

Section: [api/mission-ext/](../) — the other types in this bucket.
