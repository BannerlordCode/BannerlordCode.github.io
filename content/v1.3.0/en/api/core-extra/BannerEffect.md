---
title: "BannerEffect"
description: "Auto-generated class reference for BannerEffect."
---
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

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of BannerEffect from the subsystem API first
BannerEffect bannerEffect = ...;
bannerEffect.Initialize("example", "example", 0, 0, 0, incrementType);
```

### GetBonusAtLevel
`public float GetBonusAtLevel(int bannerLevel)`

**Purpose:** Reads and returns the `bonus at level` value held by the current object.

```csharp
// Obtain an instance of BannerEffect from the subsystem API first
BannerEffect bannerEffect = ...;
var result = bannerEffect.GetBonusAtLevel(0);
```

### GetBonusStringAtLevel
`public string GetBonusStringAtLevel(int bannerLevel)`

**Purpose:** Reads and returns the `bonus string at level` value held by the current object.

```csharp
// Obtain an instance of BannerEffect from the subsystem API first
BannerEffect bannerEffect = ...;
var result = bannerEffect.GetBonusStringAtLevel(0);
```

### GetDescription
`public TextObject GetDescription(int bannerLevel)`

**Purpose:** Reads and returns the `description` value held by the current object.

```csharp
// Obtain an instance of BannerEffect from the subsystem API first
BannerEffect bannerEffect = ...;
var result = bannerEffect.GetDescription(0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of BannerEffect from the subsystem API first
BannerEffect bannerEffect = ...;
var result = bannerEffect.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerEffect bannerEffect = ...;
bannerEffect.Initialize("example", "example", 0, 0, 0, incrementType);
```

## See Also

- [Area Index](../)