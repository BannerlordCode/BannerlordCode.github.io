<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementProjectSelectionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementProjectSelectionVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SettlementProjectSelectionVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LocalDevelopmentList` | `public List<Building> LocalDevelopmentList { get; }` |
| `ProjectsText` | `public string ProjectsText { get; set; }` |
| `QueueText` | `public string QueueText { get; set; }` |
| `DailyDefaultsText` | `public string DailyDefaultsText { get; set; }` |
| `DailyDefaultsExplanationText` | `public string DailyDefaultsExplanationText { get; set; }` |
| `CurrentSelectedProject` | `public SettlementProjectVM CurrentSelectedProject { get; set; }` |
| `CurrentDailyDefault` | `public SettlementDailyProjectVM CurrentDailyDefault { get; set; }` |
| `AvailableProjects` | `public MBBindingList<SettlementBuildingProjectVM> AvailableProjects { get; set; }` |
| `CurrentDevelopmentQueue` | `public MBBindingList<SettlementBuildingProjectVM> CurrentDevelopmentQueue { get; set; }` |
| `DailyDefaultList` | `public MBBindingList<SettlementDailyProjectVM> DailyDefaultList { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteChangeQueueOrder

```csharp
public void ExecuteChangeQueueOrder(SettlementBuildingProjectVM project, int index, string targetTag)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)