<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISiegeDeploymentView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISiegeDeploymentView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ISiegeDeploymentView.cs`

## Overview

`ISiegeDeploymentView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ISiegeDeploymentView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
ISiegeDeploymentView implementation = GetSiegeDeploymentViewImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)