---
title: "EncounterManager"
description: "战役地图遭遇的调度边界：从移动队交互到 PlayerEncounter、MapEvent 与 Mission 的生命周期。"
---
# EncounterManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class EncounterManager`  
**Base:** 无  
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## 一句话职责

它把战役地图上的「移动队现在能否交互、两支队伍是否开始遭遇、队伍如何进入据点」这几个入口接到既有的 `PlayerEncounter`、`MapEvent`、`SiegeEvent` 和 `*Action` 流程；它不是遭遇状态的持有者，也不是战场 `Mission`。

## 心智模型

`EncounterManager` 是一个无实例的战役层路由器。调用它时，真正发生状态变化的对象通常是 `MobileParty` / `PartyBase`、`Settlement`、`PlayerEncounter.Current` 或 `MapEvent`。

- **谁创建 / 谁持有：** `EncounterManager` 自身不能 `new`，也没有 `Current`。`Campaign.Current` 持有 `MobileParties`、`MapEventManager` 和 `PlayerEncounter`；`MapEventManager` 持有活动 `MapEvent` 列表；`MissionState` / `CampaignMissionManager` 持有战斗场景的 `Mission`。
- **所在层：** 该类属于 Campaign/Map 层。它只检查地图上的队伍和据点状态，并把决定交给 `IInteractablePoint`、`StartBattleAction`、`EnterSettlementAction` 或 `PlayerEncounter`。
- **玩家遭遇：** `StartPartyEncounter` 或 `StartSettlementEncounter` 只负责建立/切换玩家的战役遭遇上下文。`PlayerEncounter.Start()` 把新对象写入 `Campaign.Current.PlayerEncounter`，`PlayerEncounter.Init(...)` 再绑定双方；随后 `PlayerEncounter.StartBattle()` 才会创建或接入 `MapEvent`。
- **真实战场：** `MapEvent` 仍是地图层的战斗状态。需要 Agent、Team、Formation 或场景对象时，玩家路径才经由 `CampaignMission.OpenBattleMission` / `OpenSiegeMissionWithDeployment` 进入 `Mission`。`Mission.Current` 是短寿命的场景入口，不是 `EncounterManager` 的替代品。
- **调用时机：** 引擎在 `Campaign` 的地图 tick 中调用 `Tick(dt)`；`MobilePartyAi.CheckPartyNeedsUpdate()` 还会在 AI 行为改变后以 `dt = 0f` 重新检查单支队伍。不要把这些入口当作自定义计时器或 Mission 帧回调。

## 遭遇状态机：谁推进什么

下表是源码中的实际边界。`EncounterManager` 只负责前两步和路由，后续状态由各自的持有者推进。

| 阶段 | 引擎入口 | 真实状态变化 | 模组应观察/介入的位置 |
|---|---|---|---|
| 1. 地图 tick | `Campaign.Tick` → `EncounterManager.Tick(dt)` | 在时间未停止时遍历 `Campaign.Current.MobileParties` | 不要手动调用 `Tick`；需要观察遭遇时订阅 `CampaignEvents` |
| 2. 单队伍资格检查 | `HandleEncounterForMobileParty(mobileParty, dt)` | 检查活动、附属、`MapEventSide`、据点/攻城、目标和 AI 可交互性；通过后调用 `IInteractablePoint.CanPartyInteract` 与 `OnPartyInteraction` | 修改 AI 目标后，可在行为更新回调中让引擎重新检查该队伍 |
| 3. 路由 | `StartPartyEncounter` 或 `StartSettlementEncounter` | 玩家可能加入/重启 `PlayerEncounter`；NPC 可能调用 `StartBattleAction`、加入同一 `MapEvent`、开始攻城或进入据点 | 只在已确认的菜单、任务或交互回调中调用对应入口 |
| 4. 玩家上下文 | `PlayerEncounter.Start()` → `Init(...)` | `Campaign.Current.PlayerEncounter` 持有当前对象，保存遭遇双方、据点和玩家初始战力；`EncounterGameMenuModel` 决定遭遇菜单/是否立即开战 | 通过 `PlayerEncounter.Current` 读取当前玩家语境，先判空并确认 `IsActive` |
| 5. 地图事件 | `PlayerEncounter.StartBattle()` 或 `MapEventManager.Start*MapEvent` | 根据野战、劫掠、据点、攻城、出城、封锁等创建 `MapEvent`，登记进 `Campaign.Current.MapEventManager.MapEvents`；`MapEvent.Initialize` 把双方挂到 `MapEventSide` 并触发开始事件 | 通过 `MapEvent` 和 `CampaignEvents.MapEventStarted` 观察；不要自己 `new MapEvent()` |
| 6. 战场与收尾 | `CampaignMission.Open*Mission` → `Mission.Current`；结束后 `PlayerEncounter.Finish()` | `Mission` 管理临时 Agent/Team/Formation；`MapEvent` 接收战斗观察结果；结束时遭遇、菜单和地图事件依次清理 | Mission 逻辑用 `MissionBehavior`；战役逻辑用 `MapEvent`/`PlayerEncounter`，不要跨层缓存对象 |

