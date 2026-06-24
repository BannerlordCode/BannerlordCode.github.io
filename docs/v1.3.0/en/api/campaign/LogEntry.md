<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LogEntry`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/LogEntries/LogEntry.cs`

## Overview

`LogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public long Id { get; }` |
| `GameTime` | `public CampaignTime GameTime { get; }` |
| `KeepInHistoryTime` | `public virtual CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public virtual ChatNotificationType NotificationType { get; }` |

## Key Methods

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry)`

**Purpose:** Adds `log entry` to the current collection or state.

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry, CampaignTime gameTime)`

**Purpose:** Adds `log entry` to the current collection or state.

### GetImportanceForClan
`public virtual ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** Gets the current value of `importance for clan`.

### GetConversationScoreAndComment
`public virtual void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Gets the current value of `conversation score and comment`.

### GetAsRumor
`public virtual int GetAsRumor(Settlement settlement, out TextObject comment)`

**Purpose:** Gets the current value of `as rumor`.

### GetHistoricComment
`public virtual TextObject GetHistoricComment(Hero talkTroop)`

**Purpose:** Gets the current value of `historic comment`.

### AsReasonForEnmity
`public virtual int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)`

**Purpose:** Handles logic related to `as reason for enmity`.

### GetValueAsPoliticsAbuseOfPower
`public virtual int GetValueAsPoliticsAbuseOfPower(Hero referenceTroop, Hero liege)`

**Purpose:** Gets the current value of `value as politics abuse of power`.

### GetValueAsPoliticsSlightedClan
`public virtual int GetValueAsPoliticsSlightedClan(Hero referenceTroop, Hero liege)`

**Purpose:** Gets the current value of `value as politics slighted clan`.

### GetValueAsPoliticsShowedWeakness
`public virtual int GetValueAsPoliticsShowedWeakness(Hero referenceTroop, Hero liege)`

**Purpose:** Gets the current value of `value as politics showed weakness`.

### IsValid
`public virtual bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

## Usage Example

```csharp
var implementation = new CustomLogEntry();
```

## See Also

- [Complete Class Catalog](../catalog)