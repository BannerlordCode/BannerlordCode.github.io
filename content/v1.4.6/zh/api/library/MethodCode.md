---
title: "MethodCode"
description: "MethodCode：TaleWorlds.Library 的 public 类；公开成员 12 个（方法 4、属性 7、字段 0）。源文件 TaleWorlds.Library/CodeGeneration/MethodCode.cs。"
---
# MethodCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class MethodCode`
**File:** `TaleWorlds.Library/CodeGeneration/MethodCode.cs`

## 概述

MethodCode 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/CodeGeneration/MethodCode.cs。它是一个 public 类，继承链为 MethodCode。public/protected 成员共 12 个：4 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MethodCode 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.CodeGeneration），继承链 MethodCode。成员构成以属性为主（属性 7/12，方法 4/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/CodeGeneration/MethodCode.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Comment` | `public string Comment` | 属性 |
| `Name` | `public string Name` | 属性 |
| `MethodSignature` | `public string MethodSignature` | 属性 |
| `ReturnParameter` | `public string ReturnParameter` | 属性 |
| `IsStatic` | `public bool IsStatic` | 属性 |
| `AccessModifier` | `public MethodCodeAccessModifier AccessModifier` | 属性 |
| `PolymorphismInfo` | `public MethodCodePolymorphismInfo PolymorphismInfo` | 属性 |
| `MethodCode` | `public MethodCode()` | 构造函数 |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | 方法 |
| `AddLine` | `public void AddLine(string line)` | 方法 |
| `AddLines` | `public void AddLines(IEnumerable<string>lines)` | 方法 |
| `AddCodeBlock` | `public void AddCodeBlock(CodeBlock codeBlock)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClassCode](../ClassCode)
- [同命名空间 ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [同命名空间 CodeBlock](../CodeBlock)
- [同命名空间 CodeGenerationContext](../CodeGenerationContext)
