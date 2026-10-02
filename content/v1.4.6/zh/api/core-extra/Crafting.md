---
title: "Crafting"
description: "锻造会话对象：持有一个 WeaponDesign、可用部件表与撤销重做历史，负责把部件组合生成成 ItemObject 并导出 CraftedItem XML。"
---
# Crafting

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Crafting`
**Base:** `System.Object`
**File:** `TaleWorlds.Core/Crafting.cs`

## 概述

它是「一次锻造会话」的状态机，不是静态工具类。内部状态有三块：**当前设计**（`CurrentWeaponDesign`，一个 [WeaponDesign](../WeaponDesign)，内含 4 个 `WeaponDesignElement` 分别对应柄/刃/护手/饰件）、**可用部件表**（`UsablePiecesList`，长度 4 的数组，每个元素是某类部件的候选 [WeaponDesignElement](../WeaponDesignElement) 列表）、**历史栈**（`_history` + `_currentHistoryIndex`，支撑 `Undo` / `Redo`）。

**关键约定：任何改动部件的操作最后都必须调 `ReIndex()`。** 它做两件事：把 `CurrentWeaponDesign.WeaponName` 同步到 `CraftedWeaponName`（`CopyTextObject()`），然后 `SetItemObject(null, null)` 把缓存的 `_craftedItemObject` 清掉。`SwitchToPiece` / `SwitchToCraftedItem` / `Randomize` / `Undo` / `Redo` 全都遵循这个收尾约定。漏调它 → 界面上还是旧武器。

真正的物品生成是 `SetItemObject` → `static GenerateItem(...)` → `ItemObject.InitCraftedItemObject` 那一串，产出物是 `_craftedItemObject`，通过 `GetCurrentCraftedItemObject(forceReCreate, customId)` 取出。

它还有一组重量常量（`WeightOfCrudeIron` = 1 … `WeightOfCalradianSteel` = 6），是锻造配方的材料等级权重。

## 心智模型

正常锻造流程：

1. `new Crafting(template, culture, name)` → `Init()`。**`Init()` 必须调**，它建 `_history` 和 `UsablePiecesList`（长度 4，按 `CraftingTemplate.Pieces` 的 `PieceType` 分桶）。不调就用 `GetRandomPieceOfType` 会 NRE。
2. 选部件：`SwitchToPiece(piece)` 或 `GetRandomPieceOfType(pieceType, randomScale)` → 内部 `ReIndex(false)`。
3. 缩放：`ScaleThePiece(pieceType, percentage)`。
4. 历史：`UpdateHistory()` 压入当前状态。**它是「提交」而不是「每步自动」**——不调它 `Undo` 撤不回去。
5. 取物品：`GetCurrentCraftedItemObject()` 返回缓存的 `ItemObject`；`forceReCreate: true` 会先 `SetItemObject(null, customId)` 重造。
6. 导出：`GetXmlCodeForCurrentItem(item)` 生成 `<CraftedItem>...</CraftedItem>` 文本；`TryGetWeaponPropertiesFromXmlCode(xmlCode, out template, out pieces)` 反向解析。

**最坑的一条：`Randomize()` 会替换整个 `CurrentWeaponDesign`（连 `Template` 和 `WeaponName` 一起用旧值重建），但四个部件里某个 `PieceType` 在模板中不可用时 `GetRandomPieceOfType` 返回 `WeaponDesignElement.GetInvalidPieceForType(pieceType)`——一个"无效部件"。** 所以 `Randomize()` 可能产出缺失部件的设计。之后 `GenerateItem` 里的 `craftedData.UsedPieces[0].CraftingPiece.BladeData` 就可能 NRE。

第二条：**`GetXmlCodeForCurrentItem` 只导出 `IsValid` 的部件**，无效部件被静默跳过。于是「导出 → 再解析」这个往返会丢失无效槽位，`pieces` 数组里对应位置变成 null。`CreatePreCraftedWeaponOnDeserialize` 专门做了一次补洞：把 null 元素替换成 `GetInvalidPieceForType`。

第三条：`SetCraftedWeaponName` 里 `weaponName.Equals(this.CraftedWeaponName)` —— 传 null 会 NRE（`TextObject.Equals` 是实例方法，第一句就 `other != null && (textObject = other as TextObject) != null`……实际上 `weaponName.Equals` 在 weaponName 为 null 时是 NullReferenceException）。

第四条：`InitCraftedItemObject` 里 `craftedData.UsedPieces[0].CraftingPiece.BladeData` 是**硬编码索引 0**。如果 UsedPieces[0] 是无效部件（`CraftingPiece` 为 null），这里 NRE。

常见误用：在 `Init()` 之前调 `GetRandomPieceOfType`（`UsablePiecesList` 为 null）；忘记 `UpdateHistory()` 导致 Undo 无效；把 `Crafting` 当单例跨局复用（`Template` / `Culture` / `WeaponName` 是构造时定的 getter，不可改）。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public Crafting(CraftingTemplate craftingTemplate, BasicCultureObject culture, TextObject name)` | 三个只读字段（`CurrentCraftingTemplate` / `CurrentCulture` / `CraftedWeaponName`）一次性定死，**没有 setter**。`CurrentWeaponDesign` / `CurrentItemModifierGroup` / `UsablePiecesList` / `_history` 都还是 null，**必须随后调 `Init()` 或由静态工厂填好**。 |
| `CurrentCulture` | `public BasicCultureObject CurrentCulture { get; }` | 只读。合成物品的文化，影响属性加成。构造时定，无改法。 |
| `CurrentCraftingTemplate` | `public CraftingTemplate CurrentCraftingTemplate { get; }` | 只读。锻造模板，定义哪些 `PieceTypes` 可用。 |
| `CurrentWeaponDesign` | `public WeaponDesign CurrentWeaponDesign { get; private set; }` | 当前设计。`private set`，外部只能通过 `Randomize` / `SwitchToPiece` / `Undo` / `Redo` 这类会连带 `ReIndex` 的方法改。**直接置位再忘记 `ReIndex` 会让界面和物品不同步。** |
| `CurrentItemModifierGroup` | `public ItemModifierGroup CurrentItemModifierGroup { get; private set; }` | 品质组。`private set`，由 `CreatePreCraftedWeaponOnDeserialize` 等静态路径或游戏侧设置。 |
| `CraftedWeaponName` | `public TextObject CraftedWeaponName { get; private set; }` | 成品名。`ReIndex` 会用 `CurrentWeaponDesign.WeaponName.CopyTextObject()` 覆盖它。 |
| `SetCraftedWeaponName` | `public void SetCraftedWeaponName(TextObject weaponName)` | `if (!weaponName.Equals(this.CraftedWeaponName))` 才写值，并调 `this._craftedItemObject.SetCraftedWeaponName(...)` 向下同步。**`weaponName` 为 null 会 NRE**（实例方法调用）；`_craftedItemObject` 为 null 时**下一句就 NRE**——所以必须先 `Init()` 并生成过物品。 |
| `Init` | `public void Init()` | 建 `_history = new List<WeaponDesign>()` 与 `UsablePiecesList = new List<WeaponDesignElement>[4]`，再遍历 `CurrentCraftingTemplate.Pieces` 按 `PieceType` 分桶填充。**构造后必须调一次。** |
| `UsablePiecesList` | `public List<WeaponDesignElement>[] UsablePiecesList { get; private set; }` | 长度 4 的数组，按 `CraftingPiece.PieceTypes` 索引。**`Init()` 前是 null。** 元素可能为 null（某类部件在模板里没有）。 |
| `SelectedPieces` | `public WeaponDesignElement[] SelectedPieces { get; }` | `CurrentWeaponDesign.UsedPieces` 的直接引用。**不是副本**——外部改它等于改设计。 |
| `GetRandomPieceOfType` | `public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)` | 模板不支持该类型时返回 `WeaponDesignElement.GetInvalidPieceForType(pieceType)`；否则从 `UsablePiecesList[(int)pieceType]` 随机取一个 `GetCopy()`，`randomScale` 为 true 时 `SetScale((int)(90f + MBRandom.RandomFloat * 20f))`（90–109%）。**列表为 null（未 `Init`）会 NRE；元素为 null 也会。** |
| `SwitchToPiece` | `public void SwitchToPiece(WeaponDesignElement piece)` | 把 `piece` 放到其 `CraftingPiece.PieceType` 对应的槽位，然后 `ReIndex(false)`。`piece` 或其 `CraftingPiece` 为 null 时 NRE。 |
| `SwitchToCraftedItem` | `public void SwitchToCraftedItem(ItemObject item)` | 读 `item.WeaponDesign.UsedPieces`，逐个 `GetCopy()` 到新数组，用旧 `Template` / `WeaponName` 重建设计，再 `ReIndex(false)`。**`item.WeaponDesign` 为 null（非合成武器）时 NRE。** |
| `ScaleThePiece` | `public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)` | 缩放指定类型槽位的部件百分比，随后 `ReIndex(false)`。 |
| `Randomize` | `public void Randomize()` | 四个槽位各取一个随机部件（`randomScale: true`），用旧 `Template` / `WeaponName` 重建设计，然后 `ReIndex(false)`。**可能产出无效部件**。 |
| `ReIndex` | `public void ReIndex(bool enforceReCreation = false)` | **改动后的统一收尾**。先把 `CurrentWeaponDesign.WeaponName`（非空且与 `CraftedWeaponName` 字符串不等时）`CopyTextObject()` 同步到 `CraftedWeaponName`；`enforceReCreation` 为 true 时用现有数据**重建** `CurrentWeaponDesign`；最后 `SetItemObject(null, null)` 清掉物品缓存。**漏调 → 界面显示旧武器。** |
| `UpdateHistory` | `public void UpdateHistory()` | 「提交当前状态」：先截断 redo 分支（`_currentHistoryIndex` 之后的部分），再把 `UsedPieces` 逐个 `GetCopy()`（`IsValid` 时同步 `ScalePercentage`）压入 `_history`，`_currentHistoryIndex = Count - 1`。**不调它 `Undo` 无效。** |
| `Undo` | `public bool Undo()` | `_currentHistoryIndex <= 0` 时返回 false；否则自减、取 `_history[index]` 赋给 `CurrentWeaponDesign`、`ReIndex(false)`、返回 true。 |
| `Redo` | `public bool Redo()` | `_currentHistoryIndex + 1 >= _history.Count` 时返回 false；否则自增、赋值、`ReIndex(false)`、返回 true。 |
| `GetRandomCraftName` | `public TextObject GetRandomCraftName()` | 返回 `new TextObject("{=!}RANDOM_NAME", null)`。`{=!}` 前缀表示「运行时随机化」。**与语言文件无关。** |
| `GenerateItem` | `public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)` | 静态核心。`itemObject` 为 null 时 `new ItemObject()`，然后调 `InitCraftedItemObject` 一系列填充。因为是 `ref` 参数，**调用后必须用传进去的变量接收结果**。内部会访问 `craftedData.UsedPieces[0].CraftingPiece.BladeData`（硬编码索引 0）。 |
| `GetCurrentCraftedItemObject` | `public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)` | 返回 `_craftedItemObject`。`forceReCreate` 为 true 时先 `SetItemObject(null, customId)` 重造。**`Init()` 之前调用返回 null。** |
| `GetStatDatas` | `public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)` | 迭代器方法。内部用 `yield return` 逐条产出 UI 需要的锻造属性（伤害、长度、重量等）。依赖 `_craftedItemObject` **已生成**且 `usageIndex` 有效。`template.GetStatDatas(...)` 走 `switch`，遇到未列举的枚举值 `throw new ArgumentOutOfRangeException`。 |
| `GetStatDatasFromTemplate` | `public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)` | 静态版，直接从给定模板产出。`textObject.SetTextVariable(...)` 会**就地改写 `GameTexts.FindText` 返回的对象**——共用文本实例时要注意副作用。 |
| `GetXmlCodeForCurrentItem` | `public string GetXmlCodeForCurrentItem(ItemObject item)` | 生成 `<CraftedItem id="{HashedCode}" name="..." crafting_template="...">` + `<Pieces>` 子节点 + 注释行。**只导出 `IsValid` 的部件**，无效槽位被跳过。`item.PrimaryWeapon.WeaponLength` 与 `item.Weight` 只进注释不参与解析。 |
| `TryGetWeaponPropertiesFromXmlCode` | `public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple<CraftingPiece, int>[] pieces)` | 反向解析 `GetXmlCodeForCurrentItem` 的产物。`XmlDocument.LoadXml` 包在 try/catch 里，失败返回 false。`pieces` 长度固定 4，**解析不出部件的位置留 null**（与 `CreatePreCraftedWeaponOnDeserialize` 的补洞逻辑配套）。 |
| `CreatePreCraftedWeaponOnDeserialize` | `public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement[] usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)` | 读 XML 定义时构造合成武器。先把 `usedPieces` 里的 null 补成 `GetInvalidPieceForType(i)`；名字为空时 `Debug.Print` 警告并用兜底 `new TextObject("{=Uz1HHeKg}Crafted Random Weapon", null)`；建 `WeaponDesign` + 一个内部 `Crafting`，手工填 `CurrentWeaponDesign` / `CurrentItemModifierGroup` / `_history`，调 `SetItemObject(itemObject, itemObject.StringId)`，返回 `crafting._craftedItemObject`。 |
| `InitializePreCraftedWeaponOnLoad` | `public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)` | 读档路径。同样建内部 `Crafting` 并 `SetItemObject`，**不填 `_history` 之外的内容**（无 `Init()`，因为模板数据已由存档带回来了）。 |
| `WeightOfCrudeIron` … `WeightOfCalradianSteel` | `public const int WeightOfCrudeIron = 1` … `WeightOfCalradianSteel = 6` | 六档钢铁的材料权重常量（粗铁 1 → 卡拉迪亚钢 6）。用于配方计算，不是「每单位重量」。 |
| `RefiningFormula` | `public class RefiningFormula` | **嵌套类**，锻造/精炼配方：`Input1`/`Input1Count`/`Input2`/`Input2Count` → `Output`/`OutputCount`/`Output2`/`Output2Count`。构造器默认 `output2 = CraftingMaterials.IronOre`、`output2Count = 0`。 |
| `RefiningFormula` 成员 | `public CraftingMaterials Output { get; }` / `OutputCount` / `Output2` / `Output2Count` / `Input1` / `Input1Count` / `Input2` / `Input2Count` | 全部只读，构造器一次定死。 |
| `GenerateCraftedItem` | `public static ItemObject GenerateCraftedItem(ItemObject item, WeaponDesign weaponDesign, ItemModifierGroup itemModifierGroup)` | 静态便捷入口，产出合成后的 `ItemObject`。 |
| `FillWeapon` | `public static void FillWeapon(ItemObject item, WeaponDescription weaponDescription, WeaponFlags weaponFlags, bool isAlternative, out WeaponComponentData filledWeapon)` | 用武器描述 + 标志构造一份 `WeaponComponentData` 并通过 `out` 返回。`isAlternative` 控制是否走替代形态。 |

