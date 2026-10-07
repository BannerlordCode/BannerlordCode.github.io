---
title: "WeaponComponent"
description: "物品的武器组件：持有一组 WeaponComponentData（每件武器形态一个），提供主武器与物品类型推导。"
---
# WeaponComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponComponent : ItemComponent`
**Base:** `TaleWorlds.Core.ItemComponent`
**File:** `TaleWorlds.Core/WeaponComponent.cs`

## 概述

`ItemObject` 的所有可替换行为都挂在「组件」上（[ItemObject](../ItemObject) 的 `ItemComponent` 属性就是一个 `ItemComponent`），武器行为对应本类。内部只有一个 `private readonly MBList<WeaponComponentData> _weaponList`——**一件物品可以有多份武器数据**，对应「双形态武器」：比如斧头既能劈砍（Weapon0）又能投掷/砸（Weapon1），`ItemObject.PrimaryWeapon` 取的就是第 0 份。

它是 [ItemComponent](../ItemComponent) 的具体实现，而 `ItemComponent` 是抽象类、继承 `MBObjectBase`，公开面只有 `Item`（可写）、`ItemModifierGroup`（`protected set`）和抽象的 `GetCopy()`。所以本类的 `AddWeapon` 里那句 `base.ItemModifierGroup = itemModifierGroup;` 是在**每个武器形态上**挂自己的品质组，而不是设在物品上。

`ItemObject.Deserialize` 会为每个 `<Weapon>` 节点建一份 `WeaponComponentData` 并塞进这个列表——`Deserialize` 覆写里那句 `new WeaponComponentData(base.Item, WeaponClass.Undefined, (WeaponFlags)0UL)` 之后立刻 `.Deserialize(base.Item, node)`，说明**反序列化分两步：先建壳，再填**。

## 心智模型

典型生命周期：

1. **XML 反序列化**。`ItemObject.Deserialize` 走到 `<Weapon>` 节点时，基底已经建好空组件，本类 `Deserialize` 建 `WeaponComponentData` 并 `Add` 进去。本类**不带任何存档特性**（`SaveableField` / `SaveableProperty` 都只在 `TaleWorlds.SaveSystem` 侧用于对象图收集，物品是 XML 数据不是存档对象）。
2. **运行期读取**。`ItemObject.PrimaryWeapon` → 本类 `PrimaryWeapon` → `_weaponList[0]`。`ItemObject.ItemType` 的推导走本类 `GetItemType()`。
3. **运行期追加**（mod 造多形态武器）：`ItemObject.AddWeapon(weapon, modifierGroup)` 若 `WeaponComponent` 为 null 会先 `new WeaponComponent(this)`，再调本类 `AddWeapon`。

**最坑的一条是 `PrimaryWeapon` 直接索引 `[0]`**：如果列表为空（XML 只有一个 `<Weapon>` 都没写的物品），`this._weaponList[0]` 抛 `ArgumentOutOfRangeException`。`GetItemType()` 同样直接用 `_weaponList[0].WeaponClass`。所以**凡是持有本组件的物品都应当保证至少有一个 Weapon 节点**，这不是类型系统能表达的约束。

第二条：`GetItemType()` 是**推断**，不是权威。真正的 `ItemObject.ItemType`（公开字段 `Type`）由 XML 的 `type` 属性直接给出；`GetItemType()` 是从 `WeaponClass` 反推的，mod 改 WeaponClass 时可能与 `Type` 不一致。以 `ItemObject.ItemType` 为准。

第三条：`ItemComponent.Item` 是 `{ get; set; }` 公开可写。组件和物品是双向引用，**把 `Item` 指向另一个物品会让 `ItemComponent` 挂到错误的物品上**（构造器里 `base.Item = item` 是标准做法，但事后改写很危险）。

