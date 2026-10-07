---
title: "WeaponComponent"
description: "武器类物品的组件：持有一个 WeaponComponentData 列表，PrimaryWeapon 直接取索引 0，AddWeapon 顺带把 ItemModifierGroup 覆写成最后加入的那个。"
---

# WeaponComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponComponent : ItemComponent`
**Base:** [ItemComponent](../ItemComponent)（`public abstract class ItemComponent : MBObjectBase`）
**File:** `TaleWorlds.Core/WeaponComponent.cs`（全文 86 行，2773 字节）

## 概述

一件武器在引擎里不是「一个 `ItemObject` 加一堆字段」，而是「一个 `ItemObject` 挂一个 `WeaponComponent` 组件，组件里装一个或几个 `WeaponComponentData`」。所以你看到 `ItemObject.Weapons` 返回的是 `MBReadOnlyList<WeaponComponentData>` 而不是单个对象——**一把武器可能有多种用法数据**（长矛的刺/砸、投掷物的主手/备用），这些全在同一个列表里，顺序有意义。

`WeaponComponent` 本身极薄：一个 `private readonly MBList<WeaponComponentData> _weaponList` 字段，三个 public 属性（`Weapons` / `PrimaryWeapon` / 继承来的 `Item` 与 `ItemModifierGroup`），两个方法（`AddWeapon` / `GetItemType`），加一个 `Deserialize` 和一个 `GetCopy`。全文 86 行里有一半是反编译器留下的 Token 注释。

**它继承的 `ItemComponent` 只有三个成员**，但每个都决定了本类的形状：`public ItemObject Item { get; set; }`（指回主人）、`public ItemModifierGroup ItemModifierGroup { get; protected set; }`（品质修饰组）、`public abstract ItemComponent GetCopy()`（复制契约）。注意 `ItemComponent : MBObjectBase`——组件本身**也是**一个 `MBObjectBase`，但它不会被独立注册进对象管理器；它是被 `ItemObject.ItemComponent` 属性持有的普通引用。

## 心智模型

**把它当成「武器用法的持有者」，而不是「武器本身」。** 一把剑的伤害值、重量、价格都在 `ItemObject` 上；`WeaponComponent` 只关心**「这件东西能怎么用」**这一件事。

**第一步，理解列表顺序就是语义。** `PrimaryWeapon` 的实现只有一行：

```csharp
return this._weaponList[0];
```

没有判空、没有搜索、没有按 `WeaponFlags` 挑。**第一个就是主武器**，其余是备用/替代用法。同理 `GetItemType()` 直接 `GetItemTypeFromWeaponClass(this._weaponList[0].WeaponClass)`——它报的也是主武器的类型。所以 `AddWeapon` 的调用顺序不是随意的：**先加的那个才是主武器**。

**第二步，理解 `AddWeapon` 里那个看起来奇怪的副作用。** 完整实现只有两行：

```csharp
public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)
{
    base.ItemModifierGroup = itemModifierGroup;
    this._weaponList.Add(weaponComponentData);
}
```

`base.ItemModifierGroup = ...` 每次调用都会覆写组件上那唯一的 `ItemModifierGroup` 槽位。所以连续 `AddWeapon(w1, g1)`、`AddWeapon(w2, g2)` 之后，组件的 `ItemModifierGroup` 是 **g2**，w1 用的 g1 信息就丢了。官方路径上每次 `AddWeapon` 通常传同一个组，所以看不出来；但**在代码生成里循环调 `AddWeapon` 时，这是一个真实存在的陷阱**。

**第三步，理解 `ItemObject` 侧的懒创建。** [ItemObject](../ItemObject) 的 `AddWeapon` 有这么一段：

```csharp
public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)
{
    if (this.WeaponComponent == null)
    {
        this.ItemComponent = new WeaponComponent(this);
    }
    this.WeaponComponent.AddWeapon(weapon, itemModifierGroup);
}
```

`ItemObject.WeaponComponent` 是个计算属性 `this.ItemComponent as WeaponComponent`——**没有组件时返回 `null`**，这就是为什么必须先判空再创建。这也解释了 `ItemObject.Weapons` 为什么可能返回 `null`：

