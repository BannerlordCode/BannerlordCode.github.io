<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextureView`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TextureView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TextureView.cs`

## 概述

`TextureView` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。

## 主要方法

### CreateTextureView
```csharp
public static TextureView CreateTextureView()
```

### SetTexture
```csharp
public void SetTexture(Texture texture)
```

## 使用示例

```csharp
// TextureView (View) 的典型用法
TextureView /* via engine view system */;
```

## 参见

- [完整类目录](../catalog)