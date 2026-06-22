<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultKingdomDecisionPermissionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultKingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## Overview

`DefaultKingdomDecisionPermissionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel())` to change how it computes.

## Key Methods

### IsPolicyDecisionAllowed
```csharp
public override bool IsPolicyDecisionAllowed(PolicyObject policy)
```

### IsWarDecisionAllowedBetweenKingdoms
```csharp
public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsPeaceDecisionAllowedBetweenKingdoms
```csharp
public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsAnnexationDecisionAllowed
```csharp
public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)
```

### IsExpulsionDecisionAllowed
```csharp
public override bool IsExpulsionDecisionAllowed(Clan expelledClan)
```

### IsKingSelectionDecisionAllowed
```csharp
public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
```csharp
public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

## Usage Example

```csharp
// Typical usage of DefaultKingdomDecisionPermissionModel (Model)
Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel());
```

## See Also

- [Complete Class Catalog](../catalog)