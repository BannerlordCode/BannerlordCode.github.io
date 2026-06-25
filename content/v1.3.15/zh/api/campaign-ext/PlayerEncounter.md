---
title: "PlayerEncounter"
description: "PlayerEncounter 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 在 load 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.OnLoad();
```

### RestartPlayerEncounter
`public static void RestartPlayerEncounter(PartyBase defenderParty, PartyBase attackerParty, bool forcePlayerOutFromSettlement = true)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RestartPlayerEncounter 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.RestartPlayerEncounter(defenderParty, attackerParty, false);
```

### Init
`public static void Init()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
PlayerEncounter.Init();
```

### SetupFields
`public void SetupFields(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** **用途 / Purpose:** 为 up fields 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.SetupFields(attackerParty, defenderParty);
```

### IsNavalEncounter
`public static bool IsNavalEncounter()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 naval encounter 状态或条件。

```csharp
// 静态调用，不需要实例
PlayerEncounter.IsNavalEncounter();
```

### StartBattle
`public static MapEvent StartBattle()`

**用途 / Purpose:** **用途 / Purpose:** 启动battle流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerEncounter.StartBattle();
```

### JoinBattle
`public static void JoinBattle(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 把若干battle连接成一个整体。

```csharp
// 静态调用，不需要实例
PlayerEncounter.JoinBattle(side);
```

### Start
`public static void Start()`

**用途 / Purpose:** **用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerEncounter.Start();
```

### ProtectPlayerSide
`public static void ProtectPlayerSide(float hoursToProtect = 1f)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ProtectPlayerSide 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.ProtectPlayerSide(0);
```

### Finish
`public static void Finish(bool forcePlayerOutFromSettlement = true)`

**用途 / Purpose:** **用途 / Purpose:** 结束当前对象的流程并执行必要的收尾工作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.Finish(false);
```

### EndBattleByCheat
`public static void EndBattleByCheat(bool playerWon)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndBattleByCheat 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.EndBattleByCheat(false);
```

### Update
`public static void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 静态调用，不需要实例
PlayerEncounter.Update();
```

### DoMeeting
`public static void DoMeeting()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoMeeting 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.DoMeeting();
```

### SetMeetingDone
`public static void SetMeetingDone()`

**用途 / Purpose:** **用途 / Purpose:** 为 meeting done 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
PlayerEncounter.SetMeetingDone();
```

### SetMeetingFalseForCompanion
`public void SetMeetingFalseForCompanion()`

**用途 / Purpose:** **用途 / Purpose:** 为 meeting false for companion 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.SetMeetingFalseForCompanion();
```

### CheckIfLeadingAvaliable
`public static bool CheckIfLeadingAvaliable()`

**用途 / Purpose:** **用途 / Purpose:** 检查if leading avaliable在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
PlayerEncounter.CheckIfLeadingAvaliable();
```

### GetLeadingHero
`public static Hero GetLeadingHero()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 leading hero 的结果。

```csharp
// 静态调用，不需要实例
PlayerEncounter.GetLeadingHero();
```

### SetPlayerVictorious
`public static void SetPlayerVictorious()`

**用途 / Purpose:** **用途 / Purpose:** 为 player victorious 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
PlayerEncounter.SetPlayerVictorious();
```

### SetIsSallyOutAmbush
`public void SetIsSallyOutAmbush(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 is sally out ambush 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.SetIsSallyOutAmbush(false);
```

### SetIsBlockadeAttack
`public void SetIsBlockadeAttack(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 is blockade attack 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.SetIsBlockadeAttack(false);
```

### SetIsBlockadeSallyOutAttack
`public void SetIsBlockadeSallyOutAttack(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 为 is blockade sally out attack 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.SetIsBlockadeSallyOutAttack(false);
```

### SetPlayerSiegeInterruptedByEnemyDefection
`public void SetPlayerSiegeInterruptedByEnemyDefection()`

**用途 / Purpose:** **用途 / Purpose:** 为 player siege interrupted by enemy defection 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.SetPlayerSiegeInterruptedByEnemyDefection();
```

### SetPlayerSiegeContinueWithDefenderPullBack
`public static void SetPlayerSiegeContinueWithDefenderPullBack()`

**用途 / Purpose:** **用途 / Purpose:** 为 player siege continue with defender pull back 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
PlayerEncounter.SetPlayerSiegeContinueWithDefenderPullBack();
```

### StartAttackMission
`public static void StartAttackMission()`

**用途 / Purpose:** **用途 / Purpose:** 启动attack mission流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerEncounter.StartAttackMission();
```

### CheckIfBattleShouldContinueAfterBattleMission
`public bool CheckIfBattleShouldContinueAfterBattleMission()`

**用途 / Purpose:** **用途 / Purpose:** 检查if battle should continue after battle mission在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
var result = playerEncounter.CheckIfBattleShouldContinueAfterBattleMission();
```

### FinalizeBattle
`public void FinalizeBattle()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FinalizeBattle 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.FinalizeBattle();
```

### FindNonAttachedNpcPartiesWhoWillJoinEvent
`public void FindNonAttachedNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的non attached npc parties who will join event。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.FindNonAttachedNpcPartiesWhoWillJoinEvent(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### FindAllNpcPartiesWhoWillJoinEvent
`public void FindAllNpcPartiesWhoWillJoinEvent(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的all npc parties who will join event。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.FindAllNpcPartiesWhoWillJoinEvent(partiesToJoinPlayerSide, partiesToJoinEnemySide);
```

### EnterSettlement
`public static void EnterSettlement()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnterSettlement 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.EnterSettlement();
```

### LeaveBattle
`public static void LeaveBattle()`

**用途 / Purpose:** **用途 / Purpose:** 调用 LeaveBattle 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.LeaveBattle();
```

### LeaveSettlement
`public static void LeaveSettlement()`

**用途 / Purpose:** **用途 / Purpose:** 调用 LeaveSettlement 对应的操作。

```csharp
// 静态调用，不需要实例
PlayerEncounter.LeaveSettlement();
```

### InitSimulation
`public static void InitSimulation(FlattenedTroopRoster selectedTroopsForPlayerSide, FlattenedTroopRoster selectedTroopsForOtherSide)`

**用途 / Purpose:** **用途 / Purpose:** 为 simulation 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
PlayerEncounter.InitSimulation(selectedTroopsForPlayerSide, selectedTroopsForOtherSide);
```

### InterruptEncounter
`public void InterruptEncounter(string encounterInterrupedType)`

**用途 / Purpose:** **用途 / Purpose:** 调用 InterruptEncounter 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlayerEncounter 实例
PlayerEncounter playerEncounter = ...;
playerEncounter.InterruptEncounter("example");
```

### StartSiegeAmbushMission
`public static void StartSiegeAmbushMission()`

**用途 / Purpose:** **用途 / Purpose:** 启动siege ambush mission流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerEncounter.StartSiegeAmbushMission();
```

### StartVillageBattleMission
`public static void StartVillageBattleMission()`

**用途 / Purpose:** **用途 / Purpose:** 启动village battle mission流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerEncounter.StartVillageBattleMission();
```

### StartCombatMissionWithDialogueInTownCenter
`public static void StartCombatMissionWithDialogueInTownCenter(CharacterObject characterToTalkTo)`

**用途 / Purpose:** **用途 / Purpose:** 启动combat mission with dialogue in town center流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerEncounter.StartCombatMissionWithDialogueInTownCenter(characterToTalkTo);
```

### StartHostileAction
`public static void StartHostileAction()`

**用途 / Purpose:** **用途 / Purpose:** 启动hostile action流程或状态机。

```csharp
// 静态调用，不需要实例
PlayerEncounter.StartHostileAction();
```

### GetBattleRewards
`public static void GetBattleRewards(out float renownChange, out float influenceChange, out float moraleChange, out float goldChange, out float playerEarnedLootPercentage, out Figurehead playerEarnedFigurehead, ref ExplainedNumber renownExplainedNumber, ref ExplainedNumber influenceExplainedNumber, ref ExplainedNumber moraleExplainedNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 battle rewards 的结果。

```csharp
// 静态调用，不需要实例
PlayerEncounter.GetBattleRewards(renownChange, influenceChange, moraleChange, goldChange, playerEarnedLootPercentage, playerEarnedFigurehead, renownExplainedNumber, influenceExplainedNumber, moraleExplainedNumber);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayerEncounter playerEncounter = ...;
playerEncounter.OnLoad();
```

## 参见

- [本区域目录](../)