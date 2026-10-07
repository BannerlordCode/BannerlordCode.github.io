---
title: "WeaponDesign"
description: "成品武器的配方实例：构造器里一次算完轴心距离、成品长度、佩挂偏移和 WeaponFlags 位或，HashedCode 由部件 id 加缩放拼串后 MD5，是玩家自制武器的存档键。"
---

# WeaponDesign

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponDesign`
**Base:** 无（仅隐式 `System.Object`；**不继承 `MBObjectBase`**）
**File:** `TaleWorlds.Core/WeaponDesign.cs`（全文 379 行，11957 字节）

## 概述

`WeaponDesign` 描述的是**「用哪些部件、按什么顺序、以什么缩放拼成的一把武器」**——不是武器本身（那是 [ItemObject](../ItemObject)），也不是部件（那是 [WeaponDesignElement](../WeaponDesignElement)）。它是玩家锻造系统的产物：一份「设计」，可以从同一份设计反复生产出成品物品。

它的全部工作是**构造器里把四个派生量一次算完**：

```csharp
public WeaponDesign(CraftingTemplate template, TextObject weaponName, WeaponDesignElement[] usedPieces)
{
    this.Template = template;
    this._usedPieces = usedPieces.ToArray<WeaponDesignElement>();
    this.WeaponName = weaponName;
    this._piecePivotDistances = new float[usedPieces.Length];
    this.CalculatePivotDistances();
    this.CraftedWeaponLength = this.CalculateWeaponLength();
    this.HolsterShiftAmount = this.CalculateHolsterShiftAmount();
    foreach (WeaponDesignElement weaponDesignElement in usedPieces)
    {
        this.WeaponFlags |= weaponDesignElement.CraftingPiece.AdditionalWeaponFlags;
    }
    this.BuildHashedCode();
}
```

七个动作，顺序不能换：`CalculatePivotDistances()` 必须先跑（后面两个计算都依赖 `_piecePivotDistances`），`CalculateWeaponLength()` 依赖它，`CalculateHolsterShiftAmount()` 依赖 `UsedPieces`，最后 `BuildHashedCode()` 把 `CraftingPiece.StringId` 和 `ScalePercentage` 拼进去。**所以这四个值全是构造器一次性算定的，之后永远不变**——类里没有一条给它们赋值的 setter。

**它不是 `MBObjectBase`，所以没有 `StringId`，不能被对象管理器按 id 直接查。** 它有的是 `HashedCode`——一个由 MD5 算出来的十六进制串，用途是当玩家自制武器的**存档键**。

## 心智模型

**把它想成「一份不可变的锻造配方快照」，而不是「一把武器」。** 关键在这三句话：部件用完即算、算完不再变、身份靠哈希。

**第一步，理解 `BuildOrders` 与 `UsedPieces` 的配对关系。** `WeaponDesign` 遍历的从来不是 `usedPieces`，而是**模板的** `Template.BuildOrders`：

```csharp
foreach (PieceData pieceData in this.Template.BuildOrders)
{
    WeaponDesignElement weaponDesignElement = this.UsedPieces[(int)pieceData.PieceType];
    ...
}
```

`BuildOrders` 是 `CraftingTemplate.BuildOrders`（`PieceData[]`），每项有 `PieceType`（`CraftingPiece.PieceTypes`：`Invalid = -1`、`Blade`、`Guard`、`Handle`、`Pommel`、`NumberOfPieceTypes`）和 `Order`（**方向**：负号 = 往前装，正号 = 往后装，0 = 中段）。所以 `UsedPieces` 数组的**长度和下标必须覆盖整个 PieceTypes 空间**，而不是「你实际用了几个部件」。

`CalculatePivotDistances` 按 `Order` 的符号走三条分支，分别把 `num`（向后累计）和 `num2`（向前累计）两个游标推进，再按 `MathF.Sign(pieceData.Order)` 把结果写进 `_piecePivotDistances[(int)pieceData.PieceType]`。**部件无效时写入 `float.NaN`**——这是本页最容易忽略的信号，不是 bug。

**第二步，理解 `CraftedWeaponLength` 与 `TotalLength` 的差别。** `CraftedWeaponLength` 由 `CalculateWeaponLength()` 算出，是**成品主体长度**；`HandToBottomLength` 由 `CalculatePivotDistances()` 末尾的 `this.HandToBottomLength = num;` 赋值，是**从握把到最下端轴心的距离**。`TotalLength` 是两者之和：

```csharp
public float TotalLength
{
    get { return this.CraftedWeaponLength + this.HandToBottomLength; }
}
```

**只有 `TotalLength` 是给动画/碰撞用的完整长度。** 只读 `CraftedWeaponLength` 会低估。

**第三步，理解 `HashedCode` 就是存档键。** `BuildHashedCode()` 把每个有效部件的 `CraftingPiece.StringId` + `";"` + `ScalePercentage` + `";"` 依次拼进一个字符串，**无效部件拼成字面量 `"invalid_piece;"`**，最后追加 `Template.StringId` 和 `WeaponName`（`WeaponName` 是 `TextObject`，隐式转字符串取其 key），然后：

```csharp
this._hashedCode = Common.CalculateMD5Hash(text);
this._cachedHashedCodeInt = Common.GetDJB2(this._hashedCode);
```

`Equals` 和 `GetHashCode` 都建立在 `HashedCode` 上：

```csharp
public override bool Equals(object obj)
{
    if (obj == null) { return false; }
    WeaponDesign weaponDesign = obj as WeaponDesign;
    return weaponDesign != null && this.HashedCode == weaponDesign.HashedCode;
}
public override int GetHashCode() { return this._cachedHashedCodeInt; }
```

这是本页最漂亮的一处设计：**相等性 = 配方内容相等**。两个 `WeaponDesign` 对象哪怕不是同一份，只要部件和缩放一样就算相等。于是 `Crafting.cs:271` 直接把它当 `StringId` 用：

```csharp
itemObject.StringId = ((!string.IsNullOrEmpty(itemObject.StringId)) ? itemObject.StringId : weaponDesign.HashedCode);
```

`ItemObject.GetCraftedItemObjectFromHashedCode(string hashedCode)` 也是靠遍历 `IsCraftedWeapon && WeaponDesign.HashedCode == hashedCode` 来反查的。

**第四步，理解 `HolsterShiftAmount` 里写死的下标 2。** `CalculateHolsterShiftAmount()` 直接访问 `this.UsedPieces[2]`，也就是**硬编码了 `Pommel` 的枚举值**：

```csharp
private Vec3 CalculateHolsterShiftAmount()
{
    WeaponDesignElement weaponDesignElement = this.UsedPieces[2];
    Vec3 vec = (this.Template.ItemHolsterPositionShift + weaponDesignElement.CraftingPiece.ItemHolsterPosShift) * weaponDesignElement.ScaleFactor;
    if (this.UsedPieces[1] != null) { vec += Vec3.Up * this.UsedPieces[1].ScaledLength; }
    return vec;
}
```

**`UsedPieces[2]` 没有判空。** 如果你传的数组长度小于 3，构造器直接 `IndexOutOfRangeException`。而且 `UsedPieces[1]`（`Guard`）做了判空、`UsedPieces[2]`（`Pommel`）没做——这是源码里的不对称，不是笔误之外的东西。`UsedPieces` 至少要有 3 个元素。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public WeaponDesign(CraftingTemplate template, TextObject weaponName, WeaponDesignElement[] usedPieces)` | 全部计算的入口。`usedPieces.ToArray<WeaponDesignElement>()` 拷一份，**长度必须 >= 3**。`weaponName` 允许传 `null`（`Crafting.cs:88` 就是 `new WeaponDesign(this.CurrentCraftingTemplate, null, array)`）。 |
| `WeaponName` | `[SaveableProperty(21)] public TextObject WeaponName { get; private set; }` | 武器名。**参与 `HashedCode` 计算**，所以改名等于换一把武器。 |
| `UsedPieces` | `public WeaponDesignElement[] UsedPieces { get; }` | 返回 `_usedPieces`。**返回的是内部数组本身**，外部可以直接改元素——而 `_piecePivotDistances` 等派生量不会重算。 |
| `HashedCode` | `public string HashedCode { get; }` | 部件 id + 缩放 + 模板 id + 名字 拼串后的 MD5。**玩家自制武器的存档键**。 |
| `PiecePivotDistances` | `public float[] PiecePivotDistances { get; }` | 每个部件类型的轴心距离，**无效部件是 `float.NaN`**。同样返回内部数组本身。 |
| `TotalLength` | `public float TotalLength { get; }` | `CraftedWeaponLength + HandToBottomLength`。**完整长度**，动画/碰撞用这个。 |
| `HandToBottomLength` | `[SaveableProperty(50)] public float HandToBottomLength { get; private set; }` | 握把到最下端轴心的距离。由 `CalculatePivotDistances()` 末尾赋值。 |
| `BottomPivotOffset` | `public float BottomPivotOffset { get; }` | `BottomPivotOffsets[Count - 1]`，即最后累加出来的底部偏移。空列表会抛异常。 |
| `WeaponFlags` | `[SaveableField(10)] public readonly WeaponFlags WeaponFlags` | 所有部件 `CraftingPiece.AdditionalWeaponFlags` 的**位或**。只读字段，构造器里一次算完。 |
| `CraftedWeaponLength` | `[SaveableField(60)] public readonly float CraftedWeaponLength` | 成品主体长度。 |
| `Template` | `[SaveableField(70)] public readonly CraftingTemplate Template` | 来源模板。`CalculatePivotDistances` 遍历的是它的 `BuildOrders`。 |
| `TopPivotOffsets` | `[SaveableField(80)] public List<float> TopPivotOffsets` | **public 可变字段**，不是属性。没有时由 `AddTopPivotOffset` 懒建 `new List<float>()`。 |
| `BottomPivotOffsets` | `[SaveableField(90)] public List<float> BottomPivotOffsets` | 同上，底部轴心偏移累加序列。 |
| `HolsterShiftAmount` | `[SaveableField(100)] public readonly Vec3 HolsterShiftAmount` | 佩挂位置偏移。由模板的 `ItemHolsterPositionShift` + 尾件的 `ItemHolsterPosShift`，再按尾件 `ScaleFactor` 缩放。 |
| `Equals` | `public override bool Equals(object obj)` | 真的 `override`。按 `HashedCode` 字符串比较，**不看模板对象引用**。 |
| `GetHashCode` | `public override int GetHashCode()` | 返回 `_cachedHashedCodeInt`，是 `HashedCode` 的 DJB2 值。`BuildHashedCode()` 时缓存。 |
| `operator ==` | `public static bool operator ==(WeaponDesign x, WeaponDesign y)` | `flag && flag2 \|\| (!flag && x.Equals(y))`。**两侧都是 null 时返回 true**。 |
| `operator !=` | `public static bool operator !=(WeaponDesign x, WeaponDesign y)` | `!(x == y)`。 |
| `AutoGeneratedInstanceCollectObjects` | `protected virtual void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档对象图钩子，把 `Template`、两个偏移列表、`_usedPieces`、`_piecePivotDistances`、`WeaponName` 全部收走。 |

## 真实示例

官方四处 `new WeaponDesign(...)` 各有代表性。第一处是 `Crafting.cs:131`，**改一个部件后重建设计**——注意它传的是旧设计的 `Template` 和 `WeaponName`，只有部件数组换了：

```csharp
using System.Linq;
using TaleWorlds.Core;

