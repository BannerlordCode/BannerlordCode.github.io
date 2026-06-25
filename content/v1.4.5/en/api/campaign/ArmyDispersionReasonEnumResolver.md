---
title: "ArmyDispersionReasonEnumResolver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyDispersionReasonEnumResolver`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyDispersionReasonEnumResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyDispersionReasonEnumResolver : IEnumResolver`
**Base:** `IEnumResolver`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/ArmyDispersionReasonEnumResolver.cs`

## Overview

`ArmyDispersionReasonEnumResolver` lives in `TaleWorlds.CampaignSystem.SaveCompability` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SaveCompability` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ResolveObject
`public string ResolveObject(string originalObject)`

**Purpose:** Handles logic related to `resolve object`.

## Usage Example

```csharp
ArmyDispersionReasonEnumResolver example = ArmyDispersionReasonEnumResolver.Value;
```

## See Also

- [Complete Class Catalog](../catalog)