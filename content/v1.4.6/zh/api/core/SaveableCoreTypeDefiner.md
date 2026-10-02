---
title: "SaveableCoreTypeDefiner"
description: "SaveableCoreTypeDefiner：TaleWorlds.Core 的 public 类，继承 SaveableTypeDefiner；公开成员 10 个（方法 9、属性 0、字段 0）。源文件 TaleWorlds.Core/SaveableCoreTypeDefiner.cs。"
---
# SaveableCoreTypeDefiner

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class SaveableCoreTypeDefiner : SaveableTypeDefiner`
**File:** `TaleWorlds.Core/SaveableCoreTypeDefiner.cs`

## 概述

SaveableCoreTypeDefiner 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/SaveableCoreTypeDefiner.cs。它是一个 public 类，实现/继承 SaveableTypeDefiner，继承链为 SaveableCoreTypeDefiner → SaveableTypeDefiner。public/protected 成员共 10 个：9 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveableCoreTypeDefiner 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 SaveableCoreTypeDefiner → SaveableTypeDefiner。成员构成以方法为主（方法 9/10，属性 0/10），对外主要以操作入口暴露。继承链上的 SaveableTypeDefiner 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/SaveableCoreTypeDefiner.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveableCoreTypeDefiner` | `public SaveableCoreTypeDefiner() : base(10000)` | 构造函数 |
| `DefineClassTypes` | `protected override void DefineClassTypes()` | 方法 |
| `DefineStructTypes` | `protected override void DefineStructTypes()` | 方法 |
| `DefineEnumTypes` | `protected override void DefineEnumTypes()` | 方法 |
| `DefineInterfaceTypes` | `protected override void DefineInterfaceTypes()` | 方法 |
| `DefineConflictResolvers` | `protected override void DefineConflictResolvers()` | 方法 |
| `DefineRootClassTypes` | `protected override void DefineRootClassTypes()` | 方法 |
| `DefineGenericClassDefinitions` | `protected override void DefineGenericClassDefinitions()` | 方法 |
| `DefineGenericStructDefinitions` | `protected override void DefineGenericStructDefinitions()` | 方法 |
| `DefineContainerDefinitions` | `protected override void DefineContainerDefinitions()` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
