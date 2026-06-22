<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationContent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationContent

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterCreationContent` is a class in the `TaleWorlds.CampaignSystem.CharacterCreationContent` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedTitleType` | `public string SelectedTitleType { get; }` |
| `SelectedParentOccupation` | `public string SelectedParentOccupation { get; }` |
| `DefaultSelectedTitleType` | `public string DefaultSelectedTitleType { get; }` |
| `ReviewPageDescription` | `public TextObject ReviewPageDescription { get; }` |
| `MainCharacterName` | `public string MainCharacterName { get; }` |
| `SelectedCulture` | `public CultureObject SelectedCulture { get; }` |
| `SelectedBanner` | `public Banner SelectedBanner { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)