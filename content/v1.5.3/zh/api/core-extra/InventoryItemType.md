---
title: "InventoryItemType"
description: "Diamond 层的物品分类位掩码：把物品分成武器、盾、各部位护甲、马、马具、货物、书、动物、披风，用于判断物品能拖进哪个装备槽。"
---

# InventoryItemType

**命名空间：** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `[Flags] internal enum InventoryItemType`
**Source:** `TaleWorlds.MountAndBlade.Diamond/InventoryItemType.cs`

## 概述

`InventoryItemType` 是 Diamond 层（多人/大厅）的一份物品分类位掩码。每个位权对应一个大类：武器、盾、头/身/腿/手护甲、马、马具、货物、书、动物、披风；`None` 是空集，而 `HorseCategory`、`Armors`、`Equipable`、`All` 是若干位打包出来的组合值。它的实际用途只有一个：`ItemData.CanItemToEquipmentDragPossible` 把物品映射成这个枚举，再按 `equipmentIndex` 判断该物品能不能被拖进对应的装备槽。

## 心智模型

把它想成「装备槽位的准入位图」，而不是一个普通的状态枚举。位权是有规律的：`Weapon = 1`、`Shield = 2`、`HeadArmor = 4`……`Cape = 2048`，即 2 的幂，所以任意组合都能用按位或拼出来。四个组合值可以自己验算：

- `HorseCategory = 192 = Horse(64) | HorseHarness(128)`
- `Armors = 2108 = HeadArmor(4) | BodyArmor(8) | LegArmor(16) | HandArmor(32) | Cape(2048)`
- `Equipable = 2303 = Armors(2108) | Weapon(1) | Shield(2) | Horse(64) | HorseHarness(128)`
- `All = 4095 = 0b1111_1111_1111`，正好是前 12 个位全开

理解它的关键，是分清**声明**和**用法**：声明上它是 `[Flags]`，但本版本里唯一的使用者用 `==` 做等值比较（`inventoryItemTypeOfItem == InventoryItemType.Weapon`），而不是 `(t & Mask) != 0`。也就是说四个组合值目前是**预留/文档性**的，没有参与任何判定。另一个心智要点是它的写入端：`ItemData.GetInventoryItemTypeOfItem(ItemType)` 是一张返回整数的 `switch` 表（近战、弓弩、弹药等十余种 `ItemType` 全部返回 `1`），返回值再被强制转换成这个枚举；表里没有的 `ItemType` 返回 `0`，即 `None`。

还有一层容易混淆的关系：`Helpers.InventoryScreenHelper` 里有一个**同名的嵌套枚举** `InventoryScreenHelper.InventoryItemType`（`InventoryScreenHelper.cs:342`），它同样标了 `[Flags]`，但 `Equipable = 6399` 且多了一位 `Banner = 4096`，由 `InventoryScreenHelper.GetInventoryItemTypeOfItem(ItemObject)` 产出，服务的是战役物品栏界面。两个枚举值域相似，但不能互换。

## 怎么用

### 什么时候会用到它

- 你在做 Diamond / 多人层的装备拖拽判定时，槽位准入就是这张表：`equipmentIndex` 0–3 接受 `Weapon` 或 `Shield`，5 接受 `HeadArmor`，6 接受 `BodyArmor`，7 接受 `LegArmor`，8 接受 `HandArmor`，9 接受 `Cape`，10 接受 `Horse`，11 接受 `HorseHarness`。
- 你要把「某件物品属于哪一类」序列化或比较时，用它当分类标签。

### 调之前要准备什么

- 注意可见性：它是 `internal`，只在 `TaleWorlds.MountAndBlade.Diamond` 程序集内部可见。外部 mod 程序集默认**访问不到**它，只能通过反射或自己维护一份等价常量表。
- 先确认你要的是哪一个 `InventoryItemType`：Diamond 层这个（装备槽准入），还是 `Helpers.InventoryScreenHelper` 里那个嵌套的（战役物品栏分类）。看命名空间，别看名字。

### 调之后要注意什么

- 组合值不要想当然：因为唯一消费者用 `==`，`HorseCategory` / `Armors` / `Equipable` / `All` 在本版本不参与任何判定；如果你在自己的代码里用按位与，行为会与官方当前实现不一致。
- `None = 0` 既是「无分类」，也是「未知物品类型」的映射结果，判断时要留意它同时承担两种语义。

