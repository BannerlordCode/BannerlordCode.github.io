---
title: "NotableSpawnModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NotableSpawnModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotableSpawnModel : MBGameModel<NotableSpawnModel>`
**Base:** `MBGameModel<NotableSpawnModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotableSpawnModel.cs`

## Overview

`NotableSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `NotableSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTargetNotableCountForSettlement
`public abstract int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**Purpose:** Gets the current value of `target notable count for settlement`.

## Usage Example

```csharp
var implementation = new CustomNotableSpawnModel();
```

## See Also

- [Complete Class Catalog](../catalog)