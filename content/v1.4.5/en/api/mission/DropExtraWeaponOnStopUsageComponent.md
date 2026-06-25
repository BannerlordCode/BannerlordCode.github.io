---
title: "DropExtraWeaponOnStopUsageComponent"
description: "Auto-generated class reference for DropExtraWeaponOnStopUsageComponent."
---
# DropExtraWeaponOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class DropExtraWeaponOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DropExtraWeaponOnStopUsageComponent.cs`

## Overview

`DropExtraWeaponOnStopUsageComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `DropExtraWeaponOnStopUsageComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<DropExtraWeaponOnStopUsageComponent>();
```

## See Also

- [Area Index](../)