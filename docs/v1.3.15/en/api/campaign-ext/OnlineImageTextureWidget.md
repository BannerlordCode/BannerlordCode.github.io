<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OnlineImageTextureWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OnlineImageTextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class OnlineImageTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs`

## Overview

`OnlineImageTextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageSizePolicy` | `public OnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy { get; set; }` |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl { get { return this._onlineImageSourceUrl; }` |

## Usage Example

```csharp
// Typical usage of OnlineImageTextureWidget (Widget)
// 声明/访问一个 OnlineImageTextureWidget
var widget = root.GetChild("onlineImageTextureWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)