---
title: "ItemRoster"
description: "物品名册：以只读列表形式保存一支部队/队伍携带的物品及其数量与修饰符，是 TroopRoster 在物品侧的对称结构。"
---
# ItemRoster

**Namespace:** `TaleWorlds.CampaignSystem.Roster`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IEnumerable, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`
**Source:** `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`ItemRoster` 是战役层的物品名册，是 `TroopRoster` 在物品侧的对称结构。`TroopRoster` 按 `CharacterObject` 聚合士兵数量，`ItemRoster` 则按 `EquipmentElement`（物品模板 + 修饰符）聚合物品数量——每个 `ItemRosterElement` 记录「哪件物品、带哪个修饰符、有多少件」。

它实现 `IReadOnlyList<ItemRosterElement>`：对外暴露按索引的只读访问（`this[int]` 索引器只有 getter）与 `Count`，写操作必须走 `AddToCounts` / `Remove` / `RemoveIf` / `Clear` 这类命令式入口。类体 691 行（`ItemRoster.cs:12`），实现 `ISerializableObject` 以支持存档，内部用 `_data`（`ItemRosterElement[]`）与 `_count`（`int`）两个 `[SaveableField]` 字段存储。

`PartyBase.ItemRoster` 是队伍携带物品的事实来源；`Settlement` 等聚落对象也持有自己的 `ItemRoster` 表示库存。mod 对它的读远多于写：遍历、统计、查存在是常见操作；写操作集中在增删两个核心方法上。

## 心智模型

**它是「按物品聚合的计数列表」，不是「个体列表」。**

- 每个 `ItemRosterElement` 对应一个 `EquipmentElement`，记录 `Amount`（数量）。同一种物品（同 `Item` 且同 `ItemModifier`）只有一个元素——`AddToCounts` 会先 `FindIndexOfElement` 查找已有元素，找到则累加，找不到才新建。
- 与 `TroopRoster` 的分工：战役层用 `ItemRoster` 只关心「队伍带了多少把这种剑」，战斗层再把元素展开成个体。名册本身不跟踪单件物品的个体状态。
- `VersionNo` 是缓存失效信号。任何修改（增、删、清空）都会调用 `UpdateVersion()` 自增它，下游缓存据此判断是否重算。
- 七个缓存统计属性（`TotalValue`、`TotalFood` 等）由 `OnRosterUpdated`（`ItemRoster.cs:464`）在每次增删时增量维护，都标了 `[CachedData]`——读它们不需要遍历名册。

**三个常见误用**。一是**直接改内部数组**：`this[int]` 索引器只有 getter，想改数量必须走 `AddToCounts`；直接改 `_data` 会绕过 `VersionNo` 自增和 `RosterUpdatedEvent`，缓存统计与事件订阅者全部拿到过期状态。二是**混淆两种查找**：`FindIndexOfItem` 只比较 `Item`，`FindIndexOfElement` 比较整个 `EquipmentElement`（含 `ItemModifier`）——带修饰符的物品用前者找不到。三是**把名册当密集数组**：`_data` 数组长度 ≥ `Count`，`Count` 之外的槽位是 `ItemRosterElement.Invalid`，遍历要用 `Count` 或 `foreach`。

## 怎么用

### 怎么拿到

```csharp
// 从 PartyBase 拿队伍名册
ItemRoster items = partyBase.ItemRoster;

// 从 MobileParty 拿（PartyBase 的转发）
ItemRoster items = mobileParty.ItemRoster;

// 新建空名册
ItemRoster items = new ItemRoster();

// 复制构造：深拷贝另一份名册并重建缓存统计
ItemRoster copy = new ItemRoster(items);
```

### 典型用法

```csharp
// 添加物品（同种物品自动合并计数）
roster.AddToCounts(item, 10);
roster.AddToCounts(equipmentElement, 5);

// 查询
int amount = roster.GetItemNumber(item);
int index = roster.FindIndexOfItem(item);
ItemRosterElement element = roster.GetElementCopyAtIndex(index);

// 移除（数量减到 0 时元素自动删除）
roster.Remove(new ItemRosterElement(item, 3, null));

// 按条件批量移除，返回被移除的元素
IEnumerable<ItemRosterElement> removed = roster.RemoveIf(e => e.Amount > 2 ? 1 : 0);

// 遍历（只读语义）
foreach (ItemRosterElement e in roster)
{
    ItemObject item = e.EquipmentElement.Item;
    int count = e.Amount;
}
```

