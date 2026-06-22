<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoundaryWallView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoundaryWallView

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryWallView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/BoundaryWallView.cs`

## 概述

`BoundaryWallView` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。

## 主要方法

### CreateBoundaryMesh
```csharp
public static Mesh CreateBoundaryMesh(Scene scene, ICollection<Vec2> boundaryPoints, uint meshColor = 536918784U)
```

## 使用示例

```csharp
// BoundaryWallView (View) 的典型用法
BoundaryWallView /* via engine view system */;
```

## 参见

- [完整类目录](../catalog)