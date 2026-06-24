<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionPermissionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel>`
**Base:** `MBGameModel<KingdomDecisionPermissionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs`

## Overview

`KingdomDecisionPermissionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `KingdomDecisionPermissionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPolicyDecisionAllowed
`public abstract bool IsPolicyDecisionAllowed(PolicyObject policy)`

**Purpose:** Handles logic related to `is policy decision allowed`.

### IsWarDecisionAllowedBetweenKingdoms
`public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Handles logic related to `is war decision allowed between kingdoms`.

### IsPeaceDecisionAllowedBetweenKingdoms
`public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Handles logic related to `is peace decision allowed between kingdoms`.

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Handles logic related to `is start alliance decision allowed between kingdoms`.

### IsAnnexationDecisionAllowed
`public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**Purpose:** Handles logic related to `is annexation decision allowed`.

### IsExpulsionDecisionAllowed
`public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**Purpose:** Handles logic related to `is expulsion decision allowed`.

### IsKingSelectionDecisionAllowed
`public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**Purpose:** Handles logic related to `is king selection decision allowed`.

## Usage Example

```csharp
var implementation = new CustomKingdomDecisionPermissionModel();
```

## See Also

- [Complete Class Catalog](../catalog)