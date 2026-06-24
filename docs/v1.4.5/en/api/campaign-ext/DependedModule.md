<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DependedModule`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DependedModule

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public struct DependedModule`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/DependedModule.cs`

## Overview

`DependedModule` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ModuleId` | `public string ModuleId { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `IsOptional` | `public bool IsOptional { get; }` |

## Key Methods

### UpdateVersionChangeSet
`public void UpdateVersionChangeSet()`

**Purpose:** Updates the state or data of `version change set`.

## Usage Example

```csharp
var value = new DependedModule();
value.UpdateVersionChangeSet();
```

## See Also

- [Complete Class Catalog](../catalog)