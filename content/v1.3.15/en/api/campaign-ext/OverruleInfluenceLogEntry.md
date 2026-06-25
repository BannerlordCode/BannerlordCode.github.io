---
title: "OverruleInfluenceLogEntry"
description: "Auto-generated class reference for OverruleInfluenceLogEntry."
---
# OverruleInfluenceLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OverruleInfluenceLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `TaleWorlds.CampaignSystem/LogEntries/OverruleInfluenceLogEntry.cs`

## Overview

`OverruleInfluenceLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |

## Key Methods

### GetHistoricComment
`public override TextObject GetHistoricComment(Hero talkTroop)`

**Purpose:** Reads and returns the historic comment value held by the this instance.

```csharp
// Obtain an instance of OverruleInfluenceLogEntry from the subsystem API first
OverruleInfluenceLogEntry overruleInfluenceLogEntry = ...;
var result = overruleInfluenceLogEntry.GetHistoricComment(talkTroop);
```

### GetValueAsPoliticsAbuseOfPower
`public override int GetValueAsPoliticsAbuseOfPower(Hero referenceTroop, Hero liege)`

**Purpose:** Reads and returns the value as politics abuse of power value held by the this instance.

```csharp
// Obtain an instance of OverruleInfluenceLogEntry from the subsystem API first
OverruleInfluenceLogEntry overruleInfluenceLogEntry = ...;
var result = overruleInfluenceLogEntry.GetValueAsPoliticsAbuseOfPower(referenceTroop, liege);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of OverruleInfluenceLogEntry from the subsystem API first
OverruleInfluenceLogEntry overruleInfluenceLogEntry = ...;
var result = overruleInfluenceLogEntry.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OverruleInfluenceLogEntry overruleInfluenceLogEntry = ...;
overruleInfluenceLogEntry.GetHistoricComment(talkTroop);
```

## See Also

- [Area Index](../)