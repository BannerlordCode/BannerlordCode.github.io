---
title: "KingdomDecisionConcludedLogEntry"
description: "Auto-generated class reference for KingdomDecisionConcludedLogEntry."
---
# KingdomDecisionConcludedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDecisionConcludedLogEntry : LogEntry, IChatNotification`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/KingdomDecisionConcludedLogEntry.cs`

## Overview

`KingdomDecisionConcludedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of KingdomDecisionConcludedLogEntry from the subsystem API first
KingdomDecisionConcludedLogEntry kingdomDecisionConcludedLogEntry = ...;
var result = kingdomDecisionConcludedLogEntry.ToString();
```

### GetNotificationText
`public TextObject GetNotificationText()`

**Purpose:** Reads and returns the `notification text` value held by the current object.

```csharp
// Obtain an instance of KingdomDecisionConcludedLogEntry from the subsystem API first
KingdomDecisionConcludedLogEntry kingdomDecisionConcludedLogEntry = ...;
var result = kingdomDecisionConcludedLogEntry.GetNotificationText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomDecisionConcludedLogEntry kingdomDecisionConcludedLogEntry = ...;
kingdomDecisionConcludedLogEntry.ToString();
```

## See Also

- [Area Index](../)