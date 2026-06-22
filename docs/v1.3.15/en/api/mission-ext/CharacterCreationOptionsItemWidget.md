<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationOptionsItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationOptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationOptionsItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs`

## Overview

`CharacterCreationOptionsItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `ActionOptionWidget` | `public Widget ActionOptionWidget { get; set; }` |
| `NumericOptionWidget` | `public Widget NumericOptionWidget { get; set; }` |
| `SelectionOptionWidget` | `public Widget SelectionOptionWidget { get; set; }` |
| `BooleanOptionWidget` | `public Widget BooleanOptionWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of CharacterCreationOptionsItemWidget (Widget)
// 声明/访问一个 CharacterCreationOptionsItemWidget
var widget = root.GetChild("characterCreationOptionsItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)