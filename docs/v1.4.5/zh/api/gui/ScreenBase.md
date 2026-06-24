<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScreenBase`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScreenBase

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenBase`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenBase.cs`

## 概述

`ScreenBase` 位于 `TaleWorlds.ScreenSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ScreenSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `IsPaused` | `public bool IsPaused { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `MouseVisible` | `public virtual bool MouseVisible { get; set; }` |

## 主要方法

### OnLayerAddedEvent
`public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)`

**用途 / Purpose:** 当 `layer added event` 事件触发时调用此方法。

### OnLayerRemovedEvent
`public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)`

**用途 / Purpose:** 当 `layer removed event` 事件触发时调用此方法。

### ActivateAllLayers
`public void ActivateAllLayers()`

**用途 / Purpose:** 处理 `activate all layers` 相关逻辑。

### DeactivateAllLayers
`public void DeactivateAllLayers()`

**用途 / Purpose:** 处理 `deactivate all layers` 相关逻辑。

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 处理 `deactivate` 相关逻辑。

### Activate
`public void Activate()`

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### UpdateLayout
`public virtual void UpdateLayout()`

**用途 / Purpose:** 更新 `layout` 的状态或数据。

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 当 `focus change on game window` 事件触发时调用此方法。

### AddComponent
`public void AddComponent(ScreenComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**用途 / Purpose:** 向当前集合/状态中添加 `layer`。

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**用途 / Purpose:** 从当前集合/状态中移除 `layer`。

### HasLayer
`public bool HasLayer(ScreenLayer layer)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `layer`。

### SetLayerCategoriesState
`public void SetLayerCategoriesState(string categoryIds, bool isActive)`

**用途 / Purpose:** 设置 `layer categories state` 的值或状态。

### SetLayerCategoriesStateAndToggleOthers
`public void SetLayerCategoriesStateAndToggleOthers(string categoryIds, bool isActive)`

**用途 / Purpose:** 设置 `layer categories state and toggle others` 的值或状态。

### SetLayerCategoriesStateAndDeactivateOthers
`public void SetLayerCategoriesStateAndDeactivateOthers(string categoryIds, bool isActive)`

**用途 / Purpose:** 设置 `layer categories state and deactivate others` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomScreenBase();
```

## 参见

- [完整类目录](../catalog)