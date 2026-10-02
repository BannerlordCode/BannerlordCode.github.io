---
title: "BesiegeSettlementLogEntry"
description: "BesiegeSettlementLogEntry — class in TaleWorlds.CampaignSystem.LogEntries. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# BesiegeSettlementLogEntry

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BesiegeSettlementLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`  
**Base:** `LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`  
**Source:** `TaleWorlds.CampaignSystem/LogEntries/BesiegeSettlementLogEntry.cs`

## Overview

`BesiegeSettlementLogEntry` is a named type in the TaleWorlds.CampaignSystem.LogEntries namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends LogEntry, IEncyclopediaLog, IChatNotification, IWarLog, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BesiegeSettlementLogEntry`.
- **Instance members** (7): `IsVisibleNotification`, `OwnerClanBeforeBesiege`, `ToString`, `IsRelatedToWar`, `GetNotificationText`, `IsVisibleInEncyclopediaPageOf`, ….
- **Extension points** (1): `ToString`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `GetEncyclopediaText` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetNotificationText` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsRelatedToWar` | method | Instance entry point. Takes 3 arguments: `StanceLink stance`, `out IFaction effector`, `out IFaction effected`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleInEncyclopediaPageOf` | method | Instance entry point. Takes 1 argument: `MBObjectBase obj`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleNotification` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OwnerClanBeforeBesiege` | property | Instance entry point `Clan` property. Read it for current state; a declared setter writes that state in place. |
| `BesiegeSettlementLogEntry` | ctor | Instance entry point. Takes 2 arguments: `MobileParty besiegerParty`, `Settlement settlement`. Returns ``. |

- Constructed as `public BesiegeSettlementLogEntry(MobileParty besiegerParty, Settlement settlement)`.

## Usage Example

```csharp
var besiegeSettlementLogEntry = new BesiegeSettlementLogEntry(besiegerParty, settlement);
besiegeSettlementLogEntry.ToString();
// Read current state through besiegeSettlementLogEntry.IsVisibleNotification.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/LogEntries/BesiegeSettlementLogEntry.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
