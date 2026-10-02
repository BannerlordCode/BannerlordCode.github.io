---
title: "TimedDictionaryCache<TKey,TValue>"
description: "TimedDictionaryCache<TKey,TValue>：TaleWorlds.Library 的 public 类；公开成员 9 个（方法 7、属性 0、字段 0）。源文件 TaleWorlds.Library/TimedDictionaryCache.cs。"
---
# TimedDictionaryCache<TKey,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TimedDictionaryCache<TKey, TValue>`
**File:** `TaleWorlds.Library/TimedDictionaryCache.cs`

## 概述

TimedDictionaryCache<TKey,TValue> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TimedDictionaryCache.cs。它是一个 public 类，继承链为 TimedDictionaryCache。public/protected 成员共 9 个：7 方法、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TimedDictionaryCache<TKey,TValue> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 TimedDictionaryCache。成员构成以方法为主（方法 7/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TimedDictionaryCache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TimedDictionaryCache` | `public TimedDictionaryCache(long validMilliseconds)` | 构造函数 |
| `TimedDictionaryCache` | `public TimedDictionaryCache(TimeSpan validTimeSpan) : this((long)validTimeSpan.TotalMilliseconds)` | 构造函数 |
| `PruneExpiredItems` | `public void PruneExpiredItems()` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `ContainsKey` | `public bool ContainsKey(TKey key)` | 方法 |
| `Remove` | `public bool Remove(TKey key)` | 方法 |
| `TryGetValue` | `public bool TryGetValue(TKey key, out TValue value)` | 方法 |
| `this[...]` | `public TValue this[TKey key]` | 索引器 |
| `TValue>AsReadOnlyDictionary` | `public MBReadOnlyDictionary<TKey, TValue>AsReadOnlyDictionary()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
