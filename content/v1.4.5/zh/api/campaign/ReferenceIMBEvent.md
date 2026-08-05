---
title: "ReferenceIMBEvent"
description: "CampaignEvents 使用的 ref 订阅接口，支持一至三个上下文参数和一个可变的最后结果。"
---
# ReferenceIMBEvent

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public interface ReferenceIMBEvent<T1>` 至 `ReferenceIMBEvent<T1, T2, T3>`  
**基类：** `IMbEventBase`  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ReferenceIMBEvent.cs`

## 一句话职责

`ReferenceIMBEvent<T1>` 至 `ReferenceIMBEvent<T1, T2, T3>` 只向 Campaign 事件订阅者暴露注册和 owner 清理接口，具体分发器会把最后一个参数按引用传递。

## 心智模型

这个接口比 [ReferenceMBEvent](../ReferenceMBEvent) 更窄。它声明 `AddNonSerializedListener` 与 `ClearListeners`，但不声明 `Invoke`。[CampaignEvents](../CampaignEvents) 返回这个接口，让 mod 可以参与决策而不假装拥有分发器或其周围的状态变更。

泛型参数表示可变结果之前的上下文：

| 接口 | 回调形状 |
|---|---|
| `ReferenceIMBEvent<T1>` | `ref T1` |
| `ReferenceIMBEvent<T1, T2>` | `T1, ref T2` |
| `ReferenceIMBEvent<T1, T2, T3>` | `T1, T2, ref T3` |

delegate 定义在 `ReferenceAction.cs`；具体的 [ReferenceMBEvent](../ReferenceMBEvent) 保存 owner 与 callback 记录，并同步调用它们。

## 依赖关系

[CampaignEvents](../CampaignEvents) 的公开属性返回这个接口，[CampaignBehaviorBase](../CampaignBehaviorBase) 与 [CampaignEventReceiver](../CampaignEventReceiver) 提供通常的监听 owner 生命周期。具体的 [ReferenceMBEvent](../ReferenceMBEvent) 实现接口并执行 `ref` 分发。

## 何时使用，何时不用

当具体的 `CampaignEvents` 属性签名是 `ReferenceAction` 时，使用它返回的接口。在 behavior、quest 或 ViewModel 中用稳定 owner 注册，并在拆除时以相同 owner 调用 `ClearListeners`。

不要实例化接口，不要把它强转成具体事件来调用，也不要把它用于普通通知。`ref` 值的含义由事件源定义，接口本身不定义通用的修改协议。

## 公共契约

### `AddNonSerializedListener(object owner, ReferenceAction action)`

添加与 owner 关联的非序列化回调。注册不持久化，也不会自动去重。

### `ClearListeners(object owner)`

要求事件实现删除 owner 匹配的监听记录。必须使用注册时的同一个 owner 引用；一次调用不应被视为清理意外重复注册的保证。

接口有意没有 `Invoke`。调用留在 Campaign 事件所属者和分发器内部。

## 真实获取与订阅

`CampaignEvents.IsSettlementBusyEvent` 暴露三参数接口。源码中的 `VillagersInNeed` 以 `ReferenceAction<Settlement, object, int>` 形状订阅：

```csharp
CampaignEvents.IsSettlementBusyEvent.AddNonSerializedListener(
    this,
    (ReferenceAction<Settlement, object, int>)IsSettlementBusy);
```

`Settlement` 与 asker 是上下文，`ref int priority` 是监听器可以提高的值。mod 的正常边界是事件属性和 owner 生命周期，而不是具体事件的私有链表。

## 风险与生命周期边界

- 最后的 `ref` 参数在同步监听链中共享。保留不属于自己的值，并遵守该事件的具体合并规则。
- 非序列化注册必须在所属 behavior 或 ViewModel 重建后重新执行；持久化业务状态应通过正确存档契约单独保存。
- owner 过期或忘记 `ClearListeners` 会保留回调，并造成重复或越过生命周期的执行。
- 接口不提供线程调度、异常隔离或空值校验。应遵守 Campaign 事件的时机与对象生命周期。

## 导航

### 父级与相关入口

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [ReferenceMBEvent](../ReferenceMBEvent)
- [CampaignEventReceiver](../CampaignEventReceiver)
- [CampaignBehaviorBase](../CampaignBehaviorBase)

### 双语与同级链接

- English: `../../../en/api/campaign/ReferenceIMBEvent`
- 同级：[MBCampaignEvent](../MBCampaignEvent) · [MbEvent](../MbEvent) · [EventHandlerRec](../EventHandlerRec)
