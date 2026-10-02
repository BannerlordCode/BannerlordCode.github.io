---
title: "CodeGenerationContext"
description: "CodeGenerationContext：TaleWorlds.Library 的 public 类；公开成员 4 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs。"
---
# CodeGenerationContext

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class CodeGenerationContext`
**File:** `TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs`

## 概述

CodeGenerationContext 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs。它是一个 public 类，继承链为 CodeGenerationContext。public/protected 成员共 4 个：2 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CodeGenerationContext 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.CodeGeneration），继承链 CodeGenerationContext。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<NamespaceCode>Namespaces` | 属性 |
| `CodeGenerationContext` | `public CodeGenerationContext()` | 构造函数 |
| `FindOrCreateNamespace` | `public NamespaceCode FindOrCreateNamespace(string name)` | 方法 |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClassCode](../ClassCode)
- [同命名空间 ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [同命名空间 CodeBlock](../CodeBlock)
- [同命名空间 CodeGenerationFile](../CodeGenerationFile)
