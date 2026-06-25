---
title: "Charm"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Charm`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Charm

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Charm`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/DefaultPerks.cs`

## Overview

`Charm` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new Charm();
```

## See Also

- [Complete Class Catalog](../catalog)