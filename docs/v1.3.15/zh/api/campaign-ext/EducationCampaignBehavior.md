<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EducationCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EducationCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PageCount` | `public int PageCount { get; }` |
| `Options` | `public IEnumerable<EducationCampaignBehavior.EducationOption> Options { get; }` |


## 主要方法

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### GetOptionProperties

```csharp
public void GetOptionProperties(Hero child, string optionKey, List<string> previousOptions, out TextObject optionTitle, out TextObject description, out TextObject effect, out ValueTuple<CharacterAttribute, int> attributes, out ValueTuple<SkillObject, int> skills, out ValueTuple<SkillObject, int> focusPoints, out EducationCampaignBehavior.EducationCharacterProperties educationCharacterProperties)
```

### GetPageProperties

```csharp
public void GetPageProperties(Hero child, List<string> previousChoices, out TextObject title, out TextObject description, out TextObject instruction, out EducationCampaignBehavior.EducationCharacterProperties defaultCharacterProperties, out string availableOptions)
```

### IsValidEducationNotification

```csharp
public bool IsValidEducationNotification(EducationMapNotification data)
```

### GetStageProperties

```csharp
public void GetStageProperties(Hero child, out int pageCount)
```

### Finalize

```csharp
public void Finalize(Hero child, List<string> chosenOptions)
```

### OnConsequence

```csharp
public void OnConsequence(Hero child)
```

### EducationOptionConditionDelegate

```csharp
public delegate bool EducationOptionConditionDelegate(EducationCampaignBehavior.EducationOption option, List<EducationCampaignBehavior.EducationOption> previousOptions)
```

### EducationOptionConsequenceDelegate

```csharp
public delegate bool EducationOptionConsequenceDelegate(EducationCampaignBehavior.EducationOption option)
```

### AddPage

```csharp
public EducationCampaignBehavior.EducationPage AddPage(int pageIndex, TextObject title, TextObject description, TextObject instruction, EducationCampaignBehavior.EducationCharacterProperties childProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationCharacterProperties specialCharacterProperties = default(EducationCampaignBehavior.EducationCharacterProperties), EducationCampaignBehavior.EducationPage.EducationPageConditionDelegate condition = null)
```

### GetOption

```csharp
public EducationCampaignBehavior.EducationOption GetOption(string optionKey)
```

### GetPage

```csharp
public EducationCampaignBehavior.EducationPage GetPage(List<string> previousOptionKeys)
```

### StringIdToEducationOption

```csharp
public List<EducationCampaignBehavior.EducationOption> StringIdToEducationOption(List<string> previousOptionKeys)
```

### ToString

```csharp
public override string ToString()
```

### Equals

```csharp
public bool Equals(EducationCampaignBehavior.EducationCharacterProperties other)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### GetUsedHandBoneIndex

```csharp
public sbyte GetUsedHandBoneIndex()
```

### AddOption

```csharp
public void AddOption(EducationCampaignBehavior.EducationOption option)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)