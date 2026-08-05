---
title: "MapEventState：MapEvent 生命周期阶段"
description: "v1.4.5 中由 MapEvent 使用的独立枚举，用于区分初始、活动等待和等待移除三个阶段。"
---
# MapEventState

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum MapEventState`  
**基类：** `System.Enum`（底层类型为 `int`）  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventState.cs`

## 一句话职责

这个独立枚举标记 [MapEvent](../MapEvent) 所处的生命周期阶段，供代码判断事件已经完成初始化、仍在活动中，还是已经结算并等待管理器移除。

## 心智模型

`MapEventState` 不是管理器、战斗胜负结果，也不是开始战斗的指令。`MapEvent` 在自己的可存档 `_state` 字段中持有它，并通过 `MapEvent.State` 暴露；该属性有公开 getter，但 setter 是 private。mod 通常从 `MobileParty.MainParty?.MapEvent`、`Campaign.Current.MapEventManager.MapEvents` 或 Campaign 事件回调中取得并读取它。

v1.4.5 的生命周期可以按下面理解：

```text
new MapEvent（CLR 默认值） -> Begin
    MapEvent.Initialize(...) -> Wait
    BeginWait()              -> Wait
    FinalizeEventAux()       -> WaitingRemoval
    MapEventManager.Tick()   -> 移除已结算事件
```

源码没有显式执行 `State = MapEventState.Begin`。`Begin` 是对象在内部初始化前持有的零值/默认枚举值；`MapEvent.Initialize` 会把状态写成 `Wait`。已经注册的事件通常应在 `Initialize` 之后观察，所以对活动事件有意义的状态是 `Wait`。`WaitingRemoval` 也不等于“对象已经不存在”：`MapEventManager` 会在后续的管理器 tick 中移除已 finalized 的事件。

## 什么时候用，什么时候不要用

- **用于限制读取时机：** 当 Behavior 只应在地图事件活动期间工作时检查 `State == MapEventState.Wait`，并在读取事件双方或参战方前检查 `IsFinalized`。
- **用于结算边界：** `FinalizeEventAux` 把状态改成 `WaitingRemoval` 后才派发 `MapEventEnded`。在这个回调里复制需要的标量结果和稳定 ID，不要把事件对象带到后续 tick。
- **不要设置它：** `MapEvent.State` 的 setter 是 private。不要通过反射或复制一个枚举值来强制战斗进入/离开某阶段；结算同时还会更新部队、据点、围城状态、结果和事件通知。
- **不要把 `Begin` 当作公开开始信号：** 它是 `MapEvent.Initialize` 之前的 CLR 默认值，不是 mod 可调用的方法，也不是已注册战斗必经的公开阶段。
- **不要和 `BattleState` 混淆：** `MapEventState` 描述生命周期和移除时机，`BattleState` 描述进攻方/防守方胜利等结果。处于 `Wait` 的事件仍然可能没有胜者。

## 依赖关系

```text
Campaign.Current
  -> MapEventManager -> MapEvent.State -> MapEventState
StartBattleAction / EncounterModel
  -> 创建事件并调用内部 Initialize(...) -> Wait
MapEvent.FinalizeEventAux()
  -> WaitingRemoval -> CampaignEvents.MapEventEnded
  -> MapEventManager.Tick() 后续移除事件
```

- **上游：** [Campaign](../Campaign)、[MapEventManager](../MapEventManager)、[StartBattleAction](../../campaign-ext/StartBattleAction) 和 [EncounterModel](../EncounterModel) 建立 Campaign 事件生命周期。
- **相邻状态：** [MapEvent](../MapEvent) 持有枚举值；[MapEventSide](../MapEventSide)、[MapEventParty](../MapEventParty)、[Settlement](../Settlement) 和 [SiegeEvent](../SiegeEvent) 等对象的清理会跟随结算阶段。
- **下游：** [CampaignEvents](../CampaignEvents) 暴露 `MapEventStarted` 与 `MapEventEnded`；[CampaignBehaviorBase](../CampaignBehaviorBase) 是 mod 监听这些事件时的正常生命周期载体。
- **存档：** `MapEvent._state` 使用 `[SaveableField(101)]` 标记。[SaveManager](../../save-system/SaveManager) 恢复 Campaign 对象图，而视觉对象和缓存数据另行重建。

## 值与时机

源码没有显式指定数字，因此 v1.4.5 的底层 `int` 值按声明顺序排列：

