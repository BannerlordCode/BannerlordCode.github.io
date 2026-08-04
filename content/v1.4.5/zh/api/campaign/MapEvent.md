---
title: "MapEvent：战役地图战斗状态机"
description: "v1.4.5 中连接 PartyBase、遭遇、围城和 Mission 的战役地图事件；说明如何观察战斗、判断阶段，以及为什么不能把它当作胜负字段直接改写。"
---
# MapEvent

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class MapEvent : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

## 一句话定位

`MapEvent` 保存一场战役层遭遇的双方、地图位置、事件类型、模拟结果和结算阶段，并把它投影给遭遇菜单、Mission、战役事件和存档系统；它还负责把 Campaign tick、玩家战斗回写、围城联动和最终清理串成一个有顺序的生命周期，因此读取结果与触发结算必须遵守同一状态机。

## 心智模型

`MapEvent` 不是“两个队伍相遇后的一个布尔值”，而是一台由战役时间推进的状态机。它持有两个 `MapEventSide`，每一侧再持有若干 `MapEventParty`；这些对象引用 [PartyBase](../PartyBase)、`MobileParty`、据点和围城对象。`EventType` 区分野战、劫掠、围城、出城战、海战等流程，`Component` 承担该类型的专有规则。

创建流程由 [MapEventManager](../MapEventManager)、[StartBattleAction](../../campaign-ext/StartBattleAction) 和 `EncounterModel` 组织，具体组件随后调用内部初始化并把事件加入 `Campaign.Current.MapEventManager`。因此 mod 应观察已经注册的事件，而不是 `new MapEvent()`：构造函数不是公开扩展入口，绕过组件会缺少双方、位置、视觉对象、事件分发和存档初始化。

请求的 `BattleTypes` 不是永远不变的承诺。初始化和后续加入参战方时，围城防守方、驻军或封锁方可能把事件转成 `SiegeOutside`、`SallyOut` 或 `BlockadeSallyOutBattle`；读取 `EventType` 应以当前对象为准，不要只记住创建入口传入的类型。

事件通常从 `Wait` 开始，随着 Campaign tick 和遭遇/模拟流程推进；Mission 只在玩家进入战斗时暂时消费这份战役状态。战斗结束、追击和战利品处理完成后，事件进入等待移除阶段，`IsFinalized` 变为 `true`。结束事件后，原先的 `MapEvent`、双方的 `MapEventSide` 以及 Mission 里的临时对象都不应再被缓存使用。

## 什么时候用，什么时候不要用

- **适合使用：** 在行为或事件监听器中读取双方、事件类型、参战人数、胜负、撤退信息、战斗位置，或在 Mission/遭遇边界把战役事件与当前 UI、任务逻辑关联起来。
- **适合使用：** 用 `CampaignEvents.MapEventStarted` 和 `CampaignEvents.MapEventEnded` 观察创建与收尾；用 `MobileParty.MainParty?.MapEvent` 读取玩家当前遭遇。
- **不要用它创建战斗：** 创建战斗应走 `StartBattleAction.Apply`、遭遇模型和 `MapEventManager` 的既有流程，不能直接调用内部 `Initialize`。
- **不要把它当作世界变更器：** `SetOverrideWinner`、`DoSurrender`、`EndByRunAway`、`FinishBattleAndKeepSiegeEvent` 和 `FinalizeEvent` 都是特定战斗协议中的流程入口，不是通用的“改胜负/删对象”方法。一般战役状态改变仍应使用对应的 `*Action` 或官方事件时机。
- **不要在错误层修改它：** `MapEvent` 属于 Campaign；`Mission.Current` 属于临时战斗场景。Agent、Team、任务行为和 Mission 资源不应写入 `MapEvent` 的长期引用。

## 依赖图