### 坑

- **`AddToCounts` 的负数语义**：传负数表示扣除。若元素不存在且传负数，会触发 `Debug.FailedAssert`（`ItemRoster.cs:182`）——扣除前必须确认物品存在。
- **删除用 swap-with-last**：数量减到 0 或以下时，元素被「与末尾交换 + 置为 `Invalid`」删除。删除后你持有的索引全部失效，不要缓存索引跨修改使用。
- **`GetElementCopyAtIndex` 越界会断言**：索引越界时触发 `Debug.FailedAssert` 并返回 `ItemRosterElement.Invalid`（`ItemRoster.cs:213`）。先检查 `index < roster.Count`。
- **`FindIndexFirstAfterXthElement` 是环形扫描**：内部用 `i % _count` 取模，从第 x 个元素之后开始绕圈找。x 大于 `Count` 时行为依赖取模，不要依赖它做精确位置语义。
- **缓存统计是增量的**：`TotalValue` 等属性在 `OnRosterUpdated` 里逐次累加。任何绕过 `AddToCounts` 的写入都会让它们过期；读前确认没有外部代码直接改过内部数组。

```csharp
// 错误：缓存索引跨修改使用
int index = roster.FindIndexOfItem(item);
roster.Remove(otherElement);              // swap-with-last 可能让 index 失效
int amount = roster.GetElementNumber(index);  // 可能读到别的元素

// 正确：修改后重新查找
roster.Remove(otherElement);
index = roster.FindIndexOfItem(item);
amount = roster.GetElementNumber(index);
```

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `Count` | `public int Count` | 名册中不同物品元素的数量（不是物品总件数） | `ItemRoster.cs:49` |
| `VersionNo` | `public int VersionNo { get; private set; }` | 缓存失效信号，每次修改自增 | `ItemRoster.cs:77` |
| `FindIndexOfItem` | `public int FindIndexOfItem(ItemObject item)` | 按物品模板线性查找，只比 `Item`，返回索引或 -1 | `ItemRoster.cs:99` |
| `FindIndex` | `public int FindIndex(Predicate<ItemObject> predicate)` | 按谓词查找物品，返回索引或 -1 | `ItemRoster.cs:112` |
| `FindIndexFirstAfterXthElement` | `public int FindIndexFirstAfterXthElement(Predicate<ItemObject> predicate, int x)` | 从第 x 个元素之后环形查找 | `ItemRoster.cs:125` |
| `FindIndexOfElement` | `public int FindIndexOfElement(EquipmentElement rosterElement)` | 按完整装备元素查找（含修饰符），返回索引或 -1 | `ItemRoster.cs:138` |
| `AddToCounts` | `public int AddToCounts(ItemObject item, int number)` | 按物品模板增删数量，返回元素索引 | `ItemRoster.cs:172` |
| `AddToCounts` | `public int AddToCounts(EquipmentElement rosterElement, int number)` | 按完整装备元素增删数量，返回元素索引 | `ItemRoster.cs:182` |
| `GetElementCopyAtIndex` | `public ItemRosterElement GetElementCopyAtIndex(int index)` | 取指定位置元素副本，越界断言并返回 `Invalid` | `ItemRoster.cs:213` |
| `GetItemAtIndex` | `public ItemObject GetItemAtIndex(int index)` | 取指定位置的物品模板，越界返回 null | `ItemRoster.cs:224` |
| `GetElementNumber` | `public int GetElementNumber(int index)` | 取指定位置元素的数量 | `ItemRoster.cs:235` |
| `GetElementUnitCost` | `public int GetElementUnitCost(int index)` | 取指定位置物品的单价 | `ItemRoster.cs:246` |
| `GetItemNumber` | `public int GetItemNumber(ItemObject item)` | 按物品模板查数量，不存在返回 0 | `ItemRoster.cs:257` |
| `Clear` | `public void Clear()` | 清空名册，触发事件并更新版本 | `ItemRoster.cs:268` |
| `RostersAreIdentical` | `public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)` | 比较两份名册是否完全一致（物品、数量、修饰符） | `ItemRoster.cs:286` |
| `GetEnumerator` | `public IEnumerator<ItemRosterElement> GetEnumerator()` | 支持 foreach 遍历 | `ItemRoster.cs:318` |
| `SelectRandomIndex` | `public int SelectRandomIndex(Func<ItemRosterElement, float> weightFunction)` | 按权重随机选一个索引，无有效项返回 -1 | `ItemRoster.cs:330` |
| `RemoveIf` | `public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)` | 按条件批量移除，返回被移除的元素 | `ItemRoster.cs:367` |
| `Add` | `public void Add(IEnumerable<ItemRosterElement> rosterElementList)` | 批量添加元素序列 | `ItemRoster.cs:387` |
| `Add` | `public void Add(ItemRosterElement itemRosterElement)` | 添加单个元素 | `ItemRoster.cs:396` |
| `Remove` | `public void Remove(ItemRosterElement itemRosterElement)` | 移除指定数量的物品（内部转负数调 `AddToCounts`） | `ItemRoster.cs:402` |
| `UpdateVersion` | `public void UpdateVersion()` | 自增 `VersionNo`，标记缓存失效 | `ItemRoster.cs:457` |
| `TotalFood` | `public int TotalFood { get; internal set; }` | 食物总份数（含牲畜产肉），缓存统计 | `ItemRoster.cs:638` |
| `FoodVariety` | `public int FoodVariety { get; internal set; }` | 食物种类数，缓存统计 | `ItemRoster.cs:644` |
| `TotalValue` | `public int TotalValue { get; internal set; }` | 名册总价值，缓存统计 | `ItemRoster.cs:650` |
| `TradeGoodsTotalValue` | `public int TradeGoodsTotalValue { get; internal set; }` | 贸易商品总价值，缓存统计 | `ItemRoster.cs:656` |
| `NumberOfPackAnimals` | `public int NumberOfPackAnimals { get; private set; }` | 驮畜数量，缓存统计 | `ItemRoster.cs:662` |
| `NumberOfLivestockAnimals` | `public int NumberOfLivestockAnimals { get; private set; }` | 牲畜数量，缓存统计 | `ItemRoster.cs:668` |
| `NumberOfMounts` | `public int NumberOfMounts { get; private set; }` | 坐骑数量，缓存统计 | `ItemRoster.cs:674` |