```csharp
public MBReadOnlyList<WeaponComponentData> Weapons
{
    get
    {
        WeaponComponent weaponComponent = this.WeaponComponent;
        if (weaponComponent == null) { return null; }
        return weaponComponent.Weapons;
    }
}
```

**`ItemObject.Weapons` 对非武器物品返回 `null`，不是空列表。** 这是本页最容易踩的坑。

**第四步，理解 `Deserialize` 的路径与 `AddWeapon` 不同。** 读 XML 时它不走 `AddWeapon`：

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
{
    base.Deserialize(objectManager, node);
    XmlAttribute xmlAttribute = node.Attributes["modifier_group"];
    if (xmlAttribute != null) { string value = xmlAttribute.Value; }
    WeaponComponentData weaponComponentData = new WeaponComponentData(base.Item, WeaponClass.Undefined, (WeaponFlags)0UL);
    weaponComponentData.Deserialize(base.Item, node);
    this._weaponList.Add(weaponComponentData);
}
```

注意两处：`base.Deserialize` **先读并设置 `ItemModifierGroup`**（从 XML 的 `modifier_group` 属性查 `ItemModifierGroup` 对象）；随后那段 `if (xmlAttribute != null) { string value = xmlAttribute.Value; }` 读出了值却**什么都不做**——`value` 是死变量，这是反编译后残留的无用代码。而 `WeaponComponentData` 被以 `WeaponClass.Undefined` 构造，再由它自己的 `Deserialize` 填真实数据。**所以 XML 路径下 `ItemModifierGroup` 来自基类，代码路径下来自 `AddWeapon` 的参数**，两条路都可能设值。

**第五步，理解 `GetCopy` 只复制外壳。** `public override ItemComponent GetCopy() { return new WeaponComponent(base.Item); }`——新建一个组件、指向**同一个 `ItemObject`**、`_weaponList` 是空的。武器数据一个都没复制。所以 `GetCopy()` 的用途是「换一个新的组件壳」，不是深拷贝；拷贝完必须自己重新 `AddWeapon`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Weapons` | `public MBReadOnlyList<WeaponComponentData> Weapons { get; }` | 返回 `_weaponList` 本身（底层是可变的 `MBList<T>`）。**主武器在索引 0**，其余是替代用法。 |
| `PrimaryWeapon` | `public WeaponComponentData PrimaryWeapon { get; }` | 直接 `this._weaponList[0]`。列表为空时抛 `ArgumentOutOfRangeException`。 |
| `AddWeapon` | `public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)` | 追加一条用法数据，**同时把组件的 `ItemModifierGroup` 覆写成传入的组**。先加的成为主武器。 |
| `GetItemType` | `public ItemObject.ItemTypeEnum GetItemType()` | 转发 `WeaponComponentData.GetItemTypeFromWeaponClass(this._weaponList[0].WeaponClass)`。**只看主武器**。 |
| 构造 | `public WeaponComponent(ItemObject item)` | 只做 `base.Item = item`。`_weaponList` 靠字段初始化器 `new MBList<WeaponComponentData>()` 建好。**没有无参构造**。 |
| `GetCopy` | `public override ItemComponent GetCopy()` | 返回 `new WeaponComponent(base.Item)`：新壳、同一个 `ItemObject`、**空列表**。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 先 `base.Deserialize`（设置 `ItemModifierGroup`），再造一个 `WeaponClass.Undefined` 的 `WeaponComponentData` 交给它自己 `Deserialize`，最后 `_weaponList.Add`。**不走 `AddWeapon`，所以不覆写 `ItemModifierGroup`**。 |
| `Item`（继承） | `public ItemObject Item { get; set; }` | 指回主人 `ItemObject`。注意有 setter，`ItemComponent` 上写 `Item` 是公开可写的。 |
| `ItemModifierGroup`（继承） | `public ItemModifierGroup ItemModifierGroup { get; protected set; }` | 品质修饰组。`protected set` 意味着只有派生类和 `AddWeapon` 里的 `base.ItemModifierGroup = ...` 能写。 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档对象图收集钩子，实现只有 `base.` 一行。继承它没有意义。 |

