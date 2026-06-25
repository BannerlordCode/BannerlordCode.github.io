---
title: "CharacterDeveloperAttributeInspectionPopupWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperAttributeInspectionPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterDeveloperAttributeInspectionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDeveloperAttributeInspectionPopupWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper/CharacterDeveloperAttributeInspectionPopupWidget.cs`

## Overview

`CharacterDeveloperAttributeInspectionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterDeveloperAttributeInspectionPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |

## Usage Example

```csharp
var widget = new CharacterDeveloperAttributeInspectionPopupWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)