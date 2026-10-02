---
title: "LocationCharacter"
description: "LocationCharacter — class in TaleWorlds.CampaignSystem.Settlements.Locations. 21 public members (1 static)."
---

<!-- v147-skeleton -->
# LocationCharacter

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LocationCharacter`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs`

## Overview

`LocationCharacter` is a named type in the TaleWorlds.CampaignSystem.Settlements.Locations namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LocationCharacter`.
- **Static entry points** (1): `CreateBodyguardHero`.
- **Instance members** (17): `Character`, `AgentOrigin`, `AgentData`, `UseCivilianEquipment`, `ActionSetCode`, `AlarmedActionSetCode`, ….
- **Data and constants** (2): `IsVisualTracked`, `CharacterRelation`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateBodyguardHero` | method (static) | Static entry point. Takes 3 arguments: `Hero hero`, `MobileParty party`, `LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate`. Returns `LocationCharacter`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ActionSetCode` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `AddBehaviors` | property | Instance entry point `LocationCharacter.AddBehaviorsDelegate` property. Adds to the collection or relation this type owns. |
| `AddBehaviorsDelegate` | method | Instance entry point. Takes 1 argument: `IAgent agent`. Returns `delegate void`. Adds to the collection or relation this type owns. |
| `AfterAgentCreated` | property | Instance entry point `LocationCharacter.AfterAgentCreatedDelegate` property. Read it for current state; a declared setter writes that state in place. |
| `AfterAgentCreatedDelegate` | method | Instance entry point. Takes 1 argument: `IAgent agent`. Returns `delegate void`. |
| `AgentData` | property | Instance entry point `AgentData` property. Read it for current state; a declared setter writes that state in place. |
| `AgentOrigin` | property | Instance entry point `IAgentOriginBase` property. Read it for current state; a declared setter writes that state in place. |
| `AlarmedActionSetCode` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Character` | property | Instance entry point `CharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterRelations` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `FixedLocation` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ForceSpawnInSpecialTargetTag` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `MemberOfAlley` | property | Instance entry point `Alley` property. Read it for current state; a declared setter writes that state in place. |
| `SetAlleyOfCharacter` | method | Instance entry point. Takes 1 argument: `Alley alley`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SpecialItem` | property | Instance entry point `ItemObject` property. Read it for current state; a declared setter writes that state in place. |
| `SpecialTargetTag` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `UseCivilianEquipment` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `LocationCharacter` | ctor | Instance entry point. Takes 14 arguments: `AgentData agentData`, `LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate`, `string spawnTag`, `bool fixedLocation`, …. Returns ``. |
| `CharacterRelation` | field | Instance entry point `LocationCharacter.CharacterRelations` field — direct storage with no validation or notification. |
| `IsVisualTracked` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

- Constructed as `public LocationCharacter(AgentData agentData, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate, string spawnTag, bool fixedLocation, LocationCharacter.CharacterRelations characterRelation, string actionSetCode, bool useCivilianEquipment, bool isFixedCharacter = false, ItemObject specialItem = null, bool isHidden = false, bool isVisualTracked = false, bool overrideBodyProperties = true, LocationCharacter.AfterAgentCreatedDelegate afterAgentCreated = null, bool forceSpawnOnSpecialTargetTag = false)`.

## Usage Example

```csharp
// Static entry points on LocationCharacter:
LocationCharacter.CreateBodyguardHero(hero, party, addBehaviorsDelegate);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Alley](../Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [FlattenedTroopRoster](../FlattenedTroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [PartyAgentOrigin](../PartyAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.

Section: [api/campaign/](../) — the other types in this bucket.
