---
title: "ManagedParameters"
description: "ManagedParameters：TaleWorlds.Core 的 public 类，继承 IManagedParametersInitializer；公开成员 5 个（方法 4、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/ManagedParameters.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedParameters

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**File:** `TaleWorlds.Core/ManagedParameters.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

ManagedParameters 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ManagedParameters.cs。它是一个 public 类（sealed），实现/继承 IManagedParametersInitializer，继承链为 ManagedParameters → IManagedParametersInitializer。public/protected 成员共 5 个：4 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedParameters 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 ManagedParameters → IManagedParametersInitializer。成员构成以方法为主（方法 4/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ManagedParameters.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static ManagedParameters Instance` | 属性 |
| `GetParameter` | `public static float GetParameter(ManagedParametersEnum managedParameterType)` | 方法 |
| `SetParameter` | `public static void SetParameter(ManagedParametersEnum managedParameterType, float newValue)` | 方法 |
| `Initialize` | `public void Initialize(string relativeXmlPath)` | 方法 |
| `GetManagedParameter` | `public float GetManagedParameter(ManagedParametersEnum managedParameterEnum)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IManagedParametersInitializer](../IManagedParametersInitializer/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
