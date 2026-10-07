---
title: "WeaponDesignElement"
description: "合成武器设计里的单个槽位：包住一个 CraftingPiece 并记录缩放百分比，对外只暴露一串 Scaled* 派生量，构造器私有、只能走静态工厂。"
---
# WeaponDesignElement

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponDesignElement`
**Base:** `System.Object`
**File:** `TaleWorlds.Core/WeaponDesignElement.cs`

## 概述

它把「一个零件 + 一个缩放百分比」这个组合封成对象，让 [WeaponDesign](../WeaponDesign) 可以把几何计算全部写成 `piece.ScaledXxx` 的一串无分支表达式。全部 10 个 `Scaled*` 属性都是同一个模式：**`IsPieceScaled` 为 false 就原样返回 `CraftingPiece.Xxx`，为 true 就乘 `ScaleFactor`**。所以没缩放时是零成本的字段转发。

真正有分支的只有 `ScaledWeight`：`CraftingPiece.FullScale` 为真时按 `ScaleFactor³` 缩放（体积三次方），否则线性——护手和尾锤默认 `FullScale = true`，因为它们是实体块不是细杆。

它是存档对象：`_craftingPiece` 与 `_scalePercentage` 各挂一个 `[SaveableField]`。

## 心智模型

**这个类的构造器是 `private`。** 拿到实例只有三条路：

1. `WeaponDesignElement.CreateUsablePiece(piece, scalePercentage = 100)` —— 正常零件；
2. `WeaponDesignElement.GetInvalidPieceForType(pieceType)` —— 占位无效件（内部走 `CraftingPiece.GetInvalidCraftingPiece`），**给数组补洞用**；
3. 已有实例的 `GetCopy()` —— [Crafting](../Crafting) 换槽位时用它，避免两个槽共享同一个元素对象。

拿到之后唯一可写的状态是缩放：`SetScale(int percentage)`。改完**必须重建 [WeaponDesign](../WeaponDesign)** 才能让几何更新——`Scaled*` 属性本身是即时计算的，但 `WeaponDesign` 在构造时就把偏移烤进了 `_piecePivotDistances`，不会跟着重算。

`scalePercentage` 是整数百分比，`ScaleFactor = scalePercentage * 0.01f`。`IsPieceScaled` 就是 `_scalePercentage != 100`，所以设 100 与不设完全等价。取值范围没有任何校验——`SetScale(0)` 会让 `ScaledLength` 等全为 0，`SetScale(-50)` 会得到负长度，**没有守卫**。游戏本体只在 [Crafting](../Crafting) 的 `GetRandomPieceOfType` 里用 90–109 这个区间。

**最坑的一条：`ScaledBladeLength` 直接解引用 `CraftingPiece.BladeData.BladeLength`，而 `BladeData` 只有在 `CraftingPiece.Deserialize` 读到 `<BladeData>` 子节点时才会被 new 出来。** 护手、握柄、尾锤的 `BladeData` 都是 null，所以对非刀刃零件读 `ScaledBladeLength` 就是 `NullReferenceException`。**只有 `PieceTypes.Blade` 能读这个属性。**

第二条：`IsValid` 只是转发 `CraftingPiece.IsValid`。`CraftingPiece` 自身在 `Deserialize` 开头被置 `IsValid = true`；`new CraftingPiece()` 造出来的是 `IsValid = false`。而 `GetInvalidPieceForType` 造出来的正是 `IsValid = false` 的那批。**`IsValid == false` 是「这个槽位被故意留空」的信号，不是错误。**

第三条：`SetScale` 改的是**这一个元素对象**。如果它是通过 `GetCopy()` 放进设计数组的，那没问题；如果直接把 [Crafting](../Crafting) 的 `UsablePiecesList` 里的候选元素传给 `SwitchToPiece`，`SetScale` 会改到候选池里那份共享对象。

常见误用：对每个槽位都读 `ScaledBladeLength`；以为 `GetCopy()` 是深拷贝（它只复制引用与百分比，不复制 `CraftingPiece` 本身）；`SetScale` 之后忘记重建 [WeaponDesign](../WeaponDesign)。

## 关键成员

### 缩放状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ScalePercentage` | `public int ScalePercentage { get; }` | 原始百分比整数值，`[SaveableField(20)]`。**无范围校验**。 |
| `ScaleFactor` | `public float ScaleFactor { get; }` | `(float)_scalePercentage * 0.01f`。所有 `Scaled*` 的乘数。 |
| `IsPieceScaled` | `public bool IsPieceScaled { get; }` | `_scalePercentage != 100`。**false 时所有 `Scaled*` 走零分支直返原值。** |
| `SetScale` | `public void SetScale(int scalePercentage)` | 直接写 `_scalePercentage`。**不做 clamp、不通知任何设计对象**，改完要自己重建 [WeaponDesign](../WeaponDesign)。 |

