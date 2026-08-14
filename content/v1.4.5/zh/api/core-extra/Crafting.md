---
title: "Crafting"
description: "武器锻造/制造逻辑类：把锻造部件（CraftingPiece）按模板（CraftingTemplate）拼成 WeaponDesign，算出伤害、速度、重量等数值，并提供游戏内锻造界面的换件、缩放、撤销与成品生成流程。"
---
# Crafting

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Crafting`
**Base:** 无（直接继承 `System.Object`）
**源文件路径:** `TaleWorlds.Core/TaleWorlds.Core/Crafting.cs`

## 一句话职责

它把一个锻造模板、一份文化、一组已选部件和一个名称绑成一次**“在铁匠铺里锻一把武器”**的会话：负责换件、缩放、随机化、撤销/重做，并把 `WeaponDesign` 计算成最终可用的 `ItemObject`（含伤害、速度、惯性、平衡等数值），是锻造 UI 与存档反序列化之间那层纯逻辑。

## 心智模型

把 `Crafting` 当成 **UI/存档层的“一次性锻造会话”**，不是全局单例，也不是战役服务：

- 它不是 `Campaign` 持有的常驻对象。每次打开锻造界面，引擎都会 `new Crafting(template, culture, name)` 然后 `Init()` + `ReIndex()` 生成一个新实例（见 `Helpers.CraftingHelper.OpenCrafting`）。
- 这个实例被交给 `CraftingState.CraftingLogic`，由 UI 状态机持有并驱动。它在退出锻造场景后不会再被复用，所以不要把它缓存到战役对象里。
- `Crafting` 只负责**计算与生成**：把 `WeaponDesign`（由 `WeaponDesignElement` 数组组成）算成 `WeaponComponentData` 并填进 `ItemObject`。它**不**扣材料、**不**扣体力、**不**记研究点——这些是 `CraftingCampaignBehavior` 通过 `SmithingModel` 在真正“下锻”时做的（见 `CreateCraftedWeaponInternal` 里的 `SpendMaterials`）。
- `RefiningFormula` 是 `Crafting` 的公开嵌套类，描述一次精炼的投入与产出，`SmithingModel.GetRefiningFormulas` 会返回某铁匠可用的公式列表。
- 真正把武器交到玩家背包、发布 `OnNewItemCrafted`、扣材料的流程在战役行为 `CraftingCampaignBehavior`；直接调 `Crafting.GenerateItem` 只生成物品，不会走那套经济与事件逻辑。

## 如何获取 Crafting 实例

```csharp
// 1) 由引擎在铁匠对话里打开锻造界面（Helpers.CraftingHelper.OpenCrafting 内部就是 new + Init + ReIndex）
CraftingHelper.OpenCrafting(CraftingTemplate.All[0]);

// 2) 在已打开的界面里读取当前会话实例
CraftingState state = Game.Current.GameStateManager.ActiveState as CraftingState;
if (state != null)
{
    Crafting crafting = state.CraftingLogic;
}

