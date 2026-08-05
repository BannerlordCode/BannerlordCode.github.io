---
title: "ReferenceMBEvent"
description: "CampaignEvents 中支持 ref 的监听容器，多个订阅者可以依次修改最后一个事件参数。"
---
# ReferenceMBEvent

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class ReferenceMBEvent<T1>` 至 `ReferenceMBEvent<T1, T2, T3>`  
**基类：** `ReferenceIMBEvent<T1>` 至 `ReferenceIMBEvent<T1, T2, T3>`，以及 `IMbEventBase`  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ReferenceMBEvent.cs`

## 一句话职责

`ReferenceMBEvent` 分发 owner 关联的监听器，并把最后一个参数按 `ref` 传递，使每个订阅者都能就地改变事件链中的决策值；它服务于 CampaignEvents 的结果型通知，不是直接写入战役状态的替代入口。

## 心智模型

这是带 `ref` 的 [MbEvent](../MbEvent) 对应物。它用于 Campaign 分发器让多个监听器共同贡献一个可变结果，例如优先级或许可。它的泛型形式支持一至三个参数，最后一个是 `ref` 值，前面的参数是上下文。

公开的 [CampaignEvents](../CampaignEvents) 属性通常返回 `ReferenceIMBEvent<T1>` 至 `ReferenceIMBEvent<T1, T2, T3>` 接口之一，而不是具体类。mod 可以订阅和清理，但不应直接调用全局事件；分发器拥有调用顺序及其周围的状态变更。

## 依赖图

```text
Campaign action / dispatcher
          |
          v
CampaignEvents.IsSettlementBusyEvent
          |
ReferenceIMBEvent<Settlement, object, int>
          |
ReferenceMBEvent<T1, T2, T3>.Invoke(t1, t2, ref t3)
          |
  listeners 依次修改共享 ref 结果
```

- `ReferenceAction<T1>` 是 `ref T1`。
- `ReferenceAction<T1, T2>` 是 `(T1, ref T2)`。
- `ReferenceAction<T1, T2, T3>` 是 `(T1, T2, ref T3)`。
- 每次注册都在嵌套 `EventHandlerRec` 中保存 owner 和 callback；注册不序列化，并按后注册先执行。
- [ReferenceIMBEvent](../ReferenceIMBEvent) 是订阅契约，[CampaignEventReceiver](../CampaignEventReceiver) 与 [CampaignEventDispatcher](../CampaignEventDispatcher) 说明外部生命周期。

## 何时使用，何时不用

当 `CampaignEvents` 明确暴露的事件签名要求 `ReferenceAction` 时，使用它返回的 `ReferenceIMBEvent`。读取传入的最后一个值，按事件契约更新它，并保留不属于自己的状态。

不要把 reference event 当作普通通知，不要把普通 `Action` 强转为 `ReferenceAction`，也不要通过具体 `Invoke` 调用全局事件来强制产生结果。普通通知使用 `MbEvent`，世界变更使用正确的 Action 或 Model。

## 公共契约

### `AddNonSerializedListener(object owner, ReferenceAction callback)`

以明确 owner 添加 `ReferenceAction`。实现把记录插到链表头部，不按 owner 或 delegate 去重。

### `Invoke`

具体类同步调用监听器：一参数事件的参数按 `ref` 传递；二、三参数事件的最后一个参数按 `ref` 传递。每个回调看到的是前一个回调留下的值，因此顺序会影响结果。

### `ClearListeners`

从此事件的列表中删除 owner 匹配的第一条记录。注册与清理要使用同一个 owner，不能把一次调用当作修复重复注册的方法。

## 真实 `ref` 订阅

`VillagersInNeed` 使用源码确认的三参数事件贡献 Settlement 忙碌优先级：

```csharp
CampaignEvents.IsSettlementBusyEvent.AddNonSerializedListener(
    this,
    (ReferenceAction<Settlement, object, int>)IsSettlementBusy);

private void IsSettlementBusy(
    Settlement settlement,
    object asker,
    ref int priority)
{
    if (settlement == _village && asker != this)
    {
        priority = Math.Max(priority, SettlementBusyPriority);
    }
}
```

回调修改事件链传入的 `ref int`，不会创建 settlement、打开菜单或持久化 priority。任务或 behavior 不再参与时，应清理 owner。

## 风险与生命周期边界

- `ref` 回调可以覆盖分发器或其他监听器提供的值。应遵守该事件的合并规则，在条件不满足时保留已有值。
- 监听器异常会同步向外抛出；一个回调没有独立隔离边界。
- 事件保存强 owner/delegate 引用，列表不序列化。拆除时清理，加载后按 owner 生命周期重新注册。
- 该机制不提供线程安全。Campaign、原生对象和 UI 对象必须在支持的生命周期/线程中访问。

## 导航

### 父级与相关入口

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [ReferenceIMBEvent](../ReferenceIMBEvent)
- [MbEvent](../MbEvent)
- [CampaignEventDispatcher](../CampaignEventDispatcher)

### 双语与同级链接

- English: `../../../en/api/campaign/ReferenceMBEvent`
- 同级：[MBCampaignEvent](../MBCampaignEvent) · [EventHandlerRec](../EventHandlerRec)
