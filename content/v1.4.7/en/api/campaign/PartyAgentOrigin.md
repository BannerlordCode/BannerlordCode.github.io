---
title: "PartyAgentOrigin"
description: "PartyAgentOrigin — class in TaleWorlds.CampaignSystem.AgentOrigins. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyAgentOrigin

**Namespace:** `TaleWorlds.CampaignSystem.AgentOrigins`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PartyAgentOrigin : IAgentOriginBase`  
**Base:** `IAgentOriginBase`  
**Source:** `TaleWorlds.CampaignSystem/AgentOrigins/PartyAgentOrigin.cs`

## Overview

`PartyAgentOrigin` is a named type in the TaleWorlds.CampaignSystem.AgentOrigins namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IAgentOriginBase, so the members it does not redeclare are inherited from there. 11 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyAgentOrigin`.
- **Instance members** (16): `Party`, `BattleCombatant`, `Banner`, `Troop`, `Rank`, `IsUnderPlayersCommand`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Banner` | property | Instance entry point `Banner` property. Read it for current state; a declared setter writes that state in place. |
| `BattleCombatant` | property | Instance entry point `IBattleCombatant` property. Read it for current state; a declared setter writes that state in place. |
| `FactionColor` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `FactionColor2` | property | Instance entry point `uint` property. Read it for current state; a declared setter writes that state in place. |
| `IsInSameArmyAsPlayer` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsUnderPlayersCommand` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAgentRemoved` | method | Instance entry point. Takes 1 argument: `float agentHealth`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Party` | property | Instance entry point `PartyBase` property. Read it for current state; a declared setter writes that state in place. |
| `Rank` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Seed` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `SetBanner` | method | Instance entry point. Takes 1 argument: `Banner banner`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetKilled` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetRouted` | method | Instance entry point. Takes 1 argument: `bool isOrderRetreat`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetWounded` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Troop` | property | Instance entry point `BasicCharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `UniqueSeed` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PartyAgentOrigin` | ctor | Instance entry point. Takes 4 arguments: `PartyBase partyBase`, `CharacterObject characterObject`, `int rank`, `UniqueTroopDescriptor uniqueNo`. Returns ``. |

- Constructed as `public PartyAgentOrigin(PartyBase partyBase, CharacterObject characterObject, int rank = -1, UniqueTroopDescriptor uniqueNo = default(UniqueTroopDescriptor)`.

## Usage Example

```csharp
var partyAgentOrigin = new PartyAgentOrigin(partyBase, characterObject, rank, uniqueNo);
partyAgentOrigin.SetWounded();
// Read current state through partyAgentOrigin.Party.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/AgentOrigins/PartyAgentOrigin.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
