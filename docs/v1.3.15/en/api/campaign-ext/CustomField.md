<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomField`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomField

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class CustomField`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Definition/CustomField.cs`

## Overview

`CustomField` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `SaveId` | `public short SaveId { get; }` |

## Usage Example

```csharp
var value = new CustomField();
```

## See Also

- [Complete Class Catalog](../catalog)