---
title: "BanditPartyComponent"
description: "BanditPartyComponent — class in TaleWorlds.CampaignSystem.Party.PartyComponents. 13 public members (4 static)."
---

<!-- v147-skeleton -->
# BanditPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BanditPartyComponent : WarPartyComponent`  
**Base:** `WarPartyComponent`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs`

## Overview

`BanditPartyComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends WarPartyComponent, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `BanditPartyComponent`, `BanditPartyComponent`.
- **Static entry points** (4): `CreateBanditParty`, `ConvertPartyToBanditParty`, `CreateLooterParty`, `ConvertPartyToLooterParty`.
- **Instance members** (7): `HomeSettlement`, `PartyOwner`, `Name`, `SetHomeHideout`, `ClearCachedName`, `OnMobilePartySetOnCreation`, ….
- **Extension points** (5): `HomeSettlement`, `PartyOwner`, `Name`, `ClearCachedName`, `OnMobilePartySetOnCreation`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClearCachedName` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `ConvertPartyToBanditParty` | method (static) | Static entry point. Takes 4 arguments: `MobileParty mobileParty`, `Clan clan`, `Hideout hideout`, `bool isBossParty`. |
| `ConvertPartyToLooterParty` | method (static) | Static entry point. Takes 3 arguments: `MobileParty mobileParty`, `Clan clan`, `Settlement relatedSettlement`. |
| `CreateBanditParty` | method (static) | Static entry point. Takes 6 arguments: `string stringId`, `Clan clan`, `Hideout hideout`, `bool isBossParty`, …. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateLooterParty` | method (static) | Static entry point. Takes 6 arguments: `string stringId`, `Clan clan`, `Settlement relatedSettlement`, `bool isBossParty`, …. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `HomeSettlement` | property (override) | Overrides the base member `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PartyOwner` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `OnMobilePartySetOnCreation` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetHomeHideout` | method | Instance entry point. Takes 1 argument: `Hideout hideout`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `InitializationArgs` | property | Protected — for subclasses only `class` property. Read it for current state; a declared setter writes that state in place. |
| `BanditPartyComponent` | ctor | Protected — for subclasses only. Takes 3 arguments: `Hideout hideout`, `bool isBossParty`, `BanditPartyComponent.InitializationArgs args`. Returns ``. |
| `BanditPartyComponent` | ctor | Protected — for subclasses only. Takes 2 arguments: `Settlement relatedSettlement`, `BanditPartyComponent.InitializationArgs args`. Returns ``. |

- Constructed as `protected BanditPartyComponent(Hideout hideout, bool isBossParty, BanditPartyComponent.InitializationArgs args)`.
- Constructed as `protected BanditPartyComponent(Settlement relatedSettlement, BanditPartyComponent.InitializationArgs args)`.

## Usage Example

```csharp
// Static entry points on BanditPartyComponent:
BanditPartyComponent.CreateBanditParty(stringId, clan, hideout, isBossParty, pt, initialPosition);
BanditPartyComponent.ConvertPartyToBanditParty(mobileParty, clan, hideout, isBossParty);
BanditPartyComponent.CreateLooterParty(stringId, clan, relatedSettlement, isBossParty, pt, initialPosition);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Hideout](../Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign/](../) — the other types in this bucket.