## 真实示例

完整锻造会话（注意 `Init` 与 `UpdateHistory` 的位置）：

```csharp
Crafting crafting = new Crafting(template, culture, new TextObject("{=my_sword}My Sword"));
crafting.Init();

// 选部件：柄
WeaponDesignElement handle = crafting.GetRandomPieceOfType(CraftingPiece.PieceTypes.Handle, false);
crafting.SwitchToPiece(handle);
crafting.ScaleThePiece(CraftingPiece.PieceTypes.Handle, 105);

// 提交历史点（不调 Undo 无效）
crafting.UpdateHistory();

// 生成物品
ItemObject item = crafting.GetCurrentCraftedItemObject();
if (item != null)
{
    Debug.Print("crafted: " + item.Name.ToString(), 0);
}
```

撤销 / 重做与随机化（都会自动 `ReIndex`）：

```csharp
Crafting crafting = new Crafting(template, culture, nameText);
crafting.Init();
crafting.Randomize();
crafting.UpdateHistory();

crafting.SwitchToPiece(crafting.GetRandomPieceOfType(CraftingPiece.PieceTypes.Blade, true));
crafting.UpdateHistory();

bool undone = crafting.Undo();
bool redone = crafting.Redo();
Debug.Print("undo=" + undone + " redo=" + redone, 0);
```

