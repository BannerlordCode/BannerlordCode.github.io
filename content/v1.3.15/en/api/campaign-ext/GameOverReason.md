---
title: "GameOverReason"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverReason`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverReason

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum GameOverReason`
**Area:** campaign-ext

## Overview

`GameOverReason` lives in `TaleWorlds.CampaignSystem.GameState`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `Retirement` |
| `ClanDestroyed` |

## Usage Example

```csharp
GameOverReason example = GameOverReason.Retirement;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
