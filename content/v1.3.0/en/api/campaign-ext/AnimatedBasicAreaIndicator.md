---
title: "AnimatedBasicAreaIndicator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimatedBasicAreaIndicator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AnimatedBasicAreaIndicator

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class AnimatedBasicAreaIndicator : AreaMarker`
**Base:** `AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs`

## Overview

`AnimatedBasicAreaIndicator` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### SetIsActive
`public void SetIsActive(bool isActive)`

**Purpose:** Sets the value or state of `is active`.

### SetOverriddenName
`public void SetOverriddenName(TextObject name)`

**Purpose:** Sets the value or state of `overridden name`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new AnimatedBasicAreaIndicator();
value.SetIsActive(false);
```

## See Also

- [Complete Class Catalog](../catalog)