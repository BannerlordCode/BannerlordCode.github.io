<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnerPermissionField`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnerPermissionField

**Namespace:** TaleWorlds.MountAndBlade.Objects.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnerPermissionField : EditorVisibleScriptComponentVariable`
**Base:** `EditorVisibleScriptComponentVariable`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SpawnerBase.cs`

## Overview

`SpawnerPermissionField` lives in `TaleWorlds.MountAndBlade.Objects.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new SpawnerPermissionField();
```

## See Also

- [Complete Class Catalog](../catalog)