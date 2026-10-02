---
title: "MBEquipmentRosterExtensions"
description: "MBEquipmentRosterExtensions：TaleWorlds.CampaignSystem.Extensions 的 public 类；公开成员 6 个（方法 5、属性 1、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBEquipmentRosterExtensions

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class MBEquipmentRosterExtensions`
**File:** `TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

MBEquipmentRosterExtensions 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs。它是一个 public 类，继承链为 MBEquipmentRosterExtensions。public/protected 成员共 6 个：5 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBEquipmentRosterExtensions 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Extensions`，继承链 MBEquipmentRosterExtensions。成员构成以方法为主（方法 5/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public static MBReadOnlyList<MBEquipmentRoster>All` | 属性 |
| `IEnumerable` | `public static IEnumerable<Equipment>GetCivilianEquipments(this MBEquipmentRoster instance)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Equipment>GetStealthEquipments(this MBEquipmentRoster instance)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Equipment>GetBattleEquipments(this MBEquipmentRoster instance)` | 方法 |
| `GetRandomCivilianEquipment` | `public static Equipment GetRandomCivilianEquipment(this MBEquipmentRoster instance)` | 方法 |
| `GetRandomStealthEquipment` | `public static Equipment GetRandomStealthEquipment(this MBEquipmentRoster instance)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Attributes](../Attributes/)
- [同命名空间 ItemCategories](../ItemCategories/)
- [同命名空间 ItemObjectExtensions](../ItemObjectExtensions/)
- [同命名空间 Items](../Items/)
