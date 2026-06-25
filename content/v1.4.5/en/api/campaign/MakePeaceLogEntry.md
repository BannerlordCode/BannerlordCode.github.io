---
title: "MakePeaceLogEntry"
description: "Auto-generated class reference for MakePeaceLogEntry."
---
# MakePeaceLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MakePeaceLogEntry : LogEntry, IEncyclopediaLog, IChatNotification`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/MakePeaceLogEntry.cs`

## Overview

`MakePeaceLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAsRumor
`public override int GetAsRumor(Settlement talkSettlement, out TextObject comment)`

**Purpose:** **Purpose:** Reads and returns the as rumor value held by the this instance.

```csharp
// Obtain an instance of MakePeaceLogEntry from the subsystem API first
MakePeaceLogEntry makePeaceLogEntry = ...;
var result = makePeaceLogEntry.GetAsRumor(talkSettlement, comment);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MakePeaceLogEntry from the subsystem API first
MakePeaceLogEntry makePeaceLogEntry = ...;
var result = makePeaceLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** **Purpose:** Reads and returns the notification text value held by the this instance.

```csharp
// Obtain an instance of MakePeaceLogEntry from the subsystem API first
MakePeaceLogEntry makePeaceLogEntry = ...;
var result = makePeaceLogEntry.GetNotificationText();
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** **Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of MakePeaceLogEntry from the subsystem API first
MakePeaceLogEntry makePeaceLogEntry = ...;
var result = makePeaceLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MakePeaceLogEntry makePeaceLogEntry = ...;
makePeaceLogEntry.GetAsRumor(talkSettlement, comment);
```

## See Also

- [Area Index](../)