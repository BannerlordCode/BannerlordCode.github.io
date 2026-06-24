<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentWonLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentWonLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentWonLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/TournamentWonLogEntry.cs`

## Overview

`TournamentWonLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Winner` | `public Hero Winner { get; }` |
| `Town` | `public Town Town { get; }` |
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Gets the current value of `encyclopedia text`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Gets the current value of `conversation score and comment`.

### IsValid
`public override bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
var value = new TournamentWonLogEntry();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)