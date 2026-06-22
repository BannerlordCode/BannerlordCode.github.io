<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestStageVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestStageVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`QuestStageVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DateText` | `public string DateText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `HasATask` | `public bool HasATask { get; set; }` |
| `IsNew` | `public bool IsNew { get; set; }` |
| `IsLastStage` | `public bool IsLastStage { get; set; }` |
| `IsTaskCompleted` | `public bool IsTaskCompleted { get; set; }` |
| `StageTask` | `public QuestStageTaskVM StageTask { get; set; }` |


## 主要方法

### ExecuteResetUpdated

```csharp
public void ExecuteResetUpdated()
```

### ExecuteLink

```csharp
public void ExecuteLink(string link)
```

### UpdateIsNew

```csharp
public void UpdateIsNew()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)