---
title: "LobbyNotification"
description: "LobbyNotification：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 12 个（方法 2、属性 5、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyNotification

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class LobbyNotification`
**File:** `TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LobbyNotification 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs。它是一个 public 类，继承链为 LobbyNotification。public/protected 成员共 12 个：2 方法、5 属性、2 字段、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LobbyNotification 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 LobbyNotification。成员构成以属性为主（属性 5/12，方法 2/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/LobbyNotification.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `Type` | `public NotificationType Type` | 属性 |
| `Date` | `public DateTime Date` | 属性 |
| `Message` | `public string Message` | 属性 |
| `string>Parameters` | `public Dictionary<string, string>Parameters` | 属性 |
| `LobbyNotification` | `public LobbyNotification()` | 构造函数 |
| `LobbyNotification` | `public LobbyNotification(NotificationType type, DateTime date, string message)` | 构造函数 |
| `LobbyNotification` | `public LobbyNotification(int id, NotificationType type, DateTime date, string message, string serializedParameters)` | 构造函数 |
| `GetParametersAsString` | `public string GetParametersAsString()` | 方法 |
| `GetTextObjectOfMessage` | `public TextObject GetTextObjectOfMessage()` | 方法 |
| `BadgeIdParameterName` | `public const string BadgeIdParameterName` | 字段 |
| `FriendRequesterParameterName` | `public const string FriendRequesterParameterName` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
