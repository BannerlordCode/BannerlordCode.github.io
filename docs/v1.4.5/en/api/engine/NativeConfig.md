<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeConfig`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NativeConfig

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class NativeConfig`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/NativeConfig.cs`

## Overview

`NativeConfig` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CheatMode` | `public static bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public static bool IsDevelopmentMode { get; }` |
| `LocalizationDebugMode` | `public static bool LocalizationDebugMode { get; }` |
| `GetUIDebugMode` | `public static bool GetUIDebugMode { get; }` |
| `DisableSound` | `public static bool DisableSound { get; }` |
| `EnableEditMode` | `public static bool EnableEditMode { get; }` |

## Key Methods

### OnConfigChanged
`public static void OnConfigChanged()`

**Purpose:** Called when the `config changed` event is raised.

### SetAutoConfigWrtHardware
`public static void SetAutoConfigWrtHardware()`

**Purpose:** Sets the value or state of `auto config wrt hardware`.

## Usage Example

```csharp
NativeConfig.OnConfigChanged();
```

## See Also

- [Complete Class Catalog](../catalog)