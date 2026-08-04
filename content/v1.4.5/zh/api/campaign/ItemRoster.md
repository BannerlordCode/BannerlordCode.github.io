---
title: "ItemRoster"
description: "由 Party 或 Settlement 持有的物品数量集合；负责按 EquipmentElement 合并库存、维护缓存并发出更新事件。"
---
# ItemRoster

**Namespace:** `TaleWorlds.CampaignSystem.Roster`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IEnumerable, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`  
**Base:** `IReadOnlyList<ItemRosterElement>`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Roster/ItemRoster.cs`

## 一句话职责

`ItemRoster` 是一个持有 `ItemRosterElement` 数量的库存容器：它按物品和修饰器合并条目、维护食物/价值/牲畜缓存，并在数量变化时通知拥有者相关系统。

## 心智模型

先区分三种 roster：`MobileParty.ItemRoster` 或 `Settlement.ItemRoster` 是世界状态中的权威容器；`new ItemRoster(existingRoster)` 是交易、战利品或菜单用的独立副本；`InventoryLogic` 内部的多个 roster 是一次库存交互的工作集。只有第一类会直接影响世界中的部队或据点。

每条记录是 `ItemRosterElement`，它包含 `EquipmentElement`（`ItemObject`、可选 `ItemModifier` 等）和非负 `Amount`。同一个物品但不同修饰器是不同条目。`AddToCounts` 改变数量、更新 `VersionNo`、刷新缓存并调用 `RosterUpdatedEvent`；`GetElementCopyAtIndex` 返回值副本，改副本不会改库存。

`ItemRoster` 位于 Campaign 状态层，连接 [ItemObject](../../core-extra/ItemObject) / [EquipmentElement](../../core-extra/EquipmentElement) 的内容定义与 [MobileParty](../MobileParty) / [Settlement](../Settlement) 的持有者。它不是跨容器事务管理器；派对之间的物品转移应经过 [GiveItemAction](../../campaign-ext/GiveItemAction)、[SellItemsAction](../../campaign-ext/SellItemsAction) 或库存流程，避免漏掉事件、金钱和市场缓存。

## 何时用 / 何时不要用

### 适合使用

- 读取当前 Party/Settlement 的数量：`GetItemNumber`、`FindIndexOfItem`、枚举 `ItemRosterElement`，或读取 `TotalFood`、`TotalValue`、`FoodVariety`。
- 给一个明确的世界容器增加/减少已经注册的物品：`AddToCounts(ItemObject, number)` 或带 `EquipmentElement` 的重载。
- 在交易/战利品算法中使用副本，先用 `GetElementCopyAtIndex` 获取稳定值，再在实际确认阶段向权威 roster 应用变化。
- 订阅 `RosterUpdatedEvent` 以刷新自己拥有的 UI/缓存，并在对象销毁或 listener 不再需要时取消订阅。

### 不要这样用

- 不要通过 `new ItemRoster()` 替换 Party 或 Settlement 的既有 roster；拥有者、存档和订阅者仍持有原对象。
- 不要直接改 `ItemRosterElement.Amount` 的副本来“修改库存”；使用 `AddToCounts`，让缓存和事件一起变化。
- 不要用 `TotalValue` 当交易最终价格，也不要手动修改 `TotalFood`、`FoodVariety` 等缓存；它们由条目变化和读档重算维护。
- 不要在跨 Party/Settlement 转移时只在两边调用 `AddToCounts`，除非你已经明确承担交易事件、金钱、税收、任务和库存交换事件的全部副作用；普通转移应走相应 Action/InventoryLogic。
- 不要在枚举期间改变同一个 roster，也不要把索引跨越一次 `AddToCounts`/删除操作保存下来；删除会用最后一个元素填补空洞。

## 依赖关系

