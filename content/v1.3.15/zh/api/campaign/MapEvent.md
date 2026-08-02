---
title: "MapEvent"
description: "战役地图上一次敌对遭遇的运行时载体：持有攻防双方 MapEventSide、驱动战斗模拟与战利品/俘虏结算，是 FieldBattle、Raid、Siege、Hideout 等所有地图战斗的基类抽象。"
---
# MapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public sealed class MapEvent : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`

## 概述

`MapEvent` 是战役地图上**一次正在进行的敌对遭遇**的对象化表示。当两个（或两组）`MobileParty`/`PartyBase` 在地图上相遇并开战后，引擎就创建一个 `MapEvent`，把参战各方归入「攻方（`AttackerSide`）」与「守方（`DefenderSide`）」两个 [`MapEventSide`](../../campaign-ext/MapEventSide/)，然后在每个战役 tick 里用 [`CombatSimulationModel`](../../core/) 模拟战斗，直到分出胜负或一方撤退，最后完成战利品、俘虏、声望、影响力与据点（如攻城）的结算。

它**不是**战斗场景本身：真正的战场是一个 `Mission`，`MapEvent` 始终活在战役（Campaign/Map）层。两者通过 `BattleObserver`（`IBattleObserver`）桥接——战场把每回合的伤亡回报给 `MapEvent`，由它落地到名册与英雄状态。

## 一句话职责

把「地图上谁正和谁打仗、打到什么阶段、谁赢了、战利品怎么分」这套状态与流程，封装成一个可被战役系统每帧推进、可被 mod 只读观察的运行时对象。

## 心智模型

### 它是什么 / 不是什么

- 是：地图层的一次遭遇快照 + 一个推进状态机（`MapEventState.Begin → Wait → WaitingRemoval`）。
- 不是：可渲染的 3D 战斗、一个可被你自由 `new` 的普通类、或一个持久保存「历史战报」的容器。它只描述**当前正在发生**的那一场。

### 生命周期（由引擎驱动，不要手动重放）

1. **创建**：引擎内部 `new MapEvent()` 后调用 `Initialize(attacker, defender, component, battleType)`。攻城/出城/封锁类由 [`MapEventManager`](../../core/) 的 `StartSiegeMapEvent` / `StartSallyOutMapEvent` / `StartSiegeOutsideMapEvent` / `StartBlockadeBattleMapEvent` 启动；玩家遭遇到的野战/劫掠/据点则由 [`PlayerEncounter.StartBattle()`](../../campaign-ext/PlayerEncounter/) 经 `StartBattleInternal` 创建。创建后 `State = Wait`，并触发 `OnMapEventStarted`。
2. **双方入场**：各方通过 `party.MapEventSide = ...` 被归入某一侧（`AddInvolvedPartyInternal`），`AttackerSide` / `DefenderSide` 的 `Parties` 列表随之增长；据点内驻军、附近友军也会被拉入。
3. **模拟推进**：每个战役 tick，`MapEventManager.Tick()` 遍历活动事件调用 `Update()`——在非玩家事件和劫掠事件上做战斗模拟（`SimulateBattleSessionForMapEvent`），根据兵力归零 / 士气崩溃 / 撤退判定 `BattleState`，决出胜负后 `OnBattleWon` 计算战果。
4. **结算与收尾**：分出胜负、外交停战或撤退后进入 `FinalizeEvent()`，`State` 置为 `WaitingRemoval`，触发 `OnMapEventEnded`，完成战利品/俘虏/船只分配、英雄阵亡（`KillCharacterAction`）、败方解体（`DestroyPartyAction`）、攻城完成（`SiegeCompleted` / `AfterSiegeCompleted`）。
5. **移除**：下一 tick `MapEventManager.Tick()` 检测到 `IsFinalized` 即把事件从 `MBList` 中移除。

### 谁创建 / 谁持有

- **创建者**：仅引擎（`MapEventManager` + `PlayerEncounter`），构造函数 `internal`，**mod 不能 `new MapEvent()`**。
- **持有者**：`Campaign.Current.MapEventManager` 用 `MBList<MapEvent>` 持有所有活动事件；同时 `MapEvent` 继承自 `MBObjectBase`，因此也登记在 [`MBObjectManager`](../../campaign-ext/MBObjectManager/) 的对象系统中，可被存档序列化。玩家那一场还会被 `PlayerEncounter.Current` 引用。

### 所在层

战役（Campaign）/ 地图层，与 `Mission`（战斗场景）平行。所有公开成员都是「地图态」数据，不依赖某个具体的战场实例。

## 何时用 / 何时不要用

