<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ViewMethod`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ViewMethod

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ViewMethod : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/ViewMethod.cs`

## Overview

`ViewMethod` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Usage Example

```csharp
var value = new ViewMethod();
```

## See Also

- [Complete Class Catalog](../catalog)