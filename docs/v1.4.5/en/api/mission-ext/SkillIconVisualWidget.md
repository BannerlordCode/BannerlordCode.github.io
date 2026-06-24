<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillIconVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkillIconVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillIconVisualWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SkillIconVisualWidget.cs`

## Overview

`SkillIconVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SkillIconVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkillId` | `public string SkillId { get; set; }` |
| `UseSmallVariation` | `public bool UseSmallVariation { get; set; }` |
| `UseSmallestVariation` | `public bool UseSmallestVariation { get; set; }` |

## Key Methods

### SkillIconVisualWidget
`public class SkillIconVisualWidget(UIContext context)`

**Purpose:** Handles logic related to `skill icon visual widget`.

## Usage Example

```csharp
var widget = new SkillIconVisualWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)