<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeSettlementOwnerLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeSettlementOwnerLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeSettlementOwnerLogEntry : LogEntry, IEncyclopediaLog, IWarLog`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ChangeSettlementOwnerLogEntry.cs`

## Overview

`ChangeSettlementOwnerLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** Gets the current value of `importance for clan`.

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Handles logic related to `is related to war`.

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Gets the current value of `conversation score and comment`.

### GetAsRumor
`public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)`

**Purpose:** Gets the current value of `as rumor`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Gets the current value of `encyclopedia text`.

## Usage Example

```csharp
var value = new ChangeSettlementOwnerLogEntry();
value.GetImportanceForClan(clan);
```

## See Also

- [Complete Class Catalog](../catalog)