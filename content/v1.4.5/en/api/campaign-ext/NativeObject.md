---
title: "NativeObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NativeObject

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public abstract class NativeObject`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeObject.cs`

## Overview

`NativeObject` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |

## Key Methods

### ManualInvalidate
`public void ManualInvalidate()`

**Purpose:** Handles logic related to `manual invalidate`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
var implementation = new CustomNativeObject();
```

## See Also

- [Complete Class Catalog](../catalog)