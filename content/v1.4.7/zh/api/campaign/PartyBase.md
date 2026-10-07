---
title: "PartyBase"
description: "战斗与交互实体的基类：承载移动部队或聚落的名册、物品、阵营、食物、治疗、战斗力与可见性数据，是 MobileParty 的底层数据面。"
---
# PartyBase

**命名空间：** `TaleWorlds.CampaignSystem.Party`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class PartyBase`
**基类：** 无（直接继承 `object`），实现 `IBattleCombatant`、`IRandomOwner`、`IInteractablePoint`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Party/PartyBase.cs`（声明见第 22 行）

## 概述
`PartyBase` 是战役系统中「一个战斗/交互实体」的底层数据基类，同时服务于两种宿主：移动部队（`MobileParty`）和聚落（`Settlement`）。它把名册（`MemberRoster`/`PrisonRoster`）、物品栏（`ItemRoster`）、阵营与颜色（`MapFaction`/`Culture`/`PrimaryColorPair`）、食物与饥饿（`RemainingFoodPercentage`/`IsStarving`）、治疗速率（`HealingRateFor*`）、战斗力（`EstimatedStrength`/`CalculateCurrentStrength`）、可见性与侦察（`IsVisible`/`IsInspected`）、以及战斗中的阵营归属（`MapEventSide`/`Side`/`OpponentSide`）统一在一处。`MobileParty` 是它在地图层的门面，`Settlement` 是它在聚落层的对应物；`PartyBase` 通过 `IsMobile`/`IsSettlement` 区分两者，并在 `Position`/`Name`/`Banner` 等属性上做转发。

## 心智模型
把它想成「部队或聚落的底盘」：`PartyBase` 是底盘本身，上面装着发动机（`MobileParty` 或 `Settlement`）。底盘不关心自己在地图上怎么跑（那是 `MobileParty` 的事），也不关心自己的建筑和经济（那是 `Settlement` 的事），它只负责「我是谁、我有什么、我多强、我能不能被看见」这几件事。状态来源上，名册和物品是持久化数据（`[SaveableProperty]`），食物百分比和治疗速率是每帧/每日重算的数值（由 `Campaign.Current.Models.*` 计算），战斗力是带版本号缓存的（`EstimatedStrength` 在 `VersionNo` 变化时重算），可见性是每帧由 `UpdateVisibilityAndInspected` 从观察者位置推算的。它**不负责**：地图移动（`MobileParty`）、寻路（`MobilePartyAi`）、聚落建筑与经济（`Settlement` 及其组件）。

## 怎么用
### 怎么拿到实例
- 玩家部队：`PartyBase.MainParty`（PartyBase.cs:410），等价于 `Campaign.Current.MainParty.Party`。
- 从移动部队：`mobileParty.Party`（PartyBase.cs:214）。
- 从聚落：`settlement.Party`（PartyBase.cs:208）。
- 新建：构造函数 `PartyBase(MobileParty)` 或 `PartyBase(Settlement)`（PartyBase.cs:1160、1166），通常由 `MobileParty` 构造函数内部调用。

