---
title: "PlayerEncounter"
description: "由战役持有的玩家遭遇状态机，负责把菜单与地图战斗连接到结果、俘虏、战利品和清理流程。"
---
# PlayerEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PlayerEncounter`
**Base:** `object`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/PlayerEncounter.cs`

## 一句话职责

`PlayerEncounter` 持有涉及玩家队伍的战役侧遭遇状态机：它把遭遇菜单连接到 `MapEvent`，等待模拟或 Mission 返回结果，提交结果，然后驱动胜利、失败、捕获、释放、掠夺和清理。

## 心智模型

它是战役协调器，不是战斗本身。`Campaign.PlayerEncounter` 最多持有一个当前实例，`_mapEvent` 则指向当前由该遭遇协调的地图战斗。`StartVillageBattleMission`、`StartSiegeAmbushMission` 等方法把流程桥接到独立的 3D 场景，但 `PlayerEncounter` 仍然拥有战役菜单和结果流程。`MapEvent` 负责参战者、双方、战斗状态和世界结果计算；`PlayerEncounter` 决定玩家何时等待、何时可以提交结果，以及战后哪些状态必须执行。

准确的状态枚举是 `Begin -> Wait -> PrepareResults -> ApplyResults -> PlayerVictory` 或 `PlayerTotalDefeat -> CaptureHeroes -> FreeHeroes -> LootParty -> LootInventory -> LootShips -> End`。部分分支会提前结束：脱离战斗或不需要掠夺的遭遇可以直接到 `End`，而 `LeaveEncounter` 可能在正常结果路径之前调用 `Finish`。`Update()` 推进这台状态机，不是没有遭遇时可以随意调用的刷新方法。

## 何时使用，何时不要使用

当 mod 需要观察或扩展玩家当前遭遇时，使用 `Campaign.Current.PlayerEncounter` 或 `PlayerEncounter.Current`：读取 `EncounterState`、判断 `PlayerSide`、在有效的 `Battle` 上读取状态，或在遭遇专用钩子中协调菜单/Mission 转换。当意图是创建新的世界战斗并派发标准战役事件时，使用 `StartBattleAction.Apply`。当关注的是战斗成员、地图事件生命周期、模拟或结算时，使用 `MapEvent` 与 `MapEventManager`。

不要把 `PlayerEncounter` 当成 `MapEvent`、`Mission` 或 Action 的替代品。不要在这里直接改队伍编制、城镇所有权或战斗结果；这些持久世界变化应走对应 Action 或 `MapEvent` 的结果管线。也不要因为类型存在就直接调用静态访问器：许多访问器会解引用 `Current`、`_mapEvent` 或 `_encounteredParty`，只有在相应阶段才有效。

## 依赖图

正常链路是：

`Campaign.PlayerEncounter` -> `PlayerEncounter` -> [`MapEvent`](../MapEvent) -> [`MapEventManager`](../MapEventManager) -> 战役结果计算

外部创建边界是 [`StartBattleAction`](../../campaign-ext/StartBattleAction)：它选择战斗类型，通过当前遭遇模型创建地图事件，或把队伍接入已有事件。场景边界是 [`Mission`](../../mission/Mission)：Mission 可以产生战斗结果，但不拥有这台战役状态机。周边战役 tick 由 [`Campaign`](../Campaign) 驱动，事件投递可通过 [`CampaignEvents`](../CampaignEvents) 理解。

| 方向 | 相关类型或系统 | 作用 |
| --- | --- | --- |
| 持有者 | `Campaign.PlayerEncounter` | 保存遭遇对象，并在 `Finish` 时清除它。 |
| 上游创建 | `StartBattleAction` | 创建或加入 `MapEvent`，并派发 `OnStartBattle`；这是正常的世界变更边界。 |
| 协调战斗 | `MapEvent`、`MapEventManager` | 提供双方、胜者、模拟状态、最终化和战役结果计算。 |
| 场景桥 | `Mission`、`CampaignMission` | 运行实时场景；场景返回后仍由遭遇状态机应用结果。 |
| 通知 | `CampaignEvents` / `CampaignEventDispatcher` | `DoApplyMapEventResults` 在提交地图事件结果前调用 `OnPlayerBattleEnd`。 |

## 获取与生命周期

构造函数是 private。`PlayerEncounter.Start()` 创建实例并写入 `Campaign.Current.PlayerEncounter`；`PlayerEncounter.Current` 只是对这个战役持有属性的快捷访问。`RestartPlayerEncounter` 若已有实例会先结束它，再启动新实例并用 attacker/defender 调用 `SetupFields`。`Init` 在需要时创建实例，然后从玩家队伍当前的地图事件初始化字段。

`SetupFields` 记录 attacker 与 defender，解析遭遇地点或被围城地点，确定 `PlayerSide`、`OpponentSide`，并找出正在遭遇的移动队伍或定居点。`StartBattle()` 创建或复用 field、raid、hideout、siege、sally-out、blockade 或 siege-outside 对应的地图事件。`JoinBattle(side)` 把玩家队伍接到已有事件的一侧，并记录加入前双方实力比。两者都不会自行创建 3D Mission。

`Campaign.Tick()` 先运行 `MapEventManager.Tick()`，再运行 `EncounterManager.Tick()`。后者负责遭遇/菜单一侧的战役 tick；`PlayerEncounter.Update()` 执行状态机循环，内部 switch 会持续处理状态，直到当前状态标记为已处理。结果可用时，`ApplyResults` 先调用 `CampaignEventDispatcher.Instance.OnPlayerBattleEnd(_mapEvent)`，再调用 `_mapEvent.CalculateAndCommitMapEventResults()`。`Finish()` 退出菜单、最终化地图事件、结束战斗模拟、按需离开定居点，最后清除 `Campaign.Current.PlayerEncounter` 和 `Campaign.Current.LocationEncounter`。

## 安全访问与时机

安全的观察方式是先取得当前实例并检查，再检查地图事件后读取依赖地图事件的属性：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

PlayerEncounter encounter = Campaign.Current.PlayerEncounter;
if (encounter == null || !PlayerEncounter.IsActive)
{
    return;
}

PlayerEncounterState phase = encounter.EncounterState;
MapEvent battle = PlayerEncounter.Battle;
if (battle != null && phase == PlayerEncounterState.Wait)
{
    BattleSideEnum playerSide = encounter.PlayerSide;
    bool playerIsAttacker = PlayerEncounter.PlayerIsAttacker;
}
```

