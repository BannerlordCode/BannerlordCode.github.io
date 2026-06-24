<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBGlobals`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBGlobals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBGlobals`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGlobals.cs`

## Overview

`MBGlobals` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
MBGlobals.InitializeReferences();
```

## See Also

- [Complete Class Catalog](../catalog)