---
title: "QuestSettlement"
description: "Auto-generated class reference for QuestSettlement."
---
# QuestSettlement

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestSettlement`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Issues/ScoutEnemyGarrisonsIssueBehavior.cs`

## Overview

`QuestSettlement` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsScoutingCompleted
`public bool IsScoutingCompleted()`

**Purpose:** Determines whether the current object is in the `scouting completed` state or condition.

```csharp
// Obtain an instance of QuestSettlement from the subsystem API first
QuestSettlement questSettlement = ...;
var result = questSettlement.IsScoutingCompleted();
```

### SetScoutingCompleted
`public void SetScoutingCompleted()`

**Purpose:** Assigns a new value to `scouting completed` and updates the object's internal state.

```csharp
// Obtain an instance of QuestSettlement from the subsystem API first
QuestSettlement questSettlement = ...;
questSettlement.SetScoutingCompleted();
```

### ResetCurrentProgress
`public void ResetCurrentProgress()`

**Purpose:** Returns `current progress` to its default or initial condition.

```csharp
// Obtain an instance of QuestSettlement from the subsystem API first
QuestSettlement questSettlement = ...;
questSettlement.ResetCurrentProgress();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestSettlement questSettlement = ...;
questSettlement.IsScoutingCompleted();
```

## See Also

- [Area Index](../)