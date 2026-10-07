---
title: "TroopRoster"
description: "部队名册：按 CharacterObject 聚合的兵种计数容器，支持增删、受伤、经验、随机移除与扁平化。"
---
# TroopRoster

**Namespace:** `TaleWorlds.CampaignSystem.Roster`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TroopRoster : ISerializableObject`
**Source:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`TroopRoster` 是部队名册的核心数据结构。它按 `CharacterObject`（兵种模板）聚合计数——每个 `TroopRosterElement` 记录一个兵种的数量、受伤数、经验值。`PartyBase` 持有两个 `TroopRoster`：`MemberRoster`（成员）和 `PrisonRoster`（俘虏）。

它是 925 行的类，实现 `ISerializableObject` 以支持存档。mod 对它的读远多于写：遍历名册、统计数量、检查兵种存在是常见操作；写操作集中在 `AddToCounts` / `RemoveTroop` / `WoundTroop` 三个核心方法。

## 心智模型

**它是「按兵种聚合的计数列表」，不是「个体列表」。**

- 每个 `TroopRosterElement` 对应一个 `CharacterObject`，记录 `Number`（数量）、`WoundedNumber`（受伤数）、`Xp`（经验值）。
- 同名兵种只有一个元素——`AddToCounts` 会先 `FindIndexOfTroop` 查找已有元素，找到则累加，找不到才新建。
- `FlattenedTroopRoster` 是它的「扁平化」版本：每个士兵一个条目，用于战斗模拟。`ToFlattenedRoster()` 做转换。
- `VersionNo` 是缓存失效信号。任何修改（增删、受伤、经验）都会 `UpdateVersionNo()`，下游缓存（如 `PartyBase.EstimatedStrength`）据此判断是否重算。

**为什么按兵种聚合**：战役层不需要跟踪每个士兵的个体状态（那是战斗层的事）。`TroopRoster` 只关心「有多少个这种兵种」，战斗时再展开成个体。

**三个常见误用**。一是**直接操作 `data` 数组**：`data` 是 `internal` 字段，mod 应该走 `AddToCounts` / `RemoveTroop` 等方法。二是**忽略 `VersionNo`**：直接改 `data` 不会更新 `VersionNo`，下游缓存会返回过期值。三是**混淆 `MemberRoster` 和 `PrisonRoster`**：两者都是 `TroopRoster`，但语义不同——一个是部队成员，一个是俘虏。

## 怎么用

### 怎么拿到

```csharp
// 从 PartyBase 拿
TroopRoster members = partyBase.MemberRoster;
TroopRoster prisoners = partyBase.PrisonRoster;

// 从 MobileParty 拿
TroopRoster members = mobileParty.MemberRoster;
```

### 典型用法

```csharp
// 添加成员
roster.AddToCounts(character, 10);

// 移除成员
roster.RemoveTroop(character, 5);

// 使成员受伤
roster.WoundTroop(character, 2);

// 读数量
int count = roster.GetTroopCount(character);
int total = roster.TotalManCount;

// 遍历
foreach (TroopRosterElement element in roster.GetTroopRoster())
{
    CharacterObject character = element.Character;
    int number = element.Number;
    int wounded = element.WoundedNumber;
}
```

### 坑

- **`AddToCounts` 的 `index` 参数**：默认 `-1` 表示追加到末尾。传 `0` 表示插到最前。传其他值表示插到指定位置（会 `ShiftTroopToIndex`）。
- **`RemoveTroop` 在战斗中有特殊行为**：如果 `PlayerEncounter.CurrentBattleSimulation != null` 且目标不是英雄，`removeDepleted` 会被设为 `false`——战斗中的移除不立即删元素，而是等战斗结束。
- **`GetTroopRoster()` 返回的是缓存**：它检查 `VersionNo` 来决定是否重建缓存。如果你直接改 `data` 不走 `AddToCounts`，`GetTroopRoster()` 会返回过期数据。

## 关键成员

### 统计属性

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Count` | `public int Count` | 元素种类数 | `TroopRoster.cs:54` |
| `VersionNo` | `public int VersionNo { get; private set; }` | 版本号。任何修改都会递增 | `TroopRoster.cs:66` |
| `TotalRegulars` | `public int TotalRegulars` | 普通兵种总数 | `TroopRoster.cs:70` |
| `TotalWoundedRegulars` | `public int TotalWoundedRegulars` | 受伤普通兵种数 | `TroopRoster.cs:80` |
| `TotalWoundedHeroes` | `public int TotalWoundedHeroes` | 受伤英雄数 | `TroopRoster.cs:90` |
| `TotalHeroes` | `public int TotalHeroes` | 英雄总数 | `TroopRoster.cs:100` |
| `TotalWounded` | `public int TotalWounded` | 总受伤数 | `TroopRoster.cs:110` |
| `TotalManCount` | `public int TotalManCount` | 总人数（普通 + 英雄） | `TroopRoster.cs:120` |
| `TotalHealthyCount` | `public int TotalHealthyCount` | 总健康人数 | `TroopRoster.cs:130` |

