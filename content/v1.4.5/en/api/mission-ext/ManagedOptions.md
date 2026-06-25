---
title: "ManagedOptions"
description: "Auto-generated class reference for ManagedOptions."
---
# ManagedOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ManagedOptions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ManagedOptions.cs`

## Overview

`ManagedOptions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnManagedOptionChangedDelegate
`public delegate void OnManagedOptionChangedDelegate(ManagedOptionsType changedManagedOptionsType)`

**Purpose:** **Purpose:** Invoked when the managed option changed delegate event is raised.

```csharp
// Obtain an instance of ManagedOptions from the subsystem API first
ManagedOptions managedOptions = ...;
managedOptions.OnManagedOptionChangedDelegate(changedManagedOptionsType);
```

### GetConfig
`public static float GetConfig(ManagedOptionsType type)`

**Purpose:** **Purpose:** Reads and returns the config value held by the this instance.

```csharp
// Static call; no instance required
ManagedOptions.GetConfig(type);
```

### GetDefaultConfig
`public static float GetDefaultConfig(ManagedOptionsType type)`

**Purpose:** **Purpose:** Reads and returns the default config value held by the this instance.

```csharp
// Static call; no instance required
ManagedOptions.GetDefaultConfig(type);
```

### SetConfig
`public static void SetConfig(ManagedOptionsType type, float value)`

**Purpose:** **Purpose:** Assigns a new value to config and updates the object's internal state.

```csharp
// Static call; no instance required
ManagedOptions.SetConfig(type, 0);
```

### SaveConfig
`public static SaveResult SaveConfig()`

**Purpose:** **Purpose:** Writes config to persistent storage or a stream.

```csharp
// Static call; no instance required
ManagedOptions.SaveConfig();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ManagedOptions managedOptions = ...;
managedOptions.OnManagedOptionChangedDelegate(changedManagedOptionsType);
```

## See Also

- [Area Index](../)