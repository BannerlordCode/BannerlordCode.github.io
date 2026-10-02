---
title: "WeaponDesign"
description: "一件合成武器的最终设计快照：构造时一次性算出部件轴心偏移、武器长度、武器位标志与佩挂偏移，之后所有字段只读。"
---
# WeaponDesign

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponDesign`
**Base:** `System.Object`
**File:** `TaleWorlds.Core/WeaponDesign.cs`

## 概述

它是「锻造结果」的值对象，不是流程对象。构造器一次就把几何全部算完并冻结：`CalculatePivotDistances()` 顺 [CraftingTemplate](../CraftingTemplate) 的 `BuildOrders` 逐部件累加正负两侧的轴心偏移，写进 `_piecePivotDistances` / `TopPivotOffsets` / `BottomPivotOffsets`；`CalculateWeaponLength()` 给出 `CraftedWeaponLength`；`CalculateHolsterShiftAmount()` 给出 `HolsterShiftAmount`；最后把所有部件的 `CraftingPiece.AdditionalWeaponFlags` 或进 `WeaponFlags`。**构造完成后没有重新计算的入口**——想改几何只能造一个新的 `WeaponDesign`。

它同时是存档对象：`WeaponName` / `HandToBottomLength` 挂 `[SaveableProperty]`，`WeaponFlags` / `_usedPieces` / `_piecePivotDistances` / `CraftedWeaponLength` / `Template` / `TopPivotOffsets` / `BottomPivotOffsets` / `HolsterShiftAmount` 挂 `[SaveableField]`。读档路径由 [Crafting](../Crafting) 的 `InitializePreCraftedWeaponOnLoad` 接管。

相等性只看 `HashedCode` 一个字符串，不看部件数组。

## 心智模型

典型调用顺序永远是「先造部件元素，再造设计」：

1. 按 `CraftingPiece.PieceTypes`（`Blade=0 / Guard=1 / Handle=2 / Pommel=3`）摆满一个长度 ≥ 3 的 `WeaponDesignElement[]`；
2. `new WeaponDesign(template, name, pieces, customId)` 一次性算出全部几何；
3. 把结果交给 [Crafting](../Crafting) 去生成 `ItemObject`。

第 3 步之后这个对象就是只读的快照——想「改一把刀」不是改它的字段，而是造一个新的再重新生成。

**最坑的一条：`HashedCode` 是构造参数 `customId`，不给就是 `null`，而 `Equals` 只比这个字段。** 于是**所有没传 `customId` 造出来的设计两两 `Equals` 为 true、`GetHashCode()` 全部为 0**（`_cachedHashedCodeInt` 是 `[CachedData]`，只有 `HashedCode` 的 setter 被走过才会赋值）。把它们塞进 `Dictionary` / `HashSet` 会互相覆盖。[Crafting](../Crafting) 里 `GenerateItem(..., customId)` 与 `InitializePreCraftedWeaponOnLoad` 都会显式传 id，正是为了避开这个坑；手写代码若省掉就等着丢数据。

第二条：**数组下标 0 / 1 / 2 是硬编码的。** `CalculateWeaponLength()` 读 `_piecePivotDistances[0]` 与 `_usedPieces[0].ScaledDistanceToNextPiece`；`CalculateHolsterShiftAmount()` 读 `UsedPieces[2].CraftingPiece.ItemHolsterPosShift`。所以数组长度必须 ≥ 3，否则构造时抛 `IndexOutOfRangeException`；第 2 槽（`Handle`）为 null 则是 `NullReferenceException`。**空槽要用 `WeaponDesignElement.GetInvalidPieceForType(...)` 填，不要留 null**——[Crafting](../Crafting) 的 `CreatePreCraftedWeaponOnDeserialize` 就是这么补洞的。

第三条：**空槽位会让整个几何塌成 null 列表。** `CalculatePivotDistances` 遇到 `!weaponDesignElement.IsValid` 就只把 `_piecePivotDistances[i]` 写成 `float.NaN` 并 `continue`，**不调 `AddTopPivotOffset` / `AddBottomPivotOffset`**。若 4 个槽全是无效件，两个 offset 列表从头到尾没被初始化，随后读 `BottomPivotOffset` 就是 `NullReferenceException`。

第四条：`CalculatePivotDistances` 遍历的是 `Template.BuildOrders`，并用 `UsedPieces[(int)pieceData.PieceType]` 反查。**数组长度必须覆盖模板声明的每一个 `PieceType`**，否则构造时越界。`Template` 为 null 直接 NRE。

常见误用：以为 `UsedPieces` / `PiecePivotDistances` 返回副本（返回的是内部数组引用，改它等于改设计且不重算几何）；忘了传 `customId`；把 `TopPivotOffsets` / `BottomPivotOffsets` 当只读（它们是**公开可写字段**）。

## 关键成员

### 构造与只读几何

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public WeaponDesign(CraftingTemplate template, TextObject weaponName, WeaponDesignElement[] usedPieces, string customId = null)` | 唯一构造器。内部固定顺序：`Template = template` → `_usedPieces = usedPieces.ToArray<WeaponDesignElement>()`（**拷贝一份**）→ `_piecePivotDistances = new float[usedPieces.Length]` → `CalculatePivotDistances()` → `CraftedWeaponLength = CalculateWeaponLength()` → `HolsterShiftAmount = CalculateHolsterShiftAmount()` → 逐件 `WeaponFlags \|= piece.CraftingPiece.AdditionalWeaponFlags` → 最后才在 `customId` 非空时写 `HashedCode`。**数组长度 ≥ 3 且第 0/2 槽非 null，否则构造抛异常。** |
| `UsedPieces` | `public WeaponDesignElement[] UsedPieces { get; }` | 返回 `_usedPieces` **本身**，不是副本。外部改数组等于改设计的部件表，且**不会触发任何重算**（长度、偏移全部停留在旧值）。 |
| `PiecePivotDistances` | `public float[] PiecePivotDistances { get; }` | 返回 `_piecePivotDistances` 本身。每项对应 `BuildOrders` 里的一个 `PieceType` 位置；该位置上的部件无效时为 `float.NaN`。同样无防御性拷贝。 |
| `TotalLength` | `public float TotalLength { get; }` | `CraftedWeaponLength + HandToBottomLength`。纯计算，无副作用。 |
| `HandToBottomLength` | `public float HandToBottomLength { get; private set; }` | 手到「下端轴心」的距离。由 `CalculatePivotDistances()` 末尾的 `num` 写入，`[SaveableProperty(50)]`。 |
| `BottomPivotOffset` | `public float BottomPivotOffset { get; }` | `BottomPivotOffsets[BottomPivotOffsets.Count - 1]`。**`BottomPivotOffsets` 为 null（全无效件）时 NRE。** |
| `Template` | `public readonly CraftingTemplate Template;` | 公开只读**字段**（不是属性），`[SaveableField(70)]`。`CalculatePivotDistances` 靠它拿 `BuildOrders`。 |
| `CraftedWeaponLength` | `public readonly float CraftedWeaponLength;` | 公开只读字段，`[SaveableField(60)]`。取「柄到下一件的距离」与「所有有效件里最远的 `DistanceToNextPiece + PieceOffset`」两者的较大值。 |
| `HolsterShiftAmount` | `public readonly Vec3 HolsterShiftAmount;` | 公开只读字段，`[SaveableField(100)]`。`(Template.ItemHolsterPositionShift + UsedPieces[2].CraftingPiece.ItemHolsterPosShift) * UsedPieces[2].ScaleFactor`，若 `UsedPieces[1] != null` 再加上 `Vec3.Up * UsedPieces[1].ScaledLength`。**硬索引 1 和 2。** |
| `WeaponFlags` | `public readonly WeaponFlags WeaponFlags;` | 公开只读字段，`[SaveableField(10)]`。构造时把所有部件的 `AdditionalWeaponFlags` 按位或起来。 |
| `TopPivotOffsets` / `BottomPivotOffsets` | `public List<float> TopPivotOffsets;` / `public List<float> BottomPivotOffsets;` | **公开可写字段**（`[SaveableField(80)]` / `[SaveableField(90)]`），只有 `AddTopPivotOffset` / `AddBottomPivotOffset` 私有方法在构造期往里写。外部可直接 mutate，改了没人重算。 |

