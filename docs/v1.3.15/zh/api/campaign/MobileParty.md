# MobileParty / 移动派对

**Namespace**: TaleWorlds.CampaignSystem.Party  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Party/MobileParty.cs`  
**Purpose**: Moving parties on the map (armies, caravans, villagers, etc.)

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `MainParty` | `static MobileParty` | Player's main party |
| `All` | `static MBReadOnlyList` | All mobile parties |
| `AllCaravanParties` | `static MBReadOnlyList` | All caravan parties |
| `AllPatrolParties` | `static MBReadOnlyList` | All patrol parties |
| `AllBanditParties` | `static MBReadOnlyList` | All bandit parties |
| `AllLordParties` | `static MBReadOnlyList` | All lord parties |
| `AllGarrisonParties` | `static MBReadOnlyList` | All garrison parties |
| `AllMilitiaParties` | `static MBReadOnlyList` | All militia parties |
| `AllVillagerParties` | `static MBReadOnlyList` | All villager parties |
| `AllCustomParties` | `static MBReadOnlyList` | All custom parties |
| `Party` | `PartyBase` | The party's party base |
| `Name` | `TextObject` | Party name |
| `Position` | `CampaignVec2` | Current map position |
| `TargetPosition` | `CampaignVec2` | Target position for movement |
| `Speed` | `float` | Current movement speed |
| `SpeedExplained` | `ExplainedNumber` | Speed breakdown |
| `IsActive` | `bool` | Whether party is active |
| `CurrentSettlement` | `Settlement` | Settlement party is currently in |
| `HomeSettlement` | `Settlement` | Home settlement for the party |
| `LastVisitedSettlement` | `Settlement` | Last settlement visited |
| `Army` | `Army` | Army this party belongs to |
| `AttachedTo` | `MobileParty` | Party this is attached to |
| `AttachedParties` | `MBReadOnlyList` | Parties attached to this |
| `LeaderHero` | `Hero` | The hero leading this party |
| `Owner` | `Hero` | Owner of the party |
| `Ai` | `MobilePartyAi` | AI behavior for the party |
| `ShortTermBehavior` | `AiBehavior` | Current AI behavior |
| `DefaultBehavior` | `AiBehavior` | Default AI behavior |
| `ShortTermTargetParty` | `MobileParty` | Short-term target party |
| `ShortTermTargetSettlement` | `Settlement` | Short-term target settlement |
| `TargetSettlement` | `Settlement` | Target settlement |
| `BesiegerCamp` | `BesiegerCamp` | Besieger camp if besieging |
| `Banner` | `Banner` | Party banner |
| `Scout` | `Hero` | Scout hero |
| `Engineer` | `Hero` | Engineer hero |
| `Quartermaster` | `Hero` | Quartermaster hero |
| `Surgeon` | `Hero` | Surgeon hero |
| `EffectiveScout` | `Hero` | Effective scout (or leader) |
| `EffectiveEngineer` | `Hero` | Effective engineer |
| `EffectiveQuartermaster` | `Hero` | Effective quartermaster |
| `EffectiveSurgeon` | `Hero` | Effective surgeon |
| `IsDisbanding` | `bool` | Whether party is disbanding |
| `IsDisorganized` | `bool` | Whether party is disorganized |
| `IsCurrentlyAtSea` | `bool` | Whether party is at sea |
| `IsTransitionInProgress` | `bool` | Navigation transition in progress |
| `IsTargetingPort` | `bool` | Whether targeting a port |
| `NavigationCapability` | `NavigationType` | Land/naval capability |
| `HasLandNavigationCapability` | `bool` | Can travel by land |
| `HasNavalNavigationCapability` | `bool` | Can travel by sea |
| `Ships` | `MBReadOnlyList` | Ships this party has |
| `Aggressiveness` | `float` | AI aggressiveness (0-100) |
| `StationaryStartTime` | `CampaignTime` | When party became stationary |
| `DisorganizedUntilTime` | `CampaignTime` | When disorganization ends |
| `NavigationTransitionDuration` | `CampaignTime` | Duration of navigation transition |
| `PartyTradeGold` | `int` | Trade gold |
| `PartyTradeTaxGold` | `int` | Trade tax gold |
| `IsPartyTradeActive` | `bool` | Whether party trade is active |

## 关键方法 / Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `SetPartyScout` | `void SetPartyScout(Hero hero)` | Set party scout |
| `SetPartyEngineer` | `void SetPartyEngineer(Hero hero)` | Set party engineer |
| `SetPartyQuartermaster` | `void SetPartyQuartermaster(Hero hero)` | Set party quartermaster |
| `SetPartySurgeon` | `void SetPartySurgeon(Hero hero)` | Set party surgeon |
| `RemoveHeroPartyRole` | `void RemoveHeroPartyRole(Hero hero)` | Remove hero role |
| `SetTargetSettlement` | `void SetTargetSettlement(Settlement settlement, bool isTargetingPort)` | Set target settlement |
| `SetMoveModeHold` | `void SetMoveModeHold()` | Stop party movement |
| `SetMoveModeHoldWithDistance` | `void SetMoveModeHoldWithDistance(float distance)` | Hold at distance |
| `SetMoveMode raid` | `void SetMoveModeRaid()` | Set to raid mode |
| `SetMoveMode` | `void SetMoveMode(...)` | Set movement mode |
| `SetWagePaymentLimit` | `void SetWagePaymentLimit(int newLimit)` | Set wage limit |
| `SetLandNavigationAccess` | `void SetLandNavigationAccess(bool access)` | Set land navigation |
| `SetSailAtPosition` | `void SetSailAtPosition(CampaignVec2 position)` | Set sail position |
| `CancelNavigationTransition` | `void CancelNavigationTransition()` | Cancel transition |
| `ComputePath` | `void ComputePath(...)` | Compute path to target |
| `OnPartyInteraction` | `void OnPartyInteraction(MobileParty engagingParty)` | Handle party interaction |
| `AddPartyToMapEvent` | `void AddPartyToMapEvent(MapEvent mapEvent, BattleSideEnum side)` | Add to battle |
| `RemovePartyFromMapEvent` | `void RemovePartyFromMapEvent()` | Remove from battle |

## 使用示例 / Usage Example

```csharp
// Get main party
MobileParty mainParty = MobileParty.MainParty;

// Check position and speed
Vec2 position = mainParty.Position;
float speed = mainParty.Speed;
Debug.Print("Moving at " + speed + " speed toward " + mainParty.TargetPosition);

// Set AI behavior
mainParty.DefaultBehavior = AiBehavior.RaidSettlement;
mainParty.SetTargetSettlement(targetTown, false);

// Check party members
Hero leader = mainParty.LeaderHero;
int troopCount = mainParty.Party.NumberOfAllMembers;

// Assign roles
Hero surgeon = mainParty.LeaderHero;
mainParty.SetPartySurgeon(surgeon);

// Check attached parties
int attachedCount = mainParty.AttachedParties.Count;

// Set home settlement
mainParty.SetCustomHomeSettlement(homeTown);

// Check army status
if (mainParty.Army != null)
{
    Debug.Print("Party is in army led by: " + mainParty.Army.LeaderParty.Name);
}

// Naval operations
if (mainParty.HasNavalNavigationCapability)
{
    mainParty.SetSailAtPosition(targetPosition);
}
```

## 继承关系 / Inheritance

```
CampaignObjectBase
    └── MobileParty (sealed)
```

## 嵌套类型 / Nested Types

| Type | Description |
|------|-------------|
| `NavigationType` | Flags: None, Default, Naval |
| `PartyObjective` | Party objective enum |
