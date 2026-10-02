---
title: "ManagedOptions"
description: "ManagedOptions：TaleWorlds.MountAndBlade 的 public 类；公开成员 8 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/ManagedOptions.cs。"
---
# ManagedOptions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ManagedOptions`
**File:** `TaleWorlds.MountAndBlade/ManagedOptions.cs`

## 概述

ManagedOptions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ManagedOptions.cs。它是一个 public 类，继承链为 ManagedOptions。public/protected 成员共 8 个：5 方法、1 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedOptions 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ManagedOptions。成员构成以方法为主（方法 5/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ManagedOptions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetConfig` | `public static float GetConfig(ManagedOptions.ManagedOptionsType type)` | 方法 |
| `GetDefaultConfig` | `public static float GetDefaultConfig(ManagedOptions.ManagedOptionsType type)` | 方法 |
| `SetConfig` | `public static void SetConfig(ManagedOptions.ManagedOptionsType type, float value)` | 方法 |
| `SaveConfig` | `public static SaveResult SaveConfig()` | 方法 |
| `ManagedOptionsType` | `public enum ManagedOptionsType` | 属性 |
| `OnManagedOptionChangedDelegate` | `public delegate void OnManagedOptionChangedDelegate(ManagedOptions.ManagedOptionsType changedManagedOptionsType);` | 方法 |
| `ManagedOptionsType` | `public enum ManagedOptionsType` | 嵌套类型 |
| `OnManagedOptionChangedDelegate` | `public delegate void OnManagedOptionChangedDelegate(ManagedOptions.ManagedOptionsType changedManagedOptionsType)` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
