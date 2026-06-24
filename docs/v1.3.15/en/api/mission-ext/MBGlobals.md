<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBGlobals`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBGlobals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBGlobals`
**Area:** mission-ext

## Overview

`MBGlobals` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitializeReferences
`public static void InitializeReferences()`

**Purpose:** Initializes the state, resources, or bindings for `references`.

### GetActionSetWithSuffix
`public static MBActionSet GetActionSetWithSuffix(Monster monster, bool isFemale, string suffix)`

**Purpose:** Gets the current value of `action set with suffix`.

### GetActionSet
`public static MBActionSet GetActionSet(string actionSetCode)`

**Purpose:** Gets the current value of `action set`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBGlobals.InitializeReferences();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
