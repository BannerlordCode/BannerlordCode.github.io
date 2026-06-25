---
title: "PartyCharacterVM"
description: "PartyCharacterVM 的自动生成类参考。"
---
# PartyCharacterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyCharacterVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs`

## 概述

`PartyCharacterVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `TransferHint` | `public BasicTooltipViewModel TransferHint { get; set; }` |
| `IsRecruitButtonsHiglighted` | `public bool IsRecruitButtonsHiglighted { get; set; }` |
| `IsTransferButtonHiglighted` | `public bool IsTransferButtonHiglighted { get; set; }` |
| `StrNumOfUpgradableTroop` | `public string StrNumOfUpgradableTroop { get; set; }` |
| `StrNumOfRecruitableTroop` | `public string StrNumOfRecruitableTroop { get; set; }` |
| `TroopID` | `public string TroopID { get; set; }` |
| `UpgradeCostText` | `public string UpgradeCostText { get; set; }` |
| `RecruitMoraleCostText` | `public string RecruitMoraleCostText { get; set; }` |
| `Index` | `public int Index { get; set; }` |
| `TransferAmount` | `public int TransferAmount { get; set; }` |
| `IsTroopTransferrable` | `public bool IsTroopTransferrable { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TroopNum` | `public string TroopNum { get; }` |
| `IsHeroWounded` | `public bool IsHeroWounded { get; }` |
| `HeroHealth` | `public int HeroHealth { get; }` |
| `Number` | `public int Number { get; }` |
| `WoundedCount` | `public int WoundedCount { get; }` |
| `RecruitPrisonerHint` | `public BasicTooltipViewModel RecruitPrisonerHint { get; set; }` |
| `Code` | `public CharacterImageIdentifierVM Code { get; set; }` |
| `ExecutePrisonerHint` | `public BasicTooltipViewModel ExecutePrisonerHint { get; set; }` |
| `Upgrades` | `public MBBindingList<UpgradeTargetVM> Upgrades { get; set; }` |
| `HeroHealthHint` | `public BasicTooltipViewModel HeroHealthHint { get; set; }` |
| `IsHero` | `public bool IsHero { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsPrisoner` | `public bool IsPrisoner { get; set; }` |
| `IsPrisonerOfPlayer` | `public bool IsPrisonerOfPlayer { get; set; }` |
| `IsHeroPrisonerOfPlayer` | `public bool IsHeroPrisonerOfPlayer { get; set; }` |
| `AnyUpgradeHasRequirement` | `public bool AnyUpgradeHasRequirement { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |
| `HasEnoughGold` | `public bool HasEnoughGold { get; set; }` |
| `IsTalkableCharacter` | `public bool IsTalkableCharacter { get; set; }` |
| `CanTalk` | `public bool CanTalk { get; set; }` |
| `TalkHint` | `public HintViewModel TalkHint { get; set; }` |
| `TradeData` | `public PartyTradeVM TradeData { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### UpdateTalkable
`public void UpdateTalkable()`

**用途 / Purpose:** 重新计算并更新 talkable 的最新表示。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateTalkable();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.RefreshValues();
```

### ExecuteSetSelected
`public void ExecuteSetSelected()`

**用途 / Purpose:** 执行 set selected 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteSetSelected();
```

### ExecuteTalk
`public void ExecuteTalk()`

**用途 / Purpose:** 执行 talk 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteTalk();
```

### UpdateTradeData
`public void UpdateTradeData()`

**用途 / Purpose:** 重新计算并更新 trade data 的最新表示。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateTradeData();
```

### UpdateRecruitable
`public void UpdateRecruitable()`

**用途 / Purpose:** 重新计算并更新 recruitable 的最新表示。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateRecruitable();
```

### InitializeUpgrades
`public void InitializeUpgrades()`

**用途 / Purpose:** 为 upgrades 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.InitializeUpgrades();
```

### OnTransferred
`public void OnTransferred()`

**用途 / Purpose:** 在 transferred 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.OnTransferred();
```

### ThrowOnPropertyChanged
`public void ThrowOnPropertyChanged()`

**用途 / Purpose:** 调用 ThrowOnPropertyChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ThrowOnPropertyChanged();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
var result = partyCharacterVM.Equals(obj);
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 set focused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 set unfocused 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteSetUnfocused();
```

### ExecuteTransferSingle
`public void ExecuteTransferSingle()`

**用途 / Purpose:** 执行 transfer single 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteTransferSingle();
```

### ExecuteResetTrade
`public void ExecuteResetTrade()`

**用途 / Purpose:** 执行 reset trade 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteResetTrade();
```

### Upgrade
`public void Upgrade(int upgradeIndex, int maxUpgradeCount)`

**用途 / Purpose:** 调用 Upgrade 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.Upgrade(0, 0);
```

### FocusUpgrade
`public void FocusUpgrade(UpgradeTargetVM upgrade)`

**用途 / Purpose:** 调用 FocusUpgrade 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.FocusUpgrade(upgrade);
```

### RecruitAll
`public void RecruitAll()`

**用途 / Purpose:** 调用 RecruitAll 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.RecruitAll();
```

### ExecuteRecruitTroop
`public void ExecuteRecruitTroop()`

**用途 / Purpose:** 执行 recruit troop 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteRecruitTroop();
```

### ExecuteExecuteTroop
`public void ExecuteExecuteTroop()`

**用途 / Purpose:** 执行 execute troop 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteExecuteTroop();
```

### ExecuteOpenTroopEncyclopedia
`public void ExecuteOpenTroopEncyclopedia()`

**用途 / Purpose:** 执行 open troop encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.ExecuteOpenTroopEncyclopedia();
```

### SetIsUpgradeButtonHighlighted
`public void SetIsUpgradeButtonHighlighted(bool isHighlighted)`

**用途 / Purpose:** 为 is upgrade button highlighted 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.SetIsUpgradeButtonHighlighted(false);
```

### GetNumOfCategoryItemPartyHas
`public int GetNumOfCategoryItemPartyHas(ItemRoster items, ItemCategory itemCategory)`

**用途 / Purpose:** 读取并返回当前对象中 num of category item party has 的结果。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
var result = partyCharacterVM.GetNumOfCategoryItemPartyHas(items, itemCategory);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 PartyCharacterVM 实例
PartyCharacterVM partyCharacterVM = ...;
var result = partyCharacterVM.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyCharacterVM partyCharacterVM = ...;
partyCharacterVM.UpdateTalkable();
```

## 参见

- [本区域目录](../)