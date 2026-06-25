---
title: "ArrowBarrel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArrowBarrel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArrowBarrel

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArrowBarrel : AmmoBarrelBase`
**Base:** `AmmoBarrelBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Usables/ArrowBarrel.cs`

## Overview

`ArrowBarrel` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

## Usage Example

```csharp
var value = new ArrowBarrel();
value.GetDescriptionText(gameEntity);
```

## See Also

- [Complete Class Catalog](../catalog)