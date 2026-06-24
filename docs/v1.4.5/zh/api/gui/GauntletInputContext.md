<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletInputContext`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletInputContext

**Namespace:** TaleWorlds.GauntletUI.GauntletInput
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletInputContext : IReadonlyInputContext`
**Base:** `IReadonlyInputContext`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GauntletInput/GauntletInputContext.cs`

## 概述

`GauntletInputContext` 位于 `TaleWorlds.GauntletUI.GauntletInput`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.GauntletInput` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetIsMouseActive
`public bool GetIsMouseActive()`

**用途 / Purpose:** 获取 `is mouse active` 的当前值。

### GetMousePosition
`public Vector2 GetMousePosition()`

**用途 / Purpose:** 获取 `mouse position` 的当前值。

### GetMouseMovement
`public Vector2 GetMouseMovement()`

**用途 / Purpose:** 获取 `mouse movement` 的当前值。

### GetClickKeys
`public InputKey GetClickKeys()`

**用途 / Purpose:** 获取 `click keys` 的当前值。

### GetAlternateClickKeys
`public InputKey GetAlternateClickKeys()`

**用途 / Purpose:** 获取 `alternate click keys` 的当前值。

### GetMouseScrollDelta
`public float GetMouseScrollDelta()`

**用途 / Purpose:** 获取 `mouse scroll delta` 的当前值。

### GetControllerLeftStickState
`public Vector2 GetControllerLeftStickState()`

**用途 / Purpose:** 获取 `controller left stick state` 的当前值。

### GetControllerRightStickState
`public Vector2 GetControllerRightStickState()`

**用途 / Purpose:** 获取 `controller right stick state` 的当前值。

### SetMousePositionOverride
`public void SetMousePositionOverride(Vector2 mousePosition)`

**用途 / Purpose:** 设置 `mouse position override` 的值或状态。

### ResetMousePositionOverride
`public void ResetMousePositionOverride()`

**用途 / Purpose:** 将 `mouse position override` 重置为初始状态。

## 使用示例

```csharp
var value = new GauntletInputContext();
value.GetIsMouseActive();
```

## 参见

- [完整类目录](../catalog)