| 值 | 数字 | 含义与安全时机 |
|---|---:|---|
| `Begin` | `0` | 新分配 `MapEvent` 在内部初始化前的 CLR 默认值。`MapEvent.cs` 没有显式赋值；不要用它判断“战斗已经开始”。 |
| `Wait` | `1` | 地图事件活动阶段。`MapEvent.Initialize(...)` 在双方、位置、组件和事件数据准备好后赋值；`BeginWait()` 也会赋值。适合用于活动事件检查。 |
| `WaitingRemoval` | `2` | 结算已经推进到等待移除阶段。`MapEvent.IsFinalized` 为 true，赋值后随即派发 `CampaignEvents.MapEventEnded`，稍后的 `MapEventManager.Tick()` 才把事件从管理器列表移除。 |

### 唯一承载这个枚举的公开成员

`MapEvent.State` 是公开读取入口。它的 setter 是 private，因此这个枚举是观察契约而不是修改 API。若代码只需要判断事件是否仍由管理器保留，使用 `MapEvent.IsFinalized` 即可，它等价于 `State == MapEventState.WaitingRemoval` 的更窄布尔表达。

## 真实 API 示例

### 读取玩家当前的活动事件

`MobileParty.MainParty?.MapEvent` 是 Campaign 源码使用的真实获取路径。判空可以避开主菜单、加载阶段和 Campaign 销毁后的访问；状态检查可以避开正在拆除的事件。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && mapEvent.State == MapEventState.Wait)
{
    PartyBase attacker = mapEvent.AttackerSide.LeaderParty;
    PartyBase defender = mapEvent.DefenderSide.LeaderParty;
    Debug.Print($"活动事件 {mapEvent.EventType}: {attacker?.Name} vs {defender?.Name}");
}
```

### 从 Campaign Behavior 观察等待移除边界

`CampaignEvents.MapEventEnded` 是源码确认的回调边界。执行到这里时事件已经是 `WaitingRemoval`；mod 应复制所需数据，不要把 `MapEvent` 引用保存到后续 tick。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.SaveSystem;

public sealed class MapEventStateBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.MapEventEnded.AddNonSerializedListener(this, OnMapEventEnded);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnMapEventEnded(MapEvent mapEvent)
    {
        if (mapEvent.State == MapEventState.WaitingRemoval)
        {
            string eventType = mapEvent.EventType.ToString();
            Debug.Print($"地图事件结束：{eventType}");
        }
    }
}
```

## 风险、存档与版本边界

- **生命周期错误：** `Campaign.Current`、`MobileParty.MainParty` 和 `MapEventManager.MapEvents` 都属于 Campaign。只能在 Campaign 初始化后、`Campaign.OnDestroy` 前访问，否则单例或事件可能为空。
- **过早结算：** 在 Mission、追击、围城或战利品流程仍使用事件时调用 `FinalizeEvent`，会过早移除双方关系。应使用对应的遭遇/Action 流程，不要改枚举值。
- **悬空引用：** 进入 `WaitingRemoval` 后，`MapEventManager` 会移除事件，双方的 `MapEventSide`/`MapEventParty` 引用可能被清理或重新分配。在 `MapEventEnded` 中复制稳定值，之后重新获取当前对象。
- **存档不匹配：** 源码使用隐式枚举编号。不要建立假定 `0`、`1`、`2` 在其他版本仍保持相同含义的自定义存档契约；应保存自己定义的稳定 ID 或布尔量，读档后再取得当前事件。
- **状态不是战斗结果：** 不要仅因为状态是 `Wait` 或 `WaitingRemoval` 就发放俘虏、战利品、声望或改变据点所有权；这些应依据胜负结果和官方 Campaign 结算路径。

## 版本说明

本页依据 `Bannerlord.Source` 中的 v1.4.5 源码。这个版本的枚举是独立类型，而它的实际语义由 `MapEvent.cs` 与 `MapEventManager.cs` 定义；面向其他 Bannerlord 版本时应重新核对这些调用点。

## 导航

- **Parent 父级：** [Campaign API](../)
- **Sibling 同级：** [MapEvent](../MapEvent) · [BattleTypes](../BattleTypes) · [MapEventManager](../MapEventManager)
- **Related 相关：** [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [SiegeEvent](../SiegeEvent) · [StartBattleAction](../../campaign-ext/StartBattleAction) · [Mission](../../mission/Mission)
- **双语回链：** [English page](../../../en/api/campaign/MapEventState)

