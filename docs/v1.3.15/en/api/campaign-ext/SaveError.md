<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveError`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveError

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveError`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Save/SaveError.cs`

## Overview

`SaveError` lives in `TaleWorlds.SaveSystem.Save` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Save` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Message` | `public string Message { get; }` |

## Usage Example

```csharp
var value = new SaveError();
```

## See Also

- [Complete Class Catalog](../catalog)