<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ErrorContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ErrorContext

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public class ErrorContext`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/ErrorContext.cs`

## Overview

`ErrorContext` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Error` | `public Exception Error { get; set; }` |
| `OriginalObject` | `public object? OriginalObject { get; set; }` |
| `Member` | `public object? Member { get; set; }` |
| `Path` | `public string Path { get; set; }` |
| `Handled` | `public bool Handled { get; set; }` |

## Usage Example

```csharp
var example = new ErrorContext();
```

## See Also

- [Complete Class Catalog](../catalog)