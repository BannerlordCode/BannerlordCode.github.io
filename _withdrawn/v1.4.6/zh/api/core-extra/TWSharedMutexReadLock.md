---
title: "TWSharedMutexReadLock"
description: "TWSharedMutexReadLock：TaleWorlds.Library 的 public 结构体，继承 IDisposable；公开成员 2 个（方法 1、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/TWSharedMutexReadLock.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TWSharedMutexReadLock

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct TWSharedMutexReadLock : IDisposable`
**File:** `TaleWorlds.Library/TWSharedMutexReadLock.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

TWSharedMutexReadLock 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TWSharedMutexReadLock.cs。它是一个 public 结构体，实现/继承 IDisposable，继承链为 TWSharedMutexReadLock → IDisposable。public/protected 成员共 2 个：1 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TWSharedMutexReadLock 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 TWSharedMutexReadLock → IDisposable。成员构成以方法为主（方法 1/2，属性 0/2），对外主要以操作入口暴露。继承链上的 IDisposable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TWSharedMutexReadLock.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TWSharedMutexReadLock` | `public TWSharedMutexReadLock(TWSharedMutex mtx)` | 构造函数 |
| `Dispose` | `public void Dispose()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
