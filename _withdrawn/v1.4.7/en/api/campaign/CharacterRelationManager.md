---
title: "CharacterRelationManager"
description: "CharacterRelationManager — class in TaleWorlds.CampaignSystem. 6 public members (3 static)."
---

<!-- v147-skeleton -->
# CharacterRelationManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CharacterRelationManager`  
**Source:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## Overview

`CharacterRelationManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterRelationManager`.
- **Static entry points** (3): `Instance`, `GetHeroRelation`, `SetHeroRelation`.
- **Instance members** (2): `AfterLoad`, `RemoveHero`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetHeroRelation` | method (static) | Static entry point. Takes 2 arguments: `Hero hero1`, `Hero hero2`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `Instance` | property (static) | Static entry point `CharacterRelationManager` property. Read it for current state; a declared setter writes that state in place. |
| `SetHeroRelation` | method (static) | Static entry point. Takes 3 arguments: `Hero hero1`, `Hero hero2`, `int value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `AfterLoad` | method | Instance entry point. Takes no arguments. |
| `RemoveHero` | method | Instance entry point. Takes 1 argument: `Hero deadHero`. Removes from or clears the collection this type owns. |
| `CharacterRelationManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public CharacterRelationManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var characterRelationManager = CharacterRelationManager.Instance;
CharacterRelationManager.GetHeroRelation(hero1, hero2);
CharacterRelationManager.SetHeroRelation(hero1, hero2, value);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/CharacterRelationManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CampaignObjectManager](../CampaignObjectManager/) — `TaleWorlds.CampaignSystem`.

Section: [api/campaign/](../) — the other types in this bucket.
