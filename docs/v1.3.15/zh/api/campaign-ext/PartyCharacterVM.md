<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyCharacterVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyCharacterVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyCharacterVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)