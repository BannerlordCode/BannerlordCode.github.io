---
title: "ItemRoster"
description: "部队与据点持有的「物品集合」：以 ItemRosterElement（装备元素 + 数量）为元素的扁平列表，支持增删、按物查询、并缓存总价值/粮食/牲口等派生量；是战役层物品数据的真实来源。"
---
# ItemRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`  
**Base:** （无基类；直接继承 `object`，实现 `IReadOnlyList<ItemRosterElement>` / `IEnumerable<ItemRosterElement>` / `ISerializableObject`）  
**File:** `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs`

## 概述

`ItemRoster` 是 Bannerlord 战役里**一个部队或据点当前持有物品（装备、交易品、粮食、马匹）的扁平集合**。它内部维护一个 `ItemRosterElement[]` 数组，每个元素 = 一个 `EquipmentElement`（`ItemObject` + 可选 `ItemModifier`）+ 其 `Amount`（数量）。整个列表是**按物品去重的**：同一 `ItemObject`（且相同 `ItemModifier`）的所有数量合并到同一个元素里，增删只是改这个元素的 `Amount`。

它不区分「武器」和「粮食」和「交易品」——所有物品混在同一个列表里，通过 `ItemObject.IsTradeGood` / `IsFood` / `HasHorseComponent` 等标志来区分语义。几乎所有与「这个队伍带了多少货」相关的系统（贸易 AI、粮食消耗、部队规模上限、战利品分配、商店买卖）都直接读它或它的缓存派生量。

## 心智模型

把 `ItemRoster` 想成**「某个阵营背包的实时快照」**，而不是一份可以随意拷贝的独立清单：

- **它是活的战役数据**：通常你不会自己 `new ItemRoster()`（除非做临时计算）；你拿到的是 `PartyBase.ItemRoster` 这个真实字段。任何 `AddToCounts` / `Remove` 都会立刻改变该部队/据点的实际库存，并联动刷新缓存、自增 `VersionNo`、触发 `RosterUpdatedEvent`。
- **一个据点可能有两个 roster**：`Settlement.ItemRoster` 实际等于其所属 `Party.ItemRoster`（即该城镇/城堡驻军部队的物品）；而 `Settlement.Stash`（`Settlement.cs:93` 的 `public readonly ItemRoster Stash`）是**玩家寄放处**的独立 roster，二者互不相干。
- **元素按键是 `EquipmentElement`**：同一把剑，有/没有附魔是两行；`FindIndexOfElement` 用 `EquipmentElement.IsEqualTo` 比较，会连带 `ItemModifier` 一起比。
- **索引是易变的**：内部数组在元素数量归零（或扣成负）时会被压缩移除，后续索引会整体前移。不要缓存 index 后在多次变更后还假设它指向同一物品；用 `FindIndexOfItem` / `GetItemNumber` 这类按物查询更安全。
- **层**：纯战役层（`TaleWorlds.CampaignSystem`）。进战场（Mission）后物品以 `Equipment` / `Agent` 形式出现，不再以 roster 形态参与。

## 如何获取 ItemRoster

```csharp
// 玩家主队的物品栏（最常用路径：MobileParty.Party.ItemRoster）
ItemRoster mainRoster = MobileParty.MainParty.ItemRoster;

// 任意部队（包括 AI 商队、敌对军团）的物品栏
ItemRoster partyRoster = someMobileParty.ItemRoster;

// 据点驻军携带的物品（等于 settlement.Party.ItemRoster）
ItemRoster garrisonRoster = someSettlement.ItemRoster;

// 玩家在该据点的寄放处（与驻军物品是分开的两个 roster）
ItemRoster stash = someSettlement.Stash;

// 在战利品/事件中临时拿到的战利品集合
ItemRoster loot = PlayerEncounter.Current.RosterToReceiveLootItems;
```

> 注意：`PartyBase.ItemRoster` 是 `private set`，你**不能**用 `party.ItemRoster = new ItemRoster()` 替换它，只能增删其内部元素。

