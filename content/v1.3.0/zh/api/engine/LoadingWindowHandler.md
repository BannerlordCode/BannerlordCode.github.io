---
title: "LoadingWindowHandler"
description: "LoadingWindowHandler 的自动生成类参考。"
---
# LoadingWindowHandler

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal class LoadingWindowHandler<T> : ILoadingWindowHandler where T : class, ILoadingWindowManager, new()`
**Base:** `ILoadingWindowHandler where T : class`
**File:** `TaleWorlds.Engine/LoadingWindowHandler.cs`

## 概述

`LoadingWindowHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `LoadingWindowHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LoadingWindowManager` | `public ILoadingWindowManager LoadingWindowManager { get; }` |
| `IsLoadingWindowActive` | `public bool IsLoadingWindowActive { get; }` |

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 LoadingWindowHandler 实例
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Initialize();
```

### Enable
`public void Enable()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Enable 对应的操作。

```csharp
// 先通过子系统 API 拿到 LoadingWindowHandler 实例
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Enable();
```

### Disable
`public void Disable()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Disable 对应的操作。

```csharp
// 先通过子系统 API 拿到 LoadingWindowHandler 实例
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Disable();
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Destroy 对应的操作。

```csharp
// 先通过子系统 API 拿到 LoadingWindowHandler 实例
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.Destroy();
```

### SetCurrentModeIsMultiplayer
`public void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 为 current mode is multiplayer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LoadingWindowHandler 实例
LoadingWindowHandler loadingWindowHandler = ...;
loadingWindowHandler.SetCurrentModeIsMultiplayer(false);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<LoadingWindowHandler>();
```

## 参见

- [本区域目录](../)