```text
Campaign
  └─ MapEventManager ── MapEvent ── MapEventSide ── MapEventParty ── PartyBase
                                      ├─ MobileParty / Army
                                      ├─ Settlement / SiegeEvent
                                      └─ MapEventComponent

StartBattleAction / EncounterModel ── 创建与初始化
CampaignEvents.MapEventStarted ───── 订阅者（CampaignBehavior）
CampaignMission / Mission ────────── 玩家战斗的临时投影
MapEventEnded ────────────────────── 结算后的清理与下游行为
```

**上游：** [Campaign](../Campaign)、[MapEventManager](../MapEventManager)、[StartBattleAction](../../campaign-ext/StartBattleAction)、[EncounterModel](../EncounterModel)、攻击方和防守方 `PartyBase`。围城事件还依赖 `Settlement.SiegeEvent` 和 `BesiegerCamp`。  
**下游：** [CampaignEvents](../CampaignEvents) 的 `MapEventStarted/Ended`、遭遇菜单、[CampaignMission](../CampaignMission)、[Mission](../../mission/Mission)、[CampaignBehaviorBase](../CampaignBehaviorBase)、战斗统计、据点名称牌和视觉对象。  
**相关模型：** [MilitaryPowerModel](../MilitaryPowerModel) 计算 `SimulationContext` 和队伍力量；[CombatSimulationModel](../CombatSimulationModel) 等模型参与无玩家战斗的模拟，但 Model 只计算规则，不取代 `MapEvent` 的生命周期。

## 如何获取实例

### 当前玩家事件

`MobileParty.MainParty` 是最直接的获取路径。它可能为 `null`，或在离开遭遇后已经没有 `MapEvent`；读取后仍需检查 `IsFinalized`。

```csharp
MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    int totalMen = mapEvent.GetNumberOfInvolvedMen();
    BattleSideEnum winner = mapEvent.WinningSide;
    Debug.Print($"Map event {mapEvent.EventType}: {totalMen} men, winner={winner}");
}
```

`MapEvent.PlayerMapEvent` 是同一条玩家事件路径的静态便捷入口；它依赖 `MobileParty.MainParty`，不能在主菜单或 Campaign 销毁后调用。

### 监听创建和结束

对于需要跟踪所有战斗的 `CampaignBehaviorBase`，应该在注册时订阅，并让 owner 负责清理监听器。事件签名来自 v1.4.5 的 `CampaignEvents`：开始事件提供 `MapEvent`、攻击方和防守方，结束事件只提供 `MapEvent`。

```csharp
public sealed class BattleAuditBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.MapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
        CampaignEvents.MapEventEnded.AddNonSerializedListener(this, OnMapEventEnded);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)
    {
        Debug.Print($"Started {mapEvent.EventType}: {attackerParty.Name} vs {defenderParty.Name}");
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        Debug.Print($"Ended {mapEvent.EventType}; finalized={mapEvent.IsFinalized}");
    }
}
```

### 遍历活动事件

`Campaign.Current.MapEventManager.MapEvents` 是管理器持有的活动集合。遍历它适合做一次只读诊断；不要在遍历期间通过 `FinalizeEvent`、销毁队伍或加入战斗改变集合。

```csharp
foreach (MapEvent mapEvent in Campaign.Current.MapEventManager.MapEvents)
{
    if (!mapEvent.IsFinalized && mapEvent.IsSiegeAssault)
    {
        PartyBase leader = mapEvent.GetLeaderParty(BattleSideEnum.Attacker);
        Debug.Print($"Siege assault leader: {leader?.Name}");
    }
}
```

## 关键状态：读什么

