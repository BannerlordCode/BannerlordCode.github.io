---
title: "EventHandlerRec"
description: "MbEvent 与 ReferenceMBEvent 使用的内部 owner、delegate 和链表记录。"
---
# EventHandlerRec

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `internal class EventHandlerRec` 及其泛型嵌套形式  
**基类：** 无  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MbEvent.cs` 与 `ReferenceMBEvent.cs`

## 一句话职责

`EventHandlerRec` 是内部链表节点，记录哪个 owner 注册了回调、要执行的 delegate 以及该回调之后应访问哪个节点；它只为事件容器服务，不是 mod 的订阅或取消 API。

## 心智模型

这是实现记录，不是 mod 可调用的事件 API。`MbEvent` 与 `ReferenceMBEvent` 每次 `AddNonSerializedListener` 都创建一个嵌套记录，保存 callback、owner 和 next；事件容器拥有这条链表并决定何时调用或断开节点。

源码在每个事件参数数量中声明不同的泛型记录，所以 `EventHandlerRec<T>` 不能被当作 `EventHandlerRec<T1, T2>` 或 reference-action 版本的公共替代物。mod 应通过 [CampaignEvents](../CampaignEvents)、[MbEvent](../MbEvent) 或 [ReferenceMBEvent](../ReferenceMBEvent) 工作，而不是接触这个内部类型。

## 依赖图

```text
AddNonSerializedListener(owner, callback)
                |
                v
       EventHandlerRec(owner, callback, Next)
                |
                +--> MbEvent.Invoke / ClearListeners
                +--> ReferenceMBEvent.Invoke(ref typed result)
```

- [MbEvent](../MbEvent) 与 [ReferenceMBEvent](../ReferenceMBEvent) 拥有这些记录，[CampaignEvents](../CampaignEvents) 是通常创建它们的公开订阅入口。
- `Owner` 在 `ClearListeners` 中按对象身份比较。
- `Action` 或 `ReferenceAction` 是接收事件参数的 delegate。
- `Next` 保存后注册先执行的链表顺序。
- 节点随监听列表一起只存在于运行时，不是序列化数据。

## 何时使用，何时不用

在分析监听生命周期、重复注册、清理或分发顺序时，可以把该记录当作源码心智模型。不要实例化、保存或暴露它：它是 `internal`、嵌套并由事件实现拥有。

真实订阅应在公开 `CampaignEvents` 接口上注册 owner 与回调：

```csharp
CampaignEvents.HourlyTickEvent.AddNonSerializedListener(
    this,
    OnHourlyTick);

CampaignEvents.HourlyTickEvent.ClearListeners(this);
```

公开代码负责生命周期；记录只让容器知道该如何清理。

## 内部契约

- 构造函数保存 owner 与 callback，`Next` 由所属事件设置。
- `MbEvent` 的记录使用零至七个参数的 `Action`。
- `ReferenceMBEvent` 的记录使用一至三个参数的 `ReferenceAction`，最后一个事件值按 `ref` 传递。
- `ClearListeners` 从链表移除匹配节点；记录没有公共取消 token，也没有自动 Dispose 钩子。

## 风险与边界

- owner 引用是强引用。直到事件列表清理前，记录可能一直保留 ViewModel、behavior 或其他对象。
- 重复注册会产生重复记录；删除一个匹配记录不能证明所有重复项都已删除。
- callback 可以抛异常、改动战役状态或假定已经结束的生命周期，记录不会验证这些条件。
- 监听列表不是存档数据；不要把保存/加载当作监听清理机制，应在所属生命周期回调中注册和清理。

## 导航

### 父级与相关入口

- [Campaign API](../)
- [MbEvent](../MbEvent)
- [ReferenceMBEvent](../ReferenceMBEvent)
- [CampaignEvents](../CampaignEvents)

### 双语与同级链接

- English: `../../../en/api/campaign/EventHandlerRec`
- 同级：[MBCampaignEvent](../MBCampaignEvent) · [ReferenceIMBEvent](../ReferenceIMBEvent)
