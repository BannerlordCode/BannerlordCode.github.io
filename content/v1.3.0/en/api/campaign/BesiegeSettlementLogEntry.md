---
title: "BesiegeSettlementLogEntry"
description: "Auto-generated class reference for BesiegeSettlementLogEntry."
---
# BesiegeSettlementLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BesiegeSettlementLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/BesiegeSettlementLogEntry.cs`

## Overview

`BesiegeSettlementLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `OwnerClanBeforeBesiege` | `public Clan OwnerClanBeforeBesiege { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of BesiegeSettlementLogEntry from the subsystem API first
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.ToString();
```

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Determines whether the this instance is in the related to war state or condition.

```csharp
// Obtain an instance of BesiegeSettlementLogEntry from the subsystem API first
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.IsRelatedToWar(stance, effector, effected);
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of BesiegeSettlementLogEntry from the subsystem API first
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of BesiegeSettlementLogEntry from the subsystem API first
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
var result = besiegeSettlementLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BesiegeSettlementLogEntry besiegeSettlementLogEntry = ...;
besiegeSettlementLogEntry.ToString();
```

## See Also

- [Area Index](../)