导出与再解析（无效槽位在往返中会变 null，这是设计）：

```csharp
Crafting crafting = new Crafting(template, culture, nameText);
crafting.Init();
ItemObject item = crafting.GetCurrentCraftedItemObject();

string xml = crafting.GetXmlCodeForCurrentItem(item);
Debug.Print(xml, 0);

CraftingTemplate parsedTemplate;
ValueTuple<CraftingPiece, int>[] parsedPieces;
if (crafting.TryGetWeaponPropertiesFromXmlCode(xml, out parsedTemplate, out parsedPieces))
{
    for (int i = 0; i < parsedPieces.Length; i++)
    {
        if (parsedPieces[i].Item1 == null)
        {
            Debug.Print("slot " + i + " empty after round-trip", 0);
        }
    }
}
```

读 UI 用的锻造属性（依赖物品已生成）：

```csharp
ItemObject item = crafting.GetCurrentCraftedItemObject();
if (item != null)
{
    foreach (CraftingStatData stat in crafting.GetStatDatas(0))
    {
        Debug.Print(stat.Type + " = " + stat.CurValue, 0);
    }
}
```

## 风险与边界

- **不改 `Init()` 就是 NRE。** `UsablePiecesList` 与 `_history` 都是 null。构造后立刻用是硬失败。
- **漏 `ReIndex()` → 界面与物品不同步。** 所有改部件的方法都靠它清缓存。手工置 `CurrentWeaponDesign`（`private set`，只能内部）后必须补调。
- **漏 `UpdateHistory()` → Undo 无效。** 历史是手动提交的，不是自动快照。
- **`UsedPieces[0]` 硬编码索引。** `GenerateItem` 与 `InitCraftedItemObject` 都访问 `UsedPieces[0].CraftingPiece.BladeData`。第 0 槽（柄）无效时 NRE。
- **无效部件会静默产生。** `GetRandomPieceOfType` 在模板不支持该类型时返回 `GetInvalidPieceForType`，`Randomize` 会把无效部件写进设计，不报错。
- **XML 往返丢失无效槽位。** `GetXmlCodeForCurrentItem` 只导 `IsValid` 的部件，`TryGetWeaponPropertiesFromXmlCode` 解析出来是 null。`CreatePreCraftedWeaponOnDeserialize` 专门做补洞。
- **`SetCraftedWeaponName` 有两处 NRE 风险。** `weaponName` 为 null；`_craftedItemObject` 为 null（未 `Init` 或未生成过）。
- **`SelectedPieces` 返回内部引用。** 改它等于改 `CurrentWeaponDesign.UsedPieces`，且**不触发 `ReIndex`**。
- **构造参数不可改。** `CurrentCraftingTemplate` / `CurrentCulture` / `CraftedWeaponName` 都是只读 getter。换模板必须新 `new Crafting`。
- **`GetStatDatasFromTemplate` 就地改写文本对象。** `textObject.SetTextVariable(...)` 改的是 `GameTexts.FindText` 返回的实例，多处共用时会有副作用。
- **`GetStatDatas` 的 switch 会抛。** 未列举的 `CraftingTemplate.CraftingStatTypes` 走 `throw new ArgumentOutOfRangeException`。
- **不是单例，不要跨局复用。** 它持有模板/文化/设计/历史整份会话状态。
- **`MBRandom` 全局随机。** `GetRandomPieceOfType` 用 `MBRandom.RandomInt` / `RandomFloat`，**没有 seed 参数**，不可复现（`GetRandomEquipmentElements` 那种带 `seed` 的接口才有）。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/Crafting.cs` 逐行比对，**public 表面完全一致**：3 个构造器路径、全部属性、19 个方法、6 个 `WeightOf*` 常量、嵌套类 `RefiningFormula` 及其 8 个只读属性、`GenerateCraftedItem` / `FillWeapon` 全都没变。`bannerlord-1.3.15` 里 `GetXmlCodeForCurrentItem` 同样只导出 `IsValid` 的部件、`SetCraftedWeaponName` 同样用 `weaponName.Equals(...)` 判断。`bannerlord-1.4.5/` 本机未解出 C# 源码，未能核对。

## 依赖关系

- 设计数据：[WeaponDesign](../WeaponDesign) 持有 4 个部件与 `HashedCode` / `Template` / `WeaponName`；部件是 `WeaponDesignElement`
- 模板与部件库：[CraftingTemplate](../CraftingTemplate) 定义可用 `PieceTypes` 与属性表，[CraftingPiece](../CraftingPiece) 是单个部件的 XML 定义
- 产出：[ItemObject](../ItemObject) 是锻造结果本体，`ItemObject.GetCraftedItemObjectFromHashedCode` 反查已存在的合成武器
- 品质：[ItemModifierGroup](../ItemModifierGroup) 决定成品品质
- 文本：`CraftedWeaponName` 与 `WeaponDesign.WeaponName` 都是 `TextObject`，导出时按原文写入 XML
- 桶首页：[core-extra API 分区](../)
