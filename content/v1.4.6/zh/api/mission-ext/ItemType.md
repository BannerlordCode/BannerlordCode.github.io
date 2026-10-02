---
title: "ItemType"
description: "internal 的物品大类枚举：Diamond 大厅/库存子系统在网络数据里用的那一套值，由 ItemList 按 typeId 反查得出，mod 代码无法引用——要对物品分类请用公开的 ItemObject.ItemTypeEnum。"
---
# ItemType

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `internal enum ItemType`
**Source:** `TaleWorlds.MountAndBlade.Diamond/ItemType.cs`

## 概述

`ItemType` 是 `TaleWorlds.MountAndBlade.Diamond` 程序集里的一个 **`internal enum`**，共 26 个成员（`Invalid` 到 `ArmorExtra`，数值 0..25）。它是 Diamond 那一套大厅/库存数据协议里的物品大类标记。

**这一页要先把最重要的话说清楚：mod 代码引用不了它。** 声明就是 `internal enum ItemType`，而 `TaleWorlds.MountAndBlade.Diamond` 工程里没有任何 `InternalsVisibleTo`。mod 侧真正能用的物品分类是 `TaleWorlds.Core` 里 `ItemObject` 的嵌套枚举 `ItemObject.ItemTypeEnum`，那个是 public 且有完整页面。所以本页的价值在于**读懂引擎内部那条转换链**，以及**避开一个高频名字混淆**。

**名字混淆是真实存在的。** 全树里叫 `ItemType` 的东西只有一个——就是这个 `internal` 枚举。但现有文档正文里出现的 `ItemType` 十几次，**全部**是 `ItemObject.ItemTypeEnum` 的成员用法（`item.ItemType`），跟本页这个类型无关。把两者混为一谈会写出编不过的代码。

## 心智模型

**它是怎么被用起来的：一条两步的转换链。** 第一步是取值：`ItemData` 里那个 `private ItemType ItemType` 属性，getter 转发 `ItemList.GetItemTypeOf(this.TypeId)`，而 `ItemList` 的实现只是 `return ItemList._items[typeId].Type;`——**从一张以 typeId 为键的字典里查出来**。也就是说这个枚举不是从 XML 现场解析的，是 Diamond 侧的物品清单预置好的。

第二步是映射：`ItemData.GetInventoryItemTypeOfItem(ItemType itemType)` 是一个长 switch，把上面 26 个值里的一部分折成一个 `int`，再强转成同命名空间的 `InventoryItemType`（那是另一个 `internal enum`，带 `[Flags]`，值是 `None=0 / Weapon=1 / Shield=2 / HeadArmor=4 / BodyArmor=8 / LegArmor=16 / HandArmor=32 / Horse=64 / HorseHarness=128 / Goods=256 / Book=512 / Animal=1024 / Cape=2048`）。switch 之外的分支一律落到 `return 0;`。

**这条链的终点是拖放合法性判定。** `ItemData.CanItemToEquipmentDragPossible(string itemTypeId, int equipmentIndex)` 先把物品折成 `InventoryItemType`，然后按槽位编号硬编码比较：0..3 只接受 `Weapon` 或 `Shield`，5 接受 `HeadArmor`，6 接受 `BodyArmor`，7 接受 `LegArmor`，8 接受 `HandArmor`，9 接受 `Cape`，10 接受 `Horse`，11 接受 `HorseHarness`，其余槽位一律 false。**注意 4 号槽位没被列举，会落到最后那个 false。**

**两套枚举不是一一对应的。** `ItemType` 有 26 个成员而 `ItemObject.ItemTypeEnum` 的成员更多也更细（比如后者有 `Banner`、`Sling`、`SlingStones`、`ArmArmor` 这些 `ItemType` 里没有的）。名字相同的那些值在语义上也基本对齐（`Horse` / `OneHandedWeapon` / `Arrows` / `HeadArmor` / `BodyArmor` / `LegArmor` / `HandArmor` / `Goods` / `Book` / `Animal` / `Cape` / `HorseHarness`），但**不要试图写一个双向转换函数**，两边有缺口。

