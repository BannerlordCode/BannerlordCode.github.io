<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterDeveloperVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CharacterDeveloperVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentCharacterNameText` | `public string CurrentCharacterNameText { get; set; }` |
| `CurrentCharacter` | `public CharacterDeveloperHeroItemVM CurrentCharacter { get; set; }` |
| `CharacterList` | `public SelectorVM<SelectorItemVM> CharacterList { get; set; }` |
| `FocusVisualHint` | `public HintViewModel FocusVisualHint { get; set; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `IsPlayerAccompanied` | `public bool IsPlayerAccompanied { get; set; }` |
| `UnspentCharacterPointsText` | `public string UnspentCharacterPointsText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `PartyRoleText` | `public string PartyRoleText { get; set; }` |
| `UnspentCharacterPointsHint` | `public HintViewModel UnspentCharacterPointsHint { get; set; }` |
| `UnspentAttributePointsHint` | `public HintViewModel UnspentAttributePointsHint { get; set; }` |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint { get; set; }` |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `SkillFocusText` | `public string SkillFocusText { get; set; }` |
| `AddFocusText` | `public string AddFocusText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### SelectHero

```csharp
public void SelectHero(Hero hero)
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ApplyAllChanges

```csharp
public void ApplyAllChanges()
```

### IsThereAnyChanges

```csharp
public bool IsThereAnyChanges()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey gameKey)
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

### SetResetInputKey

```csharp
public void SetResetInputKey(HotKey hotKey)
```

### SetPreviousCharacterInputKey

```csharp
public void SetPreviousCharacterInputKey(HotKey hotKey)
```

### SetNextCharacterInputKey

```csharp
public void SetNextCharacterInputKey(HotKey hotKey)
```

### SetGetKeyTextFromKeyIDFunc

```csharp
public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)