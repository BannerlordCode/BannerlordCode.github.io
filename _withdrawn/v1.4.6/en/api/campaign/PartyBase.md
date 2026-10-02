---
title: "PartyBase"
description: "PartyBase: a public class in TaleWorlds.CampaignSystem.Party, inheriting IBattleCombatant, IRandomOwner; 86 exposed members (27 methods, 57 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Party/PartyBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyBase

**Namespace:** `TaleWorlds.CampaignSystem.Party`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Party/PartyBase.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

PartyBase lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Party/PartyBase.cs. It is a public class (sealed), implementing/inheriting IBattleCombatant, IRandomOwner, IInteractablePoint; the inheritance chain is PartyBase → IBattleCombatant. It exposes 86 public/protected members: 27 methods, 57 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyBase lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Party`, inheritance chain PartyBase → IBattleCombatant. The surface is property-led (properties 57/86, methods 27/86), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Party/PartyBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Position` | `public CampaignVec2 Position` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `IsActive` | `public bool IsActive` | property |
| `SiegeEvent` | `public SiegeEvent SiegeEvent` | property |
| `OnVisibilityChanged` | `public void OnVisibilityChanged(bool value)` | method |
| `Settlement` | `public Settlement Settlement` | property |
| `MobileParty` | `public MobileParty MobileParty` | property |
| `IsSettlement` | `public bool IsSettlement` | property |
| `IsMobile` | `public bool IsMobile` | property |
| `MemberRoster` | `public TroopRoster MemberRoster` | property |
| `PrisonRoster` | `public TroopRoster PrisonRoster` | property |
| `ItemRoster` | `public ItemRoster ItemRoster` | property |
| `Name` | `public TextObject Name` | property |
| `DaysStarving` | `public float DaysStarving` | property |
| `OnConsumedFood` | `public void OnConsumedFood()` | method |
| `RemainingFoodPercentage` | `public int RemainingFoodPercentage` | property |
| `IsStarving` | `public bool IsStarving` | property |
| `Id` | `public string Id` | property |
| `HealingRateForMemberRegulars` | `public float HealingRateForMemberRegulars` | property |
| `HealingRateForMemberRegularsExplained` | `public ExplainedNumber HealingRateForMemberRegularsExplained` | property |
| `HealingRateForMemberHeroes` | `public float HealingRateForMemberHeroes` | property |
| `HealingRateForMemberHeroesExplained` | `public ExplainedNumber HealingRateForMemberHeroesExplained` | property |
| `Owner` | `public Hero Owner` | property |
| `SetCustomOwner` | `public void SetCustomOwner(Hero customOwner)` | method |
| `LeaderHero` | `public Hero LeaderHero` | property |
| `MainParty` | `public static PartyBase MainParty` | property |
| `IsPartyUnderPlayerCommand` | `public static bool IsPartyUnderPlayerCommand(PartyBase party)` | method |
| `LevelMaskIsDirty` | `public bool LevelMaskIsDirty` | property |
| `SetLevelMaskIsDirty` | `public void SetLevelMaskIsDirty()` | method |
| `OnLevelMaskUpdated` | `public void OnLevelMaskUpdated()` | method |
| `Index` | `public int Index` | property |
| `IsValid` | `public bool IsValid` | property |
| `MapFaction` | `public IFaction MapFaction` | property |
| `RandomValue` | `public int RandomValue` | property |
| `Culture` | `public CultureObject Culture` | property |
| `uint>PrimaryColorPair` | `public Tuple<uint, uint>PrimaryColorPair` | property |
| `CustomName` | `public TextObject CustomName` | property |
| `SetCustomName` | `public void SetCustomName(TextObject name)` | method |
| `CustomBanner` | `public Banner CustomBanner` | property |
| `Banner` | `public Banner Banner` | property |
| `MapEvent` | `public MapEvent MapEvent` | property |
| `MapEventSide` | `public MapEventSide MapEventSide` | property |
| `Side` | `public BattleSideEnum Side` | property |
| `OpponentSide` | `public BattleSideEnum OpponentSide` | property |
| `SetCustomBanner` | `public void SetCustomBanner(Banner banner)` | method |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand(BattleSideEnum playerSide)` | method |
| `PartySizeLimit` | `public int PartySizeLimit` | property |
| `PrisonerSizeLimit` | `public int PrisonerSizeLimit` | property |
| `PartySizeLimitExplainer` | `public ExplainedNumber PartySizeLimitExplainer` | property |
| `PrisonerSizeLimitExplainer` | `public ExplainedNumber PrisonerSizeLimitExplainer` | property |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers` | property |
| `NumberOfRegularMembers` | `public int NumberOfRegularMembers` | property |
| `NumberOfWoundedTotalMembers` | `public int NumberOfWoundedTotalMembers` | property |
| `NumberOfAllMembers` | `public int NumberOfAllMembers` | property |
| `NumberOfPrisoners` | `public int NumberOfPrisoners` | property |
| `NumberOfMounts` | `public int NumberOfMounts` | property |
| `NumberOfPackAnimals` | `public int NumberOfPackAnimals` | property |
| `IEnumerable` | `public IEnumerable<CharacterObject>PrisonerHeroes` | property |
| `NumberOfMenWithHorse` | `public int NumberOfMenWithHorse` | property |
| `NumberOfMenWithoutHorse` | `public int NumberOfMenWithoutHorse` | property |
| `GetNumberOfHealthyMenOfTier` | `public int GetNumberOfHealthyMenOfTier(int tier)` | method |
| `EstimatedStrength` | `public float EstimatedStrength` | property |
| `CalculateCurrentStrength` | `public float CalculateCurrentStrength()` | method |
| `GetCustomStrength` | `public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)` | method |
| `PartyBase` | `public PartyBase(MobileParty mobileParty) : this(mobileParty, null)` | constructor |
| `PartyBase` | `public PartyBase(Settlement settlement) : this(null, settlement)` | constructor |
| `MBReadOnlyList` | `public MBReadOnlyList<Ship>Ships` | property |
| `FlagShip` | `public Ship FlagShip` | property |
| `GetShipsVersion` | `public int GetShipsVersion()` | method |
| `GetNumberOfMenWith` | `public int GetNumberOfMenWith(TraitObject trait)` | method |
| `AddPrisoner` | `public int AddPrisoner(CharacterObject element, int numberToAdd)` | method |
| `AddMember` | `public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)` | method |
| `AddPrisoners` | `public void AddPrisoners(TroopRoster roster)` | method |
| `AddMembers` | `public void AddMembers(TroopRoster roster)` | method |
| `ToString` | `public override string ToString()` | method |
| `AddElementToMemberRoster` | `public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)` | method |
| `AddToMemberRosterElementAtIndex` | `public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)` | method |
| `WoundMemberRosterElements` | `public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)` | method |
| `WoundMemberRosterElementsWithIndex` | `public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)` | method |
| `UpdateVisibilityAndInspected` | `public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)` | method |
| `BasicCulture` | `public BasicCultureObject BasicCulture` | property |
| `General` | `public BasicCharacterObject General` | property |
| `SetAsCameraFollowParty` | `public void SetAsCameraFollowParty()` | method |
| `IsVisualDirty` | `public bool IsVisualDirty` | property |
| `SetVisualAsDirty` | `public void SetVisualAsDirty()` | method |
| `OnVisualsUpdated` | `public void OnVisualsUpdated()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IBattleCombatant](../../core-extra/IBattleCombatant/)
- [base / interface IRandomOwner](../IRandomOwner/)
- [base / interface IInteractablePoint](../IInteractablePoint/)
- [same namespace AiBehavior](../AiBehavior/)
- [same namespace CanTalkToHeroDelegate](../CanTalkToHeroDelegate/)
- [same namespace IsTroopTransferableDelegate](../IsTroopTransferableDelegate/)
- [same namespace MobileParty](../MobileParty/)
