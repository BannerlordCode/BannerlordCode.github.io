<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OnlineImageTextureWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OnlineImageTextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class OnlineImageTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/OnlineImageTextureWidget.cs`

## Overview

`OnlineImageTextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OnlineImageTextureWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageSizePolicy` | `public ImageSizePolicies ImageSizePolicy { get; set; }` |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl { get; set; }` |

## Usage Example

```csharp
var widget = new OnlineImageTextureWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)