---
title: "InventorySounds"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventorySounds`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventorySounds

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class InventorySounds`
**Area:** mission-ext

## Overview

`InventorySounds` lives in `TaleWorlds.MountAndBlade.View`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PlayUISound
`public static void PlayUISound(string soundName)`

**Purpose:** Handles logic related to `play u i sound`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
InventorySounds.PlayUISound("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