**mod 该走哪条路。** 需要判断「这个物品是不是某一大类」时，用 `item.ItemType`（即 `ItemObject.ItemTypeEnum`）；需要判断「这个物品能不能进这个装备槽」时，用 `Equipment.IsItemFitsToSlot(EquipmentIndex, ItemObject)`。后者是引擎公开的同一类判定的正规入口，也是 [EquipmentIndex](../../core-extra/EquipmentIndex) 页里说的那套规则。注意 `Equipment` 的 `set` 索引器虽然**调用**了它却没有**使用**返回值，所以想校验必须自己显式调。

## 关键成员

### 枚举值（按声明顺序，数值 0..25）

| 成员 | 数值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Invalid` | 0 | 无效/未分类。折算成 `InventoryItemType` 时落到 `return 0` |
| `Horse` | 1 | 马匹。折成 `Horse`（64），可进 10 号马铠槽 |
| `OneHandedWeapon` | 2 | 单手武器。折成 `Weapon`（1） |
| `TwoHandedWeapon` | 3 | 双手武器。折成 `Weapon`（1） |
| `Polearm` | 4 | 长柄武器。折成 `Weapon`（1） |
| `Arrows` | 5 | 箭。折成 `Weapon`（1） |
| `Bolts` | 6 | 弩箭。折成 `Weapon`（1） |
| `Shield` | 7 | 盾。折成 `Shield`（2） |
| `Bow` | 8 | 弓。折成 `Weapon`（1） |
| `Crossbow` | 9 | 弩。折成 `Weapon`（1） |
| `Thrown` | 10 | 投掷武器。折成 `Weapon`（1） |
| `Goods` | 11 | 贸易品。折成 `Goods`（256） |
| `HeadArmor` | 12 | 头部护甲。折成 `HeadArmor`（4），可进 5 号槽 |
| `BodyArmor` | 13 | 躯干护甲。折成 `BodyArmor`（8），可进 6 号槽 |
| `LegArmor` | 14 | 腿甲。折成 `LegArmor`（16），可进 7 号槽 |
| `HandArmor` | 15 | 手甲。折成 `HandArmor`（32），可进 8 号槽 |
| `Pistol` | 16 | 手枪。折成 `Weapon`（1） |
| `Musket` | 17 | 长枪。折成 `Weapon`（1） |
| `Bullets` | 18 | 子弹。折成 `Weapon`（1） |
| `Animal` | 19 | 动物。折成 `Animal`（1024） |
| `Book` | 20 | 书。折成 `Book`（512） |
| `ChestArmor` | 21 | 胸甲。与 `BodyArmor` 并存，但 switch 只处理后者，**它落到 `return 0`** |
| `Cape` | 22 | 披风。折成 `Cape`（2048），可进 9 号槽 |
| `HorseHarness` | 23 | 马具。折成 `HorseHarness`（128），可进 11 号槽 |
| `MultiplayerPerk` | 24 | 多人天赋。**不在任何 switch 分支里** |
| `ArmorExtra` | 25 | 额外护甲。**不在任何 switch 分支里** |

### 使用它的两个宿主成员（同工程，均非 public）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ItemData.ItemType` | `private ItemType ItemType`（属性，`{ get; }`） | 从 `ItemList.GetItemTypeOf(TypeId)` 反查本枚举的值。`TypeId` 不在字典里会抛 |
| `ItemData.GetInventoryItemTypeOfItem` | `private static int GetInventoryItemTypeOfItem(ItemType)` | 上面那张 switch 表，把本枚举折成 `InventoryItemType` 的底层数值 |
| `ItemData.CanItemToEquipmentDragPossible` | `public bool CanItemToEquipmentDragPossible(int equipmentIndex)` 与 `public static bool CanItemToEquipmentDragPossible(string itemTypeId, int equipmentIndex)` | **同工程里唯一两个 public 的入口**。内部把物品折成 `InventoryItemType` 后按槽位编号比较。第二个参数是裸 `int`，槽位 4 没有任何分支，落 false |

## 真实示例

mod 侧不要碰这个枚举。统计物品大类分布，用公开的 `ItemObject.ItemTypeEnum`：

```csharp
public class ItemTypeHistogram
{
    private readonly Dictionary<ItemObject.ItemTypeEnum, int> _counts =
        new Dictionary<ItemObject.ItemTypeEnum, int>();

    public void Add(ItemObject item)
    {
        if (item == null || item.ItemType == ItemObject.ItemTypeEnum.Invalid)
        {
            return;
        }

        int current;
        _counts.TryGetValue(item.ItemType, out current);
        _counts[item.ItemType] = current + 1;
    }

    public string ToLine()
    {
        return string.Join(", ", _counts.Keys);
    }
}
```

