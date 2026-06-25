---
title: "MPPerkEffect"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkEffect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPPerkEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkEffect : MPPerkEffectBase`
**Base:** `MPPerkEffectBase`
**Area:** mission-ext

## Overview

`MPPerkEffect` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFrom
`public static MPPerkEffect CreateFrom(XmlNode node)`

**Purpose:** Creates a new `from` instance or object.

## Usage Example

```csharp
var implementation = new CustomMPPerkEffect();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
