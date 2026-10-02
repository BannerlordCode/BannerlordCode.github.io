---
title: "CustomPartyComponent"
description: "CustomPartyComponent — class in TaleWorlds.CampaignSystem.Party.PartyComponents. 18 public members (4 static)."
---

<!-- v147-skeleton -->
# CustomPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CustomPartyComponent : PartyComponent`  
**Base:** `PartyComponent`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CustomPartyComponent.cs`

## Overview

`CustomPartyComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends PartyComponent, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomPartyComponent`.
- **Static entry points** (4): `CreateCustomPartyWithPartyTemplate`, `CreateCustomPartyWithPartyTemplate`, `CreateCustomPartyWithTroopRoster`, `ConvertPartyToCustomParty`.
- **Instance members** (13): `CustomPartyBaseSpeed`, `AvoidHostileActions`, `Leader`, `BaseSpeed`, `PartyOwner`, `GetDefaultComponentBanner`, ….
- **Extension points** (9): `AvoidHostileActions`, `Leader`, `PartyOwner`, `GetDefaultComponentBanner`, `Name`, `HomeSettlement`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AvoidHostileActions` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ConvertPartyToCustomParty` | method (static) | Static entry point. Takes 8 arguments: `MobileParty mobileParty`, `Settlement homeSettlement`, `TextObject name`, `Hero owner`, …. |
| `CreateCustomPartyWithPartyTemplate` | method (static) | Static entry point. Takes 11 arguments: `CampaignVec2 position`, `float spawnRadius`, `Settlement homeSettlement`, `TextObject name`, …. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateCustomPartyWithPartyTemplate` | method (static) | Static entry point. Takes 12 arguments: `CampaignVec2 position`, `float spawnRadius`, `Settlement homeSettlement`, `TextObject name`, …. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateCustomPartyWithTroopRoster` | method (static) | Static entry point. Takes 12 arguments: `CampaignVec2 position`, `float spawnRadius`, `Settlement homeSettlement`, `TextObject name`, …. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetDefaultComponentBanner` | method (override) | Overrides the base member. Takes no arguments. Returns `Banner`. Read path: prefer it over reaching for the backing store. |
| `GetMountAndHarnessVisualIdsForPartyIcon` | method (override) | Overrides the base member. Takes 3 arguments: `PartyBase party`, `out string mountStringId`, `out string harnessStringId`. Read path: prefer it over reaching for the backing store. |
| `HomeSettlement` | property (override) | Overrides the base member `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `Leader` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PartyOwner` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `OnChangePartyLeader` | method (override) | Overrides the base member. Takes 1 argument: `Hero newLeader`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMobilePartySetOnCreation` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BaseSpeed` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CustomPartyBaseSpeed` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `SetBaseSpeed` | method | Instance entry point. Takes 1 argument: `float speed`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `InitializationArgs` | property | Protected — for subclasses only `class` property. Read it for current state; a declared setter writes that state in place. |
| `CustomPartyComponent` | ctor | Protected — for subclasses only. Takes 9 arguments: `Settlement homeSettlement`, `TextObject name`, `Hero owner`, `string partyMountStringId`, …. Returns ``. |

- Constructed as `protected CustomPartyComponent(Settlement homeSettlement, TextObject name, Hero owner, string partyMountStringId, string partyHarnessStringId, float customPartyBaseSpeed, bool avoidHostileActions, CustomPartyComponent.InitializationArgs args, Hero leader = null)`.

## Usage Example

```csharp
// Static entry points on CustomPartyComponent:
CustomPartyComponent.CreateCustomPartyWithPartyTemplate(position, spawnRadius, homeSettlement, name, clan, partyTemplate, owner, partyMountStringId, partyHarnessStringId, customPartyBaseSpeed, avoidHostileActions);
CustomPartyComponent.CreateCustomPartyWithPartyTemplate(position, spawnRadius, homeSettlement, name, clan, partyTemplate, owner, leader, partyMountStringId, partyHarnessStringId, customPartyBaseSpeed, avoidHostileActions);
CustomPartyComponent.CreateCustomPartyWithTroopRoster(position, spawnRadius, homeSettlement, name, clan, troopRoster, prisonerRoster, owner, partyMountStringId, partyHarnessStringId, customPartyBaseSpeed, avoidHostileActions);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Party/PartyComponents/CustomPartyComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [AddHeroToPartyAction](../AddHeroToPartyAction/) — `TaleWorlds.CampaignSystem.Actions`.
- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign/](../) — the other types in this bucket.
