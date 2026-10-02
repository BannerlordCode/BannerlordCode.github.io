---
title: "ServerNotification"
description: "ServerNotification：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 4 个（方法 1、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/ServerNotification.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServerNotification

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ServerNotification`
**File:** `TaleWorlds.MountAndBlade.Diamond/ServerNotification.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ServerNotification 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/ServerNotification.cs。它是一个 public 类，继承链为 ServerNotification。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ServerNotification 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 ServerNotification。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/ServerNotification.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public ServerNotificationType Type` | 属性 |
| `Message` | `public string Message` | 属性 |
| `ServerNotification` | `public ServerNotification(ServerNotificationType type, string message)` | 构造函数 |
| `GetTextObjectOfMessage` | `public TextObject GetTextObjectOfMessage()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
