<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ErrorEventArgs`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ErrorEventArgs

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class ErrorEventArgs : EventArgs`
**Base:** `EventArgs`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/ErrorEventArgs.cs`

## Overview

`ErrorEventArgs` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentObject` | `public object? CurrentObject { get; }` |
| `ErrorContext` | `public ErrorContext ErrorContext { get; }` |

## Usage Example

```csharp
var example = new ErrorEventArgs();
```

## See Also

- [Complete Class Catalog](../catalog)