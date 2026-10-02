---
title: "CharacterData"
description: "CharacterData — class in TaleWorlds.CampaignSystem. 4 public members (2 static)."
---

<!-- v147-skeleton -->
# CharacterData

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CharacterData`  
**Source:** `TaleWorlds.CampaignSystem/CharacterData.cs`

## Overview

`CharacterData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `ExportCharacter`, `ImportCharacter`.
- **Instance members** (1): `PropertyObjectData`.
- **Data and constants** (1): `CharacterDataExtension`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExportCharacter` | method (static) | Static entry point. Takes 2 arguments: `Hero hero`, `string path`. |
| `ImportCharacter` | method (static) | Static entry point. Takes 2 arguments: `Hero hero`, `string path`. |
| `PropertyObjectData` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterDataExtension` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
var data = new CharacterData
{
    PropertyObjectData = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/CharacterData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [HeroDeveloper](../HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [Attributes](../Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/campaign/](../) — the other types in this bucket.
