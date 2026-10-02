---
title: "ApplicationVersion"
description: "ApplicationVersion：TaleWorlds.Library 的 public 结构体；公开成员 24 个（方法 16、属性 5、字段 2）。canonical 桶 core-extra。源文件 TaleWorlds.Library/ApplicationVersion.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ApplicationVersion

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct ApplicationVersion`
**File:** `TaleWorlds.Library/ApplicationVersion.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

ApplicationVersion 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ApplicationVersion.cs。它是一个 public 结构体，继承链为 ApplicationVersion。public/protected 成员共 24 个：16 方法、5 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ApplicationVersion 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 ApplicationVersion。成员构成以方法为主（方法 16/24，属性 5/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ApplicationVersion.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ApplicationVersionType` | `public ApplicationVersionType ApplicationVersionType` | 属性 |
| `Major` | `public int Major` | 属性 |
| `Minor` | `public int Minor` | 属性 |
| `Revision` | `public int Revision` | 属性 |
| `ChangeSet` | `public int ChangeSet` | 属性 |
| `ApplicationVersion` | `public ApplicationVersion(ApplicationVersionType applicationVersionType, int major, int minor, int revision, int changeSet)` | 构造函数 |
| `FromParametersFile` | `public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)` | 方法 |
| `FromString` | `public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)` | 方法 |
| `IsSame` | `public bool IsSame(ApplicationVersion other, bool checkChangeSet)` | 方法 |
| `IsOlderThan` | `public bool IsOlderThan(ApplicationVersion other)` | 方法 |
| `IsNewerThan` | `public bool IsNewerThan(ApplicationVersion other)` | 方法 |
| `ApplicationVersionTypeFromString` | `public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString)` | 方法 |
| `GetPrefix` | `public static string GetPrefix(ApplicationVersionType applicationVersionType)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `operator>` | `public static bool operator>(ApplicationVersion a, ApplicationVersion b)` | 运算符 |
| `operator` | `public static bool operator<(ApplicationVersion a, ApplicationVersion b)` | 运算符 |
| `operator>=` | `public static bool operator>=(ApplicationVersion a, ApplicationVersion b)` | 运算符 |
| `operator` | `public static bool operator<=(ApplicationVersion a, ApplicationVersion b)` | 运算符 |
| `DefaultChangeSet` | `public const int DefaultChangeSet` | 字段 |
| `Empty` | `public static readonly ApplicationVersion Empty` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
- [同命名空间 ApplicationVersionType](../ApplicationVersionType/)
