---
title: "BannerComponent"
description: "Auto-generated class reference for BannerComponent."
---
# BannerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerComponent : WeaponComponent`
**Base:** `WeaponComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BannerComponent.cs`

## Overview

`BannerComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `BannerComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerLevel` | `public int BannerLevel { get; }` |
| `BannerEffect` | `public BannerEffect BannerEffect { get; }` |

## Key Methods

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** **Purpose:** Reads and returns the copy value held by the this instance.

```csharp
// Obtain an instance of BannerComponent from the subsystem API first
BannerComponent bannerComponent = ...;
var result = bannerComponent.GetCopy();
```

### GetBannerEffectBonus
`public float GetBannerEffectBonus()`

**Purpose:** **Purpose:** Reads and returns the banner effect bonus value held by the this instance.

```csharp
// Obtain an instance of BannerComponent from the subsystem API first
BannerComponent bannerComponent = ...;
var result = bannerComponent.GetBannerEffectBonus();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of BannerComponent from the subsystem API first
BannerComponent bannerComponent = ...;
bannerComponent.Deserialize(objectManager, node);
```

## Usage Example

```csharp
var component = agent.GetComponent<BannerComponent>();
```

## See Also

- [Area Index](../)