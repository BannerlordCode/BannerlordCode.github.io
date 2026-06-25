---
title: "IQuestsStateHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IQuestsStateHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IQuestsStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IQuestsStateHandler.cs`

## Overview

`IQuestsStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IQuestsStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IQuestsStateHandler implementation = GetQuestsStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)