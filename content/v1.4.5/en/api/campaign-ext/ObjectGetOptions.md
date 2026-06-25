---
title: "ObjectGetOptions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectGetOptions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ObjectGetOptions

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ObjectGetOptions : ManagementOptions`
**Base:** `ManagementOptions`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ObjectGetOptions.cs`

## Overview

`ObjectGetOptions` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseAmendedQualifiers` | `public bool UseAmendedQualifiers { get; set; }` |

## Key Methods

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new ObjectGetOptions();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)