---
title: "MultiThreadedStressTestsScreen"
description: "MultiThreadedStressTestsScreen 的自动生成类参考。"
---
# MultiThreadedStressTestsScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiThreadedStressTestsScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/Scripts/MultiThreadedStressTestsScreen.cs`

## 概述

`MultiThreadedStressTestsScreen` 位于 `TaleWorlds.MountAndBlade.View.Screens.Scripts`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens.Scripts` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MeshMerger
`public static void MeshMerger(InputLayout layout)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MeshMerger 对应的操作。

```csharp
// 静态调用，不需要实例
MultiThreadedStressTestsScreen.MeshMerger(layout);
```

### SceneHandler
`public static void SceneHandler(SceneView view)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SceneHandler 对应的操作。

```csharp
// 静态调用，不需要实例
MultiThreadedStressTestsScreen.SceneHandler(view);
```

## 使用示例

```csharp
MultiThreadedStressTestsScreen.MeshMerger(layout);
```

## 参见

- [本区域目录](../)