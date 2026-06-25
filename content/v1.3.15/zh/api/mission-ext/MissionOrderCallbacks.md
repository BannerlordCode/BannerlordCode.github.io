---
title: "MissionOrderCallbacks"
description: "MissionOrderCallbacks 的自动生成类参考。"
---
# MissionOrderCallbacks

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionOrderCallbacks`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs`

## 概述

`MissionOrderCallbacks` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnRefreshVisualsDelegate
`public delegate void OnRefreshVisualsDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 在 refresh visuals delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderCallbacks 实例
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnRefreshVisualsDelegate();
```

### OnToggleActivateOrderStateDelegate
`public delegate void OnToggleActivateOrderStateDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 在 toggle activate order state delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderCallbacks 实例
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnToggleActivateOrderStateDelegate();
```

### OnTransferTroopsFinishedDelegate
`public delegate void OnTransferTroopsFinishedDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 在 transfer troops finished delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderCallbacks 实例
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnTransferTroopsFinishedDelegate();
```

### OnBeforeOrderDelegate
`public delegate void OnBeforeOrderDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 在 before order delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionOrderCallbacks 实例
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnBeforeOrderDelegate();
```

### ToggleOrderPositionVisibilityDelegate
`public delegate void ToggleOrderPositionVisibilityDelegate(bool value)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToggleOrderPositionVisibilityDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionOrderCallbacks 实例
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.ToggleOrderPositionVisibilityDelegate(false);
```

### GetOrderExecutionParametersDelegate
`public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order execution parameters delegate 的结果。

```csharp
// 先通过子系统 API 拿到 MissionOrderCallbacks 实例
MissionOrderCallbacks missionOrderCallbacks = ...;
var result = missionOrderCallbacks.GetOrderExecutionParametersDelegate();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionOrderCallbacks missionOrderCallbacks = ...;
missionOrderCallbacks.OnRefreshVisualsDelegate();
```

## 参见

- [本区域目录](../)