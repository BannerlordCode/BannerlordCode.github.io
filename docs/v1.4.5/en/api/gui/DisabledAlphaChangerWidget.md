<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisabledAlphaChangerWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DisabledAlphaChangerWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DisabledAlphaChangerWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs`

## Overview

`DisabledAlphaChangerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DisabledAlphaChangerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisabledAlpha` | `public float DisabledAlpha { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `UpdateChildrenAlphas` | `public bool UpdateChildrenAlphas { get; set; }` |

## Key Methods

### DisabledAlphaChangerWidget
`public class DisabledAlphaChangerWidget(UIContext context)`

**Purpose:** Handles logic related to `disabled alpha changer widget`.

## Usage Example

```csharp
var widget = new DisabledAlphaChangerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)