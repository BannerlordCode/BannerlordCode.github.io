---
title: "Announcement"
description: "Announcement：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 7 个（方法 0、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/Announcement.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Announcement

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class Announcement`
**File:** `TaleWorlds.MountAndBlade.Diamond/Announcement.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

Announcement 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/Announcement.cs。它是一个 public 类，继承链为 Announcement。public/protected 成员共 7 个：5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Announcement 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 Announcement。成员构成以属性为主（属性 5/7，方法 0/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/Announcement.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `BattleId` | `public Guid BattleId` | 属性 |
| `Type` | `public AnnouncementType Type` | 属性 |
| `Text` | `public string Text` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `Announcement` | `public Announcement()` | 构造函数 |
| `Announcement` | `public Announcement(int id, Guid battleId, AnnouncementType type, string text, bool isEnabled)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
- [同命名空间 AvailableCustomGames](../AvailableCustomGames/)
