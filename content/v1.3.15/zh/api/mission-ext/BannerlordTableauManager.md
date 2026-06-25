---
title: "BannerlordTableauManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordTableauManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordTableauManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`

## 概述

`BannerlordTableauManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BannerlordTableauManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TableauCharacterScenes` | `public static Scene TableauCharacterScenes { get; }` |

## 主要方法

### RequestCharacterTableauRender
`public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)`

**用途 / Purpose:** 处理 `request character tableau render` 相关逻辑。

### ClearManager
`public static void ClearManager()`

**用途 / Purpose:** 处理 `clear manager` 相关逻辑。

### InitializeCharacterTableauRenderSystem
`public static void InitializeCharacterTableauRenderSystem()`

**用途 / Purpose:** 初始化 `character tableau render system` 的状态、资源或绑定。

### GetNumberOfPendingTableauRequests
`public static int GetNumberOfPendingTableauRequests()`

**用途 / Purpose:** 获取 `number of pending tableau requests` 的当前值。

### RequestCharacterTableauSetupDelegate
`public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)`

**用途 / Purpose:** 处理 `request character tableau setup delegate` 相关逻辑。

## 使用示例

```csharp
var manager = BannerlordTableauManager.Current;
```

## 参见

- [完整类目录](../catalog)