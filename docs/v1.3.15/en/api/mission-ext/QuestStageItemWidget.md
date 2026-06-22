<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestStageItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestStageItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestStageItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestStageItemWidget.cs`

## Overview

`QuestStageItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNew` | `public bool IsNew { get; set; }` |

## Usage Example

```csharp
// Typical usage of QuestStageItemWidget (Widget)
// 声明/访问一个 QuestStageItemWidget
var widget = root.GetChild("questStageItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)