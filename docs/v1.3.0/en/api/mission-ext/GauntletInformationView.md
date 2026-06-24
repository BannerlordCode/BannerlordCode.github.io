<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletInformationView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletInformationView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletInformationView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletInformationView.cs`

## Overview

`GauntletInformationView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletInformationView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var view = new GauntletInformationView();
```

## See Also

- [Complete Class Catalog](../catalog)