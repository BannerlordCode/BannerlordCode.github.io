---
title: "MPPerkHandler"
description: "Auto-generated class reference for MPPerkHandler."
---
# MPPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPPerkHandler`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPPerkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MPPerkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MPPerkHandler>();
```

## See Also

- [Area Index](../)