### 创建与持有关系

```text
Campaign.Tick
  -> EncounterManager.Tick
     -> HandleEncounterForMobileParty
        -> MobileParty.Ai.AiBehaviorInteractable.OnPartyInteraction
           -> StartPartyEncounter / StartSettlementEncounter
              -> PlayerEncounter.Start + PlayerEncounter.Init
                 -> PlayerEncounter.StartBattle
                    -> MapEventManager / MapEventComponent -> MapEvent
                       -> CampaignMission -> Mission.Current (仅场景期)
```

`PlayerEncounter.Finish()` 是玩家路径的收口：它会结束当前战斗、处理失败方离开半径等逻辑，并把 `Campaign.Current.PlayerEncounter` 和 `Campaign.Current.LocationEncounter` 置空。`MapEvent.FinalizeEventAux` 会先把状态设为 `WaitingRemoval`、触发 `MapEventEnded`，再继续清空两侧；`MapEventManager.Tick()` 在后续 tick 删除事件。因此，结束回调中若需要双方资料，应立即复制标量或名单，不能把 `MapEventSide` / `MapEventParty` 引用带出回调。

## 何时使用，何时不要使用

### 应当使用

- **触发一次已经成立的队伍遭遇：** 你已经在任务、菜单或队伍交互回调中拿到了两个真实的 `PartyBase`，并且希望使用引擎已有的玩家加入、同 faction 合并、敌对战斗和出城菜单分支时，调用 `StartPartyEncounter(attackerParty, defenderParty)`。
- **处理到达据点的地图交互：** 你已经在据点菜单/地图交互中拿到了真实 `MobileParty` 和 `Settlement`，并且需要让引擎区分进入、劫掠、攻城、突击城墙、海上封锁或玩家遭遇时，调用 `StartSettlementEncounter(attackerParty, settlement)`。
- **只读模型：** 在 Campaign 已初始化后读取 `EncounterManager.EncounterModel`，以便把自定义条件交给当前版本的 `EncounterModel` 实现；不要在它前面自己复制一套「能否加入战斗」规则。
- **监听生命周期：** 用 `CampaignEvents.MapEventStarted` / `MapEventEnded` 记录或响应地图战斗，用 `MapEvent` 读取双方、类型和据点，用 `MissionBehavior` 处理已经进入场景后的 Agent 逻辑。

### 不要使用

- **不要每帧直接调用 `Tick` 或 `HandleEncounterForMobileParty`。** `Campaign.Tick` 已经调度它们；重复调用会再次执行 `CanPartyInteract` / `OnPartyInteraction`，可能重复创建菜单、加入事件或切换玩家遭遇。`dt = 0f` 是引擎在 `CheckPartyNeedsUpdate` 中用于即时重检的特殊路径，不是通用时间步长。
- **不要用它代替 `*Action`。** 只想让队伍进入/离开据点时用 `EnterSettlementAction.ApplyForParty` / `LeaveSettlementAction.ApplyForParty`；只想启动劫掠或攻城时沿用源码中的 `StartBattleAction.ApplyStartRaid` / `ApplyStartAssaultAgainstWalls`。不要直接改 `MapEventSide`、`CurrentSettlement` 或 AI 私有状态来模拟这些动作。
- **不要构造地图事件或战场。** `MapEvent` 应由 `MapEventManager` 或 `MapEventComponent` 创建并登记，玩家事件应由 `PlayerEncounter.StartBattle()` 选择事件类型；进入 3D 场景后才使用 `CampaignMission` / `Mission`。
- **不要在 Mission 层读取地图遭遇。** `Mission.Current` 可能为 `null`，而且 Agent 在 Mission 结束后失效。战役层的交战双方、胜负和据点从 `PlayerEncounter` / `MapEvent` 读取。
- **不要把静态类当作可注入服务。** `EncounterManager.Current` 不存在；不要保存一个所谓 manager 实例，也不要给它添加存档字段。

