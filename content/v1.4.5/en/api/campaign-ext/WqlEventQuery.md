---
title: "WqlEventQuery"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WqlEventQuery`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WqlEventQuery

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class WqlEventQuery : EventQuery`
**Base:** `EventQuery`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/WqlEventQuery.cs`

## Overview

`WqlEventQuery` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Condition` | `public string Condition { get; set; }` |
| `EventClassName` | `public string EventClassName { get; set; }` |
| `GroupByPropertyList` | `public StringCollection GroupByPropertyList { get; set; }` |
| `GroupWithinInterval` | `public TimeSpan GroupWithinInterval { get; set; }` |
| `HavingCondition` | `public string HavingCondition { get; set; }` |
| `QueryLanguage` | `public override string QueryLanguage { get; }` |
| `QueryString` | `public override string QueryString { get; set; }` |
| `WithinInterval` | `public TimeSpan WithinInterval { get; set; }` |

## Key Methods

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new WqlEventQuery();
value.Clone();
```

## See Also

- [Complete Class Catalog](../catalog)