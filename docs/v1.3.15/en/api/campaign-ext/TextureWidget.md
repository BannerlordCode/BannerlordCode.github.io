<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextureWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`

## Overview

`TextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `LoadingIconWidget` | `public Widget LoadingIconWidget { get; set; }` |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame { get; protected set; }` |
| `TextureProviderName` | `public string TextureProviderName { get { return this._textureProviderName; }` |
| `Texture` | `public Texture Texture { get { return this._texture; }` |

## Key Methods

### OnClearTextureProvider
```csharp
public virtual void OnClearTextureProvider()
```

## Usage Example

```csharp
// Typical usage of TextureWidget (Widget)
// 声明/访问一个 TextureWidget
var widget = root.GetChild("textureWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)