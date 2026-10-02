---
title: "NativeArrayEnumerator<T>"
description: "NativeArrayEnumerator<T>：TaleWorlds.DotNet 的 public 类，继承 IReadOnlyList<T>、IEnumerable<T>；公开成员 3 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.DotNet/NativeArrayEnumerator.cs。"
---
# NativeArrayEnumerator<T>

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class NativeArrayEnumerator<T>: IReadOnlyList<T>, IEnumerable<T>, IEnumerable, IReadOnlyCollection<T>where T : struct`
**File:** `TaleWorlds.DotNet/NativeArrayEnumerator.cs`

## 概述

NativeArrayEnumerator<T> 位于 TaleWorlds.DotNet 模块，源文件 TaleWorlds.DotNet/NativeArrayEnumerator.cs。它是一个 public 类（sealed），实现/继承 IReadOnlyList<T>、IEnumerable<T>、IEnumerable、IReadOnlyCollection<T>，继承链为 NativeArrayEnumerator → IReadOnlyList。public/protected 成员共 3 个：1 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NativeArrayEnumerator<T> 是 TaleWorlds.DotNet 的顶层类型，命名空间与模块目录一致，继承链 NativeArrayEnumerator → IReadOnlyList。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。继承链上的 IReadOnlyList 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.DotNet/NativeArrayEnumerator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NativeArrayEnumerator` | `public NativeArrayEnumerator(NativeArray nativeArray)` | 构造函数 |
| `this[...]` | `public T this[int index]` | 索引器 |
| `Count` | `public int Count` | 属性 |

## 参见

- [↑ dotnet 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CallbackDebugTool](../CallbackDebugTool)
- [同命名空间 CallbackStringBufferManager](../CallbackStringBufferManager)
- [同命名空间 Controller](../Controller)
- [同命名空间 CustomEngineStructMemberData](../CustomEngineStructMemberData)
