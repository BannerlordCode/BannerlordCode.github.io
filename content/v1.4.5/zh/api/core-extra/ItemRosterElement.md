---
title: "ItemRosterElement"
description: "把「一件具体物品（含其可选修饰符与数量）」打包成 roster 中可计数的一行记录的轻量值类型，由 ItemRoster 持有，用于描述队伍背包、定居点库存与战利品清单中的单条目及其堆叠数量。"
---

# ItemRosterElement

**命名空间：** TaleWorlds.Core
**模块：** TaleWorlds.Core
**类型：** `public struct ItemRosterElement : ISerializableObject, ISavedStruct`
**源文件：** Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemRosterElement.cs

## 概述

`ItemRosterElement` 是 [ItemRoster](../../campaign/ItemRoster) 中最小的一行记录：它把一个 [EquipmentElement](../EquipmentElement)（即一个 [ItemObject](../../core/ItemObject) 加上可选的 [ItemModifier](../ItemModifier)）与一个小整数 `Amount`（堆叠数量）绑在一起，代表「某物品 × N 个」。它本身不持有任何世界状态，只是被 [MobileParty](../../campaign/MobileParty)、[Settlement](../../campaign/Settlement)、战利品与交易等系统当作可序列化的计量单元来搬运——队伍背包、城镇货栈、村庄产出与掠夺清单本质上都是 `ItemRosterElement` 的有序集合。

## 心智模型

把 `ItemRosterElement` 理解成一个**值类型的小票**会非常贴切：它由 `EquipmentElement`（物品身份）与 `Amount`（数量）两部分组成，二者合一才代表 roster 里的一条明细。它是 `struct` 而非 `class`，因此赋值与传参都是按值复制——你手里拿到的副本与原 roster 中存放的那一份是独立的两份数据；想增减某个物品的数量，绝不能「改副本的 `Amount` 就以为库存变了」，而必须回到持有它的 [ItemRoster](../../campaign/ItemRoster) 上调用 `AddToCounts`，让 roster 用 `element.EquipmentElement` 找到对应槽位再调整其 `Amount`，数量归零时该条目会被自动移除。换句话说，元素是「只读的身份 + 可设置的数量」组合，真正的增删总管在 roster 手中；当物品在 [MBObjectManager](../../campaign-ext/MBObjectManager) 中尚未注册或已注销时，反序列化出来的元素 `EquipmentElement.Item` 会是 `null`，此时 `IsEmpty` 为真、等于这条明细作废。

## 何时使用 / 何时不要使用

- **使用**：需要描述「某物品 N 个」这一对组合时——无论是构造战利品、填充队伍背包、比对两份库存明细，还是读取单条目的重量——都用它。最常见的入口是 `new ItemRosterElement(item, amount)` 后交给 `ItemRoster.Add`，或直接遍历 `ItemRoster` 读取每个 `element.Amount` / `element.EquipmentElement`。
- **不要使用**：不要把它当成「库存本身」来囤状态——它只是单行快照，真正的数量聚合归 [ItemRoster](../../campaign/ItemRoster) 与 [PartyBase](../../campaign/PartyBase) 管。不要直接对从 roster 取出来的副本设置 `Amount` 期望库存随之变化（副本互不影响）；增减数量请走 `ItemRoster.AddToCounts` / `Add` / `Remove`。也不要自行给 `Amount` 赋负值来「扣减」——setter 会在 `value < 0` 时抛出 `MBUnderFlowException`，扣减必须用负数 `number` 调 `AddToCounts`。

## 依赖图

上游类型（它包装了什么）：

- [EquipmentElement](../EquipmentElement) —— `ItemRosterElement` 直接持有它，记录物品身份与修饰符；`IsEmpty`、重量、`Equals` 都委托给它。
- [ItemObject](../../core/ItemObject) —— 经 `EquipmentElement.Item` 到达的真实物品；`GetHashCode`、`ToString`、货栈/背包统计都以它为准。
- [ItemModifier](../ItemModifier) —— 经 `EquipmentElement.ItemModifier` 到达的可选修饰符，序列化时以 `StringId` 形式写入。

下游与协同系统（谁持有/消费它）：