## 真实示例

官方唯一一处 `AddWeapon` 调用在 `Crafting.cs:708`（`Crafting.CraftedItemGenerationHelper` 内），代码生成一件成品武器时：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

public static ItemObject ForgeBlade(CraftingTemplate template, WeaponDesignElement[] designElements)
{
    ItemObject item = new ItemObject();
    ItemModifierGroup group = template.ItemModifierGroup;
    WeaponDescription description = template.WeaponDescriptions[0];
    WeaponFlags weaponFlags = description.WeaponFlags | new WeaponDesign(template, new TextObject("Test Blade"), designElements).WeaponFlags;

    WeaponComponentData weapon;
    Crafting.CraftedItemGenerationHelper.CraftingStats.FillWeapon(item, description, weaponFlags, false, out weapon);
    item.AddWeapon(weapon, group);
    return item;
}
```

这就是 `AddWeapon` 的语义来源：**它不是一个「给已有武器加装备」的方法，而是「把刚填好数据的 `WeaponComponentData` 装到刚创建的 `ItemObject` 上」**。`item.AddWeapon` 内部发现 `WeaponComponent == null`，于是 `new WeaponComponent(item)` 建壳，然后转发。

读一把武器的数据时，判空不能省——`ItemObject.Weapons` 对非武器返回 `null`：

```csharp
using TaleWorlds.Core;

public static string DescribeWeapon(ItemObject item)
{
    if (!item.HasWeaponComponent)
    {
        return item.Name.ToString() + " (非武器)";
    }

    MBReadOnlyList<WeaponComponentData> weapons = item.Weapons;
    for (int i = 0; i < weapons.Count; i++)
    {
        WeaponComponentData w = weapons[i];
        MBDebug.Print(item.Name.ToString() + " usage " + i
            + " class=" + w.WeaponClass
            + " damage=" + w.Damage
            + " modifierGroup=" + item.WeaponComponent.ItemModifierGroup);
    }
    return item.Name.ToString() + " type=" + item.WeaponComponent.GetItemType();
}
```

`item.HasWeaponComponent` 是 `item.WeaponComponent != null` 的语法糖，`item.WeaponComponent` 又是 `item.ItemComponent as WeaponComponent`。`GetItemType()` 只反映 `weapons[0]`，所以循环里打印每条用法但类型只报一个——这是设计如此，不是 bug。

自己拼一把武器时，`AddWeapon` 的顺序与覆写副作用必须一起考虑：

```csharp
using TaleWorlds.Core;