// Crafting.cs:131 的形态：换件后整体重算。
// Crafting 实例通常由界面层持有（Campaign 那边存在 Campaign.Current.CraftingManager 里），
// 这里直接接收它作为参数。
public static WeaponDesign SwapBlade(Crafting crafting, WeaponDesignElement newBladeElement)
{
    WeaponDesign previous = crafting.CurrentWeaponDesign;
    WeaponDesignElement[] newPieces = previous.UsedPieces.ToArray<WeaponDesignElement>();
    newPieces[(int)CraftingPiece.PieceTypes.Blade] = newBladeElement;

    WeaponDesign next = new WeaponDesign(previous.Template, previous.WeaponName, newPieces);
    MBDebug.Print("new length=" + next.TotalLength + " flags=" + next.WeaponFlags);
    return next;
}
```

传 `previous.WeaponName` 是必须的：**名字进了 `HashedCode`**，传 `null` 或换个名字会得到完全不同的存档键，玩家就认不出这是同一把武器的改造版。

第二处是 `CraftingCampaignBehavior.cs:678`，**用空名字生成一个设计模板**，用来做「预览」而不是成品：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 预览用：名字是空 TextObject，不参与存档。
WeaponDesign preview = new WeaponDesign(template, TextObject.GetEmpty(), pieces);
MBDebug.Print("pivot[blade]=" + preview.PiecePivotDistances[(int)CraftingPiece.PieceTypes.Blade]);
```

