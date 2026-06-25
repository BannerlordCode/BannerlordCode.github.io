---
title: "EnumerationOptions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EnumerationOptions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EnumerationOptions

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class EnumerationOptions : ManagementOptions`
**Base:** `ManagementOptions`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/EnumerationOptions.cs`

## Overview

`EnumerationOptions` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BlockSize` | `public int BlockSize { get; set; }` |
| `DirectRead` | `public bool DirectRead { get; set; }` |
| `EnsureLocatable` | `public bool EnsureLocatable { get; set; }` |
| `EnumerateDeep` | `public bool EnumerateDeep { get; set; }` |
| `PrototypeOnly` | `public bool PrototypeOnly { get; set; }` |
| `ReturnImmediately` | `public bool ReturnImmediately { get; set; }` |
| `Rewindable` | `public bool Rewindable { get; set; }` |
| `UseAmendedQualifiers` | `public bool UseAmendedQualifiers { get; set; }` |

## Key Methods

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
EnumerationOptions example = EnumerationOptions.BlockSize;
```

## See Also

- [Complete Class Catalog](../catalog)