---
title: "EventManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EventManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EventManager

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class EventManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/EventManager.cs`

## 概述

`EventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### GetCloneOfEventDictionary
`public IDictionary<Type, object> GetCloneOfEventDictionary()`

**用途 / Purpose:** 获取 `clone of event dictionary` 的当前值。

## 使用示例

```csharp
var manager = EventManager.Current;
```

## 参见

- [完整类目录](../catalog)