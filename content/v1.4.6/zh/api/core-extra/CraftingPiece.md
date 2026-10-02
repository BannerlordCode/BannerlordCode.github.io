---
title: "CraftingPiece"
description: "单个锻造零件的 XML 定义对象：一块刀刃/护手/握柄/尾锤的 mesh、几何、重量、材料消耗与属性加成，全部由 crafting_pieces 的 XML 填入。"
---
# CraftingPiece

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class CraftingPiece : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/CraftingPiece.cs`

## 概述

它是锻造系统里**唯一一个纯粹的「数据表行」**——`sealed`、全部属性 `private set`、唯一的写入口是 `Deserialize`。四类零件（`Blade` / `Guard` / `Handle` / `Pommel`）共用同一个类，靠 `PieceType` 区分；[CraftingTemplate](../CraftingTemplate) 的 `Pieces` 列表装的就是它，[WeaponDesignElement](../WeaponDesignElement) 包的也是它。

几何字段分两套写法：给了 `<BuildData>` 就按 `PieceOffset` / `PreviousPieceOffset` / `NextPieceOffset` 三段偏移；没给就给 `length` 属性，此时 `DistanceToNextPiece = DistanceToPreviousPiece = Length / 2`。`Length` 本身始终是「两端距离之和」，`Inertia` 与 `CenterOfMass` 又都从 `Length` 与 `Weight` 派生——**所以改 `length` 会连带改惯量与质心，不是孤立字段**。

属性加成走 `<StatContributions>`（`ArmorBonus` / `HandlingBonus` / `SwingDamageBonus` / `SwingSpeedBonus` / `ThrustDamageBonus` / `ThrustSpeedBonus` / `AccuracyBonus`），材料消耗走 `<Materials>`（写进 `_materialsUsed` 与 `_materialCosts`），附加位标志走 `<Flags>`，刀刃数据走 `<BladeData>`，反向交叉引用走 `<CraftingTemplates>`。

## 心智模型

生命周期：`Deserialize` 一次填满 → 之后全程只读。所以用法是「按 id 取出来问数值」，或者「交给 [CraftingTemplate](../CraftingTemplate) / [WeaponDesignElement](../WeaponDesignElement) 消费」。

`IsValid` 是这里最重要的一个信号：**`Deserialize` 的第一行就是 `this.IsValid = true`**，所以任何成功加载的 XML 零件都是有效的；而 `new CraftingPiece()` 与 `GetInvalidCraftingPiece(...)` 造出来的都是 `IsValid = false`。消费者（[WeaponDesign](../WeaponDesign) 的几何循环、[Crafting](../Crafting) 的 `InitCraftedItemObject`）用 `IsValid` 判断「这个槽位是不是真的放了东西」。

**最坑的一条：`BladeData` 只在 XML 里有 `<BladeData>` 子节点时才被 new 出来。** `<BladeData>` 里会 `new BladeData(this.PieceType, this.Length)` 然后 `Deserialize`。非刀刃零件的 `BladeData` 是 null，**读它就是 `NullReferenceException`**——包括读 `WeaponDesignElement.ScaledBladeLength`（它转发到 `BladeData.BladeLength`）。

第二条：**`FullScale` 的默认值依赖 `PieceType`。** XML 里没写 `full_scale` 属性时，默认是 `PieceType == Guard || PieceType == Pommel`。这个布尔直接决定 [WeaponDesignElement](../WeaponDesignElement) 的 `ScaledWeight` 用线性还是三次方缩放——**不写这个属性，护手和尾锤的重量手感就和别的零件不一样。**

第三条：**`IsEmptyPiece` 几乎总是 true。** 它是 `_materialCosts.All<int>(cost => cost == 0)`，而 `_materialCosts` 被 `InitializeLists` 预填成 9 个 0，只有 `<Materials>` 才会把它改掉。而且 `_materialCosts[(int)craftingMaterials] = num2` 是在 `TryParse` 之外无条件写的（哪怕 `num2` 解析失败是 0），所以一个写错 `<Materials>` 的零件会「看起来没材料」。

第四条：**`Culture` 的判空读错了属性。** 源码是 `node.Attributes["mesh"] != null ? ReadObjectReferenceFromXml("culture", ...) : null`——判的是 `mesh` 而不是 `culture`。所以任何带 `mesh` 属性的零件都会去读 `culture`，没有则拿到 null。

第五条：**`All` 摸 `Game.Current`。** `Game.Current.ObjectManager.GetObjectTypeList<CraftingPiece>()` —— 在 `OnSubModuleLoad` 阶段调它会 NRE。

常见误用：`new CraftingPiece()` 之后当零件用（`IsValid == false`，`Name` 为 null）；对握柄/护手/尾锤读 `BladeData`；以为 `Length` 只是个独立字段。

## 关键成员

### 身份与几何

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `PieceType` | `public CraftingPiece.PieceTypes PieceType { get; private set; }` | 零件类别。由 XML `piece_type` 属性 `Enum.Parse`。**同时是 [CraftingTemplate](../CraftingTemplate).BuildOrders 与 [WeaponDesign](../WeaponDesign) 数组下标的依据。** |
| `Name` | `public TextObject Name { get; private set; }` | 显示名，`new TextObject(node.Attributes["name"].InnerText, null)`。**`new CraftingPiece()` 出来的是 null，不是空 `TextObject`。** |
| `IsValid` | `public bool IsValid { get; private set; }` | `Deserialize` 开头置 true。`new CraftingPiece()` 与 `GetInvalidCraftingPiece` 造的是 false。**消费者靠它区分「有零件」和「空槽」。** |
| `MeshName` | `public string MeshName { get; private set; }` | 渲染 mesh 名。 |
| `Length` | `public float Length { get; private set; }` | 由 `length` 属性 `0.01f *` 换算，或由 `DistanceToNextPiece + DistanceToPreviousPiece` 反推。**改它会连带改 `Inertia` 与 `CenterOfMass`。** |
| `DistanceToNextPiece` | `public float DistanceToNextPiece { get; private set; }` | 写 `length` 时 = `Length / 2`；写 `distance_to_next_piece` 时独立读入（单位 ×0.01）。 |
| `DistanceToPreviousPiece` | `public float DistanceToPreviousPiece { get; private set; }` | 同上，取 `previous` 那一侧。 |
| `PieceOffset` | `public float PieceOffset { get; private set; }` | 来自 `<BuildData>` 的 `piece_offset`。几何累加的核心输入。 |
| `PreviousPieceOffset` / `NextPieceOffset` | `public float PreviousPieceOffset { get; private set; }` / `NextPieceOffset` | 来自 `<BuildData>` 的 `previous_piece_offset` / `next_piece_offset`。 |
| `Weight` | `public float Weight { get; private set; }` | 写 `weight` 属性读入（单位 ×1，不是 ×0.01）。**`Inertia` 与 `ScaledWeight` 都从它派生。** |
| `Inertia` | `public float Inertia { get; private set; }` | `Deserialize` 里直接算：`0.083333336f * Weight * Length * Length`。**不是 XML 字段。** |
| `CenterOfMass` | `public float CenterOfMass { get; private set; }` | `Length * (center_of_mass 属性，默认 0.5f)`。 |
| `FullScale` | `public bool FullScale { get; private set; }` | 写 `full_scale="true"` 生效；**没写时默认 `PieceType == Guard || PieceType == Pommel`**。决定 [WeaponDesignElement](../WeaponDesignElement) 的 `ScaledWeight` 走线性还是三次方。 |
| `PieceTypes` | `public enum PieceTypes` | `Invalid = -1` / `Blade` / `Guard` / `Handle` / `Pommel` / `NumberOfPieceTypes`。**`Invalid` 是 -1，把它当中性下标会得到负下标。** |

### 外观与定位

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Appearance` | `public float Appearance { get; private set; }` | 外观分。XML 未写时 `0.5f`。 |
| `Culture` | `public BasicCultureObject Culture { get; private set; }` | 所属文化。**判空读的是 `mesh` 属性不是 `culture`**（源码原样），因此带 `mesh` 的零件一定会走读取分支，读不到就是 null。 |
| `ItemHolsterPosShift` | `public Vec3 ItemHolsterPosShift { get; private set; }` | 该零件对佩挂位置的额外偏移，按 `x,y,z` 三段解析。参与 [WeaponDesign](../WeaponDesign) 的 `HolsterShiftAmount`。 |

