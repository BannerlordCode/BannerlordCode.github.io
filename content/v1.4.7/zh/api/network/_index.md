---
title: "Network — Network：非玩法逻辑的网络通道"
description: "TaleWorlds.Network 所在的目录，游戏与后端服务之间的消息契约与传输，约 38 个类型，目前一个页面都没有。"
---
# Network — Network：非玩法逻辑的网络通道

这个桶装命名空间 `TaleWorlds.Network`，1.4.7 源码树里约 38 个类型，内容是消息契约与传输基础设施：`NetworkMessage`、`MessageId`、`MessageInfo`、`MessageContractHandlerManager`、`ConnectionState`、`RESTClient`、`TickManager`。

**这个桶不是多人对战。** 多人对战的代码在 `TaleWorlds.MountAndBlade.Multiplayer`，落在 [mission-ext](../mission-ext/)。两者经常被混为一谈，但它们解决的问题不同：那个桶管一局对战里两个客户端怎么同步，这个桶管游戏跟后端服务（排行榜、模组列表、云存档、遥测）怎么说话。

理解这个区分对模组作者的实际影响是：如果你要做联机玩法，去 [mission-ext](../mission-ext/) 找 `MissionNetwork` 一族；如果你要让模组在游戏里发一个 HTTP 请求，或者监听服务端推下来的消息，才是这个桶。

## 本区页面（0）

本目录收录 `TaleWorlds.Network` 的全部类型，约 38 个。**本区当前没有页面**（撰写进度：0/38）。

## 尚未收录

按用途是三组：

- **消息契约**：`NetworkMessage`、`MessageId`、`MessageInfo`、`MessageContractHandlerManager` —— 定义一条消息、给它一个标识、注册处理它的方法。这是模组自定义消息要走的那条路。
- **连接与会话**：`ConnectionState`、`ClientsideSession`、`ClientWebSocketHandler`、`RESTClient`。
- **工具与异步**：`Coroutine`、`CoroutineDelegate`、`TickManager`、`Extensions`。

有意思的是 `Coroutine` 和 `CoroutineDelegate` 也落在这个桶 —— 它们用的是引擎的协程调度，和 Unity 那套没有关系，所以按命名空间归到了网络层。

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [sandbox](../sandbox/) · [system](../system/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)