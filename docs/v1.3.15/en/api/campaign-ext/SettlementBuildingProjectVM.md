<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementBuildingProjectVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementBuildingProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SettlementBuildingProjectVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `DevelopmentLevelText` | `public string DevelopmentLevelText { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `DevelopmentQueueIndex` | `public int DevelopmentQueueIndex { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |
| `AlreadyAtMaxText` | `public string AlreadyAtMaxText { get; set; }` |
| `CanBuild` | `public bool CanBuild { get; set; }` |
| `AddRemoveHint` | `public HintViewModel AddRemoveHint { get; set; }` |
| `SetAsActiveHint` | `public HintViewModel SetAsActiveHint { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshProductionText

```csharp
public override void RefreshProductionText()
```

### ExecuteAddToQueue

```csharp
public override void ExecuteAddToQueue()
```

### ExecuteSetAsActiveDevelopment

```csharp
public override void ExecuteSetAsActiveDevelopment()
```

### ExecuteSetAsCurrent

```csharp
public override void ExecuteSetAsCurrent()
```

### ExecuteResetCurrent

```csharp
public override void ExecuteResetCurrent()
```

### ExecuteToggleSelected

```csharp
public override void ExecuteToggleSelected()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)