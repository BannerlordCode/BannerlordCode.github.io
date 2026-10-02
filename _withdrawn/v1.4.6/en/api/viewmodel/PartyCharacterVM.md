---
title: "PartyCharacterVM"
description: "PartyCharacterVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Party, inheriting ViewModel; 82 exposed members (23 methods, 58 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyCharacterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartyCharacterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PartyCharacterVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartyCharacterVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 82 public/protected members: 23 methods, 58 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyCharacterVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party`, inheritance chain PartyCharacterVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 58/82, methods 23/82), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyCharacterVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Troops` | `public TroopRoster Troops` | property |
| `StringId` | `public string StringId` | property |
| `Troop` | `public TroopRosterElement Troop` | property |
| `Character` | `public CharacterObject Character` | property |
| `PartyCharacterVM` | `public PartyCharacterVM(PartyScreenLogic partyScreenLogic, PartyVM partyVm, TroopRoster troops, int index, PartyScreenLogic.TroopType type, PartyScreenLogic.PartyRosterSide side, bool isTroopTransferrable)` | constructor |
| `UpdateTalkable` | `public void UpdateTalkable()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSetSelected` | `public void ExecuteSetSelected()` | method |
| `ExecuteTalk` | `public void ExecuteTalk()` | method |
| `UpdateTradeData` | `public void UpdateTradeData()` | method |
| `UpdateRecruitable` | `public void UpdateRecruitable()` | method |
| `InitializeUpgrades` | `public void InitializeUpgrades()` | method |
| `OnTransferred` | `public void OnTransferred()` | method |
| `ThrowOnPropertyChanged` | `public void ThrowOnPropertyChanged()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | method |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | method |
| `ExecuteTransferSingle` | `public void ExecuteTransferSingle()` | method |
| `ExecuteResetTrade` | `public void ExecuteResetTrade()` | method |
| `Upgrade` | `public void Upgrade(int upgradeIndex, int maxUpgradeCount)` | method |
| `FocusUpgrade` | `public void FocusUpgrade(UpgradeTargetVM upgrade)` | method |
| `RecruitAll` | `public void RecruitAll()` | method |
| `ExecuteRecruitTroop` | `public void ExecuteRecruitTroop()` | method |
| `ExecuteExecuteTroop` | `public void ExecuteExecuteTroop()` | method |
| `ExecuteOpenTroopEncyclopedia` | `public void ExecuteOpenTroopEncyclopedia()` | method |
| `SetIsUpgradeButtonHighlighted` | `public void SetIsUpgradeButtonHighlighted(bool isHighlighted)` | method |
| `GetNumOfCategoryItemPartyHas` | `public int GetNumOfCategoryItemPartyHas(ItemRoster items, ItemCategory itemCategory)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `IsFormationEnabled` | `public bool IsFormationEnabled` | property |
| `TransferString` | `public string TransferString` | property |
| `IsTroopUpgradable` | `public bool IsTroopUpgradable` | property |
| `IsTroopRecruitable` | `public bool IsTroopRecruitable` | property |
| `IsRecruitablePrisoner` | `public bool IsRecruitablePrisoner` | property |
| `IsUpgradableTroop` | `public bool IsUpgradableTroop` | property |
| `IsExecutable` | `public bool IsExecutable` | property |
| `NumOfReadyToUpgradeTroops` | `public int NumOfReadyToUpgradeTroops` | property |
| `NumOfUpgradeableTroops` | `public int NumOfUpgradeableTroops` | property |
| `NumOfRecruitablePrisoners` | `public int NumOfRecruitablePrisoners` | property |
| `MaxXP` | `public int MaxXP` | property |
| `CurrentXP` | `public int CurrentXP` | property |
| `CurrentConformity` | `public int CurrentConformity` | property |
| `MaxConformity` | `public int MaxConformity` | property |
| `TroopXPTooltip` | `public BasicTooltipViewModel TroopXPTooltip` | property |
| `TroopConformityTooltip` | `public BasicTooltipViewModel TroopConformityTooltip` | property |
| `TransferHint` | `public BasicTooltipViewModel TransferHint` | property |
| `IsRecruitButtonsHiglighted` | `public bool IsRecruitButtonsHiglighted` | property |
| `IsTransferButtonHiglighted` | `public bool IsTransferButtonHiglighted` | property |
| `StrNumOfUpgradableTroop` | `public string StrNumOfUpgradableTroop` | property |
| `StrNumOfRecruitableTroop` | `public string StrNumOfRecruitableTroop` | property |
| `TroopID` | `public string TroopID` | property |
| `UpgradeCostText` | `public string UpgradeCostText` | property |
| `RecruitMoraleCostText` | `public string RecruitMoraleCostText` | property |
| `Index` | `public int Index` | property |
| `TransferAmount` | `public int TransferAmount` | property |
| `IsTroopTransferrable` | `public bool IsTroopTransferrable` | property |
| `Name` | `public string Name` | property |
| `TroopNum` | `public string TroopNum` | property |
| `IsHeroWounded` | `public bool IsHeroWounded` | property |
| `HeroHealth` | `public int HeroHealth` | property |
| `Number` | `public int Number` | property |
| `WoundedCount` | `public int WoundedCount` | property |
| `RecruitPrisonerHint` | `public BasicTooltipViewModel RecruitPrisonerHint` | property |
| `Code` | `public CharacterImageIdentifierVM Code` | property |
| `ExecutePrisonerHint` | `public BasicTooltipViewModel ExecutePrisonerHint` | property |
| `MBBindingList` | `public MBBindingList<UpgradeTargetVM>Upgrades` | property |
| `HeroHealthHint` | `public BasicTooltipViewModel HeroHealthHint` | property |
| `IsHero` | `public bool IsHero` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `IsPrisoner` | `public bool IsPrisoner` | property |
| `IsPrisonerOfPlayer` | `public bool IsPrisonerOfPlayer` | property |
| `IsHeroPrisonerOfPlayer` | `public bool IsHeroPrisonerOfPlayer` | property |
| `AnyUpgradeHasRequirement` | `public bool AnyUpgradeHasRequirement` | property |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | property |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | property |
| `HasEnoughGold` | `public bool HasEnoughGold` | property |
| `IsTalkableCharacter` | `public bool IsTalkableCharacter` | property |
| `CanTalk` | `public bool CanTalk` | property |
| `TalkHint` | `public HintViewModel TalkHint` | property |
| `TradeData` | `public PartyTradeVM TradeData` | property |
| `IsLocked` | `public bool IsLocked` | property |
| `LockHint` | `public HintViewModel LockHint` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyCompositionVM](../PartyCompositionVM/)
- [same namespace PartySortControllerVM](../PartySortControllerVM/)
- [same namespace PartyTradeVM](../PartyTradeVM/)
- [same namespace PartyVM](../PartyVM/)
