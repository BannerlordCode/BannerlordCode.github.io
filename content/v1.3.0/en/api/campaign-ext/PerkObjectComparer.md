---
title: "PerkObjectComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkObjectComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerkObjectComparer

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public class PerkObjectComparer : IComparer<PerkObject>`
**Base:** `IComparer<PerkObject>`
**File:** `SandBox.ViewModelCollection/PerkObjectComparer.cs`

## Overview

`PerkObjectComparer` lives in `SandBox.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(PerkObject x, PerkObject y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new PerkObjectComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)