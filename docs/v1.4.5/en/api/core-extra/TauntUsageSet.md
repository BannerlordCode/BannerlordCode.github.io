<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntUsageSet`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TauntUsageSet

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageSet`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsageSet` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddUsage
`public void AddUsage(TauntUsage usage)`

**Purpose:** Adds `usage` to the current collection or state.

### GetUsages
`public MBReadOnlyList<TauntUsage> GetUsages()`

**Purpose:** Gets the current value of `usages`.

## Usage Example

```csharp
var value = new TauntUsageSet();
value.AddUsage(usage);
```

## See Also

- [Complete Class Catalog](../catalog)