### 核心操作

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `AddToCounts` | `public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)` | 添加/减少指定兵种的数量。核心写入方法 | `TroopRoster.cs:511` |
| `AddToCountsAtIndex` | `public int AddToCountsAtIndex(int index, int countChange, int woundedCountChange = 0, int xpChange = 0, bool removeDepleted = true)` | 按索引修改元素 | `TroopRoster.cs:383` |
| `Add` | `public void Add(TroopRoster troopRoster)` | 批量添加另一个名册的全部元素 | `TroopRoster.cs:248` |
| `Add` | `public void Add(TroopRosterElement troopRosterElement)` | 添加单个元素 | `TroopRoster.cs:257` |
| `RemoveTroop` | `public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor), int xp = 0)` | 移除指定兵种 | `TroopRoster.cs:769` |
| `WoundTroop` | `public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor))` | 使指定兵种受伤 | `TroopRoster.cs:781` |
| `RemoveIf` | `public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)` | 按条件移除元素 | `TroopRoster.cs:263` |
| `Clear` | `public void Clear()` | 清空名册 | `TroopRoster.cs:760` |
| `RemoveZeroCounts` | `public void RemoveZeroCounts()` | 移除数量为 0 的元素 | `TroopRoster.cs:552` |

### 查询

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `FindIndexOfTroop` | `public int FindIndexOfTroop(CharacterObject character)` | 查找兵种索引。找不到返回 `-1` | `TroopRoster.cs:279` |
| `GetTroopCount` | `public int GetTroopCount(CharacterObject troop)` | 取指定兵种的数量 | `TroopRoster.cs:541` |
| `GetElementNumber` | `public int GetElementNumber(int index)` | 按索引取数量 | `TroopRoster.cs:593` |
| `GetElementNumber` | `public int GetElementNumber(CharacterObject character)` | 按兵种取数量 | `TroopRoster.cs:603` |
| `GetElementWoundedNumber` | `public int GetElementWoundedNumber(int index)` | 按索引取受伤数 | `TroopRoster.cs:621` |
| `GetElementXp` | `public int GetElementXp(int index)` | 按索引取经验值 | `TroopRoster.cs:646` |
| `GetElementXp` | `public int GetElementXp(CharacterObject character)` | 按兵种取经验值 | `TroopRoster.cs:656` |
| `GetCharacterAtIndex` | `public CharacterObject GetCharacterAtIndex(int index)` | 按索引取兵种 | `TroopRoster.cs:662` |
| `GetElementCopyAtIndex` | `public TroopRosterElement GetElementCopyAtIndex(int index)` | 按索引取元素副本 | `TroopRoster.cs:575` |
| `Contains` | `public bool Contains(CharacterObject character)` | 是否包含指定兵种 | `TroopRoster.cs:718` |
| `GetTroopRoster` | `public MBList<TroopRosterElement> GetTroopRoster()` | 取全部元素列表（缓存） | `TroopRoster.cs:753` |

