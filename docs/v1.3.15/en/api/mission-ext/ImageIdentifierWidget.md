<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageIdentifierWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImageIdentifierWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ImageIdentifierWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs`

## Overview

`ImageIdentifierWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |
| `HideWhenNull` | `public bool HideWhenNull { get; set; }` |

## Key Methods

### OnClearTextureProvider
```csharp
public override void OnClearTextureProvider()
```

## Usage Example

```csharp
// Typical usage of ImageIdentifierWidget (Widget)
// 声明/访问一个 ImageIdentifierWidget
var widget = root.GetChild("imageIdentifierWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)