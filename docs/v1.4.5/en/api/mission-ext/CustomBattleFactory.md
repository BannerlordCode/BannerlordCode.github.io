<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleFactory`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleFactory

**Namespace:** TaleWorlds.MountAndBlade.View.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomBattleFactory`
**Area:** mission-ext

## Overview

`CustomBattleFactory` lives in `TaleWorlds.MountAndBlade.View.CustomBattle`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
CustomBattleFactory.StartCustomBattle();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
