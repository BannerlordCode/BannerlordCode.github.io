<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionConversationVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionConversationVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MissionConversationVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedAnOptionOrLinkThisFrame` | `public bool SelectedAnOptionOrLinkThisFrame { get; set; }` |
| `Persuasion` | `public PersuasionVM Persuasion { get; set; }` |
| `PowerComparer` | `public PowerLevelComparer PowerComparer { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `MinRelation` | `public int MinRelation { get; set; }` |
| `MaxRelation` | `public int MaxRelation { get; set; }` |
| `DefenderLeader` | `public ConversationAggressivePartyItemVM DefenderLeader { get; set; }` |
| `AttackerLeader` | `public ConversationAggressivePartyItemVM AttackerLeader { get; set; }` |
| `AttackerParties` | `public MBBindingList<ConversationAggressivePartyItemVM> AttackerParties { get; set; }` |
| `DefenderParties` | `public MBBindingList<ConversationAggressivePartyItemVM> DefenderParties { get; set; }` |
| `MoreOptionText` | `public string MoreOptionText { get; set; }` |
| `GoldText` | `public string GoldText { get; set; }` |
| `PersuasionText` | `public string PersuasionText { get; set; }` |
| `IsCurrentCharacterValidInEncyclopedia` | `public bool IsCurrentCharacterValidInEncyclopedia { get; set; }` |
| `IsLoadingOver` | `public bool IsLoadingOver { get; set; }` |
| `IsPersuading` | `public bool IsPersuading { get; set; }` |
| `ContinueText` | `public string ContinueText { get; set; }` |
| `CurrentCharacterNameLbl` | `public string CurrentCharacterNameLbl { get; set; }` |
| `AnswerList` | `public MBBindingList<ConversationItemVM> AnswerList { get; set; }` |
| `DialogText` | `public string DialogText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### Tick

```csharp
public void Tick(float dt)
```

### OnConversationContinue

```csharp
public void OnConversationContinue()
```

### ExecuteLink

```csharp
public void ExecuteLink(string link)
```

### ExecuteConversedHeroLink

```csharp
public void ExecuteConversedHeroLink()
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteCloseTooltip

```csharp
public void ExecuteCloseTooltip()
```

### ExecuteHeroTooltip

```csharp
public void ExecuteHeroTooltip()
```

### ExecuteFinalizeSelection

```csharp
public void ExecuteFinalizeSelection()
```

### ExecuteContinue

```csharp
public void ExecuteContinue()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)