// 3) 脱离 UI 时自己构造并初始化（与 CraftingHelper 内部一致）
Crafting crafting = new Crafting(CraftingTemplate.All[0], Settlement.CurrentSettlement.Culture, new TextObject("{=!}My Blade"));
crafting.Init();
crafting.ReIndex();
```

`Crafting` 没有静态单例入口；你拿到的要么是 `CraftingState.CraftingLogic`，要么是自己 `new` 出来的。静态方法 `Crafting.GenerateItem` / `Crafting.GetStatDatasFromTemplate` 不需要实例，可以直接调用。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `CurrentCulture` | `BasicCultureObject` | 本次会话所用文化，影响外观与本地化。构造时传入，只读。 |
| `CurrentCraftingTemplate` | `CraftingTemplate` | 当前武器模板（决定可用部件类型与统计口径）。只读。 |
| `CurrentWeaponDesign` | `WeaponDesign` | 当前选中的武器设计（4 个 `WeaponDesignElement`）。`private set`，由换件/缩放/随机化改写。 |
| `CurrentItemModifierGroup` | `ItemModifierGroup` | 当前附加的武器修饰组（可为 `null`）。`private set`。 |
| `CraftedWeaponName` | `TextObject` | 当前武器名称。改名走 `SetCraftedWeaponName`。 |
| `UsablePiecesList` | `List<WeaponDesignElement>[]` | 按部件类型分组的可用部件清单（长度 4），`Init()` 时填充。 |
| `SelectedPieces` | `WeaponDesignElement[]` | 当前已选部件，等价于 `CurrentWeaponDesign.UsedPieces`。 |

常量（`public const int`）：`WeightOfCrudeIron=1`、`WeightOfIron=2`、`WeightOfCompositeIron=3`、`WeightOfSteel=4`、`WeightOfRefinedSteel=5`、`WeightOfCalradianSteel=6`，对应不同材料的重量，用于 UI/平衡展示。

## 主要方法

### 构造与初始化

#### `public Crafting(CraftingTemplate craftingTemplate, BasicCultureObject culture, TextObject name)`
构造一次锻造会话。仅记录模板、文化、名称，不会填充可用部件；必须随后调用 `Init()`。

#### `public void Init()`
根据 `CurrentCraftingTemplate` 的部件集合构建 `UsablePiecesList`，并用每个类型第一个非隐藏件生成初始 `CurrentWeaponDesign`，推入历史。在 `OpenCrafting` 与自建实例时都要调用一次。

#### `public void ReIndex(bool enforceReCreation = false)`
把当前设计同步到内部 `_craftedItemObject`（调用 `SetItemObject`），并在名称变化时同步 `CraftedWeaponName`。每次换件、缩放、随机化后都自动调用；`enforceReCreation: true` 会重建 `WeaponDesign` 实例。

#### `public void UpdateHistory()`
把当前设计作为新一步写入撤销历史，并丢弃 `Redo` 链。UI 在“确认一次改动”时调用；之后 `Undo`/`Redo` 可来回切换。

#### `public bool Undo()` / `public bool Redo()`
在 `_history` 中后退 / 前进一步并 `ReIndex()`；已到边界时返回 `false`。历史由 `CraftingCampaignBehavior` 限制为最多 10 步（`MaxCraftingHistoryDesigns`）。

```csharp
CraftingState state = Game.Current.GameStateManager.ActiveState as CraftingState;
if (state != null)
{
    Crafting crafting = state.CraftingLogic;
    if (crafting.Undo())
    {
        // 设计已退回上一步，UI 刷新
    }
}
```

### 设计操作：换件、缩放、随机

#### `public void SwitchToPiece(WeaponDesignElement piece)`
把 `piece` 所属类型替换成该件（缩放复位为 100），其余类型沿用当前选择，然后 `ReIndex()`。这是 UI 点选某个部件时的入口。

#### `public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)`
仅当该部件 `IsPieceScaled` 时修改其缩放百分比（如 90–110），重算设计。非可缩放部件会被跳过。

#### `public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)`
从 `UsablePiecesList` 随机取一件；`randomScale: true` 时缩放取 90–110 之间的随机值。用于随机化与 AI 生成。

#### `public void Randomize()`
对 4 个类型各取一个随机件（带随机缩放）重建设计。UI 的“随机”按钮调用。

#### `public void SwitchToCraftedItem(ItemObject item)`
把已有成品 `item` 的 `WeaponDesign` 拷回当前会话（用于“照着一把已有的武器改”）。要求 `item.WeaponDesign` 有效。

#### `public void SetCraftedWeaponName(TextObject weaponName)`
改名并同步到内部 `_craftedItemObject`。注意：战役侧保存武器名用的是 `CraftingCampaignBehavior.SetCraftedWeaponName`（写 `_craftedItemDictionary`），不是这里。

#### `public TextObject GetRandomCraftName()`
返回占位名 `{=!}RANDOM_NAME`，UI 用来标记“让玩家稍后命名”。

```csharp
Crafting crafting = (Game.Current.GameStateManager.ActiveState as CraftingState)?.CraftingLogic;
if (crafting != null)
{
    WeaponDesignElement blade = crafting.GetRandomPieceOfType(CraftingPiece.PieceTypes.Blade, randomScale: true);
    crafting.SwitchToPiece(blade);
    crafting.UpdateHistory(); // 确认这一步，进入撤销历史
}
```

### 生成与读取成品

#### `public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)`
返回当前会话对应的 `ItemObject`。`forceReCreate: true` 会重新 `SetItemObject`（引擎真正“下锻”时用它拿新物品，`CraftingCampaignBehavior.CreateCraftedWeaponInternal` 即如此）。`customId` 用作 `ItemObject.StringId`。

#### `public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)`
**核心生成函数（静态、无实例）**：把一份 `WeaponDesign` 算成最终的 `ItemObject`——填入主/副武器数据、重量、外观，并调用内部的 `GenerateCraftedItem`。`itemObject` 为 `null` 时会 `new ItemObject()`；`customId` 为空则用模板 `StringId`。生成后若 `IsCraftedByPlayer` 会置 `IsReady`，并 `DetermineValue` / `DetermineItemCategoryForItem`。

> 这是**低层生成**：它不扣材料、不扣体力、不发事件。想完整复刻“玩家在铁匠铺锻造”请用 `CraftingCampaignBehavior` 的创建流程（它内部仍会调到这里，但额外走 `SmithingModel` 经济逻辑）。

#### `public static ItemObject GenerateCraftedItem(ItemObject item, WeaponDesign weaponDesign, ItemModifierGroup itemModifierGroup)`
遍历 `weaponDesign` 的每种 `WeaponDescription`，校验部件合法性，用内部的 `CraftingStats.FillWeapon` 计算数值并 `item.AddWeapon`。任一部件失效返回 `null`。`GenerateItem` 内部调用它。

#### `public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement[] usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)`
存档反序列化时为一件预锻武器重建 `Crafting` 会话并生成 `ItemObject`。`usedPieces` 中 `null` 会被替换成对应类型的无效件。

#### `public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)`
载入存档时，用已存的 `WeaponDesign` 重建会话并生成成品。`CraftingCampaignBehavior.InitializeCraftedItemData` 用它把 `_craftedItemDictionary` 恢复成可读的 `ItemObject`。

```csharp
// 用现有模板与可用部件构造一把武器设计，离线生成 ItemObject（不扣材料）
CraftingTemplate template = CraftingTemplate.All[0];
WeaponDesignElement[] pieces = new WeaponDesignElement[4];
foreach (CraftingPiece piece in template.Pieces)
{
    if (!piece.IsHiddenOnDesigner)
    {
        pieces[(int)piece.PieceType] = WeaponDesignElement.CreateUsablePiece(piece);
    }
}
WeaponDesign design = new WeaponDesign(template, new TextObject("{=!}Forged Sword"), pieces, "my_forged_sword_01");
ItemObject item = new ItemObject();
Crafting.GenerateItem(design, design.WeaponName, Settlement.CurrentSettlement.Culture, null, ref item, "my_forged_sword_01");
if (item != null)
{
    PartyBase.MainParty.ItemRoster.AddToCounts(item, 1);
}
```

### 统计数值与序列化

#### `public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)`
返回当前成品在 `usageIndex` 用法下的统计（`Weight`、`WeaponReach`、`SwingSpeed`、`Handling`、`SwingDamage` 等）。UI 用它在锻造界面展示各项数值。每个 `CraftingStatData` 含 `DescriptionText`、`CurValue`、`MaxValue`、`Type`、`DamageType`。

#### `public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)`
同上，但是静态版本：直接给一个成品 `ItemObject` 与模板，不依赖会话实例。适合在 UI 外复查一把武器的数值。

#### `public string GetXmlCodeForCurrentItem(ItemObject item)`
把当前设计序列化成锻造存档用的 XML（含 `HashedCode`、模板、各件 `StringId` 与 `scale_factor`），用于写档。

#### `public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out (CraftingPiece, int)[] pieces)`
反序列化：从 XML 解析出模板与四件 `(CraftingPiece, 缩放)`。解析失败返回 `false` 且出参为 `null`。`CraftingCampaignBehavior` 的 `IsPreCraftedWeaponDesignValid` 等用它校验旧的预锻数据。

```csharp
CraftingState state = Game.Current.GameStateManager.ActiveState as CraftingState;
if (state != null)
{
    Crafting crafting = state.CraftingLogic;
    foreach (CraftingStatData stat in crafting.GetStatDatas(0))
    {
        InformationManager.DisplayMessage(new InformationMessage($"{stat.DescriptionText}: {stat.CurValue}/{stat.MaxValue}"));
    }
}
```

### 嵌套类型：RefiningFormula

#### `public class RefiningFormula`
一次精炼的配方：`Input1`/`Input1Count`、`Input2`/`Input2Count` 是投入材料，`Output`/`OutputCount`、`Output2`/`Output2Count` 是产出材料。构造：`RefiningFormula(CraftingMaterials input1, int input1Count, CraftingMaterials input2, int input2Count, CraftingMaterials output, int outputCount = 1, CraftingMaterials output2 = CraftingMaterials.IronOre, int output2Count = 0)`。`SmithingModel.GetRefiningFormulas(hero)` 返回某铁匠可用的配方列表；`CraftingCampaignBehavior.DoRefinement` 按配方改背包并扣体力。

## 真实示例

### 示例 1：在锻造界面里随机换刃并显示数值

```csharp
// 仅当确实处于锻造状态机中
CraftingState state = Game.Current.GameStateManager.ActiveState as CraftingState;
if (state == null)
    return;

