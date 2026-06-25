---
title: "JournalLog"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JournalLog`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Updates the state or data of `current progress`.

### HasBeenCompleted
`public bool HasBeenCompleted()`

**Purpose:** Checks whether the current object has/contains `been completed`.

### GetTimeText
`public TextObject GetTimeText()`

**Purpose:** Gets the current value of `time text`.

## Usage Example

```csharp
var value = new JournalLog();
value.UpdateCurrentProgress(0);
```

## See Also

- [Complete Class Catalog](../catalog)