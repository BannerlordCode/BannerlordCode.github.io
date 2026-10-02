---
title: "AssemblyLoader"
description: "AssemblyLoader：TaleWorlds.Library 的 public 类；公开成员 5 个（方法 3、属性 1、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/AssemblyLoader.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AssemblyLoader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class AssemblyLoader`
**File:** `TaleWorlds.Library/AssemblyLoader.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

AssemblyLoader 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/AssemblyLoader.cs。它是一个 public 类，继承链为 AssemblyLoader。public/protected 成员共 5 个：3 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AssemblyLoader 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 AssemblyLoader。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/AssemblyLoader.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public static void Initialize()` | 方法 |
| `LoadFrom` | `public static Assembly LoadFrom(string assemblyFile, bool showError = true)` | 方法 |
| `LoadFrom` | `public static Assembly LoadFrom(string assemblyFile, out AssemblyLoader.AssemblyLoadResult result, bool showError = true)` | 方法 |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult` | 属性 |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