### 修改

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `SetElementNumber` | `public void SetElementNumber(int index, int number)` | 设置指定索引的数量 | `TroopRoster.cs:581` |
| `SetElementWoundedNumber` | `public void SetElementWoundedNumber(int index, int number)` | 设置指定索引的受伤数 | `TroopRoster.cs:609` |
| `SetElementXp` | `public void SetElementXp(int index, int number)` | 设置指定索引的经验值 | `TroopRoster.cs:631` |
| `SwapTroopsAtIndices` | `public void SwapTroopsAtIndices(int firstIndex, int secondIndex)` | 交换两个元素的位置 | `TroopRoster.cs:345` |
| `ShiftTroopToIndex` | `public void ShiftTroopToIndex(int troopIndex, int targetIndex)` | 移动元素到指定位置 | `TroopRoster.cs:362` |

### 随机操作

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `RemoveNumberOfNonHeroTroopsRandomly` | `public TroopRoster RemoveNumberOfNonHeroTroopsRandomly(int numberOfMen)` | 随机移除指定数量的普通兵种。返回被移除的名册 | `TroopRoster.cs:309` |
| `WoundNumberOfNonHeroTroopsRandomly` | `public void WoundNumberOfNonHeroTroopsRandomly(int numberOfMen)` | 随机使指定数量的普通兵种受伤 | `TroopRoster.cs:331` |

### 经验

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `AddXpToTroop` | `public void AddXpToTroop(CharacterObject troop, int xpAmount)` | 给指定兵种加经验 | `TroopRoster.cs:870` |
| `AddXpToTroopAtIndex` | `public void AddXpToTroopAtIndex(int index, int xpAmount)` | 给指定索引的兵种加经验 | `TroopRoster.cs:877` |

### 工具方法

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `CreateDummyTroopRoster` | `public static TroopRoster CreateDummyTroopRoster()` | 创建空名册（无主） | `TroopRoster.cs:155` |
| `ToFlattenedRoster` | `public FlattenedTroopRoster ToFlattenedRoster()` | 转为扁平化名册 | `TroopRoster.cs:242` |
| `RostersAreIdentical` | `public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)` | 比较两个名册是否相同 | `TroopRoster.cs:678` |
| `Sum` | `public int Sum(Func<TroopRosterElement, int> selector)` | 按选择器求和 | `TroopRoster.cs:818` |
| `CloneRosterData` | `public TroopRoster CloneRosterData()` | 克隆名册数据 | `TroopRoster.cs:852` |
| `ValidateTroopListCache` | `public void ValidateTroopListCache()` | 验证并重建元素缓存 | `TroopRoster.cs:732` |
| `UpdateVersion` | `public void UpdateVersion()` | 更新版本号 | `TroopRoster.cs:836` |
| `OnHeroHealthStatusChanged` | `public void OnHeroHealthStatusChanged(Hero hero)` | 英雄健康状态变化回调 | `TroopRoster.cs:829` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Roster;

public static class RosterUtils
{
    // 统计名册里指定层级的士兵数
    public static int CountTier(TroopRoster roster, int tier)
    {
        int count = 0;
        foreach (TroopRosterElement element in roster.GetTroopRoster())
        {
            if (!element.Character.IsHero && element.Character.Tier == tier)
            {
                count += element.Number;
            }
        }
        return count;
    }

    // 给名册里所有士兵加经验
    public static void AddXpToAll(TroopRoster roster, int xp)
    {
        for (int i = 0; i < roster.Count; i++)
        {
            roster.AddXpToTroopAtIndex(i, xp);
        }
    }

    // 随机移除一半士兵
    public static void RemoveHalfRandomly(TroopRoster roster)
    {
        int half = roster.TotalManCount / 2;
        roster.RemoveNumberOfNonHeroTroopsRandomly(half);
    }
}
```

## 参见

- [`../MobileParty`](../MobileParty) — 移动部队实体，`MemberRoster` / `PrisonRoster` 的宿主。
- [`../PartyBase`](../PartyBase) — 统一战斗接口，持有 `MemberRoster` 和 `PrisonRoster`。
- [`../../campaign-ext/MBObjectBase`](../../campaign-ext/MBObjectBase) — 战役对象基类。

## 导航

- 同桶：[`../MobileParty`](../MobileParty) · [`../PartyBase`](../PartyBase) · [`../Hero`](../Hero) · [`../Settlement`](../Settlement)
- 父索引：[`../_index`](../_index)
