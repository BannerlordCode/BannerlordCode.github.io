---
title: "DeathOldAgeSceneNotificationItem"
description: "DeathOldAgeSceneNotificationItem — class in TaleWorlds.CampaignSystem.SceneInformationPopupTypes. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# DeathOldAgeSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DeathOldAgeSceneNotificationItem : SceneNotificationData`  
**Base:** `SceneNotificationData`  
**Source:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/DeathOldAgeSceneNotificationItem.cs`

## Overview

`DeathOldAgeSceneNotificationItem` is a named type in the TaleWorlds.CampaignSystem.SceneInformationPopupTypes namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends SceneNotificationData, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DeathOldAgeSceneNotificationItem`.
- **Instance members** (5): `DeadHero`, `SceneID`, `TitleText`, `GetBanners`, `GetSceneNotificationCharacters`.
- **Extension points** (4): `SceneID`, `TitleText`, `GetBanners`, `GetSceneNotificationCharacters`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetBanners` | method (override) | Overrides the base member. Takes no arguments. Returns `Banner[]`. Read path: prefer it over reaching for the backing store. |
| `GetSceneNotificationCharacters` | method (override) | Overrides the base member. Takes no arguments. Returns `SceneNotificationData.SceneNotificationCharacter[]`. Read path: prefer it over reaching for the backing store. |
| `SceneID` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `TitleText` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `DeadHero` | property | Instance entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `DeathOldAgeSceneNotificationItem` | ctor | Instance entry point. Takes 1 argument: `Hero deadHero`. Returns ``. |

- Constructed as `public DeathOldAgeSceneNotificationItem(Hero deadHero)`.

## Usage Example

```csharp
var deathOldAgeSceneNotificationItem = new DeathOldAgeSceneNotificationItem(deadHero);
deathOldAgeSceneNotificationItem.GetBanners();
// Read current state through deathOldAgeSceneNotificationItem.DeadHero.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/DeathOldAgeSceneNotificationItem.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SceneNotificationData](../../core-extra/SceneNotificationData/) — `TaleWorlds.Core`.
- [CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper/) — `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`.

Section: [api/campaign/](../) — the other types in this bucket.
