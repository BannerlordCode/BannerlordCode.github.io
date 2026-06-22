<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationContent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationContent

**命名空间:** TaleWorlds.CampaignSystem.CharacterCreationContent
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterCreationContent` 是 `TaleWorlds.CampaignSystem.CharacterCreationContent` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedTitleType` | `public string SelectedTitleType { get; }` |
| `SelectedParentOccupation` | `public string SelectedParentOccupation { get; }` |
| `DefaultSelectedTitleType` | `public string DefaultSelectedTitleType { get; }` |
| `ReviewPageDescription` | `public TextObject ReviewPageDescription { get; }` |
| `MainCharacterName` | `public string MainCharacterName { get; }` |
| `SelectedCulture` | `public CultureObject SelectedCulture { get; }` |
| `SelectedBanner` | `public Banner SelectedBanner { get; }` |


## 主要方法

### AddCharacterCreationCulture

```csharp
public void AddCharacterCreationCulture(CultureObject culture, int focusToAddByCulture, int skillLevelToAddByCulture)
```

### GetFocusToAddByCulture

```csharp
public int GetFocusToAddByCulture(CultureObject culture)
```

### GetSkillLevelToAddByCulture

```csharp
public int GetSkillLevelToAddByCulture(CultureObject culture)
```

### ChangeReviewPageDescription

```csharp
public void ChangeReviewPageDescription(TextObject reviewPageDescription)
```

### SetMainCharacterName

```csharp
public void SetMainCharacterName(string name)
```

### SetParentOccupation

```csharp
public void SetParentOccupation(string occupationType)
```

### ApplySkillAndAttributeEffects

```csharp
public void ApplySkillAndAttributeEffects(List<SkillObject> skills, int focusToAdd, int skillLevelToAdd, CharacterAttribute attribute, int attributeLevelToAdd, List<TraitObject> traits = null, int traitLevelToAdd = 0, int renownToAdd = 0, int goldToAdd = 0, int unspentFocusPoints = 0, int unspentAttributePoints = 0)
```

### SetMainClanBanner

```csharp
public void SetMainClanBanner(Banner banner)
```

### SetSelectedCulture

```csharp
public void SetSelectedCulture(CultureObject culture, CharacterCreationManager characterCreationManager)
```

### ApplyCulture

```csharp
public void ApplyCulture(CharacterCreationManager characterCreationManager)
```

### GetCultures

```csharp
public IEnumerable<CultureObject> GetCultures()
```

### AddEquipmentToUseGetter

```csharp
public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)
```

### TryGetEquipmentToUse

```csharp
public bool TryGetEquipmentToUse(string occupationId, out string equipmentId)
```

### TryGetEquipmentIdDelegate

```csharp
public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)