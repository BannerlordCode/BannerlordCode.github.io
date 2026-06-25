---
title: "KingdomDecisionAddedLogEntry"
description: "Auto-generated class reference for KingdomDecisionAddedLogEntry."
---
# KingdomDecisionAddedLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDecisionAddedLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/KingdomDecisionAddedLogEntry.cs`

## Overview

`KingdomDecisionAddedLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of KingdomDecisionAddedLogEntry from the subsystem API first
KingdomDecisionAddedLogEntry kingdomDecisionAddedLogEntry = ...;
var result = kingdomDecisionAddedLogEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomDecisionAddedLogEntry kingdomDecisionAddedLogEntry = ...;
kingdomDecisionAddedLogEntry.ToString();
```

## See Also

- [Area Index](../)