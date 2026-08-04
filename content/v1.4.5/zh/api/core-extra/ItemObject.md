---
title: "ItemObject"
description: "已注册物品定义的身份、组件能力和可交易属性；它描述物品是什么，不持有部队库存数量。"
---
# ItemObject

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public sealed class ItemObject : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs`

## 一句话职责

`ItemObject` 是 ObjectManager 中一个已注册物品的共享定义：它提供名称、类型、组件、基础价值和重量等静态事实，但不表示某个部队拥有多少件物品。

## 心智模型

把它看成“物品目录中的一行”，而不是背包中的一格。XML、默认物品注册或 Mod 的内容加载阶段创建并注册它；战役运行时，`MobileParty`、`Settlement` 和 `EquipmentElement` 只引用这个已注册对象。库存数量、物品修饰器和任务物品状态由 `ItemRosterElement` / `EquipmentElement` 携带，不能写回 `ItemObject` 来改变单个持有者。

它属于 `TaleWorlds.Core` 的内容定义层，位于 [Equipment](../Equipment) 和 [EquipmentElement](../EquipmentElement) 的上游，也被 [ItemRoster](../../campaign/ItemRoster)、角色装备、交易模型和任务行为读取。对象的 `StringId`、`Id` 和 `IsReady` 是注册/加载身份；一旦对象被多个系统引用，卸载或替换它会影响存档、装备解析和库存显示。

## 何时用 / 何时不要用

### 适合使用

- 查询物品类别：`ItemType`、`IsFood`、`IsTradeGood`、`IsAnimal`、`IsMountable` 和组件标志。
- 读取基础经济与负重输入：`Value`、`Weight`、`Difficulty`、`Tier`、`RelevantSkill`。最终转移价格仍应交给 [Town](../../campaign/Town) / `ItemValueModel` 等当前系统。
- 通过稳定的 `StringId` 从 [MBObjectManager](../../campaign-ext/MBObjectManager) 取得已加载的物品，再把它放入 [ItemRoster](../../campaign/ItemRoster) 或构造 `EquipmentElement`。
- 需要判断武器、马匹、护甲、商品或旗帜时，优先使用 `HasWeaponComponent`、`HasHorseComponent`、`HasArmorComponent` 等类型化属性，而不是猜测组件对象。

### 不要这样用

- 不要把 `ItemObject` 当成库存记录或尝试直接写入 `Value`；修改 `ItemComponent` 或替换全局对象都不是安全的 mod 入口，这些属性大多是私有 setter，强行改引用会污染所有持有者。
- 不要在 ObjectManager 尚未完成注册时缓存一个临时 `new ItemObject("grain")`。未注册对象无法被正常的 XML、装备或存档身份解析；应在内容加载完成后使用 `DefaultItems.Grain` 或 ObjectManager 查询结果。
- 不要用 `Value` 代替当前交易价格，也不要用 `IsTransferable` 绕过 `InventoryLogic`、税收、任务和交易事件。
- 不要把 `ItemObject` 直接当作 `ItemRosterElement` 传给需要数量/修饰器的 API；库存转移需要 `EquipmentElement` 或 `ItemRosterElement`。

## 依赖关系

```text
内容 XML / DefaultItems / ObjectManager
        -> ItemObject (共享定义与 StringId)
        -> EquipmentElement (Item + ItemModifier + CosmeticItem)
        -> Equipment / CharacterObject 装备槽
        -> ItemRosterElement (EquipmentElement + Amount)
        -> MobileParty / Settlement.ItemRoster
        -> GiveItemAction / SellItemsAction / InventoryLogic / Models
