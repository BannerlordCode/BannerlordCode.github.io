<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleSimulation`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleSimulation

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BattleSimulation : IBattleObserver`
**Base:** `IBattleObserver`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/BattleSimulation.cs`

## Overview

`BattleSimulation` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSimulationFinished` | `public bool IsSimulationFinished { get; }` |
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |
| `Teams` | `public List<List<BattleResultPartyData>> Teams { get; }` |

## Key Methods

### Play
`public void Play()`

**Purpose:** Handles logic related to `play`.

### FastForward
`public void FastForward()`

**Purpose:** Handles logic related to `fast forward`.

### Skip
`public void Skip()`

**Purpose:** Handles logic related to `skip`.

### Pause
`public void Pause()`

**Purpose:** Handles logic related to `pause`.

### OnFinished
`public void OnFinished()`

**Purpose:** Called when the `finished` event is raised.

### OnPlayerRetreat
`public void OnPlayerRetreat()`

**Purpose:** Called when the `player retreat` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### ResetSimulation
`public void ResetSimulation()`

**Purpose:** Resets `simulation` to its initial state.

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberKilled = 0, int numberWounded = 0, int numberRouted = 0, int killCount = 0, int numberReadyToUpgrade = 0)`

**Purpose:** Handles logic related to `troop number changed`.

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject skill)`

**Purpose:** Handles logic related to `hero skill increased`.

### BattleResultsReady
`public void BattleResultsReady()`

**Purpose:** Handles logic related to `battle results ready`.

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**Purpose:** Handles logic related to `troop side changed`.

## Usage Example

```csharp
var value = new BattleSimulation();
value.Play();
```

## See Also

- [Complete Class Catalog](../catalog)