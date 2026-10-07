---
title: "ServersideSession"
description: "TaleWorlds.Network 的服务器端会话抽象类，承接客户端连接并复用统一的消息管道。"
---
# ServersideSession

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public abstract class ServersideSession`
**基类：** `NetworkSession`
**源文件：** `bannerlord-1.4.7/TaleWorlds.Network/ServersideSession.cs`（声明见第 6 行）

## 概述

`ServersideSession` 是会话体系的“被动方”。它不发起连接，而是代表服务器侧与某个已接入的客户端之间的一段会话。它把 `NetworkSession` 定义的消息管道直接继承下来，因此发消息、注册处理器、按帧推进、断开这四件事与客户端侧完全同构——区别只在于会话是由谁建立的，以及业务上谁先说话。

## 心智模型

把服务器端会话想成“一个客户端在服务器上的投影”：

- 客户端每接入一次，服务器侧就有一个对应的会话对象，一对一。
- 这个对象不关心监听端口、也不关心连接是怎么被接受的，它只关心“和这个对端怎么收发消息”。
- 因为收发协议与 `NetworkSession` 完全一致，服务端与客户端可以共用同一套消息契约与处理器写法，把差异收敛到最外层。

因此服务器端的典型结构是：外层负责接受连接并为每个连接创建一个会话实例，内层每个实例都只是一段普通的 `NetworkSession`。

## 怎么用

### 怎么拿到

源码路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.Network/ServersideSession.cs`，类声明见 `ServersideSession.cs:6`。

它是抽象类，不能直接实例化。入口是派生：为你的服务器写一个具体的服务器端会话子类，由接受连接的那一层负责为每个客户端创建它。

### 典型用法

1. 为服务器定义自己的会话子类，继承 `ServersideSession`。
2. 在会话建立时，用基类的 `AddMessageHandler<T>(...)`（`NetworkSession.cs:57`）登记该会话关心的消息类型。
3. 在主循环里每帧调用 `Tick()`（`NetworkSession.cs:46`），让该会话收发消息。
4. 需要下发数据时用 `SendMessage(...)`（`NetworkSession.cs:75`）；要主动踢掉这个客户端时用 `SendDisconnectMessage()`（`NetworkSession.cs:15`）。

### 坑

- 一个会话只对应一个客户端。不要把共享的全局状态直接挂在会话实例上，否则多客户端时会互相污染。
- 会话对象的生命周期比连接短，连接一断就要丢弃对应实例，别留着继续 `Tick()`。
- 处理器同样是“注册在前、消息在后”，在连接被接受之后再补注册会漏消息。
- 本类没有提供 `Connect` 一类的入口，连接是由外层接受到的；如果你在找“怎么监听端口”，那不在这个类里。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Tick()` | 每帧驱动本会话，分发入站消息（`NetworkSession.cs:46`）。 |
| `AddMessageHandler<T>(MessageContractHandlerDelegate<T>)` | 为本会话注册指定消息契约类型的处理器（`NetworkSession.cs:57`）。 |
| `SendMessage(MessageContract)` | 向本会话对应的客户端发送消息（`NetworkSession.cs:75`）。 |
| `SendDisconnectMessage()` | 通知对端并结束本会话（`NetworkSession.cs:15`）。 |
| `ComponentMessageHandlerDelegate(NetworkMessage)` | 组件级消息处理器委托（`NetworkSession.cs:168`）。 |

## 真实示例

实现一个服务器端会话：

```csharp
public sealed class GameServerSession : ServersideSession
{
    public void OnAccepted()
    {
        AddMessageHandler<LobbyMessage>(OnLobbyMessage);
    }

    public void TickSession()
    {
        Tick();
    }

    public void Broadcast(string text)
    {
        SendMessage(new LobbyMessage(text));
    }

    public void Kick()
    {
        SendDisconnectMessage();
    }
}
```

使用会话广播消息：

```csharp
var session = new GameServerSession();
session.OnAccepted();
session.Broadcast("welcome");
session.TickSession();
```

## 参见

- [NetworkSession](../NetworkSession)
- [ClientsideSession](../ClientsideSession)
- [ConnectionState](../ConnectionState)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
