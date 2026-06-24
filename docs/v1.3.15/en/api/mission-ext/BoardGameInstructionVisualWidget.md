<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameInstructionVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `BoardGameInstructionVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public string GameType { get; set; }` |

## Usage Example

```csharp
var widget = new BoardGameInstructionVisualWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)