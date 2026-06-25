---
title: "PlayerMeetLordLogEntry"
description: "Auto-generated class reference for PlayerMeetLordLogEntry."
---
# PlayerMeetLordLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerMeetLordLogEntry : LogEntry, IEncyclopediaLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/PlayerMeetLordLogEntry.cs`

## Overview

`PlayerMeetLordLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetImportanceForClan
`public override ImportanceEnum GetImportanceForClan(Clan clan)`

**Purpose:** **Purpose:** Reads and returns the importance for clan value held by the this instance.

```csharp
// Obtain an instance of PlayerMeetLordLogEntry from the subsystem API first
PlayerMeetLordLogEntry playerMeetLordLogEntry = ...;
var result = playerMeetLordLogEntry.GetImportanceForClan(clan);
```

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** **Purpose:** Reads and returns the conversation score and comment value held by the this instance.

```csharp
// Obtain an instance of PlayerMeetLordLogEntry from the subsystem API first
PlayerMeetLordLogEntry playerMeetLordLogEntry = ...;
playerMeetLordLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PlayerMeetLordLogEntry from the subsystem API first
PlayerMeetLordLogEntry playerMeetLordLogEntry = ...;
var result = playerMeetLordLogEntry.ToString();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** **Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of PlayerMeetLordLogEntry from the subsystem API first
PlayerMeetLordLogEntry playerMeetLordLogEntry = ...;
var result = playerMeetLordLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerMeetLordLogEntry playerMeetLordLogEntry = ...;
playerMeetLordLogEntry.GetImportanceForClan(clan);
```

## See Also

- [Area Index](../)