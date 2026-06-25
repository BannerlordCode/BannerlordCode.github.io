---
title: "GameMenuEventHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuEventHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuEventHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuEventHandler : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs`

## Overview

`GameMenuEventHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GameMenuEventHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |
| `MenuOptionId` | `public string MenuOptionId { get; }` |
| `Type` | `public GameMenuEventHandler.EventType Type { get; }` |

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new GameMenuEventHandler());
```

## See Also

- [Complete Class Catalog](../catalog)