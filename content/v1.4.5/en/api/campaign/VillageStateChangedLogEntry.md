---
title: "VillageStateChangedLogEntry"
description: "Auto-generated class reference for VillageStateChangedLogEntry."
---
# VillageStateChangedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageStateChangedLogEntry : LogEntry, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/VillageStateChangedLogEntry.cs`

## Overview

`VillageStateChangedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Determines whether the this instance is in the related to war state or condition.

```csharp
// Obtain an instance of VillageStateChangedLogEntry from the subsystem API first
VillageStateChangedLogEntry villageStateChangedLogEntry = ...;
var result = villageStateChangedLogEntry.IsRelatedToWar(stance, effector, effected);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of VillageStateChangedLogEntry from the subsystem API first
VillageStateChangedLogEntry villageStateChangedLogEntry = ...;
var result = villageStateChangedLogEntry.ToString();
```

### GetAsRumor
`public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)`

**Purpose:** Reads and returns the as rumor value held by the this instance.

```csharp
// Obtain an instance of VillageStateChangedLogEntry from the subsystem API first
VillageStateChangedLogEntry villageStateChangedLogEntry = ...;
var result = villageStateChangedLogEntry.GetAsRumor(talkSettlement, comment);
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Reads and returns the conversation score and comment value held by the this instance.

```csharp
// Obtain an instance of VillageStateChangedLogEntry from the subsystem API first
VillageStateChangedLogEntry villageStateChangedLogEntry = ...;
villageStateChangedLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VillageStateChangedLogEntry villageStateChangedLogEntry = ...;
villageStateChangedLogEntry.IsRelatedToWar(stance, effector, effected);
```

## See Also

- [Area Index](../)