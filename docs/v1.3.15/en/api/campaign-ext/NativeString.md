<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeString`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeString

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeString : NativeObject`
**Base:** `NativeObject`
**Area:** campaign-ext

## Overview

`NativeString` lives in `TaleWorlds.DotNet`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static NativeString Create()`

**Purpose:** Creates a new `create` instance or object.

### GetString
`public string GetString()`

**Purpose:** Gets the current value of `string`.

### SetString
`public void SetString(string newString)`

**Purpose:** Sets the value or state of `string`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
NativeString.Create();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
