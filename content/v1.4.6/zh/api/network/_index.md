---
title: "network 桶 — 消息与会话框架 TaleWorlds.Network（0 张类页）"
description: "network 桶只对应 TaleWorlds.Network 一个命名空间。实测 44 个 .cs 文件、43 个命名空间级类型声明（含 4 个委托）。本页给出职责、可复跑的查法，并说明它与多人对战无关：真正的多人命名空间在权威排除清单里，不生成任何页面。"
---
# network：消息与会话框架（`TaleWorlds.Network`）

> **覆盖状态：本桶 0 张类页。**
> 结论先给：**这是平台基础设施桶，通常不需要 mod 直接调用。** 单机 mod 在这里找不到任何有用的东西——这不是文档缺失，是 1.4.6 的事实。本页是导览，页面上出现的类型名全部是纯文本，**没有任何一个指向尚未撰写的类页**。

## 这个桶在源码里对应什么

归属规则只有一条直落前缀 `TaleWorlds.Network` → `network`，没有更长的规则来抢它。源码目录 `bannerlord-1.4.6/TaleWorlds.Network/`。

先说清一个容易误会的地方：**这个桶和多人游戏无关。** 看名字会以为它是「多人联机 API」，实际上它是一个**通用的消息传递框架**——定义「消息有 id、有契约（contract）、能序列化」，再配一套 socket / WebSocket / TCP 的连接与会话管理。游戏本体拿它来跑大厅服务和遥测。

**实测规模**：

| 口径 | 数值 |
| --- | --- |
| `.cs` 文件数（含 `Properties/AssemblyInfo.cs`） | 44 |
| 命名空间级类型声明数 | 43 |
| 其中 `delegate` 声明行数 | 4 |
| 声明该命名空间的 `.cs` 文件数 | 43 |
| 子命名空间数 | 0 |

**口径定义**：`.cs 文件数` = `find <目录> -name '*.cs' | wc -l`；`命名空间级类型声明数` = 该目录内缩进恰好一个制表符的 `class` / `struct` / `interface` / `enum` / `record` / `delegate` 声明行数，**不含嵌套类型**，**不按名字去重**。

这里刻意不给「共 N 个类型」这种断言——本桶没有逐类撰写计划，给一个总数只会变成需要维护的清单却不带来任何判断力。

## 读源码：可复跑的查法

在工作区根目录执行：

```bash
find bannerlord-1.4.6/TaleWorlds.Network -name '*.cs' | wc -l

grep -rl '^namespace TaleWorlds.Network' bannerlord-1.4.6/TaleWorlds.Network --include='*.cs'

# 43 个命名空间级声明，逐行列出来
awk '/^\t(public |internal |abstract |sealed |static |partial |unsafe |readonly |new )*(class|struct|interface|enum|record|delegate)[ \t]+[A-Za-z_]/' \
  $(find bannerlord-1.4.6/TaleWorlds.Network -name '*.cs')

# 只看 delegate（4 行）
grep -rhE '^	(public |internal )*delegate' $(find bannerlord-1.4.6/TaleWorlds.Network -name '*.cs')

# 确认某个类型落在哪个桶：全树搜，看它属于哪个命名空间
grep -rn 'class MessageContract' bannerlord-1.4.6 --include='*.cs'
```

## 读者现在能做什么

**确认「我搜到的这个类型属于哪个桶、是不是 mod 的面」。** 这是本桶唯一值得做的事。当你在别处 `grep` 到一个来自 `TaleWorlds.Network` 的类型，你可以立刻来这里得到答案，而不用自己撞一遍墙。

三条常见动机，逐条排除：

1. **「我想读网络状态」** —— 没有这种公开 API。游戏本体自己的网络栈是内部实现。
2. **「我想定时向服务器发数据（遥测 / mod 更新检查）」** —— 技术上你可以在 mod 里自己起 HttpClient，但那和这个命名空间无关，只是碰巧都在一个进程里。
3. **「我要写多人 mod」** —— 1.4.6 不支持。真正的多人命名空间（`TaleWorlds.MountAndBlade.Multiplayer`、`TaleWorlds.MountAndBlade.DedicatedCustomServer`）在权威排除清单里，**不生成任何页面**。所以本文档树里**不存在**「Bannerlord 多人 mod API」这种东西——你在找它，找错地方了。

**心智模型**：把它当成「游戏内部通讯层」。它出现在文档里的唯一意义是：当你 grep 到某个类型来自 `TaleWorlds.Network` 时，能立刻知道那不是 mod 面的东西。

## 桶间分工

| 你想做的事 | 该去哪个桶 |
| --- | --- |
| 确认某个内部框架类型不是 mod API 面 | **本桶** · [modulemanager](../modulemanager) |
| 声明 mod 入口 | [core](../core) |
| 挂战役行为 | [campaign](../campaign) |
| 战斗内单位与行为 | [mission](../mission) |
| 推屏 / 弹屏 / 输入限制 | [gui](../gui) |

[modulemanager](../modulemanager) 与本桶同性质——都是启动器 / 平台侧基础设施，两页互链。

## 命名空间索引（非链接，仅供认出）

下面每个名字都用 `grep -rw` 在 `bannerlord-1.4.6/TaleWorlds.Network/` 核实过。**这是按用途分组的部分索引，不是待补清单，它们全部没有类页**：

- 会话与连接：`NetworkSession`、`ClientsideSession`、`ServersideSession`、`ServersideSessionManager`、`ConnectionState`、`MessageServiceConnection`、`ClientWebSocketHandler`、`WebSocketMessage`、`JsonSocketMessage`、`RESTClient`、`ServiceException`、`ServiceExceptionModel`、`TcpSocket`、`TcpStatus`、`Authorize`、`Coroutine`
- 消息契约与序列化：`MessageId`、`MessageContract`、`MessageContractCreator`、`MessageContractHandler`、`MessageContractHandlerManager`、`MessageInfo`、`MessageTypes`、`MessageProxy`、`IMessageProxyClient`、`INetworkMessageReader`、`INetworkMessageWriter`、`INetworkSerializable`、`MessageBuffer`、`NetworkMessage`、`IncomingServerSessionMessage`
- 调度：`CoroutineManager`、`CoroutineState`、`TickManager`、`WaitForTicks`、`WaitForSpecialCase`、`PostBoxId`
- 命名空间层级的 4 个委托：`CoroutineDelegate`、`MessageContractHandlerDelegate`（泛型，参数 `T`）、`TcpCloseDelegate`、`TcpMessageReceiverDelegate`。其余委托（如 `ConnectedDelegate`、`MessageReceivedDelegate`、`StateChangedDelegate`）是**嵌套**在其他类里的，不在上面那 4 个之内。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 含「不生成文档的目录」一节，说明哪些命名空间被排除及原因
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)