---
title: "CharacterInsultedLogEntry"
description: "Auto-generated class reference for CharacterInsultedLogEntry."
---
# CharacterInsultedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterInsultedLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/CharacterInsultedLogEntry.cs`

## Overview

`CharacterInsultedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## Key Methods

### GetHistoricComment
`public override TextObject GetHistoricComment(Hero talkTroop)`

**Purpose:** **Purpose:** Reads and returns the historic comment value held by the this instance.

```csharp
// Obtain an instance of CharacterInsultedLogEntry from the subsystem API first
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.GetHistoricComment(talkTroop);
```

### AsReasonForEnmity
`public override int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)`

**Purpose:** **Purpose:** Executes the AsReasonForEnmity logic.

```csharp
// Obtain an instance of CharacterInsultedLogEntry from the subsystem API first
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.AsReasonForEnmity(referenceHero1, referenceHero2);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of CharacterInsultedLogEntry from the subsystem API first
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of CharacterInsultedLogEntry from the subsystem API first
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** **Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of CharacterInsultedLogEntry from the subsystem API first
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
var result = characterInsultedLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterInsultedLogEntry characterInsultedLogEntry = ...;
characterInsultedLogEntry.GetHistoricComment(talkTroop);
```

## See Also

- [Area Index](../)