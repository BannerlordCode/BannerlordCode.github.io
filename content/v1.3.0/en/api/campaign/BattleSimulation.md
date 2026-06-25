---
title: "BattleSimulation"
description: "Auto-generated class reference for BattleSimulation."
---
# BattleSimulation

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BattleSimulation : IBattleObserver`
**Base:** `IBattleObserver`
**File:** `TaleWorlds.CampaignSystem/BattleSimulation.cs`

## Overview

`BattleSimulation` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSimulationFinished` | `public bool IsSimulationFinished { get; }` |
| `MapEvent` | `public MapEvent MapEvent { get; set; }` |
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |
| `Teams` | `public List<List<BattleResultPartyData>> Teams { get; }` |

## Key Methods

### Play
`public void Play()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.Play();
```

### FastForward
`public void FastForward()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.FastForward();
```

### Skip
`public void Skip()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.Skip();
```

### Pause
`public void Pause()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.Pause();
```

### OnReturn
`public void OnReturn()`

**Purpose:** Invoked when the `return` event is raised.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.OnReturn();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.Tick(0);
```

### ResetSimulation
`public void ResetSimulation()`

**Purpose:** Returns `simulation` to its default or initial condition.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.ResetSimulation();
```

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.TroopNumberChanged(side, battleCombatant, character, 0, 0, 0, 0, 0, 0);
```

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.HeroSkillIncreased(side, battleCombatant, heroCharacter, skill);
```

### BattleResultsReady
`public void BattleResultsReady()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.BattleResultsReady();
```

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BattleSimulation from the subsystem API first
BattleSimulation battleSimulation = ...;
battleSimulation.TroopSideChanged(prevSide, newSide, battleCombatant, character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BattleSimulation battleSimulation = ...;
battleSimulation.Play();
```

## See Also

- [Area Index](../)