- [ItemRoster](../../campaign/ItemRoster) —— 以 `ItemRosterElement[]` 持有这些元素，是增删与序列化的真正总管（`AddToCounts`、`Add`、`Remove`）。
- [MobileParty](../../campaign/MobileParty) —— 队伍背包 `ItemRoster` 由它持有，补给、掠夺、商队装货都落到这里。
- [Settlement](../../campaign/Settlement) —— 定居点的库存与货栈本质是 `ItemRoster`，用于产出、交易与税收。
- [PartyBase](../../campaign/PartyBase) —— 暴露 `ItemRoster`，是阵营层面读写物品的统一入口。
- [PartyScreenLogic](../../campaign/PartyScreenLogic) —— 在双方 `ItemRoster` 之间转移 `ItemRosterElement`（如缴获、交易、补给）。

## 风险

- **直接给 `Amount` 赋负值会抛异常**：`Amount` 的 setter 在 `value < 0` 时抛出 `MBUnderFlowException`（源文件第 28–33 行）。想扣减数量必须传负数 `number` 给 [ItemRoster](../../campaign/ItemRoster) 的 `AddToCounts`，而非对元素本身赋值。
- **改副本不影响库存**：它是 `struct`，`ItemRoster[index]` 或 `GetElementCopyAtIndex` 返回的都是按值复制的快照。改了副本的 `Amount` 或 `EquipmentElement`，原 roster 内对应槽位纹丝不动；必须用 `AddToCounts` 走回写路径。
- **物品未在 MBObjectManager 注册会导致明细作废**：反序列化时 `DeserializeFrom` 通过 `MBObjectManager.Instance.GetObject(objectId)` 解析物品，若物品已被注销或尚未就绪，`EquipmentElement.Item` 为 `null`，`IsEmpty` 为真，相当于这条库存被丢弃（读档时 `ItemRoster.CalculateCachedStatsOnLoad` 会调用 `ReplaceInvalidItemsWithTrash` 把未就绪物品换成 `DefaultItems.Trash`）。
- **存档读写依赖物品身份而非对象引用**：`SerializeTo` 只写 `Amount`、`ItemModifier.StringId`、`Item.Id.InternalValue`。若物品 `Id` 在跨版本/跨存档后不匹配，读回的元素会指向错误甚至 `null` 的物品，造成数量静默丢失或错配。
- **`Equals` 与 `GetHashCode` 只看物品、不看数量**：`GetHashCode` 直接转调 `EquipmentElement.GetHashCode()`，`Equals`/`IsEqualTo` 在 `Amount` 相等时才进一步比较 `EquipmentElement`。因此「同一物品、不同数量」的两个元素哈希相同且被判相等——若把它作字典键，必须用自定义比较器或同时纳入数量，否则会错误合并。
- **`IsEmpty` 与「数量为零」不是一回事**：`IsEmpty` 仅当 `EquipmentElement.Item == null` 时为真；一个 `ItemObject` 仍有效但 `Amount == 0` 的元素并不 `IsEmpty`。清理逻辑（如 `ItemRoster.RemoveZeroCountsFromRoster`）是按 `Amount <= 0` 而非 `IsEmpty` 来移除条目的。

## 成员说明

### 构造与静态入口

- **`ItemRosterElement(ItemObject item, int amount = 0, ItemModifier itemModifier = null)`**（构造函数）
  - 用途：最常用入口，由一个 [ItemObject](../../core/ItemObject) 与数量构造出一行记录；`itemModifier` 省略时表示无修饰。内部先 `this = default`，再 `EquipmentElement = new EquipmentElement(item, itemModifier)` 并写入 `_amount`。
  - 副作用：无；仅初始化自身字段。
  - 调用时机：几乎所有装货点都使用它，例如 `LordPartyComponent`/`PatrolPartyComponent` 给队伍装粮（`new ItemRosterElement(DefaultItems.Grain, MBRandom.RandomInt(15, 30))`），以及 `VillageNeedsToolsIssueBehavior`、`HeadmanNeedsGrainIssueBehavior` 等任务构造交付物。

- **`ItemRosterElement(EquipmentElement equipmentElement, int amount)`**（构造函数）
  - 用途：当已有一个 [EquipmentElement](../EquipmentElement)（已含物品与修饰符）时，直接连同数量打包成一行；不做任何转换，原样保存 `equipmentElement` 与 `amount`。
  - 副作用：无。
  - 调用时机：[ItemRoster](../../campaign/ItemRoster) 的 `AddToCounts` 在找不到匹配槽位时调用 `new ItemRosterElement(rosterElement, 0)` 新建条目；`InventoryLogic`、`ItemBarterable` 等也用它把装备槽直接转成库存行。

