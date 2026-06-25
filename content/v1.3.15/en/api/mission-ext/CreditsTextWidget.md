---
title: "CreditsTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsTextWidget.cs`

## Overview

`CreditsTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CreditsTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OverrideFont` | `public string OverrideFont { get; set; }` |

## Usage Example

```csharp
var widget = new CreditsTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)