<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomDecisionsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomDecisionsVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsCurrentDecisionActive` | `public bool IsCurrentDecisionActive { get; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CurrentDecision` | `public DecisionItemBaseVM CurrentDecision { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFrameTick

```csharp
public void OnFrameTick()
```

### HandleNextDecision

```csharp
public void HandleNextDecision()
```

### HandleDecision

```csharp
public void HandleDecision(KingdomDecision curDecision)
```

### RefreshWith

```csharp
public void RefreshWith(KingdomDecision decision)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)