### 属性加成与经济

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ArmorBonus` / `HandlingBonus` / `SwingDamageBonus` / `SwingSpeedBonus` / `ThrustDamageBonus` / `ThrustSpeedBonus` / `AccuracyBonus` | `public int XxxBonus { get; private set; }` | 来自 `<StatContributions>`，七个整型加成，**属性名按 XML 命名写成下划线**（`armor_bonus` / `handling_bonus` / `swing_damage_bonus` …）。未写为 0。 |
| `MaterialsUsed` | `public MBReadOnlyList<ValueTuple<CraftingMaterials, int>> MaterialsUsed { get; }` | 来自 `<Materials>` 的 `(材料, 数量)` 列表。`TryParse` 数量 > 0 才进列表。 |
| `IsEmptyPiece` | `public bool IsEmptyPiece { get; }` | `_materialCosts.All<int>(cost => cost == 0)`。**没写 `<Materials>` 时必然为 true**（`InitializeLists` 预填 9 个 0）。 |
| `CraftingCost` | `public int CraftingCost { get; private set; }` | 锻造花费。XML 属性名是驼峰 `CraftingCost`，与其它属性名的下划线风格不一致。 |
| `RequiredSkillValue` | `public int RequiredSkillValue { get; private set; }` | 需要的技能等级，XML 属性 `required_skill_value`，未写为 0。 |
| `PieceTier` | `public int PieceTier { get; private set; }` | 品阶，XML 属性 `tier`，**未写时默认 1**。 |

### 标记与筛选

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `IsGivenByDefault` | `public bool IsGivenByDefault { get; private set; }` | XML 的 `is_default`。默认就送给玩家的零件。 |
| `IsHiddenOnDesigner` | `public bool IsHiddenOnDesigner { get; private set; }` | XML 的 `is_hidden`。**在锻造界面隐藏，但仍然是合法零件。** |
| `IsUnique` | `public bool IsUnique { get; private set; }` | XML 的 `is_unique`。 |
| `ItemUsageFeaturesToExclude` | `public string ItemUsageFeaturesToExclude { get; private set; }` | XML 的 `excluded_item_usage_features`，未写时是**空字符串不是 null**。 |
| `AdditionalWeaponFlags` | `public WeaponFlags AdditionalWeaponFlags;` | **公开字段**（非属性，`<Flags>` 里 `type` 为空或 `"WeaponFlags"` 的项）。`WeaponDesign` 构造时把部件的这些标志或起来。 |
| `AdditionalItemFlags` | `public ItemFlags AdditionalItemFlags;` | 公开字段，`<Flags>` 里 `type` 为其它值的项。 |
| `BladeData` | `public BladeData BladeData { get; private set; }` | 刀刃几何数据，**只在有 `<BladeData>` 子节点时非 null**。非刀刃零件读它 → NPE。 |

### 静态与工厂

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `All` | `public static MBReadOnlyList<CraftingPiece> All { get; }` | 全部已加载零件。内部 `Game.Current.ObjectManager.GetObjectTypeList<CraftingPiece>()`。**`Game.Current` 为 null 时 NRE**（与 [CraftingTemplate](../CraftingTemplate).All 用 `MBObjectManager.Instance` 不同）。 |
| `GetInvalidCraftingPiece` | `public static CraftingPiece GetInvalidCraftingPiece(CraftingPiece.PieceTypes pieceType)` | 返回（或懒建）一个 `IsValid = false`、名为 `"{=!}Invalid"` 的占位零件，按 `pieceType` 缓存在静态 `CraftingPiece[4]` 数组里。**[WeaponDesignElement](../WeaponDesignElement).GetInvalidPieceForType 走这里。** |
| `InitializeLists` | `private void InitializeLists()` | 构造器与 `[LoadInitializationCallback] OnLoad` 都调它：`new MBList<int>(9)` 并预填 9 个 0，再 `new MBList<ValueTuple<CraftingMaterials, int>>(0)`。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | **唯一写入口**。第一行 `this.IsValid = true`。处理根属性 + 六个子节点 `<StatContributions>` / `<BladeData>` / `<BuildData>` / `<Materials>` / `<Flags>` / `<CraftingTemplates>`。 |
| `OnLoad` | `[LoadInitializationCallback] private void OnLoad(MetaData metaData)` | 读档时重建 `_materialCosts` / `_materialsUsed`。 |

## 真实示例

按 id 取零件并核对它的几何与经济数据：

```csharp
CraftingPiece blade = MBObjectManager.Instance.GetObject<CraftingPiece>("pm_blade_1");
if (blade == null || !blade.IsValid)
{
    Debug.Print("piece not loaded", 0);
    return;
}

