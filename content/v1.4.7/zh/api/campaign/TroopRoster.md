---
title: "TroopRoster"
description: "兵种名册类：管理部队或聚落的成员/俘虏列表，提供增删改查、伤员与经验管理、随机移除、扁平化与缓存统计。"
---
# TroopRoster

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class TroopRoster`
**基类：** 无（直接继承 `object`），实现 `ISerializableObject`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
`TroopRoster` 是战役系统中「兵种名册」的核心类，同时服务于成员名册（`MemberRoster`）和俘虏名册（`PrisonRoster`）。它内部维护一个 `TroopRosterElement` 数组，每个元素记录一个 `CharacterObject`（兵种/英雄）的数量、伤员数和经验值。它提供完整的增删改查接口：按角色或索引添加/移除/伤员化/加经验、随机移除非英雄兵种、按条件筛选删除、交换与移动元素位置、扁平化为 `FlattenedTroopRoster`、以及缓存统计（`TotalRegulars`/`TotalHeroes`/`TotalWounded`/`TotalManCount` 等）。`PartyBase` 的 `NumberOfHealthyMembers`/`NumberOfAllMembers` 等属性都委托给它。

## 心智模型
把它想成「一本花名册」：每行是一个兵种（或英雄），记录着「有多少人、多少伤员、多少经验」。名册本身不知道自己在部队里还是俘虏营里（那是 `PartyBase` 的事），也不知道战斗力怎么算（那是 `MilitaryPowerModel` 的事），它只负责「谁在里面、多少人、什么状态」。状态来源上，`data` 数组是持久化数据（`[SaveableProperty]`），`VersionNo` 在每次增删改时递增（`UpdateVersion`），缓存统计（`TotalRegulars` 等）在 `InitializeCachedData` 时从 `data` 重算。它**不负责**：名册与部队/聚落的绑定关系（`PartyBase`）、战斗中的战斗力计算（`MilitaryPowerModel`）、英雄的生死状态（`Hero`）。

## 怎么用
### 怎么拿到实例
- 从部队：`party.MemberRoster` / `party.PrisonRoster`（PartyBase.cs:240、246）。
- 新建空名册：`new TroopRoster(ownerParty)`（TroopRoster.cs:139）。
- 创建虚拟名册（无宿主）：`TroopRoster.CreateDummyTroopRoster()`（TroopRoster.cs:155）。

### 坑
- `AddToCounts`（TroopRoster.cs:511）在 `removeDepleted: true` 时，数量减到 0 的元素会自动从名册移除——不要假设元素会保留。
- `RemoveNumberOfNonHeroTroopsRandomly`（TroopRoster.cs:309）和 `WoundNumberOfNonHeroTroopsRandomly`（TroopRoster.cs:331）只影响非英雄兵种，英雄不会被随机移除或伤员化。
- `VersionNo`（TroopRoster.cs:66）在每次 `AddToCounts`/`RemoveTroop`/`WoundTroop` 等修改操作后递增；`PartyBase` 的缓存属性（如 `PartySizeLimit`/`EstimatedStrength`）依赖它判断是否需要重算。
- `GetElementCopyAtIndex`（TroopRoster.cs:575）返回的是副本，修改它不会影响名册内部状态；要修改请用 `SetElementNumber`/`SetElementWoundedNumber`/`SetElementXp`。
- `CheckValidity`（TroopRoster.cs:491）会验证名册内部一致性，在调试构建中触发断言；发布构建中可能静默通过。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `Count` | 名册中不同兵种的数量（TroopRoster.cs:54）。 |
| `VersionNo` | 版本号，每次修改递增，用于缓存失效判断（TroopRoster.cs:66）。 |
| `TotalRegulars` | 普通兵种总数（不含英雄）（TroopRoster.cs:70）。 |
| `TotalWoundedRegulars` | 普通兵种伤员总数（TroopRoster.cs:80）。 |
| `TotalWoundedHeroes` | 英雄伤员总数（TroopRoster.cs:90）。 |
| `TotalHeroes` | 英雄总数（TroopRoster.cs:100）。 |
| `TotalWounded` | 总伤员数：`TotalWoundedRegulars + TotalWoundedHeroes`（TroopRoster.cs:110）。 |
| `TotalManCount` | 总人数：`TotalRegulars + TotalHeroes`（TroopRoster.cs:120）。 |
| `TotalHealthyCount` | 总健康人数：`TotalManCount - TotalWounded`（TroopRoster.cs:130）。 |
| `TroopRoster(PartyBase)` | 构造函数，绑定宿主部队（TroopRoster.cs:139）。 |
| `CreateDummyTroopRoster()` | 静态工厂，创建无宿主的虚拟名册（TroopRoster.cs:155）。 |
| `CalculateCachedStatsOnLoad()` | 静态方法，加载时为所有名册重算缓存统计（TroopRoster.cs:195）。 |
| `ToFlattenedRoster()` | 转为 `FlattenedTroopRoster`（每个单位一个元素）（TroopRoster.cs:242）。 |
| `Add(TroopRoster)` | 合并另一个名册的所有元素（TroopRoster.cs:248）。 |
| `Add(TroopRosterElement)` | 添加单个名册元素（TroopRoster.cs:257）。 |
| `RemoveIf(Predicate<TroopRosterElement>)` | 按条件筛选删除，返回被删除的元素集合（TroopRoster.cs:263）。 |
| `FindIndexOfTroop(CharacterObject)` | 查找指定兵种的索引，不存在返回 -1（TroopRoster.cs:279）。 |
| `RemoveNumberOfNonHeroTroopsRandomly(int)` | 随机移除指定数量的非英雄兵种，返回被移除的名册（TroopRoster.cs:309）。 |
| `WoundNumberOfNonHeroTroopsRandomly(int)` | 随机将指定数量的非英雄兵种伤员化（TroopRoster.cs:331）。 |
| `SwapTroopsAtIndices(int, int)` | 交换两个索引位置的元素（TroopRoster.cs:345）。 |
| `ShiftTroopToIndex(int, int)` | 将指定索引的元素移动到目标索引（TroopRoster.cs:362）。 |
| `AddToCountsAtIndex(int, int, int, int, bool)` | 按索引增加数量/伤员/经验，可自动移除空元素（TroopRoster.cs:383）。 |
| `CheckValidity()` | 验证名册内部一致性（TroopRoster.cs:491）。 |
| `AddToCounts(CharacterObject, int, bool, int, int, bool, int)` | 按角色增加数量/伤员/经验，可指定插入位置（TroopRoster.cs:511）。 |
| `GetTroopCount(CharacterObject)` | 获取指定兵种的数量（TroopRoster.cs:541）。 |
| `RemoveZeroCounts()` | 移除所有数量为 0 的元素（TroopRoster.cs:552）。 |
| `GetElementCopyAtIndex(int)` | 获取指定索引的元素副本（TroopRoster.cs:575）。 |
| `SetElementNumber(int, int)` | 按索引设置数量（TroopRoster.cs:581）。 |
| `GetElementNumber(int)` / `GetElementNumber(CharacterObject)` | 按索引/角色获取数量（TroopRoster.cs:593、603）。 |
| `SetElementWoundedNumber(int, int)` | 按索引设置伤员数（TroopRoster.cs:609）。 |
| `GetElementWoundedNumber(int)` | 按索引获取伤员数（TroopRoster.cs:621）。 |
| `SetElementXp(int, int)` | 按索引设置经验值（TroopRoster.cs:631）。 |
| `GetElementXp(int)` / `GetElementXp(CharacterObject)` | 按索引/角色获取经验值（TroopRoster.cs:646、656）。 |
| `GetCharacterAtIndex(int)` | 获取索引索引的角色（TroopRoster.cs:662）。 |
| `Equals(object)` / `RostersAreIdentical(TroopRoster, TroopRoster)` | 相等性比较（TroopRoster.cs:672、678）。 |
| `Contains(CharacterObject)` | 是否包含指定兵种（TroopRoster.cs:718）。 |
| `ValidateTroopListCache()` | 验证名册列表缓存（TroopRoster.cs:732）。 |
| `GetTroopRoster()` | 获取内部元素列表（`MBList<TroopRosterElement>`）（TroopRoster.cs:753）。 |
| `Clear()` | 清空名册（TroopRoster.cs:760）。 |
| `RemoveTroop(CharacterObject, int, UniqueTroopDescriptor, int)` | 移除指定兵种，可指定种子与经验（TroopRoster.cs:769）。 |
| `WoundTroop(CharacterObject, int, UniqueTroopDescriptor)` | 将指定兵种伤员化（TroopRoster.cs:781）。 |
| `Sum(Func<TroopRosterElement, int>)` | 对名册元素求和（TroopRoster.cs:818）。 |
| `OnHeroHealthStatusChanged(Hero)` | 英雄健康状态变化回调（TroopRoster.cs:829）。 |
| `UpdateVersion()` | 递增版本号（TroopRoster.cs:836）。 |
| `CloneRosterData()` | 克隆名册数据（TroopRoster.cs:852）。 |
| `AddXpToTroop(CharacterObject, int)` | 给指定兵种加经验（TroopRoster.cs:870）。 |
| `AddXpToTroopAtIndex(int, int)` | 按索引给兵种加经验（TroopRoster.cs:877）。 |

## 真实示例
```csharp
// 给玩家部队添加 10 名步兵
PartyBase.MainParty.AddElementToMemberRoster(infantryCharacter, 10);

// 随机移除 5 名非英雄兵种（战斗伤亡）
TroopRoster casualties = PartyBase.MainParty.MemberRoster.RemoveNumberOfNonHeroTroopsRandomly(5);

// 给所有成员加经验
foreach (TroopRosterElement element in PartyBase.MainParty.MemberRoster.GetTroopRoster())
{
    PartyBase.MainParty.MemberRoster.AddXpToTroop(element.Character, 100);
}
```

## 参见
- [MobileParty](../MobileParty)
- [PartyBase](../PartyBase)
- [Hero](../Hero)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
