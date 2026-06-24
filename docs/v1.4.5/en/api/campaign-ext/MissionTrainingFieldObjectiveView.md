<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTrainingFieldObjectiveView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionTrainingFieldObjectiveView

**Namespace:** StoryMode.View.Missions
**Module:** StoryMode.View
**Type:** `public class MissionTrainingFieldObjectiveView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.View/StoryMode.View.Missions/MissionTrainingFieldObjectiveView.cs`

## Overview

`MissionTrainingFieldObjectiveView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionTrainingFieldObjectiveView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MissionTrainingFieldObjectiveView();
```

## See Also

- [Complete Class Catalog](../catalog)