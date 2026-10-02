---
title: "EventManager"
description: "EventManager：TaleWorlds.Library.EventSystem 的 public 类；公开成员 6 个（方法 5、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/EventSystem/EventManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EventManager

**Namespace:** `TaleWorlds.Library.EventSystem`
**Module:** `TaleWorlds.Library`
**Type:** `public class EventManager`
**File:** `TaleWorlds.Library/EventSystem/EventManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

EventManager 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/EventSystem/EventManager.cs。它是一个 public 类，继承链为 EventManager。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EventManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library.EventSystem`，继承链 EventManager。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/EventSystem/EventManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EventManager` | `public EventManager()` | 构造函数 |
| `RegisterEvent` | `public void RegisterEvent<T>(Action<T>eventObjType)` | 方法 |
| `UnregisterEvent` | `public void UnregisterEvent<T>(Action<T>eventObjType)` | 方法 |
| `TriggerEvent` | `public void TriggerEvent<T>(T eventObj)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `object>GetCloneOfEventDictionary` | `public IDictionary<Type, object>GetCloneOfEventDictionary()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DictionaryByType](../DictionaryByType/)
- [同命名空间 EventBase](../EventBase/)
