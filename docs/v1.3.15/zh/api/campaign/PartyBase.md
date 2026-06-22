<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyBase`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyBase / 派对基类

**Namespace**: TaleWorlds.CampaignSystem.Party  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Party/PartyBase.cs`  
**Purpose**: Base class for all parties (both mobile and static settlements)

## 开发用例 / Developer Use Cases

### 用例 1: 区分移动队伍与定居点

**场景**: 处理同一接口下既可能是 `MobileParty` 也可能是 `Settlement` 的对象。

```csharp
PartyBase p = someParty;
if (p.IsMobile)
{
    MobileParty mobile = p.MobileParty;
}
else if (p.IsSettlement)
{
    Settlement set = p.Settlement;
}
```

**要点**: `IsMobile` / `IsSettlement` 互斥但都不保证非空，必须配对检查 `MobileParty` 或 `Settlement` 属性。

### 用例 2: 获取队伍在地图上的位置

**场景**: 在地图行为中读取队伍坐标用于距离判断。

```csharp
CampaignVec2 pos = party.Position;
```

**要点**: `Position` 是 `CampaignVec2`（地图坐标，非 3D 世界坐标）；定居点也有此属性返回其地图位置。

### 用例 3: 添加成员或囚犯

**场景**: 招募、俘获后修改队伍名册。

```csharp
CharacterObject troop = Campaign.Current.ObjectManager.GetObject<CharacterObject>("vlandian_recruit");
party.AddMember(troop, 10);
party.AddPrisoner(capturedTroop, 5);
```

**要点**: `AddMember` / `AddPrisoner` 直接修改 `MemberRoster` / `PrisonRoster`；批量操作用 `AddMembers(TroopRoster)` 减少重算。

### 用例 4: 设置自定义队伍名

**场景**: 给玩家队伍或自定义队伍显示一个临时名称。

```csharp
party.SetCustomName(new TextObject("{=my_party}My Raiders"));
```

**要点**: `SetCustomName` 覆盖默认名称；传 `null` 可清除自定义名恢复默认。`TextObject` 支持 `{=id}` 本地化格式。

## 关键属性 / Key Properties

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

## 关键方法 / Key Methods

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

## 使用示例 / Usage Example

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

## 继承关系 / Inheritance

```
MBObjectBase
    └── PartyBase (sealed)
```

## 实现接口 / Implemented Interfaces

- `IBattleCombatant` - Battle participation
- `IRandomOwner` - Random value generation
- `IInteractablePoint` - Map interaction
