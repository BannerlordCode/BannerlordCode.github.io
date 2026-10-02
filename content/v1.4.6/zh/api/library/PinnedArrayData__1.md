---
title: "PinnedArrayData<T>"
description: "PinnedArrayData<T>：TaleWorlds.Library 的 public 结构体；公开成员 9 个（方法 2、属性 5、字段 0）。源文件 TaleWorlds.Library/PinnedArrayData.cs。"
---
# PinnedArrayData<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct PinnedArrayData<T>`
**File:** `TaleWorlds.Library/PinnedArrayData.cs`

## 概述

PinnedArrayData<T> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/PinnedArrayData.cs。它是一个 public 结构体，继承链为 PinnedArrayData。public/protected 成员共 9 个：2 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PinnedArrayData<T> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 PinnedArrayData。成员构成以属性为主（属性 5/9，方法 2/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/PinnedArrayData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Pinned` | `public bool Pinned` | 属性 |
| `Pointer` | `public IntPtr Pointer` | 属性 |
| `T[]Array` | `public T[]Array` | 属性 |
| `]Array2D` | `public T[, ]Array2D` | 属性 |
| `Handle` | `public GCHandle Handle` | 属性 |
| `PinnedArrayData` | `public PinnedArrayData(T[]array, bool manualPinning = false)` | 构造函数 |
| `PinnedArrayData` | `public PinnedArrayData(T[, ]array, bool manualPinning = false)` | 构造函数 |
| `CheckIfTypeRequiresManualPinning` | `public static bool CheckIfTypeRequiresManualPinning(Type type)` | 方法 |
| `Dispose` | `public void Dispose()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
