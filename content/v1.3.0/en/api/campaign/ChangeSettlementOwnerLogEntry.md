---
title: "ChangeSettlementOwnerLogEntry"
description: "Auto-generated class reference for ChangeSettlementOwnerLogEntry."
---
# ChangeSettlementOwnerLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeSettlementOwnerLogEntry : LogEntry, IEncyclopediaLog, IWarLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/ChangeSettlementOwnerLogEntry.cs`

## Overview

`ChangeSettlementOwnerLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** Reads and returns the importance for clan value held by the this instance.

```csharp
// Obtain an instance of ChangeSettlementOwnerLogEntry from the subsystem API first
ChangeSettlementOwnerLogEntry changeSettlementOwnerLogEntry = ...;
var result = changeSettlementOwnerLogEntry.GetImportanceForClan(clan);
```

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Determines whether the this instance is in the related to war state or condition.

```csharp
// Obtain an instance of ChangeSettlementOwnerLogEntry from the subsystem API first
ChangeSettlementOwnerLogEntry changeSettlementOwnerLogEntry = ...;
var result = changeSettlementOwnerLogEntry.IsRelatedToWar(stance, effector, effected);
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Reads and returns the conversation score and comment value held by the this instance.

```csharp
// Obtain an instance of ChangeSettlementOwnerLogEntry from the subsystem API first
ChangeSettlementOwnerLogEntry changeSettlementOwnerLogEntry = ...;
changeSettlementOwnerLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### GetAsRumor
`public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)`

**Purpose:** Reads and returns the as rumor value held by the this instance.

```csharp
// Obtain an instance of ChangeSettlementOwnerLogEntry from the subsystem API first
ChangeSettlementOwnerLogEntry changeSettlementOwnerLogEntry = ...;
var result = changeSettlementOwnerLogEntry.GetAsRumor(talkSettlement, comment);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ChangeSettlementOwnerLogEntry from the subsystem API first
ChangeSettlementOwnerLogEntry changeSettlementOwnerLogEntry = ...;
var result = changeSettlementOwnerLogEntry.ToString();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of ChangeSettlementOwnerLogEntry from the subsystem API first
ChangeSettlementOwnerLogEntry changeSettlementOwnerLogEntry = ...;
var result = changeSettlementOwnerLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChangeSettlementOwnerLogEntry changeSettlementOwnerLogEntry = ...;
changeSettlementOwnerLogEntry.GetImportanceForClan(clan);
```

## See Also

- [Area Index](../)