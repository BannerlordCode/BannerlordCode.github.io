<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameInstructionVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoardGameInstructionVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.BoardGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoardGameInstructionVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BoardGame/BoardGameInstructionVisualWidget.cs`

## Overview

`BoardGameInstructionVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public string GameType { get; set; }` |

## Usage Example

```csharp
// Typical usage of BoardGameInstructionVisualWidget (Widget)
// 声明/访问一个 BoardGameInstructionVisualWidget
var widget = root.GetChild("boardGameInstructionVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)