---
title: "StartAllianceLogEntry"
description: "Auto-generated class reference for StartAllianceLogEntry."
---
# StartAllianceLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class StartAllianceLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/StartAllianceLogEntry.cs`

## Overview

`StartAllianceLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of StartAllianceLogEntry from the subsystem API first
StartAllianceLogEntry startAllianceLogEntry = ...;
var result = startAllianceLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the `notification text` value held by the current object.

```csharp
// Obtain an instance of StartAllianceLogEntry from the subsystem API first
StartAllianceLogEntry startAllianceLogEntry = ...;
var result = startAllianceLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Reads and returns the `encyclopedia text` value held by the current object.

```csharp
// Obtain an instance of StartAllianceLogEntry from the subsystem API first
StartAllianceLogEntry startAllianceLogEntry = ...;
var result = startAllianceLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StartAllianceLogEntry startAllianceLogEntry = ...;
startAllianceLogEntry.ToString();
```

## See Also

- [Area Index](../)