public static ItemObject BuildTwoUsageItem(CraftingTemplate template, ItemModifierGroup primaryGroup, ItemModifierGroup altGroup)
{
    ItemObject item = new ItemObject();
    // 注意：ItemObject.Name 的 setter 是 private，外部代码改不了名字。
    WeaponComponentData main = new WeaponComponentData(item, WeaponClass.OneHandedSword, WeaponFlags.MeleeWeapon);
    WeaponComponentData alt = new WeaponComponentData(item, WeaponClass.OneHandedSword, WeaponFlags.MeleeWeapon | WeaponFlags.BonusAgainstShield);

    // 第一个 AddWeapon 的数据成为 PrimaryWeapon（索引 0）。
    item.AddWeapon(main, primaryGroup);
    // 第二个成为备用用法，同时把 ItemModifierGroup 覆写成 altGroup。
    item.AddWeapon(alt, altGroup);

    // 此刻 item.WeaponComponent.ItemModifierGroup == altGroup，primaryGroup 的信息已丢失。
    return item;
}
```

这段代码刻意把陷阱写出来：`item.Weapons.Count == 2`、`item.PrimaryWeapon.WeaponClass == WeaponClass.OneHandedSword`，但 `item.WeaponComponent.ItemModifierGroup == altGroup`。**如果两组都想要，必须在 `AddWeapon` 全部调完之后手动补设**，而 `ItemModifierGroup` 的 setter 是 `protected`——所以在组件外部你补不了，只能靠 `ItemObject.ItemComponent` 的类型关系另想办法，或者干脆只用一组。

## 风险与边界

- **`PrimaryWeapon` 不判空。** `_weaponList[0]` 在空列表上抛 `ArgumentOutOfRangeException`。`new WeaponComponent(item)` 之后、`AddWeapon` 之前，读 `PrimaryWeapon` 或 `GetItemType()` 都会炸。**先加武器再读。**
- **`ItemObject.Weapons` 可能返回 `null`。** 非武器物品（食物、书、Goods）走不到 `WeaponComponent`，拿到的是 `null` 而非空列表。`foreach` 一个 `null` 会抛 `NullReferenceException`。先判 `HasWeaponComponent`，或判 `!= null`。
- **`AddWeapon` 会覆写 `ItemModifierGroup`。** 多次调用只有最后一次的参数生效，且它丢弃之前传入的组。代码生成路径上尤其容易忽略。
- **`GetCopy()` 只复制外壳。** 新组件的 `_weaponList` 是空的，`ItemModifierGroup` 也是 `null`（`new WeaponComponent(base.Item)` 没设）。拷贝后必须自己重新装配，否则得到一个「有 `ItemObject` 引用但没有任何武器数据」的组件。
- **没有无参构造。** 只有 `WeaponComponent(ItemObject item)`。这跟 [EntitySystem](../EntitySystem) 的 `AddComponent<T>()` 要求的 `new()` 约束是冲突的——**`WeaponComponent` 不能作为 `EntitySystem<T>` 的组件注册**。它走的是 `ItemObject.ItemComponent` 属性持有，而不是组件注册表。
- **`AutoGeneratedInstanceCollectObjects` 覆写是空的。** 它只调 `base.`，不把 `_weaponList` 里的 `WeaponComponentData` 加进存档对象图。存档能识别本类，依赖的是 `ItemObject` 那侧的序列化流程，不是这个钩子。
- **`Deserialize` 里有个死变量。** `if (xmlAttribute != null) { string value = xmlAttribute.Value; }` 读出了 `modifier_group` 的值却完全不用。真正设置 `ItemModifierGroup` 的是 `base.Deserialize`。读这份反编译代码时别被这段误导。
- **XML 路径与代码路径设 `ItemModifierGroup` 的来源不同。** XML 走 `base.Deserialize` 从属性名查 `ItemModifierGroup`；代码走 `AddWeapon` 的参数。另外 [CraftingTemplate](../CraftingTemplate) 上是**单个** `public ItemModifierGroup ItemModifierGroup { get; private set; }`，不是列表——官方代码生成路径里传的组基本就来自模板自己。
- **`ItemObject.Name` 的 setter 是 `private`。** 外部代码没有修改物品显示名的正规途径，名字只能由 `Deserialize` 填。`WeaponComponentData` 的构造函数接受 `ItemObject item`，但不会替你写名字。
- **`GetItemType()` 只看主武器。** 一把有备用用法的武器报出的类型可能与某条备用用法不匹配。要按用法判断请遍历 `Weapons`。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Core/WeaponComponent.cs:10`，声明是 `public class WeaponComponent : ItemComponent`。**它不是一个你可以自由构造的独立对象 —— 它是某个 `ItemObject` 的组件。**

引擎自己 new 它的地方是 `TaleWorlds.Core/ItemObject.cs:572` 的 `this.ItemComponent = new WeaponComponent(this);`（另一处在 `ItemObject.cs:789`：`itemComponent = (this.ItemComponent ?? new WeaponComponent(this));`）。所以正确的拿法是**从物品上取组件，而不是自己造一个**：

```csharp
WeaponComponent wc = someWeaponItem.ItemComponent as WeaponComponent;
```

`ItemObject.ItemComponent`（`ItemObject.cs:32`）的声明是 `public ItemComponent ItemComponent { get; private set; }` —— **静态类型是基类 `ItemComponent`，所以必须 `as` 或 `is` 转一次**，直接赋给 `WeaponComponent` 变量编译不过。

组件本身三个关键成员：`Weapons`（`WeaponComponent.cs:26`，返回 `MBReadOnlyList<WeaponComponentData>`）、`PrimaryWeapon`（36）、`AddWeapon(WeaponComponentData, ItemModifierGroup)`（45）。