```text
ItemObject + ItemModifier
        -> EquipmentElement
        -> ItemRosterElement (Amount >= 0)
        -> ItemRoster
           -> VersionNo / cached food-value-animal stats
           -> RosterUpdatedEvent
        -> MobileParty / Settlement / InventoryLogic
        -> GiveItemAction / SellItemsAction / CampaignEvents
```

- **上游：** [ItemObject](../../core-extra/ItemObject)、[EquipmentElement](../../core-extra/EquipmentElement) 和 `ItemModifier` 提供条目身份；未注册或未准备对象不能安全进入存档 roster。
- **拥有者：** [PartyBase](../PartyBase) 创建并持有 Party inventory；[MobileParty](../MobileParty) 暴露其 Party roster；[Settlement](../Settlement) 的 `ItemRoster` 由 settlement Party 暴露。
- **更新下游：** `SettlementComponent.OnInventoryUpdated`、Town market data、食物消耗、贸易、Workshop 和 AI 行为订阅或读取更新；事件触发顺序是数量变化中的一部分。
- **流程下游：** `GiveItemAction`、`SellItemsAction`、`InventoryLogic` 和 `CampaignEvents` 将容器变化与 Party/Settlement、金钱、税收、任务和 UI 连接起来。

## 关键成员与行为

| 成员 | 用途、副作用、调用时机 |
|---|---|
| `Count` / `this[int]` / `GetEnumerator` | 读取当前条目数量和 `ItemRosterElement` 值；索引只在当前操作前有效，条目顺序不是稳定的持久化 ID。 |
| `VersionNo` | 每次 `AddToCounts`、`Clear` 和显式版本更新后递增；适合作为 UI/缓存失效提示，不是世界时间或存档版本。 |
| `GetItemNumber(ItemObject)` / `FindIndexOfItem` | 按物品定义查询，不把不同 `ItemModifier` 的逻辑混成一个带修饰器条目；要比较完整元素使用 `FindIndexOfElement`。 |
| `GetElementCopyAtIndex` / `GetElementNumber` / `GetElementUnitCost` | 安全读取一份元素、数量和基础单位价值；越界会断言并返回 Invalid/0，不应把返回值当成功结果。 |
| `AddToCounts(ItemObject, int)` | 用无 modifier 的 `EquipmentElement` 合并数量；`number == 0` 不做事，负数删除数量，删除不存在的负数条目会触发失败断言。 |
| `AddToCounts(EquipmentElement, int)` | 按完整装备元素匹配，更新 `TotalValue`、贸易价值、食物、马匹缓存，发出 `RosterUpdatedEvent`，再增加 `VersionNo`。数量降至 0 时移除条目。 |
| `Add` / `Remove` / `RemoveIf` | 组合式增减。`RemoveIf` 的回调返回要移除的数量，并返回实际移除的元素集合；它仍会逐条触发更新逻辑。 |
| `Clear` | 清空所有条目、重算缓存、发出一次默认元素更新事件并递增版本；不要对权威 Party roster 随意调用。 |
| `RosterUpdatedEvent` | 参数是受影响的元素和数量变化；Settlement/market 等监听器据此更新状态。订阅者不能假设事件只来自玩家。 |
| `RostersAreIdentical` / `SelectRandomIndex` | 前者比较物品、数量和 modifier；后者按正权重随机返回索引，无可选项返回 `-1`。两者都不改库存。 |

## 真实获取与示例

### 读取并安全调整玩家 Party 的粮食

`MobileParty.MainParty.ItemRoster` 是真实的权威获取路径。读取前先确认数量，再用 `AddToCounts` 维护缓存：

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;

ItemRoster roster = MobileParty.MainParty.ItemRoster;
int currentGrain = roster.GetItemNumber(DefaultItems.Grain);
int amountToRemove = Math.Min(currentGrain, 3);

