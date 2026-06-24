<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionEscapeMenuView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionEscapeMenuView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionEscapeMenuView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionEscapeMenuView.cs`

## Overview

`MissionEscapeMenuView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionEscapeMenuView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomMissionEscapeMenuView();
```

## See Also

- [Complete Class Catalog](../catalog)