## 依赖图

### 上游：谁把调用送进来

- [`Campaign`](../../campaign/Campaign/)：在地图 tick 中调用 `EncounterManager.Tick`；其 `Models` 提供 `EncounterModel`。
- [`MobileParty`](../../campaign/MobileParty/)：AI 行为和队伍碰撞会触发单队伍检查或 `StartPartyEncounter`。
- [`PartyBase`](../../campaign/PartyBase/)：`StartPartyEncounter` 的统一参战方类型；`PartyBase.MainParty` 是玩家队伍的 Campaign 表示。
- `Settlement`：据点交互把真实的 `MobileParty` 与 `Settlement` 传给 `StartSettlementEncounter`。
- `EncounterGameMenuBehavior`、`SallyOutsCampaignBehavior`、`PlayerArmyWaitBehavior`、问题/任务 Behavior：源码中的菜单、出城、军团等待和任务调用点。

### 下游：它把状态交给谁

- [`PlayerEncounter`](../PlayerEncounter/)：玩家当前遭遇的创建、双方绑定、开战、加入、结果和收尾。
- [`MapEventManager`](../MapEventManager/)：创建、登记、tick 和移除活动 `MapEvent`；其 `MapEvents` 是活动事件的持有列表。
- [`MapEvent`](../../campaign/MapEvent/) 与 [`MapEventSide`](../MapEventSide/)：地图战斗本体和攻守两侧的参战队伍。
- [`SiegeEvent`](../SiegeEvent/)：攻城据点的长期状态；`StartSettlementEncounter` 会启动攻城或把队伍接入已有攻城。
- [`StartBattleAction`](../StartBattleAction/)、[`EnterSettlementAction`](../EnterSettlementAction/)、[`LeaveSettlementAction`](../LeaveSettlementAction/)：被源码用于创建战斗、进出据点和清理玩家位置。
- [`EncounterModel`](../EncounterModel/)：通过 `Campaign.Current.Models.EncounterModel` 暴露当前版本的遭遇规则；`EncounterManager` 不拥有模型实例。

### 事件与 Mission 桥

- `MapEvent.Initialize` 完成双方登记后触发 `CampaignEvents.MapEventStarted`；`FinalizeEventAux` 先把状态设为 `WaitingRemoval` 再触发 `MapEventEnded`，随后才清理两侧。订阅事件比在 `Tick` 中轮询更稳定；结束回调中要立即复制需要的数据。
- `PlayerEncounter.StartBattleInternal` 根据上下文选择 `FieldBattleEventComponent`、`RaidEventComponent`、`HideoutEventComponent`、`SiegeAmbushEventComponent` 或 `MapEventManager.Start*MapEvent`。
- `PlayerEncounter.StartAttackMission`、`StartSiegeAmbushMission`、`StartVillageBattleMission` 等再调用 `CampaignMission.Open*Mission`。`Mission` 只拥有该次场景的 Agent、Team、Formation 和 `MissionBehavior`。

## 关键成员与调用时机

### `EncounterModel`

`public static EncounterModel EncounterModel { get; }`

属性体实际返回 `Campaign.Current.Models.EncounterModel`。它是规则读取入口，不是 `EncounterManager` 内部缓存。只在 Campaign 已创建并完成 Models 注册后读取；不要把 `null` 模型替换当作关闭遭遇系统的方法。

### `Tick(float dt)`

`public static void Tick(float dt)`

它只转发到私有的 `HandleEncounters(dt)`。后者在 `Campaign.Current.TimeControlMode != CampaignTimeControlMode.Stop` 时遍历当前 `MobileParties`，并把每支队伍交给 `HandleEncounterForMobileParty`。`Campaign.cs` 在地图状态更新后调用它；`dt` 可能为零，所以不要把这个参数解释成「必然经过的战役时间」。

### `HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

`public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)`

