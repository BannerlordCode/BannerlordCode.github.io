---
title: "LordPartyComponent"
description: "LordPartyComponent — class in TaleWorlds.CampaignSystem.Party.PartyComponents. 14 public members (2 static)."
---

<!-- v147-skeleton -->
# LordPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LordPartyComponent : WarPartyComponent`  
**Base:** `WarPartyComponent`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## Overview

`LordPartyComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends WarPartyComponent, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LordPartyComponent`.
- **Static entry points** (2): `CreateLordParty`, `ConvertPartyToLordParty`.
- **Instance members** (11): `PartyOwner`, `Name`, `CanHaveNavalNavigationCapability`, `HomeSettlement`, `Leader`, `WagePaymentLimit`, ….
- **Extension points** (10): `PartyOwner`, `Name`, `CanHaveNavalNavigationCapability`, `HomeSettlement`, `Leader`, `WagePaymentLimit`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanHaveNavalNavigationCapability` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ClearCachedName` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `ConvertPartyToLordParty` | method (static) | Static entry point. Takes 3 arguments: `MobileParty mobileParty`, `Hero owner`, `Hero partyLeader`. |
| `CreateLordParty` | method (static) | Static entry point. Takes 6 arguments: `string stringId`, `Hero hero`, `CampaignVec2 position`, `float spawnRadius`, …. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `HomeSettlement` | property (override) | Overrides the base member `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `Leader` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PartyOwner` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `SetWagePaymentLimit` | method (override) | Overrides the base member. Takes 1 argument: `int newLimit`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `WagePaymentLimit` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnChangePartyLeader` | method (override) | Overrides the base member. Takes 1 argument: `Hero newLeader`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMobilePartySetOnCreation` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitializationArgs` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `LordPartyComponent` | ctor | Protected — for subclasses only. Takes 3 arguments: `Hero owner`, `Hero leader`, `LordPartyComponent.InitializationArgs args`. Returns ``. |

- Constructed as `protected LordPartyComponent(Hero owner, Hero leader, LordPartyComponent.InitializationArgs args)`.

## Usage Example

```csharp
// Static entry points on LordPartyComponent:
LordPartyComponent.CreateLordParty(stringId, hero, position, spawnRadius, spawnSettlement, partyLeader);
LordPartyComponent.ConvertPartyToLordParty(mobileParty, owner, partyLeader);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [DefaultTraits](../DefaultTraits/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign/](../) — the other types in this bucket.
