<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultKingdomDecisionPermissionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultKingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## Overview

`DefaultKingdomDecisionPermissionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultKingdomDecisionPermissionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsPolicyDecisionAllowed
`public override bool IsPolicyDecisionAllowed(PolicyObject policy)`

**Purpose:** Handles logic related to `is policy decision allowed`.

### IsWarDecisionAllowedBetweenKingdoms
`public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Handles logic related to `is war decision allowed between kingdoms`.

### IsPeaceDecisionAllowedBetweenKingdoms
`public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Handles logic related to `is peace decision allowed between kingdoms`.

### IsAnnexationDecisionAllowed
`public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**Purpose:** Handles logic related to `is annexation decision allowed`.

### IsExpulsionDecisionAllowed
`public override bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**Purpose:** Handles logic related to `is expulsion decision allowed`.

### IsKingSelectionDecisionAllowed
`public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**Purpose:** Handles logic related to `is king selection decision allowed`.

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**Purpose:** Handles logic related to `is start alliance decision allowed between kingdoms`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel());
```

## See Also

- [Complete Class Catalog](../catalog)