读派生量时，**必须先处理 `NaN`**。这是本类最容易踩的坑：

```csharp
using TaleWorlds.Core;

public static void DumpPivotDistances(ItemObject craftedItem)
{
    WeaponDesign design = craftedItem.WeaponDesign;
    if (design == null)
    {
        MBDebug.Print("not a crafted weapon");
        return;
    }

    CraftingPiece.PieceTypes[] types =
    {
        CraftingPiece.PieceTypes.Blade,
        CraftingPiece.PieceTypes.Guard,
        CraftingPiece.PieceTypes.Handle,
        CraftingPiece.PieceTypes.Pommel
    };

    foreach (CraftingPiece.PieceTypes type in types)
    {
        float pivot = design.PiecePivotDistances[(int)type];
        if (float.IsNaN(pivot))
        {
            // 无效部件就是 NaN，直接参与算术会污染整条结果。
            MBDebug.Print(type + " -> 未使用 / 无效");
        }
        else
        {
            MBDebug.Print(type + " -> " + pivot + " (length=" + design.TotalLength + ")");
        }
    }
}
```

`float.NaN` 不会自己变成 0，也不会让 `==` 成立——它会让所有下游算术静默变 `NaN`。**任何时候读到 `PiecePivotDistances` 都要判。**

用哈希当缓存键，这是官方实际做的事：

