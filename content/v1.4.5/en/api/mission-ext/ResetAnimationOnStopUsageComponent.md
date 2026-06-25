---
title: "ResetAnimationOnStopUsageComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ResetAnimationOnStopUsageComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ResetAnimationOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetAnimationOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs`

## Overview

`ResetAnimationOnStopUsageComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ResetAnimationOnStopUsageComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### UpdateSuccessfulResetAction
`public void UpdateSuccessfulResetAction(ActionIndexCache successfulResetActionCode)`

**Purpose:** Updates the state or data of `successful reset action`.

## Usage Example

```csharp
var component = agent.GetComponent<ResetAnimationOnStopUsageComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)