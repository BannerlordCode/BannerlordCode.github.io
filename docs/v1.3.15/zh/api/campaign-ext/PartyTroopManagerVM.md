<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTroopManagerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTroopManagerVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyTroopManagerVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)