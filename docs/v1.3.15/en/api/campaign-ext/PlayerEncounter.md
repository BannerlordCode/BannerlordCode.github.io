<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerEncounter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerEncounter`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Encounters/PlayerEncounter.cs`

## Overview

`PlayerEncounter` lives in `TaleWorlds.CampaignSystem.Encounters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encounters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static PlayerEncounter Current { get; set; }` |
| `LocationEncounter` | `public static LocationEncounter LocationEncounter { get; set; }` |
| `Battle` | `public static MapEvent Battle { get; }` |
| `EncounteredParty` | `public static PartyBase EncounteredParty { get; }` |
| `EncounteredMobileParty` | `public static MobileParty EncounteredMobileParty { get; }` |
| `EncounteredBattle` | `public static MapEvent EncounteredBattle { get; }` |
| `BattleState` | `public static BattleState BattleState { get; }` |
| `WinningSide` | `public static BattleSideEnum WinningSide { get; }` |
| `BattleChallenge` | `public static bool BattleChallenge { get; set; }` |
| `PlayerIsDefender` | `public static bool PlayerIsDefender { get; }` |
| `PlayerIsAttacker` | `public static bool PlayerIsAttacker { get; }` |
| `LeaveEncounter` | `public static bool LeaveEncounter { get; set; }` |
| `MeetingDone` | `public static bool MeetingDone { get; set; }` |
| `PlayerSurrender` | `public static bool PlayerSurrender { get; set; }` |
| `EnemySurrender` | `public static bool EnemySurrender { get; set; }` |
| `IsActive` | `public static bool IsActive { get; }` |
| `OpponentSide` | `public BattleSideEnum OpponentSide { get; }` |
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |
| `IsJoinedBattle` | `public bool IsJoinedBattle { get; }` |
| `InsideSettlement` | `public static bool InsideSettlement { get; }` |
| `CampaignBattleResult` | `public static CampaignBattleResult CampaignBattleResult { get; set; }` |
| `CurrentBattleSimulation` | `public static BattleSimulation CurrentBattleSimulation { get; }` |
| `EncounterState` | `public PlayerEncounterState EncounterState { get; }` |
| `RosterToReceiveLootItems` | `public ItemRoster RosterToReceiveLootItems { get; }` |
| `RosterToReceiveLootPrisoners` | `public TroopRoster RosterToReceiveLootPrisoners { get; }` |
| `RosterToReceiveLootMembers` | `public TroopRoster RosterToReceiveLootMembers { get; }` |
| `ReceivedLootShips` | `public List<Ship> ReceivedLootShips { get; }` |
| `EncounterSettlement` | `public static Settlement EncounterSettlement { get; }` |
| `EncounterSettlementAux` | `public Settlement EncounterSettlementAux { get; }` |
| `IsPlayerWaiting` | `public bool IsPlayerWaiting { get; set; }` |

## Key Methods

### OnLoad
`public void OnLoad()`

**Purpose:** Called when the `load` event is raised.

### RestartPlayerEncounter
`public static void RestartPlayerEncounter(PartyBase defenderParty, PartyBase attackerParty, bool forcePlayerOutFromSettlement = true)`

**Purpose:** Handles logic related to `restart player encounter`.

