<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyCharacterVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyCharacterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyCharacterVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Party` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Troops` | `public TroopRoster Troops { get; }` |
| `StringId` | `public string StringId { get; }` |
| `Troop` | `public TroopRosterElement Troop { get; set; }` |
| `Character` | `public CharacterObject Character { get; set; }` |
| `IsFormationEnabled` | `public bool IsFormationEnabled { get; set; }` |
| `TransferString` | `public string TransferString { get; set; }` |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable { get; set; }` |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable { get; set; }` |
| `IsRecruitablePrisoner` | `public bool IsRecruitablePrisoner { get; set; }` |
| `IsUpgradableTroop` | `public bool IsUpgradableTroop { get; set; }` |
| `IsExecutable` | `public bool IsExecutable { get; set; }` |
| `NumOfReadyToUpgradeTroops` | `public int NumOfReadyToUpgradeTroops { get; set; }` |
| `NumOfUpgradeableTroops` | `public int NumOfUpgradeableTroops { get; set; }` |
| `NumOfRecruitablePrisoners` | `public int NumOfRecruitablePrisoners { get; set; }` |
| `MaxXP` | `public int MaxXP { get; set; }` |
| `CurrentXP` | `public int CurrentXP { get; set; }` |
| `CurrentConformity` | `public int CurrentConformity { get; set; }` |
| `MaxConformity` | `public int MaxConformity { get; set; }` |
| `TroopXPTooltip` | `public BasicTooltipViewModel TroopXPTooltip { get; set; }` |
| `TroopConformityTooltip` | `public BasicTooltipViewModel TroopConformityTooltip { get; set; }` |


## Key Methods

### UpdateTalkable

```csharp
public void UpdateTalkable()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSetSelected

```csharp
public void ExecuteSetSelected()
```

### ExecuteTalk

```csharp
public void ExecuteTalk()
```

### UpdateTradeData

```csharp
public void UpdateTradeData()
```

### UpdateRecruitable

```csharp
public void UpdateRecruitable()
```

### InitializeUpgrades

```csharp
public void InitializeUpgrades()
```

### OnTransferred

```csharp
public void OnTransferred()
```

### ThrowOnPropertyChanged

```csharp
public void ThrowOnPropertyChanged()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### ExecuteSetFocused

```csharp
public void ExecuteSetFocused()
```

### ExecuteSetUnfocused

```csharp
public void ExecuteSetUnfocused()
```

### ExecuteTransferSingle

```csharp
public void ExecuteTransferSingle()
```

### ExecuteResetTrade

```csharp
public void ExecuteResetTrade()
```

### Upgrade

```csharp
public void Upgrade(int upgradeIndex, int maxUpgradeCount)
```

### FocusUpgrade

```csharp
public void FocusUpgrade(UpgradeTargetVM upgrade)
```

### RecruitAll

```csharp
public void RecruitAll()
```

### ExecuteRecruitTroop

```csharp
public void ExecuteRecruitTroop()
```

### ExecuteExecuteTroop

```csharp
public void ExecuteExecuteTroop()
```

### ExecuteOpenTroopEncyclopedia

```csharp
public void ExecuteOpenTroopEncyclopedia()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)