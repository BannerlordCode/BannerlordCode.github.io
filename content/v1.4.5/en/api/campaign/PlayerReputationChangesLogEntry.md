---
title: "PlayerReputationChangesLogEntry"
description: "Auto-generated class reference for PlayerReputationChangesLogEntry."
---
# PlayerReputationChangesLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerReputationChangesLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/PlayerReputationChangesLogEntry.cs`

## Overview

`PlayerReputationChangesLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetConversationScoreAndComment
`public override void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**Purpose:** Reads and returns the `conversation score and comment` value held by the current object.

```csharp
// Obtain an instance of PlayerReputationChangesLogEntry from the subsystem API first
PlayerReputationChangesLogEntry playerReputationChangesLogEntry = ...;
playerReputationChangesLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of PlayerReputationChangesLogEntry from the subsystem API first
PlayerReputationChangesLogEntry playerReputationChangesLogEntry = ...;
var result = playerReputationChangesLogEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerReputationChangesLogEntry playerReputationChangesLogEntry = ...;
playerReputationChangesLogEntry.GetConversationScoreAndComment(talkTroop, false, comment, score);
```

## See Also

- [Area Index](../)