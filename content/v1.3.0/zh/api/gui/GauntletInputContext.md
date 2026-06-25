---
title: "GauntletInputContext"
description: "GauntletInputContext 的自动生成类参考。"
---
# GauntletInputContext

**Namespace:** TaleWorlds.GauntletUI.GauntletInput
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletInputContext : IReadonlyInputContext`
**Base:** `IReadonlyInputContext`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs`

## 概述

`GauntletInputContext` 位于 `TaleWorlds.GauntletUI.GauntletInput`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.GauntletInput` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetIsMouseActive
`public bool GetIsMouseActive()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 is mouse active 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetIsMouseActive();
```

### GetMousePosition
`public Vector2 GetMousePosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mouse position 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetMousePosition();
```

### GetMouseMovement
`public Vector2 GetMouseMovement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mouse movement 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetMouseMovement();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 click keys 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetClickKeys();
```

### GetAlternateClickKeys
`public InputKey GetAlternateClickKeys()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alternate click keys 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetAlternateClickKeys();
```

### GetMouseScrollDelta
`public float GetMouseScrollDelta()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mouse scroll delta 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetMouseScrollDelta();
```

### GetControllerLeftStickState
`public Vector2 GetControllerLeftStickState()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 controller left stick state 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetControllerLeftStickState();
```

### GetControllerRightStickState
`public Vector2 GetControllerRightStickState()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 controller right stick state 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
var result = gauntletInputContext.GetControllerRightStickState();
```

### SetMousePositionOverride
`public void SetMousePositionOverride(Vector2 mousePosition)`

**用途 / Purpose:** **用途 / Purpose:** 为 mouse position override 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
gauntletInputContext.SetMousePositionOverride(mousePosition);
```

### ResetMousePositionOverride
`public void ResetMousePositionOverride()`

**用途 / Purpose:** **用途 / Purpose:** 将 mouse position override 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 GauntletInputContext 实例
GauntletInputContext gauntletInputContext = ...;
gauntletInputContext.ResetMousePositionOverride();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletInputContext gauntletInputContext = ...;
gauntletInputContext.GetIsMouseActive();
```

## 参见

- [本区域目录](../)