---
title: "InventoryScreenHelper"
description: "v1.4.5 中负责创建交易、战利品、储藏和物品转移库存状态的战役辅助类。"
---
# InventoryScreenHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class InventoryScreenHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## 职责

`InventoryScreenHelper` 是战役库存界面的入口层。它创建 [InventoryState](../../campaign/InventoryState)，配置其中的 [InventoryLogic](../../campaign/InventoryLogic)，再通过 [GameStateManager](../../core-extra/GameStateManager) 压入状态栈。它不持有一个可复用的界面实例，也不替代物品栏或定居点系统；实际的转移逻辑和完成回调会在之后处理这些状态变化。

## 心智模型

每个公开的 `OpenScreen` 入口都可以按同一个三段式转换理解：

```text
真实战役上下文 -> InventoryState + InventoryLogic -> GameStateManager.PushState
```

方法名决定初始化契约。交易入口设置交易模式并挂接商人或商队金币监听器；战利品、储藏、仓库和接收物品入口选择相应模式并组合物品栏；`OpenScreenAsInventoryOf` 则用于非交易的物品查看或转移。关闭时，`CloseScreen` 让 `InventoryLogic.DoneLogic()` 完成当前判断，调用可选完成委托，清空逻辑和委托，最后弹出状态。

这是状态工厂，不是需要实例化、继承或缓存的服务。调用前必须已经处于拥有可用 `Game.Current`、状态管理器和真实物品栏的战役上下文。

## 何时使用与何时不要使用

- **适合使用：** 调用方已经拥有真实的 `ItemRoster`、`PartyBase`、`MobileParty`、`SettlementComponent` 或对应完成回调，并且明确知道要打开哪一种库存流程。
- **读取活动状态：** 只有在调用方确定当前活动状态就是 `InventoryState` 时才使用 `GetActiveInventoryState`；其他状态活动时源码会断言并返回 `null`。
- **不要实例化：** 该类型是静态类，所有方法都在内部创建状态。
- **不要把 `CloseScreen` 当作无副作用的导航：** `DoneLogic`、库存回调、交易监听器和物品栏逻辑可能在弹出状态前提交或拒绝变化。
- **不要随意传入战利品字典或 party：** 战利品入口直接读取 `PartyBase.MainParty` 键，输入物品栏也必须与所选模式相匹配。

## 公开入口

### 库存模式与筛选枚举

```csharp
public enum InventoryMode
{
    Default,
    Trade,
    Loot,
    Stash,
    Warehouse
}

[Flags]
public enum InventoryItemType
{
    None = 0,
    Weapon = 1,
    Shield = 2,
    HeadArmor = 4,
    BodyArmor = 8,
    LegArmor = 0x10,
    HandArmor = 0x20,
    Horse = 0x40,
    HorseHarness = 0x80,
    Goods = 0x100,
    Book = 0x200,
    Animal = 0x400,
    Cape = 0x800,
    Banner = 0x1000,
    HorseCategory = 0xC0,
    Armors = 0x83C,
    Equipable = 0x18FF,
    All = 0xFFF
}

public enum InventoryCategoryType
{
    None = -1,
    All,
    Armors,
    Weapon,
    Shield,
    HorseCategory,
    Goods,
    CategoryTypeAmount
}
```

`InventoryMode` 描述界面流程。`InventoryItemType` 是库存 UI 使用的位掩码；`HorseCategory`、`Armors`、`Equipable` 和 `All` 是组合值，不是新的物品记录。`InventoryCategoryType` 会作为商人筛选传给 `InventoryLogic.Initialize`。

### 活动状态、交易确认和关闭

```csharp
public static InventoryState GetActiveInventoryState()
public static void PlayerAcceptTradeOffer()
public static void CloseScreen(bool fromCancel)
public static InventoryItemType GetInventoryItemTypeOfItem(ItemObject item)
```

`GetActiveInventoryState` 读取 `GameStateManager.Current.ActiveState`。如果活动状态不是 `InventoryState`，源码会输出失败断言并返回 `null`。`PlayerAcceptTradeOffer` 在活动逻辑存在时转发到 `SetPlayerAcceptTraderOffer`。`GetInventoryItemTypeOfItem` 将 `ItemObject.ItemTypeEnum` 映射为标志位；传入 `null` 或遇到未映射类型时返回 `None`。

`CloseScreen` 在取消关闭时先重置逻辑。只有 `DoneLogic()` 接受关闭后，辅助类才会执行 `DoneLogicExtrasDelegate`，清空委托和 `InventoryLogic`，再调用 `Game.Current.GameStateManager.PopState()`。

## 库存与转移入口分组

