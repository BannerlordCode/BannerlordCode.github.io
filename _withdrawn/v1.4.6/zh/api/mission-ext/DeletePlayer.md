---
title: "DeletePlayer"
description: "DeletePlayer：TaleWorlds.MountAndBlade.Network.Messages 的 public 类，继承 GameNetworkMessage；公开成员 8 个（方法 4、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeletePlayer

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class DeletePlayer : GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DeletePlayer 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs。它是一个 public 类（sealed），实现/继承 GameNetworkMessage，继承链为 DeletePlayer → GameNetworkMessage。public/protected 成员共 8 个：4 方法、2 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DeletePlayer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Network.Messages`，继承链 DeletePlayer → GameNetworkMessage。成员构成以方法为主（方法 4/8，属性 2/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerIndex` | `public int PlayerIndex` | 属性 |
| `AddToDisconnectList` | `public bool AddToDisconnectList` | 属性 |
| `DeletePlayer` | `public DeletePlayer(int playerIndex, bool addToDisconnectList)` | 构造函数 |
| `DeletePlayer` | `public DeletePlayer()` | 构造函数 |
| `OnWrite` | `protected override void OnWrite()` | 方法 |
| `OnRead` | `protected override bool OnRead()` | 方法 |
| `OnGetLogFilter` | `protected override MultiplayerMessageFilter OnGetLogFilter()` | 方法 |
| `OnGetLogFormat` | `protected override string OnGetLogFormat()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameNetworkMessage](../GameNetworkMessage/)
- [同命名空间 CreatePlayer](../CreatePlayer/)
- [同命名空间 GameNetworkMessage](../GameNetworkMessage/)
