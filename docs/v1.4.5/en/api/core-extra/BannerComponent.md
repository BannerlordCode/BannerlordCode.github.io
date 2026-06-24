<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerComponent : WeaponComponent`
**Base:** `WeaponComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BannerComponent.cs`

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

**Purpose:** Gets the current value of `copy`.

### GetBannerEffectBonus
`public float GetBannerEffectBonus()`

**Purpose:** Gets the current value of `banner effect bonus`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var component = agent.GetComponent<BannerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)