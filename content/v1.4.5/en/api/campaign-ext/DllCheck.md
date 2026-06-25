---
title: "DllCheck"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DllCheck`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DllCheck

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class DllCheck`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/DllCheck.cs`

## Overview

`DllCheck` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Test
`public static bool Test()`

**Purpose:** Handles logic related to `test`.

## Usage Example

```csharp
DllCheck.Test();
```

## See Also

- [Complete Class Catalog](../catalog)