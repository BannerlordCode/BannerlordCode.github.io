<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EducationCharacterProperties`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EducationCharacterProperties

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EducationCharacterProperties` is a struct in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PageCount` | `public int PageCount { get; }` |
| `Options` | `public IEnumerable<EducationCampaignBehavior.EducationOption> Options { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)