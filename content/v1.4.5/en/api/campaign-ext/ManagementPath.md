---
title: "ManagementPath"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementPath`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementPath

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementPath : ICloneable`
**Base:** `ICloneable`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementPath.cs`

## Overview

`ManagementPath` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClassName` | `public string ClassName { get; set; }` |
| `DefaultPath` | `public static ManagementPath DefaultPath { get; set; }` |
| `IsClass` | `public bool IsClass { get; }` |
| `IsInstance` | `public bool IsInstance { get; }` |
| `IsSingleton` | `public bool IsSingleton { get; }` |
| `NamespacePath` | `public string NamespacePath { get; set; }` |
| `Path` | `public string Path { get; set; }` |
| `RelativePath` | `public string RelativePath { get; set; }` |
| `Server` | `public string Server { get; set; }` |

## Key Methods

### Clone
`public ManagementPath Clone()`

**Purpose:** Handles logic related to `clone`.

### SetAsClass
`public void SetAsClass()`

**Purpose:** Sets the value or state of `as class`.

### SetAsSingleton
`public void SetAsSingleton()`

**Purpose:** Sets the value or state of `as singleton`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new ManagementPath();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)