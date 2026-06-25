---
title: "ClanChangeKingdomLogEntry"
description: "Auto-generated class reference for ClanChangeKingdomLogEntry."
---
# ClanChangeKingdomLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanChangeKingdomLogEntry : LogEntry, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ClanChangeKingdomLogEntry.cs`

## Overview

`ClanChangeKingdomLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Determines whether the this instance is in the related to war state or condition.

```csharp
// Obtain an instance of ClanChangeKingdomLogEntry from the subsystem API first
ClanChangeKingdomLogEntry clanChangeKingdomLogEntry = ...;
var result = clanChangeKingdomLogEntry.IsRelatedToWar(stance, effector, effected);
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of ClanChangeKingdomLogEntry from the subsystem API first
ClanChangeKingdomLogEntry clanChangeKingdomLogEntry = ...;
var result = clanChangeKingdomLogEntry.GetNotificationText();
```

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** Reads and returns the importance for clan value held by the this instance.

```csharp
// Obtain an instance of ClanChangeKingdomLogEntry from the subsystem API first
ClanChangeKingdomLogEntry clanChangeKingdomLogEntry = ...;
var result = clanChangeKingdomLogEntry.GetImportanceForClan(clan);
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Reads and returns the conversation score and comment value held by the this instance.

```csharp
// Obtain an instance of ClanChangeKingdomLogEntry from the subsystem API first
ClanChangeKingdomLogEntry clanChangeKingdomLogEntry = ...;
clanChangeKingdomLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ClanChangeKingdomLogEntry from the subsystem API first
ClanChangeKingdomLogEntry clanChangeKingdomLogEntry = ...;
var result = clanChangeKingdomLogEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanChangeKingdomLogEntry clanChangeKingdomLogEntry = ...;
clanChangeKingdomLogEntry.IsRelatedToWar(stance, effector, effected);
```

## See Also

- [Area Index](../)