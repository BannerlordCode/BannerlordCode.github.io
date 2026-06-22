<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementProjectVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SettlementProjectVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `Building` | `public Building Building { get; set; }` |
| `VisualCode` | `public string VisualCode { get; set; }` |
| `ProductionText` | `public string ProductionText { get; set; }` |
| `CurrentPositiveEffectText` | `public string CurrentPositiveEffectText { get; set; }` |
| `NextPositiveEffectText` | `public string NextPositiveEffectText { get; set; }` |
| `ProductionCostText` | `public string ProductionCostText { get; set; }` |
| `IsCurrentActiveProject` | `public bool IsCurrentActiveProject { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Explanation` | `public string Explanation { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshProductionText

```csharp
public virtual void RefreshProductionText()
```

### ExecuteAddToQueue

```csharp
public abstract void ExecuteAddToQueue()
```

### ExecuteSetAsActiveDevelopment

```csharp
public abstract void ExecuteSetAsActiveDevelopment()
```

### ExecuteSetAsCurrent

```csharp
public abstract void ExecuteSetAsCurrent()
```

### ExecuteResetCurrent

```csharp
public abstract void ExecuteResetCurrent()
```

### ExecuteToggleSelected

```csharp
public abstract void ExecuteToggleSelected()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)