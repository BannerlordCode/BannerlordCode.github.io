---
title: "MissionArenaPracticeFightVM"
description: "Auto-generated class reference for MissionArenaPracticeFightVM."
---
# MissionArenaPracticeFightVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionArenaPracticeFightVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionArenaPracticeFightVM.cs`

## Overview

`MissionArenaPracticeFightVM` lives in `SandBox.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OpponentsBeatenText` | `public string OpponentsBeatenText { get; set; }` |
| `PrizeText` | `public string PrizeText { get; set; }` |
| `OpponentsRemainingText` | `public string OpponentsRemainingText { get; set; }` |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing { get; set; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionArenaPracticeFightVM from the subsystem API first
MissionArenaPracticeFightVM missionArenaPracticeFightVM = ...;
missionArenaPracticeFightVM.Tick();
```

### UpdatePrizeText
`public void UpdatePrizeText()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of prize text.

```csharp
// Obtain an instance of MissionArenaPracticeFightVM from the subsystem API first
MissionArenaPracticeFightVM missionArenaPracticeFightVM = ...;
missionArenaPracticeFightVM.UpdatePrizeText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionArenaPracticeFightVM missionArenaPracticeFightVM = ...;
missionArenaPracticeFightVM.Tick();
```

## See Also

- [Area Index](../)