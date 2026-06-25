---
title: "CharacterKilledLogEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterKilledLogEntry`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterKilledLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterKilledLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/CharacterKilledLogEntry.cs`

## Overview

`CharacterKilledLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AsReasonForEnmity
`public override int AsReasonForEnmity(Hero potentialKiller, Hero potentialRelative)`

**Purpose:** Handles logic related to `as reason for enmity`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetHistoricComment
`public override TextObject GetHistoricComment(Hero talkTroop)`

**Purpose:** Gets the current value of `historic comment`.

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Gets the current value of `notification text`.

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Gets the current value of `encyclopedia text`.

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Handles logic related to `is related to war`.

## Usage Example

```csharp
var value = new CharacterKilledLogEntry();
value.AsReasonForEnmity(potentialKiller, potentialRelative);
```

## See Also

- [Complete Class Catalog](../catalog)