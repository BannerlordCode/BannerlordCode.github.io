---
title: "CustomBattleFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleFactory`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleFactory

**Namespace:** TaleWorlds.MountAndBlade.View.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomBattleFactory`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs`

## Overview

`CustomBattleFactory` lives in `TaleWorlds.MountAndBlade.View.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartCustomBattle
`public static void StartCustomBattle()`

**Purpose:** Handles logic related to `start custom battle`.

### GetProviderCount
`public static int GetProviderCount()`

**Purpose:** Gets the current value of `provider count`.

### CollectProviders
`public static List<ICustomBattleProvider> CollectProviders()`

**Purpose:** Handles logic related to `collect providers`.

### CollectNextProvider
`public static ICustomBattleProvider CollectNextProvider(Type currentProviderType)`

**Purpose:** Handles logic related to `collect next provider`.

## Usage Example

```csharp
CustomBattleFactory.StartCustomBattle();
```

## See Also

- [Complete Class Catalog](../catalog)