---
title: "BindingPath"
description: "BindingPath：TaleWorlds.Library 的 public 类；公开成员 21 个（方法 12、属性 6、字段 0）。源文件 TaleWorlds.Library/BindingPath.cs。"
---
# BindingPath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BindingPath`
**File:** `TaleWorlds.Library/BindingPath.cs`

## 概述

BindingPath 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/BindingPath.cs。它是一个 public 类，继承链为 BindingPath。public/protected 成员共 21 个：12 方法、6 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BindingPath 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 BindingPath。成员构成以方法为主（方法 12/21，属性 6/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/BindingPath.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Path` | `public string Path` | 属性 |
| `string[]Nodes` | `public string[]Nodes` | 属性 |
| `FirstNode` | `public string FirstNode` | 属性 |
| `LastNode` | `public string LastNode` | 属性 |
| `BindingPath` | `public BindingPath(string path)` | 构造函数 |
| `BindingPath` | `public BindingPath(int path)` | 构造函数 |
| `CreateFromProperty` | `public static BindingPath CreateFromProperty(string propertyName)` | 方法 |
| `BindingPath` | `public BindingPath(IEnumerable<string>nodes)` | 构造函数 |
| `SubPath` | `public BindingPath SubPath` | 属性 |
| `ParentPath` | `public BindingPath ParentPath` | 属性 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `IsRelatedWithPathAsString` | `public static bool IsRelatedWithPathAsString(string path, string referencePath)` | 方法 |
| `IsRelatedWithPath` | `public static bool IsRelatedWithPath(string path, BindingPath referencePath)` | 方法 |
| `IsRelatedWith` | `public bool IsRelatedWith(BindingPath referencePath)` | 方法 |
| `DecrementIfRelatedWith` | `public void DecrementIfRelatedWith(BindingPath path, int startIndex)` | 方法 |
| `Simplify` | `public BindingPath Simplify()` | 方法 |
| `Append` | `public BindingPath Append(BindingPath bindingPath)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
