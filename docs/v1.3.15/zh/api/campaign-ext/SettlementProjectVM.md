<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementProjectVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementProjectVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SettlementProjectVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)