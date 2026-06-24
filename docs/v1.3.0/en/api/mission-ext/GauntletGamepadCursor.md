<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletGamepadCursor`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletGamepadCursor

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGamepadCursor : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGamepadCursor.cs`

## Overview

`GauntletGamepadCursor` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
GauntletGamepadCursor.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)