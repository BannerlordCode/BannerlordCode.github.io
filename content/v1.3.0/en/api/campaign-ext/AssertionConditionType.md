---
title: "AssertionConditionType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssertionConditionType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AssertionConditionType

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/JetBrains/Annotations/AssertionConditionType.cs`

## Overview

`AssertionConditionType` lives in `JetBrains.Annotations` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `JetBrains.Annotations` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new AssertionConditionType();
```

## See Also

- [Complete Class Catalog](../catalog)