---
title: "MapEventManager"
description: "战役持有的活动 MapEvent 注册表与 tick 协调器，负责创建、查询、加载修复和移除边界。"
---

# MapEventManager

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class MapEventManager`  
**基类：** 无  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventManager.cs`

## 一句话职责

`MapEventManager` 持有战役中的活动 [`MapEvent`](../MapEvent) 集合，驱动它们的周期更新与移除边界，并提供查询和围城事件入口；它不负责替代 Action、Model 或具体事件组件的规则。

## 心智模型

`Campaign` 通过 `Campaign.MapEventManager` 创建并持有一个管理器。管理器保存可存档的 `MBList<MapEvent>`，对外暴露只读 `MBReadOnlyList`。具体事件工厂和遭遇代码调用 `OnMapEventCreated`；`Campaign.Tick()` 调用管理器的 internal `Tick`，清理已完成事件并更新劫掠/非玩家事件。加载时 `OnAfterLoad` 会让每个事件重新挂接组件状态。

它是注册表和生命周期协调器，不是所有战斗类型的全局工厂。野战和劫掠通常走 `StartBattleAction` 或具体组件工厂；公开的 `StartSiegeMapEvent`、`StartSallyOutMapEvent`、`StartSiegeOutsideMapEvent` 和 `StartBlockadeBattleMapEvent` 只服务对应遭遇流程。`MapEvents` 是读取视图，不能在遍历时当作可修改集合。

## 何时使用，何时不要使用

**适合使用：**

- 查询活动事件、筛选两个派系之间的事件，或观察玩家当前事件。
- 接入源码已经使用管理器的围城/出击流程。
- 战役加载后重新获取事件，而不是保存旧的对象引用。

**不要这样使用：**

- 不要把它当带有公开构造函数的单例；构造函数是 internal，权威实例是 `Campaign.Current.MapEventManager`。
- 不要对手动初始化的对象调用 `OnMapEventCreated` 来添加事件；创建、双方、组件和事件类型必须由同一个引擎路径建立。
- 没有当前玩家事件时不要调用 `FinalizePlayerMapEvent`；源码会抛出 `MBNotFoundException`。
- 不要在遍历时移除 `MapEvents`；让 `Campaign.Tick` 清理已完成事件。

## 依赖关系与生命周期

- **所有者：** [`Campaign`](../Campaign) 创建管理器、加载和保存它，并调用 tick。
- **注册对象：** [`MapEvent`](../MapEvent) 由具体事件组件或管理器支持的围城方法加入。
- **消费者：** [`PlayerEncounter`](../PlayerEncounter)、`DefaultEncounterModel`、战役行为和诊断代码查询活动集合。
- **下游：** `MapEvent` 更新双方和组件；已完成事件被移除，Campaign 事件及 Settlement/围城代码处理结果。
- **存档：** `_mapEvents` 是可存档字段；`OnAfterLoad` 修复每个地图事件。mod 应保存稳定 ID，不要保存管理器或事件对象图的缓存引用。

## 关键成员与调用时机

| 成员 | 用途、副作用与时机 |
|---|---|
| `MapEvents` | 活动地图事件的只读视图；下一个战役 tick 或事件回调后可能改变。 |
| `OnMapEventCreated(MapEvent)` | 把已初始化事件加入注册表，是生命周期边界，不是公开构造函数替代品。 |
| `GetMapEvent(int attackerPartyIndex)` | 按进攻方 leader index 找第一个事件；这是索引查询，不是稳定存档 ID。 |
| `GetMapEventsBetweenFactions(IFaction, IFaction)` | 返回两个派系分别处于两方的事件，适合只读外交诊断。 |
| `FinalizePlayerMapEvent(MapEvent)` | 结束主派对事件并调用 `PlayerEncounter.Finish`；要求当前玩家事件和正确遭遇阶段。 |
| `StartSiegeMapEvent(...)`、`StartSallyOutMapEvent(...)`、`StartSiegeOutsideMapEvent(...)`、`StartBlockadeBattleMapEvent(...)` | 创建、初始化、注册对应类型并返回事件；只应在对应遭遇流程调用。 |
| `Tick()` | Campaign 内部 tick：移除 `IsFinalized` 事件，更新劫掠和非玩家事件。mod 不应手动调用。 |
| `OnAfterLoad()` | 加载修复入口，在存档图重建后调用每个事件的 `OnAfterLoad`。 |

## 真实获取示例

只读诊断应从活动战役重新获取管理器，再筛选当前集合：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static int CountActivePlayerEvents()
{
    MapEventManager manager = Campaign.Current.MapEventManager;
    return manager.MapEvents.Count(mapEvent => !mapEvent.IsFinalized && mapEvent.IsPlayerMapEvent);
}
```

开始野战应使用 [`StartBattleAction`](../../campaign-ext/StartBattleAction)，而不是手动调用管理器。围城转换则应跟随 `PlayerEncounter` 与 `DefaultEncounterModel` 使用的同一入口，确保 Settlement 和 SiegeEvent 一致。

## 风险与崩溃边界

1. 模块加载、主菜单或战役销毁后不能使用 `Campaign.Current` 和管理器；查询前要确认生命周期。
2. `MapEvents` 会在战役 tick 中变化；不要修改集合、遍历时结束事件，或跨 `MapEventEnded` 长期保存引用。
3. `FinalizePlayerMapEvent` 假定 `MobileParty.MainParty.MapEvent` 存在且 `PlayerEncounter` 有效；错误阶段调用会抛异常或结束错误遭遇。
4. 没有匹配的 `Settlement.SiegeEvent`、派对方向或海战上下文就创建围城事件，可能在 `MapEvent.Initialize` 期间失败并留下不一致存档状态。
5. 管理器存档图会恢复事件和组件；存档自定义管理器/事件引用并在加载后继续用，可能指向旧对象，应从 `Campaign.Current` 重新获取。

## 版本说明

v1.4.5 管理器在反向索引 tick 中移除已完成事件，并更新劫掠和非玩家事件。构造函数可见性、更新筛选和围城入口可能跨版本变化；移植时应核对 `Campaign.Tick`、`PlayerEncounter` 和 `DefaultEncounterModel`。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同区：[`MapEvent`](../MapEvent) · [`MapEventSide`](../MapEventSide) · [`Campaign`](../Campaign)
- 相关：[`MapEventState`](../MapEventState) · [`StartBattleAction`](../../campaign-ext/StartBattleAction) · [`PlayerEncounter`](../PlayerEncounter) · [`CampaignEvents`](../CampaignEvents)
- English: [MapEventManager](../../../../en/api/campaign/MapEventManager)
