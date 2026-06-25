---
title: "GameMenuInitializationHandler"
description: "Auto-generated class reference for GameMenuInitializationHandler."
---
# GameMenuInitializationHandler

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuInitializationHandler : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenuInitializationHandler.cs`

## Overview

`GameMenuInitializationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GameMenuInitializationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuId` | `public string MenuId { get; }` |

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<GameMenuInitializationHandler>();
```

## See Also

- [Area Index](../)