这是「资格检查 + AI 交互」入口，不是创建战斗的低级 API。源码会先拒绝不活动、已附属、已有 `MapEventSide`、正在普通据点内、被围城但不是突击状态的队伍；还会拒绝无有效交互目标、主队已经有玩家遭遇等情况。通过后才调用 `mobileParty.Ai.AiBehaviorInteractable.CanPartyInteract(mobileParty, dt)`，并在成功时调用 `OnPartyInteraction(mobileParty)`。

副作用完全取决于具体 `IInteractablePoint`：它可能最终调用本页两个 `Start*Encounter` 入口。调用时机通常是 `Campaign.Tick` 或 AI 行为变化后的 `MobilePartyAi.CheckPartyNeedsUpdate`，而不是模组自己的渲染/战场 tick。

### `StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

`public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)`

它按「玩家是否在双方中、双方是否已属于玩家事件、双方是否同 faction、双方是否 active」分流：

1. 玩家已在一个有双方兵力的 `MapEvent` 中时，调用 `PlayerEncounter.Current.OnPartyJoinEncounter(...)` 把移动队加入当前玩家事件。
2. 玩家遭遇不存在或需要切换对象时，内部 `RestartPlayerEncounter` 先完成旧 `PlayerEncounter`，再 `Start`/`Init` 新双方；如果目标正在追逐玩家，还会调整攻守参数。
3. 两个非玩家、活动的敌对队伍走 `StartBattleAction.Apply(attackerParty, defenderParty)`；同 faction 则把 party 接到已有的 `MapEventSide`。
4. 若涉及玩家攻城，还可能递归以主队重新建立遭遇；出城事件符合条件时切换到 `join_sally_out` 菜单。

因此它不是「强制两个任意对象开一场新战斗」的纯函数。`PartyBase` 必须来自当前战役对象，队伍要处于可交互/活动状态，且调用者要能接受已有玩家遭遇被重启的副作用。

### `StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

`public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)`

参数名里的 `attackerParty` 不是“必定是敌方”。该方法也处理玩家进入据点、军团附属队伍、守方进入、攻城、劫掠、突击城墙和海上封锁：

- `DefaultBehavior == BesiegeSettlement` 时先确保 `SiegeEvent` 存在，并把队伍接到 `BesiegerCamp`；没有据点 `MapEvent` 时会提前返回。
- 守方从海上靠近有封锁的据点时，可能创建 `BlockadeBattleMapEvent` 或加入已有一侧；已有地图事件时可用 `EnterSettlementAction` 进入据点。
- 非玩家队伍到达被劫掠村庄会停止移动；敌对 `RaidSettlement` / `AssaultSettlement` 则调用 `StartBattleAction` 的对应入口，并在玩家在场时建立 `PlayerEncounter`。
- `attackerParty == MobileParty.MainParty` 时，方法会 `PlayerEncounter.Start()` 并用 `PlayerEncounter.Current.Init(attackerParty.Party, settlement.Party, settlement)` 建立玩家据点语境；劫掠时还可能先把驻军领主拉出成为战斗对手。
- 军团领袖处理完后，源码会递归处理未进入事件的附属 `MobileParty`；普通到达据点的队伍则走 `EnterSettlementAction.ApplyForParty`。

调用完成不代表已经创建了 `Mission`。它通常只建立菜单/战役事件的前置状态；真正的场景创建发生在后续 `PlayerEncounter` / `CampaignMission` 路径。

### 私有阶段：`RestartPlayerEncounter`

该私有方法说明了为什么不能把两个 Start 方法当成无状态工厂：它会识别主队正在劫掠的 `MapEvent` 与据点，必要时调用 `PlayerEncounter.Finish(false)`，没有当前对象时调用 `PlayerEncounter.Start()`，最后 `Init(...)`。1.4.5 还会保留「劫掠阶段被中断」状态到新的 `PlayerEncounter`；这不是模组应通过反射复制的内部协议。

## Campaign、MapEvent 与 Mission 的边界

### Campaign 层

`Campaign.Current` 是所有入口的前提。`EncounterManager.EncounterModel`、`Campaign.Current.MobileParties`、`Campaign.Current.MapEventManager` 和 `Campaign.Current.PlayerEncounter` 都要求战役已经初始化。`Campaign.Tick` 驱动地图时间；当时间控制停止时，`EncounterManager` 不执行全局队伍交互。

### MapEvent 层

