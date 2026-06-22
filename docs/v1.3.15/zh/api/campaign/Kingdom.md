<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Kingdom`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/Kingdom](/versions/Kingdom)
<!-- END BREADCRUMB -->
# Kingdom / 王国

**Namespace**: TaleWorlds.CampaignSystem  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Kingdom.cs`  
**Purpose**: Represents a kingdom faction in the game

## 开发用例 / Developer Use Cases

### 用例 1: 获取某家族所属王国

**场景**: 判断玩家或某家族当前效忠哪个王国。

```csharp
Clan playerClan = Clan.PlayerClan;
Kingdom kingdom = playerClan.Kingdom; // 独立家族为 null
if (kingdom != null)
{
    Hero ruler = kingdom.Leader;
}
```

**要点**: 独立家族（包括匪盗）`Kingdom` 为 `null`；`Leader` 是当前统治者，`RulingClan` 是统治家族。

### 用例 2: 创建新王国并初始化

**场景**: 玩家自立或剧情需要新建王国。

```csharp
Kingdom newKingdom = Kingdom.CreateKingdom("my_kingdom");
newKingdom.InitializeKingdom(
    new TextObject("My Kingdom"),
    new TextObject("MyKingdom"),
    culture,
    banner,
    0xFF0000FF, 0xFFFFFFFF,
    homeSettlement,
    new TextObject("Description"),
    new TextObject("My Kingdom"),
    new TextObject("King"));
newKingdom.RulingClan = myClan;
```

**要点**: `CreateKingdom` 只创建空壳，必须紧跟 `InitializeKingdom` 填充元数据；不设置 `RulingClan` 会导致后续政治计算异常。

### 用例 3: 列出所有王国与外交状态

**场景**: 遍历全部王国，找出与玩家处于战争状态的势力。

```csharp
foreach (Kingdom k in Kingdom.All)
{
    if (k.IsAtWarWith(Clan.PlayerClan))
    {
        float strength = k.CurrentTotalStrength;
    }
}
```

**要点**: `Kingdom.All` 是静态只读列表；`IsAtWarWith` 接受 `IFaction`，可与 `Clan` 直接比较；战争状态由 `StanceLink` 维护，必要时调用 `UpdateFactionsAtWarWith()` 刷新。

### 用例 4: 管理王国政策

**场景**: 启用或停用某项王国政策。

```csharp
if (!kingdom.HasPolicy(somePolicy))
{
    kingdom.AddPolicy(somePolicy);
}
```

