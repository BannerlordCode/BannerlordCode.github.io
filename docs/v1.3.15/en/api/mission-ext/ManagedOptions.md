<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedOptions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedOptions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ManagedOptions`
**Area:** mission-ext

## Overview

`ManagedOptions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
ManagedOptions.GetConfig(type);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
