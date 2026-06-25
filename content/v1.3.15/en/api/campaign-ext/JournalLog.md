---
title: "JournalLog"
description: "Auto-generated class reference for JournalLog."
---
# JournalLog

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JournalLog`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/JournalLog.cs`

## Overview

`JournalLog` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentProgress` | `public int CurrentProgress { get; }` |

## Key Methods

### UpdateCurrentProgress
`public void UpdateCurrentProgress(int progress)`

**Purpose:** Recalculates and stores the latest representation of current progress.

```csharp
// Obtain an instance of JournalLog from the subsystem API first
JournalLog journalLog = ...;
journalLog.UpdateCurrentProgress(0);
```

### HasBeenCompleted
`public bool HasBeenCompleted()`

**Purpose:** Determines whether the this instance already holds been completed.

```csharp
// Obtain an instance of JournalLog from the subsystem API first
JournalLog journalLog = ...;
var result = journalLog.HasBeenCompleted();
```

### GetTimeText
`public TextObject GetTimeText()`

**Purpose:** Reads and returns the time text value held by the this instance.

```csharp
// Obtain an instance of JournalLog from the subsystem API first
JournalLog journalLog = ...;
var result = journalLog.GetTimeText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
JournalLog journalLog = ...;
journalLog.UpdateCurrentProgress(0);
```

## See Also

- [Area Index](../)