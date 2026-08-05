---
title: "MapEventComponent"
description: "v1.4.5 战役层由 MapEvent 持有的事件专用扩展，用于事件类型的模拟、初始化与清理规则。"
---
# MapEventComponent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public abstract class MapEventComponent`  
**基类：** `object`（隐式）  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventComponent.cs`

## 一句话定位

它是某个 `MapEvent` 所持有、由具体战斗组件创建的战役对象，负责该地图事件专有的模拟规则以及初始化、结束和最终清理钩子；它把事件类型的规则接入战役 tick，却不取代 `MapEvent` 对双方、状态和最终结算的所有权。

## 心智模型

`MapEventComponent` 不是挂在 `Agent` 或 Mission 场景上的通用组件，而是**战役层某一个 `MapEvent` 的规则对象**。抽象基类通过 `MapEvent` 保存回指，并暴露该事件的 `SimulationContext` 与生命周期钩子；`FieldBattleEventComponent`、`RaidEventComponent`、`HideoutEventComponent` 和 `BlockadeBattleMapEvent` 等具体类型再补充各自的规则和状态。

这个组件由具体事件工厂创建，mod 不应直接实例化抽象基类。以 `FieldBattleEventComponent.CreateFieldBattleEvent` 为例：它先创建 `MapEvent`，再把该事件传入具体组件构造函数，然后把组件传给 `MapEvent.Initialize`，将事件注册到 `Campaign.Current.MapEventManager`，最后返回组件。`StartBattleAction` 通过 `Campaign.Current.Models.EncounterModel.CreateMapEventComponentForEncounter` 进入这条路径；`EncounterModel` 根据 `MapEvent.BattleTypes` 选择具体工厂。本版本中，围城、出城战和攻城外战则由 `MapEventManager` 创建没有 component 的 `MapEvent`。

初始化后，外部可从 `MapEvent.Component` 读到这个持有关系。只要组件存在，`MapEvent.SimulationContext` 就会委托给 `Component.SimulationContext`，因此组件可以为地形或事件类型提供力量计算上下文。组件不拥有队伍，也不拥有 Mission：`MapEvent` 持有两个 `MapEventSide` 及其中的 `MapEventParty`，玩家进入战斗时 Mission 只是临时消费这份战役状态。

适合在组件生命周期边界观察或实现事件专有的战役逻辑。不适合用它创建任意战斗、保存 `Mission`/`Agent`/`Team` 引用，或用直接字段写入替代 `MapEvent` 状态机。

## 依赖图

```text
StartBattleAction
  └─ EncounterModel ── 具体事件工厂 ── MapEvent
                                      └─ MapEventComponent