### 标识与相等性

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `HashedCode` | `public string HashedCode { get; private set; }` | 设计标识。**setter 里额外做 `Common.GetDJB2` 并缓存进 `_cachedHashedCodeInt`。** 外部只能通过构造参数 `customId` 写一次。 |
| `WeaponName` | `public TextObject WeaponName { get; private set; }` | 显示名，`[SaveableProperty(21)]`。 |
| `Equals` | `public override bool Equals(object obj)` | 只比 `HashedCode`：`obj as WeaponDesign` 非 null 且两者 `HashedCode` 相等。**不看部件、不看 Template、不看长度。** |
| `GetHashCode` | `public override int GetHashCode()` | 直接返回 `_cachedHashedCodeInt`（`[CachedData]`）。**没走过 `HashedCode` setter 的实例恒为 0。** |
| `operator ==` / `operator !=` | `public static bool operator ==(WeaponDesign x, WeaponDesign y)` / `operator !=` | `==` 走 `x.Equals(y)`（两边都 null 才算相等）；`!=` 是 `!(x == y)`。与 `Equals` 语义一致，无第三条路径。 |
| `SetWeaponName` | `public void SetWeaponName(TextObject name)` | 唯一运行期可写的状态。只改显示名，**不动几何**。 |

## 真实示例

