<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveCodeGenerationContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveCodeGenerationContext

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveCodeGenerationContext`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Definition/SaveCodeGenerationContext.cs`

## Overview

`SaveCodeGenerationContext` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddAssembly
`public void AddAssembly(Assembly assembly, string defaultNamespace, string location, string fileName)`

**Purpose:** Adds `assembly` to the current collection or state.

## Usage Example

```csharp
var value = new SaveCodeGenerationContext();
value.AddAssembly(assembly, "example", "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)