---
title: "MissionStealthFailCounterView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionStealthFailCounterView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionStealthFailCounterView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionStealthFailCounterView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionStealthFailCounterView.cs`

## Overview

`MissionStealthFailCounterView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionStealthFailCounterView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MissionStealthFailCounterView();
```

## See Also

- [Complete Class Catalog](../catalog)