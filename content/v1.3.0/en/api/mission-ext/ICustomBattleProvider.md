---
title: "ICustomBattleProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICustomBattleProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICustomBattleProvider

**Namespace:** TaleWorlds.MountAndBlade.View.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/ICustomBattleProvider.cs`

## Overview

`ICustomBattleProvider` lives in `TaleWorlds.MountAndBlade.View.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ICustomBattleProvider implementation = GetCustomBattleProviderImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)