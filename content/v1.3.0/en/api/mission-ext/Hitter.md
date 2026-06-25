---
title: "Hitter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Hitter`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Hitter

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Hitter`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Agent.cs`

## Overview

`Hitter` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Damage` | `public float Damage { get; }` |

## Key Methods

### IncreaseDamage
`public void IncreaseDamage(float amount)`

**Purpose:** Handles logic related to `increase damage`.

## Usage Example

```csharp
var value = new Hitter();
value.IncreaseDamage(0);
```

## See Also

- [Complete Class Catalog](../catalog)