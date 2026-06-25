---
title: "LoadingWindow"
description: "LoadingWindow 的自动生成类参考。"
---
# LoadingWindow

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class LoadingWindow`
**Base:** 无
**File:** `TaleWorlds.Engine/LoadingWindow.cs`

## 概述

`LoadingWindow` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLoadingWindowActive` | `public static bool IsLoadingWindowActive { get; }` |
| `LoadingWindowManager` | `public static ILoadingWindowManager LoadingWindowManager { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
LoadingWindow.Initialize();
```

### Destroy
`public static void Destroy()`

**用途 / Purpose:** 调用 Destroy 对应的操作。

```csharp
// 静态调用，不需要实例
LoadingWindow.Destroy();
```

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**用途 / Purpose:** 调用 DisableGlobalLoadingWindow 对应的操作。

```csharp
// 静态调用，不需要实例
LoadingWindow.DisableGlobalLoadingWindow();
```

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**用途 / Purpose:** 调用 EnableGlobalLoadingWindow 对应的操作。

```csharp
// 静态调用，不需要实例
LoadingWindow.EnableGlobalLoadingWindow();
```

## 使用示例

```csharp
LoadingWindow.Initialize();
```

## 参见

- [本区域目录](../)