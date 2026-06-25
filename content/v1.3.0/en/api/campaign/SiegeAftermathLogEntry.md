---
title: "SiegeAftermathLogEntry"
description: "Auto-generated class reference for SiegeAftermathLogEntry."
---
# SiegeAftermathLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeAftermathLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/SiegeAftermathLogEntry.cs`

## Overview

`SiegeAftermathLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CapturedSettlement` | `public Settlement CapturedSettlement { get; }` |
| `SiegeAftermath` | `public SiegeAftermathAction.SiegeAftermath SiegeAftermath { get; }` |
| `PlayerWasInvolved` | `public bool PlayerWasInvolved { get; }` |

## Key Methods

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** Reads and returns the `importance for clan` value held by the current object.

```csharp
// Obtain an instance of SiegeAftermathLogEntry from the subsystem API first
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
var result = siegeAftermathLogEntry.GetImportanceForClan(clan);
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Reads and returns the `conversation score and comment` value held by the current object.

```csharp
// Obtain an instance of SiegeAftermathLogEntry from the subsystem API first
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
siegeAftermathLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of SiegeAftermathLogEntry from the subsystem API first
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
var result = siegeAftermathLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the `notification text` value held by the current object.

```csharp
// Obtain an instance of SiegeAftermathLogEntry from the subsystem API first
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
var result = siegeAftermathLogEntry.GetNotificationText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeAftermathLogEntry siegeAftermathLogEntry = ...;
siegeAftermathLogEntry.GetImportanceForClan(clan);
```

## See Also

- [Area Index](../)