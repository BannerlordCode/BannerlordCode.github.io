<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; }` |
| `CanRightPartyTakeMoreTroops` | `public bool CanRightPartyTakeMoreTroops { get; }` |
| `CanRightPartyTakeMorePrisoners` | `public bool CanRightPartyTakeMorePrisoners { get; }` |
| `CurrentCharacter` | `public PartyCharacterVM CurrentCharacter { get; set; }` |
| `OtherPartySortController` | `public PartySortControllerVM OtherPartySortController { get; set; }` |
| `MainPartySortController` | `public PartySortControllerVM MainPartySortController { get; set; }` |
| `OtherPartyComposition` | `public PartyCompositionVM OtherPartyComposition { get; set; }` |
| `MainPartyComposition` | `public PartyCompositionVM MainPartyComposition { get; set; }` |
| `CurrentFocusedCharacter` | `public PartyCharacterVM CurrentFocusedCharacter { get; set; }` |
| `CurrentFocusedUpgrade` | `public UpgradeTargetVM CurrentFocusedUpgrade { get; set; }` |
| `HeaderLbl` | `public string HeaderLbl { get; set; }` |
| `OtherPartyNameLbl` | `public string OtherPartyNameLbl { get; set; }` |
| `OtherPartyTroops` | `public MBBindingList<PartyCharacterVM> OtherPartyTroops { get; set; }` |
| `OtherPartyPrisoners` | `public MBBindingList<PartyCharacterVM> OtherPartyPrisoners { get; set; }` |
| `MainPartyTroops` | `public MBBindingList<PartyCharacterVM> MainPartyTroops { get; set; }` |
| `MainPartyPrisoners` | `public MBBindingList<PartyCharacterVM> MainPartyPrisoners { get; set; }` |
| `UpgradePopUp` | `public PartyUpgradeTroopVM UpgradePopUp { get; set; }` |
| `RecruitPopUp` | `public PartyRecruitTroopVM RecruitPopUp { get; set; }` |
| `SelectedCharacter` | `public HeroViewModel SelectedCharacter { get; set; }` |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetSelectedCharacter

```csharp
public void SetSelectedCharacter(PartyCharacterVM troop)
```

### ExecuteSelectCharacterTuple

```csharp
public void ExecuteSelectCharacterTuple(PartyCharacterVM troop)
```

### ExecuteClearSelectedCharacterTuple

```csharp
public void ExecuteClearSelectedCharacterTuple()
```

### ExecuteTransferWithParameters

```csharp
public void ExecuteTransferWithParameters(PartyCharacterVM party, int index, string targetTag)
```

### OnUpgradePopUpClosed

```csharp
public void OnUpgradePopUpClosed(bool isCancelled)
```

### OnRecruitPopUpClosed

```csharp
public void OnRecruitPopUpClosed(bool isCancelled)
```

### ExecuteTransferAllMainTroops

```csharp
public void ExecuteTransferAllMainTroops()
```

### ExecuteTransferAllOtherTroops

```csharp
public void ExecuteTransferAllOtherTroops()
```

### ExecuteTransferAllMainPrisoners

```csharp
public void ExecuteTransferAllMainPrisoners()
```

### ExecuteTransferAllOtherPrisoners

```csharp
public void ExecuteTransferAllOtherPrisoners()
```

### ExecuteOpenUpgradePopUp

```csharp
public void ExecuteOpenUpgradePopUp()
```

### ExecuteOpenRecruitPopUp

```csharp
public void ExecuteOpenRecruitPopUp()
```

### ExecuteUpgrade

```csharp
public void ExecuteUpgrade(PartyCharacterVM troop, int upgradeTargetType, int maxUpgradeCount)
```

### ExecuteRecruit

```csharp
public void ExecuteRecruit(PartyCharacterVM character, bool recruitAll = false)
```

### ExecuteExecution

```csharp
public void ExecuteExecution()
```

### ExecuteRemoveZeroCounts

```csharp
public void ExecuteRemoveZeroCounts()
```

### ExecuteTalk

```csharp
public void ExecuteTalk()
```

### ExecuteDone

```csharp
public void ExecuteDone()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)