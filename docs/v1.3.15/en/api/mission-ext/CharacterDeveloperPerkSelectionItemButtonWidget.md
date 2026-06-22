<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperPerkSelectionItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperPerkSelectionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDeveloperPerkSelectionItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerkSelectionItemButtonWidget.cs`

## Overview

`CharacterDeveloperPerkSelectionItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PerkSelectionIndicatorWidget` | `public Widget PerkSelectionIndicatorWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of CharacterDeveloperPerkSelectionItemButtonWidget (Widget)
// 声明/访问一个 CharacterDeveloperPerkSelectionItemButtonWidget
var widget = root.GetChild("characterDeveloperPerkSelectionItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)