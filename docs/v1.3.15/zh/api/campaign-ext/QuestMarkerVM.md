<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestMarkerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestMarkerVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`QuestMarkerVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `QuestTitle` | `public TextObject QuestTitle { get; }` |
| `QuestHintText` | `public TextObject QuestHintText { get; }` |
| `IssueQuestFlag` | `public CampaignUIHelper.IssueQuestFlags IssueQuestFlag { get; }` |
| `IsTrackMarker` | `public bool IsTrackMarker { get; set; }` |
| `QuestMarkerType` | `public int QuestMarkerType { get; set; }` |
| `QuestHint` | `public HintViewModel QuestHint { get; set; }` |


## 主要方法

### RefreshWith

```csharp
public void RefreshWith(CampaignUIHelper.IssueQuestFlags issueQuestFlag, TextObject questTitle = null, TextObject questHintText = null)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)