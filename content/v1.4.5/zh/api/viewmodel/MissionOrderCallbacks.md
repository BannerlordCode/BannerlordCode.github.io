---
title: "MissionOrderCallbacks"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOrderCallbacks`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionOrderCallbacks

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionOrderCallbacks`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderCallbacks.cs`

## 概述

`MissionOrderCallbacks` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnRefreshVisualsDelegate
`public delegate void OnRefreshVisualsDelegate()`

**用途 / Purpose:** 当 `refresh visuals delegate` 事件触发时调用此方法。

### OnToggleActivateOrderStateDelegate
`public delegate void OnToggleActivateOrderStateDelegate()`

**用途 / Purpose:** 当 `toggle activate order state delegate` 事件触发时调用此方法。

### OnTransferTroopsFinishedDelegate
`public delegate void OnTransferTroopsFinishedDelegate()`

**用途 / Purpose:** 当 `transfer troops finished delegate` 事件触发时调用此方法。

### OnBeforeOrderDelegate
`public delegate void OnBeforeOrderDelegate()`

**用途 / Purpose:** 当 `before order delegate` 事件触发时调用此方法。

### ToggleOrderPositionVisibilityDelegate
`public delegate void ToggleOrderPositionVisibilityDelegate(bool value)`

**用途 / Purpose:** 处理 `toggle order position visibility delegate` 相关逻辑。

### GetOrderExecutionParametersDelegate
`public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate()`

**用途 / Purpose:** 获取 `order execution parameters delegate` 的当前值。

## 使用示例

```csharp
var value = new MissionOrderCallbacks();
value.OnRefreshVisualsDelegate();
```

## 参见

- [完整类目录](../catalog)