```csharp
using TaleWorlds.Core;

public static ItemObject ResolveCraftedItem(string hashedCode)
{
    // Crafting.cs:271 就是把 HashedCode 直接当 ItemObject.StringId 用。
    ItemObject found = Game.Current.ObjectManager.GetObject<ItemObject>(hashedCode);
    if (found == null)
    {
        // 兜底：引擎自己也提供按 HashedCode 遍历反查的口子。
        found = ItemObject.GetCraftedItemObjectFromHashedCode(hashedCode);
    }
    return found;
}
```

`ItemObject.GetCraftedItemObjectFromHashedCode`（`ItemObject.cs:540`）内部是遍历 `ObjectManagerTypeList<ItemObject>`，筛 `IsCraftedWeapon && WeaponDesign.HashedCode == hashedCode`。它**不判 `WeaponDesign` 是否为 null**——所以 `IsCraftedWeapon` 为 true 是它唯一的护栏。

## 风险与边界

- **`UsedPieces` 长度必须 >= 3。** `CalculateHolsterShiftAmount()` 里 `this.UsedPieces[2]` 无判空。长度 2 或更短 → 构造器抛 `IndexOutOfRangeException`。这与 `UsedPieces[1]` 做了判空形成刺眼的不对称。
- **`PiecePivotDistances` 里可能有 `float.NaN`。** `CalculatePivotDistances` 在部件无效时显式写 `float.NaN`。任何直接参与算术的地方都会静默污染结果。**先判 `float.IsNaN`。**
- **`HashedCode` 把 `WeaponName` 算进去了。** 改名字 = 换存档键。预览时传 `TextObject.GetEmpty()`（`CraftingCampaignBehavior.cs:678` 的做法），成品时才传真名。
- **`HashedCode` 把无效部件算成字面量 `"invalid_piece;"`。** 也就是说「没装这个部件」和「装了个 id 恰好不匹配的部件」在哈希上无法区分。
- **`UsedPieces` 和 `PiecePivotDistances` 返回内部数组本身。** 外部改数组元素不会触发任何重算，于是 `UsedPieces` 与 `PiecePivotDistances` / `CraftedWeaponLength` / `WeaponFlags` / `HolsterShiftAmount` 之间**失去一致性**，而 `Equals` 仍按旧的 `HashedCode` 判定相等。这是本页最隐蔽的一致性陷阱。
- **`TopPivotOffsets` / `BottomPivotOffsets` 是 public 可变字段。** 不是属性，任何代码都能 `Clear()` 它们。`BottomPivotOffset` 读的是 `BottomPivotOffsets[Count - 1]`，清空后抛 `ArgumentOutOfRangeException`。
- **`BottomPivotOffset` 不判空列表。** 逻辑上 `CalculatePivotDistances` 一定至少 `Add` 一次，但手工构造的对象可能不是。
- **`operator ==` 两边都是 null 时返回 `true`。** `x == y` 在两个 null 上是 `true`（符合 `==` 的通常约定），但别忘了它内部走 `x.Equals(y)`，而 `Equals` 内部对 `obj == null` 返回 `false`——两条路径语义一致，别混用。
- **`WeaponFlags` 只做位或、不做交集。** 某个部件带 `NotUsableWithOneHand`、另一个带 `NotUsableWithTwoHand`，位或之后两个标志同时为真。**多部件组合出的武器可能得到自相矛盾的 flags。**
- **不是 `MBObjectBase`。** 没有 `StringId`、不被 `MBObjectManager` 注册、不参与 `Deserialize`。想要 id 就是 `HashedCode`。
- **无 `Deserialize`。** 本类只能通过构造器创建，反序列化时靠 `[SaveableField]` / `[SaveableProperty]` 恢复字段。`HandToBottomLength` 是 `[SaveableProperty(50)]`，`WeaponName` 是 `[SaveableProperty(21)]`——存档字段号固定，**继承时不要占用这些号**。
- **`[LoadInitializationCallback] private void OnLoad()` 会重算 `BuildHashedCode`。** 读档时 `HashedCode` 是重算出来的，不是存档字段。所以**旧档里手工改过的哈希不会被保留**。
- **`CalculatePivotDistances` 依赖 `Template.BuildOrders` 的顺序。** 模板换了但 `UsedPieces` 没跟着换，算出来的轴心距离就是错的。而两者都是 `readonly` 引用，重建 `WeaponDesign` 是唯一的修正途径。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Core/WeaponDesign.cs:11`，普通类，**唯一构造函数 `WeaponDesign(CraftingTemplate template, TextObject weaponName, WeaponDesignElement[] usedPieces)`（`WeaponDesign.cs:153`）**。它不是 `MBObjectBase` 派生，所以不进 `MBObjectManager`、不能按 id 查。

四个官方 new 点，形态各不相同，值得分别记住：

- `TaleWorlds.Core/Crafting.cs:88` 的 `this.CurrentWeaponDesign = new WeaponDesign(this.CurrentCraftingTemplate, null, array);` —— 制造台当前设计，`weaponName` 传 **null**。
- `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs:678` 的 `new WeaponDesign(randomElement, TextObject.GetEmpty(), this.GetWeaponPieces(randomElement, pieceTier));` —— 随机生成一件武器设计。
- 同文件 `:724` 与 `:318` 是同一形状的另两处。

`UsedPieces`（`WeaponDesign.cs:98`）的静态类型是 **`WeaponDesignElement[]` 数组**，不是列表 —— 索引访问没有边界检查。

**一段可直接跑的三行安全构造**（关键是保证第三个参数长度 ≥ 3）：

```csharp
WeaponDesignElement[] pieces = GetPiecesForTier(template, tier);
if (pieces.Length < 3) { return null; }
WeaponDesign wd = new WeaponDesign(template, TextObject.GetEmpty(), pieces);
```

**构造器本身就可能抛异常，而且是在构造过程中。** 方法体按序调了 `CalculatePivotDistances()` → `CalculateWeaponLength()` → `CalculateHolsterShiftAmount()` → `BuildHashedCode()`，其中 `CalculateHolsterShiftAmount()`（`WeaponDesign.cs:283`）第一句就是 `WeaponDesignElement weaponDesignElement = this.UsedPieces[2];` —— **无判空直接索引**。所以 `new` 的那一刻就要求数组至少 3 个元素。

**这与它下面两行的写法形成刺眼的不对称**：紧接着的 `if (this.UsedPieces[1] != null)` 对下标 1 判空了，下标 2 却没有。

**`HolsterShiftAmount` 与 `CraftedWeaponLength` 是构造期算好的 `public readonly` 字段。** 声明在 `WeaponDesign.cs:361` 与 `377`，不是属性也没有 setter —— 它们在构造器里被赋值后就冻结，不随外部变化而更新。`WeaponFlags`（341）同样 readonly，在构造器末尾用 `|=` 逐件累加 `CraftingPiece.AdditionalWeaponFlags` 求得。

**最常见的坑：`UsedPieces` 长度必须 >= 3。** `CalculateHolsterShiftAmount()` 里 `this.UsedPieces[2]` 无判空，长度 2 或更短 → 构造器抛 `IndexOutOfRangeException`，而且栈顶指向引擎内部而不是你的 `new` 那行。这条已在「风险与边界」首条展开。

## 跨版本提示

`WeaponDesign.cs` 在 **1.3.15 起有一次明确的破坏性变更**——这是本批里跨版本差异最大的类型。

**1.3.0**（379 行 / 11957 字节）只有三参数构造器：
```csharp
public WeaponDesign(CraftingTemplate template, TextObject weaponName, WeaponDesignElement[] usedPieces)
```

**1.3.15 / 1.4.6 / 1.4.7 / 1.5.3**（359 行 / 11515 字节）改为四参数，多一个 `string customId = null`，并新增一个方法：
```csharp
public WeaponDesign(CraftingTemplate template, TextObject weaponName, WeaponDesignElement[] usedPieces, string customId = null)
public void SetWeaponName(TextObject name)
```

因为 `customId` 有默认值，**源码层面 `new WeaponDesign(a, b, c)` 在两边都编译得过**，这是个伪装成兼容的破坏点——但在 1.3.0 上你**无法**传入自定义 id，也无法在构造后改名字（1.3.0 里 `WeaponName` 是 `{ get; private set; }` 且没有 setter 方法）。

字节数从 11957 降到 11515（少 21 行），与构造器不再 `usedPieces.ToArray<WeaponDesignElement>()` 重分配 `_usedPieces` 相对应——1.3.0 有一句 `this._usedPieces = usedPieces.ToArray<WeaponDesignElement>()`，新版去掉了。这意味着**新版不再防御调用方在构造后改动传入数组**，`UsedPieces` 与内部状态的一致性保障变弱了。

结论：**1.3.0 上不要写依赖 `SetWeaponName` 或 `customId` 的代码**；需要同样效果时只能在构造时就把名字定死。这也再次说明为什么 `Crafting.cs` 的三处调用都传旧设计的 `WeaponName`——在 1.3.0 上那是唯一能改名的时机。

## 依赖关系

- 部件：[WeaponDesignElement](../WeaponDesignElement) 是 `UsedPieces` 的元素类型，`CraftingPiece` / `ScalePercentage` / `ScaleFactor` / `IsValid` / `ScaledPieceOffset` 全部来自它
- 模板：[CraftingTemplate](../CraftingTemplate) 提供 `BuildOrders`（`PieceData[]`，决定装配顺序与方向）、`ItemHolsterPositionShift`、`StringId`
- 产物：[ItemObject](../ItemObject) 的 `WeaponDesign` 属性持有本类；`Crafting.cs:271` 把 `HashedCode` 直接当作成品的 `StringId`
- 反查入口：[ItemObject](../ItemObject) 的 `GetCraftedItemObjectFromHashedCode(string)` 是按哈希反查成品的官方方法
- 部件类型枚举：`CraftingPiece.PieceTypes`（`Invalid = -1` / `Blade` / `Guard` / `Handle` / `Pommel` / `NumberOfPieceTypes`）——`UsedPieces` 的下标就是它，`CalculateHolsterShiftAmount` 里的 `[2]` 是硬编码的 `Pommel`
- 装备侧：[WeaponComponent](../WeaponComponent) 持有由本设计生成的 `WeaponComponentData`
- 桶首页：[core-extra API 分区](../)