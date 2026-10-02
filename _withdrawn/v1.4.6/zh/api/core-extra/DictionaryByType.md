---
title: "DictionaryByType"
description: "DictionaryByType：TaleWorlds.Library.EventSystem 的 public 类；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/EventSystem/DictionaryByType.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DictionaryByType

**Namespace:** `TaleWorlds.Library.EventSystem`
**Module:** `TaleWorlds.Library`
**Type:** `public class DictionaryByType`
**File:** `TaleWorlds.Library/EventSystem/DictionaryByType.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

DictionaryByType 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/EventSystem/DictionaryByType.cs。它是一个 public 类，继承链为 DictionaryByType。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DictionaryByType 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library.EventSystem`，继承链 DictionaryByType。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/EventSystem/DictionaryByType.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Add` | `public void Add<T>(Action<T>value)` | 方法 |
| `Remove` | `public void Remove<T>(Action<T>value)` | 方法 |
| `InvokeActions` | `public void InvokeActions<T>(T item)` | 方法 |
| `List` | `public List<Action<T>>Get<T>()` | 方法 |
| `TryGet` | `public bool TryGet<T>(out List<Action<T>>value)` | 方法 |
| `object>GetClone` | `public IDictionary<Type, object>GetClone()` | 方法 |
| `Clear` | `public void Clear()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EventBase](../EventBase/)
- [同命名空间 EventManager](../EventManager/)