- **`ItemRosterElement(ItemRosterElement other)`**（复制构造函数）
  - 用途：按现有元素复制一份新记录（物品、修饰符、数量全部照搬），生成一个独立的 `struct` 副本，便于在不改动原 roster 的前提下携带同一明细。
  - 副作用：无。
  - 调用时机：需要脱离原集合的快照时（如战利品结算、交易预览）用其复制明细后再做加减。

- **`Invalid`**（静态属性，返回 `ItemRosterElement`）
  - 用途：返回一个「空」哨兵元素，其内部 `EquipmentElement` 由 `new EquipmentElement(null)` 构造，因此 `EquipmentElement.Item == null`、`IsEmpty` 为真；常用于表示「未找到 / 无效条目」。
  - 副作用：无；静态只读单例（`StaticInvalidElement`）。
  - 调用时机：`ItemRoster.GetElementCopyAtIndex` / `GetItemAtIndex` 越界时返回 `ItemRosterElement.Invalid`；`ItemRoster.Clear` 与 `RemoveZeroCountsFromRoster` 也用它回填被移除的槽位。

### 持有的状态

- **`EquipmentElement`**（属性，类型 `EquipmentElement`，`get; private set;`）
  - 用途：本行记录对应的物品身份（[ItemObject](../../core/ItemObject) + 可选 [ItemModifier](../ItemModifier)）。它是比较、哈希、重量与序列化的核心；`private set` 意味着构造后不能从外部替换，只能通过新构造元素来换身份。
  - 副作用：无。
  - 调用时机：读取物品用 `element.EquipmentElement.Item`；[ItemRoster](../../campaign/ItemRoster) 的 `FindIndexOfElement`/`FindIndexOfItem` 都用它来定位匹配槽位。

- **`Amount`**（属性，类型 `int`，`get; set;`）
  - 用途：本行记录的堆叠数量。`get` 直接返回 `_amount`；`set` 在 `value < 0` 时抛出 `MBUnderFlowException`，否则写入。
  - 副作用：仅改动自身 `_amount`；注意它**不会**回写所在 roster 的聚合统计（总价值、食物、坐骑数等由 `ItemRoster.OnRosterUpdated` 在 `AddToCounts` 路径上维护）。
  - 调用时机：读数量用 `element.Amount`；[ItemRoster](../../campaign/ItemRoster) 的 `AddToCounts` 在定位到槽位后执行 `_data[num].Amount += number` 来完成真正增减。

- **`IsEmpty`**（属性，类型 `bool`）
  - 用途：当 `EquipmentElement.Item == null` 时返回 `true`，表示该记录无有效物品——不等同于「数量为 0」。
  - 副作用：无。
  - 调用时机：在遍历或反序列化后判断一条记录是否有效时读取；与 `Invalid` 哨兵配合区分「找空了」与「数量为 0」。

### 数量、比较与重量

- **`AddToCounts`（定义在 [ItemRoster](../../campaign/ItemRoster) 上，经 `element.EquipmentElement` 匹配）**
  - 用途：虽然名字像元素的方法，但它实际属于持有元素的 [ItemRoster](../../campaign/ItemRoster)，而非 `ItemRosterElement` 自身。它通过 `FindIndexOfElement(element.EquipmentElement)` 找到与给定 `EquipmentElement` 相同的槽位，然后对该槽位的 `_data[num].Amount` 加上 `number`；数量为 0 时新建条目，数量降到 `<= 0` 时把该槽位与末尾交换并 `_count--` 移除。`ItemRoster.Add(ItemRosterElement)` 与 `Remove` 都只是用元素的正负 `Amount` 调它。
  - 副作用：会改变 roster 的 `_count`、触发 `OnRosterUpdated`（重算 `TotalValue`/`TotalFood`/`NumberOfMounts` 等缓存）并发出 `RosterUpdatedEvent`；`number` 为负且条目不存在会触发 `Debug.FailedAssert`。
  - 调用时机：一切「装货 / 卸货 / 战利品 / 交易 / 补给」的写入口，例如 `mobileParty.ItemRoster.Add(new ItemRosterElement(itemObject, amount))`、`InventoryLogic` 的转移、`RemoveIf` 的扣减都最终落到此处。

