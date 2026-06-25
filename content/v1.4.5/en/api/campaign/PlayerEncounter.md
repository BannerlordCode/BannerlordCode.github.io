---
title: "PlayerEncounter"
description: "Auto-generated class reference for PlayerEncounter."
---
# PlayerEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerEncounter`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/PlayerEncounter.cs`

## Overview

`PlayerEncounter` lives in `TaleWorlds.CampaignSystem.Encounters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encounters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LocationEncounter` | `public static LocationEncounter LocationEncounter { get; set; }` |
| `Battle` | `public static MapEvent Battle { get; }` |
| `EncounteredParty` | `public static PartyBase EncounteredParty { get; }` |
| `EncounteredBattle` | `public static MapEvent EncounteredBattle { get; }` |
| `BattleChallenge` | `public static bool BattleChallenge { get; set; }` |
| `LeaveEncounter` | `public static bool LeaveEncounter { get; set; }` |
| `PlayerSurrender` | `public static bool PlayerSurrender { get; set; }` |
| `EnemySurrender` | `public static bool EnemySurrender { get; set; }` |
| `OpponentSide` | `public BattleSideEnum OpponentSide { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `IsJoinedBattle` | `public bool IsJoinedBattle { get; }` |
| `InsideSettlement` | `public static bool InsideSettlement { get; }` |
| `CampaignBattleResult` | `public static CampaignBattleResult CampaignBattleResult { get; set; }` |
| `CurrentBattleSimulation` | `public static BattleSimulation CurrentBattleSimulation { get; }` |
| `EncounterState` | `public PlayerEncounterState EncounterState { get; }` |
| `IsPlayerEncounterRestartedForRaid` | `public bool IsPlayerEncounterRestartedForRaid { get; }` |
| `RosterToReceiveLootItems` | `public ItemRoster RosterToReceiveLootItems { get; }` |
| `RosterToReceiveLootPrisoners` | `public TroopRoster RosterToReceiveLootPrisoners { get; }` |
| `RosterToReceiveLootMembers` | `public TroopRoster RosterToReceiveLootMembers { get; }` |
| `EncounterSettlementAux` | `public Settlement EncounterSettlementAux { get; }` |
| `IsPlayerWaiting` | `public bool IsPlayerWaiting { get; set; }` |
| `InterruptedWhileWaiting` | `public bool InterruptedWhileWaiting { get; }` |
| `InterruptedWhileLooting` | `public bool InterruptedWhileLooting { get; }` |
| `IsNavalEncounterFinishedWithDisengage` | `public bool IsNavalEncounterFinishedWithDisengage { get; }` |
| `CapturedShipsInEncounter` | `public List<Ship> CapturedShipsInEncounter { get; }` |

## Key Methods

### OnLoad
`public void OnLoad()`

**Purpose:** Invoked when the `load` event is raised.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.OnLoad();
```

### RestartPlayerEncounter
`public static void RestartPlayerEncounter(PartyBase defenderParty, PartyBase attackerParty, bool forcePlayerOutFromSettlement = true, bool isPlayerEncounterRestartedForRaid = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerEncounter.RestartPlayerEncounter(defenderParty, attackerParty, false, false);
```

### Init
`public static void Init()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
PlayerEncounter.Init();
```

### SetupFields
`public void SetupFields(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Assigns a new value to `up fields` and updates the object's internal state.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.SetupFields(attackerParty, defenderParty);
```

### IsNavalEncounter
`public static bool IsNavalEncounter()`

**Purpose:** Determines whether the current object is in the `naval encounter` state or condition.

```csharp
// Static call; no instance required
PlayerEncounter.IsNavalEncounter();
```

### StartBattle
`public static MapEvent StartBattle()`

**Purpose:** Starts the `battle` flow or state machine.

```csharp
// Static call; no instance required
PlayerEncounter.StartBattle();
```

### JoinBattle
`public static void JoinBattle(BattleSideEnum side)`

**Purpose:** Joins several `battle` items into a single whole.

```csharp
// Static call; no instance required
PlayerEncounter.JoinBattle(side);
```

### Start
`public static void Start()`

**Purpose:** Starts the current object's flow or state machine.

```csharp
// Static call; no instance required
PlayerEncounter.Start();
```

### ProtectPlayerSide
`public static void ProtectPlayerSide(float hoursToProtect = 1f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerEncounter.ProtectPlayerSide(0);
```

### Finish
`public static void Finish(bool forcePlayerOutFromSettlement = true)`

**Purpose:** Concludes the current object's flow and performs any cleanup.

```csharp
// Static call; no instance required
PlayerEncounter.Finish(false);
```

### EndBattleByCheat
`public static void EndBattleByCheat(bool playerWon)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerEncounter.EndBattleByCheat(false);
```

### Update
`public static void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Static call; no instance required
PlayerEncounter.Update();
```

### DoMeeting
`public static void DoMeeting()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerEncounter.DoMeeting();
```

### SetMeetingDone
`public static void SetMeetingDone()`

**Purpose:** Assigns a new value to `meeting done` and updates the object's internal state.

```csharp
// Static call; no instance required
PlayerEncounter.SetMeetingDone();
```

### SetMeetingFalseForCompanion
`public void SetMeetingFalseForCompanion()`

