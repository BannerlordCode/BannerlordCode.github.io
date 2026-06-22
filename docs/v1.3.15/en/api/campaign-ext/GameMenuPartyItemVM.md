<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuPartyItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameMenuPartyItemVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Relation` | `public int Relation { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsCharacterInPrison` | `public bool IsCharacterInPrison { get; set; }` |
| `HasShips` | `public bool HasShips { get; set; }` |
| `IsIdle` | `public bool IsIdle { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsAlly` | `public bool IsAlly { get; set; }` |
| `IsNeutral` | `public bool IsNeutral { get; set; }` |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `SettlementPath` | `public string SettlementPath { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `PowerText` | `public string PowerText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `ProfessionText` | `public string ProfessionText { get; set; }` |
| `EncyclopediaCursorEffect` | `public string EncyclopediaCursorEffect { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `Banner_9` | `public BannerImageIdentifierVM Banner_9 { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSetAsContextMenuItem

```csharp
public void ExecuteSetAsContextMenuItem()
```

### ExecuteOpenEncyclopedia

```csharp
public void ExecuteOpenEncyclopedia()
```

### ExecuteCloseTooltip

```csharp
public void ExecuteCloseTooltip()
```

### ExecuteOpenTooltip

```csharp
public void ExecuteOpenTooltip()
```

### RefreshProperties

```csharp
public void RefreshProperties()
```

### RefreshQuestStatus

```csharp
public void RefreshQuestStatus()
```

### RefreshVisual

```csharp
public void RefreshVisual()
```

### RefreshCounts

```csharp
public void RefreshCounts()
```

### GetPartyDescriptionTextFromValues

```csharp
public string GetPartyDescriptionTextFromValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Compare

```csharp
public int Compare(QuestMarkerVM x, QuestMarkerVM y)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)