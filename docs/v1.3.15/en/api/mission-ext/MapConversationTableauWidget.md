<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapConversationTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapConversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapConversationTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapConversation/MapConversationTableauWidget.cs`

## Overview

`MapConversationTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public object Data { get; set; }` |

## Key Methods

### OnClearTextureProvider
```csharp
public override void OnClearTextureProvider()
```

## Usage Example

```csharp
// Typical usage of MapConversationTableauWidget (Widget)
// 声明/访问一个 MapConversationTableauWidget
var widget = root.GetChild("mapConversationTableauWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)