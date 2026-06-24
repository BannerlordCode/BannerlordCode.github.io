<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LogEntryHistory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `delete outdated logs`.

### GetStartIndexForComments
`public int GetStartIndexForComments()`

**Purpose:** Gets the current value of `start index for comments`.

### GetRelevantComment
`public LogEntry GetRelevantComment(Hero conversationHero, out int bestScore, out string bestRelatedLogEntryTag)`

**Purpose:** Gets the current value of `relevant comment`.

## Usage Example

```csharp
var value = new LogEntryHistory();
value.DeleteOutdatedLogs();
```

## See Also

- [Complete Class Catalog](../catalog)