MapEvent ── MapEventSide ── MapEventParty ── PartyBase / roster
MapEvent ── CampaignEvents.MapEventStarted / MapEventEnded
MapEvent ── Campaign tick 与模拟 ── component Update(ref finish)
MapEvent ── Mission 投影 ── PartyGroupTroopSupplier
Campaign 存档图 ── MapEvent.Component ── 具体组件状态
```

**创建与上游规则：** [StartBattleAction](../../campaign-ext/StartBattleAction)、[EncounterModel](../EncounterModel)、[MapEventManager](../MapEventManager) 和 `Campaign.Current.Models` 选择并注册事件。  
**运行态所有权：** [MapEvent](../MapEvent)、[MapEventSide](../MapEventSide) 和 [MapEventParty](../MapEventParty) 持有双方、队伍与战斗 roster；组件只提供事件专有行为。  
**事件与下游消费者：** `CampaignEvents.MapEventStarted` 和 `CampaignEvents.MapEventEnded` 包住事件生命周期；[Mission](../../mission/Mission) 与 [PartyGroupTroopSupplier](../PartyGroupTroopSupplier) 是玩家战斗的临时投影。  
**Model 与存档：** 没有组件时，`MilitaryPowerModel` 提供上下文回退；具体组件还可能查询 [BattleRewardModel](../BattleRewardModel) 等模型。`MapEvent.Component` 是可存档属性，具体组件的可存档字段属于 [SaveManager](../../save-system/SaveManager) 管理的 Campaign 存档图。

## 创建与持有关系

源码中的创建顺序是：

1. `StartBattleAction.Apply` 确定 `MapEvent.BattleTypes`；当防守方还没有地图事件时，它向 `Campaign.Current.Models.EncounterModel` 请求组件。
2. `DefaultEncounterModel.CreateMapEventComponentForEncounter` 选择具体工厂。野战、劫掠、藏身处和封锁战返回具体组件；围城家族的管理器方法创建没有 component 的事件。
3. 具体工厂创建 `MapEvent`，用该事件创建具体 `MapEventComponent`，再调用 `mapEvent.Initialize(attackerParty, defenderParty, component, battleType)`。
4. `MapEvent.Initialize` 创建防守方和攻击方 `MapEventSide`，把初始 `PartyBase` 绑定到两侧，初始化 component，并分发 `CampaignEvents.MapEventStarted`。
5. `MapEvent.Update` 在战役模拟期间调用 `Component.Update(ref finish)`。事件结束时，地图事件在处理队伍、战利品、围城状态和 `MapEventEnded` 的同一清理协议中调用组件的结束与最终化钩子。

基类构造函数是 protected，基类生命周期入口是 internal。没有一个公开 setter 可以把 component 挂到已经存在的 `MapEvent` 上；mod 面向的正常路径是读取 `mapEvent.Component`。自定义 `EncounterModel` 可以参与引擎的创建契约，但仍必须生成完整的 `MapEvent` 并遵守内部初始化与最终化顺序。

## 公开成员与生命周期钩子

| 成员 | 含义与安全时机 |
|---|---|
| `MapEvent` | 具体组件构造函数收到的 `MapEvent`；读档时由 `AfterLoad(MapEvent)` 再次绑定。只在事件活动期间或规定的加载/结束回调中读取。 |
| `SimulationContext` | 由具体类型提供的事件上下文，`MapEvent.SimulationContext` 和力量计算会读取它。它是 getter，不是修改战斗状态的入口。 |
| `OnInitialize` | `MapEvent.Initialize` 在双方和位置准备好后调用的 protected 钩子。具体组件在这里重置事件状态、应用事件专有的战役变化。 |
| `OnPartyAdded(PartyBase)` | `MapEventSide` 加入队伍并更新事件 bookkeeping 后调用的 internal 钩子。它供具体组件响应，不是公开的加队伍命令。 |
| `Update(ref bool finish)` | 战役每次更新时调用的 internal 钩子。组件可以参与结束判断，但不能假定玩家 Mission 一定存在。 |
| `FinishComponent` / `OnFinish` | internal 的一次性结束钩子。`_isFinished` 防止结束回调执行两次，但不代表提前手动结束就是安全的。 |
| `OnBeforeFinalize` | 在事件进入最终结算路径、双方尚未清空时调用的 protected 钩子。劫掠组件会在这类边界处理据点和完成事件。 |
| `OnFinalize` | 最终事件清理之后调用的 protected 钩子。此处应释放组件自己的临时状态，不能保留 Mission 引用。 |
| `AfterLoad` / `OnAfterLoad` | internal 的读档重绑定路径。基类先重新绑定 `MapEvent`，再让具体类型重建派生状态。 |

基类本身没有公开的 `Apply`、`Create` 或 `Finalize` 命令。公开的 `MapEvent` 和 `SimulationContext` 主要用于观察与计算；战斗创建和状态变化应交给 [StartBattleAction](../../campaign-ext/StartBattleAction)、遭遇 Model 与 `MapEvent` 生命周期。

## 真实获取路径

战役行为若只需要判断当前事件类型，应从玩家的 `MobileParty` 获取事件并检查组件，而不是创建任何对象：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static bool IsActiveFieldBattleComponent()
{
    MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
    return mapEvent != null
        && !mapEvent.IsFinalized
        && mapEvent.Component is FieldBattleEventComponent;
}
```

需要准确把握时机时，应使用 Campaign 事件边界。`CampaignEvents.MapEventStarted` 提供已初始化的 `MapEvent`、攻击方和防守方；`CampaignEvents.MapEventEnded` 是清理边界。把需要的类型或稳定 ID 复制出来，不要跨读档或跨最终化保存 component：

```csharp
public sealed class ComponentAuditBehavior : CampaignBehaviorBase
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
        MapEventComponent component = mapEvent.Component;
        Debug.Print($"{mapEvent.EventType}: component={component?.GetType().Name ?? \"none\"}");
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        Debug.Print($"Ended {mapEvent.EventType}; finalized={mapEvent.IsFinalized}");
    }
}
```

这是观察路径，不代表所有事件都有 component：本版本由 `MapEventManager` 创建的围城家族事件可以合法地为 `null`，而 `MapEvent.SimulationContext` 会处理这种回退。

## Mission 与 Campaign 的边界