**应当用 `MapEvent` 的场景**
- 通过 [`CampaignEvents`](../../campaign-ext/CampaignEvents/) 订阅 `OnMapEventStarted` / `OnMapEventEnded` / `OnPartyAddedToMapEvent` 等，在遭遇生命周期里读取或响应（统计、提示、条件触发任务）。
- 在合法时机（玩家手动决策、菜单逻辑）读取 `MapEvent.PlayerMapEvent` / `MobileParty.MapEvent` 的状态：双方兵力、战力、胜负、据点、是否海战等。
- 由引擎托管的「结束」操作：`MapEventManager.FinalizePlayerMapEvent()`（玩家事件，内部顺带 `PlayerEncounter.Finish()`）、`MapEvent.DoSurrender(side)`、`MapEvent.SetOverrideWinner(...)`（用于任务脚本强制结果）。

**不要用 / 危险用法**
- 不要自己 `new MapEvent()` 或调用 `internal Initialize(...)`——事件必须由引擎按标准流程建立，否则 `MapEventManager` 不会登记它、模拟与收尾都不会跑。
- 不要直接改写 `_sides`、`AttackerSide`/`DefenderSide` 的 `Parties`，或手动给 `party.MapEventSide` 赋值来「拉人入伙」。让引擎通过 `PartyBase.MapEventSide` 的标准路径管理；强行改会破坏模拟与战利品归属。
- 不要在事件已 `IsFinalized`（进入 `WaitingRemoval`）后还访问两侧的具体 `MapEventParty`——见下方风险段。
- 想「发起一场战斗」应走 [`PlayerEncounter`](../../campaign-ext/PlayerEncounter/) 与遭遇模型，而不是构造 `MapEvent`。

## 依赖图

- **上游（创建/提供数据）**
  - [`MobileParty`](../MobileParty/) / [`PartyBase`](../PartyBase/)：事件的参战主体，通过 `MapEventSide.Parties` 聚合。
  - [`PlayerEncounter`](../../campaign-ext/PlayerEncounter/)：驱动玩家遭遇的创建与结束。
  - [`MapEventManager`](../../core/)（战役系统内部）：登记、tick、移除所有活动事件。
  - [`MBObjectManager`](../../campaign-ext/MBObjectManager/)：作为 `MBObjectBase` 的注册与存档容器。
- **下游（被驱动 / 结果落点）**
  - [`MapEventSide`](../../campaign-ext/MapEventSide/)：攻防两侧的具体阵营数据与模拟。
  - [`SiegeEvent`](../../campaign-ext/SiegeEvent/)：攻城类事件的父级抽象，`MapEventSettlement.SiegeEvent` 在收尾时联动。
  - 据点结算：被劫掠的 [`Settlement`](../Settlement/) 村庄、被攻破的城镇。
  - 各类 `*Action`：`KillCharacterAction`、`TakePrisonerAction`、`DestroyPartyAction`、`ChangeShipOwnerAction`、`EndCaptivityAction`、`LeaveSettlementAction`——在结算阶段被调用。
- **相关 Events（[`CampaignEvents`](../../campaign-ext/CampaignEvents/) 家族）**
  - `OnMapEventStarted(MapEvent, PartyBase, PartyBase)`、`OnMapEventEnded(MapEvent)`
  - `OnPartyAddedToMapEvent(PartyBase)`、`OnNearbyPartyAddedToPlayerMapEvent(MobileParty)`
  - `OnCollectLootItems(PartyBase, ItemRoster)`、`OnLootDistributedToParty(PartyBase, PartyBase, ItemRoster)`、`OnPlayerPartyKnockedOrKilledTroop(CharacterObject)`
  - `SiegeCompleted(Settlement, MobileParty, bool, BattleTypes)`、`AfterSiegeCompleted(Settlement, MobileParty, bool, BattleTypes)`
- **相关 Models（通过 `Campaign.Current.Models` 取用）**
  - `CombatSimulationModel`（战斗模拟与回合）、`BattleRewardModel`（战利品/声望/影响力/船只）、`EncounterModel`（撤退/加入判定）、`MilitaryPowerModel`、`MapDistanceModel`、`PartyMoraleModel`、`PartyHealingModel`、`DifficultyModel`、`ShipCostModel`、`TroopSupplierProbabilityModel`——均通过 `Campaign.Current.Models` 取用。
- **存档点**：随战役存档整体序列化（`MapEvent` 本身 + `MapEventManager` 的 `MBList`）；`OnLateLoad` / `OnAfterLoad` 负责旧版本存档的兼容重建（如 v1.2.0 / v1.3.0 / v1.4.1 字段迁移）。

## 风险（务必注意）

