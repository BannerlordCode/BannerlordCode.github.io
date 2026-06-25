---
title: "ChangeAlleyOwnerLogEntry"
description: "Auto-generated class reference for ChangeAlleyOwnerLogEntry."
---
# ChangeAlleyOwnerLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeAlleyOwnerLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/ChangeAlleyOwnerLogEntry.cs`

## Overview

`ChangeAlleyOwnerLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## Key Methods

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of ChangeAlleyOwnerLogEntry from the subsystem API first
ChangeAlleyOwnerLogEntry changeAlleyOwnerLogEntry = ...;
var result = changeAlleyOwnerLogEntry.GetNotificationText();
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** **Purpose:** Reads and returns the conversation score and comment value held by the this instance.

```csharp
// Obtain an instance of ChangeAlleyOwnerLogEntry from the subsystem API first
ChangeAlleyOwnerLogEntry changeAlleyOwnerLogEntry = ...;
changeAlleyOwnerLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** **Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of ChangeAlleyOwnerLogEntry from the subsystem API first
ChangeAlleyOwnerLogEntry changeAlleyOwnerLogEntry = ...;
var result = changeAlleyOwnerLogEntry.GetEncyclopediaText();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ChangeAlleyOwnerLogEntry from the subsystem API first
ChangeAlleyOwnerLogEntry changeAlleyOwnerLogEntry = ...;
var result = changeAlleyOwnerLogEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChangeAlleyOwnerLogEntry changeAlleyOwnerLogEntry = ...;
changeAlleyOwnerLogEntry.GetNotificationText();
```

## See Also

- [Area Index](../)