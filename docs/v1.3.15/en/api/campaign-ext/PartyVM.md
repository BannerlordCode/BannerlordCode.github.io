<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Party` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)