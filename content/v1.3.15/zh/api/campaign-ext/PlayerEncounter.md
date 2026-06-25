---
title: "PlayerEncounter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerEncounter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerEncounter`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Encounters/PlayerEncounter.cs`

## 概述

`PlayerEncounter` 位于 `TaleWorlds.CampaignSystem.Encounters`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encounters` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### OnLoad
`public void OnLoad()`

**用途 / Purpose:** 当 `load` 事件触发时调用此方法。

### RestartPlayerEncounter
`public static void RestartPlayerEncounter(PartyBase defenderParty, PartyBase attackerParty, bool forcePlayerOutFromSettlement = true)`

**用途 / Purpose:** 处理 `restart player encounter` 相关逻辑。

### Init
`public static void Init()`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### SetupFields
`public void SetupFields(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 设置 `up fields` 的值或状态。

### IsNavalEncounter
`public static bool IsNavalEncounter()`

**用途 / Purpose:** 处理 `is naval encounter` 相关逻辑。

### StartBattle
`public static MapEvent StartBattle()`

**用途 / Purpose:** 处理 `start battle` 相关逻辑。

### JoinBattle
`public static void JoinBattle(BattleSideEnum side)`

**用途 / Purpose:** 处理 `join battle` 相关逻辑。

### Start
`public static void Start()`

**用途 / Purpose:** 处理 `start` 相关逻辑。

### ProtectPlayerSide
`public static void ProtectPlayerSide(float hoursToProtect = 1f)`

**用途 / Purpose:** 处理 `protect player side` 相关逻辑。

### Finish
`public static void Finish(bool forcePlayerOutFromSettlement = true)`

**用途 / Purpose:** 处理 `finish` 相关逻辑。

### EndBattleByCheat
`public static void EndBattleByCheat(bool playerWon)`

**用途 / Purpose:** 处理 `end battle by cheat` 相关逻辑。

### Update
`public static void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### DoMeeting
`public static void DoMeeting()`

**用途 / Purpose:** 处理 `do meeting` 相关逻辑。

### SetMeetingDone
`public static void SetMeetingDone()`

**用途 / Purpose:** 设置 `meeting done` 的值或状态。

### SetMeetingFalseForCompanion
`public void SetMeetingFalseForCompanion()`

**用途 / Purpose:** 设置 `meeting false for companion` 的值或状态。

### CheckIfLeadingAvaliable
`public static bool CheckIfLeadingAvaliable()`

**用途 / Purpose:** 处理 `check if leading avaliable` 相关逻辑。

### GetLeadingHero
`public static Hero GetLeadingHero()`

**用途 / Purpose:** 获取 `leading hero` 的当前值。

### SetPlayerVictorious
`public static void SetPlayerVictorious()`

**用途 / Purpose:** 设置 `player victorious` 的值或状态。

### SetIsSallyOutAmbush
`public void SetIsSallyOutAmbush(bool value)`

**用途 / Purpose:** 设置 `is sally out ambush` 的值或状态。

### SetIsBlockadeAttack
`public void SetIsBlockadeAttack(bool value)`

**用途 / Purpose:** 设置 `is blockade attack` 的值或状态。

### SetIsBlockadeSallyOutAttack
`public void SetIsBlockadeSallyOutAttack(bool value)`

**用途 / Purpose:** 设置 `is blockade sally out attack` 的值或状态。

### SetPlayerSiegeInterruptedByEnemyDefection
`public void SetPlayerSiegeInterruptedByEnemyDefection()`

**用途 / Purpose:** 设置 `player siege interrupted by enemy defection` 的值或状态。

### SetPlayerSiegeContinueWithDefenderPullBack
`public static void SetPlayerSiegeContinueWithDefenderPullBack()`

**用途 / Purpose:** 设置 `player siege continue with defender pull back` 的值或状态。

### StartAttackMission
`public static void StartAttackMission()`

**用途 / Purpose:** 处理 `start attack mission` 相关逻辑。

### CheckIfBattleShouldContinueAfterBattleMission
`public bool CheckIfBattleShouldContinueAfterBattleMission()`

**用途 / Purpose:** 处理 `check if battle should continue after battle mission` 相关逻辑。

### FinalizeBattle
`public void FinalizeBattle()`

**用途 / Purpose:** 处理 `finalize battle` 相关逻辑。

### FindNonAttachedNpcPartiesWhoWillJoinEvent
`public void FindNonAttachedNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**用途 / Purpose:** 处理 `find non attached npc parties who will join event` 相关逻辑。

### FindAllNpcPartiesWhoWillJoinEvent
`public void FindAllNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**用途 / Purpose:** 处理 `find all npc parties who will join event` 相关逻辑。

### EnterSettlement
`public static void EnterSettlement()`

**用途 / Purpose:** 处理 `enter settlement` 相关逻辑。

### LeaveBattle
`public static void LeaveBattle()`

**用途 / Purpose:** 处理 `leave battle` 相关逻辑。

### LeaveSettlement
`public static void LeaveSettlement()`

**用途 / Purpose:** 处理 `leave settlement` 相关逻辑。

### InitSimulation
`public static void InitSimulation(FlattenedTroopRoster selectedTroopsForPlayerSide, FlattenedTroopRoster selectedTroopsForOtherSide)`

**用途 / Purpose:** 初始化 `simulation` 的状态、资源或绑定。

### InterruptEncounter
`public void InterruptEncounter(string encounterInterrupedType)`

**用途 / Purpose:** 处理 `interrupt encounter` 相关逻辑。

### StartSiegeAmbushMission
`public static void StartSiegeAmbushMission()`

**用途 / Purpose:** 处理 `start siege ambush mission` 相关逻辑。

### StartVillageBattleMission
`public static void StartVillageBattleMission()`

**用途 / Purpose:** 处理 `start village battle mission` 相关逻辑。

### StartCombatMissionWithDialogueInTownCenter
`public static void StartCombatMissionWithDialogueInTownCenter(CharacterObject characterToTalkTo)`

**用途 / Purpose:** 处理 `start combat mission with dialogue in town center` 相关逻辑。

### StartHostileAction
`public static void StartHostileAction()`

**用途 / Purpose:** 处理 `start hostile action` 相关逻辑。

### GetBattleRewards
`public static void GetBattleRewards(out float renownChange, out float influenceChange, out float moraleChange, out float goldChange, out float playerEarnedLootPercentage, out Figurehead playerEarnedFigurehead, ref ExplainedNumber renownExplainedNumber, ref ExplainedNumber influenceExplainedNumber, ref ExplainedNumber moraleExplainedNumber)`

**用途 / Purpose:** 获取 `battle rewards` 的当前值。

## 使用示例

```csharp
var value = new PlayerEncounter();
value.OnLoad();
```

## 参见

- [完整类目录](../catalog)