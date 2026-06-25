---
title: "ArmyCreationLogEntry"
description: "Auto-generated class reference for ArmyCreationLogEntry."
---
# ArmyCreationLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyCreationLogEntry : LogEntry, IEncyclopediaLog, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ArmyCreationLogEntry.cs`

## Overview

`ArmyCreationLogEntry` lives in `TaleWorlds.CampaignSystem.LogEntries` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.LogEntries` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ArmyCreationLogEntry from the subsystem API first
ArmyCreationLogEntry armyCreationLogEntry = ...;
var result = armyCreationLogEntry.ToString();
```

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**Purpose:** Determines whether the this instance is in the related to war state or condition.

```csharp
// Obtain an instance of ArmyCreationLogEntry from the subsystem API first
ArmyCreationLogEntry armyCreationLogEntry = ...;
var result = armyCreationLogEntry.IsRelatedToWar(stance, effector, effected);
```

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**Purpose:** Reads and returns the encyclopedia text value held by the this instance.

```csharp
// Obtain an instance of ArmyCreationLogEntry from the subsystem API first
ArmyCreationLogEntry armyCreationLogEntry = ...;
var result = armyCreationLogEntry.GetEncyclopediaText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyCreationLogEntry armyCreationLogEntry = ...;
armyCreationLogEntry.ToString();
```

## See Also

- [Area Index](../)