### 零件本体

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CraftingPiece` | `public CraftingPiece CraftingPiece { get; }` | 零件定义，`[SaveableField(10)]`。由静态工厂注入，**没有公开的赋值路径**。 |
| `IsValid` | `public bool IsValid { get; }` | 转发 `CraftingPiece.IsValid`。`false` = 无效占位件。 |

### 派生量（未缩放时零分支直返原字段）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ScaledLength` | `public float ScaledLength { get; }` | `CraftingPiece.Length * ScaleFactor`。 |
| `ScaledWeight` | `public float ScaledWeight { get; }` | `CraftingPiece.Weight * (FullScale ? ScaleFactor³ : ScaleFactor)`。**唯一带三次方的**——护手/尾锤默认 `FullScale = true`。 |
| `ScaledCenterOfMass` | `public float ScaledCenterOfMass { get; }` | `CraftingPiece.CenterOfMass * ScaleFactor`。 |
| `ScaledDistanceToNextPiece` | `public float ScaledDistanceToNextPiece { get; }` | `CraftingPiece.DistanceToNextPiece * ScaleFactor`。几何累加的核心输入。 |
| `ScaledDistanceToPreviousPiece` | `public float ScaledDistanceToPreviousPiece { get; }` | `CraftingPiece.DistanceToPreviousPiece * ScaleFactor`。 |
| `ScaledPieceOffset` | `public float ScaledPieceOffset { get; }` | `CraftingPiece.PieceOffset * ScaleFactor`。 |
| `ScaledPreviousPieceOffset` | `public float ScaledPreviousPieceOffset { get; }` | `CraftingPiece.PreviousPieceOffset * ScaleFactor`。 |
| `ScaledNextPieceOffset` | `public float ScaledNextPieceOffset { get; }` | `CraftingPiece.NextPieceOffset * ScaleFactor`。 |
| `ScaledBladeLength` | `public float ScaledBladeLength { get; }` | `CraftingPiece.BladeData.BladeLength * ScaleFactor`。**`BladeData` 对非刀刃零件为 null，此属性只有 `PieceTypes.Blade` 可读。** |

### 工厂与复制

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `private WeaponDesignElement(CraftingPiece craftingPiece, int scalePercentage = 100)` | **私有**。外部只能经下面三个静态/实例方法拿实例。 |
| `CreateUsablePiece` | `public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)` | 正常零件的入口。**不校验 `craftingPiece` 是否 null，也不校验它是否 `IsValid`**——传 null 会造出一个随后读 `IsValid` 就 NRE 的对象。 |
| `GetInvalidPieceForType` | `public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)` | 给数组补洞用。内部 `CraftingPiece.GetInvalidCraftingPiece(pieceType)`，缩放固定 100。 |
| `GetCopy` | `public WeaponDesignElement GetCopy()` | 造一个同零件、同百分比的新元素对象。**`CraftingPiece` 是同一个引用，不是深拷贝。** [Crafting](../Crafting) 的 `SwitchToPiece` / `GetRandomPieceOfType` / `SwitchToCraftedItem` 全用它来避免槽位与候选池共享对象。 |

## 怎么用

### 怎么拿到它

`WeaponDesignElement` 是 `TaleWorlds.Core/WeaponDesignElement.cs:8` 的 `public class WeaponDesignElement`，251 行。

**注意它的构造器全是 `private`**（`private WeaponDesignElement(CraftingPiece craftingPiece, int scalePercentage = 100)`，`:217`）。所以实例只能从工厂来：

- `public static WeaponDesignElement CreateUsablePiece(CraftingPiece craftingPiece, int scalePercentage = 100)`（`:230`）
- `public static WeaponDesignElement GetInvalidPieceForType(CraftingPiece.PieceTypes pieceType)`（`:224`）——内部是 `new WeaponDesignElement(CraftingPiece.GetInvalidCraftingPiece(pieceType), 100)`，也就是拿 [CraftingPiece](../CraftingPiece) 的哨兵包一层
- `public WeaponDesignElement GetCopy()`（`:221`）——`new WeaponDesignElement(this.CraftingPiece, this.ScalePercentage)`

尺寸属性是一整族：`ScaledLength`（`:86`）、`ScaledWeight`（`:100`）、`ScaledCenterOfMass`（`:115`）、`ScaledDistanceToNextPiece`（`:129`）、`ScaledDistanceToPreviousPiece`（`:143`）、`ScaledBladeLength`（`:157`）、`ScaledPieceOffset`（`:171`）、`ScaledPreviousPieceOffset`（`:185`）、`ScaledNextPieceOffset`（`:199`）。配套的未缩放量是 `ScalePercentage`（`:36`）、`ScaleFactor`（`:46`）、`IsPieceScaled`（`:56`）。