## 真实示例

```csharp
// 示例一：战斗结束后把战利品名册并入队伍名册
public static void MergeLootIntoParty(MobileParty party, ItemRoster loot)
{
    foreach (ItemRosterElement element in loot)
    {
        if (element.Amount > 0)
        {
            party.ItemRoster.AddToCounts(element.EquipmentElement, element.Amount);
        }
    }
}

// 示例二：检查队伍食物是否够吃（读缓存统计，无需遍历）
public static bool HasEnoughFood(MobileParty party, int dailyConsumption)
{
    return party.ItemRoster.TotalFood >= dailyConsumption;
}

// 示例三：按价值加权随机抽一件战利品
public static ItemRosterElement PickValuableLoot(ItemRoster loot)
{
    int index = loot.SelectRandomIndex(e => e.EquipmentElement.ItemValue);
    if (index < 0)
    {
        return ItemRosterElement.Invalid;
    }
    return loot.GetElementCopyAtIndex(index);
}

// 示例四：比较两份名册是否一致（用于存档校验或同步）
public static bool IsSameRoster(ItemRoster a, ItemRoster b)
{
    return ItemRoster.RostersAreIdentical(a, b);
}
```

## 参见

- [TroopRoster](../TroopRoster) —— 对称的部队名册，按兵种聚合士兵
- [PartyBase](../PartyBase) —— `ItemRoster` 的主要持有者
- [ItemObject](../../core-extra/ItemObject) —— 物品模板，名册元素引用的物品类型
- [EquipmentElement](../../core-extra/EquipmentElement) —— 装备元素，名册的聚合键
- [API 索引](../_index) —— 战役 API 总索引

## 导航

- 同桶：[部队名册 TroopRoster](../TroopRoster) · [队伍基类 PartyBase](../PartyBase) · [聚落 Settlement](../Settlement)
- 父索引：[战役 API 索引](../_index)
