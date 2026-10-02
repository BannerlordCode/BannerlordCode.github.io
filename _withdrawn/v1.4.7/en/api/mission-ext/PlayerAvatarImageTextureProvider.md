---
title: "PlayerAvatarImageTextureProvider"
description: "PlayerAvatarImageTextureProvider — class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# PlayerAvatarImageTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class PlayerAvatarImageTextureProvider : ImageIdentifierTextureProvider`  
**Base:** `ImageIdentifierTextureProvider`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/PlayerAvatarImageTextureProvider.cs`

## Overview

`PlayerAvatarImageTextureProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ImageIdentifierTextureProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PlayerAvatarImageTextureProvider`.
- **Instance members** (4): `Tick`, `OnCreateImageWithId`, `GetCanForceCheckTexture`, `OnCheckTexture`.
- **Extension points** (4): `Tick`, `OnCreateImageWithId`, `GetCanForceCheckTexture`, `OnCheckTexture`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Tick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetCanForceCheckTexture` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `OnCheckTexture` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreateImageWithId` | method (override) | Overrides the base member. Takes 2 arguments: `string id`, `string additionalArgs`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PlayerAvatarImageTextureProvider` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public PlayerAvatarImageTextureProvider()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var playerAvatarImageTextureProvider = new PlayerAvatarImageTextureProvider();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/PlayerAvatarImageTextureProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ImageIdentifierTextureProvider](../ImageIdentifierTextureProvider/) — `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`.
- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [AvatarThumbnailCreationData](../AvatarThumbnailCreationData/) — `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`.

Section: [api/mission-ext/](../) — the other types in this bucket.
