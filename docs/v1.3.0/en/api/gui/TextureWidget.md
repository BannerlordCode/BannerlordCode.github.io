<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextureWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`

## Overview

`TextureWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TextureWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LoadingIconWidget` | `public Widget LoadingIconWidget { get; }` |
| `TextureProvider` | `public TextureProvider TextureProvider { get; }` |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `Texture` | `public Texture Texture { get; set; }` |

## Key Methods

### OnClearTextureProvider
`public virtual void OnClearTextureProvider()`

**Purpose:** Called when the `clear texture provider` event is raised.

## Usage Example

```csharp
var widget = new TextureWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)