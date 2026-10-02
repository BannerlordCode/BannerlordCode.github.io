---
title: "GarrisonPartyComponent"
description: "GarrisonPartyComponent — class in TaleWorlds.CampaignSystem.Party.PartyComponents. 15 public members (2 static)."
---

<!-- v147-skeleton -->
# GarrisonPartyComponent

**Namespace:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class GarrisonPartyComponent : PartyComponent`  
**Base:** `PartyComponent`  
**Source:** `TaleWorlds.CampaignSystem/Party/PartyComponents/GarrisonPartyComponent.cs`

## Overview

`GarrisonPartyComponent` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.

It extends PartyComponent, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.

Because components are created and destroyed with their entity, everything they cache should die with them.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GarrisonPartyComponent`.
- **Static entry points** (2): `CreateGarrisonParty`, `ConvertPartyToGarrisonParty`.
- **Instance members** (12): `PartyOwner`, `GetDefaultComponentBanner`, `Name`, `HomeSettlement`, `WagePaymentLimit`, `SetWagePaymentLimit`, ….
- **Extension points** (11): `PartyOwner`, `GetDefaultComponentBanner`, `Name`, `HomeSettlement`, `WagePaymentLimit`, `SetWagePaymentLimit`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanHaveNavalNavigationCapability` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ClearCachedName` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `ConvertPartyToGarrisonParty` | method (static) | Static entry point. Takes 2 arguments: `MobileParty mobileParty`, `Settlement settlement`. |
| `CreateGarrisonParty` | method (static) | Static entry point. Takes 2 arguments: `string stringId`, `Settlement settlement`. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetDefaultComponentBanner` | method (override) | Overrides the base member. Takes no arguments. Returns `Banner`. Read path: prefer it over reaching for the backing store. |
| `HomeSettlement` | property (override) | Overrides the base member `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `PartyOwner` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `SetWagePaymentLimit` | method (override) | Overrides the base member. Takes 1 argument: `int newLimit`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `WagePaymentLimit` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMobilePartySetOnCreation` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitializationArgs` | property | Protected — for subclasses only `class` property. Read it for current state; a declared setter writes that state in place. |
| `GarrisonPartyComponent` | ctor | Protected — for subclasses only. Takes 2 arguments: `Settlement settlement`, `GarrisonPartyComponent.InitializationArgs args`. Returns ``. |

- Constructed as `protected GarrisonPartyComponent(Settlement settlement, GarrisonPartyComponent.InitializationArgs args)`.

## Usage Example

```csharp
// Static entry points on GarrisonPartyComponent:
GarrisonPartyComponent.CreateGarrisonParty(stringId, settlement);
GarrisonPartyComponent.ConvertPartyToGarrisonParty(mobileParty, settlement);
```

## Risks and Boundaries

- Attaching a component twice silently duplicates its behaviour.
- Query order is not guaranteed; a system that needs an ordering must sort explicitly.
- Components created outside the entity lifecycle leak when the entity is replaced.
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Party/PartyComponents/GarrisonPartyComponent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/campaign/](../) — the other types in this bucket.
