<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeAftermathLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeAftermathLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeAftermathLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/SiegeAftermathLogEntry.cs`

## Overview

`SiegeAftermathLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** Gets the current value of `importance for clan`.

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Gets the current value of `conversation score and comment`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

## Usage Example

```csharp
var value = new SiegeAftermathLogEntry();
value.GetImportanceForClan(clan);
```

## See Also

- [Complete Class Catalog](../catalog)