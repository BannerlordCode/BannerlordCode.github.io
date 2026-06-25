---
title: "ScreenBase"
description: "ScreenBase 的自动生成类参考。"
---
# ScreenBase

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenBase`
**Base:** 无
**File:** `TaleWorlds.ScreenSystem/ScreenBase.cs`

## 概述

`ScreenBase` 位于 `TaleWorlds.ScreenSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ScreenSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DebugInput` | `public IInputContext DebugInput { get; }` |
| `Layers` | `public MBReadOnlyList<ScreenLayer> Layers { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsPaused` | `public bool IsPaused { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `MouseVisible` | `public virtual bool MouseVisible { get; set; }` |

## 主要方法

### ActivateAllLayers
`public void ActivateAllLayers()`

**用途 / Purpose:** 激活all layers对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.ActivateAllLayers();
```

### DeactivateAllLayers
`public void DeactivateAllLayers()`

**用途 / Purpose:** 停用all layers对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.DeactivateAllLayers();
```

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** 停用当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.Deactivate();
```

### Activate
`public void Activate()`

**用途 / Purpose:** 激活当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.Activate();
```

### UpdateLayout
`public virtual void UpdateLayout()`

**用途 / Purpose:** 重新计算并更新 layout 的最新表示。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.UpdateLayout();
```

### OnFocusChangeOnGameWindow
`public virtual void OnFocusChangeOnGameWindow(bool focusGained)`

**用途 / Purpose:** 在 focus change on game window 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.OnFocusChangeOnGameWindow(false);
```

### AddComponent
`public void AddComponent(ScreenComponent component)`

**用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.AddComponent(component);
```

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**用途 / Purpose:** 将 layer 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**用途 / Purpose:** 从当前容器或状态中移除 layer。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.RemoveLayer(layer);
```

### HasLayer
`public bool HasLayer(ScreenLayer layer)`

**用途 / Purpose:** 判断当前对象是否已经持有 layer。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
var result = screenBase.HasLayer(layer);
```

### SetLayerCategoriesState
`public void SetLayerCategoriesState(string categoryIds, bool isActive)`

**用途 / Purpose:** 为 layer categories state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.SetLayerCategoriesState("example", false);
```

### SetLayerCategoriesStateAndToggleOthers
`public void SetLayerCategoriesStateAndToggleOthers(string categoryIds, bool isActive)`

**用途 / Purpose:** 为 layer categories state and toggle others 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.SetLayerCategoriesStateAndToggleOthers("example", false);
```

### SetLayerCategoriesStateAndDeactivateOthers
`public void SetLayerCategoriesStateAndDeactivateOthers(string categoryIds, bool isActive)`

**用途 / Purpose:** 为 layer categories state and deactivate others 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.SetLayerCategoriesStateAndDeactivateOthers("example", false);
```

### OnLayerAddedEvent
`public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)`

**用途 / Purpose:** 在 layer added event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.OnLayerAddedEvent(addedLayer);
```

### OnLayerRemovedEvent
`public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)`

**用途 / Purpose:** 在 layer removed event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenBase 实例
ScreenBase screenBase = ...;
screenBase.OnLayerRemovedEvent(removedLayer);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ScreenBase instance = ...;
```

## 参见

- [本区域目录](../)