### Init
`public static void Init()`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### SetupFields
`public void SetupFields(PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Sets the value or state of `up fields`.

### IsNavalEncounter
`public static bool IsNavalEncounter()`

**Purpose:** Handles logic related to `is naval encounter`.

### StartBattle
`public static MapEvent StartBattle()`

**Purpose:** Handles logic related to `start battle`.

### JoinBattle
`public static void JoinBattle(BattleSideEnum side)`

**Purpose:** Handles logic related to `join battle`.

### Start
`public static void Start()`

**Purpose:** Handles logic related to `start`.

### ProtectPlayerSide
`public static void ProtectPlayerSide(float hoursToProtect = 1f)`

**Purpose:** Handles logic related to `protect player side`.

### Finish
`public static void Finish(bool forcePlayerOutFromSettlement = true)`

**Purpose:** Handles logic related to `finish`.

### EndBattleByCheat
`public static void EndBattleByCheat(bool playerWon)`

**Purpose:** Handles logic related to `end battle by cheat`.

### Update
`public static void Update()`

**Purpose:** Updates the state or data of `update`.

### DoMeeting
`public static void DoMeeting()`

**Purpose:** Handles logic related to `do meeting`.

### SetMeetingDone
`public static void SetMeetingDone()`

**Purpose:** Sets the value or state of `meeting done`.

### SetMeetingFalseForCompanion
`public void SetMeetingFalseForCompanion()`

**Purpose:** Sets the value or state of `meeting false for companion`.

### CheckIfLeadingAvaliable
`public static bool CheckIfLeadingAvaliable()`

**Purpose:** Handles logic related to `check if leading avaliable`.

### GetLeadingHero
`public static Hero GetLeadingHero()`

**Purpose:** Gets the current value of `leading hero`.

### SetPlayerVictorious
`public static void SetPlayerVictorious()`

**Purpose:** Sets the value or state of `player victorious`.

### SetIsSallyOutAmbush
`public void SetIsSallyOutAmbush(bool value)`

**Purpose:** Sets the value or state of `is sally out ambush`.

### SetIsBlockadeAttack
`public void SetIsBlockadeAttack(bool value)`

**Purpose:** Sets the value or state of `is blockade attack`.

### SetIsBlockadeSallyOutAttack
`public void SetIsBlockadeSallyOutAttack(bool value)`

**Purpose:** Sets the value or state of `is blockade sally out attack`.

### SetPlayerSiegeInterruptedByEnemyDefection
`public void SetPlayerSiegeInterruptedByEnemyDefection()`

**Purpose:** Sets the value or state of `player siege interrupted by enemy defection`.

### SetPlayerSiegeContinueWithDefenderPullBack
`public static void SetPlayerSiegeContinueWithDefenderPullBack()`

**Purpose:** Sets the value or state of `player siege continue with defender pull back`.

### StartAttackMission
`public static void StartAttackMission()`

**Purpose:** Handles logic related to `start attack mission`.

### CheckIfBattleShouldContinueAfterBattleMission
`public bool CheckIfBattleShouldContinueAfterBattleMission()`

**Purpose:** Handles logic related to `check if battle should continue after battle mission`.

### FinalizeBattle
`public void FinalizeBattle()`

**Purpose:** Handles logic related to `finalize battle`.

### FindNonAttachedNpcPartiesWhoWillJoinEvent
`public void FindNonAttachedNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Handles logic related to `find non attached npc parties who will join event`.

### FindAllNpcPartiesWhoWillJoinEvent
`public void FindAllNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**Purpose:** Handles logic related to `find all npc parties who will join event`.

### EnterSettlement
`public static void EnterSettlement()`

**Purpose:** Handles logic related to `enter settlement`.

### LeaveBattle
`public static void LeaveBattle()`

**Purpose:** Handles logic related to `leave battle`.

### LeaveSettlement
`public static void LeaveSettlement()`

**Purpose:** Handles logic related to `leave settlement`.

### InitSimulation
`public static void InitSimulation(FlattenedTroopRoster selectedTroopsForPlayerSide, FlattenedTroopRoster selectedTroopsForOtherSide)`

**Purpose:** Initializes the state, resources, or bindings for `simulation`.

### InterruptEncounter
`public void InterruptEncounter(string encounterInterrupedType)`

**Purpose:** Handles logic related to `interrupt encounter`.

### StartSiegeAmbushMission
`public static void StartSiegeAmbushMission()`

**Purpose:** Handles logic related to `start siege ambush mission`.

### StartVillageBattleMission
`public static void StartVillageBattleMission()`

**Purpose:** Handles logic related to `start village battle mission`.

### StartCombatMissionWithDialogueInTownCenter
`public static void StartCombatMissionWithDialogueInTownCenter(CharacterObject characterToTalkTo)`

**Purpose:** Handles logic related to `start combat mission with dialogue in town center`.

### StartHostileAction
`public static void StartHostileAction()`

**Purpose:** Handles logic related to `start hostile action`.

### GetBattleRewards
`public static void GetBattleRewards(out float renownChange, out float influenceChange, out float moraleChange, out float goldChange, out float playerEarnedLootPercentage, out Figurehead playerEarnedFigurehead, ref ExplainedNumber renownExplainedNumber, ref ExplainedNumber influenceExplainedNumber, ref ExplainedNumber moraleExplainedNumber)`

**Purpose:** Gets the current value of `battle rewards`.

## Usage Example

```csharp
var value = new PlayerEncounter();
value.OnLoad();
```

## See Also

- [Complete Class Catalog](../catalog)