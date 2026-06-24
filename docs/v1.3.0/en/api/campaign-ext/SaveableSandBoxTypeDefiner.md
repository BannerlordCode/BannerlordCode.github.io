<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveableSandBoxTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaveableSandBoxTypeDefiner

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SaveableSandBoxTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**File:** `SandBox/SaveableSandBoxTypeDefiner.cs`

## Overview

`SaveableSandBoxTypeDefiner` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new SaveableSandBoxTypeDefiner();
```

## See Also

- [Complete Class Catalog](../catalog)