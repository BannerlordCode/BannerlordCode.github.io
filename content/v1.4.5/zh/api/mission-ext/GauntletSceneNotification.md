---
title: "GauntletSceneNotification"
description: "GauntletSceneNotification 的自动生成类参考。"
---
# GauntletSceneNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.SceneNotification/GauntletSceneNotification.cs`

## 概述

`GauntletSceneNotification` 位于 `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletSceneNotification Current { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletSceneNotification.Initialize();
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletSceneNotification 实例
GauntletSceneNotification gauntletSceneNotification = ...;
gauntletSceneNotification.OnFinalize();
```

### RegisterContextProvider
`public void RegisterContextProvider(ISceneNotificationContextProvider provider)`

**用途 / Purpose:** 将「context provider」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GauntletSceneNotification 实例
GauntletSceneNotification gauntletSceneNotification = ...;
gauntletSceneNotification.RegisterContextProvider(provider);
```

### RemoveContextProvider
`public bool RemoveContextProvider(ISceneNotificationContextProvider provider)`

**用途 / Purpose:** 从当前容器或状态中移除 「context provider」。

```csharp
// 先通过子系统 API 拿到 GauntletSceneNotification 实例
GauntletSceneNotification gauntletSceneNotification = ...;
var result = gauntletSceneNotification.RemoveContextProvider(provider);
```

## 使用示例

```csharp
GauntletSceneNotification.Initialize();
```

## 参见

- [本区域目录](../)