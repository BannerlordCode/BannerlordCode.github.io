---
title: "CustomBattleFactory"
description: "CustomBattleFactory：TaleWorlds.MountAndBlade.View.CustomBattle 的 public 类；公开成员 6 个（方法 6、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleFactory

**Namespace:** `TaleWorlds.MountAndBlade.View.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class CustomBattleFactory`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CustomBattleFactory 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs。它是一个 public 类，继承链为 CustomBattleFactory。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleFactory 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.CustomBattle`，继承链 CustomBattleFactory。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterProvider` | `public static void RegisterProvider<T>() where T : ICustomBattleProvider, new()` | 方法 |
| `StartCustomBattleWithProvider` | `public static void StartCustomBattleWithProvider<T>() where T : ICustomBattleProvider, new()` | 方法 |
| `StartCustomBattle` | `public static void StartCustomBattle()` | 方法 |
| `GetProviderCount` | `public static int GetProviderCount()` | 方法 |
| `List` | `public static List<ICustomBattleProvider>CollectProviders()` | 方法 |
| `CollectNextProvider` | `public static ICustomBattleProvider CollectNextProvider(Type currentProviderType)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ICustomBattleProvider](../ICustomBattleProvider/)
