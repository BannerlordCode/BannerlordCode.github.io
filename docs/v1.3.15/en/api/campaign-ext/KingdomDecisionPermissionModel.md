<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionPermissionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel>`
**Base:** `MBGameModel<KingdomDecisionPermissionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs`

## Overview

`KingdomDecisionPermissionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<KingdomDecisionPermissionModel>(new MyKingdomDecisionPermissionModel())` to change how it computes.

## Key Methods

### IsPolicyDecisionAllowed
```csharp
public abstract bool IsPolicyDecisionAllowed(PolicyObject policy)
```

### IsWarDecisionAllowedBetweenKingdoms
```csharp
public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsPeaceDecisionAllowedBetweenKingdoms
```csharp
public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
```csharp
public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)
```

### IsAnnexationDecisionAllowed
```csharp
public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)
```

### IsExpulsionDecisionAllowed
```csharp
public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan)
```

### IsKingSelectionDecisionAllowed
```csharp
public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom)
```

## Usage Example

```csharp
// Typical usage of KingdomDecisionPermissionModel (Model)
Game.Current.ReplaceModel<KingdomDecisionPermissionModel>(new MyKingdomDecisionPermissionModel());
```

## See Also

- [Complete Class Catalog](../catalog)