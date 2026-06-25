---
title: "LogEntryHistory"
description: "Auto-generated class reference for LogEntryHistory."
---
# LogEntryHistory

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LogEntryHistory`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/LogEntries/LogEntryHistory.cs`

## Overview

`LogEntryHistory` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameActionLogs` | `public MBReadOnlyList<LogEntry> GameActionLogs { get; }` |

## Key Methods

### DeleteOutdatedLogs
`public void DeleteOutdatedLogs()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LogEntryHistory from the subsystem API first
LogEntryHistory logEntryHistory = ...;
logEntryHistory.DeleteOutdatedLogs();
```

### GetStartIndexForComments
`public int GetStartIndexForComments()`

**Purpose:** Reads and returns the `start index for comments` value held by the current object.

```csharp
// Obtain an instance of LogEntryHistory from the subsystem API first
LogEntryHistory logEntryHistory = ...;
var result = logEntryHistory.GetStartIndexForComments();
```

### GetRelevantComment
`public LogEntry GetRelevantComment(Hero conversationHero, out int bestScore, out string bestRelatedLogEntryTag)`

**Purpose:** Reads and returns the `relevant comment` value held by the current object.

```csharp
// Obtain an instance of LogEntryHistory from the subsystem API first
LogEntryHistory logEntryHistory = ...;
var result = logEntryHistory.GetRelevantComment(conversationHero, bestScore, bestRelatedLogEntryTag);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LogEntryHistory logEntryHistory = ...;
logEntryHistory.DeleteOutdatedLogs();
```

## See Also

- [Area Index](../)