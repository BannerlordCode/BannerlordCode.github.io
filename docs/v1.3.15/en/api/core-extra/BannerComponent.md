<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerComponent : WeaponComponent`
**Base:** `WeaponComponent`
**File:** `TaleWorlds.Core/BannerComponent.cs`

## Overview

`BannerComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<BannerComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### GetCopy
```csharp
public override ItemComponent GetCopy()
```

### GetBannerEffectBonus
```csharp
public float GetBannerEffectBonus()
```

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## Usage Example

```csharp
// Typical usage of BannerComponent (Component)
agent.GetComponent<BannerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)