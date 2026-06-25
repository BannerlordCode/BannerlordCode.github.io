---
title: "CharacterKilledLogEntry"
description: "Auto-generated class reference for CharacterKilledLogEntry."
---
# CharacterKilledLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterKilledLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/CharacterKilledLogEntry.cs`

## Overview

`CharacterKilledLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AsReasonForEnmity
`public override int AsReasonForEnmity(Hero potentialKiller, Hero potentialRelative)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterKilledLogEntry from the subsystem API first
CharacterKilledLogEntry characterKilledLogEntry = ...;
var result = characterKilledLogEntry.AsReasonForEnmity(potentialKiller, potentialRelative);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of CharacterKilledLogEntry from the subsystem API first
CharacterKilledLogEntry characterKilledLogEntry = ...;
var result = characterKilledLogEntry.ToString();
```

### GetHistoricComment
`public override TextObject GetHistoricComment(Hero talkTroop)`

**Purpose:** Reads and returns the `historic comment` value held by the current object.

```csharp
// Obtain an instance of CharacterKilledLogEntry from the subsystem API first
CharacterKilledLogEntry characterKilledLogEntry = ...;
var result = characterKilledLogEntry.GetHistoricComment(talkTroop);
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the `notification text` value held by the current object.

```csharp
// Obtain an instance of CharacterKilledLogEntry from the subsystem API first
CharacterKilledLogEntry characterKilledLogEntry = ...;
var result = characterKilledLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Reads and returns the `encyclopedia text` value held by the current object.

```csharp
// Obtain an instance of CharacterKilledLogEntry from the subsystem API first
CharacterKilledLogEntry characterKilledLogEntry = ...;
var result = characterKilledLogEntry.GetEncyclopediaText();
```

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Determines whether the current object is in the `related to war` state or condition.

```csharp
// Obtain an instance of CharacterKilledLogEntry from the subsystem API first
CharacterKilledLogEntry characterKilledLogEntry = ...;
var result = characterKilledLogEntry.IsRelatedToWar(stance, effector, effected);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterKilledLogEntry characterKilledLogEntry = ...;
characterKilledLogEntry.AsReasonForEnmity(potentialKiller, potentialRelative);
```

## See Also

- [Area Index](../)