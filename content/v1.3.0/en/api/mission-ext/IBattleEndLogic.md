---
title: "IBattleEndLogic"
description: "Auto-generated class reference for IBattleEndLogic."
---
# IBattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBattleEndLogic`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IBattleEndLogic.cs`

## Overview

`IBattleEndLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `IBattleEndLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIBattleEndLogic service = ...;
```

## See Also

- [Area Index](../)