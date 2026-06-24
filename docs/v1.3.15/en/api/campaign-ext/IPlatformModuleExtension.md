<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IPlatformModuleExtension`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IPlatformModuleExtension

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.ModuleManager/IPlatformModuleExtension.cs`

## Overview

`IPlatformModuleExtension` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IPlatformModuleExtension implementation = GetPlatformModuleExtensionImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)