Crafting crafting = state.CraftingLogic;
WeaponDesignElement blade = crafting.GetRandomPieceOfType(CraftingPiece.PieceTypes.Blade, randomScale: true);
crafting.SwitchToPiece(blade);
crafting.UpdateHistory();

foreach (CraftingStatData stat in crafting.GetStatDatas(0))
{
    // stat.DescriptionText 是本地化文本，CurValue/MaxValue 是数值
}
```

### 示例 2：脱离 UI 生成一把武器并放入背包（注意不扣材料）

```csharp
using TaleWorlds.Core;

CraftingTemplate template = CraftingTemplate.All[0];
WeaponDesignElement[] pieces = new WeaponDesignElement[4];
foreach (CraftingPiece piece in template.Pieces)
{
    if (!piece.IsHiddenOnDesigner)
        pieces[(int)piece.PieceType] = WeaponDesignElement.CreateUsablePiece(piece);
}
WeaponDesign design = new WeaponDesign(template, new TextObject("{=!}Forged Sword"), pieces, "my_forged_sword_01");
ItemObject item = new ItemObject();
Crafting.GenerateItem(design, design.WeaponName, Settlement.CurrentSettlement.Culture, null, ref item, "my_forged_sword_01");
if (item != null)
    PartyBase.MainParty.ItemRoster.AddToCounts(item, 1);
