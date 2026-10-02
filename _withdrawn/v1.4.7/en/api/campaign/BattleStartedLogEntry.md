---
title: "BattleStartedLogEntry"
description: "BattleStartedLogEntry — class in TaleWorlds.CampaignSystem.LogEntries. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# BattleStartedLogEntry

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BattleStartedLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`  
**Base:** `LogEntry, IEncyclopediaLog, IChatNotification`  
**Source:** `TaleWorlds.CampaignSystem/LogEntries/BattleStartedLogEntry.cs`

## Overview

`BattleStartedLogEntry` is a named type in the TaleWorlds.CampaignSystem.LogEntries namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends LogEntry, IEncyclopediaLog, IChatNotification, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BattleStartedLogEntry`.
- **Instance members** (6): `IsVisibleNotification`, `NotificationType`, `ToString`, `GetNotificationText`, `IsVisibleInEncyclopediaPageOf`, `GetEncyclopediaText`.
- **Extension points** (2): `NotificationType`, `ToString`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `NotificationType` | property (override) | Overrides the base member `ChatNotificationType` property. Read it for current state; a declared setter writes that state in place. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `GetEncyclopediaText` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetNotificationText` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsVisibleInEncyclopediaPageOf` | method | Instance entry point. Takes 1 argument: `MBObjectBase obj`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleNotification` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `BattleStartedLogEntry` | ctor | Instance entry point. Takes 3 arguments: `PartyBase attackerParty`, `PartyBase defenderParty`, `object subject`. Returns ``. |

- Constructed as `public BattleStartedLogEntry(PartyBase attackerParty, PartyBase defenderParty, object subject)`.

## Usage Example

```csharp
var battleStartedLogEntry = new BattleStartedLogEntry(attackerParty, defenderParty, subject);
battleStartedLogEntry.ToString();
// Read current state through battleStartedLogEntry.IsVisibleNotification.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/LogEntries/BattleStartedLogEntry.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
