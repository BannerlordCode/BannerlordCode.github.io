---
title: "ClanInfo"
description: "ClanInfo：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 10 个（方法 1、属性 8、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ClanInfo`
**File:** `TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ClanInfo 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs。它是一个 public 类，继承链为 ClanInfo。public/protected 成员共 10 个：1 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanInfo 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 ClanInfo。成员构成以属性为主（属性 8/10，方法 1/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanId` | `public Guid ClanId` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Tag` | `public string Tag` | 属性 |
| `Faction` | `public string Faction` | 属性 |
| `Sigil` | `public string Sigil` | 属性 |
| `InformationText` | `public string InformationText` | 属性 |
| `ClanPlayer[]Players` | `public ClanPlayer[]Players` | 属性 |
| `ClanAnnouncement[]Announcements` | `public ClanAnnouncement[]Announcements` | 属性 |
| `ClanInfo` | `public ClanInfo(Guid clanId, string name, string tag, string faction, string sigil, string information, ClanPlayer[]players, ClanAnnouncement[]announcements)` | 构造函数 |
| `CreateUnavailableClanInfo` | `public static ClanInfo CreateUnavailableClanInfo()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
