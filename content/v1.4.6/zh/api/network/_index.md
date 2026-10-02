---
title: "network 桶 — 消息与会话框架 TaleWorlds.Network（尚未手写）"
description: "network 桶只对应 TaleWorlds.Network，实测 34 个顶层类型、44 个 .cs 文件。本页的结论是诚实的「不用找」：这是通用消息传递与 socket 会话基础设施，1.4.6 没有把多人对战能力开放给第三方 mod。"
---
# network：消息与会话框架（`TaleWorlds.Network`）

> **本桶当前没有任何已撰写页面。** 结论先给：**这是平台基础设施桶，通常不需要 mod 直接调用。** 单机 mod 在这里找不到任何有用的东西——这不是文档缺失，是 1.4.6 的事实。

## 这个桶对应源码里的什么

`bannerlord-1.4.6/TaleWorlds.Network/`：**44 个 `.cs` 文件、34 个顶层类型**（实测，含 `Properties/AssemblyInfo.cs`）。权威映射只有一条直落规则 `TaleWorlds.Network` → `network`，没有子命名空间。

先说清一个容易误会的地方：**这个桶和多人游戏无关。** 看名字会以为它是「多人联机 API」，实际上它是一个**通用的消息传递框架**——定义「消息有 id、有契约（contract）、能序列化」，再配一套 socket / WebSocket / TCP 的连接与会话管理。游戏本体拿它来跑大厅（lobby）服务和遥测；多人**对战**逻辑在 `TaleWorlds.MountAndBlade.Multiplayer*` 下，而那批命名空间在权威噪声清单的 `excludeNamespaces` 里，**不生成任何页面**。

所以本文档树里**不存在**「Bannerlord 多人 mod API」这种东西。如果你在找它，找错地方了。

## mod 什么时候会碰到它

诚实的结论：**单机 mod 永远不碰；想做联机 mod 的，1.4.6 也没有给你可用的面。**

逐条排除常见动机：

1. **「我想读网络状态」** —— 没有这种公开 API。游戏本体自己的网络栈是内部实现
2. **「我想定时向服务器发数据（遥测 / mod 更新检查）」** —— 技术上你在 mod 里可以自己起 HttpClient，但那和这个命名空间无关，只是碰巧都在一个进程里
3. **「我要写多人 mod」** —— 1.4.6 不支持。`TaleWorlds.MountAndBlade.Multiplayer` / `TaleWorlds.MountAndBlade.DedicatedCustomServer` 都被排除在文档之外，官方也没有对外开放联机扩展点。这不是本桶能解决的问题

**心智模型**：把它当成「游戏内部通讯层」。和 [modulemanager](../modulemanager) 是同一类东西——**你在写 mod 的整个过程中都不会进它**。它出现在这里只是为了：当你 `grep` 到某个类型来自 `TaleWorlds.Network` 时，能立刻知道那不是 mod 面的东西。

## 待写清单（节选，17 条已核实类型）

下面每个名字都在 `bannerlord-1.4.6/TaleWorlds.Network/` 核实过。**这是节选**——本桶 34 个顶层类型，剩下的多半是内部辅助。列出来的目的是让你认出它们，而不是召唤你去用它们。

会话与连接：

- `NetworkSession` — 会话基类
- `ClientsideSession` / `ServersideSession` — 客户端侧 / 服务端侧会话
- `ServersideSessionManager` — 服务端会话管理
- `ConnectionState` — 连接状态
- `MessageServiceConnection` — 消息服务连接
- `ClientWebSocketHandler` / `WebSocketMessage` / `JsonSocketMessage` — WebSocket 通道及其消息载荷（JSON 形式）
- `RESTClient` / `ServiceException` / `ServiceExceptionModel` — HTTP 侧的调用与异常模型
- `TcpSocket` / `TcpStatus` — TCP 层封装（1.4.6 里 TCP 相关能力被收得比较紧）

消息契约与序列化：

- `MessageId` — 消息标识
- `MessageContract` — 消息契约：声明一条消息有哪些字段、怎么读写
- `MessageContractCreator` / `MessageContractHandlerManager` — 契约的生成与分派
- `MessageInfo` / `MessageTypes` — 消息的元信息与分类
- `MessageProxy` / `IMessageProxyClient` — 消息收发代理
- `INetworkMessageReader` / `INetworkMessageWriter` / `INetworkSerializable` — 读 / 写 / 可序列化的接口
- `MessageBuffer` / `NetworkMessage` / `IncomingServerSessionMessage` — 缓冲区与消息载体

调度：

- `CoroutineManager` / `CoroutineState` — 本命名空间自带的协程调度（注意与游戏主循环的协程是两套，别混用）
- `TickManager` / `WaitForTicks` / `WaitForSpecialCase` / `PostBoxId` — 固定步长 tick 的等待原语

**没有页面**，而且**这一桶不适合写类页**。写它唯一有价值的形式，是上面这段「认出它们、不要去找」的说明——也就是本页。

## 为什么现在还没有页面

1.4.6 的手写覆盖按 **mod 实际使用频率** 排序。本桶排在最后，理由是**频率为零**：

1. **没有 mod 会引用它。** 上面已逐条排除。
2. **它不是 API 面。** 它是游戏内部通讯层，和 [modulemanager](../modulemanager) 同性质——启动器 / 基础设施。
3. **相关能力被刻意排除。** 真正跟「联机」有关的命名空间（`Multiplayer*`、`DedicatedCustomServer*`）在噪声清单里，不产页面。所以本桶既不是「多人 API」，也不是它的替代品。

**这一页是本桶最有价值的产出。** 它存在的意义是：把「我搜到 `TaleWorlds.Network` 了，这是什么、我能不能用」的答案写在权威位置，而不是让每个读者自己撞一遍墙。逐类写 34 张页只会增加噪声。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 含「不生成文档的目录」一节，说明哪些命名空间被排除及原因
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