1. **事件结束后访问已清空的双方**：`FinalizeEvent()` → `FinalizeEventAux()` 会调用 `sides[i].Clear()` 清空每侧的 `MapEventParty` 列表。事件进入 `WaitingRemoval` 后，`AttackerSide.Parties` / `DefenderSide.Parties` 已空，`LeaderParty` 可能变为 `null`。在 `OnMapEventEnded` 回调里若再去遍历 `InvolvedParties` 或读 `LeaderParty` 姓名，会得到空数据甚至 `NullReferenceException`。需要的结算信息（如输赢、据点）应在 finalize 之前或回调入口处先缓存。
2. **持有过期的 `MobileParty` / `PartyBase` 引用**：败方在收尾时可能被 `DestroyPartyAction.Apply` 销毁，胜方领袖可能被 `RemovePartyLeader()` 替换。把 `MapEvent` 里取到的 party 引用存到跨事件/跨天的数据结构里，会在之后访问到已失效对象。始终用 `Hero`/`PartyBase` 的当前字段或在用前判空与 `IsActive`。
3. **在错误阶段改写状态**：`SetOverrideWinner` / `SetDefenderPulledBack` / `ResetBattleState` / `DoSurrender` 只在特定战斗阶段有意义。对已经 `IsFinalized` 或还未真正开打的事件调用，会产生与模拟结果冲突、或触发二次结算的诡异状态。
4. **玩家事件必须走专用收尾**：直接调 `MapEvent.FinalizeEvent()` 只清理事件本身；玩家那一场还需 `PlayerEncounter.Finish()` 把遭遇状态收掉，否则 `PlayerEncounter.Current` 仍挂着、菜单与后续遭遇逻辑会错乱。优先用 `MapEventManager.FinalizePlayerMapEvent()`。
5. **存档期引用悬空 / 坏档**：`MapEvent` 通过 `SaveableField` 引用 `PartyBase`、据点、`MapEventComponent`。若你的 mod 在自定义存档数据里长期挂着一个 `MapEvent` 引用，而该事件在加载时已因版本迁移被 `FinalizeEvent()` 掉（见 `OnAfterLoad` 的 v1.2.0 清理分支），引用会指向一个等待移除的废弃对象。mod 自定义数据不要在存档里长期保留 `MapEvent` 引用，应存 `stringId` 或 `PartyBase` 的 stable 标识。
6. **不要手动改 `party.MapEventSide`**：它是引擎在 `Initialize` / `AddInvolvedPartyInternal` / `RemoveInvolvedPartyInternal` 中统一维护的。手动赋值会绕过战力重算（`RecalculateRenownAndInfluenceValuesOnPartyInvolved`）与视觉/AI 更新，导致战斗结果或地图表现异常。

## 关键成员（按主题分组）

### 双方与阵营

- `MapEventSide AttackerSide` / `MapEventSide DefenderSide`：攻/守两侧的聚合视图，下标 `_sides[1]` / `_sides[0]`。**副作用**：finalize 后其 `Parties` 被清空。**调用时机**：读取参战方、兵力、战力时；不要改写。
- `MapEventSide GetMapEventSide(BattleSideEnum side)`：按枚举取某一侧，等价于 `(side == Attacker ? AttackerSide : DefenderSide)`。**时机**：通用访问，避免硬编码下标。
- `MBReadOnlyList<MapEventParty> PartiesOnSide(BattleSideEnum side)`：该侧参战 `MapEventParty` 只读列表。**时机**：遍历各方兵力与贡献。
- `PartyBase GetLeaderParty(BattleSideEnum side)`：该侧领袖 party（通常第一个加入者）。**时机**：取交战对象名称、判断是否为某家族；finalize 后可能为 `null`。
- `IEnumerable<PartyBase> InvolvedParties`：展平两侧所有参战 party 的枚举。**时机**：对全体参战方做处理（如发通知）；finalize 后为空。
- `BattleSideEnum GetOtherSide(BattleSideEnum side)`：取对立侧枚举。
- `bool CanPartyJoinBattle(PartyBase party, BattleSideEnum side)`：判断某 party 能否作为该侧加入（同侧须停战、对侧须交战）。**时机**：在你想判断「附近 AI 会不会卷入」时只读查询，不要据此手动拉人。

### 胜负与战斗状态

