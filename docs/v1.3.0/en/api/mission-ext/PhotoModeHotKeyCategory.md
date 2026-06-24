<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PhotoModeHotKeyCategory`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PhotoModeHotKeyCategory

**Namespace:** TaleWorlds.MountAndBlade.GameKeyCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class PhotoModeHotKeyCategory : GameKeyContext`
**Base:** `GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/GameKeyCategory/PhotoModeHotKeyCategory.cs`

## Overview

`PhotoModeHotKeyCategory` lives in `TaleWorlds.MountAndBlade.GameKeyCategory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GameKeyCategory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new PhotoModeHotKeyCategory();
```

## See Also

- [Complete Class Catalog](../catalog)