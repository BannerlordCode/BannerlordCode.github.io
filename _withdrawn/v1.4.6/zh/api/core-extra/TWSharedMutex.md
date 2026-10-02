---
title: "TWSharedMutex"
description: "TWSharedMutex：TaleWorlds.Library 的 public 类；公开成员 6 个（方法 4、属性 2、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/TWSharedMutex.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TWSharedMutex

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TWSharedMutex`
**File:** `TaleWorlds.Library/TWSharedMutex.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

TWSharedMutex 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TWSharedMutex.cs。它是一个 public 类，继承链为 TWSharedMutex。public/protected 成员共 6 个：4 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TWSharedMutex 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 TWSharedMutex。成员构成以方法为主（方法 4/6，属性 2/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TWSharedMutex.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnterReadLock` | `public void EnterReadLock()` | 方法 |
| `EnterWriteLock` | `public void EnterWriteLock()` | 方法 |
| `ExitReadLock` | `public void ExitReadLock()` | 方法 |
| `ExitWriteLock` | `public void ExitWriteLock()` | 方法 |
| `IsReadLockHeld` | `public bool IsReadLockHeld` | 属性 |
| `IsWriteLockHeld` | `public bool IsWriteLockHeld` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