**Purpose:** Assigns a new value to `meeting false for companion` and updates the object's internal state.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.SetMeetingFalseForCompanion();
```

### CheckIfLeadingAvaliable
`public static bool CheckIfLeadingAvaliable()`

**Purpose:** Verifies whether `if leading avaliable` holds true for the current object.

```csharp
// Static call; no instance required
PlayerEncounter.CheckIfLeadingAvaliable();
```

### GetLeadingHero
`public static Hero GetLeadingHero()`

**Purpose:** Reads and returns the `leading hero` value held by the current object.

```csharp
// Static call; no instance required
PlayerEncounter.GetLeadingHero();
```

### SetPlayerVictorious
`public static void SetPlayerVictorious()`

**Purpose:** Assigns a new value to `player victorious` and updates the object's internal state.

```csharp
// Static call; no instance required
PlayerEncounter.SetPlayerVictorious();
```

### SetIsSallyOutAmbush
`public void SetIsSallyOutAmbush(bool value)`

**Purpose:** Assigns a new value to `is sally out ambush` and updates the object's internal state.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.SetIsSallyOutAmbush(false);
```

### SetIsBlockadeAttack
`public void SetIsBlockadeAttack(bool value)`

**Purpose:** Assigns a new value to `is blockade attack` and updates the object's internal state.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.SetIsBlockadeAttack(false);
```

### SetIsBlockadeSallyOutAttack
`public void SetIsBlockadeSallyOutAttack(bool value)`

**Purpose:** Assigns a new value to `is blockade sally out attack` and updates the object's internal state.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.SetIsBlockadeSallyOutAttack(false);
```

### SetPlayerSiegeInterruptedByEnemyDefection
`public void SetPlayerSiegeInterruptedByEnemyDefection()`

**Purpose:** Assigns a new value to `player siege interrupted by enemy defection` and updates the object's internal state.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.SetPlayerSiegeInterruptedByEnemyDefection();
```

### SetPlayerSiegeContinueWithDefenderPullBack
`public static void SetPlayerSiegeContinueWithDefenderPullBack()`

**Purpose:** Assigns a new value to `player siege continue with defender pull back` and updates the object's internal state.

```csharp
// Static call; no instance required
PlayerEncounter.SetPlayerSiegeContinueWithDefenderPullBack();
```

### StartAttackMission
`public static void StartAttackMission()`

**Purpose:** Starts the `attack mission` flow or state machine.

```csharp
// Static call; no instance required
PlayerEncounter.StartAttackMission();
```

### FinalizeBattle
`public void FinalizeBattle()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.FinalizeBattle();
```

### FindNonAttachedNpcPartiesWhoWillJoinEvent
`public void FindNonAttachedNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Looks up the matching `non attached npc parties who will join event` in the current collection or scope.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.FindNonAttachedNpcPartiesWhoWillJoinEvent(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### FindAllNpcPartiesWhoWillJoinEvent
`public void FindAllNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Looks up the matching `all npc parties who will join event` in the current collection or scope.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.FindAllNpcPartiesWhoWillJoinEvent(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### EnterSettlement
`public static void EnterSettlement()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerEncounter.EnterSettlement();
```

### LeaveBattle
`public static void LeaveBattle()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerEncounter.LeaveBattle();
```

### LeaveSettlement
`public static void LeaveSettlement()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PlayerEncounter.LeaveSettlement();
```

### InitSimulation
`public static void InitSimulation(FlattenedTroopRoster selectedTroopsForPlayerSide, FlattenedTroopRoster selectedTroopsForOtherSide)`

**Purpose:** Prepares the resources, state, or bindings required by `simulation`.

```csharp
// Static call; no instance required
PlayerEncounter.InitSimulation(selectedTroopsForPlayerSide, selectedTroopsForOtherSide);
```

### InterruptEncounter
`public void InterruptEncounter(string encounterInterrupedType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.InterruptEncounter("example");
```

### StartSiegeAmbushMission
`public static void StartSiegeAmbushMission()`

**Purpose:** Starts the `siege ambush mission` flow or state machine.

```csharp
// Static call; no instance required
PlayerEncounter.StartSiegeAmbushMission();
```

### StartVillageBattleMission
`public static void StartVillageBattleMission()`

**Purpose:** Starts the `village battle mission` flow or state machine.

```csharp
// Static call; no instance required
PlayerEncounter.StartVillageBattleMission();
```

### StartCombatMissionWithDialogueInTownCenter
`public static void StartCombatMissionWithDialogueInTownCenter(CharacterObject characterToTalkTo)`

**Purpose:** Starts the `combat mission with dialogue in town center` flow or state machine.

```csharp
// Static call; no instance required
PlayerEncounter.StartCombatMissionWithDialogueInTownCenter(characterToTalkTo);
```

### StartHostileAction
`public static void StartHostileAction()`

**Purpose:** Starts the `hostile action` flow or state machine.

```csharp
// Static call; no instance required
PlayerEncounter.StartHostileAction();
```

### GetBattleRewards
`public void GetBattleRewards(out ExplainedNumber renownChange, out ExplainedNumber influenceChange, out ExplainedNumber moraleChange, out float playerEarnedLootRate, out Figurehead playerEarnedFigurehead)`

**Purpose:** Reads and returns the `battle rewards` value held by the current object.

```csharp
// Obtain an instance of PlayerEncounter from the subsystem API first
PlayerEncounter playerEncounter = ...;
playerEncounter.GetBattleRewards(renownChange, influenceChange, moraleChange, playerEarnedLootRate, playerEarnedFigurehead);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerEncounter playerEncounter = ...;
playerEncounter.OnLoad();
```

## See Also

- [Area Index](../)