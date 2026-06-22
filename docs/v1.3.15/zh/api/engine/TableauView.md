<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TableauView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TableauView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TableauView : SceneView`
**Base:** `SceneView`
**File:** `TaleWorlds.Engine/TableauView.cs`

## 概述

`TableauView` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。

## 主要方法

### CreateTableauView
```csharp
public static TableauView CreateTableauView(string viewName)
```

### SetSortingEnabled
```csharp
public void SetSortingEnabled(bool value)
```

### SetContinuousRendering
```csharp
public void SetContinuousRendering(bool value)
```

### SetDoNotRenderThisFrame
```csharp
public void SetDoNotRenderThisFrame(bool value)
```

### SetDeleteAfterRendering
```csharp
public void SetDeleteAfterRendering(bool value)
```

### AddTableau
```csharp
public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)
```

## 使用示例

```csharp
// TableauView (View) 的典型用法
TableauView /* via engine view system */;
```

## 参见

- [完整类目录](../catalog)