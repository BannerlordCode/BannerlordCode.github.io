<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TextureView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/TextureView.cs`

## Overview

`TextureView` is an engine view/surface (render, texture, scene preview, etc.). Accessed via the engine view system.

## Key Methods

### CreateTextureView
```csharp
public static TextureView CreateTextureView()
```

### SetTexture
```csharp
public void SetTexture(Texture texture)
```

## Usage Example

```csharp
// Typical usage of TextureView (View)
TextureView /* via engine view system */;
```

## See Also

- [Complete Class Catalog](../catalog)