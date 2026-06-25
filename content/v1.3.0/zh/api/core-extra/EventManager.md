---
title: "EventManager"
description: "EventManager 的自动生成类参考。"
---
# EventManager

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class EventManager`
**Base:** 无
**File:** `TaleWorlds.Library/EventSystem/EventManager.cs`

## 概述

`EventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
eventManager.Clear();
```

### GetCloneOfEventDictionary
`public IDictionary<Type, object> GetCloneOfEventDictionary()`

**用途 / Purpose:** 读取并返回当前对象中 clone of event dictionary 的结果。

```csharp
// 先通过子系统 API 拿到 EventManager 实例
EventManager eventManager = ...;
var result = eventManager.GetCloneOfEventDictionary();
```

## 使用示例

```csharp
var manager = EventManager.Current;
```

## 参见

- [本区域目录](../)