| 入口 | 源码定义的状态契约 |
| --- | --- |
| `OpenScreenAsInventory`、`OpenScreenAsInventoryOf`、`OpenScreenAsInventoryOfSubParty`、`OpenScreenAsInventoryForCraftedItemDecomposition` | 创建 `InventoryMode.Default` 的查看、party 转移、子 party 或锻造分解流程。 |
| `OpenScreenAsTrade`、`ActivateTradeWithCurrentSettlement`、`OpenTradeWithCaravanOrAlleyParty` | 设置 `InventoryMode.Trade`，开启交易并挂接定居点或商队 `InventoryListener`。 |
| `OpenScreenAsLoot`、`OpenScreenAsStash`、`OpenScreenAsWarehouse`、`OpenScreenAsReceiveItems` | 选择战利品、储藏、仓库模式或接收物品布局，并使用传入物品栏压入状态。 |

所有公开入口都会新建 `InventoryState`，赋值 `InventoryLogic`，必要时保存完成委托，然后压入状态栈；它们不会复用当前活动状态。

## 真实调用点

`PlayerTownVisitCampaignBehavior` 从真实定居点上下文打开交易和储藏界面。这些调用会改变 UI 状态，必须发生在对应的定居点流程中：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.Settlements;

InventoryScreenHelper.OpenScreenAsTrade(
    Settlement.CurrentSettlement.ItemRoster,
    Settlement.CurrentSettlement.Town);

InventoryScreenHelper.OpenScreenAsStash(
    Settlement.CurrentSettlement.Stash);
```

同一调用链还会从 town visit 菜单打开交易；`PlayerEncounter` 和商队行为则把真实战利品物品栏传给 `OpenScreenAsLoot`。该重载直接索引 `itemRostersToLoot[PartyBase.MainParty]`，所以调用方必须预先放入主 party 键。

库存 view model 会针对真实装备元素执行物品分类，而不是创建 `InventoryScreenHelper`：

```csharp
IsEquipableItem =
    (InventoryScreenHelper.GetInventoryItemTypeOfItem(
        newItem.EquipmentElement.Item)
     & InventoryScreenHelper.InventoryItemType.Equipable) != 0;
```

`SPItemVM` 中的这段源码只是在询问筛选标志，不会装备物品，也不会修改 `ItemRoster`。

## 依赖关系

- [InventoryState](../../campaign/InventoryState) 是被压入的游戏状态，保存活动的 [InventoryLogic](../../campaign/InventoryLogic) 和完成委托。
- [GameStateManager](../../core-extra/GameStateManager) 负责 `CreateState`、`PushState` 和 `PopState`；辅助类只是调用者。
- [ItemRoster](../../campaign/ItemRoster)、[PartyBase](../../campaign/PartyBase) 和 [MobileParty](../../campaign/MobileParty) 提供逻辑初始化所需的物品和 party 上下文。
- [ItemObject](../../core-extra/ItemObject) 提供 `GetInventoryItemTypeOfItem` 消费的物品类型。
- `MerchantInventoryListener` 通过 `SettlementComponent.ChangeGold` 写定居点金币；`CaravanInventoryListener` 写入 `MobileParty.PartyTradeGold`。

## 风险与版本边界

- `OpenScreenAsLoot` 直接查找 `itemRostersToLoot[PartyBase.MainParty]`；缺少该键会在状态显示前失败。
- 定居点交易监听器用 `SettlementComponent.ChangeGold` 应用金币差值，不应在自定义流程中改成直接写字段。
- 商队交易使用 `PartyTradeGold`，定居点交易使用 settlement component 金币；二者不是同一所有权路径。
- `OpenScreenAsInventory` 在作弊模式且测试基类未启用时可能填充测试物品。不要把它当作一般物品发放 API。
- `CloseScreen` 的 `fromCancel` 会改变是否重置当前逻辑；错误的关闭语义可能让转移被重置或提交。
- 这里的标志值和模式名称属于 v1.4.5 源码。组合标志应作为掩码使用，不应当成存档数据中的稳定 ID。

## 版本说明

本文按 v1.4.5 `InventoryScreenHelper.cs` 编写。该辅助类只负责临时库存 UI 编排；物品所有权、价格、容量和存档行为仍由关联状态、逻辑、物品栏和战役系统负责。

## 导航

- [↑ API system 索引](../)
- [同组：PartyScreenHelper](../PartyScreenHelper)
- [相关：InventoryState](../../campaign/InventoryState)
- [相关：InventoryLogic](../../campaign/InventoryLogic)
- [相关：GameStateManager](../../core-extra/GameStateManager)
- [English page](../../../../en/api/system/InventoryScreenHelper)
