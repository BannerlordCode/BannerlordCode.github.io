<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageStateChangedLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VillageStateChangedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageStateChangedLogEntry : LogEntry, IWarLog`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/VillageStateChangedLogEntry.cs`

## Overview

`VillageStateChangedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Handles logic related to `is related to war`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetAsRumor
`public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)`

**Purpose:** Gets the current value of `as rumor`.

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Gets the current value of `conversation score and comment`.

## Usage Example

```csharp
var value = new VillageStateChangedLogEntry();
value.IsRelatedToWar(stance, effector, effected);
```

## See Also

- [Complete Class Catalog](../catalog)