---
title: "Supporter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Supporter`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Supporter

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Supporter`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/Supporter.cs`

## Overview

`Supporter` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new Supporter();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)