Debug.Print(blade.Name + " type=" + blade.PieceType + " tier=" + blade.PieceTier, 0);
Debug.Print("len=" + blade.Length + " weight=" + blade.Weight + " inertia=" + blade.Inertia, 0);
Debug.Print("cost=" + blade.CraftingCost + " skill=" + blade.RequiredSkillValue, 0);
```

检查材料消耗（没写 `<Materials>` 的零件必然是 `IsEmptyPiece`）：

```csharp
CraftingPiece piece = MBObjectManager.Instance.GetObject<CraftingPiece>("pm_blade_1");

Debug.Print("empty=" + piece.IsEmptyPiece, 0);
foreach (ValueTuple<CraftingMaterials, int> material in piece.MaterialsUsed)
{
    Debug.Print("needs " + material.Item2 + " x " + material.Item1, 0);
}
```

看缩放是否走三次方（由 `FullScale` 决定，不由类决定）：

```csharp
CraftingPiece guard = MBObjectManager.Instance.GetObject<CraftingPiece>("pm_guard_1");
CraftingPiece grip = MBObjectManager.Instance.GetObject<CraftingPiece>("pm_handle_1");

WeaponDesignElement guardAt50 = WeaponDesignElement.CreateUsablePiece(guard, 50);
WeaponDesignElement gripAt50 = WeaponDesignElement.CreateUsablePiece(grip, 50);

