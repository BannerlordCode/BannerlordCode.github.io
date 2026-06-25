---
title: "MercenaryClanChangedKingdomLogEntry"
description: "Auto-generated class reference for MercenaryClanChangedKingdomLogEntry."
---
# MercenaryClanChangedKingdomLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MercenaryClanChangedKingdomLogEntry : LogEntry, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/MercenaryClanChangedKingdomLogEntry.cs`

## Overview

`MercenaryClanChangedKingdomLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## Key Methods

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** **Purpose:** Determines whether the this instance is in the related to war state or condition.

```csharp
// Obtain an instance of MercenaryClanChangedKingdomLogEntry from the subsystem API first
MercenaryClanChangedKingdomLogEntry mercenaryClanChangedKingdomLogEntry = ...;
var result = mercenaryClanChangedKingdomLogEntry.IsRelatedToWar(stance, effector, effected);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MercenaryClanChangedKingdomLogEntry from the subsystem API first
MercenaryClanChangedKingdomLogEntry mercenaryClanChangedKingdomLogEntry = ...;
var result = mercenaryClanChangedKingdomLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of MercenaryClanChangedKingdomLogEntry from the subsystem API first
MercenaryClanChangedKingdomLogEntry mercenaryClanChangedKingdomLogEntry = ...;
var result = mercenaryClanChangedKingdomLogEntry.GetNotificationText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MercenaryClanChangedKingdomLogEntry mercenaryClanChangedKingdomLogEntry = ...;
mercenaryClanChangedKingdomLogEntry.IsRelatedToWar(stance, effector, effected);
```

## See Also

- [Area Index](../)