### 典型用法

```csharp
using TaleWorlds.Core;

// 只能通过工厂拿
CraftingPiece blade = MBObjectManager.Instance.GetObject<CraftingPiece>("piece_blade_1");   // MBObjectManager.cs:288
WeaponDesignElement elem = WeaponDesignElement.CreateUsablePiece(blade);                  // WeaponDesignElement.cs:230
elem.SetScale(120);                                                                       // :212，只写 _scalePercentage

WeaponDesignElement copy = elem.GetCopy();                                                 // :221
WeaponDesignElement missing = WeaponDesignElement.GetInvalidPieceForType(CraftingPiece.PieceTypes.Guard);   // :224

// 有效性与尺寸
if (elem.IsValid)                          // :76
{
    float len = elem.ScaledLength;          // :86
    float mass = elem.ScaledCenterOfMass;   // :115
    int pct = elem.ScalePercentage;         // :36
}
```

### 最容易踩的坑

**改完 `SetScale` 就直接读 `ScaledLength`，结果拿到的是缩放前的旧值。** `SetScale(int scalePercentage)`（`:212-215`）的实现只有一句 `this._scalePercentage = scalePercentage;`——**它只写私有的 `_scalePercentage`，不刷新任何缓存**。那一族 `Scaled*` 属性是由 `_scalePercentage` 与 `CraftingPiece` 的原始值现算出来的派生量（`ScaleFactor` `:46`、`IsPieceScaled` `:56` 都是同理）。所以顺序必须是：先 `SetScale`，再读 `Scaled*`；反过来读到的就是旧尺寸。

第二个坑是 `GetInvalidPieceForType`（`:224`）返回的对象**不是 null**。它内部包的是 `CraftingPiece.GetInvalidCraftingPiece(pieceType)`（`CraftingPiece.cs:53`）那个 `IsValid = false` 的共享哨兵，于是 `elem.CraftingPiece` 非 null、`elem.IsValid` 为 false。所以 `if (elem == null)` **挡不住无效件**，必须读 `IsValid`（`:76`）。而 [Crafting](../Crafting) 的 `Init()` 在某个 `PieceTypes` 没有可用部件时正是填的这个（`Crafting.cs:81`）。

第三，[Crafting](../Crafting) 的 `Init()` 挑默认件时用 `UsablePiecesList[i].First(p => !p.CraftingPiece.IsHiddenOnDesigner)`——注意它读的是 `CraftingPiece.IsHiddenOnDesigner`，**不是** `WeaponDesignElement.IsValid`。这两个是不同判断，所以「不可见」和「无效」要分别查。

## 真实示例

摆满 4 个槽并检查有效性：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");

WeaponDesignElement[] pieces = new WeaponDesignElement[4];
pieces[(int)CraftingPiece.PieceTypes.Blade] = WeaponDesignElement.CreateUsablePiece(bladePiece, 100);
pieces[(int)CraftingPiece.PieceTypes.Handle] = WeaponDesignElement.GetInvalidPieceForType(CraftingPiece.PieceTypes.Handle);
pieces[(int)CraftingPiece.PieceTypes.Guard] = WeaponDesignElement.CreateUsablePiece(guardPiece, 95);
pieces[(int)CraftingPiece.PieceTypes.Pommel] = WeaponDesignElement.GetInvalidPieceForType(CraftingPiece.PieceTypes.Pommel);

for (int i = 0; i < pieces.Length; i++)
{
    if (pieces[i] != null && pieces[i].IsValid)
    {
        Debug.Print("slot " + i + " len=" + pieces[i].ScaledLength + " weight=" + pieces[i].ScaledWeight, 0);
    }
}
```

缩放并观察质量的三次方差异（护手 vs 握柄）：

```csharp
WeaponDesignElement guard = WeaponDesignElement.CreateUsablePiece(guardPiece, 50);
WeaponDesignElement grip = WeaponDesignElement.CreateUsablePiece(gripPiece, 50);

Debug.Print("guard scaleFactor=" + guard.ScaleFactor + " full=" + guard.CraftingPiece.FullScale, 0);
Debug.Print("guard weight=" + guard.ScaledWeight + " (cube-scaled)", 0);
Debug.Print("grip  weight=" + grip.ScaledWeight + " (linear)", 0);
```

改缩放后必须重建设计，几何才会更新：

```csharp
WeaponDesignElement blade = WeaponDesignElement.CreateUsablePiece(bladePiece, 100);
WeaponDesignElement[] pieces = new WeaponDesignElement[4];
pieces[(int)CraftingPiece.PieceTypes.Blade] = blade;
for (int i = 0; i < pieces.Length; i++)
{
    if (pieces[i] == null)
    {
        pieces[i] = WeaponDesignElement.GetInvalidPieceForType((CraftingPiece.PieceTypes)i);
    }
}