常见误用：直接 `new WeaponComponent(item)` 然后不调 `AddWeapon` 就用 `PrimaryWeapon`（越界）；在 XML 里省掉 `<Weapon>` 节点（`HasWeapon()` 之类调用全崩）；误以为 `GetCopy()` 会深拷贝武器数据（它 `return new WeaponComponent(base.Item)`，**只有空列表**）。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public WeaponComponent(ItemObject item)` | 唯一构造器，只做 `base.Item = item`。**不建任何武器数据**。字段初始化里 `MBList<WeaponComponentData>` 已经是空的可读可写列表。 |
| `Weapons` | `public MBReadOnlyList<WeaponComponentData> Weapons { get; }` | 返回 `_weaponList` 的只读包装。**可以为空列表**。元素是武器的各形态，顺序即 XML 里的出现顺序。 |
| `PrimaryWeapon` | `public WeaponComponentData PrimaryWeapon { get; }` | `_weaponList[0]`。**列表为空时抛 `ArgumentOutOfRangeException`**，不做保护。 |
| `AddWeapon` | `public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)` | 两步：先 `base.ItemModifierGroup = itemModifierGroup`（给**这份**武器形态挂品质组，setter 是 `protected` 所以只能子类里写），再 `_weaponList.Add`。**不检查 null、不检查重复、不检查上限。** |
| `GetItemType` | `public ItemObject.ItemTypeEnum GetItemType()` | `WeaponComponentData.GetItemTypeFromWeaponClass(this._weaponList[0].WeaponClass)`。**从第 0 份武器的 WeaponClass 反推物品类型**，同样是 `[0]` 硬索引。返回的是推断值，可能与 `ItemObject.Type` 字段不一致。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 先 `base.Deserialize`（`ItemComponent` 的实现），然后建一份 `new WeaponComponentData(base.Item, WeaponClass.Undefined, (WeaponFlags)0UL)` 调它自己的 `Deserialize(base.Item, node)`，最后 `_weaponList.Add(...)`。**每次调用追加一份**，同一个物品多次反序列化会累积。node 上 `modifier_group` 属性被读出来但**赋给了一个未使用的局部变量**——这段是死代码，不要指望它生效。 |
| `GetCopy` | `public override ItemComponent GetCopy()` | `return new WeaponComponent(base.Item);`——**返回的是空组件**，武器数据一个都没复制。名字容易误导；它满足的是 `ItemComponent` 的抽象契约，不是"深拷贝"。 |

继承自 [ItemComponent](../ItemComponent)（未重复列出）：`public ItemObject Item { get; set; }`、`public ItemModifierGroup ItemModifierGroup { get; protected set; }`、`public override void Deserialize(MBObjectManager, XmlNode)`。

## 怎么用

### 怎么拿到它

`WeaponComponent` 是 `public class WeaponComponent : ItemComponent`（`TaleWorlds.Core/WeaponComponent.cs:10`）。构造器 `public WeaponComponent(ItemObject item)`（`:58`）。

内部只有一个字段 `private readonly MBList<WeaponComponentData> _weaponList = new MBList<WeaponComponentData>();`（`:85`）——**初始化在字段声明处，所以构造器不用管**。它对外暴露两个只读口：`public MBReadOnlyList<WeaponComponentData> Weapons`（`:26`，getter 返回 `_weaponList`）和 `public WeaponComponentData PrimaryWeapon`（`:36`，getter 是 `this._weaponList[0];`——`:40`）。

写入只有 `public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)`（`:45`），实现两行：`base.ItemModifierGroup = itemModifierGroup;` 然后 `this._weaponList.Add(weaponComponentData);`（`:46-47`）。**注意它顺带改了基类的 `ItemModifierGroup`**——因为那个属性的 setter 是 `protected`（`ItemComponent.cs:25`），所以只有子类做得到。

XML 路径：`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`（`:70`）先 `base.Deserialize` 读 `modifier_group` 属性（`:71-76`），然后 `new WeaponComponentData(base.Item, WeaponClass.Undefined, (WeaponFlags)0UL)` 并 `Deserialize`，**只加一条**（`:77-79`）。

### 典型用法

```csharp
using TaleWorlds.Core;

ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("sword_1");   // MBObjectManager.cs:288

var wc = sword.ItemComponent as WeaponComponent;      // as，类型不对是 null
if (wc != null)
{
    WeaponComponentData primary = wc.PrimaryWeapon;   // WeaponComponent.cs:36，内部 _weaponList[0]
    int thrust = primary.ThrustDamage;                // WeaponComponentData.cs:85
    DamageTypes type = primary.ThrustDamageType;      // :90
    int handling = primary.Handling;                  // :160

    // 多形态武器（刀 / 剑 / 矛）
    MBReadOnlyList<WeaponComponentData> all = wc.Weapons;   // :26

    // 代码里追加一条形态，会同时改掉 ItemModifierGroup
    wc.AddWeapon(otherData, myModifierGroup);               // :45
}
```

### 最容易踩的坑

**读 `PrimaryWeapon` 而不先确认 `_weaponList` 非空。** `PrimaryWeapon` 的 getter 是裸的 `this._weaponList[0];`（`:40`）——**没有长度检查**。而 `ItemComponent` 的单槽限制意味着你可能拿到一个 `WeaponComponent` 却从没往里加过任何 `WeaponComponentData`：比如自己 `new WeaponComponent(item)` 然后只调 `GetCopy()`（`GetCopy()` 的实现是 `new WeaponComponent(base.Item)`，`:52-55`——**它只回填了 `Item`，列表是空的**）。后果是第一次读 `PrimaryWeapon` 就 `ArgumentOutOfRangeException`，而报错点离真正的原因（没调 `AddWeapon`）很远。

第二个坑正是 `GetCopy()` 本身：它返回的 `WeaponComponent` **不包含任何武器形态**（`:52-55`），也不复制 `ItemModifierGroup`。所以拿一个 `WeaponComponent.GetCopy()` 的结果去当「原装备的副本」用，得到的是一个壳——形态列表空、词缀组 null，武器完全打不出伤害。要真正复制形态，必须自己遍历 `Weapons`（`:26`）逐条 `AddWeapon`（`:45`）。

第三，`AddWeapon` 的第二个参数会**无条件覆盖** `base.ItemModifierGroup`（`:46`）——用不同词缀组连续调两次，只有最后一次生效。

从物品上取主武器与全部形态（先判 `HasWeaponComponent` 再取）：

## 真实示例

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
ItemObject axe = MBObjectManager.Instance.GetObject<ItemObject>("heavy_bearded_axe");

if (axe.HasWeaponComponent)
{
    WeaponComponent component = axe.WeaponComponent;
    WeaponComponentData primary = component.PrimaryWeapon;
    Debug.Print("primary class: " + primary.WeaponClass, 0);

    MBReadOnlyList<WeaponComponentData> all = component.Weapons;
    for (int i = 0; i < all.Count; i++)
    {
        Debug.Print("usage " + i + " damage: " + all[i].SwingDamage, 0);
    }
}
```

