<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanChangeKingdomLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanChangeKingdomLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanChangeKingdomLogEntry : LogEntry, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/ClanChangeKingdomLogEntry.cs`

## Overview

`ClanChangeKingdomLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisibleNotification` | `public bool IsVisibleNotification { get; }` |
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## Key Methods

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Handles logic related to `is related to war`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** Gets the current value of `importance for clan`.

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Gets the current value of `conversation score and comment`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new ClanChangeKingdomLogEntry();
value.IsRelatedToWar(stance, effector, effected);
```

## See Also

- [Complete Class Catalog](../catalog)