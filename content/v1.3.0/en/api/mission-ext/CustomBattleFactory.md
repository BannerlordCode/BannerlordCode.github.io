---
title: "CustomBattleFactory"
description: "Auto-generated class reference for CustomBattleFactory."
---
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

**Purpose:** Starts the custom battle flow or state machine.

```csharp
// Static call; no instance required
CustomBattleFactory.StartCustomBattle();
```

### GetProviderCount
`public static int GetProviderCount()`

**Purpose:** Reads and returns the provider count value held by the this instance.

```csharp
// Static call; no instance required
CustomBattleFactory.GetProviderCount();
```

### CollectProviders
`public static List<ICustomBattleProvider> CollectProviders()`

**Purpose:** Executes the CollectProviders logic.

```csharp
// Static call; no instance required
CustomBattleFactory.CollectProviders();
```

### CollectNextProvider
`public static ICustomBattleProvider CollectNextProvider(Type currentProviderType)`

**Purpose:** Executes the CollectNextProvider logic.

```csharp
// Static call; no instance required
CustomBattleFactory.CollectNextProvider(currentProviderType);
```

## Usage Example

```csharp
CustomBattleFactory.StartCustomBattle();
```

## See Also

- [Area Index](../)