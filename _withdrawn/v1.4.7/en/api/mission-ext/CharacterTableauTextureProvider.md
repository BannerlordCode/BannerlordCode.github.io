---
title: "CharacterTableauTextureProvider"
description: "CharacterTableauTextureProvider — class in TaleWorlds.MountAndBlade.GauntletUI.TextureProviders. 31 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterTableauTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class CharacterTableauTextureProvider : TextureProvider`  
**Base:** `TextureProvider`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs`

## Overview

`CharacterTableauTextureProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends TextureProvider, so the members it does not redeclare are inherited from there. 26 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterTableauTextureProvider`.
- **Instance members** (30): `CustomAnimationProgressRatio`, `BannerCodeText`, `BodyProperties`, `StanceIndex`, `IsFemale`, `Race`, ….
- **Extension points** (4): `Clear`, `OnGetTextureForRender`, `SetTargetSize`, `Tick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Clear` | method (override) | Overrides the base member. Takes 1 argument: `bool clearNextFrame`. |
| `SetTargetSize` | method (override) | Overrides the base member. Takes 2 arguments: `int width`, `int height`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnGetTextureForRender` | method (override) | Overrides the base member. Takes 2 arguments: `TwoDimensionContext twoDimensionContext`, `string name`. Returns `TaleWorlds.TwoDimension.Texture`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ArmorColor1` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `ArmorColor2` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `BannerCodeText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `BodyProperties` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CharStringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentlyRotating` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CustomAnimation` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CustomAnimationProgressRatio` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CustomAnimationWaitDuration` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CustomRenderScale` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `EquipmentCode` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IdleAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IdleFaceAnim` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsBannerShownInBackground` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsEquipmentAnimActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsFemale` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsHidden` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayingCustomAnimations` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTableauEnabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LeftHandWieldedEquipmentIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public CharacterTableauTextureProvider()`.

7 further public members follow the same patterns.
## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var characterTableauTextureProvider = new CharacterTableauTextureProvider();
// Read the live state through characterTableauTextureProvider.CustomAnimationProgressRatio.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterTableau](../CharacterTableau/) — `TaleWorlds.MountAndBlade.View.Tableaus`.
- [EngineTexture](../../engine/EngineTexture/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
