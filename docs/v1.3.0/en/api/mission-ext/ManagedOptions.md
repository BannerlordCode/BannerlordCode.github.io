<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedOptions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `config`.

### GetDefaultConfig
`public static float GetDefaultConfig(ManagedOptions.ManagedOptionsType type)`

**Purpose:** Gets the current value of `default config`.

### SetConfig
`public static void SetConfig(ManagedOptions.ManagedOptionsType type, float value)`

**Purpose:** Sets the value or state of `config`.

### SaveConfig
`public static SaveResult SaveConfig()`

**Purpose:** Saves `config` data.

### OnManagedOptionChangedDelegate
`public delegate void OnManagedOptionChangedDelegate(ManagedOptions.ManagedOptionsType changedManagedOptionsType)`

**Purpose:** Called when the `managed option changed delegate` event is raised.

## Usage Example

```csharp
ManagedOptions.GetConfig(type);
```

## See Also

- [Complete Class Catalog](../catalog)