**一段可直接跑的三行安全读取**（关键是先判空再加武器）：

```csharp
WeaponComponent wc = item.ItemComponent as WeaponComponent;
if (wc != null && wc.Weapons.Count > 0)
{
    Debug.Print("primary = " + wc.PrimaryWeapon.WeaponClass, 0);
}
```

**`AddWeapon` 有两个参数，不是一个。** 方法体（`WeaponComponent.cs:45`）只有两句：`base.ItemModifierGroup = itemModifierGroup;` 然后 `this._weaponList.Add(weaponComponentData);`。所以**它同时改写了组件的 `ItemModifierGroup`** —— 传不同的 modifier group 连续调两次，前一次的 group 会被后一次覆盖。

**`GetCopy()` 返回的是空组件。** `WeaponComponent.cs:54` 的实现是 `return new WeaponComponent(base.Item);` —— 只带物品引用，**不复制 `_weaponList`**。所以复制出来的组件读 `PrimaryWeapon` 依然会抛。

**最常见的坑：`PrimaryWeapon` 不判空。** getter 的方法体就是 `return this._weaponList[0];`（`WeaponComponent.cs:40`），`GetItemType()` 同理（`WeaponComponent.cs:66`）。`new WeaponComponent(item)` 之后、`AddWeapon` 之前，读这两个都会炸。这条已在「风险与边界」首条展开。

## 跨版本提示

`WeaponComponent.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵源码树里**public 成员集合完全一致**：始终是 `Weapons`、`PrimaryWeapon`、`AddWeapon`、`GetItemType`、`GetCopy`、`Deserialize`、`WeaponComponent(ItemObject)` 七个，没有任何增删。字节数 2773（1.3.0 / 1.4.6 / 1.4.7 / 1.5.3）与 2784（1.3.15）之间的差异同样只是 `: base(...)` 换行的排版差别，不改变任何签名。

基类链也没变：[ItemComponent](../ItemComponent) 在五个版本里始终是 `public abstract class ItemComponent : MBObjectBase`，成员始终是 `Item` / `ItemModifierGroup` / `Deserialize` / `GetCopy` / `AutoGeneratedInstanceCollectObjects` 五个。

结论：**这个组件类在 1.3 → 1.5 三个大版本间完全稳定**，你的武器生成代码不需要为它写版本适配。真正会变的是它装的东西——[WeaponComponentData](../WeaponComponentData) 与 [WeaponDesign](../WeaponDesign) 在 1.3.15 之后有新增成员（[WeaponDesign](../WeaponDesign) 的构造器多了 `string customId = null` 参数、多了 `SetWeaponName(TextObject)`，并移除了 `_usedPieces` 数组的重新分配）。跨版本代码要盯的是那边。

## 依赖关系

- 基类：[ItemComponent](../ItemComponent) 提供 `Item`、`ItemModifierGroup`、`Deserialize`、`GetCopy` 四件套；同类还有 [ArmorComponent](../ArmorComponent) / [BannerComponent](../BannerComponent) / [SaddleComponent](../SaddleComponent) / [HorseComponent](../HorseComponent) / [TradeItemComponent](../TradeItemComponent)
- 持有者：[ItemObject](../ItemObject) 的 `WeaponComponent` / `HasWeaponComponent` / `Weapons` / `PrimaryWeapon` / `AddWeapon` 是本类在物品侧的全部入口
- 列表元素：[WeaponComponentData](../WeaponComponentData) 是 `_weaponList` 里每一条的类型（构造签名为 `WeaponComponentData(ItemObject item, WeaponClass weaponClass = WeaponClass.Undefined, WeaponFlags weaponFlags = (WeaponFlags)0UL)`），`GetItemTypeFromWeaponClass` 也由它提供
- 品质修饰：[ItemModifierGroup](../ItemModifierGroup) 是 `AddWeapon` 第二个参数的类型，内部装着 [ItemModifier](../ItemModifier)
- 读法参照：[MBReadOnlyList](../MBReadOnlyList) 解释了 `Weapons` 返回类型的只读承诺到底意味着什么
- 桶首页：[core-extra API 分区](../)