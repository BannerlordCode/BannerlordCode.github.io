---
title: "ICustomBattleProvider"
description: "Auto-generated class reference for ICustomBattleProvider."
---
# ICustomBattleProvider

**Namespace:** TaleWorlds.MountAndBlade.View.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ICustomBattleProvider`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/ICustomBattleProvider.cs`

## Overview

`ICustomBattleProvider` lives in `TaleWorlds.MountAndBlade.View.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IICustomBattleProvider service = ...;
```

## See Also

- [Area Index](../)