`MapEvent` 代表地图上的一场战斗，不等于 3D 场景。`MapEventManager.OnMapEventCreated` 把事件加入保存字段 `_mapEvents`；`MapEventManager.Tick` 更新非玩家事件和劫掠事件，并移除 `IsFinalized` 的事件。`MapEvent.Initialize` 会设置双方的 `MapEventSide`、据点相关参战方和战斗状态，再发出 `MapEventStarted`。

玩家战斗仍由 `PlayerEncounter` 指向该 `MapEvent`。当场景结束或菜单选择收尾时，`PlayerEncounter.Finish()` 负责玩家遭遇清理；不要只调用 `MapEvent.FinalizeEvent()` 后留下 `PlayerEncounter.Current`。

### Mission 层

`PlayerEncounter` 在 `StartBattleInternal` 中选择地图事件类型；在需要真实战场时调用 `CampaignMission.OpenBattleMission`、`OpenSiegeMissionWithDeployment` 等。`Mission.Initialize` 才把当前场景写入 `Mission.Current`，场景结束清理行为、场景和 `Mission.Current`。因此：

- 地图移动、参战方、攻守侧、据点和战役结果：读 `MobileParty`、`PartyBase`、`PlayerEncounter`、`MapEvent`。
- Agent、Team、Formation、场景物件和 `MissionBehavior`：只在 `Mission.Current != null` 且状态仍为 `Continuing` 时读写。
- 跨 Mission 或跨存档保存：保存自己的稳定业务标识和结果，不保存 `Mission`、`Agent` 或已结束的 `MapEvent` 引用。

## 依赖、事件、Action、Model 与存档风险

1. **Action 边界：** `StartPartyEncounter` 对敌对非玩家队伍调用 `StartBattleAction.Apply`；`StartSettlementEncounter` 用 `ApplyStartRaid`、`ApplyStartAssaultAgainstWalls`、`EnterSettlementAction.ApplyForParty` 和 `LeaveSettlementAction.ApplyForParty` 完成正式状态变更。直接写 `MapEventSide` 或据点字段会绕过这些动作的队伍、AI、外交和结算联动。
2. **事件边界：** `CampaignEvents.MapEventStarted` 适合在 `MapEvent.Initialize` 完成后读取参与者；`MapEventEnded` 到达时事件已经进入 `WaitingRemoval`，源码会在回调之后清空两侧。需要双方资料时应在回调入口立即复制，不要把 `AttackerSide.Parties` / `DefenderSide.Parties` 的引用带到回调之外。
3. **Model 为空风险：** `EncounterManager.EncounterModel` 直接访问 `Campaign.Current.Models.EncounterModel`，没有为未初始化 Campaign 或错误的模型替换提供保护。注册自定义 Model 时必须保留一个非空、可工作的实现。
4. **玩家收尾风险：** `MapEventManager.FinalizePlayerMapEvent()` 在主队没有 `MapEvent` 时会抛出 `MBNotFoundException`，并且它还会调用 `PlayerEncounter.Finish(true)`。只在确认 `MobileParty.MainParty.MapEvent != null` 后使用；不要在普通 AI 事件上误用玩家专用收尾。
5. **错误阶段风险：** 在 `MapEvent.IsFinalized` 后加入队伍、覆盖胜者或读取双方 Leader 会产生空引用/二次结算风险；在 `PlayerEncounter.Current == null` 时调用 `PlayerEncounter.StartBattle()` 也不成立。
6. **Mission/Agent 生命周期：** `Mission.Current` 在初始化时才可用，在 Mission 状态 finalize 时被置空；结束回调以后继续访问旧 `Agent`、`Team`、`Scene` 可能崩溃。`EncounterManager` 的战役 tick 不能代替 `MissionBehavior.OnMissionTick`。
7. **存档风险：** `EncounterManager` 是静态路由器，不应被存档；但 `PlayerEncounter` 挂在 `Campaign.Current`，`MapEventManager` 的活动列表带有 `SaveableField`。自定义存档数据不要长期保存 `MapEvent`、`Mission`、`Agent` 或临时 `PartyBase` 引用；保存稳定 ID/业务状态，并在加载后重新从 `Campaign.Current` 解析。
8. **行为寿命风险：** `CampaignBehavior` 的事件监听使用 `AddNonSerializedListener`；行为被移除或 Campaign 切换后不要继续持有旧事件/旧 `Mission` 的引用。需要跨存档的值通过 `SyncData` 保存，而不是依靠 listener 委托本身。

