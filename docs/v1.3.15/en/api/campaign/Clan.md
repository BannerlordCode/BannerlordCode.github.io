# Clan

**Namespace**: TaleWorlds.CampaignSystem  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Clan.cs`  
**Purpose**: Represents a clan within a kingdom or as an independent faction

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Name` | `TextObject` | Clan name |
| `InformalName` | `TextObject` | Short name |
| `EncyclopediaText` | `TextObject` | Encyclopedia description |
| `EncyclopediaLink` | `string` | Encyclopedia link |
| `EncyclopediaLinkWithName` | `TextObject` | Hyperlink with name |
| `Culture` | `CultureObject` | Clan culture |
| `Kingdom` | `Kingdom` | Kingdom this clan belongs to (null if independent) |
| `Leader` | `Hero` | Clan leader |
| `Gold` | `int` | Total gold (from leader) |
| `Banner` | `Banner` | Clan banner (uses kingdom banner if ruling) |
| `ClanOriginalBanner` | `Banner` | Original clan banner |
| `DefaultPartyTemplate` | `PartyTemplateObject` | Default party template |
| `BasicTroop` | `CharacterObject` | Basic troop |
| `Tier` | `int` | Clan tier level |
| `Renown` | `float` | Clan renown |
| `Influence` | `float` | Political influence |
| `InfluenceChangeExplained` | `ExplainedNumber` | Influence change breakdown |
| `CurrentTotalStrength` | `float` | Total military strength |
| `Aggressiveness` | `float` | AI aggressiveness (0-100) |
| `HomeSettlement` | `Settlement` | Clan's home settlement |
| `InitialHomeSettlement` | `Settlement` | Initial home |
| `Fiefs` | `MBReadOnlyList` | Owned towns and castles |
| `Villages` | `MBReadOnlyList` | Bound villages |
| `Settlements` | `MBReadOnlyList` | All settlements |
| `SupporterNotables` | `MBReadOnlyList` | Supporting notables |
| `AliveLords` | `MBReadOnlyList` | Living lords |
| `DeadLords` | `MBReadOnlyList` | Dead lords |
| `Heroes` | `MBReadOnlyList` | All heroes |
| `Companions` | `MBReadOnlyList` | Companions |
| `WarPartyComponents` | `MBReadOnlyList` | War parties |
| `FactionsAtWarWith` | `MBReadOnlyList` | At war with |
| `TributeWallet` | `int` | Available tribute |
| `DebtToKingdom` | `int` | Debt to kingdom |
| `AutoRecruitmentExpenses` | `int` | Auto recruitment cost |
| `MercenaryAwardMultiplier` | `int` | Mercenary payment multiplier |
| `IsNoble` | `bool` | Is noble clan |
| `IsEliminated` | `bool` | Has been eliminated |
| `IsRebelClan` | `bool` | Is rebel clan |
| `IsMinorFaction` | `bool` | Is minor faction |
| `IsOutlaw` | `bool` | Is outlaw |
| `IsNomad` | `bool` | Is nomad |
| `IsMafia` | `bool` | Is mafia |
| `IsClanTypeMercenary` | `bool` | Is mercenary clan |
| `IsSect` | `bool` | Is sect |
| `IsUnderMercenaryService` | `bool` | Currently serving as mercenary |
| `IsBanditFaction` | `bool` | Is bandit faction |
| `IsMapFaction` | `bool` | Is map faction (no kingdom) |
| `IsClan` | `bool` | Is clan (always true) |
| `IsKingdomFaction` | `bool` | Is kingdom faction (always false) |
| `MapFaction` | `IFaction` | Kingdom or this clan |
| `FactionMidSettlement` | `Settlement` | Central settlement |
| `HasNavalNavigationCapability` | `bool` | Has naval capability |
| `MainHeroCrimeRating` | `float` | Hero crime rating |
| `DailyCrimeRatingChange` | `float` | Daily crime change |
| `DistanceToClosestNonAllyFortification` | `float` | Distance to nearest enemy fort |
| `RenownRequirementForNextTier` | `int` | Renown needed for next tier |
| `CompanionLimit` | `int` | Max companions |
| `CommanderLimit` | `int` | Max party commanders |
| `LastFactionChangeTime` | `CampaignTime` | When clan changed kingdom |
| `NotAttackableByPlayerUntilTime` | `CampaignTime` | Protection time |
| `ShouldStayInKingdomUntil` | `CampaignTime` | Mercenary contract end |
| `Color` | `uint` | Primary color |
| `Color2` | `uint` | Secondary color |
| `PlayerClan` | `static Clan` | Player's clan |
| `All` | `static MBReadOnlyList` | All clans |
| `NonBanditFactions` | `static IEnumerable` | Non-bandit clans |
| `BanditFactions` | `static IEnumerable` | Bandit clans |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `CreateClan` | `static Clan CreateClan(string stringID)` | Create new clan |
| `SetLeader` | `void SetLeader(Hero leader)` | Set clan leader |
| `ChangeClanName` | `void ChangeClanName(TextObject name, TextObject informalName)` | Change clan name |
| `SetInitialHomeSettlement` | `void SetInitialHomeSettlement(Settlement settlement)` | Set home settlement |
| `ConsiderAndUpdateHomeSettlement` | `void ConsiderAndUpdateHomeSettlement()` | Recalculate home |
| `UpdateFactionsAtWarWith` | `void UpdateFactionsAtWarWith()` | Refresh war relations |
| `UpdateCurrentStrength` | `void UpdateCurrentStrength()` | Recalculate strength |
| `GetRelationWithClan` | `int GetRelationWithClan(Clan other)` | Get relation with another clan |
| `IsAtWarWith` | `bool IsAtWarWith(IFaction other)` | Check war state |
| `GetStanceWith` | `StanceLink GetStanceWith(IFaction other)` | Get stance link |
| `ClanLeaveKingdom` | `void ClanLeaveKingdom(bool giveBackFiefs = false)` | Leave kingdom |
| `StartMercenaryService` | `void StartMercenaryService()` | Become mercenary |
| `EndMercenaryService` | `void EndMercenaryService(bool isByLeavingKingdom)` | End mercenary service |
| `ResetPlayerHomeAndFactionMidSettlement` | `void ResetPlayerHomeAndFactionMidSettlement()` | Reset home |
| `CalculateTotalSettlementBaseValue` | `float CalculateTotalSettlementBaseValue()` | Calculate settlement worth |
| `CalculateTotalSettlementValueForFaction` | `float CalculateTotalSettlementValueForFaction(Kingdom kingdom)` | Calculate value for kingdom |
| `OnFortificationAdded` | `internal void OnFortificationAdded(Town settlement)` | When fief gained |
| `OnFortificationRemoved` | `internal void OnFortificationRemoved(Town settlement)` | When fief lost |
| `OnHeroChangedState` | `public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)` | When hero state changes |
| `OnCompanionAdded` | `internal void OnCompanionAdded(Hero companion)` | When companion joins |
| `OnCompanionRemoved` | `internal void OnCompanionRemoved(Hero companion)` | When companion leaves |
| `FindFirst` | `static Clan FindFirst(Predicate predicate)` | Find clan by predicate |
| `FindAll` | `static IEnumerable FindAll(Predicate predicate)` | Find all matching clans |

