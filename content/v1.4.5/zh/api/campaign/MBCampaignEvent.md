---
title: "MBCampaignEvent"
description: "通过 CampaignPeriodicEventManager 注册并按战役时间运行回调的周期事件对象。"
---
# MBCampaignEvent

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class MBCampaignEvent`  
**基类：** 无  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

## 一句话职责

`MBCampaignEvent` 保存一个按战役时间运行的回调列表，并在管理器调用 `CheckUpdate` 时推进下一次触发时间；它不是普通 `CampaignEvents` 订阅入口。

## 心智模型

Campaign 中有两类不同事件：

- [CampaignEvents](../CampaignEvents) 以 `IMbEvent` 暴露长期存在的玩法通知，mod 通常在 `CampaignBehaviorBase.RegisterEvents()` 中订阅。
- `MBCampaignEvent` 是实例级周期事件。`CampaignPeriodicEventManager.CreatePeriodicEvent` 把它加入 `Campaign.Current.CustomPeriodicCampaignEvents`，管理器在战役 tick 路径中调用它的 `CheckUpdate`。

周期事件自己持有 handler 和触发时间，`Campaign` 与 `CampaignPeriodicEventManager` 负责它何时被检查及何时清理。不要用它观察已有 `CampaignEvents`，也不要用 `RunHandlers` 伪造本应由 Action 或战役分发器产生的状态变化。

## 生命周期与依赖图

```text
CampaignPeriodicEventManager.CreatePeriodicEvent
              |
              v
Campaign.Current.CustomPeriodicCampaignEvents
              |
              v
        MBCampaignEvent
              |
              v
  AddHandler -> CheckUpdate -> handler 回调
              |
              v
       DeletePeriodicEvent -> 管理器延迟移除
```

- 生命周期所有者是 [Campaign](../Campaign) 与 [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)；普通观察应回到 [CampaignEvents](../CampaignEvents)。
- 周期构造函数保存 `TriggerPeriod`，设置 `InitialWait`，并把首次触发时间设为 `CampaignTime.Now + InitialWait`。
- `CampaignPeriodicEventManager` 在周期信号中检查自定义事件。当下一次触发时间已到且 `isEventDeleted` 为 false 时，`CheckUpdate` 用当前 `CampaignTime` 运行 handler，再按间隔推进下一次时间。
- `DeletePeriodicEvent` 只设置删除标志；管理器在清理阶段才从列表移除对象。
- `CreatePeriodicUIEvent` 使用 `MapScreen` 自己的 UI 事件列表；事件对象本身不选择线程或地图状态。

## 何时使用，何时不用

当功能确实需要战役时间周期回调，并且创建者能一直负责返回的事件对象时，使用 `CampaignPeriodicEventManager.CreatePeriodicEvent`。只想观察内置生命周期时，应订阅 `CampaignEvents.HourlyTickEvent`、`DailyTickEvent` 或其他已有事件。

不要把它当作脱离战役 tick 的通用计时器，不要用它替代 `CampaignBehaviorBase.SyncData`，也不要通过它直接改 Hero、party、Settlement 或外交状态。世界变更仍应走正确的 Action、Model 或 behavior 边界。

## 公共契约

### `MBCampaignEvent(string eventName)`

字符串构造函数只记录诊断用的 `description`，不会配置周期计划。

### `MBCampaignEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

周期构造函数保存间隔与首次等待时间，并基于 `CampaignTime.Now` 计算首次可触发时刻。应传入有意义的战役间隔，避免非正间隔造成异常的追赶行为。

### `AddHandler` 与 `RunHandlers`

`AddHandler` 把 `CampaignEventDelegate` 加到实例列表。`RunHandlers(params object[] delegateParams)` 以当前事件和参数调用每个 delegate；实现没有吞掉异常，handler 异常会离开当前战役 tick 调用栈。

### `Unregister(object instance)`

移除所有 delegate `Target` 等于给定实例的 handler。这与 `MbEvent.ClearListeners` 从一个监听列表删除一个匹配 owner 的记录不同；需要按实例取消时应使用实例方法作为 delegate。

### `CheckUpdate` 与 `DeletePeriodicEvent`

如果战役时间已经越过多个周期，`CheckUpdate` 一次调用可能运行多轮。`DeletePeriodicEvent` 只设置 `isEventDeleted`，不会同步调用 handler，也不会立刻从 `CustomPeriodicCampaignEvents` 移除。

## 真实注册示例

源码中的自定义周期入口是 `CampaignPeriodicEventManager.CreatePeriodicEvent`。`CheckUpdate` 会把当前时间放在参数数组中传给 handler：

```csharp
private static void OnPeriodicCampaignTick(
    MBCampaignEvent campaignEvent,
    params object[] parameters)
{
    CampaignTime now = (CampaignTime)parameters[0];
    // 在这个时间点通过所属战役系统读取或分发工作。
}

MBCampaignEvent campaignEvent =
    CampaignPeriodicEventManager.CreatePeriodicEvent(
        CampaignTime.Hours(1f),
        CampaignTime.Hours(1f));
campaignEvent.AddHandler(OnPeriodicCampaignTick);
```

回调不是存档契约。需要持久化的数据应放在 Campaign behavior 中，另外实现 `SyncData(IDataStore)`；创建者还要在同一生命周期中删除周期事件。

## 风险与边界

- `MBCampaignEvent` 持有 delegate，但没有按 owner 自动清理。长期事件可能一直保留 behavior 或 UI 对象，直到取消 handler 或删除事件。
- `RunHandlers` 与 `CheckUpdate` 在调用方的战役 tick 上同步执行，不会切线程，也不会保护重入的世界修改。
- 追赶逻辑使用 `NextTriggerTime += TriggerPeriod`；当时间跨过多个间隔时，handler 必须能接受多次调用。
- `isEventDeleted` 是管理器的清理标志，不表示当前正在执行的回调已经停止，也不能代替 owner 的生命周期检查。
- 不要把 `CampaignTime` 参数当作存档快照，也不要假定加载存档会自动重建周期事件。

## 导航

### 父级与相关入口

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignEventDispatcher](../CampaignEventDispatcher)

### 双语与同级链接

- English: `../../../en/api/campaign/MBCampaignEvent`
- 同级：[MbEvent](../MbEvent) · [ReferenceMBEvent](../ReferenceMBEvent) · [ReferenceIMBEvent](../ReferenceIMBEvent)
