---
title: "CreditsItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CreditsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits/CreditsItemWidget.cs`

## Overview

`CreditsItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CreditsItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `CategoryWidget` | `public Widget CategoryWidget { get; set; }` |
| `ImageWidget` | `public Widget ImageWidget { get; set; }` |
| `SectionWidget` | `public Widget SectionWidget { get; set; }` |
| `EntryWidget` | `public Widget EntryWidget { get; set; }` |
| `EmptyLineWidget` | `public Widget EmptyLineWidget { get; set; }` |

## Usage Example

```csharp
var widget = new CreditsItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)