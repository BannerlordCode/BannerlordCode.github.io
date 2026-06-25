---
title: "GauntletGameNotification"
description: "GauntletGameNotification 的自动生成类参考。"
---
# GauntletGameNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGameNotification : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs`

## 概述

`GauntletGameNotification` 位于 `TaleWorlds.MountAndBlade.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletGameNotification Current { get; }` |

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GauntletGameNotification.Initialize();
```

### OnFinalize
`public static void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
GauntletGameNotification.OnFinalize();
```

### LoadMovie
`public void LoadMovie(bool forMultiplayer)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 movie。

```csharp
// 先通过子系统 API 拿到 GauntletGameNotification 实例
GauntletGameNotification gauntletGameNotification = ...;
gauntletGameNotification.LoadMovie(false);
```

## 使用示例

```csharp
GauntletGameNotification.Initialize();
```

## 参见

- [本区域目录](../)