## 主要成员

下面按主题分组。每个成员注明**用途 + 副作用 + 何时调用**；不再罗列纯签名。

### 增 / 删（修改库存）

#### `public int AddToCounts(ItemObject item, int number)`
核心写入口。把 `item` 增加（或减少，当 `number < 0`）`number` 个。返回该元素在内部数组的下标；`number == 0` 时直接返回 `-1`（无操作）。  
**副作用**：联动刷新 `TotalValue` / `TradeGoodsTotalValue` / `TotalFood` / `FoodVariety` / 各类牲口计数，自增 `VersionNo`，并触发 `RosterUpdatedEvent`。若 `number < 0` 但该物品不存在，会触发 `Debug.FailedAssert("Trying to delete an element from Item Roster that does not exist!")`；若扣减后 `Amount <= 0`，该元素会从内部数组移除（数组压缩，**后续索引前移**）。  
**何时调用**：需要直接改动一支部队/据点的物品时。若改动同时涉及金钱或另一方库存（买卖、赠予），优先用 `./GiveItemAction/` 或 `./SellItemsAction/`，否则经济与事件会脱节。

#### `public int AddToCounts(EquipmentElement rosterElement, int number)`
同上，但用 `EquipmentElement` 表达「物品 + 附魔」，因此带不同 `ItemModifier` 的同物品会落进不同元素。

#### `public void Add(ItemRosterElement element)` / `public void Add(IEnumerable<ItemRosterElement> rosterElementList)`
便捷写入：内部逐个调用 `AddToCounts(EquipmentElement, Amount)`。

#### `public void Remove(ItemRosterElement element)`
便捷删除：等价 `AddToCounts(EquipmentElement, -Amount)`。

#### `public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)`
按谓词从每个元素中移除 `match(el)` 个（超过该元素数量时截断为实际数量），返回被移除的元素清单。适合「把所有粮食收走」「清掉全部交易品」这类批量操作。

#### `public void Clear()`
清空全部元素、重算缓存、触发 `RosterUpdatedEvent`（以 `default(ItemRosterElement)` 与 `0` 为参数）、自增 `VersionNo`。

### 查询 / 计数

#### `public ItemRosterElement this[int index]` / `public int Count`
下标访问（返回**值拷贝**的 `ItemRosterElement`，注意索引会随增删漂移）、以及「不同元素个数」（不是总数量）。

#### `public int FindIndexOfItem(ItemObject item)`
按 `ItemObject` 找下标（**忽略** `ItemModifier`），找不到返回 `-1`。最稳妥的按物定位方式。

#### `public int FindIndexOfElement(EquipmentElement rosterElement)`
按 `EquipmentElement`（含 `ItemModifier`）精确找下标。

#### `public int FindIndex(Predicate<ItemObject> predicate)` / `FindIndexFirstAfterXthElement(...)`
按谓词搜索（后者用于从某个位置起环绕查找，常见于战利品随机分配）。

#### `public ItemObject GetItemAtIndex(int index)` / `public int GetElementNumber(int index)` / `public int GetElementUnitCost(int index)`
取下标处的物品、数量、单位价值（`ItemObject.Value`）。下标越界会 `Debug.FailedAssert` 并返回默认值。

#### `public int GetItemNumber(ItemObject item)`
直接问「这个物品一共有多少个」（内部走 `FindIndexOfItem`）；不存在返回 `0`。读库存最常用。

### 派生量 / 缓存（均为 `[CachedData]`，美工/逻辑读即可，不要手改）

