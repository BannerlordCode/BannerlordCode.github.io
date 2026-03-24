# PartyBase

**Namespace**: TaleWorlds.CampaignSystem.Party  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Party/PartyBase.cs`  
**Purpose**: Base class for all parties (both mobile and static settlements)

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Settlement` | `Settlement` | The settlement this party is attached to (if any) |
| `MobileParty` | `MobileParty` | The mobile party this party is attached to (if any) |
| `MemberRoster` | `TroopRoster` | Troops in this party |
| `PrisonRoster` | `TroopRoster` | Prisoners in this party |
| `ItemRoster` | `ItemRoster` | Items/goods carried by this party |
| `Position` | `CampaignVec2` | Current position on the map |
| `IsSettlement` | `bool` | True if this party is a settlement |
| `IsMobile` | `bool` | True if this party is a mobile party |
| `IsActive` | `bool` | Whether the party is active |
| `IsVisible` | `bool` | Whether the party is visible on the map |
| `Owner` | `Hero` | Owner of this party |
| `LeaderHero` | `Hero` | Leader hero of the party |
| `MapFaction` | `IFaction` | The faction this party belongs to |
| `Culture` | `CultureObject` | Culture of the party |
| `Banner` | `Banner` | Banner of the party |
| `CustomName` | `TextObject` | Custom name set for the party |
| `CustomBanner` | `Banner` | Custom banner for the party |
| `MapEvent` | `MapEvent` | Current map event (battle/raid) |
| `Side` | `BattleSideEnum` | Battle side (Attacker/Defender/None) |
| `PartySizeLimit` | `int` | Maximum party size |
| `PrisonerSizeLimit` | `int` | Maximum prisoner capacity |
| `NumberOfHealthyMembers` | `int` | Count of healthy troops |
| `NumberOfAllMembers` | `int` | Total count of all troops |
| `NumberOfPrisoners` | `int` | Total count of prisoners |
| `NumberOfMenWithHorse` | `int` | Mounted troop count |
| `EstimatedStrength` | `float` | Estimated military strength |
| `IsStarving` | `bool` | Whether party is starving |
| `DaysStarving` | `float` | Days since last food consumption |
| `Ships` | `MBReadOnlyList` | Ships belonging to this party |
| `FlagShip` | `Ship` | The flagship of naval parties |
| `MainParty` | `static PartyBase` | The player's main party |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `AddMember` | `int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)` | Add troops to party |
| `AddPrisoner` | `int AddPrisoner(CharacterObject element, int numberToAdd)` | Add prisoners |
| `AddMembers` | `void AddMembers(TroopRoster roster)` | Add multiple troops |
| `AddPrisoners` | `void AddPrisoners(TroopRoster roster)` | Add multiple prisoners |
| `WoundMemberRosterElements` | `void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)` | Wound troops |
| `SetCustomName` | `void SetCustomName(TextObject name)` | Set party custom name |
| `SetCustomBanner` | `void SetCustomBanner(Banner banner)` | Set party custom banner |
| `SetCustomOwner` | `void SetCustomOwner(Hero customOwner)` | Set party owner |
| `SetAsCameraFollowParty` | `void SetAsCameraFollowParty()` | Make this the camera-follow party |
| `UpdateVisibilityAndInspected` | `void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)` | Update visibility |
| `OnConsumedFood` | `void OnConsumedFood()` | Called when food is consumed |
| `GetNumberOfHealthyMenOfTier` | `int GetNumberOfHealthyMenOfTier(int tier)` | Get healthy troops by tier |
| `GetNumberOfMenWith` | `int GetNumberOfMenWith(TraitObject trait)` | Get troops with specific trait |
| `CalculateCurrentStrength` | `float CalculateCurrentStrength()` | Calculate actual strength |
| `GetCustomStrength` | `float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)` | Get custom strength calculation |

## Usage Example

```csharp
// Access main party
PartyBase mainParty = PartyBase.MainParty;

// Check party properties
if (mainParty.IsMobile)
{
    MobileParty mobile = mainParty.MobileParty;
    Debug.Print("Party Position: " + mobile.Position);
}

// Add troops to party
CharacterObject militiaType = Campaign.Current.ObjectManager.GetObject<CharacterObject>("town_militia");
mainParty.AddMember(militiaType, 10, 0);

// Check prisoner count
int prisoners = mainParty.NumberOfPrisoners;

// Get party strength
float strength = mainParty.EstimatedStrength;

// Set custom name
TextObject customName = new TextObject("My Custom Party");
mainParty.SetCustomName(customName);

// Check if starving
if (mainParty.IsStarving)
{
    Debug.Print("Party has been starving for " + mainParty.DaysStarving + " days");
}
```

## Inheritance

```
MBObjectBase
    └── PartyBase (sealed)
```

## Implemented Interfaces

- `IBattleCombatant` - Battle participation
- `IRandomOwner` - Random value generation
- `IInteractablePoint` - Map interaction