Debug.Print("guard fullScale=" + guard.FullScale + " w=" + guardAt50.ScaledWeight, 0);
Debug.Print("grip  fullScale=" + grip.FullScale + " w=" + gripAt50.ScaledWeight, 0);
```

只对刀刃零件读 `BladeData`：

```csharp
CraftingPiece piece = MBObjectManager.Instance.GetObject<CraftingPiece>("pm_blade_1");
if (piece.PieceType == CraftingPiece.PieceTypes.Blade && piece.BladeData != null)
{
    Debug.Print("bladeLength=" + piece.BladeData.BladeLength, 0);
}
```

枚举某个模板能用的零件并按 designer 可见性筛：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");

foreach (CraftingPiece piece in template.Pieces)
{
    bool visible = !piece.IsHiddenOnDesigner;
    bool inTemplate = template.IsPieceTypeUsable(piece.PieceType);
    Debug.Print(piece.StringId + " visible=" + visible + " usable=" + inTemplate, 0);
}
```

## 风险与边界

- **`sealed`，不能继承。**
- **`BladeData` 对非刀刃零件是 null。** 读它、以及任何转发到它的属性（含 [WeaponDesignElement](../WeaponDesignElement).ScaledBladeLength）都会 NPE。
- **全部属性 `private set`。** 运行期改不了，只有 XML 能改。`AdditionalWeaponFlags` / `AdditionalItemFlags` 是唯一的例外——它们是**公开字段**，外部可以直接 or/add。
- **`new CraftingPiece()` 的 `Name` 是 null、`IsValid` 是 false、`BladeData` 是 null。** 它不是可用的零件，只是个待填充的壳。
- **`All` 依赖 `Game.Current`。** 早期初始化阶段调它 NRE（[CraftingTemplate](../CraftingTemplate).All 用的是 `MBObjectManager.Instance`，没这个问题）。
- **`FullScale` 不写就有隐式默认**（`Guard` / `Pommel` 为 true），直接影响重量缩放曲线。**在 XML 里显式写 `full_scale` 才可控。**
- **`IsEmptyPiece` 几乎总为 true。** 只有写了 `<Materials>` 才可能为 false；写错材料 id 也会表现为 true。
- **`Length` 不是独立字段。** 改它会连带改 `Inertia` 与 `CenterOfMass`（都在 `Deserialize` 里由 `Length` 与 `Weight` 算出）。
- **`CraftingCost` 的 XML 属性名是驼峰**（`CraftingCost`），与其它下划线风格不一致，写 XML 时别写成 `crafting_cost`。
- **`Culture` 的判空属性读错。** 源码判的是 `mesh` 而不是 `culture`，所以这个分支实际总是走读取路径。
- **`ItemUsageFeaturesToExclude` 未写时是空字符串**，不是 null，可以直接 `string.IsNullOrEmpty` 判。
- **材料索引空间固定 9。** `_materialCosts` 被 `InitializeLists` 预填成 9 个 0，正好对应 `CraftingMaterials` 里 9 种真实材料（`IronOre` / `Iron1`…`Iron6` / `Wood` / `Charcoal`；第 10 个值 `NumCraftingMats` 是哨兵）。XML 里写出第 10 种材料会让 `_materialCosts[(int)craftingMaterials]` 越界。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/CraftingPiece.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/CraftingPiece.cs` 逐行比对，**public 表面完全一致**：42 条 public 成员（27 个数据属性 + `MaterialsUsed` / `IsEmptyPiece` + `All` + `GetInvalidCraftingPiece` + 两个公开字段 `AdditionalWeaponFlags` / `AdditionalItemFlags` + `Deserialize` + 两个构造器 + 嵌套 `PieceTypes` 枚举的 6 个值）。`bannerlord-1.4.5/` 本机只有 DLL、无 C# 源码，未能核对。

## 依赖关系

- 被包装：[WeaponDesignElement](../WeaponDesignElement) 把本类连同缩放百分比包成一个槽位；[WeaponDesign](../WeaponDesign) 遍历槽位累加几何
- 库存放在哪：[CraftingTemplate](../CraftingTemplate) 的 `Pieces` 列表；[Crafting](../Crafting) 的 `Init()` 按 `PieceType` 分桶成 `UsablePiecesList`
- 占位件来源：`GetInvalidCraftingPiece` 被 [WeaponDesignElement](../WeaponDesignElement).GetInvalidPieceForType 调用，用来给设计数组补洞
- 装载基类：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` 与 `Deserialize` 契约；[MBObjectManager](../../campaign-ext/MBObjectManager) 负责 id 寻址
- 依赖注入时机：`All` 走 [Game](../Game) 的 `Game.Current.ObjectManager`（与 [CraftingTemplate](../CraftingTemplate) 的 `MBObjectManager.Instance` 不同）
- 桶首页：[core-extra API 分区](../)