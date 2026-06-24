<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestStageItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestStageItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestStageItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest/QuestStageItemWidget.cs`

## Overview

`QuestStageItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `QuestStageItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNew` | `public bool IsNew { get; set; }` |

## Usage Example

```csharp
var widget = new QuestStageItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)