```

> 若想要“扣材料、扣体力、发事件、支持订单”的完整锻造，应走 `CraftingCampaignBehavior.CreateCraftedWeaponInFreeBuildMode` / `CreateCraftedWeaponInCraftingOrderMode`，它们内部调用 `SmithingModel` 计算花费并通过 `CraftingState.CraftingLogic.GetCurrentCraftedItemObject(forceReCreate: true)` 拿成品。

## 依赖图

- 上游：[CraftingTemplate](../CraftingTemplate/) 决定可用部件类型与统计口径；[CraftingPiece](../CraftingPiece/) 是被选中的原子部件；[WeaponDesign](../WeaponDesign/) + [WeaponDesignElement](../WeaponDesignElement/) 描述当前设计；[BasicCultureObject](../BasicCultureObject/) 提供文化。
- 下游：生成的成品是 [ItemObject](../ItemObject/)，其数值由内部 `CraftingStats` 基于 [WeaponDescription](../WeaponDescription/) 与 `BladeData`、`PieceData` 计算；[CraftingStatData](../CraftingStatData/) 是统计的展示单元；[CraftingMaterials](../CraftingMaterials/) 描述原料。
- 战役层：[CraftingCampaignBehavior](../../campaign-ext/CraftingCampaignBehavior/) 是真正驱动锻造/订单/熔炼/精炼的行为，它通过 `CraftingState.CraftingLogic` 拿到会话并调 `GetCurrentCraftedItemObject`；[SmithingModel](../../campaign-ext/SmithingModel/)（`Campaign.Current.Models.SmithingModel`）提供材料花费、精炼公式、体力与经验等经济逻辑，并大量使用 `Crafting.RefiningFormula`。
- 英雄：参与锻造的英雄是 [Hero](../../campaign/Hero/)，其 `DefaultSkills.Crafting` 影响体力上限与经验；精炼/熔炼消耗其体力。
- 据点：铁匠铺位于 [Settlement](../../campaign/Settlement/)（城镇），订单按城镇存储。

## 风险与坏档边界

1. **不要缓存会话实例：** `Crafting` 是一次性会话，由 `CraftingState` 持有。把它存到战役对象或静态字段，等下次打开锻造界面时拿到的是新实例，旧引用指向已废弃的设计。
2. **静态生成不触发经济与事件：** 直接 `Crafting.GenerateItem` 只生成物品，不扣 `SmithingModel` 的材料/体力、不发布 `OnNewItemCrafted`、不计入 `_craftedItemDictionary`。需要“真正的锻造”请走 `CraftingCampaignBehavior` 的流程，否则会出现“免费造神装”或存档里找不到该武器初始数据。
3. **`Init()` 缺失会崩溃：** 自建实例必须先 `Init()` 再读 `UsablePiecesList` / `SelectedPieces` / 调 `ReIndex()`，否则 `UsablePiecesList` 为 `null`、`CurrentWeaponDesign` 未建立。
4. **`GenerateCraftedItem` 返回 `null`：** 当某部件已不属于模板（模组改了 XML 导致失配）时返回 `null`。调用方必须判空，否则后续 `item.PrimaryWeapon` 会空引用；存档加载路径（`CreatePreCraftedWeaponOnDeserialize`）正是因此要做有效性校验。
5. **`RefiningFormula` 来自 `SmithingModel`：** 自己手搓配方会绕过 `SmithingModel.GetRefiningFormulas` 的合法性，可能扣错材料或产出不存在的原料。精炼应通过 `CraftingCampaignBehavior.DoRefinement` 走模型。
6. **缩放范围：** 只有 `IsPieceScaled` 的部件 `ScaleThePiece` 才生效；对非可缩放件传入百分比会被静默忽略，UI 应禁用该滑块。

## 跨版本提示

- 本页 API 以 `bannerlord-1.4.5` 源码为准（v1.3.15 子树未附带 Crafting 源码，语义以 1.4.5 为权威）。`GenerateItem`、`GetCurrentCraftedItemObject`、`CreatePreCraftedWeaponOnDeserialize`、`InitializePreCraftedWeaponOnLoad`、`GetStatDatas`、嵌套 `RefiningFormula` 在这两个版本中形态一致。
- `CraftingState.CraftingLogic` 与 `Helpers.CraftingHelper.OpenCrafting` 是 UI 入口，跨版本稳定；模组若直接 `new Crafting(...)`，请保证随后调用 `Init()` + `ReIndex()`，与 `CraftingHelper` 行为对齐。
- `SmithingModel` 的抽象方法（`GetSmithingCostsForWeaponDesign`、`GetRefiningFormulas` 等）是经济平衡的唯一入口，跨版本不要绕过。

## 导航

- [↑ 返回 core-extra 模块索引](../)
- [↔ CraftingTemplate](../CraftingTemplate/) · [CraftingPiece](../CraftingPiece/) · [WeaponDesign](../WeaponDesign/) · [WeaponDesignElement](../WeaponDesignElement/) · [CraftingStatData](../CraftingStatData/) · [CraftingMaterials](../CraftingMaterials/)
- [↔ ItemObject](../ItemObject/) · [BasicCultureObject](../BasicCultureObject/) · [WeaponDescription](../WeaponDescription/)
- [↓ CraftingCampaignBehavior](../../campaign-ext/CraftingCampaignBehavior/) · [SmithingModel](../../campaign-ext/SmithingModel/)
- [↔ Hero](../../campaign/Hero/) · [Settlement](../../campaign/Settlement/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
