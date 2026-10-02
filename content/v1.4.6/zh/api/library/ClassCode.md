---
title: "ClassCode"
description: "ClassCode：TaleWorlds.Library 的 public 类；公开成员 19 个（方法 6、属性 12、字段 0）。源文件 TaleWorlds.Library/CodeGeneration/ClassCode.cs。"
---
# ClassCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class ClassCode`
**File:** `TaleWorlds.Library/CodeGeneration/ClassCode.cs`

## 概述

ClassCode 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/CodeGeneration/ClassCode.cs。它是一个 public 类，继承链为 ClassCode。public/protected 成员共 19 个：6 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClassCode 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.CodeGeneration），继承链 ClassCode。成员构成以属性为主（属性 12/19，方法 6/19），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/CodeGeneration/ClassCode.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `IsGeneric` | `public bool IsGeneric` | 属性 |
| `GenericTypeCount` | `public int GenericTypeCount` | 属性 |
| `IsPartial` | `public bool IsPartial` | 属性 |
| `AccessModifier` | `public ClassCodeAccessModifier AccessModifier` | 属性 |
| `IsClass` | `public bool IsClass` | 属性 |
| `List` | `public List<string>InheritedInterfaces` | 属性 |
| `List` | `public List<ClassCode>NestedClasses` | 属性 |
| `List` | `public List<MethodCode>Methods` | 属性 |
| `List` | `public List<ConstructorCode>Constructors` | 属性 |
| `List` | `public List<VariableCode>Variables` | 属性 |
| `CommentSection` | `public CommentSection CommentSection` | 属性 |
| `ClassCode` | `public ClassCode()` | 构造函数 |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | 方法 |
| `AddVariable` | `public void AddVariable(VariableCode variableCode)` | 方法 |
| `AddNestedClass` | `public void AddNestedClass(ClassCode clasCode)` | 方法 |
| `AddMethod` | `public void AddMethod(MethodCode methodCode)` | 方法 |
| `AddConsturctor` | `public void AddConsturctor(ConstructorCode constructorCode)` | 方法 |
| `AddInterface` | `public void AddInterface(string interfaceName)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [同命名空间 CodeBlock](../CodeBlock)
- [同命名空间 CodeGenerationContext](../CodeGenerationContext)
- [同命名空间 CodeGenerationFile](../CodeGenerationFile)