| 成员 | 用途与边界 |
|---|---|
| `EventType`、`IsFieldBattle`、`IsRaid`、`IsSiegeAssault`、`IsSallyOut`、`IsBlockade` | 判断专有流程。不要用“有 `MapEventSettlement`”代替事件类型；野战附近村庄也可能成为关联据点。 |
| `State`、`IsFinalized`、`BattleState` | 判断事件是否仍在运行、是否等待移除以及胜负状态。`BattleState` 可能尚未决定；只有 `HasWinner` 为真时才读取 `Winner` 或 `WinningSide` 作为最终结果。 |
| `AttackerSide`、`DefenderSide`、`GetMapEventSide`、`PartiesOnSide` | 读取一侧的领导队伍和参战队伍。返回的列表代表事件内部状态，不要把它当作自己的可变 roster。 |
| `InvolvedParties`、`GetLeaderParty`、`GetNumberOfInvolvedMen` | 查询所有参战 `PartyBase`、某侧领导者和人数；调用后仍要为队伍离场和事件收尾留出边界。 |
| `Position`、`MapEventSettlement`、`EventTerrainType`、`SimulationContext` | 将战斗定位到地图、据点或军事力量计算场景。位置可能在地图变化或劫掠转野战时被修正。 |
| `WinningSide`、`Winner`、`DefeatedSide`、`RetreatingSide`、`EndedByRetreat`、`PursuitRoundNumber` | 读取结算与追击结果。事件未结束、无人获胜或双方正在撤退时，不要据此发放奖励或保存永久状态。 |
| `PlayerMapEvent`、`IsPlayerMapEvent`、`IsPlayerSimulation` | 区分玩家事件与 AI/模拟事件。玩家事件会进入 Mission/遭遇 UI，不代表所有模拟事件都经过同一界面。 |
| `Component`、`TroopUpgradeTracker`、`WasEverInLootingPhase` | 访问事件类型组件、玩家队伍升级跟踪和战利品阶段状态。组件内部状态可能只在对应事件类型成立时有效。 |

## 关键方法：按主题使用

### 读取参战关系和力量

`GetMapEventSide`、`PartiesOnSide`、`GetLeaderParty`、`CanPartyJoinBattle`、`GetNumberOfInvolvedMen`、`HasTroopsOnBothSides` 和 `GetStrengthsRelativeToParty` 适合做只读判断。`CanPartyJoinBattle` 是当前事件状态下的资格检查，不是把队伍加入事件的命令；加入还必须经过队伍、遭遇和事件组件的完整同步。

### 模拟与玩家战斗边界

`SimulateBattleSetup`、`SimulateBattleRound`、`ResetBattleState`、`SetOverrideWinner` 和 `SetDefenderPulledBack` 会影响模拟或结算状态。它们在 SandBox 的 Mission 控制器和战役模拟流程中按阶段使用。自定义 Mission 不应为了“快速结束战斗”随意设置胜者；应让 `CampaignMission`、`PlayerEncounter` 和相应 `MissionBehavior` 产生合法结果，再由战役层结算。

### 收尾与地图变化

`BeginWait` 只能表达等待阶段；`EndByRunAway`、`DoSurrender`、`FinishBattleAndKeepSiegeEvent` 和 `FinalizeEvent` 会触发撤退、胜负、围城保留、队伍脱离、事件广播和资源清理。`SetPositionAfterMapChange`、`CheckPositionsForMapChangeAndUpdateIfNeeded` 和 `OverrideMapEventSettlementForRaidToFieldBattleSwitch` 也要求调用者处在地图变化或对应遭遇流程中。它们不是可在任意 tick 中调用的普通 setter。

## 与 Mission、围城和事件的边界