最小可用：摆 4 个槽（无效槽用 `GetInvalidPieceForType` 补）再构造设计：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");

WeaponDesignElement[] pieces = new WeaponDesignElement[4];
pieces[(int)CraftingPiece.PieceTypes.Blade] = WeaponDesignElement.CreateUsablePiece(bladePiece);
pieces[(int)CraftingPiece.PieceTypes.Handle] = WeaponDesignElement.GetInvalidPieceForType(CraftingPiece.PieceTypes.Handle);
pieces[(int)CraftingPiece.PieceTypes.Guard] = WeaponDesignElement.GetInvalidPieceForType(CraftingPiece.PieceTypes.Guard);
pieces[(int)CraftingPiece.PieceTypes.Pommel] = WeaponDesignElement.GetInvalidPieceForType(CraftingPiece.PieceTypes.Pommel);

// customId 必须给：否则 HashedCode 为 null，与其它无 id 设计互相 Equals 为 true
WeaponDesign design = new WeaponDesign(
    template,
    new TextObject("{=MyBlade}Modded Blade"),
    pieces,
    "my_mod_blade_v1");

Debug.Print("length=" + design.TotalLength + " flags=" + design.WeaponFlags, 0);
Debug.Print("bottomPivot=" + design.BottomPivotOffset, 0);
```

放进 [Crafting](../Crafting) 走完整生成路径：

```csharp
CraftingTemplate template = CraftingTemplate.GetTemplateFromId("template_two_handed_sword");
Crafting crafting = new Crafting(template, culture, new TextObject("{=MyBlade}Modded Blade"));
crafting.Init();

WeaponDesignElement blade = crafting.GetRandomPieceOfType(CraftingPiece.PieceTypes.Blade, true);
crafting.SwitchToPiece(blade);
crafting.ReIndex();

ItemObject crafted = null;
Crafting.GenerateItem(
    crafting.CurrentWeaponDesign,
    crafting.CraftedWeaponName,
    culture,
    itemModifierGroup,
    ref crafted,
    "my_mod_blade_v1");

if (crafted != null && crafted.IsCraftedWeapon)
{
    Debug.Print("crafted: " + crafted.StringId + " len=" + crafted.PrimaryWeapon.Length, 0);
}
```

把设计当字典键时确认 hash 真的区分开了：

```csharp
WeaponDesign design = new WeaponDesign(template, name, pieces, "design_a");
WeaponDesign sameAsA = new WeaponDesign(template, name, pieces, "design_a");
WeaponDesign noIdOne = new WeaponDesign(template, name, pieces);

