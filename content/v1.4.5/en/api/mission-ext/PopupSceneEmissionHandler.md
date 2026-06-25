---
title: "PopupSceneEmissionHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopupSceneEmissionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneEmissionHandler

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneEmissionHandler : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/PopupSceneEmissionHandler.cs`

## Overview

`PopupSceneEmissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `PopupSceneEmissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new PopupSceneEmissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)