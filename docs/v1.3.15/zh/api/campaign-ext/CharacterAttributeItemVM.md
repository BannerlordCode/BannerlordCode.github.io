<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterAttributeItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterAttributeItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterAttributeItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `AttributeType` | `public CharacterAttribute AttributeType { get; }` |
| `BoundSkills` | `public MBBindingList<AttributeBoundSkillItemVM> BoundSkills { get; set; }` |
| `AttributeValue` | `public int AttributeValue { get; set; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` |
| `UnspentAttributePointsText` | `public string UnspentAttributePointsText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NameExtended` | `public string NameExtended { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `IncreaseHelpText` | `public string IncreaseHelpText { get; set; }` |
| `IsInspecting` | `public bool IsInspecting { get; set; }` |
| `IsAttributeAtMax` | `public bool IsAttributeAtMax { get; set; }` |
| `CanAddPoint` | `public bool CanAddPoint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteInspectAttribute

```csharp
public void ExecuteInspectAttribute()
```

### ExecuteAddAttributePoint

```csharp
public void ExecuteAddAttributePoint()
```

### Reset

```csharp
public void Reset()
```

### RefreshWithCurrentValues

```csharp
public void RefreshWithCurrentValues()
```

### Commit

```csharp
public void Commit()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)