<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrefabExtensionContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrefabExtensionContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabExtensionContext`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/PrefabExtensionContext.cs`

## Overview

`PrefabExtensionContext` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrefabExtensions` | `public IEnumerable<PrefabExtension> PrefabExtensions { get; }` |

## Key Methods

### AddExtension
`public void AddExtension(PrefabExtension prefabExtension)`

**Purpose:** Adds `extension` to the current collection or state.

## Usage Example

```csharp
var value = new PrefabExtensionContext();
value.AddExtension(prefabExtension);
```

## See Also

- [Complete Class Catalog](../catalog)