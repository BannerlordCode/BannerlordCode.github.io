<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `QuestItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Quest` | `public QuestBase Quest { get; }` |
| `Issue` | `public IssueBase Issue { get; }` |
| `QuestLogEntry` | `public JournalLogEntry QuestLogEntry { get; }` |
| `Name` | `public string Name { get; set; }` |
| `CompletionTypeAsInt` | `public int CompletionTypeAsInt { get; set; }` |
| `IsMainQuest` | `public bool IsMainQuest { get; set; }` |
| `IsNavalQuest` | `public bool IsNavalQuest { get; set; }` |
| `IsCompletedSuccessfully` | `public bool IsCompletedSuccessfully { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsUpdated` | `public bool IsUpdated { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsTrackable` | `public bool IsTrackable { get; set; }` |
| `RemainingDaysText` | `public string RemainingDaysText { get; set; }` |
| `RemainingDaysTextCombined` | `public string RemainingDaysTextCombined { get; set; }` |
| `RemainingDays` | `public int RemainingDays { get; set; }` |
| `QuestGiverHero` | `public HeroVM QuestGiverHero { get; set; }` |
| `IsQuestGiverHeroHidden` | `public bool IsQuestGiverHeroHidden { get; set; }` |
| `Stages` | `public MBBindingList<QuestStageVM> Stages { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateIsUpdated

```csharp
public void UpdateIsUpdated()
```

### ExecuteSelection

```csharp
public void ExecuteSelection()
```

### ExecuteToggleQuestTrack

```csharp
public void ExecuteToggleQuestTrack()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)