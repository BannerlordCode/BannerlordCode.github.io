---
title: "WeaponDesign"
description: "锻冶系统里一份可序列化的武器设计记录：保存选中的部件、各部件相对位置与总长，并一次性算好数值，随后交给 Crafting 实际锻造出 ItemObject。"
---
# WeaponDesign

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class WeaponDesign`  
**Base:** （无，直接派生自 `object`）  
**源文件路径:** `TaleWorlds.Core/WeaponDesign.cs`

## 一句话职责

它是一把「可锻造武器」的配方/设计图：记录玩家挑了哪些部件、每个部件摆在什么位置、整把武器多长，并在构造时一次性算好长度、握把偏移与挂点位移等数值；之后这份设计是只读的，锻造时由 `Crafting` 把它转成真正能拿在手里的 `ItemObject`。

## 概述

`WeaponDesign` 不是成形武器，也不是战斗对象——它是锻冶流程的**数据载体**。当玩家在铁匠铺拼好一把武器，或模组用 `Crafting` / `CraftingCampaignBehavior` 程序化生成武器时，代码先把「模板 + 选中的部件数组 + 名称」打包进一个 `WeaponDesign`，构造函数立刻计算：每个部件相对枢轴的偏移（`PiecePivotDistances`、`TopPivotOffsets`、`BottomPivotOffsets`）、刃/杆长度（`CraftedWeaponLength`）、握把到末端的长度（`HandToBottomLength`）、总长（`TotalLength`）以及挂点位移（`HolsterShiftAmount`）。这些数值之后再不会被重算——想改武器必须**重建**一个新的 `WeaponDesign`。

它同时是可序列化的：既是 `ItemObject.WeaponDesign` 的来源（存档时随物品一起写盘），也被 `CraftingCampaignBehavior` 的 `CraftedItemInitializationData` 持有，读档后由 `InitializePreCraftedWeaponOnLoad` 用保存的设计重建物品。

## 心智模型

把 `WeaponDesign` 想象成**「锻刀的图纸」**，不是刀本身，也不是战役里的英雄或物品对象：

- 它聚合了四类信息：① 模板 `Template`（决定有哪些部件槽位与装配顺序 `BuildOrders`）；② 被选中的部件 `UsedPieces`（按 `CraftingPiece.PieceTypes` 索引的数组，常见布局是 4 槽：0=刀刃/枪头、1=护手、2=握把、3=柄头）；③ 各部件的位置偏移与总长；④ 名称 `WeaponName` 与作为身份键的 `HashedCode`。
- 构造即定稿。`WeaponFlags` 在构造时由每个部件的 `CraftingPiece.AdditionalWeaponFlags` 按位或得到；`CraftedWeaponLength`、`HandToBottomLength`、`TotalLength`、`HolsterShiftAmount` 全部在 `new` 时算好，之后字段是 `readonly`、setter 是 `private`，外部只能读。
- 它是「上游设计」与「下游成品」之间的桥梁。真正把图纸变成武器的是 `Crafting.GenerateItem` → 内部的 `CraftedItemGenerationHelper`，它遍历 `UsedPieces`，用每个部件的 `ScaledWeight`、`ScaledLength`、`BladeData` 等算出 `WeaponComponentData` 并挂到 `ItemObject` 上。
- 没有 `WeaponDesign.Current` 这样的单例。通常你**不是自己 new 它**，而是从已锻造的 `ItemObject.WeaponDesign`、当前铁匠界面的 `Crafting.CurrentWeaponDesign`、或战役行为 `CraftingCampaignBehavior.CraftingHistory` 拿到它。仅在程序化生成武器（如锻造订单、自由锻造）时才主动构造。

## 如何获取 WeaponDesign

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

// 1) 从已锻造的物品读取（背包、装备槽、商队物品等）
ItemObject craftedItem = Hero.MainHero.BattleEquipment[EquipmentIndex.Weapon0].Item;
if (craftedItem.WeaponDesign != null)   // 等价于 craftedItem.IsCraftedWeapon
{
    WeaponDesign design = craftedItem.WeaponDesign;
}

// 2) 铁匠界面打开时，读取玩家正在拼的当前设计
WeaponDesign current = (GameStateManager.Current.ActiveState as CraftingState)?.CraftingLogic?.CurrentWeaponDesign;

// 3) 战役层：读取玩家最近锻造过的设计历史（最多 10 把）
ICraftingCampaignBehavior crafting = Campaign.Current.GetCampaignBehavior<ICraftingCampaignBehavior>();
foreach (WeaponDesign past in crafting.CraftingHistory)
{
    // past 是历史设计的副本
}
```

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Template` | `CraftingTemplate`（`readonly`） | 这份设计所用的锻造模板，决定部件槽位与装配顺序 `BuildOrders`。 |
| `WeaponFlags` | `WeaponFlags`（`readonly`） | 构造时由各部件的 `CraftingPiece.AdditionalWeaponFlags` 按位或得到。 |
| `UsedPieces` | `WeaponDesignElement[]` | 按 `PieceType` 索引的被选中部件数组（通常 4 槽），`null`/`Invalid` 槽位由 `WeaponDesignElement.GetInvalidPieceForType` 占位。 |
| `CraftedWeaponLength` | `float`（`readonly`） | 刃/杆方向的长度（不含握把到末端）。 |
| `HandToBottomLength` | `float` | 枢轴到握把末端的长度，构造时由 `CalculatePivotDistances` 赋值。 |
| `TotalLength` | `float` | 只读计算属性：`CraftedWeaponLength + HandToBottomLength`，即全长。 |
| `PiecePivotDistances` | `float[]` | 各部件相对枢轴的偏移，按 `PieceType` 索引；无效部件该槽位为 `float.NaN`。 |
| `TopPivotOffsets` | `List<float>` | 顶部部件累积偏移序列（可序列化）。 |
| `BottomPivotOffsets` | `List<float>` | 底部部件累积偏移序列（可序列化）。 |
| `BottomPivotOffset` | `float` | 只读：`BottomPivotOffsets` 最后一个元素，即最底端的偏移。 |
| `HolsterShiftAmount` | `Vec3`（`readonly`） | 挂点位置位移，构造时由模板与握把部件算出。 |
| `WeaponName` | `TextObject` | 武器名称；setter 为 `private`，改名用 `SetWeaponName`。 |
| `HashedCode` | `string` | 身份哈希串；构造时若传入 `customId` 则取它，否则为 `null`。`Equals`/`==` 以此为相等依据。 |

## 构造与关键方法

### 构造：把模板和部件打包成设计

#### `public WeaponDesign(CraftingTemplate template, TextObject weaponName, WeaponDesignElement[] usedPieces, string customId = null)`

唯一入口。传入模板、名称与按 `PieceType` 索引的部件数组；`customId` 一般传物品的 `StringId`，用于存档身份与相等比较。构造内部会立即算好所有长度与偏移，并把 `WeaponFlags` 聚合并（若给了 `customId`）写入 `HashedCode`。

```csharp
using TaleWorlds.Core;

