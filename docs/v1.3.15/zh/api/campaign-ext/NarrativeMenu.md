<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NarrativeMenu`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenu

**命名空间:** TaleWorlds.CampaignSystem.CharacterCreationContent
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`NarrativeMenu` 是 `TaleWorlds.CampaignSystem.CharacterCreationContent` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Characters` | `public List<NarrativeMenuCharacter> Characters { get; }` |
| `CharacterCreationMenuOptions` | `public MBReadOnlyList<NarrativeMenuOption> CharacterCreationMenuOptions { get; }` |


## 主要方法

### AddNarrativeMenuOption

```csharp
public void AddNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)
```

### RemoveNarrativeMenuOption

```csharp
public void RemoveNarrativeMenuOption(NarrativeMenuOption narrativeMenuOption)
```

### GetNarrativeMenuCharacterArgsDelegate

```csharp
public delegate List<NarrativeMenuCharacterArgs> GetNarrativeMenuCharacterArgsDelegate(CultureObject culture, string occupationType, CharacterCreationManager characterCreationManager)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)