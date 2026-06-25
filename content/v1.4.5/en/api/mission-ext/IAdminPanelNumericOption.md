---
title: "IAdminPanelNumericOption"
description: "Auto-generated class reference for IAdminPanelNumericOption."
---
# IAdminPanelNumericOption

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IAdminPanelNumericOption : IAdminPanelOption<int>, IAdminPanelOption`
**Base:** `IAdminPanelOption<int>`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/IAdminPanelNumericOption.cs`

## Overview

`IAdminPanelNumericOption` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIAdminPanelNumericOption service = ...;
```

## See Also

- [Area Index](../)