| 成员 | 含义 |
|------|------|
| `TotalValue` | 全部元素的 `ItemObject.Value × Amount` 之和。 |
| `TradeGoodsTotalValue` | 仅 `IsTradeGood` 物品的累计价值（不含装备/粮食/马）。 |
| `TotalFood` | 粮食物品数量 + 牲口按 `HorseComponent.MeatCount` 折算的产肉量。 |
| `FoodVariety` | 当前存在的**不同粮食种类数**（粮食物种从 0→正时 +1，从正→0 时 −1）。 |
| `NumberOfPackAnimals` / `NumberOfMounts` | 驮兽 / 坐骑数（**要求 `ItemModifier == null`** 才计入）。 |
| `NumberOfLivestockAnimals` | 牲畜数（不论是否有附魔）。 |
| `VersionNo` | 每次变更自增；UI/VM 用它判断是否需要刷新。 |

> 这些量在每次 `AddToCounts`/`Remove` 时**增量**维护（`OnRosterUpdated`），并在 `Clear()`、拷贝构造、`DeserializeFrom`（读档）时整体重算（`CalculateCachedStats`）。它们不是实时遍历得出的，因此如果你用反射或非常规手段改了内部数组而没有走公开写入口，缓存会与真实状态不一致。

#### `public event RosterUpdatedEventDelegate RosterUpdatedEvent`
签名 `void(ItemRosterElement item, int count)`。`count` 为正表示增加、为负表示扣减。订阅它可以在库存变化时更新你的面板或触发逻辑（注意：读档期间也会触发，避免在事件中做重入式写操作）。

### 静态 / 存档钩子

#### `public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)`
比较两个 roster 的元素（物品、附魔、数量）是否完全一致。

#### `public static void CalculateCachedStatsOnLoad()` / `public void OnLoadStarted(MetaData metaData)`
引擎的读档钩子：`OnLoadStarted` 带 `[LoadInitializationCallback]`，把所有 roster 登记进 `InstanceListForLoadGame`；全部对象载入后引擎调用 `CalculateCachedStatsOnLoad()`，对每个 roster 执行「把未就绪（`!IsReady`）的物品/附魔替换成 `./DefaultItems/` 的 `Trash` 并注销旧对象」「丢弃数量为 0 的元素」再重算缓存。**模组一般不要手动调用**。

## 依赖图

- **上游（谁构造 / 谁提供元素）**
  - [PartyBase](../../campaign/PartyBase/) — `ItemRoster` 的真实持有者（`ItemRoster { get; private set; }`）。
  - [MobileParty](../../campaign/MobileParty/) / [Settlement](../../campaign/Settlement/) — 二者 `ItemRoster` 都委托给 `Party.ItemRoster`；`Settlement` 另有独立的 `Stash`。
  - [ItemObject](../../core-extra/ItemObject/) — 列表里每个元素的物品本体（`EquipmentElement.Item`）。
  - [EquipmentElement](../../core-extra/EquipmentElement/) / [ItemModifier](../../core-extra/ItemModifier/) — 元素 = 物品 + 可选附魔。
  - [DefaultItems](../DefaultItems/) — 读档时未就绪物品被替换为 `Trash` 的来源。
- **下游（谁消费这份数据）**
  - 贸易 AI（`PartiesSellLootCampaignBehavior`、`SellItemsAction`）、粮食消耗（`FoodConsumptionBehavior`）、战利品分配（`OnCollectLootsItemsEvent` / `OnLootDistributedToPartyEvent`）、商店买卖。
  - 部队规模与工资：`./PartySizeLimitModel/`、`./PartyWageModel/`（按携带物品/人员推算上限与工资）。
  - 重量/速度：元素重量经 `ItemRosterElement.GetRosterElementWeight()` 汇总，被 `PartyBaseHelper.GetSpeedLimitation` 等用于移动速度限制。
- **相关事件（CampaignEvents）**
  - `./CampaignEvents/` 的 `ItemsLooted`、`OnItemSoldEvent`、`HeroOrPartyGaveItem`、`OnItemsDiscardedByPlayerEvent`、`OnCollectLootsItemsEvent`、`OnLootDistributedToPartyEvent`、`OnItemsRefinedEvent`、`PlayerInventoryExchangeEvent` —— 都在物品进出 roster 时广播。
