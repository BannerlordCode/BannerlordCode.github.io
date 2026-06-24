<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest/QuestItemButtonWidget.cs`

## Overview

`QuestItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `QuestItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MainStoryLineItemBrush` | `public Brush MainStoryLineItemBrush { get; set; }` |
| `NavalStorylineItemBrush` | `public Brush NavalStorylineItemBrush { get; set; }` |
| `NormalItemBrush` | `public Brush NormalItemBrush { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsMainStoryLineQuest` | `public bool IsMainStoryLineQuest { get; set; }` |
| `IsNavalStorylineQuest` | `public bool IsNavalStorylineQuest { get; set; }` |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden { get; set; }` |
| `QuestNameText` | `public TextWidget QuestNameText { get; set; }` |
| `QuestDateText` | `public TextWidget QuestDateText { get; set; }` |
| `QuestNameYOffset` | `public int QuestNameYOffset { get; set; }` |
| `QuestNameXOffset` | `public int QuestNameXOffset { get; set; }` |
| `QuestDateYOffset` | `public int QuestDateYOffset { get; set; }` |
| `QuestDateXOffset` | `public int QuestDateXOffset { get; set; }` |

## Usage Example

```csharp
var widget = new QuestItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)