CraftingTemplate template = CraftingTemplate.All[0];
BasicCultureObject culture = Hero.MainHero.Culture;
// Crafting.Init() 内部正是用 new WeaponDesign(...) 初始化 CurrentWeaponDesign
Crafting crafting = new Crafting(template, culture, new TextObject("我的长剑"));
crafting.Init();
WeaponDesign design = crafting.CurrentWeaponDesign;
int difficulty = Campaign.Current.Models.SmithingModel.CalculateWeaponDesignDifficulty(design);
```

**何时调用**：你几乎不直接 `new`，而是经 `Crafting.Init`、锻造订单系统或 `CraftingCampaignBehavior.CreateCraftedWeaponInFreeBuildMode` 间接构造。需要程序化给订单/自由锻造准备一份设计时，先准备好 `WeaponDesignElement[]`（可用 `WeaponDesignElement.CreateUsablePiece(piece)`），再交给上层行为。

### 相等与哈希（基于 HashedCode）

#### `public override bool Equals(object obj)`

基于 `HashedCode` 判断两把设计是否「同一把」。若双方 `HashedCode` 都为 `null`（都还没赋 `customId`），`Equals` 会返回 `true`——即未落盘的草稿设计之间会被当成相等。

#### `public override int GetHashCode()`

返回构造时经 `Common.GetDJB2(HashedCode)` 缓存的整型，配合 `Equals` 用于字典/集合。

#### `public static bool operator ==(WeaponDesign x, WeaponDesign y)` / `public static bool operator !=(WeaponDesign x, WeaponDesign y)`

直接复用 `Equals` 的 `HashedCode` 比较。用前确认设计已被赋予 `customId`，否则两个 `null` 哈希会误判为相等。

**何时调用**：用 `WeaponDesign` 作为字典键、或在锻造历史里去重/比对两份设计时。需要稳定身份前，先确保它来自已落盘的物品（`ItemObject.StringId` 即 `customId`）。

### 改名

#### `public void SetWeaponName(TextObject name)`

替换设计名称。`Crafting` 在 `ReIndex` 时会把 `CurrentWeaponDesign.WeaponName` 同步到物品名；战役层 `CraftingCampaignBehavior.SetCraftedWeaponName` 也走这条路径更新历史记录里的名称。不要直接给 `WeaponName` 字段赋值（setter 是 `private`，外部无法赋值，只能走此方法）。

**何时调用**：玩家在铁匠界面改了武器名字，或模组想在落盘前给程序化生成的武器命名。改名不会改变 `HashedCode`，因此不影响相等比较与存档身份。

## 依赖图

`WeaponDesign` 是锻冶数据链的中游：上游由模板与部件定义，下游被物品与锻造流程消费，难度由 `SmithingModel` 评估。

- 上游：[`CraftingTemplate`](../CraftingTemplate/) 决定部件槽位与装配顺序（`BuildOrders`）；[`CraftingPiece`](../CraftingPiece/) 是部件定义，[`WeaponDesignElement`](../WeaponDesignElement/) 是被选中部件在 `UsedPieces` 里的实例。
- 下游：[`ItemObject`](../ItemObject/) 通过 `WeaponDesign` / `IsCraftedWeapon` 持有并序列化这份设计；[`Crafting`](../Crafting/) 把它转成 `WeaponComponentData` 生成成品；[`CraftingCampaignBehavior`](../../campaign-ext/CraftingCampaignBehavior/) 维护锻造历史与订单，并负责读档重建。
- 评估与产出：[`SmithingModel`](../../campaign-ext/SmithingModel/)（`CalculateWeaponDesignDifficulty`）按设计算锻造难度；[`CraftingOrder`](../../campaign-ext/CraftingOrder/) 携带一份 `WeaponDesign` 作为订单目标。

## 风险与存档

1. **只读定稿、改则需重建**：`WeaponDesign` 构造后即定稿。直接改 `UsedPieces` 数组里的元素、或以为改了部件会重算长度，都是错觉——`CraftedWeaponLength`/`TotalLength` 不会变。`Crafting` 每次换部件/缩放（`SwitchToPiece`、`ScaleThePiece`、`Randomize`）都是 `new` 一个新的 `WeaponDesign`。程序化改武器请重建设计并重新走 `Crafting.GenerateItem` / `CreateCraftedWeaponInFreeBuildMode`，不要原地篡改。
2. **`HashedCode` 为空导致误相等**：未赋 `customId` 的草稿设计 `HashedCode` 为 `null`，此时 `Equals`/`==` 会把两个不同草稿当成相等，且 `GetHashCode` 返回 0。只在设计已落盘（有 `ItemObject.StringId`）或明确需要稳定身份后再做相等比较。
3. **`NaN` 与空偏移**：`CalculatePivotDistances` 对无效部件把对应 `PiecePivotDistances` 槽位写成 `float.NaN`；`BottomPivotOffset` 取 `BottomPivotOffsets[Count-1]`，若偏移列表为空会越界。用 `WeaponDesignElement.IsValid` 过滤 `UsedPieces`，不要把长度/偏移直接喂给物理或 UI 而不做 `float.IsNaN` 检查。
4. **跨存读档要靠物品，而非引用**：`WeaponDesign` 随 `ItemObject` 序列化；读档后 [`CraftingCampaignBehavior`](../../campaign-ext/CraftingCampaignBehavior/) 用保存的设计重建物品。`SyncData` 还会校验每个部件 `StringId` 是否仍存在于模板中，引用了已被内容/Mod 移除的部件时，该物品会被丢弃。跨场景/读档后请从 `ItemObject.WeaponDesign` 重新获取，不要缓存旧引用。详见 [崩溃与存档边界](../../../architecture/crash-boundaries/) 与 [存档系统](../../../architecture/save-system/)。

## 最小真实示例

### 示例 1：读取玩家主手武器的设计并遍历部件

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject craftedItem = Hero.MainHero.BattleEquipment[EquipmentIndex.Weapon0].Item;
if (craftedItem.WeaponDesign != null) // 等价于 craftedItem.IsCraftedWeapon
{
    WeaponDesign design = craftedItem.WeaponDesign;
    TextObject name = design.WeaponName;
    float reach = design.TotalLength;     // 全长 = 刃长 + 握把到末端
    WeaponFlags flags = design.WeaponFlags;
    foreach (WeaponDesignElement piece in design.UsedPieces)
    {
        if (piece.IsValid)
        {
            CraftingPiece cp = piece.CraftingPiece; // 实际部件定义
            float weight = piece.ScaledWeight;      // 按缩放后的重量
        }
    }
}
```

