<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NarrativeMenuOptionArgs`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenuOptionArgs

**命名空间:** TaleWorlds.CampaignSystem.CharacterCreationContent
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`NarrativeMenuOptionArgs` 是 `TaleWorlds.CampaignSystem.CharacterCreationContent` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `AffectedSkills` | `public MBList<SkillObject> AffectedSkills { get; }` |
| `SkillLevelToAdd` | `public int SkillLevelToAdd { get; }` |
| `AffectedTraits` | `public MBList<TraitObject> AffectedTraits { get; }` |
| `TraitLevelToAdd` | `public int TraitLevelToAdd { get; }` |
| `FocusToAdd` | `public int FocusToAdd { get; }` |
| `UnspentFocusToAdd` | `public int UnspentFocusToAdd { get; }` |
| `EffectedAttribute` | `public CharacterAttribute EffectedAttribute { get; }` |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd { get; }` |
| `UnspentAttributeToAdd` | `public int UnspentAttributeToAdd { get; }` |
| `RenownToAdd` | `public int RenownToAdd { get; }` |
| `GoldToAdd` | `public int GoldToAdd { get; }` |
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |


## 主要方法

### SetAffectedSkills

```csharp
public void SetAffectedSkills(SkillObject affectedSkills)
```

### SetFocusToSkills

```csharp
public void SetFocusToSkills(int focusToAdd)
```

### SetLevelToSkills

```csharp
public void SetLevelToSkills(int levelToAdd)
```

### SetAffectedTraits

```csharp
public void SetAffectedTraits(TraitObject affectedTraits)
```

### SetLevelToTraits

```csharp
public void SetLevelToTraits(int levelToAdd)
```

### SetLevelToAttribute

```csharp
public void SetLevelToAttribute(CharacterAttribute characterAttribute, int levelToAdd)
```

### SetRenownToAdd

```csharp
public void SetRenownToAdd(int value)
```

### SetUnspentFocusToAdd

```csharp
public void SetUnspentFocusToAdd(int value)
```

### SetUnspentAttributeToAdd

```csharp
public void SetUnspentAttributeToAdd(int value)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)