- **`IsEqualTo(ItemRosterElement other)`**
  - 用途：判断两条记录是否代表同一物品且数量相等——先比较 `Amount == other.Amount`，再比较 `EquipmentElement.IsEqualTo(other.EquipmentElement)`（物品与修饰符均一致）。与 `Equals` 不同，它参数是强类型的 `ItemRosterElement`。
  - 副作用：无。
  - 调用时机：[ItemRoster](../../campaign/ItemRoster) 的 `RostersAreIdentical` 用它逐条比对两份库存是否一致。

- **`Clear()`**
  - 用途：把本记录重置为空：调用 `EquipmentElement.Clear()` 清空物品与修饰符，并把 `Amount` 设为 `0`，于是 `IsEmpty` 变为真。
  - 副作用：仅清空自身；若想清掉整个集合请用 [ItemRoster](../../campaign/ItemRoster) 的 `Clear`（它会逐个清元素并发事件）。
  - 调用时机：`ItemRoster.Clear` 与 `RemoveZeroCountsFromRaster` 在移除槽位时对每个元素调用；复制/复用一个元素前可用它先归零。

- **`GetRosterElementWeight()`**（返回 `float`）
  - 用途：返回该行记录的总重量 = `EquipmentElement.GetEquipmentElementWeight() * Amount`，即「单件重量 × 数量」。用于库存负重计算。
  - 副作用：无。
  - 调用时机：队伍/商队总负重、背包容量校验时遍历 roster 累加各元素的 `GetRosterElementWeight()`。

### 对象方法与序列化

- **`Equals(object obj)` / `GetHashCode()`**
  - 用途：`Equals` 在 `obj` 是 `ItemRosterElement` 时转调 `IsEqualTo`；`GetHashCode` 仅返回 `EquipmentElement.GetHashCode()`，**忽略 `Amount`**。
  - 副作用：无。
  - 调用时机：把元素放进哈希容器或用作字典键时；务必注意它不区分数量（详见风险一节）。

- **`ToString()`**
  - 用途：返回形如 `"<Item> x<Amount>"` 的可读字符串（例如 `Sword x12`），便于日志与调试。
  - 副作用：无。
  - 调用时机：调试输出、界面文本拼接时。

- **`SerializeTo` / `DeserializeFrom`（实现 `ISerializableObject` / `ISavedStruct`）**
  - 用途：负责存读档。`SerializeTo` 依次写 `Amount`、`ItemModifier.StringId`（无修饰则空串）、`Item.Id.InternalValue`（物品为空则写 `0`）；`DeserializeFrom` 反向读回，并用 `Game.Current.ObjectManager.GetObject<ItemModifier>(stringId)` 与 `MBObjectManager.Instance.GetObject(objectId)` 还原修饰符与物品。`IsDefault()` 在「物品与修饰符均为 null 且数量为 0」时返回真，跳过默认实例的序列化。
  - 副作用：反序列化会把元素重新挂接到 [MBObjectManager](../../campaign-ext/MBObjectManager) 中的物品实例；若解析失败则 `EquipmentElement.Item` 为 `null`、变为 `IsEmpty`。
  - 调用时机：[ItemRoster](../../campaign/ItemRoster) 的 `SerializeTo`/`DeserializeFrom` 在写读整个名单时对每个元素调用；读档完成后由 `ItemRoster.CalculateCachedStatsOnLoad` 清洗无效与零数量条目。

## 示例

给一支队伍补给军粮——构造元素后直接交给 `ItemRoster.Add`，内部走的正是 `AddToCounts(element.EquipmentElement, element.Amount)`：

```csharp
ItemObject grain = DefaultItems.Grain;
int amount = MBRandom.RandomInt(15, 30);
// 直接以元素作为入参交给队伍背包，不用先声明局部实例变量
mobileParty.ItemRoster.Add(new ItemRosterElement(grain, amount));
```

遍历某定居点库存，累加库存总重量并读取每条明细的物品与数量：

```csharp
float totalWeight = 0f;
foreach (ItemRosterElement element in settlement.ItemRoster)
{
    totalWeight += element.GetRosterElementWeight();
    ItemObject item = element.EquipmentElement.Item;
    int count = element.Amount;
    // element.IsEmpty 为 true 表示该条目物品已失效，应跳过统计
}
```

## 参见

- ↑ 父级：[Core-extra API 索引](../)
- ↔ 相关：[EquipmentElement](../EquipmentElement) · [ItemModifier](../ItemModifier) · [ItemObject](../../core/ItemObject) · [ItemRoster](../../campaign/ItemRoster) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) · [PartyBase](../../campaign/PartyBase) · [PartyScreenLogic](../../campaign/PartyScreenLogic)
