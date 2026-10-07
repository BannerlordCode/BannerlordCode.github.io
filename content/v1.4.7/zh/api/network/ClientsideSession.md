---
title: "ClientsideSession"
description: "TaleWorlds.Network 的客户端会话抽象类，负责发起连接、处理消息并在 Tick 中推进会话。"
---
# ClientsideSession

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public abstract class ClientsideSession`
**基类：** `NetworkSession`
**源文件：** `TaleWorlds.Network/ClientsideSession.cs`（声明见第 9 行）

## 概述

`ClientsideSession` 是会话体系的“主动方”。它在 `NetworkSession` 提供的消息管道之上，补上了客户端特有的两件事：向某个地址发起连接（`Connect`），以及把入站数据从传输层捞出来并分发出去（`Process`）。`Tick()` 被覆盖，用来把这两个动作编排成每帧一次的固定节奏。

## 心智模型

客户端会话的一生只有四个动词：连、收、推进、断。

- `Connect(string ip, int port, bool useSessionThread = true)` 是“连”。它决定对端地址，并由 `useSessionThread` 决定消息处理是走独立会话线程还是由外部调用者驱动。
- `Process()` 是“收”。它把这一轮到达的数据消化成消息，交给基类注册的处理器。
- `Tick()` 是“推进”。`ClientsideSession` 覆盖了它，让外部主循环调用一次就完成一轮收发。
- `SendDisconnectMessage()`（继承自 `NetworkSession`）是“断”。

心智上的关键区分：`Process` 是“把数据变成消息”，`Tick` 是“什么时候做这件事”。前者是机制，后者是节奏。

## 怎么用

### 怎么拿到

源码路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.Network/ClientsideSession.cs`，类声明见 `ClientsideSession.cs:9`。

它是抽象类，入口是派生：写一个 `public sealed class XxxClientSession : ClientsideSession`，实现基类要求的部分，然后自己 `new` 出来。上层模块若已经提供了具体的客户端会话类型，直接用那个类型即可。

### 典型用法

1. 先调用基类的 `AddMessageHandler<T>(...)` 注册处理器（`NetworkSession.cs:57`）。
2. 调用 `Connect(ip, port)` 发起连接（`ClientsideSession.cs:34`）；若希望由自己控制线程，传入 `useSessionThread: false`。
3. 在主循环里每帧调用 `Tick()`（`ClientsideSession.cs:78`）。
4. 需要主动推送时用继承来的 `SendMessage(...)`（`NetworkSession.cs:75`），退出时用 `SendDisconnectMessage()`（`NetworkSession.cs:15`）。

### 坑

- `useSessionThread` 决定谁在跑消息循环。传 `false` 就必须保证自己持续调用 `Process()` 或 `Tick()`，否则消息会一直堆着不动。
- `Tick()` 在本类是 `override`，覆盖链要留意：如果自己再派生并覆盖，别忘了调用基类实现。
- 连接是异步建立的，`Connect` 返回并不代表链路已经可用；不要紧接着就假设对端能收到 `SendMessage`。
- 顺序不能反：先注册处理器再连接，否则早到的消息会被丢掉。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Connect(string ip, int port, bool useSessionThread = true)` | 向指定地址发起连接；`virtual`，子类可覆盖（`ClientsideSession.cs:34`）。 |
| `Process()` | 处理一轮入站数据，把到达的消息交给已注册的处理器（`ClientsideSession.cs:57`）。 |
| `Tick()` | 每帧推进客户端会话；`override`，覆盖基类实现（`ClientsideSession.cs:78`）。 |
| `SendMessage(MessageContract)` | 继承自基类的出站入口（`NetworkSession.cs:75`）。 |
| `SendDisconnectMessage()` | 继承自基类的断开入口（`NetworkSession.cs:15`）。 |

## 真实示例

```csharp
public sealed class GameClientSession : ClientsideSession
{
    public void Startup()
    {
        AddMessageHandler<LobbyMessage>(OnLobbyMessage);
        Connect("127.0.0.1", 4200, useSessionThread: false);
    }

    public override void Tick()
    {
        Process();
        base.Tick();
    }

    public void Say(string text)
    {
        SendMessage(new LobbyMessage(text));
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

- [NetworkSession](../NetworkSession)
- [ServersideSession](../ServersideSession)
- [ConnectionState](../ConnectionState)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
