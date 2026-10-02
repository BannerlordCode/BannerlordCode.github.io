---
title: "VariableCode"
description: "VariableCode：TaleWorlds.Library 的 public 类；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.Library/CodeGeneration/VariableCode.cs。"
---
# VariableCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class VariableCode`
**File:** `TaleWorlds.Library/CodeGeneration/VariableCode.cs`

## 概述

VariableCode 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/CodeGeneration/VariableCode.cs。它是一个 public 类，继承链为 VariableCode。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VariableCode 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.CodeGeneration），继承链 VariableCode。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/CodeGeneration/VariableCode.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `Type` | `public string Type` | 属性 |
| `IsStatic` | `public bool IsStatic` | 属性 |
| `AccessModifier` | `public VariableCodeAccessModifier AccessModifier` | 属性 |
| `VariableCode` | `public VariableCode()` | 构造函数 |
| `GenerateLine` | `public string GenerateLine()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClassCode](../ClassCode)
- [同命名空间 ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [同命名空间 CodeBlock](../CodeBlock)
- [同命名空间 CodeGenerationContext](../CodeGenerationContext)
