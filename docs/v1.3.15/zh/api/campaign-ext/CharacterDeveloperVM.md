<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDeveloperVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CharacterDeveloperVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)