---
title: "LogEntry"
description: "Auto-generated class reference for LogEntry."
---
# LogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LogEntry`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/LogEntries/LogEntry.cs`

## Overview

`LogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public long Id { get; }` |
| `GameTime` | `public CampaignTime GameTime { get; }` |
| `KeepInHistoryTime` | `public virtual CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public virtual ChatNotificationType NotificationType { get; }` |

## Key Methods

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry)`

**Purpose:** **Purpose:** Adds log entry to the current collection or state.

```csharp
// Static call; no instance required
LogEntry.AddLogEntry(logEntry);
```

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry, CampaignTime gameTime)`

**Purpose:** **Purpose:** Adds log entry to the current collection or state.

```csharp
// Static call; no instance required
LogEntry.AddLogEntry(logEntry, gameTime);
```

### GetImportanceForClan
`public virtual ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** **Purpose:** Reads and returns the importance for clan value held by the this instance.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.GetImportanceForClan(clan);
```

### GetConversationScoreAndComment
`public virtual void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** **Purpose:** Reads and returns the conversation score and comment value held by the this instance.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
logEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### GetAsRumor
`public virtual int GetAsRumor(Settlement settlement, out TextObject comment)`

**Purpose:** **Purpose:** Reads and returns the as rumor value held by the this instance.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.GetAsRumor(settlement, comment);
```

### GetHistoricComment
`public virtual TextObject GetHistoricComment(Hero talkTroop)`

**Purpose:** **Purpose:** Reads and returns the historic comment value held by the this instance.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.GetHistoricComment(talkTroop);
```

### AsReasonForEnmity
`public virtual int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)`

**Purpose:** **Purpose:** Executes the AsReasonForEnmity logic.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.AsReasonForEnmity(referenceHero1, referenceHero2);
```

### GetValueAsPoliticsAbuseOfPower
`public virtual int GetValueAsPoliticsAbuseOfPower(Hero referenceTroop, Hero liege)`

**Purpose:** **Purpose:** Reads and returns the value as politics abuse of power value held by the this instance.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.GetValueAsPoliticsAbuseOfPower(referenceTroop, liege);
```

### GetValueAsPoliticsSlightedClan
`public virtual int GetValueAsPoliticsSlightedClan(Hero referenceTroop, Hero liege)`

**Purpose:** **Purpose:** Reads and returns the value as politics slighted clan value held by the this instance.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.GetValueAsPoliticsSlightedClan(referenceTroop, liege);
```

### GetValueAsPoliticsShowedWeakness
`public virtual int GetValueAsPoliticsShowedWeakness(Hero referenceTroop, Hero liege)`

**Purpose:** **Purpose:** Reads and returns the value as politics showed weakness value held by the this instance.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.GetValueAsPoliticsShowedWeakness(referenceTroop, liege);
```

### IsValid
`public virtual bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of LogEntry from the subsystem API first
LogEntry logEntry = ...;
var result = logEntry.IsValid();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
LogEntry instance = ...;
```

## See Also

- [Area Index](../)