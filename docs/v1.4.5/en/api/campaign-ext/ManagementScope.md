<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementScope`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementScope

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementScope : ICloneable`
**Base:** `ICloneable`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementScope.cs`

## Overview

`ManagementScope` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsConnected` | `public bool IsConnected { get; }` |
| `Options` | `public ConnectionOptions Options { get; set; }` |
| `Path` | `public ManagementPath Path { get; set; }` |

## Key Methods

### Clone
`public ManagementScope Clone()`

**Purpose:** Handles logic related to `clone`.

### Connect
`public void Connect()`

**Purpose:** Handles logic related to `connect`.

## Usage Example

```csharp
var value = new ManagementScope();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)