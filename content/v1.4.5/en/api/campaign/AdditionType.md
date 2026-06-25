---
title: "AdditionType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AdditionType`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AdditionType

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum AdditionType`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/FeatObject.cs`

## Overview

`AdditionType` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
AdditionType example = AdditionType.Value;
```

## See Also

- [Complete Class Catalog](../catalog)