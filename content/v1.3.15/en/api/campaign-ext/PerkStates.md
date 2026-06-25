---
title: "PerkStates"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkStates`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkStates

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum PerkStates`
**Area:** campaign-ext

## Overview

`PerkStates` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `1` |
| `NotEarned` |
| `EarnedButNotSelected` |
| `InSelection` |
| `EarnedAndActive` |
| `EarnedAndNotActive` |

## Usage Example

```csharp
PerkStates example = PerkStates.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