## 真实 API 示例

### 示例 1：从 CampaignBehavior 观察玩家地图遭遇

源码中的多个 CampaignBehavior 都在 `RegisterEvents` 中订阅相同的两个事件。下面的写法使用真实事件名和真实回调签名，并把只需跨存档的统计值写入 `IDataStore`：

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public sealed class EncounterTelemetryBehavior : CampaignBehaviorBase
{
    private string _lastPlayerEncounterType;

    public override void RegisterEvents()
    {
        CampaignEvents.MapEventStarted.AddNonSerializedListener(
            this, new Action<MapEvent, PartyBase, PartyBase>(OnMapEventStarted));
        CampaignEvents.MapEventEnded.AddNonSerializedListener(
            this, new Action<MapEvent>(OnMapEventEnded));
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("lastPlayerEncounterType", ref _lastPlayerEncounterType);
    }

    private void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)
    {
        if (!mapEvent.IsPlayerMapEvent)
            return;

        _lastPlayerEncounterType = mapEvent.EventType.ToString();
        InformationManager.DisplayMessage(new InformationMessage(
            $"{mapEvent.EventType}: {attackerParty.Name} vs {defenderParty.Name}"));
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        if (mapEvent.MapEventSettlement != null)
            _lastPlayerEncounterType = mapEvent.EventType.ToString();
    }
}
```

`OnMapEventEnded` 中不要再遍历两侧的 `MapEventParty`；如果需要双方名称、兵力或胜者，应该在 `OnMapEventStarted` 或结束前缓存。该示例只保存字符串，不把临时地图事件写入存档。

### 示例 2：在已有据点菜单/交互回调中进入当前据点

`MenuHelper` 和 `EncounterGameMenuBehavior` 的源码都从当前战役上下文取得据点，再把主队的 `Party` 交给入口。自定义菜单应先避免重复玩家遭遇：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static class EncounterMenuCallbacks
{
    public static void EnterCurrentSettlementFromMenu()
    {
        Settlement currentSettlement = Settlement.CurrentSettlement;
        if (currentSettlement == null || PlayerEncounter.IsActive)
            return;

        EncounterManager.StartSettlementEncounter(
            MobileParty.MainParty, currentSettlement);
    }
}
```

这段代码应在菜单选项/交互动作中执行，而不是在 `OnTick` 中轮询。它建立的是 Campaign 遭遇前置状态；是否显示遭遇菜单、是否立即开战以及何时进入 `Mission` 由 `PlayerEncounter.Init`、`EncounterGameMenuModel` 和后续 `CampaignMission` 流程决定。

### 示例 3：只在队伍确实正在追逐目标时请求队伍遭遇

