<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionRadialButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionRadialButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Radial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRadialButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Radial/MissionRadialButtonWidget.cs`

## Overview

`MissionRadialButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MissionRadialButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ExecuteFocused
`public void ExecuteFocused()`

**Purpose:** Executes the `focused` operation or workflow.

### ExecuteUnfocused
`public void ExecuteUnfocused()`

**Purpose:** Executes the `unfocused` operation or workflow.

## Usage Example

```csharp
var widget = new MissionRadialButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)