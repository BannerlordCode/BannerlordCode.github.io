<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EditorVisibleScriptComponentVariable`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EditorVisibleScriptComponentVariable

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class EditorVisibleScriptComponentVariable : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Engine/EditorVisibleScriptComponentVariable.cs`

## Overview

`EditorVisibleScriptComponentVariable` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Visible` | `public bool Visible { get; set; }` |

## Usage Example

```csharp
var value = new EditorVisibleScriptComponentVariable();
```

## See Also

- [Complete Class Catalog](../catalog)