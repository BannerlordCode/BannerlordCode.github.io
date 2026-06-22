<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuPartyItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuPartyItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GameMenuPartyItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)