WeaponDesign before = new WeaponDesign(template, name, pieces, "design_v1");
float lenBefore = before.TotalLength;

blade.SetScale(80);

WeaponDesign after = new WeaponDesign(template, name, pieces, "design_v2");
Debug.Print("old=" + lenBefore + " new=" + after.TotalLength, 0);
```

只在刀刃槽读 `ScaledBladeLength`：

```csharp
WeaponDesignElement piece = slots[(int)CraftingPiece.PieceTypes.Blade];
if (piece != null && piece.IsValid && piece.CraftingPiece.PieceType == CraftingPiece.PieceTypes.Blade)
{
    Debug.Print("blade=" + piece.ScaledBladeLength, 0);
}
```

用 `GetCopy()` 避免改动候选池里那份共享对象：

```csharp
WeaponDesignElement candidate = usableList[(int)CraftingPiece.PieceTypes.Blade][0];
WeaponDesignElement placed = candidate.GetCopy();
placed.SetScale(103);
Debug.Print("pool untouched=" + (usableList[(int)CraftingPiece.PieceTypes.Blade][0].ScalePercentage == 100), 0);
```

## 风险与边界

- **构造器私有。** 想继承或 `new` 都不行——只能 `CreateUsablePiece` / `GetInvalidPieceForType` / `GetCopy()`。
- **`ScaledBladeLength` 对非刀刃零件必然 NPE。** `BladeData` 只在 `CraftingPiece.Deserialize` 读到 `<BladeData>` 节点时才被创建。
- **`SetScale` 无范围校验。** 0、负数、10000 都照单全收，负长度会一路传进 [WeaponDesign](../WeaponDesign) 的几何累加。游戏本体只在 [Crafting](../Crafting) 里用 90–109。
- **`SetScale` 不会重算已有设计。** [WeaponDesign](../WeaponDesign) 在构造时就把偏移烤死了，必须重新 `new` 一个。
- **`CreateUsablePiece` 不校验入参。** 传 null `CraftingPiece` 会造出一个「一读就炸」的元素。
- **`GetCopy()` 是浅拷贝。** 复制出的元素与原件共享同一个 `CraftingPiece`；只有百分比是各自独立的。
- **`CraftingPiece` 属性无 setter。** 想换零件只能新造一个元素。
- **`IsValid == false` 不是异常状态。** 它表示槽位被故意留空，[WeaponDesign](../WeaponDesign) 的几何计算会把它写进 `float.NaN` 而不是崩掉。**遍历前先判 `IsValid`。**
- **`FullScale` 决定重量的缩放指数。** 从 [CraftingPiece](../CraftingPiece) 的 XML 读，未写 `full_scale` 属性时默认 `PieceType == Guard || PieceType == Pommel` 为 true。同一份 XML 改不改 `full_scale`，重量手感完全不同。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/WeaponDesignElement.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/WeaponDesignElement.cs` 逐行比对，**public 表面完全一致**：19 条 public 成员（`ScalePercentage` / `ScaleFactor` / `IsPieceScaled` / `CraftingPiece` / `IsValid` / `ScaledLength` / `ScaledWeight` / `ScaledCenterOfMass` / `ScaledDistanceToNextPiece` / `ScaledDistanceToPreviousPiece` / `ScaledBladeLength` / `ScaledPieceOffset` / `ScaledPreviousPieceOffset` / `ScaledNextPieceOffset` 十四个属性 + `SetScale` + `GetCopy` + `GetInvalidPieceForType` + `CreateUsablePiece`），`[SaveableField(10)]` / `[SaveableField(20)]` 编号也没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/WeaponDesignElement.cs`（179 行）与 `bannerlord-1.4.6/TaleWorlds.Core/WeaponDesignElement.cs`（251 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 22 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 零件定义：[CraftingPiece](../CraftingPiece) 是唯一被包住的类型，`BladeData` / `FullScale` / 全部几何字段都来自它
- 消费者：[WeaponDesign](../WeaponDesign) 按 `PieceTypes` 索引把本类排进数组并累加几何；[Crafting](../Crafting) 的 `SwitchToPiece` / `ScaleThePiece` / `GetRandomPieceOfType` / `SwitchToCraftedItem` 全程操作本类
- 槽位定义来源：`CraftingPiece.PieceTypes`（`Invalid = -1 / Blade / Guard / Handle / Pommel`）同时是 `CraftingTemplate.BuildOrders` 里的 `PieceData.PieceType`
- 桶首页：[core-extra API 分区](../)