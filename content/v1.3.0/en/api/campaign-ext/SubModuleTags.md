---
title: "SubModuleTags"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SubModuleTags`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SubModuleTags

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public enum SubModuleTags`
**Base:** none
**File:** `TaleWorlds.ModuleManager/SubModuleInfo.cs`

## Overview

`SubModuleTags` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
SubModuleTags example = SubModuleTags.Value;
```

## See Also

- [Complete Class Catalog](../catalog)