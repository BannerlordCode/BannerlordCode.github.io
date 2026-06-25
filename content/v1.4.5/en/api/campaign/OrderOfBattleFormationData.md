---
title: "OrderOfBattleFormationData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OrderOfBattleFormationData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/OrderOfBattleCampaignBehavior.cs`

## Overview

`OrderOfBattleFormationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `OrderOfBattleFormationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new OrderOfBattleFormationData();
```

## See Also

- [Complete Class Catalog](../catalog)