组件留在 Campaign 层。`SandBoxMissions` 使用 `MapEvent.PlayerMapEvent` 和 `BattleSideEnum` 创建 `PartyGroupTroopSupplier`；supplier 读取 `MapEventSide`，把 `MapEventParty` 的部队分配给 Mission 中的 Agent。Mission 负责战斗场景和 Agent，但组件与 `MapEvent` 仍是权威的 Campaign 对象。Mission 报告伤亡时，supplier 通过 `MapEventSide` 回传到 `MapEventParty`；结果随后由 `MapEvent` 计算并提交到 Campaign。

实际边界可以这样记：

- `Mission.Current`、`Agent` 和 `Team` 是临时场景状态，只应在 Mission 代码中读取，并在 Mission 结束时释放。
- `MapEvent.Component`、`MapEventSide` 和 `MapEventParty` 是战役遭遇状态，只应从 Campaign 行为或事件回调读取，并在 `MapEventEnded` 和最终清理后停止使用。
- `Campaign.Current.Models` 提供规则。Model 可以计算上下文或奖励，但替换 Model 不会给事件挂 component，也不会结束已经存在的事件。

## Events、Action、Model 与存档

- **Action：** `StartBattleAction` 是支持的战斗开始入口。它决定事件类型，请 `EncounterModel` 返回具体 component 或让管理器创建事件，再分发 `OnStartBattle`；它不是直接实例化抽象基类的捷径。
- **Events：** `MapEventStarted` 在 `MapEvent.Initialize` 建立双方和 component 后触发；`MapEventEnded` 在最终化期间触发。具体组件还可能从自己的钩子分发劫掠完成等类型事件。
- **Models：** `EncounterModel` 选择 component 工厂。组件的 `SimulationContext` 参与 `MapEvent` 力量计算，具体实现还可能使用 `MilitaryPowerModel`、[BattleRewardModel](../BattleRewardModel) 或其他战役 Model。
- **存档：** `MapEvent.Component` 带有 `[SaveableProperty(105)]`。具体组件的可存档状态与战役事件一起序列化；读档后 `MapEvent` 调用 `Component.AfterLoad(this)`，基类先恢复事件回指，再调用 `OnAfterLoad`。视觉对象和缓存由所属地图事件重建。自定义 Behavior 应保存稳定 ID 和标量决策，读档完成后重新获取当前事件与 component。

## 风险与清理

- **不要在 mod 中调用 `new MapEvent()`，也不要尝试实例化抽象 component。** 构造与初始化协议由引擎持有；绕过它会缺少双方、队伍绑定、注册、视觉对象、事件分发和存档接入。
- **不要假定 `Component` 一定非空。** v1.4.5 的围城、出城战和攻城外战管理器路径可以创建没有 component 的 `MapEvent`。需要回退行为时读取 `MapEvent.SimulationContext`。
- **不要在随机 Campaign tick 调生命周期钩子。** `OnInitialize`、`Update`、`OnBeforeFinalize` 和 `OnFinalize` 依赖双方、Mission、围城和战利品顺序；提前结束会让队伍、奖励或围城对象不一致。
- **不要把 Mission 对象存进 component。** Agent 和 Team 随 Mission 消亡；保留它们会造成空引用，也会让 component 图无法安全存档。
- **不要在 `MapEventEnded` 之后或跨读档继续持有 component。** 最终化会在结束通知后清空双方，读档也可能把 component 重新绑定到新生成的 `MapEvent` 对象。
- **不要在引擎恢复 Campaign 事件之前恢复自定义 component 镜像。** 自定义 Behavior 应恢复稳定数据，并在 Campaign 加载完成后重新获取 component。

## 版本说明

本文按 v1.4.5 反编译源码撰写。具体 component、`EncounterModel` 映射、海战事件类型和读档修复路径可能跨版本变化；面向其他版本发布 mod 前，应重新核对该版本的 `StartBattleAction`、`DefaultEncounterModel`、`MapEventManager` 和具体组件工厂。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[MapEvent](../MapEvent) · [MapEventSide](../MapEventSide) · [MapEventParty](../MapEventParty)
- 具体组件：[FieldBattleEventComponent](../FieldBattleEventComponent) · [RaidEventComponent](../RaidEventComponent) · [HideoutEventComponent](../HideoutEventComponent) · [BlockadeBattleMapEvent](../BlockadeBattleMapEvent)
- 相关：[EncounterModel](../EncounterModel) · [MapEventManager](../MapEventManager) · [CampaignEvents](../CampaignEvents) · [StartBattleAction](../../campaign-ext/StartBattleAction) · [Mission](../../mission/Mission)
- English: [MapEventComponent](../../../../en/api/campaign/MapEventComponent)