**要点**: `AddPolicy` / `RemovePolicy` 会立即影响影响力等派生计算；用 `HasPolicy` 避免重复添加。

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Name` | `TextObject` | Kingdom name |
| `InformalName` | `TextObject` | Short/informal name |
| `EncyclopediaText` | `TextObject` | Encyclopedia description |
| `EncyclopediaTitle` | `TextObject` | Encyclopedia page title |
| `EncyclopediaRulerTitle` | `TextObject` | Title of the ruler |
| `EncyclopediaLink` | `string` | Encyclopedia link identifier |
| `EncyclopediaLinkWithName` | `TextObject` | Hyperlink with name |
| `Culture` | `CultureObject` | Kingdom culture |
| `InitialHomeSettlement` | `Settlement` | Starting settlement |
| `Color` | `uint` | Primary color |
| `Color2` | `uint` | Secondary color |
| `PrimaryBannerColor` | `uint` | Primary banner color |
| `SecondaryBannerColor` | `uint` | Secondary banner color |
| `Banner` | `Banner` | Kingdom banner |
| `Leader` | `Hero` | Current ruler/leader |
| `RulingClan` | `Clan` | The ruling clan |
| `Clans` | `MBReadOnlyList` | All clans in kingdom |
| `Armies` | `MBReadOnlyList` | Active armies |
| `AllParties` | `IEnumerable` | All parties belonging to kingdom |
| `Fiefs` | `MBReadOnlyList` | Owned towns and castles |
| `Villages` | `MBReadOnlyList` | Bound villages |
| `Settlements` | `MBReadOnlyList` | All settlements |
| `Heroes` | `MBReadOnlyList` | All heroes in kingdom |
| `AliveLords` | `MBReadOnlyList` | Living lords |
| `DeadLords` | `MBReadOnlyList` | Dead lords |
| `WarPartyComponents` | `MBReadOnlyList` | War parties |
| `UnresolvedDecisions` | `MBReadOnlyList` | Pending decisions |
| `ActivePolicies` | `IList` | Current policies |
| `FactionsAtWarWith` | `MBReadOnlyList` | At war with |
| `AlliedKingdoms` | `MBReadOnlyList` | Allied kingdoms |
| `CurrentTotalStrength` | `float` | Total military strength |
| `FactionMidSettlement` | `Settlement` | Central settlement |
| `IsMapFaction` | `bool` | Is a map faction (always true for Kingdom) |
| `IsBanditFaction` | `bool` | Is bandit faction |
| `IsMinorFaction` | `bool` | Is minor faction |
| `IsRebelClan` | `bool` | Is rebel clan |
| `IsClan` | `bool` | Is clan (always false for Kingdom) |
| `IsOutlaw` | `bool` | Is outlaw faction |
| `IsEliminated` | `bool` | Has been eliminated |
| `IsKingdomFaction` | `bool` | Is kingdom faction (always true) |
| `MapFaction` | `IFaction` | Returns this kingdom |
| `LastArmyCreationDay` | `int` | Last day an army was created |
| `LastKingdomDecisionConclusionDate` | `CampaignTime` | Last decision conclusion |
| `LastMercenaryOfferTime` | `CampaignTime` | Last mercenary offer |
| `NotAttackableByPlayerUntilTime` | `CampaignTime` | Protection from player |
| `Aggressiveness` | `float` | Kingdom aggressiveness (0-100) |
| `TributeWallet` | `int` | Available tribute gold |
| `KingdomBudgetWallet` | `int` | Kingdom budget |
| `CallToWarWallet` | `int` | War fund |
| `MercenaryWallet` | `int` | Mercenary payment fund |
| `PoliticalStagnation` | `int` | Political stagnation level |
| `MainHeroCrimeRating` | `float` | Hero crime rating |
| `DailyCrimeRatingChange` | `float` | Daily crime change |
| `DistanceToClosestNonAllyFortification` | `float` | Distance to nearest enemy fort |
| `BasicTroop` | `CharacterObject` | Basic troop for culture |
| `HasNavalNavigationCapability` | `bool` | Can use naval units |
| `All` | `static MBReadOnlyList` | All kingdoms |

## 关键方法 / Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `CreateKingdom` | `static Kingdom CreateKingdom(string stringID)` | Create new kingdom |
| `InitializeKingdom` | `void InitializeKingdom(TextObject name, TextObject informalName, CultureObject culture, Banner banner, uint color1, uint color2, Settlement home, TextObject encText, TextObject encTitle, TextObject encRulerTitle)` | Initialize kingdom data |
| `ChangeKingdomName` | `void ChangeKingdomName(TextObject name, TextObject informalName)` | Change kingdom name |
| `CreateArmy` | `void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes type, MBReadOnlyList partiesToCallToArmy = null)` | Create an army |
| `AddDecision` | `void AddDecision(KingdomDecision decision, bool ignoreInfluenceCost = false)` | Add kingdom decision |
| `RemoveDecision` | `void RemoveDecision(KingdomDecision decision)` | Remove pending decision |
| `OnKingdomDecisionConcluded` | `void OnKingdomDecisionConcluded()` | Called when decision concludes |
| `AddPolicy` | `void AddPolicy(PolicyObject policy)` | Add active policy |
| `RemovePolicy` | `void RemovePolicy(PolicyObject policy)` | Remove policy |
| `HasPolicy` | `bool HasPolicy(PolicyObject policy)` | Check if policy is active |
| `UpdateFactionsAtWarWith` | `void UpdateFactionsAtWarWith()` | Refresh war relations |
| `UpdateAlliedKingdoms` | `void UpdateAlliedKingdoms()` | Refresh alliances |
| `IsAllyWith` | `bool IsAllyWith(Kingdom other)` | Check alliance |
| `HasCalledToWar` | `bool HasCalledToWar(Kingdom other)` | Check war declaration |
| `IsAtWarWith` | `bool IsAtWarWith(IFaction other)` | Check war state |
| `IsAtConstantWarWith` | `bool IsAtConstantWarWith(IFaction other)` | Check constant war |
| `GetStanceWith` | `StanceLink GetStanceWith(IFaction other)` | Get stance link |
| `OnFortificationAdded` | `void OnFortificationAdded(Town fortification)` | When fief is gained |
| `OnFortificationRemoved` | `void OnFortificationRemoved(Town fortification)` | When fief is lost |
| `OnHeroAdded` | `void OnHeroAdded(Hero hero)` | When hero joins |
| `OnHeroRemoved` | `void OnHeroRemoved(Hero hero)` | When hero leaves |
| `OnWarPartyAdded` | `void OnWarPartyAdded(WarPartyComponent warParty)` | When war party added |
| `OnWarPartyRemoved` | `void OnWarPartyRemoved(WarPartyComponent warParty)` | When war party removed |
| `CalculateMidSettlement` | `void CalculateMidSettlement()` | Calculate central settlement |
| `ReactivateKingdom` | `void ReactivateKingdom()` | Reactivate eliminated kingdom |
| `DeactivateKingdom` | `internal void DeactivateKingdom()` | Eliminate kingdom |

## 使用示例 / Usage Example

```csharp
// Get all kingdoms
foreach (Kingdom kingdom in Kingdom.All)
{
    Debug.Print("Kingdom: " + kingdom.Name);
    
    // Check ruler
    Hero ruler = kingdom.Leader;
    if (ruler != null)
    {
        Debug.Print("Ruler: " + ruler.Name);
    }
    
    // Check clans
    foreach (Clan clan in kingdom.Clans)
    {
        Debug.Print("  Clan: " + clan.Name);
    }
    
    // Check strength
    float strength = kingdom.CurrentTotalStrength;
    
    // Check diplomacy
    if (kingdom.IsAtWarWith(Clan.PlayerClan))
    {
        Debug.Print("At war with player!");
    }
}

// Access player kingdom
Kingdom playerKingdom = Clan.PlayerClan.Kingdom;

// Create a new kingdom
Kingdom newKingdom = Kingdom.CreateKingdom("my_kingdom");
newKingdom.InitializeKingdom(
    new TextObject("My Kingdom"),
    new TextObject("MyKingdom"),
    culture,
    new Banner(),
    0xFF0000FF,  // Color
    0xFFFFFFFF,  // Color2
    homeTown,
    new TextObject("Description"),
    new TextObject("My Kingdom"),
    new TextObject("King")
);
newKingdom.RulingClan = myClan;

// Manage policies
if (!kingdom.HasPolicy(somePolicy))
{
    kingdom.AddPolicy(somePolicy);
}
```

## 继承关系 / Inheritance

```
MBObjectBase
    └── Kingdom (sealed)
        └── IFaction
```

## 实现接口 / Implemented Interfaces

- `IFaction` - Faction interface
