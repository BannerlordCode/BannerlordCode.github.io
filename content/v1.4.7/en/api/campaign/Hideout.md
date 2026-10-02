---
title: "Hideout"
description: "Hideout — class in TaleWorlds.CampaignSystem.Settlements. 14 public members (1 static)."
---

<!-- v147-skeleton -->
# Hideout

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Hideout : SettlementComponent, ISpottable`  
**Base:** `SettlementComponent, ISpottable`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Hideout.cs`

## Overview

`Hideout` is a named type in the TaleWorlds.CampaignSystem.Settlements namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends SettlementComponent, ISpottable, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Hideout`.
- **Static entry points** (1): `All`.
- **Instance members** (12): `NextPossibleAttackTime`, `SetNextPossibleAttackTime`, `IsInfested`, `GetDefenderParties`, `GetNextDefenderParty`, `MapFaction`, ….
- **Extension points** (6): `MapFaction`, `OnPartyEntered`, `OnPartyLeft`, `OnRelatedPartyRemoved`, `OnInit`, `Deserialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `All` | property (static) | Static entry point `MBReadOnlyList<Hideout>` property. Read it for current state; a declared setter writes that state in place. |
| `Deserialize` | method (override) | Overrides the base member. Takes 2 arguments: `MBObjectManager objectManager`, `XmlNode node`. |
| `MapFaction` | property (override) | Overrides the base member `IFaction` property. Read it for current state; a declared setter writes that state in place. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPartyEntered` | method (override) | Overrides the base member. Takes 1 argument: `MobileParty mobileParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPartyLeft` | method (override) | Overrides the base member. Takes 1 argument: `MobileParty mobileParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRelatedPartyRemoved` | method (override) | Overrides the base member. Takes 1 argument: `MobileParty mobileParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetDefenderParties` | method | Instance entry point. Takes 1 argument: `MapEvent.BattleTypes battleType`. Returns `IEnumerable<PartyBase>`. Read path: prefer it over reaching for the backing store. |
| `GetNextDefenderParty` | method | Instance entry point. Takes 2 arguments: `ref int partyIndex`, `MapEvent.BattleTypes battleType`. Returns `PartyBase`. Read path: prefer it over reaching for the backing store. |
| `IsInfested` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSpotted` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NextPossibleAttackTime` | property | Instance entry point `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `SetNextPossibleAttackTime` | method | Instance entry point. Takes 1 argument: `CampaignTime hiddenDurationFromNow`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Hideout` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public Hideout()`.

## Usage Example

```csharp
var hideout = new Hideout();
hideout.SetNextPossibleAttackTime(hiddenDurationFromNow);
// Read current state through hideout.NextPossibleAttackTime.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Hideout.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [BanditDensityModel](../../campaign-ext/BanditDensityModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [BanditPartyComponent](../BanditPartyComponent/) — `TaleWorlds.CampaignSystem.Party.PartyComponents`.
- [Attributes](../Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/campaign/](../) — the other types in this bucket.