## Usage Example

```csharp
// Access player clan
Clan playerClan = Clan.PlayerClan;

// Check clan info
Debug.Print("Clan: " + playerClan.Name);
Debug.Print("Tier: " + playerClan.Tier);
Debug.Print("Renown: " + playerClan.Renown);
Debug.Print("Gold: " + playerClan.Gold);
Debug.Print("Influence: " + playerClan.Influence);

// Check leader
Hero leader = playerClan.Leader;
if (leader != null)
{
    Debug.Print("Leader: " + leader.Name);
}

// Check kingdom membership
Kingdom kingdom = playerClan.Kingdom;
if (kingdom != null)
{
    Debug.Print("Kingdom: " + kingdom.Name);
}

// Check settlements
foreach (Town town in playerClan.Fiefs)
{
    Debug.Print("  Town: " + town.Name);
}

// Check party strength
float strength = playerClan.CurrentTotalStrength;

// Check companion count
int companions = playerClan.Companions.Count;

// Get relation with another clan
int relation = playerClan.GetRelationWithClan(otherClan);

// Create a new clan
Clan newClan = Clan.CreateClan("my_clan");
newClan.ChangeClanName(
    new TextObject("My Clan"),
    new TextObject("MyClan")
);
newClan.SetLeader(hero);
newClan.Culture = culture;
newClan.Kingdom = targetKingdom;
```

## Inheritance

```
MBObjectBase
    └── Clan (sealed)
        └── IFaction
```

## Implemented Interfaces

- `IFaction` - Faction interface
