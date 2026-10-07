---
title: "MessageContractHandlerManager"
description: "TaleWorlds.Network 中负责注册消息处理器并把到达的消息契约分发到对应处理逻辑的管理器。"
---
# MessageContractHandlerManager

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public class MessageContractHandlerManager`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.Network/MessageContractHandlerManager.cs`（声明见第 8 行）

## 概述

`MessageContractHandlerManager` 是 TaleWorlds.Network 的消息分发中枢（声明见 MessageContractHandlerManager.cs:8）。它维护「消息类型 → 处理委托」的映射表，对外提供三个动作：

- 注册：`AddMessageHandler<T>(MessageContractHandlerDelegate<T>)` 把某个契约类型的处理逻辑登记进来（MessageContractHandlerManager.cs:28）。
- 分发：`HandleMessage(MessageContract)` 把一个已还原的契约对象交给对应处理器（MessageContractHandlerManager.cs:38）。
- 接收：`HandleNetworkMessage(NetworkMessage)` 从裸网络消息出发完成「解析 + 分发」这一整条链路（MessageContractHandlerManager.cs:44）。

它还提供 `ContainsMessageHandler(byte id)` 用于在分发前判断某个消息 id 是否已有处理器（MessageContractHandlerManager.cs:61）——这既是健壮性检查，也是判断「这条消息该不该我处理」的低成本手段。

它本身**不解析字节**：字节解析由 `NetworkMessage` 与 `MessageContract` 负责，管理器只做查表与调用（NetworkMessage.cs:7、MessageContract.cs:87）。

## 心智模型

把 `MessageContractHandlerManager` 想成**一个带类型索引的接线总机**。

- 注册阶段你在做「接线」：告诉总机「类型 T 的电话打进来时，转给这个委托」（MessageContractHandlerManager.cs:28）。
- 分发阶段总机在做「查号」：拿到一个已经成型的契约对象，按它的实际类型找到那条线并呼叫（MessageContractHandlerManager.cs:38）。
- `HandleNetworkMessage` 是**一步到位的对外入口**：字节进来，总机自己完成反序列化再转接，调用方不需要先手动构造契约（MessageContractHandlerManager.cs:44）。
- 它是**每个连接/每个上下文一份**的状态容器，而不是全局单例式的静态服务：处理器注册表是实例状态，所以「谁注册了什么」取决于你手上的那个管理器实例。
- `ContainsMessageHandler(byte id)` 是总机的「号码簿查询」：先问有没有这条线，再决定发不发（MessageContractHandlerManager.cs:61）。

一句话：**`NetworkMessage` 管字节，`MessageContract` 管字段，`MessageContractHandlerManager` 管「谁来处理」。**

## 怎么用

### 怎么拿到

源树位置：`bannerlord-1.4.7/TaleWorlds.Network/MessageContractHandlerManager.cs`，类声明在第 8 行，注册入口在第 28 行（MessageContractHandlerManager.cs:28）。

在 mod 里通常是：由网络层在建立会话时创建一个管理器实例，然后在初始化阶段调用 `AddMessageHandler<T>` 注册你自己的消息类型（MessageContractHandlerManager.cs:28）；运行期收到数据后调用 `HandleNetworkMessage` 让它自行分发（MessageContractHandlerManager.cs:44）。如果你在写网络层代码本身，则自己 `new MessageContractHandlerManager()` 并持有它。

### 典型用法

1. **先注册后收发**：所有 `AddMessageHandler<T>` 必须在消息到达前完成，注册表在运行期不做并发保护时中途增删会引入竞态（MessageContractHandlerManager.cs:28）。
2. **一个类型一个处理器**：对同一类型重复注册通常会覆盖或冲突，业务分支应写在一个委托内部，而不是注册多个同类型处理器（MessageContractHandlerManager.cs:28）。
3. **让入口统一**：外部数据一律走 `HandleNetworkMessage`，不要自己解析后再手工调 `HandleMessage`，避免两套路径行为不一致（MessageContractHandlerManager.cs:38、44）。
4. **先问再发**：对可能缺失处理器的消息，先 `ContainsMessageHandler(id)` 判断，再决定丢弃、缓存或报错（MessageContractHandlerManager.cs:61）。
5. **处理器要短**：处理器运行在收包路径上，重活应投递到主线程队列或业务系统，而不是在委托里直接改引擎状态（MessageContractHandlerManager.cs:38）。

### 坑

- **注册缺失是静默的**：没有为某类型注册处理器时，`HandleMessage` 不会有可用的处理逻辑，消息会被无声丢弃（MessageContractHandlerManager.cs:38）。
- **`HandleNetworkMessage` 依赖契约能被解析**：如果对应的契约类型无法由工厂创建，字节会在解析阶段就失败，根本走不到处理器（MessageContract.cs:77、MessageContractHandlerManager.cs:44）。
- **不要在处理器里阻塞**：分发是同步调用链，长时间阻塞会卡住整个收包线程（MessageContractHandlerManager.cs:38）。
- **不要在处理器里再注册处理器**：修改注册表的同时正在遍历注册表，容易触发集合被修改的异常（MessageContractHandlerManager.cs:28、38）。
- **消息 id 与类型要一致**：`ContainsMessageHandler(byte id)` 按 id 查询，而 `AddMessageHandler<T>` 按类型注册，两侧的 id 分配必须来自同一份约定，否则查询永远返回 false（MessageContractHandlerManager.cs:28、61）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `AddMessageHandler<T>(MessageContractHandlerDelegate<T>)` (MessageContractHandlerManager.cs:28) | 注册：把契约类型 `T` 与它的处理委托绑定 |
| `HandleMessage(MessageContract)` (MessageContractHandlerManager.cs:38) | 分发：按契约的实际类型调用已注册的处理器 |
| `HandleNetworkMessage(NetworkMessage)` (MessageContractHandlerManager.cs:44) | 接收入口：从裸网络消息解析出契约并直接分发 |
| `ContainsMessageHandler(byte id)` (MessageContractHandlerManager.cs:61) | 查询：按消息 id 判断是否已有处理器 |

## 真实示例

```csharp
// 初始化阶段：把自定义消息类型接到处理逻辑上
public void RegisterHandlers(MessageContractHandlerManager manager)
{
    // 注册：金币变化消息到达时打印新余额，MessageContractHandlerManager.cs:28
    manager.AddMessageHandler<GoldChangedMessage>(contract =>
    {
        var goldChanged = (GoldChangedMessage)contract;
        Console.WriteLine("player " + goldChanged.PlayerId + " gold = " + goldChanged.Gold);
    });
}

// 收包阶段：先确认有处理器，再交给管理器自行解析并分发
public void OnNetworkMessage(MessageContractHandlerManager manager, NetworkMessage networkMessage)
{
    if (manager.ContainsMessageHandler(1))          // MessageContractHandlerManager.cs:61
    {
        manager.HandleNetworkMessage(networkMessage); // MessageContractHandlerManager.cs:44
    }
    else
    {
        // 已经拿到契约对象时走直接分发，MessageContractHandlerManager.cs:38
        manager.HandleMessage(MessageContract.CreateMessageContract(typeof(GoldChangedMessage)));
    }
}
```

## 参见

- [MessageContract](../MessageContract)
- [NetworkMessage](../NetworkMessage)
- [MessageInfo](../MessageInfo)
- [../../sandbox/AgentNavigator](../../sandbox/AgentNavigator)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