扫一遍战役里已注册的全部物品并分类：

```csharp
public class ItemTypeInventory : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickClanEvent += OnDailyTickClan;
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnDailyTickClan(Clan clan)
    {
        if (clan == null)
        {
            return;
        }

        ItemTypeHistogram histogram = new ItemTypeHistogram();
        MBReadOnlyList<ItemObject> items = Game.Current.ObjectManager.GetObjectTypeList<ItemObject>();
        for (int i = 0; i < items.Count; i++)
        {
            histogram.Add(items[i]);
        }

        Debug.Print("item type buckets: " + histogram.ToLine(), 0);
    }
}
```

判断物品能否进某个装备槽——这是上面那条 `internal` 转换链的公开替代品：

```csharp
ItemObject bow = Game.Current.ObjectManager.GetObjectTypeList<ItemObject>()[0];
if (bow != null)
{
    bool fitsHand = Equipment.IsItemFitsToSlot(EquipmentIndex.WeaponItemBeginSlot, bow);
    bool fitsSecondHand = Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon1, bow);
    Debug.Print(bow.StringId + " itemType=" + bow.ItemType
        + " weaponSlot=" + fitsHand
        + " secondWeaponSlot=" + fitsSecondHand
        + " isTradeGood=" + bow.IsTradeGood, 0);
}
```

## 风险与边界

- **`internal`，mod 无法引用**：`TaleWorlds.MountAndBlade.Diamond.csproj` 里没有 `InternalsVisibleTo`，`ItemType` 声明为 `internal enum`。写 `using TaleWorlds.MountAndBlade.Diamond;` 之后用 `ItemType` 会得到「不可访问」编译错误。
- **同名的 `ItemObject.ItemTypeEnum` 才是 mod 该用的那个**：现有文档正文里十几处 `ItemType` 全部指它。这两者没有继承关系、没有类型转换关系。
- **名字相同的值不等于语义相同**：`ChestArmor` 与 `BodyArmor` 并存，而映射 switch **只处理 `BodyArmor`**，`ChestArmor` 会落到 `return 0`。写基于「两边同名即等价」的转换会静默出错。
- **映射表有缺口**：`MultiplayerPerk`、`ArmorExtra`、`ChestArmor` 都不在任何分支里，一律得到 0（即 `InventoryItemType.None`）。
- **槽位判定里 4 号是空洞**：`CanItemToEquipmentDragPossible` 显式列举了 0..3、5..11，**没有 4**，落到末尾的 false。
- **`GetItemTypeOf` 是字典直查**：`ItemList._items[typeId]` 没有 TryGetValue 兜底，typeId 不存在会抛而不是返回 `Invalid`。
- **这个枚举不参与存档**：它属于 Diamond 的网络数据协议（大厅、库存、物品清单），不是战役存档字段。战役侧要持久化请用 `ItemObject`。
- **改不动也不用改**：它是 `internal` 且没有 `InternalsVisibleTo`，mod 既不能扩展也不能替换。要改物品分类只能改 XML 里的 `type` 属性，那条路进的是 `ItemObject.ItemTypeEnum`。

## 依赖关系

- mod 侧对应物：[ItemObject](../../core-extra/ItemObject) 的 `ItemType` 与 `ItemTypeEnum` —— 这才是公开、可引用、有完整语义的那个枚举。
- 装备判定：[Equipment](../../core-extra/Equipment) 的 `IsItemFitsToSlot` 与 [EquipmentIndex](../../core-extra/EquipmentIndex) 的槽位编号 —— 上面那条 `internal` 转换链的公开替代品。
- 同桶宿主：`ItemData`、`ItemList`、`InventoryItemType` 三个类型都在 `TaleWorlds.MountAndBlade.Diamond` 命名空间，页���尚未撰写，现为纯文本。其中 `ItemData` 是唯一带 public 成员的入口。
- 物品读取：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObjectTypeList` —— 示例里枚举全部物品的来源。
- 桶导览：[mission-ext 桶导览](../) · 架构：[模块地图](../../../architecture/module-map)