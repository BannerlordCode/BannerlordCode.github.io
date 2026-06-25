---
title: "IGameOverStateHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IGameOverStateHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IGameOverStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IGameOverStateHandler.cs`

## Overview

`IGameOverStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IGameOverStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IGameOverStateHandler implementation = GetGameOverStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)