- **Campaign 到 Mission：** `MapEvent` 保存战役战斗，`CampaignMission` 的原生 `Open` 入口把当前双方和组件状态投影到 `Mission`。Mission 结束后，结果必须按原生回写顺序返回 Campaign；不要在 `OnMissionEnded` 中持有旧的 Agent、Team 或 Mission 引用。
- **玩家专用收尾：** `PlayerEncounter` 的 `DoApplyMapEventResults` 会先发布玩家战斗结束通知，再提交 MapEvent 结果；`FinalizeBattle` 只有在胜利、外交结束或特定突袭/伏击条件满足时才调用 `FinalizeEvent`，否则只是离开当前战斗并保留事件继续运行。不要用普通 AI 的 `Update` 完成逻辑替代这条路径。
- **围城：** `SiegeEvent` 的攻城、出城、攻城外战和封锁战会创建不同 `BattleTypes` 的 `MapEvent`。战斗期间 `SiegeEvent.Tick` 会暂停或等待；不要只清 `Settlement.SiegeEvent`，否则 `MapEvent`、攻城营和队伍关系会分裂。
- **事件：** `CampaignEvents.MapEventStarted` 在 `Initialize` 完成双方、位置、组件和初始状态后分发；`MapEventEnded` 在收尾时分发。监听器应把结果复制为自己的标量或稳定 ID，而不是持有事件引用跨读档。
- **模型：** `MilitaryPowerModel`、`CombatSimulationModel` 等负责计算，`MapEvent` 负责持有运行态并触发结算。替换 Model 不等于替换一个已存在的事件，也不应在事件运行中把 Model 变成 `null`。

## 风险与崩溃边界

- **阶段错误：** 在模块加载、主菜单、Campaign 尚未建立或 Campaign 已销毁时读取 `Campaign.Current`、`MapEvent.PlayerMapEvent` 或 `CampaignTime`，会得到空引用或进入错误生命周期。
- **过期引用：** `IsFinalized` 后，`MapEventSide`、`MapEventParty`、`MapEventVisual` 和相关 `PartyBase` 可能已经被清理或重新关联。回调里只提取需要的值，下一次 tick 重新获取。
- **错误地直接写状态：** 改 `BattleState`、胜者、双方列表或队伍的 `MapEventSide` 会绕过追击、俘虏、战利品、关系、荣誉、据点和事件分发，造成逻辑不一致，严重时会在后续 tick 或读档时崩溃。
- **错误地结束事件：** 手动 `FinalizeEvent` 可能在 Mission、围城或追击仍在使用事件时清掉对象；围城事件还可能触发攻城营移除与据点重置的阶段断言。
- **结束通知的时机：** `MapEventEnded` 触发时 `State` 已是 `WaitingRemoval`，但双方尚未执行最终 `Clear`；监听器可以读取已提交的标量结果，却不应把仍在内存中的 Party/Side 引用保存到下一帧或存档。
- **围城对象缺失：** `Initialize` 对围城类型会从 `MapEventSettlement.SiegeEvent` 取攻城方参与队伍；自定义流程若只设置据点或战斗方而未建立完整 `SiegeEvent`，会在初始化阶段空引用。
- **玩家与 AI 混淆：** `MapEvent.PlayerMapEvent` 只表示玩家主队的事件。AI 模拟事件可能没有 Mission；把所有 `MapEvent` 都当作玩家战斗会访问错误的 UI 或 Mission 状态。
- **存档边界：** `MapEvent` 与 `MapEventManager` 属于 Campaign 的保存图，[SaveManager](../../save-system/SaveManager) 负责该保存图的序列化；部分字段由 `[SaveableField]`/`[SaveableProperty]` 持久化，视觉对象和地形缓存会在读档后重建。自定义 Behavior 只保存自己的稳定 ID、枚举和标量，读档后从 `Campaign.Current.MapEventManager` 或队伍重新获取事件。

## 版本注记

本文以 v1.4.5 反编译源码为准。`BattleTypes`、海战/封锁组件、围城 Mission 投影和读档修复逻辑可能随版本变化；跨版本 mod 应按目标版本重新检查 `MapEventManager`、`EncounterModel` 和 `CampaignEvents` 的入口与参数。

## 导航

- ↑ Parent：[Campaign API](../)
- ↔ Siblings：[PartyBase](../PartyBase) · [MobileParty](../MobileParty) · [Settlement](../Settlement) · [SiegeEvent](../SiegeEvent)
- Related：[MapEventManager](../MapEventManager) · [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignMission](../CampaignMission)
- Mission boundary：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- Mutation entry：[StartBattleAction](../../campaign-ext/StartBattleAction)
