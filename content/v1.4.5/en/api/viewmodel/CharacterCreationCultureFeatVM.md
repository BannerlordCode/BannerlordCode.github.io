---
title: "CharacterCreationCultureFeatVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationCultureFeatVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationCultureFeatVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCultureFeatVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationCultureFeatVM.cs`

## Overview

`CharacterCreationCultureFeatVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPositive` | `public bool IsPositive { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## Usage Example

```csharp
var example = new CharacterCreationCultureFeatVM();
```

## See Also

- [Complete Class Catalog](../catalog)