### 坑
- `Position`/`IsVisible`/`IsActive`/`SiegeEvent`/`Banner` 等属性在 `IsMobile` 为 false 时转发到 `Settlement`，为 true 时转发到 `MobileParty`（PartyBase.cs:138-180、543）——对聚落调用 `Position` 拿到的是聚落坐标，不是部队坐标。
- `MapEventSide` 的 setter（PartyBase.cs:573）会触发 `AddPartyInternal`/`RemovePartyInternal` 并级联到 `AttachedParties`；在战斗外手动设置可能导致状态不一致。
- `EstimatedStrength`（PartyBase.cs:1079）的缓存版本号由 `MemberRoster.VersionNo`、船只版本、是否在海航、是否在 MapEvent 中共同决定；直接改名册后必须等 `VersionNo` 更新才会重算。
- `AddMember`/`AddPrisoner`（PartyBase.cs:1262、1256）内部调 `AddToCounts` 并传 `removeDepleted: true`，数量减到 0 的元素会自动从名册移除。
- `SetCustomName`（PartyBase.cs:525）在 `IsSettlement` 时会调 `SetSettlementProperties`，对移动部队调用则不会——不要依赖它来设置聚落名称属性。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `Position` | 地图坐标；聚落时转发 `Settlement.Position`，部队时转发 `MobileParty.Position`（PartyBase.cs:138）。 |
| `IsVisible` | 是否可见；转发到宿主（PartyBase.cs:152）。 |
| `IsActive` | 是否激活；转发到宿主（PartyBase.cs:166）。 |
| `SiegeEvent` | 当前攻城事件；转发到宿主（PartyBase.cs:180）。 |
| `OnVisibilityChanged(bool)` | 可见性变化回调：通知 `MapEvent` 并发事件（PartyBase.cs:193）。 |
| `Settlement` | 宿主聚落；`IsSettlement` 判定依据（PartyBase.cs:208）。 |
| `MobileParty` | 宿主移动部队；`IsMobile` 判定依据（PartyBase.cs:214）。 |
| `IsSettlement` / `IsMobile` | 类型判定：`Settlement != null` / `MobileParty != null`（PartyBase.cs:218、228）。 |
| `MemberRoster` | 成员名册（`TroopRoster`）（PartyBase.cs:240）。 |
| `PrisonRoster` | 俘虏名册（`TroopRoster`）（PartyBase.cs:246）。 |
| `ItemRoster` | 物品栏（PartyBase.cs:252）。 |
| `Name` | 显示名；聚落时 `Settlement.Name`，部队时 `MobileParty.Name`（PartyBase.cs:256）。 |
| `DaysStarving` | 饥饿天数，从 `_lastEatingTime` 推算（PartyBase.cs:274）。 |
| `OnConsumedFood()` | 记录进食时间，重置饥饿计时（PartyBase.cs:287）。 |
| `RemainingFoodPercentage` | 剩余食物百分比；负值表示饥饿中（PartyBase.cs:295）。 |
| `IsStarving` | 是否饥饿：`RemainingFoodPercentage < 0`（PartyBase.cs:309）。 |
| `Id` | 字符串 ID；部队时 `MobileParty.StringId`，聚落时 `Settlement.StringId`（PartyBase.cs:319）。 |
| `HealingRateForMemberRegulars` / `HealingRateForMemberHeroes` | 普通成员/英雄的每日治疗速率（PartyBase.cs:330、350）。 |
| `HealingRateForMemberRegularsExplained` / `HealingRateForMemberHeroesExplained` | 带解释的治疗速率（`ExplainedNumber`）（PartyBase.cs:340、360）。 |
| `Owner` | 归属英雄；优先 `_customOwner`，其次宿主 `Owner`（PartyBase.cs:370）。 |
| `SetCustomOwner(Hero)` | 设置自定义归属英雄（PartyBase.cs:388）。 |
| `LeaderHero` | 领袖英雄；转发 `MobileParty.LeaderHero`（PartyBase.cs:395）。 |
| `MainParty` | 静态属性，玩家主部队的 `PartyBase`（PartyBase.cs:410）。 |
| `IsPartyUnderPlayerCommand(PartyBase)` | 静态方法，是否由玩家指挥（PartyBase.cs:423）。 |
| `LevelMaskIsDirty` / `SetLevelMaskIsDirty()` / `OnLevelMaskUpdated()` | 层级掩码脏标记管理（PartyBase.cs:431-440）。 |
| `Index` | 部队索引；`IsValid` 判定依据（PartyBase.cs:448）。 |
| `IsValid` | 是否有效：`Index >= 0`（PartyBase.cs:462）。 |
| `MapFaction` | 地图阵营；部队时转发 `MobileParty.MapFaction`，聚落时 `Settlement.MapFaction`（PartyBase.cs:472）。 |
| `RandomValue` | 随机种子，存档时生成（PartyBase.cs:492）。 |
| `Culture` | 文化对象，来自 `MapFaction.Culture`（PartyBase.cs:496）。 |
| `PrimaryColorPair` | 主色对（`Color`, `Color2`）（PartyBase.cs:506）。 |
| `CustomName` / `SetCustomName(TextObject)` | 自定义名称；设置时触发视觉刷新（PartyBase.cs:522、525）。 |
| `CustomBanner` / `SetCustomBanner(Banner)` | 自定义旗帜（PartyBase.cs:539、741）。 |
| `Banner` | 旗帜；转发到宿主（PartyBase.cs:543）。 |
| `MapEvent` | 当前地图事件，来自 `MapEventSide.MapEvent`（PartyBase.cs:557）。 |
| `MapEventSide` | 地图事件方；setter 处理加入/移除与级联（PartyBase.cs:573）。 |
| `Side` | 战斗阵营（`BattleSideEnum`），来自 `MapEventSide.MissionSide`（PartyBase.cs:613）。 |
| `OpponentSide` | 对手阵营（PartyBase.cs:628）。 |
| `GetNumberOfMissionReadyTroops()` | 任务就绪部队数，等于 `NumberOfHealthyMembers`（PartyBase.cs:758）。 |
| `IsUnderPlayersCommand(BattleSideEnum)` | 是否在玩家指挥下且属于玩家阵营（PartyBase.cs:764）。 |
| `PartySizeLimit` | 成员规模上限，带版本号缓存（PartyBase.cs:866）。 |
| `PrisonerSizeLimit` | 俘虏规模上限，带版本号缓存（PartyBase.cs:882）。 |
| `PartySizeLimitExplainer` / `PrisonerSizeLimitExplainer` | 带解释的规模上限（PartyBase.cs:898、908）。 |
| `NumberOfHealthyMembers` | 健康成员数：`TotalManCount - TotalWounded`（PartyBase.cs:918）。 |
| `NumberOfRegularMembers` | 普通成员数：`TotalRegulars`（PartyBase.cs:928）。 |
| `NumberOfWoundedTotalMembers` | 总伤员数：`TotalWounded`（PartyBase.cs:938）。 |
| `NumberOfAllMembers` | 总成员数：`TotalManCount`（PartyBase.cs:948）。 |
| `NumberOfPrisoners` | 俘虏总数：`PrisonRoster.TotalManCount`（PartyBase.cs:958）。 |
| `NumberOfMounts` / `NumberOfPackAnimals` | 坐骑数 / 驮兽数，来自 `ItemRoster`（PartyBase.cs:968、978）。 |
| `PrisonerHeroes` | 俘虏中的英雄枚举（PartyBase.cs:988）。 |
| `NumberOfMenWithHorse` / `NumberOfMenWithoutHorse` | 有马/无马成员数，带版本号缓存（PartyBase.cs:1011、1026）。 |
| `GetNumberOfHealthyMenOfTier(int)` | 指定 tier 的健康成员数，带版本号缓存（PartyBase.cs:1035）。 |
| `EstimatedStrength` | 预估战斗力，带版本号缓存（PartyBase.cs:1079）。 |
| `CalculateCurrentStrength()` | 当前战斗力（实时计算，无缓存）（PartyBase.cs:1116）。 |
| `GetCustomStrength(BattleSideEnum, MapEvent.PowerCalculationContext)` | 自定义上下文战斗力（PartyBase.cs:1154）。 |
| `PartyBase(MobileParty)` / `PartyBase(Settlement)` | 构造函数，初始化名册与物品栏（PartyBase.cs:1160、1166）。 |
| `Ships` | 船只列表（PartyBase.cs:1184）。 |
| `FlagShip` | 旗舰：`FlagshipScore` 最高的船（PartyBase.cs:1194）。 |
| `GetShipsVersion()` | 船只版本号，用于战斗力缓存（PartyBase.cs:1215）。 |
| `GetNumberOfMenWith(TraitObject)` | 拥有指定 trait 的成员数（PartyBase.cs:1242）。 |
| `AddPrisoner(CharacterObject, int)` | 添加俘虏（PartyBase.cs:1256）。 |
| `AddMember(CharacterObject, int, int)` | 添加成员（可指定伤员数）（PartyBase.cs:1262）。 |
| `AddPrisoners(TroopRoster)` / `AddMembers(TroopRoster)` | 批量添加俘虏/成员（PartyBase.cs:1268、1277）。 |
| `AddElementToMemberRoster(CharacterObject, int, bool)` | 向成员名册添加元素（PartyBase.cs:1293）。 |
| `AddToMemberRosterElementAtIndex(int, int, int)` | 按索引增加名册元素数量（PartyBase.cs:1299）。 |
| `WoundMemberRosterElements(CharacterObject, int)` / `WoundMemberRosterElementsWithIndex(int, int)` | 按角色/索引伤员化（PartyBase.cs:1305、1311）。 |
| `UpdateVisibilityAndInspected(CampaignVec2, float)` | 从指定位置更新可见性与侦察状态（PartyBase.cs:1317）。 |
| `BasicCulture` | 基础文化对象，等于 `Culture`（PartyBase.cs:1420）。 |
| `General` | 将军角色；军队时取军队领袖英雄，否则取部队领袖英雄（PartyBase.cs:1430）。 |
| `SetAsCameraFollowParty()` | 设为相机跟随部队（PartyBase.cs:1462）。 |
| `IsVisualDirty` / `SetVisualAsDirty()` / `OnVisualsUpdated()` | 视觉脏标记管理（PartyBase.cs:1483-1505）。 |

## 真实示例
```csharp
// 给玩家部队添加 10 名步兵和 2 名伤员
PartyBase.MainParty.AddMember(infantryCharacter, 10, 2);

// 检查部队是否饥饿并消耗食物
if (PartyBase.MainParty.IsStarving)
{
    PartyBase.MainParty.OnConsumedFood();
}

// 获取部队当前战斗力
float strength = PartyBase.MainParty.CalculateCurrentStrength();
```

## 参见
- [MobileParty](../MobileParty)
- [TroopRoster](../TroopRoster)
- [Hero](../Hero)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
