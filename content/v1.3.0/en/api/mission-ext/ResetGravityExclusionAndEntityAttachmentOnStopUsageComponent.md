---
title: "ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent"
description: "Auto-generated class reference for ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent."
---
# ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.cs`

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