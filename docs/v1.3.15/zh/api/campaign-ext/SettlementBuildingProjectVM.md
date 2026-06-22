<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementBuildingProjectVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementBuildingProjectVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SettlementBuildingProjectVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)