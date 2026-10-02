---
title: "TauntUsageManager"
description: "TauntUsageManager：TaleWorlds.Core 的 public 类；公开成员 15 个（方法 9、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/TauntUsageManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TauntUsageManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class TauntUsageManager`
**File:** `TaleWorlds.Core/TauntUsageManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

TauntUsageManager 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/TauntUsageManager.cs。它是一个 public 类，继承链为 TauntUsageManager。public/protected 成员共 15 个：9 方法、3 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TauntUsageManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 TauntUsageManager。成员构成以方法为主（方法 9/15，属性 3/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/TauntUsageManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static TauntUsageManager Instance` | 属性 |
| `Initialize` | `public static TauntUsageManager Initialize()` | 方法 |
| `Read` | `public void Read()` | 方法 |
| `GetUsageSet` | `public TauntUsageManager.TauntUsageSet GetUsageSet(string id)` | 方法 |
| `GetAction` | `public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)` | 方法 |
| `GetActionDisabledReasonText` | `public static string GetActionDisabledReasonText(TauntUsageManager.TauntUsage.TauntUsageFlag disabledReasonFlag)` | 方法 |
| `GetIsActionNotSuitableReason` | `public TauntUsageManager.TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)` | 方法 |
| `GetTauntItemCount` | `public int GetTauntItemCount()` | 方法 |
| `GetIndexOfAction` | `public int GetIndexOfAction(string id)` | 方法 |
| `GetDefaultAction` | `public string GetDefaultAction(int index)` | 方法 |
| `TauntUsageSet` | `public class TauntUsageSet` | 属性 |
| `TauntUsage` | `public class TauntUsage` | 属性 |
| `TauntUsageSet` | `public class TauntUsageSet` | 嵌套类型 |
| `TauntUsage` | `public class TauntUsage` | 嵌套类型 |
| `TauntUsageFlag` | `public enum TauntUsageFlag` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
