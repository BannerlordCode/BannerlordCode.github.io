---
title: "PlatformFilePath"
description: "PlatformFilePath：TaleWorlds.Library 的 public 结构体；公开成员 5 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.Library/PlatformFilePath.cs。"
---
# PlatformFilePath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct PlatformFilePath`
**File:** `TaleWorlds.Library/PlatformFilePath.cs`

## 概述

PlatformFilePath 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/PlatformFilePath.cs。它是一个 public 结构体，继承链为 PlatformFilePath。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlatformFilePath 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 PlatformFilePath。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/PlatformFilePath.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlatformFilePath` | `public PlatformFilePath(PlatformDirectoryPath folderPath, string fileName)` | 构造函数 |
| `+` | `public static PlatformFilePath operator +(PlatformFilePath path, string str)` | 运算符 |
| `FileFullPath` | `public string FileFullPath` | 属性 |
| `GetFileNameWithoutExtension` | `public string GetFileNameWithoutExtension()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
