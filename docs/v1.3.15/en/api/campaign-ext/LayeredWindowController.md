<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LayeredWindowController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LayeredWindowController

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class LayeredWindowController`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/LayeredWindowController.cs`

## Overview

`LayeredWindowController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `LayeredWindowController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetSize
`public void SetSize(int width, int height)`

**Purpose:** Sets the value or state of `size`.

### PostRender
`public void PostRender()`

**Purpose:** Handles logic related to `post render`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<LayeredWindowController>();
```

## See Also

- [Complete Class Catalog](../catalog)