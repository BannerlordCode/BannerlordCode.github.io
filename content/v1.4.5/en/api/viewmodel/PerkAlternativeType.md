---
title: "PerkAlternativeType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkAlternativeType`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerkAlternativeType

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PerkAlternativeType`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/PerkVM.cs`

## Overview

`PerkAlternativeType` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
PerkAlternativeType example = PerkAlternativeType.Value;
```

## See Also

- [Complete Class Catalog](../catalog)