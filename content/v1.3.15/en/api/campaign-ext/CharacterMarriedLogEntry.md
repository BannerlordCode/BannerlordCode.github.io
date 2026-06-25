---
title: "CharacterMarriedLogEntry"
description: "Auto-generated class reference for CharacterMarriedLogEntry."
---
# CharacterMarriedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterMarriedLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/CharacterMarriedLogEntry.cs`

## Overview

`CharacterMarriedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of CharacterMarriedLogEntry from the subsystem API first
CharacterMarriedLogEntry characterMarriedLogEntry = ...;
var result = characterMarriedLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of CharacterMarriedLogEntry from the subsystem API first
CharacterMarriedLogEntry characterMarriedLogEntry = ...;
var result = characterMarriedLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** **Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of CharacterMarriedLogEntry from the subsystem API first
CharacterMarriedLogEntry characterMarriedLogEntry = ...;
var result = characterMarriedLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterMarriedLogEntry characterMarriedLogEntry = ...;
characterMarriedLogEntry.ToString();
```

## See Also

- [Area Index](../)