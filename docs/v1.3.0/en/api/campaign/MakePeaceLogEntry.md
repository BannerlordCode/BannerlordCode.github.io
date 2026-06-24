<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MakePeaceLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MakePeaceLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MakePeaceLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/MakePeaceLogEntry.cs`

## Overview

`MakePeaceLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## Key Methods

### GetAsRumor
`public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)`

**Purpose:** Gets the current value of `as rumor`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Gets the current value of `encyclopedia text`.

## Usage Example

```csharp
var value = new MakePeaceLogEntry();
value.GetAsRumor(talkSettlement, comment);
```

## See Also

- [Complete Class Catalog](../catalog)