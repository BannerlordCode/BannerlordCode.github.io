---
title: "CaravanPartyComponent"
description: "CaravanPartyComponent — class in TaleWorlds.CampaignSystem.Party.PartyComponents. 20 public members (3 static)."
---

<!-- v147-skeleton -->
# CaravanPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CaravanPartyComponent : PartyComponent`  
**Base:** `PartyComponent`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CaravanPartyComponent.cs`

## Overview

`CaravanPartyComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends PartyComponent, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CaravanPartyComponent`.
- **Static entry points** (3): `ConvertPartyToCaravanParty`, `CreateCaravanParty`, `TransferCaravanOwnership`.
- **Instance members** (16): `PartyOwner`, `IsElite`, `GetDefaultComponentBanner`, `Name`, `CanHaveNavalNavigationCapability`, `CanHaveLandNavigationCapability`, ….
- **Extension points** (13): `PartyOwner`, `GetDefaultComponentBanner`, `Name`, `CanHaveNavalNavigationCapability`, `CanHaveLandNavigationCapability`, `HomeSettlement`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanHaveLandNavigationCapability` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanHaveNavalNavigationCapability` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ClearCachedName` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `ConvertPartyToCaravanParty` | method (static) | Static entry point. Takes 7 arguments: `MobileParty mobileParty`, `Hero caravanOwner`, `Settlement spawnSettlement`, `bool isInitialSpawn`, …. |
| `CreateCaravanParty` | method (static) | Static entry point. Takes 7 arguments: `Hero caravanOwner`, `Settlement spawnSettlement`, `PartyTemplateObject templateObject`, `bool isInitialSpawn`, …. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetDefaultComponentBanner` | method (override) | Overrides the base member. Takes no arguments. Returns `Banner`. Read path: prefer it over reaching for the backing store. |
| `GetMountAndHarnessVisualIdsForPartyIcon` | method (override) | Overrides the base member. Takes 3 arguments: `PartyBase party`, `out string mountStringId`, `out string harnessStringId`. Read path: prefer it over reaching for the backing store. |
| `HomeSettlement` | property (override) | Overrides the base member `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `Leader` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PartyOwner` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `TransferCaravanOwnership` | method (static) | Static entry point. Takes 3 arguments: `MobileParty caravan`, `Hero newOwner`, `Settlement homeSettlement`. |
| `OnChangePartyLeader` | method (override) | Overrides the base member. Takes 1 argument: `Hero newLeader`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMobilePartySetOnCreation` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ChangeHomeSettlement` | method | Instance entry point. Takes 1 argument: `Settlement newHomeSettlement`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `IsElite` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `InitializationArgs` | property | Protected — for subclasses only `class` property. Read it for current state; a declared setter writes that state in place. |
| `CaravanPartyComponent` | ctor | Protected — for subclasses only. Takes 5 arguments: `Settlement settlement`, `Hero owner`, `Hero partyLeader`, `bool isElite`, …. Returns ``. |

- Constructed as `protected CaravanPartyComponent(Settlement settlement, Hero owner, Hero partyLeader, bool isElite, CaravanPartyComponent.InitializationArgs args)`.

## Usage Example

```csharp
// Static entry points on CaravanPartyComponent:
CaravanPartyComponent.ConvertPartyToCaravanParty(mobileParty, caravanOwner, spawnSettlement, isInitialSpawn, caravanLeader, caravanItems, isElite);
CaravanPartyComponent.CreateCaravanParty(caravanOwner, spawnSettlement, templateObject, isInitialSpawn, caravanLeader, caravanItems, isElite);
CaravanPartyComponent.TransferCaravanOwnership(caravan, newOwner, homeSettlement);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 13 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Party/PartyComponents/CaravanPartyComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [SiegeEvent](../SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [Items](../Items/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/campaign/](../) — the other types in this bucket.
