---
title: "EndCaptivityLogEntry"
description: "Auto-generated class reference for EndCaptivityLogEntry."
---
# EndCaptivityLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EndCaptivityLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/EndCaptivityLogEntry.cs`

## Overview

`EndCaptivityLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Detail` | `public EndCaptivityDetail Detail { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of EndCaptivityLogEntry from the subsystem API first
EndCaptivityLogEntry endCaptivityLogEntry = ...;
var result = endCaptivityLogEntry.ToString();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** **Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of EndCaptivityLogEntry from the subsystem API first
EndCaptivityLogEntry endCaptivityLogEntry = ...;
var result = endCaptivityLogEntry.GetEncyclopediaText();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of EndCaptivityLogEntry from the subsystem API first
EndCaptivityLogEntry endCaptivityLogEntry = ...;
var result = endCaptivityLogEntry.GetNotificationText();
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** **Purpose:** Reads and returns the conversation score and comment value held by the this instance.

```csharp
// Obtain an instance of EndCaptivityLogEntry from the subsystem API first
EndCaptivityLogEntry endCaptivityLogEntry = ...;
endCaptivityLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### IsValid
`public override bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of EndCaptivityLogEntry from the subsystem API first
EndCaptivityLogEntry endCaptivityLogEntry = ...;
var result = endCaptivityLogEntry.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EndCaptivityLogEntry endCaptivityLogEntry = ...;
endCaptivityLogEntry.ToString();
```

## See Also

- [Area Index](../)