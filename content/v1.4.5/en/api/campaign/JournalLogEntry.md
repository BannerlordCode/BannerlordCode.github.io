---
title: "JournalLogEntry"
description: "Auto-generated class reference for JournalLogEntry."
---
# JournalLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JournalLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/JournalLogEntry.cs`

## Overview

`JournalLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |

## Key Methods

### IsRelatedTo
`public bool IsRelatedTo(MBObjectBase obj)`

**Purpose:** Determines whether the this instance is in the related to state or condition.

```csharp
// Obtain an instance of JournalLogEntry from the subsystem API first
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.IsRelatedTo(obj);
```

### GetEntries
`public IEnumerable<JournalLog> GetEntries()`

**Purpose:** Reads and returns the entries value held by the this instance.

```csharp
// Obtain an instance of JournalLogEntry from the subsystem API first
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.GetEntries();
```

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, IssueBase.IssueUpdateDetails issueStatus = IssueBase.IssueUpdateDetails.None)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of JournalLogEntry from the subsystem API first
JournalLogEntry journalLogEntry = ...;
journalLogEntry.Update(entries, issueBase.IssueUpdateDetails.None);
```

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, QuestBase.QuestCompleteDetails questCompletionDetail)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of JournalLogEntry from the subsystem API first
JournalLogEntry journalLogEntry = ...;
journalLogEntry.Update(entries, questCompletionDetail);
```

### IsEndedUnsuccessfully
`public bool IsEndedUnsuccessfully()`

**Purpose:** Determines whether the this instance is in the ended unsuccessfully state or condition.

```csharp
// Obtain an instance of JournalLogEntry from the subsystem API first
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.IsEndedUnsuccessfully();
```

### IsEnded
`public bool IsEnded()`

**Purpose:** Determines whether the this instance is in the ended state or condition.

```csharp
// Obtain an instance of JournalLogEntry from the subsystem API first
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.IsEnded();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of JournalLogEntry from the subsystem API first
JournalLogEntry journalLogEntry = ...;
var result = journalLogEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
JournalLogEntry journalLogEntry = ...;
journalLogEntry.IsRelatedTo(obj);
```

## See Also

- [Area Index](../)