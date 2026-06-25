---
title: "OrderOfBattleFormationData"
description: "Auto-generated class reference for OrderOfBattleFormationData."
---
# OrderOfBattleFormationData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OrderOfBattleFormationData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/OrderOfBattleCampaignBehavior.cs`

## Overview

`OrderOfBattleFormationData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `OrderOfBattleFormationData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
OrderOfBattleFormationData entry = ...;
```

## See Also

- [Area Index](../)