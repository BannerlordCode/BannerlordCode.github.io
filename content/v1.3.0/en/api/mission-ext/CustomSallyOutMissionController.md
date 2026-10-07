---
title: "CustomSallyOutMissionController"
description: "Auto-generated class reference for CustomSallyOutMissionController."
---
# CustomSallyOutMissionController

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSallyOutMissionController : SallyOutMissionController`
**Base:** `SallyOutMissionController`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs`

## Overview

`CustomSallyOutMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `CustomSallyOutMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<CustomSallyOutMissionController>();
```

## See Also

- [Area Index](../)