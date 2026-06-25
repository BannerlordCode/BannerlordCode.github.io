---
title: "BannerEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerEffect`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerEffect

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BannerEffect : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.Core/BannerEffect.cs`

## Overview

`BannerEffect` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |

## Key Methods

### Initialize
`public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetBonusAtLevel
`public float GetBonusAtLevel(int bannerLevel)`

**Purpose:** Gets the current value of `bonus at level`.

### GetBonusStringAtLevel
`public string GetBonusStringAtLevel(int bannerLevel)`

**Purpose:** Gets the current value of `bonus string at level`.

### GetDescription
`public TextObject GetDescription(int bannerLevel)`

**Purpose:** Gets the current value of `description`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new BannerEffect();
value.Initialize("example", "example", 0, 0, 0, incrementType);
```

## See Also

- [Complete Class Catalog](../catalog)