Debug.Print("a==a2 : " + design.Equals(sameAsA), 0);      // True
Debug.Print("a==noId: " + design.Equals(noIdOne), 0);      // False
Debug.Print("noId hash: " + noIdOne.GetHashCode(), 0);     // 0，与其它无 id 设计撞码
```

改显示名（几何不动）：

```csharp
WeaponDesign design = new WeaponDesign(template, name, pieces, "design_a");
float lengthBefore = design.TotalLength;
design.SetWeaponName(new TextObject("{=Renamed}Renamed Sword"));
Debug.Print("len unchanged: " + (lengthBefore == design.TotalLength), 0);
```

## 风险与边界

- **`HashedCode` 默认 null 是最大陷阱。** 不传 `customId` 的设计全部互相相等、hash 恒为 0。当 `Dictionary` / `HashSet` 的键会静默丢数据。
- **`Equals` 只看 `HashedCode`。** 两个 id 相同但部件完全不同的设计会被判为相等。**不要拿它做逻辑校验**，只做缓存键。
- **构造期硬编码下标 0 与 2。** 数组长度 < 3 → `IndexOutOfRangeException`；`UsedPieces[2] == null` → `NullReferenceException`；`UsedPieces[1] == null` 是允许的（那一项被跳过）。
- **`UsedPieces[0]` 必须非 null。** `CalculateWeaponLength` 直接读 `_usedPieces[0].ScaledDistanceToNextPiece`。
- **全无效件会让 `TopPivotOffsets` / `BottomPivotOffsets` 保持 null。** 此时读 `BottomPivotOffset` 是 NRE。`PiecePivotDistances` 会是全 `NaN` 数组。
- **`Template.BuildOrders` 里的 `PieceType` 必须被数组覆盖。** 模板声明了第 4 类部件而数组只有 4 项但索引越界（`PieceTypes` 最大到 `Pommel = 3`，实际不会越界；**但 `Template` 为 null 会**）——优先防 `Template` 空。
- **`UsedPieces` / `PiecePivotDistances` 无防御性拷贝。** 拿到数组改了之后所有几何属性仍是旧值，且没有 API 能重算。
- **`TopPivotOffsets` / `BottomPivotOffsets` 是公开可写字段。** 没有校验，误写会直接破坏渲染用的轴心数据。
- **`SetWeaponName` 只改名。** 不会让已生成的 `ItemObject` 跟着变——那是 [Crafting](../Crafting) 的 `ReIndex` + `SetItemObject` 的活。
- **没有反序列化构造函数。** 它靠存档系统的 `AutoGeneratedInstanceCollectObjects` / `AutoGeneratedGetMemberValue*` 私有管道恢复，**这些是 `internal` / `protected`，外部程序集调不到**。想在存档外手工重建只能重新走构造器。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/WeaponDesign.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/WeaponDesign.cs` 逐行比对，**public 表面完全一致**：20 条 public 成员（`WeaponName` / `UsedPieces` / `PiecePivotDistances` / `TotalLength` / `HandToBottomLength` / `HashedCode` / `BottomPivotOffset` 七个属性 + `WeaponFlags` / `CraftedWeaponLength` / `Template` / `TopPivotOffsets` / `BottomPivotOffsets` / `HolsterShiftAmount` 六个公开字段 + 构造器 + `Equals` / `GetHashCode` / `SetWeaponName` / `operator ==` / `operator !=`），`[SaveableProperty]` 编号（21 / 50）与 `[SaveableField]` 编号（10/30/40/60/70/80/90/100）也没变。`bannerlord-1.4.5/` 本机只有 DLL、无 C# 源码，未能核对。

## 依赖关系

- 模板：[CraftingTemplate](../CraftingTemplate) 提供 `BuildOrders`（装配顺序）与 `ItemHolsterPositionShift`，缺它构造直接 NRE
- 部件：[WeaponDesignElement](../WeaponDesignElement) 是数组元素类型；部件定义本体在 [CraftingPiece](../CraftingPiece)，`WeaponFlags` 就是从它的 `AdditionalWeaponFlags` 累积来的
- 消费方：[Crafting](../Crafting) 的 `GenerateItem` / `InitializePreCraftedWeaponOnLoad` 消费本类，[ItemObject](../ItemObject) 的 `WeaponDesign` 属性持有它
- 存档：[Game](../Game) 所在的存档系统按 `[SaveableField]` / `[SaveableProperty]` 编号读写
- 桶首页：[core-extra API 分区](../)