- **相关类型 / 操作**
  - [TroopRoster](../TroopRoster/) — 同属 `Roster` 家族，但管的是人员而非物品。
  - [GiveItemAction](../GiveItemAction/) / [SellItemsAction](../SellItemsAction/) — 跨主体转移/出售物品的**正确入口**。
  - [InventoryLogic](../InventoryLogic/) — 玩家背包 UI 背后的逻辑，内部在两边 roster 间搬运 `ItemRosterElement`。

## 风险与崩溃边界（必读）

1. **跨读档持有元素引用会失效**：`ItemRosterElement` 是 `struct`（`ISavedStruct`），你拿到的是值拷贝；但其中的 `ItemObject`/`ItemModifier` 是真实对象引用。读档后 `MBObjectManager` 会重新解析这些对象，且 `CalculateCachedStatsOnLoad` 会把未就绪的物品**替换成 `Trash` 并注销旧对象**。所以：**不要把 `ItemRosterElement`/其内部的 `ItemObject` 引用作为长期状态跨存档保存**；需要时按 `ItemObject`（用 `MBGUID`/`StringId`）重新查询。
2. **不要用反射改内部数组**：缓存量（`TotalValue` 等）只在公开写入口 `AddToCounts`/移除路径里增量维护。绕过公开 API 直接改 `_data`/`_count` 会让缓存与真实库存脱节，且不会触发 `RosterUpdatedEvent` / 自增 `VersionNo`，导致依赖方读到旧数据。
3. **转移物品别只改一边**：把 A 的物品给 B 时，若你只 `A.ItemRoster.AddToCounts(x,-n)` 而没在 B 上加、或没走 `GiveItemAction`/`SellItemsAction`，会破坏经济一致性（金钱、买卖事件、贸易 AI 计数全部错位）。**凡涉及金钱或双方库存，用 Action。**
4. **装备 vs 交易品 vs 粮食的混淆**：列表是扁平的，什么都有。`TotalValue` 把一切计入；只有 `TradeGoodsTotalValue` 才是纯交易品；`TotalFood` 含牲口产肉。写逻辑时务必用 `ItemObject.IsTradeGood` / `IsFood` / `HasHorseComponent` 正确分类，别假设「每个元素都是武器/都是货」。
5. **负数扣减的边界**：`AddToCounts(item, -n)` 当该物品不存在会 `Debug.FailedAssert`（开发版直接弹断言）；扣到 `<= 0` 元素被移除、索引前移。若你先缓存了下标再继续按同一下标操作，会指向错误物品。批量移除优先用 `RemoveIf`。
6. **`ItemRosterElement.Amount` 不允许直接设负**：`ItemRosterElement.Amount` setter 在负数时会抛 `MBUnderFlowException`。正常走 `AddToCounts` 不会触发（它内部用 `_amount += number` 字段级加法），但如果你自己 `new ItemRosterElement(...)` 后手动给 `Amount` 赋负就会炸。
7. **不要在读档/反序列化回调里写 roster**：`OnLoadStarted`/`CalculateCachedStatsOnLoad` 期间对象图尚未完全就绪，此时增删可能读到未初始化的关联对象。等 `Campaign.Current` 进入正常 tick 后再改。

## 典型用法示例

### 示例 1：读取玩家主队库存并增删物品

```csharp
// 真实获取路径：MobileParty.MainParty.Party.ItemRoster
ItemRoster roster = MobileParty.MainParty.ItemRoster;

// 遍历（IEnumerable<ItemRosterElement>）；元素是值拷贝，但 ItemObject 是真实实例
foreach (ItemRosterElement element in roster)
{
    ItemObject item = element.EquipmentElement.Item;
    int amount = element.Amount;
    float weight = element.GetRosterElementWeight(); // 单元素重量 = 单位重量 × 数量

    if (item.IsTradeGood)
    {
        // 仅统计交易品价值
        int unitValue = roster.GetElementUnitCost(/* 该元素下标 */ elementIndex);
    }
}

// 直接增删（无金钱往来时可用；会刷新缓存、VersionNo 并触发事件）
ItemObject booty = roster.GetItemAtIndex(0); // 任意真实来源，例如战利品第一个元素
int addedIndex = roster.AddToCounts(booty, 10);   // +10
roster.AddToCounts(booty, -3);                    // -3，结果归零会被移除、索引前移
int left = roster.GetItemNumber(booty);           // 剩余数量（推荐用按物查询，避免依赖 index）

// 读汇总派生量
int totalValue = roster.TotalValue;           // 全部物品总价值
int tradeValue = roster.TradeGoodsTotalValue; // 仅交易品
int food = roster.TotalFood;                  // 粮食（含牲口产肉）
```

