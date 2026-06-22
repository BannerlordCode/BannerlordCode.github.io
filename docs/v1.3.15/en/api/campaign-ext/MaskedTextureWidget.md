<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MaskedTextureWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MaskedTextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MaskedTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs`

## Overview

`MaskedTextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `OverlayTextureScale` | `public float OverlayTextureScale { get; set; }` |
| `ImageId` | `public string ImageId { get { return this._imageId; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get { return this._additionalArgs; }` |
| `IsBig` | `public bool IsBig { get { return this._isBig; }` |

## Key Methods

### OnClearTextureProvider
```csharp
public override void OnClearTextureProvider()
```

## Usage Example

```csharp
// Typical usage of MaskedTextureWidget (Widget)
// 声明/访问一个 MaskedTextureWidget
var widget = root.GetChild("maskedTextureWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)