- `BattleState BattleState`（`None`/`AttackerVictory`/`DefenderVictory`/`DefenderPullBack` 等）：当前胜负态。**副作用**：置为胜利时会触发 `OnBattleWon` → 计算结果。**时机**：只读观察；要强制结果用 `SetOverrideWinner`。
- `bool HasWinner` / `BattleSideEnum WinningSide` / `MapEventSide Winner` / `BattleSideEnum DefeatedSide`：派生胜负信息。**时机**：结算/提示时读取。
- `MapEventState State`（`Begin`/`Wait`/`WaitingRemoval`）；`bool IsFinalized => State == WaitingRemoval`：**在任何访问双方成员前先判 `IsFinalized`**。
- `BattleTypes EventType` 与 `bool IsFieldBattle` / `IsRaid` / `IsSiegeAssault` / `IsSallyOut` / `IsSiegeOutside` / `IsBlockade` / `IsHideoutBattle` / `IsForcingVolunteers` / `IsForcingSupplies` / `IsSiegeAmbush`：事件类型与各子类谓词。**时机**：按类型分支逻辑（如只对 `Raid` 做村庄处理）。
- `BattleSideEnum RetreatingSide` / `bool EndedByRetreat` / `int PursuitRoundNumber`：撤退与追击信息（v1.3.0 起稳定存在）。**时机**：判断「是不是被击退收场」。
- `bool IsPlayerMapEvent`（`this == MapEvent.PlayerMapEvent`）、`BattleSideEnum PlayerSide`（`PartyBase.MainParty.Side`）、`static MapEvent PlayerMapEvent`（`MobileParty.MainParty?.MapEvent`）：玩家相关快捷访问。**时机**：把逻辑限定在玩家遭遇内。
- `float[] StrengthOfSide`（长度 2，攻/守战力）、`void RecalculateStrengthOfSides()`：双方战力快照。**时机**：战前预估、UI 展示；`RecalculateStrengthOfSides` 在阵营变化后刷新。
- `MBList<BattleSideEnum> WonRounds`：各模拟回合的赢家；`int UpdateCount => WonRounds.Count`。**时机**：复盘单场进程。

### 地图位置与据点

- `CampaignVec2 Position`：事件在地图上的坐标。**时机**：渲染、距离判定；`SetPositionAfterMapChange` / `CheckPositionsForMapChangeAndUpdateIfNeeded` 由地图切换时调用。
- `Settlement MapEventSettlement`：关联的据点（劫掠的村庄、被攻的城镇、附近的村庄）。可能为 `null`（纯野战）。**时机**：读取被袭击/被攻目标；攻城收尾会用到 `MapEventSettlement.SiegeEvent`。
- `TerrainType EventTerrainType`、`PowerCalculationContext SimulationContext`：地形与模拟上下文（影响战力模型）。**时机**：自定义模拟或展示。
- `bool IsNavalMapEvent => !Position.IsOnLand`：是否海战。**时机**：分支船只逻辑。
- `CampaignTime BattleStartTime`：开打时刻。**时机**：统计持续时间。

### 参与方遍历与贡献

- `int GetNumberOfInvolvedMen()` / `int GetNumberOfInvolvedMen(BattleSideEnum side)`：总/单侧参战人数。**时机**：战力提示、任务条件。
- `bool HasTroopsOnBothSides()`：两侧都还有存活兵力。**时机**：判断是否还能继续打。
- `void GetStrengthsRelativeToParty(BattleSideEnum partySide, out float partySideStrength, out float opposingSideStrength)`：基于 `SimulationContext` 的相对战力。**时机**：给玩家显示「我方 vs 敌方」对比。
- `float GetPlayerBattleContributionRate()`：玩家在己方贡献占比（0~1）。**时机**：战利品分配展示。
- `bool IsPlayerSergeant()`：玩家是否作为附属部队参战（非领袖）。**时机**：区别「主角亲征」与「作为军团小弟」。

### 控制（谨慎使用）

- `void FinalizeEvent()`：立即收尾（置 `WaitingRemoval` 并跑结算）。玩家事件请用 `MapEventManager.FinalizePlayerMapEvent()`。
- `void DoSurrender(BattleSideEnum side)`：让某侧投降，等价于对方获胜。**时机**：任务/剧情强制结果。
- `void SetOverrideWinner(BattleSideEnum winner)` / `void SetDefenderPulledBack()` / `void ResetBattleState()`：覆盖或重置战斗结果。**时机**：脚本化战斗；必须在事件活跃且未被 finalize 时调用。

## 最小真实示例

### 示例 1：订阅战役事件，观察玩家遭遇的开始与结束

