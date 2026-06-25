---
title: "ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent"
description: "Auto-generated class reference for ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent."
---
# ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.cs`

## Overview

`ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent>();
```

## See Also

- [Area Index](../)