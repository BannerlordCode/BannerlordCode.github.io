<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveLoadMainHeroVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveLoadMainHeroVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SaveLoadMainHeroVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadMainHeroVisualWidget.cs`

## Overview

`SaveLoadMainHeroVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultVisualWidget` | `public Widget DefaultVisualWidget { get; set; }` |
| `SaveLoadHeroTableau` | `public SaveLoadHeroTableauWidget SaveLoadHeroTableau { get; set; }` |
| `IsVisualDisabledForMemoryPurposes` | `public bool IsVisualDisabledForMemoryPurposes { get; set; }` |

## Usage Example

```csharp
// Typical usage of SaveLoadMainHeroVisualWidget (Widget)
// 声明/访问一个 SaveLoadMainHeroVisualWidget
var widget = root.GetChild("saveLoadMainHeroVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)