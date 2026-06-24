<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedDelegate`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedDelegate

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class ManagedDelegate : DotNetObject`
**Base:** `DotNetObject`
**File:** `TaleWorlds.DotNet/ManagedDelegate.cs`

## Overview

`ManagedDelegate` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public ManagedDelegate.DelegateDefinition Instance { get; set; }` |

## Key Methods

### InvokeAux
`public void InvokeAux()`

**Purpose:** Handles logic related to `invoke aux`.

### DelegateDefinition
`public delegate void DelegateDefinition()`

**Purpose:** Handles logic related to `delegate definition`.

## Usage Example

```csharp
var value = new ManagedDelegate();
value.InvokeAux();
```

## See Also

- [Complete Class Catalog](../catalog)