### 最容易踩的坑

- 把 Diamond 的 `InventoryItemType` 和 `Helpers.InventoryScreenHelper.InventoryItemType` 混用：两者 `Equipable` 值不同（2303 与 6399），后者还多一位 `Banner`。
- 以为标了 `[Flags]` 就一定按位用：本版本官方代码全是等值比较。
- 想直接 `using TaleWorlds.MountAndBlade.Diamond;` 就引用它：`internal` 会挡住你。

## 关键成员

- **`None = 0`**（`InventoryItemType.cs:10`）— 空集，同时也是「未知物品类型」的映射结果。
- **`Weapon = 1`**（`InventoryItemType.cs:12`）— 武器大类；近战、弓弩、弹药等十余种 `ItemType` 都归到这一位。
- **`Shield = 2`**（`InventoryItemType.cs:14`）— 盾。
- **`HeadArmor = 4`**（`InventoryItemType.cs:16`）— 头部护甲。
- **`BodyArmor = 8`**（`InventoryItemType.cs:18`）— 身体护甲。
- **`LegArmor = 16`**（`InventoryItemType.cs:20`）— 腿部护甲。
- **`HandArmor = 32`**（`InventoryItemType.cs:22`）— 手部护甲。
- **`Horse = 64`**（`InventoryItemType.cs:24`）— 马。
- **`HorseHarness = 128`**（`InventoryItemType.cs:26`）— 马具。
- **`Goods = 256`**（`InventoryItemType.cs:28`）— 货物。
- **`Book = 512`**（`InventoryItemType.cs:30`）— 书。
- **`Animal = 1024`**（`InventoryItemType.cs:32`）— 动物。
- **`Cape = 2048`**（`InventoryItemType.cs:34`）— 披风。
- **`HorseCategory = 192`**（`InventoryItemType.cs:36`）— 组合值，等于 `Horse | HorseHarness`。
- **`Armors = 2108`**（`InventoryItemType.cs:38`）— 组合值，等于头/身/腿/手护甲与披风之和。
- **`Equipable = 2303`**（`InventoryItemType.cs:40`）— 组合值，等于 `Armors | Weapon | Shield | Horse | HorseHarness`。
- **`All = 4095`**（`InventoryItemType.cs:42`）— 全部 12 个位全开，即 `0b1111_1111_1111`。

## 真实示例

```csharp
// 完整声明（源码 InventoryItemType.cs:6）。
[Flags]
internal enum InventoryItemType
{
    None = 0,
    Weapon = 1,
    Shield = 2,
    HeadArmor = 4,
    BodyArmor = 8,
    LegArmor = 16,
    HandArmor = 32,
    Horse = 64,
    HorseHarness = 128,
    Goods = 256,
    Book = 512,
    Animal = 1024,
    Cape = 2048,
    HorseCategory = 192,
    Armors = 2108,
    Equipable = 2303,
    All = 4095
}
```

```csharp
// 官方消费者 ItemData.CanItemToEquipmentDragPossible 的判定形态（源码还原，非可直接编译：
// GetInventoryItemTypeOfItem 是私有方法）。注意这里用的是 == 等值比较，不是按位与，
// 所以组合值 Armors / Equipable / All 在本版本并不参与判定。
InventoryItemType type = (InventoryItemType)ItemData.GetInventoryItemTypeOfItem(ItemList.GetItemTypeOf(itemTypeId));
bool canEquip = false;
if (equipmentIndex == 0 || equipmentIndex == 1 || equipmentIndex == 2 || equipmentIndex == 3)
{
    canEquip = type == InventoryItemType.Weapon || type == InventoryItemType.Shield;
}
else if (equipmentIndex == 9)
{
    canEquip = type == InventoryItemType.Cape;
}
else if (equipmentIndex == 10)
{
    canEquip = type == InventoryItemType.Horse;
}
else if (equipmentIndex == 11)
{
    canEquip = type == InventoryItemType.HorseHarness;
}
```

## 参见

- ↔ [ItemHelper](../ItemHelper) — 战役层的物品可比性判定，是另一套独立于本枚举的分类逻辑
- ↔ [InventoryScreenHelper](../InventoryScreenHelper) — 同名嵌套枚举的宿主，也是战役物品栏界面的统一入口
- ↔ [EquipmentHelper](../EquipmentHelper) — 真正在装备槽之间搬运物品的工具，槽位语义与这里的准入表对应

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
