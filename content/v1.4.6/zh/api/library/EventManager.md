---
title: "EventManager"
description: "EventManager：TaleWorlds.Library 的 public 类；公开成员 6 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.Library/EventSystem/EventManager.cs。"
---
# EventManager

**Namespace:** `TaleWorlds.Library.EventSystem`
**Module:** `TaleWorlds.Library`
**Type:** `public class EventManager`
**File:** `TaleWorlds.Library/EventSystem/EventManager.cs`

## 概述

EventManager 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/EventSystem/EventManager.cs。它是一个 public 类，继承链为 EventManager。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EventManager 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录不同（TaleWorlds.Library.EventSystem），继承链 EventManager。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/EventSystem/EventManager.cs 的方法体或该类型的深写页确认。

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

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 DictionaryByType](../DictionaryByType)
- [同命名空间 EventBase](../EventBase)
