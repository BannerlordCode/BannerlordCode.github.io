---
title: "ICache"
description: "ICache：TaleWorlds.Library 的 public 接口；公开成员 3 个（方法 3、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/ICache.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICache

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface ICache`
**File:** `TaleWorlds.Library/ICache.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

ICache 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ICache.cs。它是一个 public 接口，继承链为 ICache。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICache 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 ICache。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ICache.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Task` | `Task<TItem>GetOrUpdate<TItem>(string key, Func<Task<TItem>>factory, TimeSpan absoluteExpirationRelativeToNow, bool getFromFactoryIfCacheFails = true);` | 方法 |
| `SetString` | `Task SetString(string key, string value, TimeSpan? absoluteExpirationRelativeToNow);` | 方法 |
| `Task` | `Task<string>GetString(string key);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
