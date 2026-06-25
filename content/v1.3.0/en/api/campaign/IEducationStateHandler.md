---
title: "IEducationStateHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IEducationStateHandler`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IEducationStateHandler

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameState/IEducationStateHandler.cs`

## Overview

`IEducationStateHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IEducationStateHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
IEducationStateHandler implementation = GetEducationStateHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)