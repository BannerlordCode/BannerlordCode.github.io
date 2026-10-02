---
title: "ConversationCharacterData"
description: "ConversationCharacterData — struct in TaleWorlds.CampaignSystem.Conversation. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# ConversationCharacterData

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public struct ConversationCharacterData : ISerializableObject`  
**Base:** `ISerializableObject`  
**Source:** `TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs`

## Overview

`ConversationCharacterData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends ISerializableObject, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConversationCharacterData`.
- **Data and constants** (8): `Character`, `Party`, `NoHorse`, `NoWeapon`, `NoBodyguards`, `SpawnedAfterFight`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ConversationCharacterData` | ctor | Instance entry point. Takes 8 arguments: `CharacterObject character`, `PartyBase party`, `bool noHorse`, `bool noWeapon`, …. Returns ``. |
| `Character` | field | Instance entry point `CharacterObject` field — direct storage with no validation or notification. |
| `IsCivilianEquipmentRequiredForBodyGuardCharacters` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsCivilianEquipmentRequiredForLeader` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `NoBodyguards` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `NoHorse` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `NoWeapon` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Party` | field | Instance entry point `PartyBase` field — direct storage with no validation or notification. |
| `SpawnedAfterFight` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

- Constructed as `public ConversationCharacterData(CharacterObject character, PartyBase party = null, bool noHorse = false, bool noWeapon = false, bool spawnAfterFight = false, bool isCivilianEquipmentRequiredForLeader = false, bool isCivilianEquipmentRequiredForBodyGuardCharacters = false, bool noBodyguards = false)`.

## Usage Example

```csharp
var data = new ConversationCharacterData
{
    Character = default,
    Party = default,
    NoHorse = false,
    NoWeapon = false,
    NoBodyguards = false,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [MBGUID](../MBGUID/) — `TaleWorlds.ObjectSystem`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [CampaignObjectManager](../../campaign/CampaignObjectManager/) — `TaleWorlds.CampaignSystem`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
