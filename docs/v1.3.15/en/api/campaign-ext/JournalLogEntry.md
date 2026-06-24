<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JournalLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JournalLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JournalLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/JournalLogEntry.cs`

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

**Purpose:** Handles logic related to `is related to`.

### GetEntries
`public IEnumerable<JournalLog> GetEntries()`

**Purpose:** Gets the current value of `entries`.

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, IssueBase.IssueUpdateDetails issueStatus = IssueBase.IssueUpdateDetails.None)`

**Purpose:** Updates the state or data of `update`.

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, QuestBase.QuestCompleteDetails questCompletionDetail)`

**Purpose:** Updates the state or data of `update`.

### IsEndedUnsuccessfully
`public bool IsEndedUnsuccessfully()`

**Purpose:** Handles logic related to `is ended unsuccessfully`.

### IsEnded
`public bool IsEnded()`

**Purpose:** Handles logic related to `is ended`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new JournalLogEntry();
value.IsRelatedTo(obj);
```

## See Also

- [Complete Class Catalog](../catalog)