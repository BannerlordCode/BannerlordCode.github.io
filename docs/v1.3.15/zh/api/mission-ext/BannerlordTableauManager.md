<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordTableauManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordTableauManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`

## 概述

`BannerlordTableauManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `TableauCharacterScenes` | `public static Scene TableauCharacterScenes { get { return BannerlordTableauManager._tableauCharacterScenes; }` |

## 主要方法

### RequestCharacterTableauRender
```csharp
public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)
```

### ClearManager
```csharp
public static void ClearManager()
```

### InitializeCharacterTableauRenderSystem
```csharp
public static void InitializeCharacterTableauRenderSystem()
```

### GetNumberOfPendingTableauRequests
```csharp
public static int GetNumberOfPendingTableauRequests()
```

### RequestCharacterTableauSetupDelegate
```csharp
public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)
```

## 使用示例

```csharp
// BannerlordTableauManager (Manager) 的典型用法
BannerlordTableauManager.Current;
```

## 参见

- [完整类目录](../catalog)