<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionConversationCameraView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionConversationCameraView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionConversationCameraView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionConversationCameraView.cs`

## Overview

`MissionConversationCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionConversationCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCameraOverridden` | `public bool IsCameraOverridden { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### UpdateOverridenCamera
`public override bool UpdateOverridenCamera(float dt)`

**Purpose:** Updates the state or data of `overriden camera`.

## Usage Example

```csharp
var view = new MissionConversationCameraView();
```

## See Also

- [Complete Class Catalog](../catalog)