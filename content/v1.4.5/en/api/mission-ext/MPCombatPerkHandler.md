---
title: "MPCombatPerkHandler"
description: "Auto-generated class reference for MPCombatPerkHandler."
---
# MPCombatPerkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class MPCombatPerkHandler`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkObject.cs`

## Overview

`MPCombatPerkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MPCombatPerkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MPCombatPerkHandler>();
```

## See Also

- [Area Index](../)