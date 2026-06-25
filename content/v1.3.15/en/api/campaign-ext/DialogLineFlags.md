---
title: "DialogLineFlags"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DialogLineFlags`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DialogLineFlags

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum DialogLineFlags`
**Area:** campaign-ext

## Overview

`DialogLineFlags` lives in `TaleWorlds.CampaignSystem.Conversation`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `PlayerLine` |
| `1` |
| `RepeatForObjects` |
| `SpecialLine` |
| `4` |
| `UsedOnce` |

## Usage Example

```csharp
DialogLineFlags example = DialogLineFlags.PlayerLine;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
