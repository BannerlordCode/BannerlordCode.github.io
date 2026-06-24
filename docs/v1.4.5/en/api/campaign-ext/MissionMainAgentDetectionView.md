<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentDetectionView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentDetectionView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionMainAgentDetectionView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionMainAgentDetectionView.cs`

## Overview

`MissionMainAgentDetectionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionMainAgentDetectionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MissionMainAgentDetectionView();
```

## See Also

- [Complete Class Catalog](../catalog)