### 示例 2：在两支部队间正确转移物品（用 Action）

```csharp
PartyBase giver = MobileParty.MainParty.Party;
PartyBase receiver = enemyParty.Party;

// 取一个真实物品引用（来自 giver 现有库存，避免硬编码 StringId）
ItemObject sword = giver.ItemRoster.GetItemAtIndex(0);

// 必须用 Action：它同时维护两边库存、金钱、买卖/赠予事件与缓存
ItemRosterElement toGive = new ItemRosterElement(sword, 1);
GiveItemAction.ApplyForParties(giver, receiver, in toGive);

// 之后不要再假设 giver 仍持有这把剑——它已被扣 1
int remaining = giver.ItemRoster.GetItemNumber(sword);
```

## 跨版本提示

- **v1.3.15 与 v1.4.5 的 `ItemRoster` 公开 API 一致**：`AddToCounts`、`Remove`、`Clear`、`GetItemNumber`、`TotalValue`/`TradeGoodsTotalValue`/`TotalFood` 等核心成员在两个版本源码中完全相同（已对照 `bannerlord-1.3.15/.../Roster/ItemRoster.cs` 与 `bannerlord-1.4.5/.../ItemRoster.cs`）。本页以 1.4.5 源码为准编写，对 1.3.15 同样适用。
- 「计数元素」在 1.3.15 / 1.4.5 中就是 `ItemRosterElement`（一个 `struct`，实现 `ISavedStruct`，含 `[SaveableField(11)] _amount` 与 `[SaveableProperty(21)] EquipmentElement`）。更早版本曾用 `ItemRosterElementCounter` 这一命名，本页以当前源码为准。
- 读档替换逻辑（`ReplaceInvalidItemsWithTrash` → `DefaultItems.Trash`）在两个版本行为相同。

## 参见

- [↑ 战役 API 索引](../../)
- [↑ Campaign](../../campaign/Campaign/) — 战役世界枢纽
- [↔ TroopRoster](../TroopRoster/) — 同族，管人员而非物品
- [↔ DefaultItems](../DefaultItems/) — 读档时未就绪物品回退到的 Trash
- [↔ GiveItemAction](../GiveItemAction/) — 跨主体给物品的正确入口
- [↔ SellItemsAction](../SellItemsAction/) — 出售物品的正确入口
- [↔ CampaignEvents](../CampaignEvents/) — 物品进出 roster 时广播的事件
- [↔ PartySizeLimitModel](../PartySizeLimitModel/) / [PartyWageModel](../PartyWageModel/) — 由携带量推算规模/工资
- [↔ SettlementFoodModel](../SettlementFoodModel/) — 粮食消耗相关
- [↔ InventoryLogic](../InventoryLogic/) — 玩家背包 UI 背后的搬运逻辑
- [上游 PartyBase](../../campaign/PartyBase/) — `ItemRoster` 的真实持有者
- [上游 Settlement](../../campaign/Settlement/) — `ItemRoster` 与 `Stash`
- [上游 MobileParty](../../campaign/MobileParty/) — 部队物品栏
- [上游 ItemObject](../../core-extra/ItemObject/) — 列表元素的物品本体
- [上游 EquipmentElement](../../core-extra/EquipmentElement/) / [ItemModifier](../../core-extra/ItemModifier/) — 元素 = 物品 + 可选附魔
