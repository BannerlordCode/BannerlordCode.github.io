---
title: "TakePrisonerLogEntry"
description: "Auto-generated class reference for TakePrisonerLogEntry."
---
# TakePrisonerLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TakePrisonerLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/TakePrisonerLogEntry.cs`

## Overview

`TakePrisonerLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## Key Methods

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** **Purpose:** Determines whether the this instance is in the related to war state or condition.

```csharp
// Obtain an instance of TakePrisonerLogEntry from the subsystem API first
TakePrisonerLogEntry takePrisonerLogEntry = ...;
var result = takePrisonerLogEntry.IsRelatedToWar(stance, effector, effected);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of TakePrisonerLogEntry from the subsystem API first
TakePrisonerLogEntry takePrisonerLogEntry = ...;
var result = takePrisonerLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of TakePrisonerLogEntry from the subsystem API first
TakePrisonerLogEntry takePrisonerLogEntry = ...;
var result = takePrisonerLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** **Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of TakePrisonerLogEntry from the subsystem API first
TakePrisonerLogEntry takePrisonerLogEntry = ...;
var result = takePrisonerLogEntry.GetEncyclopediaText();
```

### IsValid
`public override bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of TakePrisonerLogEntry from the subsystem API first
TakePrisonerLogEntry takePrisonerLogEntry = ...;
var result = takePrisonerLogEntry.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TakePrisonerLogEntry takePrisonerLogEntry = ...;
takePrisonerLogEntry.IsRelatedToWar(stance, effector, effected);
```

## See Also

- [Area Index](../)