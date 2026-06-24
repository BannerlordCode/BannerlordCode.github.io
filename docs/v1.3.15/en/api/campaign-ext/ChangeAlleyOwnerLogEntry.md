<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeAlleyOwnerLogEntry`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeAlleyOwnerLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeAlleyOwnerLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/ChangeAlleyOwnerLogEntry.cs`

## Overview

`ChangeAlleyOwnerLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |

## Key Methods

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Gets the current value of `conversation score and comment`.

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Gets the current value of `encyclopedia text`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new ChangeAlleyOwnerLogEntry();
value.GetNotificationText();
```

## See Also

- [Complete Class Catalog](../catalog)