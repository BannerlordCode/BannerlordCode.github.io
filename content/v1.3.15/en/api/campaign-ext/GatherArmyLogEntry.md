---
title: "GatherArmyLogEntry"
description: "Auto-generated class reference for GatherArmyLogEntry."
---
# GatherArmyLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GatherArmyLogEntry : LogEntry, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/GatherArmyLogEntry.cs`

## Overview

`GatherArmyLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of GatherArmyLogEntry from the subsystem API first
GatherArmyLogEntry gatherArmyLogEntry = ...;
var result = gatherArmyLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of GatherArmyLogEntry from the subsystem API first
GatherArmyLogEntry gatherArmyLogEntry = ...;
var result = gatherArmyLogEntry.GetNotificationText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GatherArmyLogEntry gatherArmyLogEntry = ...;
gatherArmyLogEntry.ToString();
```

## See Also

- [Area Index](../)