按使用序号取武器（`ItemObject.GetWeaponWithUsageIndex` 的底层就是 `Weapons.ElementAt`）：

```csharp
ItemObject axe = MBObjectManager.Instance.GetObject<ItemObject>("heavy_bearded_axe");
if (axe.HasWeaponComponent)
{
    WeaponComponentData swing = axe.GetWeaponWithUsageIndex(0);
    Debug.Print("swing damage: " + swing.ThrustDamage, 0);
}
```

给一件物品追加第二种武器形态（`AddWeapon` 不校验，写之前自己保证数据合法）：

```csharp
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>("custom_axe");
WeaponComponentData extra = new WeaponComponentData(item, WeaponClass.TwoHanded, WeaponFlags.None);
item.AddWeapon(extra, item.ItemModifierGroup);

// 追加后 PrimaryWeapon 仍然是第 0 份
WeaponComponentData primary = item.PrimaryWeapon;
Debug.Print("still primary: " + primary.WeaponClass, 0);
```

物品类型：优先用权威字段，别用推断：

```csharp
// 权威值：直接来自 XML / 初始化
ItemObject.ItemTypeEnum authoritative = item.ItemType;

// 推断值：从主武器的 WeaponClass 反推，可能与上面不同
if (item.HasWeaponComponent)
{
    ItemObject.ItemTypeEnum inferred = item.WeaponComponent.GetItemType();
    Debug.Print("declared " + authoritative + " vs inferred " + inferred, 0);
}
```

## 风险与边界

- **`PrimaryWeapon` / `GetItemType()` 硬索引 `[0]`。** 空列表直接抛 `ArgumentOutOfRangeException`。XML 里省略 `<Weapon>` 节点会埋一个必崩点，且崩溃点在别处（战斗/物品 UI），很难定位。
- **`GetCopy()` 返回空组件。** 它是 `ItemComponent` 抽象契约的实现，不是深拷贝。拿它的返回值当"克隆"会得到一个没有任何武器数据的组件。
- **`AddWeapon` 无校验。** 传 null 会让列表里出现 null，之后 `PrimaryWeapon` 取出后 `.WeaponClass` 崩。`ItemModifierGroup` 传 null 也合法。
- **`Deserialize` 是追加不是替换。** 同一个组件被反序列化两次会有两份数据，顺序错乱。
- **`modifier_group` 解析是死代码。** 源码里 `string value = xmlAttribute.Value;` 读出后从未使用。指望 XML 的 `modifier_group` 生效是错的。
- **`Item` 公开可写，双向引用易错。** 事后把 `component.Item` 改指向别的物品，会让品质组和武器数据挂到错误物品上。
- **`Weapons` 是只读包装不是副本。** 底层 `MBList` 仍在集合内部；虽然只有 `AddWeapon` 能写，但 `Deserialize` 也在写。
- **无上限检查。** 理论上一个物品可以有任意多个 `WeaponComponentData`，`ItemObject` 的 `MaxHolsterSlotCount` 之类常量管不到这里。
- **物品 XML 数据非存档。** `WeaponComponentData` 随 `ItemObject` 的 XML 定义存在，不进存档。改 XML 不会改已有存档里的物品（物品是按 stringId 从 XML 重新加载的）。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/WeaponComponent.cs` 逐行比对，**public 表面完全一致**：`.ctor(ItemObject)`、`Weapons`、`PrimaryWeapon`、`AddWeapon`、`GetCopy`、`GetItemType()`、`Deserialize` 七个成员一字未改，`_weaponList` 仍是 `private readonly MBList<WeaponComponentData>`。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/WeaponComponent.cs`（56 行）与 `bannerlord-1.4.6/TaleWorlds.Core/WeaponComponent.cs`（87 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 8 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 56 行、1.4.6 是 87 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 基类：[ItemComponent](../ItemComponent) 抽象基类，定义 `Item` / `ItemModifierGroup` / 抽象 `GetCopy()`
- 宿主：[ItemObject](../ItemObject) 的 `ItemComponent` 属性持有本类实例，另有 `HasWeaponComponent` / `PrimaryWeapon` / `Weapons` / `AddWeapon` 转发方法
- 数据元素：`WeaponComponentData` 是每份武器形态的实际数据，承载 `WeaponClass` / `WeaponFlags` / 伤害与长度
- 品质挂载：`ItemModifierGroup` 通过 `base.ItemModifierGroup` 设在**单个形态**上
- 桶首页：[core-extra API 分区](../)
