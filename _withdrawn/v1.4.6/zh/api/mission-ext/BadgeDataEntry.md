---
title: "BadgeDataEntry"
description: "BadgeDataEntry：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 6 个（方法 2、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BadgeDataEntry

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BadgeDataEntry`
**File:** `TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BadgeDataEntry 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs。它是一个 public 类，继承链为 BadgeDataEntry。public/protected 成员共 6 个：2 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BadgeDataEntry 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 BadgeDataEntry。成员构成以属性为主（属性 4/6，方法 2/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/BadgeDataEntry.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | 属性 |
| `BadgeId` | `public string BadgeId` | 属性 |
| `ConditionId` | `public string ConditionId` | 属性 |
| `Count` | `public int Count` | 属性 |
| `int>ToDictionary` | `public static Dictionary<ValueTuple<PlayerId, string, string>, int>ToDictionary(List<BadgeDataEntry>entries)` | 方法 |
| `List` | `public static List<BadgeDataEntry>ToList(Dictionary<ValueTuple<PlayerId, string, string>, int>dictionary)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
