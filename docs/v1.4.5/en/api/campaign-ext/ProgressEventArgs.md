<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProgressEventArgs`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProgressEventArgs

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ProgressEventArgs : ManagementEventArgs`
**Base:** `ManagementEventArgs`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ProgressEventArgs.cs`

## Overview

`ProgressEventArgs` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public int Current { get; }` |
| `Message` | `public string Message { get; }` |
| `UpperBound` | `public int UpperBound { get; }` |

## Usage Example

```csharp
var value = new ProgressEventArgs();
```

## See Also

- [Complete Class Catalog](../catalog)