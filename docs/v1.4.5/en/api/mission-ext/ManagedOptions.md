<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedOptions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ManagedOptions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ManagedOptions.cs`

## Overview

`ManagedOptions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnManagedOptionChangedDelegate
`public delegate void OnManagedOptionChangedDelegate(ManagedOptionsType changedManagedOptionsType)`

**Purpose:** Called when the `managed option changed delegate` event is raised.

### GetConfig
`public static float GetConfig(ManagedOptionsType type)`

**Purpose:** Gets the current value of `config`.

### GetDefaultConfig
`public static float GetDefaultConfig(ManagedOptionsType type)`

**Purpose:** Gets the current value of `default config`.

### SetConfig
`public static void SetConfig(ManagedOptionsType type, float value)`

**Purpose:** Sets the value or state of `config`.

### SaveConfig
`public static SaveResult SaveConfig()`

**Purpose:** Saves `config` data.

## Usage Example

```csharp
var value = new ManagedOptions();
value.OnManagedOptionChangedDelegate(changedManagedOptionsType);
```

## See Also

- [Complete Class Catalog](../catalog)