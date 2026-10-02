---
title: "PartyCharacterVM"
description: "PartyCharacterVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 82 个（方法 23、属性 58、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs。"
---
# PartyCharacterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyCharacterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs`

## 概述

PartyCharacterVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PartyCharacterVM → ViewModel。public/protected 成员共 82 个：23 方法、58 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyCharacterVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.Party），继承链 PartyCharacterVM → ViewModel。成员构成以属性为主（属性 58/82，方法 23/82），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Troops` | `public TroopRoster Troops` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `Troop` | `public TroopRosterElement Troop` | 属性 |
| `Character` | `public CharacterObject Character` | 属性 |
| `PartyCharacterVM` | `public PartyCharacterVM(PartyScreenLogic partyScreenLogic, PartyVM partyVm, TroopRoster troops, int index, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, bool isTroopTransferrable)` | 构造函数 |
| `UpdateTalkable` | `public void UpdateTalkable()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteSetSelected` | `public void ExecuteSetSelected()` | 方法 |
| `ExecuteTalk` | `public void ExecuteTalk()` | 方法 |
| `UpdateTradeData` | `public void UpdateTradeData()` | 方法 |
| `UpdateRecruitable` | `public void UpdateRecruitable()` | 方法 |
| `InitializeUpgrades` | `public void InitializeUpgrades()` | 方法 |
| `OnTransferred` | `public void OnTransferred()` | 方法 |
| `ThrowOnPropertyChanged` | `public void ThrowOnPropertyChanged()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | 方法 |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | 方法 |
| `ExecuteTransferSingle` | `public void ExecuteTransferSingle()` | 方法 |
| `ExecuteResetTrade` | `public void ExecuteResetTrade()` | 方法 |
| `Upgrade` | `public void Upgrade(int upgradeIndex, int maxUpgradeCount)` | 方法 |
| `FocusUpgrade` | `public void FocusUpgrade(UpgradeTargetVM upgrade)` | 方法 |
| `RecruitAll` | `public void RecruitAll()` | 方法 |
| `ExecuteRecruitTroop` | `public void ExecuteRecruitTroop()` | 方法 |
| `ExecuteExecuteTroop` | `public void ExecuteExecuteTroop()` | 方法 |
| `ExecuteOpenTroopEncyclopedia` | `public void ExecuteOpenTroopEncyclopedia()` | 方法 |
| `SetIsUpgradeButtonHighlighted` | `public void SetIsUpgradeButtonHighlighted(bool isHighlighted)` | 方法 |
| `GetNumOfCategoryItemPartyHas` | `public int GetNumOfCategoryItemPartyHas(ItemRoster items, ItemCategory itemCategory)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `IsFormationEnabled` | `public bool IsFormationEnabled` | 属性 |
| `TransferString` | `public string TransferString` | 属性 |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable` | 属性 |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable` | 属性 |
| `IsRecruitablePrisoner` | `public bool IsRecruitablePrisoner` | 属性 |
| `IsUpgradableTroop` | `public bool IsUpgradableTroop` | 属性 |
| `IsExecutable` | `public bool IsExecutable` | 属性 |
| `NumOfReadyToUpgradeTroops` | `public int NumOfReadyToUpgradeTroops` | 属性 |
| `NumOfUpgradeableTroops` | `public int NumOfUpgradeableTroops` | 属性 |
| `NumOfRecruitablePrisoners` | `public int NumOfRecruitablePrisoners` | 属性 |
| `MaxXP` | `public int MaxXP` | 属性 |
| `CurrentXP` | `public int CurrentXP` | 属性 |
| `CurrentConformity` | `public int CurrentConformity` | 属性 |
| `MaxConformity` | `public int MaxConformity` | 属性 |
| `TroopXPTooltip` | `public BasicTooltipViewModel TroopXPTooltip` | 属性 |
| `TroopConformityTooltip` | `public BasicTooltipViewModel TroopConformityTooltip` | 属性 |
| `TransferHint` | `public BasicTooltipViewModel TransferHint` | 属性 |
| `IsRecruitButtonsHiglighted` | `public bool IsRecruitButtonsHiglighted` | 属性 |
| `IsTransferButtonHiglighted` | `public bool IsTransferButtonHiglighted` | 属性 |
| `StrNumOfUpgradableTroop` | `public string StrNumOfUpgradableTroop` | 属性 |
| `StrNumOfRecruitableTroop` | `public string StrNumOfRecruitableTroop` | 属性 |
| `TroopID` | `public string TroopID` | 属性 |
| `UpgradeCostText` | `public string UpgradeCostText` | 属性 |
| `RecruitMoraleCostText` | `public string RecruitMoraleCostText` | 属性 |
| `Index` | `public int Index` | 属性 |
| `TransferAmount` | `public int TransferAmount` | 属性 |
| `IsTroopTransferrable` | `public bool IsTroopTransferrable` | 属性 |
| `Name` | `public string Name` | 属性 |
| `TroopNum` | `public string TroopNum` | 属性 |
| `IsHeroWounded` | `public bool IsHeroWounded` | 属性 |
| `HeroHealth` | `public int HeroHealth` | 属性 |
| `Number` | `public int Number` | 属性 |
| `WoundedCount` | `public int WoundedCount` | 属性 |
| `RecruitPrisonerHint` | `public BasicTooltipViewModel RecruitPrisonerHint` | 属性 |
| `Code` | `public CharacterImageIdentifierVM Code` | 属性 |
| `ExecutePrisonerHint` | `public BasicTooltipViewModel ExecutePrisonerHint` | 属性 |
| `MBBindingList` | `public MBBindingList<UpgradeTargetVM>Upgrades` | 属性 |
| `HeroHealthHint` | `public BasicTooltipViewModel HeroHealthHint` | 属性 |
| `IsHero` | `public bool IsHero` | 属性 |
| `IsMainHero` | `public bool IsMainHero` | 属性 |
| `IsPrisoner` | `public bool IsPrisoner` | 属性 |
| `IsPrisonerOfPlayer` | `public bool IsPrisonerOfPlayer` | 属性 |
| `IsHeroPrisonerOfPlayer` | `public bool IsHeroPrisonerOfPlayer` | 属性 |
| `AnyUpgradeHasRequirement` | `public bool AnyUpgradeHasRequirement` | 属性 |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | 属性 |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | 属性 |
| `HasEnoughGold` | `public bool HasEnoughGold` | 属性 |
| `IsTalkableCharacter` | `public bool IsTalkableCharacter` | 属性 |
| `CanTalk` | `public bool CanTalk` | 属性 |
| `TalkHint` | `public HintViewModel TalkHint` | 属性 |
| `TradeData` | `public PartyTradeVM TradeData` | 属性 |
| `IsLocked` | `public bool IsLocked` | 属性 |
| `LockHint` | `public HintViewModel LockHint` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyCompositionVM](../PartyCompositionVM)
- [同命名空间 PartySortControllerVM](../PartySortControllerVM)
- [同命名空间 PartyTradeVM](../PartyTradeVM)
- [同命名空间 PartyVM](../PartyVM)
