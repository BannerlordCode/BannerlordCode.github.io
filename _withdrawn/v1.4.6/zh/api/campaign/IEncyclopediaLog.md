---
title: "IEncyclopediaLog"
description: "IEncyclopediaLog：TaleWorlds.CampaignSystem.LogEntries 的 public 接口；公开成员 3 个（方法 2、属性 1、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IEncyclopediaLog

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IEncyclopediaLog`
**File:** `TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

IEncyclopediaLog 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs。它是一个 public 接口，继承链为 IEncyclopediaLog。public/protected 成员共 3 个：2 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IEncyclopediaLog 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.LogEntries`，继承链 IEncyclopediaLog。成员构成以方法为主（方法 2/3，属性 1/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsVisibleInEncyclopediaPageOf` | `bool IsVisibleInEncyclopediaPageOf<T>(T obj) where T : MBObjectBase;` | 方法 |
| `GetEncyclopediaText` | `TextObject GetEncyclopediaText();` | 方法 |
| `GameTime` | `CampaignTime GameTime` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ArmyCreationLogEntry](../ArmyCreationLogEntry/)
- [同命名空间 ArmyDispersionLogEntry](../ArmyDispersionLogEntry/)
- [同命名空间 BattleStartedLogEntry](../BattleStartedLogEntry/)
- [同命名空间 BesiegeSettlementLogEntry](../BesiegeSettlementLogEntry/)
