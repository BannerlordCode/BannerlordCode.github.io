<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopManagerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopManagerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyTroopManagerVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey { get; set; }` |
| `IsFocusedOnACharacter` | `public bool IsFocusedOnACharacter { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `IsUpgradePopUp` | `public bool IsUpgradePopUp { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |
| `FocusedTroop` | `public PartyTroopManagerItemVM FocusedTroop { get; set; }` |
| `Troops` | `public MBBindingList<PartyTroopManagerItemVM> Troops { get; set; }` |
| `OpenButtonHint` | `public HintViewModel OpenButtonHint { get; set; }` |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AvatarText` | `public string AvatarText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CountText` | `public string CountText { get; set; }` |
| `GoldChangeText` | `public string GoldChangeText { get; set; }` |


## Key Methods

### ExecuteItemPrimaryAction

```csharp
public virtual void ExecuteItemPrimaryAction()
```

### ExecuteItemSecondaryAction

```csharp
public virtual void ExecuteItemSecondaryAction()
```

### ExecuteItemTertiaryAction

```csharp
public virtual void ExecuteItemTertiaryAction()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OpenPopUp

```csharp
public virtual void OpenPopUp()
```

### ExecuteDone

```csharp
public virtual void ExecuteDone()
```

### UpdateOpenButtonHint

```csharp
public void UpdateOpenButtonHint(bool isDisabled, bool isIrrelevant, bool isUpgradesDisabled)
```

### ExecuteCancel

```csharp
public abstract void ExecuteCancel()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

### SetCancelInputKey

```csharp
public void SetCancelInputKey(HotKey hotKey)
```

### SetPrimaryActionInputKey

```csharp
public void SetPrimaryActionInputKey(HotKey hotKey)
```

### SetSecondaryActionInputKey

```csharp
public void SetSecondaryActionInputKey(HotKey hotKey)
```

### SetTertiaryActionInputKey

```csharp
public void SetTertiaryActionInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)