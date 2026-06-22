<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NarrativeMenuOption`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenuOption

**命名空间:** TaleWorlds.CampaignSystem.CharacterCreationContent
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`NarrativeMenuOption` 是 `TaleWorlds.CampaignSystem.CharacterCreationContent` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PositiveEffectText` | `public TextObject PositiveEffectText { get; }` |


## 主要方法

### OnCondition

```csharp
public bool OnCondition(CharacterCreationManager characterCreationManager)
```

### OnSelect

```csharp
public void OnSelect(CharacterCreationManager characterCreationManager)
```

### OnConsequence

```csharp
public void OnConsequence(CharacterCreationManager characterCreationManager)
```

### SetOnCondition

```csharp
public void SetOnCondition(NarrativeMenuOptionOnConditionDelegate onCondition)
```

### SetOnSelect

```csharp
public void SetOnSelect(NarrativeMenuOptionOnSelectDelegate onSelect)
```

### SetOnConsequence

```csharp
public void SetOnConsequence(NarrativeMenuOptionOnConsequenceDelegate onConsequence)
```

### ApplyFinalEffects

```csharp
public void ApplyFinalEffects(CharacterCreationContent characterCreationContent)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)