if (amountToRemove > 0)
{
    roster.AddToCounts(DefaultItems.Grain, -amountToRemove);
}
```

### 读取 settlement 库存并制作工作副本

`Settlement.CurrentSettlement.ItemRoster` 是玩家当前据点库存（仅在当前据点存在时有效）。副本适合排序、比较或预览，不会改变据点：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Roster;

Settlement settlement = Settlement.CurrentSettlement;
if (settlement != null)
{
    ItemRoster preview = new ItemRoster(settlement.ItemRoster);
    ItemRosterElement first = preview.Count > 0
        ? preview.GetElementCopyAtIndex(0)
        : ItemRosterElement.Invalid;
}
```

### 跨 Party 转移

当来源和接收方都是真实 Party 时，先从来源取得元素副本，再交给 [GiveItemAction](../../campaign-ext/GiveItemAction)。不要用一个临时 `ItemRoster` 冒充权威库存：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;

MobileParty receiver = MobileParty.ConversationParty;
if (receiver != null && receiver.Party != null && MobileParty.MainParty.ItemRoster.Count > 0)
{
    ItemRosterElement item = MobileParty.MainParty.ItemRoster.GetElementCopyAtIndex(0);
    GiveItemAction.ApplyForParties(PartyBase.MainParty, receiver.Party, in item);
}
```

这样才会沿着 Action 的 Party 转移路径发出相应的赠送事件；普通交易仍应使用 `SellItemsAction` 或 `InventoryLogic`，而不是手动拆分数量。

## 风险与生命周期

- **权威对象：** Party/Settlement roster 是持有者的一部分。把副本写回不到世界，也不要替换属性背后的 roster 实例；这样会让存档、缓存和订阅者各自指向不同状态。
- **缓存一致性：** `TotalFood`、`FoodVariety`、`TotalValue`、`TradeGoodsTotalValue` 和牲畜计数依赖 `OnRosterUpdated`/`CalculateCachedStats`。直接改条目数组、`Amount` 或缓存会让食物消耗、速度、市场和 AI 使用旧值。
- **条目身份：** `EquipmentElement` 的 modifier 会参与合并/比较；只按 `ItemObject` 查询可能看不到某个带 modifier 的精确条目。`ItemRosterElement.Amount` 不能为负，负数 setter 会抛出 underflow。
- **索引与修改：** 删除条目会用最后一项填补当前位置，缓存的索引和正在进行的枚举可能失效。先复制元素或倒序处理，再修改 roster。
- **事件时机：** `RosterUpdatedEvent` 在数量变化期间发出，监听器可能立即重算市场、食物或 UI。不要在事件回调中无条件再次改同一 roster，以免递归和重复消费。
- **存档加载：** roster 的 `_data` 与 `_count` 被序列化；加载结束时会移除零数量条目、重算缓存，并把未准备好的物品/修饰器替换或清理。自定义物品必须先注册且保持稳定 ID，否则读档可能得到 Trash、空槽或损失数量。
- **跨系统事务：** 直接两边增减不会自动派发 `CampaignEvents`、税收、交易技能或任务进度。涉及世界关系的操作应使用 Action 或 `InventoryLogic`，并避免在 Campaign/Mission 不允许的阶段写入。

## 版本注意

本页按 v1.4.5 `ItemRoster.cs` 的缓存与加载修复逻辑描述。1.3.15 的市场/库存行为可能订阅不同事件，但“ItemObject 是定义、ItemRosterElement 携带数量、权威 roster 不能用副本替换”的边界仍应以目标版本实现复核。

## 导航

- **↑ Parent:** [Campaign API](./)
- **↔ Sibling:** [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [Settlement](../Settlement) · [TroopRoster](../TroopRoster)
- **相关类型:** [ItemObject](../../core-extra/ItemObject) · [Equipment](../../core-extra/Equipment) · [EquipmentElement](../../core-extra/EquipmentElement) · [GiveItemAction](../../campaign-ext/GiveItemAction) · [SellItemsAction](../../campaign-ext/SellItemsAction)
