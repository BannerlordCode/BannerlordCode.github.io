<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletGamepadCursor`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletGamepadCursor

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGamepadCursor : GlobalLayer`
**Base:** `GlobalLayer`
**Area:** mission-ext

## Overview

`GauntletGamepadCursor` lives in `TaleWorlds.MountAndBlade.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
GauntletGamepadCursor.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
