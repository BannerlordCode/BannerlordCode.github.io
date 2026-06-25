---
title: "ManagedOptions"
description: "Auto-generated class reference for ManagedOptions."
---
# ManagedOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ManagedOptions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ManagedOptions.cs`

## Overview

`ManagedOptions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetConfig
`public static float GetConfig(ManagedOptions.ManagedOptionsType type)`

**Purpose:** Reads and returns the config value held by the this instance.

```csharp
// Static call; no instance required
ManagedOptions.GetConfig(type);
```

### GetDefaultConfig
`public static float GetDefaultConfig(ManagedOptions.ManagedOptionsType type)`

**Purpose:** Reads and returns the default config value held by the this instance.

```csharp
// Static call; no instance required
ManagedOptions.GetDefaultConfig(type);
```

### SetConfig
`public static void SetConfig(ManagedOptions.ManagedOptionsType type, float value)`

**Purpose:** Assigns a new value to config and updates the object's internal state.

```csharp
// Static call; no instance required
ManagedOptions.SetConfig(type, 0);
```

### SaveConfig
`public static SaveResult SaveConfig()`

**Purpose:** Writes config to persistent storage or a stream.

```csharp
// Static call; no instance required
ManagedOptions.SaveConfig();
```

### OnManagedOptionChangedDelegate
`public delegate void OnManagedOptionChangedDelegate(ManagedOptions.ManagedOptionsType changedManagedOptionsType)`

**Purpose:** Invoked when the managed option changed delegate event is raised.

```csharp
// Obtain an instance of ManagedOptions from the subsystem API first
ManagedOptions managedOptions = ...;
managedOptions.OnManagedOptionChangedDelegate(changedManagedOptionsType);
```

## Usage Example

```csharp
ManagedOptions.GetConfig(type);
```

## See Also

- [Area Index](../)