### 示例 2：从战役行为读取锻造历史并计算难度

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.Core;

ICraftingCampaignBehavior crafting = Campaign.Current.GetCampaignBehavior<ICraftingCampaignBehavior>();
foreach (WeaponDesign pastDesign in crafting.CraftingHistory)
{
    int difficulty = ((CraftingCampaignBehavior)crafting).GetCraftingDifficulty(pastDesign);
    // 等价于 Campaign.Current.Models.SmithingModel.CalculateWeaponDesignDifficulty(pastDesign);
}
```

### 示例 3：用 Crafting 初始化一份设计并评估其锻造难度

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

CraftingTemplate template = CraftingTemplate.All[0];
BasicCultureObject culture = Hero.MainHero.Culture;
Crafting crafting = new Crafting(template, culture, new TextObject("我的长剑"));
crafting.Init();                                   // 内部 new WeaponDesign(...) 并赋给 CurrentWeaponDesign
WeaponDesign design = crafting.CurrentWeaponDesign;
int difficulty = Campaign.Current.Models.SmithingModel.CalculateWeaponDesignDifficulty(design);
```

## 跨版本提示

- 本页 API 以 `bannerlord-1.4.5` 源码为准（v1.3.15 子树的本地源码缺失，文档表面与之保持一致）。`WeaponDesign` 的公开成员、构造签名与 `HashedCode` 相等语义在 1.3.x→1.4.5 之间未变。
- 1.4.5 中构造函数、`TotalLength`、`UsedPieces`、`PiecePivotDistances` 与 `Crafting.GenerateItem` 的消费路径均已确认；跨版本 Mod 应依赖公开的 `WeaponDesign` / `Crafting` / `ItemObject.WeaponDesign` API，不要依赖反编译文件里的私有字段（如 `_usedPieces`、`_piecePivotDistances`）。

## 导航

- [↑ Core-Extra 模块索引](../)
- [↔ Crafting](../Crafting/) · [CraftingTemplate](../CraftingTemplate/) · [WeaponDesignElement](../WeaponDesignElement/) · [CraftingPiece](../CraftingPiece/)
- [↔ ItemObject](../ItemObject/) — 持有并序列化 `WeaponDesign` 的成品
- [↓ CraftingCampaignBehavior](../../campaign-ext/CraftingCampaignBehavior/) · [SmithingModel](../../campaign-ext/SmithingModel/)
