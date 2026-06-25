---
title: "CharacterCreationStageBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationStageBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationStageBase

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterCreationStageBase`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationStageBase.cs`

## Overview

`CharacterCreationStageBase` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Listener` | `public ICharacterCreationStageListener Listener { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomCharacterCreationStageBase();
```

## See Also

- [Complete Class Catalog](../catalog)