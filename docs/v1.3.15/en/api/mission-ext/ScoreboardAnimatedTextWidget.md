<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardAnimatedTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScoreboardAnimatedTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardAnimatedTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScoreboardAnimatedTextWidget.cs`

## Overview

`ScoreboardAnimatedTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueAsInt` | `public int ValueAsInt { get; set; }` |
| `ShowZero` | `public bool ShowZero { get; set; }` |

## Usage Example

```csharp
// Typical usage of ScoreboardAnimatedTextWidget (Widget)
// 声明/访问一个 ScoreboardAnimatedTextWidget
var widget = root.GetChild("scoreboardAnimatedTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)