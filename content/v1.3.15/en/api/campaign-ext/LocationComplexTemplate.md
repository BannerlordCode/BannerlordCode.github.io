---
title: "LocationComplexTemplate"
description: "Auto-generated class reference for LocationComplexTemplate."
---
# LocationComplexTemplate

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class LocationComplexTemplate : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplexTemplate.cs`

## Overview

`LocationComplexTemplate` lives in `TaleWorlds.CampaignSystem.Settlements.Locations` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Locations` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of LocationComplexTemplate from the subsystem API first
LocationComplexTemplate locationComplexTemplate = ...;
locationComplexTemplate.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LocationComplexTemplate locationComplexTemplate = ...;
locationComplexTemplate.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)