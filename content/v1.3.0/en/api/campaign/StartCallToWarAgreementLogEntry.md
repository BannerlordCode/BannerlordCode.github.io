---
title: "StartCallToWarAgreementLogEntry"
description: "Auto-generated class reference for StartCallToWarAgreementLogEntry."
---
# StartCallToWarAgreementLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class StartCallToWarAgreementLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/StartCallToWarAgreementLogEntry.cs`

## Overview

`StartCallToWarAgreementLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of StartCallToWarAgreementLogEntry from the subsystem API first
StartCallToWarAgreementLogEntry startCallToWarAgreementLogEntry = ...;
var result = startCallToWarAgreementLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of StartCallToWarAgreementLogEntry from the subsystem API first
StartCallToWarAgreementLogEntry startCallToWarAgreementLogEntry = ...;
var result = startCallToWarAgreementLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of StartCallToWarAgreementLogEntry from the subsystem API first
StartCallToWarAgreementLogEntry startCallToWarAgreementLogEntry = ...;
var result = startCallToWarAgreementLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StartCallToWarAgreementLogEntry startCallToWarAgreementLogEntry = ...;
startCallToWarAgreementLogEntry.ToString();
```

## See Also

- [Area Index](../)