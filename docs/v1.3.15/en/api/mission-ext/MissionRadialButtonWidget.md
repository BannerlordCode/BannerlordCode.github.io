<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionRadialButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionRadialButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Radial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRadialButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Radial/MissionRadialButtonWidget.cs`

## Overview

`MissionRadialButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Methods

### ExecuteFocused
```csharp
public void ExecuteFocused()
```

### ExecuteUnfocused
```csharp
public void ExecuteUnfocused()
```

## Usage Example

```csharp
// Typical usage of MissionRadialButtonWidget (Widget)
// 声明/访问一个 MissionRadialButtonWidget
var widget = root.GetChild("missionRadialButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)