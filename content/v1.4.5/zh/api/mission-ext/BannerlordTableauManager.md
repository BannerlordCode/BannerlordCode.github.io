---
title: "BannerlordTableauManager"
description: "BannerlordTableauManager 的自动生成类参考。"
---
# BannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordTableauManager`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`

## 概述

`BannerlordTableauManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BannerlordTableauManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### RequestCharacterTableauSetupDelegate
`public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)`

**用途 / Purpose:** 调用 RequestCharacterTableauSetupDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 BannerlordTableauManager 实例
BannerlordTableauManager bannerlordTableauManager = ...;
bannerlordTableauManager.RequestCharacterTableauSetupDelegate(0, scene, poseEntity);
```

### RequestCharacterTableauRender
`public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)`

**用途 / Purpose:** 调用 RequestCharacterTableauRender 对应的操作。

```csharp
// 静态调用，不需要实例
BannerlordTableauManager.RequestCharacterTableauRender(0, "example", poseEntity, cameraObject, 0);
```

### ClearManager
`public static void ClearManager()`

**用途 / Purpose:** 清空当前对象中的manager。

```csharp
// 静态调用，不需要实例
BannerlordTableauManager.ClearManager();
```

### InitializeCharacterTableauRenderSystem
`public static void InitializeCharacterTableauRenderSystem()`

**用途 / Purpose:** 为 character tableau render system 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
BannerlordTableauManager.InitializeCharacterTableauRenderSystem();
```

### GetNumberOfPendingTableauRequests
`public static int GetNumberOfPendingTableauRequests()`

**用途 / Purpose:** 读取并返回当前对象中 number of pending tableau requests 的结果。

```csharp
// 静态调用，不需要实例
BannerlordTableauManager.GetNumberOfPendingTableauRequests();
```

## 使用示例

```csharp
var manager = BannerlordTableauManager.Current;
```

## 参见

- [本区域目录](../)