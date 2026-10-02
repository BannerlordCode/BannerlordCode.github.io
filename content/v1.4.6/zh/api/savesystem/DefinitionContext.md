---
title: "DefinitionContext"
description: "DefinitionContext：TaleWorlds.SaveSystem 的 public 类；公开成员 6 个（方法 3、属性 2、字段 0）。源文件 TaleWorlds.SaveSystem/Definition/DefinitionContext.cs。"
---
# DefinitionContext

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class DefinitionContext`
**File:** `TaleWorlds.SaveSystem/Definition/DefinitionContext.cs`

## 概述

DefinitionContext 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/DefinitionContext.cs。它是一个 public 类，继承链为 DefinitionContext。public/protected 成员共 6 个：3 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefinitionContext 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Definition），继承链 DefinitionContext。成员构成以方法为主（方法 3/6，属性 2/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/DefinitionContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GotError` | `public bool GotError` | 属性 |
| `IEnumerable` | `public IEnumerable<string>Errors` | 属性 |
| `DefinitionContext` | `public DefinitionContext()` | 构造函数 |
| `FillWithCurrentTypes` | `public void FillWithCurrentTypes()` | 方法 |
| `TryGetTypeDefinition` | `public TypeDefinitionBase TryGetTypeDefinition(SaveId saveId)` | 方法 |
| `GenerateCode` | `public void GenerateCode(SaveCodeGenerationContext context)` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate)
- [同命名空间 ContainerDefinition](../ContainerDefinition)
- [同命名空间 ContainerSaveId](../ContainerSaveId)
- [同命名空间 CustomField](../CustomField)
