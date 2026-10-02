---
title: "ImageIdentifierTextureProvider"
description: "ImageIdentifierTextureProvider — class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers. 16 public members (0 static)."
---

<!-- v147-skeleton -->
# ImageIdentifierTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public abstract class ImageIdentifierTextureProvider : TextureProvider, IDisposable`  
**Base:** `TextureProvider, IDisposable`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs`

## Overview

`ImageIdentifierTextureProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends TextureProvider, IDisposable, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ImageIdentifierTextureProvider`.
- **Instance members** (15): `ThumbnailCreationData`, `OnCreateImageWithId`, `Tick`, `Clear`, `GetCanForceCheckTexture`, `OnCheckTexture`, ….
- **Extension points** (6): `OnCreateImageWithId`, `Tick`, `Clear`, `GetCanForceCheckTexture`, `OnCheckTexture`, `OnGetTextureForRender`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Clear` | method (override) | Overrides the base member. Takes 1 argument: `bool clearNextFrame`. |
| `Tick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnGetTextureForRender` | method (override) | Overrides the base member. Takes 2 arguments: `TwoDimensionContext twoDimensionContext`, `string name`. Returns `TaleWorlds.TwoDimension.Texture`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AdditionalArgs` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CreateImageWithId` | method | Instance entry point. Takes 2 arguments: `string id`, `string additionalArgs`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetCanForceCheckTexture` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `ImageId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsBig` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReleased` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnCheckTexture` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreateImageWithId` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `string id`, `string additionalArgs`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ForceRefreshTextures` | method | Protected — for subclasses only. Takes no arguments. |
| `ImageIdentifierTextureProvider` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `OnTextureCreated` | method | Protected — for subclasses only. Takes 1 argument: `TaleWorlds.Engine.Texture texture`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTextureCreationCancelled` | method | Protected — for subclasses only. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ThumbnailCreationData` | property | Protected — for subclasses only `ThumbnailCreationData` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public ImageIdentifierTextureProvider()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var imageIdentifierTextureProvider = new ImageIdentifierTextureProvider();
// Read the live state through imageIdentifierTextureProvider.ThumbnailCreationData.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EngineTexture](../../engine/EngineTexture/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
