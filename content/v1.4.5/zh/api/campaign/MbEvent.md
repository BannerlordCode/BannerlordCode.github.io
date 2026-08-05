---
title: "MbEvent"
description: "CampaignEvents 背后的非序列化 owner 监听器容器，包含一至七个参数的泛型形式。"
---
# MbEvent

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class MbEvent` 以及 `MbEvent<T1>` 至 `MbEvent<T1, T2, T3, T4, T5, T6, T7>`  
**基类：** `IMbEvent` 以及 `IMbEvent<T1>` 至 `IMbEvent<T1, T2, T3, T4, T5, T6, T7>`  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MbEvent.cs`

## 一句话职责

`MbEvent` 用一个内存链表保存非序列化回调，按事件的参数类型同步调用它们，并按 owner 身份移除监听记录；它把 CampaignEvents 的观察入口与真正改变世界状态的 Action、Model 分开。

## 心智模型

`MbEvent` 是许多静态 [CampaignEvents](../CampaignEvents) 属性的实现家族。Campaign 对外通常只暴露 `IMbEvent` 接口，因此 mod 负责注册回调但不直接调用全局事件；战役分发器或所属系统在相关状态变化或 tick 之后触发它。

每次注册都会保存 owner、delegate 和 next 指针。`AddNonSerializedListener` 把新记录插到链表头部，所以回调按后注册先执行。该列表只存在于运行时，不是 `SyncData` 字段，也不是可保存对象图；owner 是显式清理键，不是弱引用。

## 泛型形式与依赖图

```text
Campaign behavior / ViewModel
          |
          | AddNonSerializedListener(owner, typed Action callback)
          v
CampaignEvents -> typed IMbEvent -> typed MbEvent
          |
          | Campaign 分发器调用具体事件
          v
       listener 回调
```

- 非泛型 `MbEvent` 携带无参数的 `Action`。
- `MbEvent<T1>` 至 `MbEvent<T1, T2, T3, T4, T5, T6, T7>` 分别携带对应数量的 `Action` 参数。参数含义和顺序由事件源定义，容器不验证业务条件。
- `IMbEventBase.ClearListeners(object)` 是所有泛型事件共享的清理边界；`IMbEvent` 还声明无参注册方法。
- [CampaignEventReceiver](../CampaignEventReceiver) 与 [CampaignBehaviorBase](../CampaignBehaviorBase) 解释战役侧生命周期，[CampaignEventDispatcher](../CampaignEventDispatcher) 解释玩法变化如何到达公开事件对象。

## 何时使用，何时不用

当需要观察的事件由 `CampaignEvents` 暴露时，在拥有明确生命周期的 behavior 或对象中注册，并在拆除时用同一个 owner 调用 `ClearListeners`。如果事件允许通过 `ref` 传递结果，应使用 `ReferenceIMBEvent` 家族。

不要替换 `CampaignEvents` 实例，不要调用全局事件的 `Invoke` 来模拟玩法，也不要把监听订阅当作存档内容。世界状态变更应使用相关 Action；事件只用于观察已经发生的生命周期。

## 公共契约

### `AddNonSerializedListener(object owner, Action callback)`

创建包含 owner 和 delegate 的记录，并链接到链表头部。重复注册同一个方法就是重复记录，API 不会按 owner 或 delegate 去重。

### `Invoke(typed arguments)`

具体 `MbEvent` 类为所属 Campaign 代码提供 `Invoke`。它同步遍历链表并调用所有 action；`IMbEvent` 接口有意只暴露注册和清理，不向普通订阅者暴露调用。

### `ClearListeners(object owner)`

按引用身份搜索 owner，并移除这个监听列表中第一个匹配记录。一次调用不保证删除所有重复注册；应保持每个事件一个 owner 记录，若确实重复注册则需要相应次数的清理。

监听 action 没有异常隔离。异常可能中止当前事件分发，并沿着调用方的战役或 UI 调用栈抛出。

## 真实订阅与清理

源码中的 `MapSaveVM` 用自身作为 owner 订阅保存通知，并在销毁时清理同一个 owner：

```csharp
CampaignEvents.OnSaveStartedEvent.AddNonSerializedListener(
    this,
    OnSaveStarted);

// ViewModel 拆除期间：
CampaignEvents.OnSaveStartedEvent.ClearListeners(this);
```

Campaign behavior 对 tick 回调使用同一契约：

```csharp
CampaignEvents.DailyTickEvent.AddNonSerializedListener(
    this,
    OnDailyTick);
```

回调是观察入口。`OnDailyTick` 仍受 behavior 的战役生命周期约束，不能因为 Campaign 事件存在就假定所有地图或 UI 对象仍然有效。

## 风险与生命周期边界

- 监听列表不序列化。加载后应在 behavior 或 ViewModel 生命周期中重新注册，不要把 delegate 放进 `SyncData`。
- 事件保存强 owner/delegate 引用。忘记 `ClearListeners` 可能保留已死亡的 behavior、ViewModel 或场景对象，并在重建后产生重复回调。
- 新注册的回调先执行。除非所属事件明确保证顺序，否则不要把注册顺序当作状态变更协议。
- 回调在触发事件的线程上同步执行。Campaign、原生 Mission 和 UI 对象各有自己的生命周期和线程边界。
- 回调可能观察到分发器正在改变的状态。需要写战役状态时，应走源码确认的 Action 及其事件级联，而不是在回调中直接改字段。

## 导航

### 父级与相关入口

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [CampaignEventReceiver](../CampaignEventReceiver)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignEventDispatcher](../CampaignEventDispatcher)

### 双语与同级链接

- English: `../../../en/api/campaign/MbEvent`
- 同级：[MBCampaignEvent](../MBCampaignEvent) · [EventHandlerRec](../EventHandlerRec) · [ReferenceMBEvent](../ReferenceMBEvent) · [ReferenceIMBEvent](../ReferenceIMBEvent)
