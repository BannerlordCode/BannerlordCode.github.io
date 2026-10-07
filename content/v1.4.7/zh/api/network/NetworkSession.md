---
title: "NetworkSession"
description: "TaleWorlds.Network 中所有网络会话的抽象基类，统一约定消息发送、处理器注册与 Tick 驱动。"
---
# NetworkSession

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public abstract class NetworkSession`
**基类：** `无（直接继承 System.Object）`
**源文件：** `TaleWorlds.Network/NetworkSession.cs`（声明见第 6 行）

## 概述

`NetworkSession` 是 TaleWorlds.Network 的会话根类型。它不负责具体的传输实现，只把“会话”这件事抽象成三件事：发消息、收消息、按帧推进。客户端与服务端两个方向各自派生出去，共享这里定义的消息管道。

它的关键契约由四个成员构成：`SendMessage(MessageContract)` 负责出站，`AddMessageHandler<T>(MessageContractHandlerDelegate<T>)` 负责入站注册，`Tick()` 负责每帧推进，`SendDisconnectMessage()` 负责优雅收尾。子类只要把网络后端接进来，就能复用同一套消息分发逻辑。

## 心智模型

把 `NetworkSession` 想成一条双向管道加一个帧驱动的心跳：

- 管道的一头是 `MessageContract`，另一头是 `MessageContractHandlerDelegate<T>`。你注册什么类型，就只会收到什么类型。
- `Tick()` 是心跳。会话不自己保证消息循环，而是被外部按帧调用，在这一次调用里把积压的入站消息分发出去、把待发的出站消息刷出去。
- `SendDisconnectMessage()` 是礼貌的关门动作，先告诉对端“我要走了”，再进入收尾；它不是强制中断。

所以这个类的正确用法是：先注册处理器，再连接或启动，然后在主循环里持续 `Tick()`，最后发断开消息。

## 怎么用

### 怎么拿到

源码路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.Network/NetworkSession.cs`，类声明见 `NetworkSession.cs:6`。

你不能直接 `new NetworkSession()`，它是抽象类。入口有两个：客户端方向的 `ClientsideSession`（`ClientsideSession.cs:9`）和服务器端方向的 `ServersideSession`（`ServersideSession.cs:6`）。在自己的工程里派生它们，或直接使用上层模块已经派生好的会话类型。

### 典型用法

1. 派生 `NetworkSession`（或它的子类），在构造阶段调用 `AddMessageHandler<T>(...)` 把每种关心的消息类型登记进来。
2. 链路建立后，把会话对象挂进主循环，每帧调用 `Tick()`。
3. 需要主动通知对端时调用 `SendMessage(...)`，参数是实现了 `MessageContract` 的对象。
4. 退出前调用 `SendDisconnectMessage()`。

### 坑

- `Tick()` 是 `virtual` 而不是抽象，基类提供了默认实现；覆盖时若跳过 `base.Tick()`，入站消息可能永远不被分发。
- 处理器必须在消息到达之前注册，连接后再补注册会漏掉早到的消息。
- `SendMessage` 只负责把消息交给出站路径，并不保证对端已经处理；不要把“发送成功”当成业务确认。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `SendDisconnectMessage()` | 发送断开连接消息，礼貌地结束会话（`NetworkSession.cs:15`）。 |
| `Tick()` | 每帧驱动会话，分发入站消息并推进出站队列；`virtual`，子类可覆盖（`NetworkSession.cs:46`）。 |
| `AddMessageHandler<T>(MessageContractHandlerDelegate<T>)` | 为消息契约类型 `T` 注册处理器，决定该类型消息由谁处理（`NetworkSession.cs:57`）。 |
| `SendMessage(MessageContract)` | 把一个消息契约对象发送给对端（`NetworkSession.cs:75`）。 |
| `ComponentMessageHandlerDelegate(NetworkMessage)` | 组件级消息处理器委托，接收原始 `NetworkMessage`（`NetworkSession.cs:168`）。 |

## 真实示例

```csharp
public sealed class LobbySession : NetworkSession
{
    public void Wire()
    {
        AddMessageHandler<LobbyMessage>(OnLobbyMessage);
    }

    public override void Tick()
    {
        base.Tick();
    }

    public void SayHello()
    {
        SendMessage(new LobbyMessage("hello"));
    }

    public void Shutdown()
    {
        SendDisconnectMessage();
    }

    private void OnLobbyMessage(LobbyMessage message)
    {
    }
}
```

## 参见

- [ClientsideSession](../ClientsideSession)
- [ServersideSession](../ServersideSession)
- [ConnectionState](../ConnectionState)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
