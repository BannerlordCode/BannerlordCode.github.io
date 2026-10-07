---
title: "MPOnSpawnPerkHandler"
description: "Auto-generated class reference for MPOnSpawnPerkHandler."
---
# MPOnSpawnPerkHandler

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPOnSpawnPerkHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPOnSpawnPerkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MPOnSpawnPerkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MPOnSpawnPerkHandler>();
```

## See Also

- [Area Index](../)