```

- **上游：** 内容加载器、`DefaultItems` 和 [MBObjectManager](../../campaign-ext/MBObjectManager) 决定对象何时可查找；`MBObjectBase` 提供注册身份和准备状态。
- **同层组成：** [EquipmentElement](../EquipmentElement) 把物品和 `ItemModifier`、外观物品、任务物品标志组合成一个值；[Equipment](../Equipment) 把这些值放入战斗/平民/潜行槽位。
- **下游库存：** [ItemRoster](../../campaign/ItemRoster) 按 `EquipmentElement` 合并数量，并把 `RosterUpdatedEvent` 通知给 settlement component、市场和行为。
- **下游流程：** [GiveItemAction](../../campaign-ext/GiveItemAction) 和 [SellItemsAction](../../campaign-ext/SellItemsAction) 负责跨 Party/Settlement 转移及事件/金钱副作用；查询 `ItemObject` 本身不会触发这些副作用。

## 关键成员与使用时机

| 成员 | 用途与边界 |
|---|---|
| `StringId` / `Id` / `IsReady` | 用于注册身份、存档引用和加载完成判断；不要用显示名作为持久化键。 |
| `Name` / `ItemType` / `ItemCategory` | UI 与分类读取；`Name` 是 `TextObject`，不等于稳定 ID。 |
| `ItemComponent` 与 `WeaponComponent` / `HorseComponent` / `ArmorComponent` / `TradeItemComponent` | 读取专业数据。先用 `Has*Component` 判断，再访问对应组件。 |
| `Value` / `Weight` / `Difficulty` / `Tier` / `RelevantSkill` | 提供基础定义和模型输入；实际价格、技能收益和可转移性可能由 Model 或上下文改变。 |
| `IsFood` / `IsTradeGood` / `IsAnimal` / `IsMountable` / `IsTransferable` | 让食物、贸易、牲畜、坐骑和库存逻辑采用正确分支；`IsTransferable` 依赖当前 `Game.Current.BasicModels`，不能在游戏未初始化时当纯字段使用。 |
| `InitializeTradeGood(name, meshName, category, value, weight, itemType)` | 仅适合游戏内容初始化阶段生成贸易品定义；它不是把物品加入库存的 API，也不能替代注册流程。 |

`ItemObject` 的这些成员是“定义层事实”。真正的数量由 `ItemRoster.AddToCounts` 维护，装备槽替换应在拥有该装备的角色/流程边界内进行，跨持有者转移则走 Action。

## 真实获取与示例

### 读取已注册物品并加入当前玩家库存

`DefaultItems.Grain` 是游戏已经注册的默认物品；`MobileParty.MainParty.ItemRoster` 是当前玩家 Party 的权威库存。这个示例改变的是库存数量，不改变 `ItemObject` 定义：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

ItemObject grain = DefaultItems.Grain;
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 5);
```

对于由 XML 或其他模块注册的物品，必须在对象加载完成后通过稳定 ID 查找，并检查返回值：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject hardwood = MBObjectManager.Instance.GetObject<ItemObject>("hardwood");
if (hardwood != null && hardwood.IsReady && hardwood.IsTransferable)
{
    MobileParty.MainParty.ItemRoster.AddToCounts(hardwood, 10);
}
```

### 从装备元素读取定义

当代码拿到角色的战斗装备时，`EquipmentElement.Item` 才是 `ItemObject`；`ItemModifier` 和 `Amount` 不能从 ItemObject 推导：

```csharp
EquipmentElement mainHand = Hero.MainHero.BattleEquipment[EquipmentIndex.WeaponItemBeginSlot];
ItemObject equippedItem = mainHand.Item;
if (equippedItem != null && equippedItem.HasWeaponComponent)
{
    WeaponComponentData weapon = equippedItem.PrimaryWeapon;
}
```

跨 Party 或 settlement 交易时不要手动从双方 roster 扣加数量；应把当前的 `ItemRosterElement` 交给 [GiveItemAction](../../campaign-ext/GiveItemAction) / [SellItemsAction](../../campaign-ext/SellItemsAction)，让事件、金钱、税收和市场缓存保持一致。

## 风险与生命周期

- **ObjectManager 身份：** `ItemObject` 通过 `StringId`/`MBGUID` 被 `EquipmentElement` 和存档引用。给装备或库存放入未注册/未准备对象，读档时可能解析成空对象、触发断言或污染相关数据。
- **共享定义污染：** 一个 ItemObject 被所有持有者共享。改变它的组件、价值或类型会同时改变市场、装备、AI 和 UI 对它的理解；不要用反射修改私有 setter。
- **加载阶段：** `Game.Current`、`MBObjectManager.Instance`、`BasicModels` 未准备好时不要访问 `IsTransferable`、`Tier` 等会向模型取值的属性；把读取放在 SubModule/战役已经完成初始化之后。
- **存档边界：** 物品身份可以被保存，但“库存中有几件”在 `ItemRosterElement.Amount`，装备修饰器在 `EquipmentElement`。增加自定义物品定义必须保证稳定 ID、组件和注册顺序，否则旧存档可能得到错误装备或空引用。
- **数量副作用：** 直接调用拥有者 roster 的 `AddToCounts` 适合明确的单个库存调整；跨容器转移不能只扣一边，否则 `HeroOrPartyGaveItem`、`OnItemSold`、金钱和相关缓存不会同步。

## 版本注意

本页按 v1.4.5 `ItemObject.cs` 的 `ItemComponent`、`Tierf`/`Tier`、`IsTransferable` 和类型化组件属性描述。v1.3.15 的公开成员和内容注册可能不同；跨版本 Mod 应以目标版本实际程序集的对象注册和组件契约为准，不要把 1.4.5 的组件名称硬编码成通用 ABI。

## 导航

- **↑ Parent:** [Core-extra API](./)
- **↔ Sibling:** [Equipment](../Equipment) · [EquipmentElement](../EquipmentElement) · [ItemModifier](../ItemModifier)
- **相关类型:** [ItemRoster](../../campaign/ItemRoster) · [MobileParty](../../campaign/MobileParty) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [MBObjectBase](../../core/MBObjectBase)