要请求标准战役战斗，应使用真实队伍调用 Action 边界。Action 会依据队伍所在定居点/围城上下文选择事件类型，创建或加入 `MapEvent`，并派发标准开始战斗通知。不要用 `new` 制造 `PlayerEncounter`，因为构造函数是 private，生命周期由战役拥有：

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

public static void AttackMobileParty(MobileParty hostileParty)
{
    if (hostileParty == null || !hostileParty.IsActive)
    {
        return;
    }

    StartBattleAction.Apply(MobileParty.MainParty.Party, hostileParty.Party);
}
```

加入遭遇是另一条路径。只能传入现有事件接受的一侧；`JoinBattle` 会把玩家队伍绑定到该侧，并更新 `IsJoinedBattle` 与加入前实力比：

```csharp
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Party;

PlayerEncounter encounter = PlayerEncounter.Current;
if (encounter != null && PlayerEncounter.EncounteredBattle != null)
{
    BattleSideEnum side = PlayerEncounter.EncounteredBattle.CanPartyJoinBattle(
        PartyBase.MainParty, BattleSideEnum.Attacker)
        ? BattleSideEnum.Attacker
        : BattleSideEnum.Defender;

    PlayerEncounter.JoinBattle(side);
}
```

## 菜单与 Mission 桥接

`DoMeeting` 打开队伍遭遇对话，或切换到 army/encounter 菜单。`EnterSettlement`、`LeaveBattle`、`LeaveSettlement` 改变战役菜单/地点上下文；它们不是 Mission 构造器。`StartAttackMission`、`StartVillageBattleMission`、`StartSiegeAmbushMission` 是在战役已建立相应遭遇后使用的专用桥接方法。`StartCombatMissionWithDialogueInTownCenter` 为角色打开带对话的战斗场景。场景结束后，`Update()` 使用 `CampaignBattleResult` 或 `MapEvent.BattleState` 把流程从 `Wait` 推到结果应用。

如果 mod 只关心 Mission 生命周期，应订阅 Mission 一侧的钩子，并在控制权回到战役后重新取得 `PlayerEncounter.Current`。不要跨越 Mission 转换长期持有 `MapEvent` 或 `PlayerEncounter` 引用，因为场景关闭时 `Finish()` 可能已经最终化并清除了战役对象。

## 成员按职责分组

| 成员 | 时机与副作用 |
| --- | --- |
| `Current`、`IsActive`、`LocationEncounter`、`EncounterSettlement` | 战役已加载时使用。`Current` 读取 `Campaign.Current.PlayerEncounter`；`LocationEncounter` 写回 `Campaign.Current.LocationEncounter`；没有当前遭遇时 `EncounterSettlement` 为 null。 |
| `Battle`、`EncounteredBattle`、`BattleState`、`WinningSide` | 先确认 `Current` 和对应地图事件存在。`Battle` 是协调器的 `_mapEvent`；`EncounteredBattle` 解析对方已有事件或围城事件；`BattleState` 与 `WinningSide` 直接解引用当前地图事件。 |
| `PlayerSide`、`OpponentSide`、`IsJoinedBattle`、`EncounterState` | 在 `SetupFields`/`JoinBattle` 中设置并由 `Update` 推进；`EncounterState` 的 setter 为 private，外部应请求支持的流程而不是赋值。 |
| `PlayerSurrender`、`EnemySurrender`、`LeaveEncounter`、`BattleChallenge` | 这些是带流程效果的状态标志。设置 surrender 会调用内部投降逻辑；设置 `LeaveEncounter` 会让下一次 update 结束遭遇。它们不是被动注释。 |
| `CampaignBattleResult`、`CurrentBattleSimulation`、`IsPlayerWaiting` | 在等待、结果或模拟阶段使用。结果是可保存状态；模拟在模拟阶段之外可能为 null；等待标志会影响加载恢复和菜单流程。 |
| `Start`、`RestartPlayerEncounter`、`Init`、`SetupFields` | 生命周期初始化。`RestartPlayerEncounter` 可能先结束并清除已有遭遇，再替换它，不应从任意 UI 代码调用。 |
| `StartBattle`、`JoinBattle`、`Update`、`FinalizeBattle`、`Finish` | 流程转换。它们会接入队伍、提交结果、最终化地图事件、关闭菜单和清除战役状态；调用时机必须与名称表达的阶段一致。 |
| `DoMeeting`、`EnterSettlement`、`LeaveBattle`、`LeaveSettlement` | 菜单/对话桥接方法。它们可能切换或退出游戏菜单，并依赖有效的遭遇队伍或定居点。 |
| `GetBattleRewards`、`RosterToReceiveLootItems`、`RosterToReceiveLootMembers`、`RosterToReceiveLootPrisoners`、`ReceivedLootShips` | 结果/战利品交接。roster 属性会延迟创建备用容器；它们不代替队伍或俘虏 Action。 |
| `FindNonAttachedNpcPartiesWhoWillJoinEvent`、`FindAllNpcPartiesWhoWillJoinEvent` | 从附近符合条件的队伍填充调用者提供的列表。应在活动且未最终化的地图事件期间调用，不要把列表当成权威成员关系长期保存。 |

## 保存与加载边界

遭遇属于战役存档图。`PlayerEncounter` 保存 `_mapEvent`、`_mapEventState`、`_encounteredParty`、`_attackerParty`、`_defenderParty`、投降/离开标志、战斗结果、战利品 roster 和捕获列表等 `SaveableField` 字段。`PlayerSide`、`OpponentSide`、`IsJoinedBattle`、`EncounterSettlementAux`、等待/中断标志及 raid 重启标志使用可保存属性。这些值用于恢复进行中的战役流程，但不会让已经最终化的 `MapEvent` 变成安全引用。

加载时，`OnLoad()` 会在玩家位于定居点或在村庄等待且没有战斗时重建 `LocationEncounter`，修复旧版 blockade/sally-out 存档，并重新创建捕获船只列表。`OnLoadInitialization` 还处理早期版本存档。即使行为自身保存遭遇相关数据，也仍需为行为设计稳定的 `SyncData`；通过反射改 `PlayerEncounter` 字段或假定新的加载顺序，可能造成队伍缺失、战斗引用无效或存档无法继续。

## 崩溃与失效边界

- `PlayerEncounter.Current` 在 `Start()` 前为 null，`Finish()` 后也会被清空。`Battle`、`EncounteredParty`、`CurrentBattleSimulation` 有部分 null 防护，但 `BattleState`、`WinningSide`、`CampaignBattleResult`、`PlayerSurrender`、`EnemySurrender` 会解引用当前状态。必须按具体属性检查，不能假设所有静态属性都安全。
- 菜单或 Mission 收尾时 `MapEvent` 可能已经最终化。即使 C# 引用不是 null，缓存的 `MapEvent`、`PartyBase`、定居点或 roster 也可能已经过期；使用时应从 `PlayerEncounter.Current` 或活动队伍重新获取。
- `StartBattle()` 不是任意敌对遭遇的世界变更 API。应使用 `StartBattleAction.Apply` 或 `ApplyStartBattle`、`ApplyStartRaid`、`ApplyStartSallyOut`、`ApplyStartAssaultAgainstWalls` 等专用入口，使事件选择、队伍接入和 `OnStartBattle` 派发保持一致。
- 没有当前地图事件和正确战役阶段时，不要调用 `Update`、`FinalizeBattle`、`Finish`、`JoinBattle` 或投降 setter。它们可能关闭菜单、提交结果、捕获/释放英雄、转移战利品、传送队伍或清除战役遭遇。
- 不要把备用 loot roster 当成权威队伍状态。它们只是遭遇交接容器；持久 roster、俘虏、关系和定居点变化由正常结果/Action 管线负责。
- 不要把 Mission 完成误认为战役遭遇完成。Mission 只返回结果；`ApplyResults` 及其后的状态仍需提交 `MapEvent` 并清理战役引用。

## 互相导航

- [↑ Campaign API 父级](../)
- [↔ MapEvent](../MapEvent)
- [↔ MapEventManager](../MapEventManager)
- [↔ Campaign](../Campaign)
- [↔ StartBattleAction](../../campaign-ext/StartBattleAction)
- [↔ Mission](../../mission/Mission)
- [↔ CampaignEvents](../CampaignEvents)
