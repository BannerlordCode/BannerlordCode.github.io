<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationStageBaseVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationStageBaseVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterCreationStageBaseVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `NextStageText` | `public string NextStageText { get; set; }` |
| `PreviousStageText` | `public string PreviousStageText { get; set; }` |
| `TotalStageCount` | `public int TotalStageCount { get; set; }` |
| `FurthestIndex` | `public int FurthestIndex { get; set; }` |
| `CurrentStageIndex` | `public int CurrentStageIndex { get; set; }` |
| `AnyItemSelected` | `public bool AnyItemSelected { get; set; }` |
| `CanAdvance` | `public bool CanAdvance { get; set; }` |


## 主要方法

### OnNextStage

```csharp
public abstract void OnNextStage()
```

### OnPreviousStage

```csharp
public abstract void OnPreviousStage()
```

### CanAdvanceToNextStage

```csharp
public abstract bool CanAdvanceToNextStage()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)