```csharp
// 在 CampaignBehaviorBase 的 RegisterEvents 中挂监听
CampaignEvents.OnMapEventStarted.AddNonSerializedListener(this, OnMapEventStarted);
CampaignEvents.OnMapEventEnded.AddNonSerializedListener(this, OnMapEventEnded);

private void OnMapEventStarted(MapEvent mapEvent, PartyBase attacker, PartyBase defender)
{
    if (!mapEvent.IsPlayerMapEvent)
        return;

    // EventType 是 BattleTypes 枚举，可用 IsRaid / IsSiegeAssault 等谓词分支
    string typeName = mapEvent.IsRaid ? "劫掠"
        : (mapEvent.IsSiegeAssault ? "攻城" : "野战");
    InformationManager.DisplayMessage(new InformationMessage(
        $"玩家卷入{typeName}：{attacker.Name} 对 {defender.Name}"));
}

private void OnMapEventEnded(MapEvent mapEvent)
{
    // 此时事件可能已进入 WaitingRemoval，sides 可能已清空；只读取安全的标量字段
    if (mapEvent.EventType == MapEvent.BattleTypes.Raid && mapEvent.HasWinner)
    {
        Settlement raided = mapEvent.MapEventSettlement; // 被劫掠的村庄（未被清空）
        if (raided != null)
        {
            // 例如：记录某村庄被劫次数
        }
    }
}
```

### 示例 2：在合法时机读取玩家当前 MapEvent 的状态

```csharp
// 通过静态属性拿到玩家正在参与的事件
MapEvent playerEvent = MapEvent.PlayerMapEvent;
if (playerEvent == null)
    return;

BattleSideEnum mySide = playerEvent.PlayerSide;
MapEventSide mySideData = playerEvent.GetMapEventSide(mySide);
int involvedMen = playerEvent.GetNumberOfInvolvedMen(mySide);
float myStrength = playerEvent.StrengthOfSide[(int)mySide];
bool enemyStillFighting = playerEvent.HasTroopsOnBothSides();

InformationManager.DisplayMessage(new InformationMessage(
    $"我方参战兵力 {involvedMen}，战力 {myStrength:F0}，敌军仍在抵抗：{enemyStillFighting}"));

// 也可以从任意 party 反向拿到它所在的事件
MobileParty someParty = MobileParty.MainParty;
MapEvent partyEvent = someParty.MapEvent; // 非玩家 party 同样适用
```

### 示例 3：读取全部活动事件（调试 / 统计）

```csharp
// Campaign.Current.MapEventManager 持有所有活动事件
foreach (MapEvent mapEvent in Campaign.Current.MapEventManager.MapEvents)
{
    if (mapEvent.IsFinalized)
        continue; // 已收尾的跳过，避免访问空 sides

    int attackers = mapEvent.GetNumberOfInvolvedMen(BattleSideEnum.Attacker);
    int defenders = mapEvent.GetNumberOfInvolvedMen(BattleSideEnum.Defender);
    // ...
}
```

## 跨版本提示

- 本页以 **v1.4.5** 源码为权威；文档落在 `v1.3.15` 子树。核心生命周期在 1.3.x 已稳定。
- `WonRounds`、`RetreatingSide`、`PursuitRoundNumber` 等字段在 **v1.3.0** 才成为稳定字段（`OnAfterLoad` 中有对 `< v1.3.0` 存档的兼容性重建）；写跨版本 mod 时对这些字段做空/缺省判断。
- v1.4.1 引入：劫掠事件中若 `MapEventSettlement.LastAttackerParty != MobileParty.MainParty`，加载旧档时会强制 `PlayerEncounter.Finish()`。若你的 mod 在旧档加载期操作 raid 事件，注意该收尾分支。

## 参见

- ↑ 父级：[战役枢纽 Campaign](../Campaign/)
- ↑ 模块索引：[api 索引](../)
- ↔ 同级 / 相关类型
  - [MapEventSide](../../campaign-ext/MapEventSide/) — 攻防两侧的具体阵营数据
  - [SiegeEvent](../../campaign-ext/SiegeEvent/) — 攻城类事件的父级抽象
  - [PlayerEncounter](../../campaign-ext/PlayerEncounter/) — 玩家遭遇的创建与结束
  - [EncounterManager](../../campaign-ext/EncounterManager/) — 遭遇与地图事件调度
  - [CampaignEvents](../../campaign-ext/CampaignEvents/) — 地图事件相关事件家族
- 同桶类型
  - [MobileParty](../MobileParty/) — 参战主体（机动部队）
  - [PartyBase](../PartyBase/) — 参战主体（含驻军/据点方）
  - [Settlement](../Settlement/) — 被劫掠/被攻的据点
  - [Hero](../Hero/) — 参战英雄与阵亡结算落点
- 基础设施
  - [MBObjectManager](../../campaign-ext/MBObjectManager/) — `MapEvent` 作为 `MBObjectBase` 的注册与存档容器