`MobileParty` 的碰撞路径使用 `engagingParty.Party` 和 `mobileParty.Party` 调用本方法。自定义任务若拥有同一真实目标，也必须复用当前队伍对象并先验证状态：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static class EncounterQuestCallbacks
{
    public static void StartMainPartyTargetEncounter()
    {
        MobileParty mainParty = MobileParty.MainParty;
        MobileParty targetParty = mainParty.ShortTermTargetParty;
        if (targetParty == null || !targetParty.IsActive || !mainParty.IsCurrentlyEngagingParty)
            return;

        EncounterManager.StartPartyEncounter(mainParty.Party, targetParty.Party);
    }
}
```

不要把任意 `PartyBase` 临时对象拼进来，也不要在目标已经加入 `MapEventSide`、主队已有不同 `PlayerEncounter` 或双方不再 active 时无条件重试；该入口可能结束旧玩家遭遇并重建新的双方绑定。

## 1.3.15 与 1.4.5 源码差异

- 两个版本都保留 `EncounterManager` 的四个公开入口和 `EncounterModel => Campaign.Current.Models.EncounterModel` 的获取路径；主流程仍是 `Campaign` tick → 移动队交互 → `PlayerEncounter`/`MapEvent`。
- 1.3.15 在 `StartPartyEncounter` 的攻城递归判定中调用带 `MapEvent.BattleTypes.Siege` 参数的 `HasInvolvedPartyForEventType`；1.4.5 使用无显式 battle-type 的重载。不要把某一版反编译出的私有分支当成跨版本契约。
- 1.4.5 的 `StartSettlementEncounter` 使用现代模式匹配并把主队分支提前，但公开签名和「攻城/封锁/劫掠/突击/进入据点」的职责不变。
- 1.4.5 的 `RestartPlayerEncounter` 会从主队当前劫掠事件读取 `WasEverInLootingPhase`，并将中断状态写回新的 `PlayerEncounter`；1.3.15 没有这一额外传递。跨版本 mod 应使用公开的 `PlayerEncounter` / `MapEvent` API，而不是复制私有字段。
- 1.3.15 的 `MapEvent` 源码位于 `TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs`；1.4.5 的源码布局拆分为 `TaleWorlds.CampaignSystem.MapEvents`，这是源码目录差异，不是本页相对导航差异。

## 源码调用点依据

本页的状态机和风险来自以下实际调用点，而不是由签名推测：

- **EncounterManager：** 1.3.15 `TaleWorlds.CampaignSystem/EncounterManager.cs` 的 `Tick`、`HandleEncounterForMobileParty`、`StartPartyEncounter`、`StartSettlementEncounter`、`RestartPlayerEncounter`；1.4.5 `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/EncounterManager.cs` 的同名方法。
- **Campaign / Party：** 1.3.15 `Campaign.cs` 调用 `EncounterManager.Tick`；`Party/MobilePartyAi.cs` 调用单队伍检查；`Party/MobileParty.cs` 的碰撞路径调用 `StartPartyEncounter`；`Settlements/Settlement.cs` 调用 `StartSettlementEncounter`。1.4.5 对应调用点在 `TaleWorlds.CampaignSystem/Campaign.cs`、`TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`、`TaleWorlds.CampaignSystem.Party/MobileParty.cs` 和 `TaleWorlds.CampaignSystem.Settlements/Settlement.cs`。
- **Encounter：** `Encounters/PlayerEncounter.cs` 的 `Start`、`Init`、`StartBattleInternal`、`Finish` 和 `DoEnd` 展示了玩家对象的创建、地图事件选择、Mission 前置和收尾；`CampaignBehaviors/EncounterGameMenuBehavior.cs`、`SallyOutsCampaignBehavior.cs`、`PlayerArmyWaitBehavior.cs` 展示了菜单/出城/等待调用。
- **MapEvent：** `MapEvents/MapEventManager.cs` 的 `_mapEvents`、`OnMapEventCreated`、`Tick`、`FinalizePlayerMapEvent` 和 `Start*MapEvent` 展示了创建、持有、移除与玩家收尾；`MapEvents/FieldBattleEventComponent.cs` 展示了野战事件的创建登记；`MapEvents/MapEvent.cs` 的 `Initialize` 发出 `OnMapEventStarted`。
- **Mission：** `CampaignMission.cs` 将 `OpenBattleMission` / `OpenSiegeMissionWithDeployment` 转交给 `Campaign.Current.CampaignMissionManager`；`TaleWorlds.MountAndBlade/Mission.cs` 在 `Initialize` 设置 `Mission.Current`，在 `OnMissionStateFinalize` 清理并置空。它证明 `Mission` 是下游场景容器，而不是本类的持有者。

## 导航

### ↑ Parent

- [CampaignSystem API 索引](../)
- [Campaign](../../campaign/Campaign/)
- [文档契约](../../../architecture/doc-contract/)

### ↔ Sibling

- [PlayerEncounter](../PlayerEncounter/) — 玩家遭遇上下文与结果状态
- [MapEventManager](../MapEventManager/) — 活动地图事件的持有与 tick
- [MapEventSide](../MapEventSide/) — 地图事件攻守两侧
- [SiegeEvent](../SiegeEvent/) — 据点攻城状态
- [CampaignEvents](../CampaignEvents/) — 地图事件生命周期监听

### ↓ Children / 下一步

- [StartBattleAction](../StartBattleAction/) — 正式启动野战/劫掠/攻城动作
- [EnterSettlementAction](../EnterSettlementAction/) · [LeaveSettlementAction](../LeaveSettlementAction/) — 进入和离开据点
- [EncounterModel](../EncounterModel/) — 遭遇规则模型
- [MobileParty](../../campaign/MobileParty/) · [PartyBase](../../campaign/PartyBase/) — 参战方获取与状态
- [MapEvent](../../campaign/MapEvent/) — 地图战斗对象
- [Mission](../../mission/Mission/) — 进入 3D 战场后的短寿命场景容器
