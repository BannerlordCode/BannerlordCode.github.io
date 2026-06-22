<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionConversationVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionConversationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MissionConversationVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)