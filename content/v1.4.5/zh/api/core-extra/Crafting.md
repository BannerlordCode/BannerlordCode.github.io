---
title: "Crafting"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Crafting`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Crafting

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Crafting`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Crafting.cs`

## 概述

`Crafting` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Output` | `public CraftingMaterials Output { get; }` |
| `OutputCount` | `public int OutputCount { get; }` |
| `Output2` | `public CraftingMaterials Output2 { get; }` |
| `Output2Count` | `public int Output2Count { get; }` |
| `Input1` | `public CraftingMaterials Input1 { get; }` |
| `Input1Count` | `public int Input1Count { get; }` |
| `Input2` | `public CraftingMaterials Input2 { get; }` |
| `Input2Count` | `public int Input2Count { get; }` |
| `CurrentCulture` | `public BasicCultureObject CurrentCulture { get; }` |
| `CurrentCraftingTemplate` | `public CraftingTemplate CurrentCraftingTemplate { get; }` |
| `CurrentWeaponDesign` | `public WeaponDesign CurrentWeaponDesign { get; }` |
| `CurrentItemModifierGroup` | `public ItemModifierGroup CurrentItemModifierGroup { get; }` |
| `CraftedWeaponName` | `public TextObject CraftedWeaponName { get; }` |
| `UsablePiecesList` | `public List<WeaponDesignElement> UsablePiecesList { get; }` |

## 主要方法

### FillWeapon
`public static void FillWeapon(ItemObject item, WeaponDescription weaponDescription, WeaponFlags weaponFlags, bool isAlternative, out WeaponComponentData filledWeapon)`

**用途 / Purpose:** 处理 `fill weapon` 相关逻辑。

### GenerateCraftedItem
`public static ItemObject GenerateCraftedItem(ItemObject item, WeaponDesign weaponDesign, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 处理 `generate crafted item` 相关逻辑。

### SetCraftedWeaponName
`public void SetCraftedWeaponName(TextObject weaponName)`

**用途 / Purpose:** 设置 `crafted weapon name` 的值或状态。

### Init
`public void Init()`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### GetRandomPieceOfType
`public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)`

**用途 / Purpose:** 获取 `random piece of type` 的当前值。

### SwitchToCraftedItem
`public void SwitchToCraftedItem(ItemObject item)`

**用途 / Purpose:** 处理 `switch to crafted item` 相关逻辑。

### Randomize
`public void Randomize()`

**用途 / Purpose:** 处理 `randomize` 相关逻辑。

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement piece)`

**用途 / Purpose:** 处理 `switch to piece` 相关逻辑。

### ScaleThePiece
`public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)`

**用途 / Purpose:** 处理 `scale the piece` 相关逻辑。

### ReIndex
`public void ReIndex(bool enforceReCreation = false)`

**用途 / Purpose:** 处理 `re index` 相关逻辑。

### Undo
`public bool Undo()`

**用途 / Purpose:** 处理 `undo` 相关逻辑。

### Redo
`public bool Redo()`

**用途 / Purpose:** 处理 `redo` 相关逻辑。

### UpdateHistory
`public void UpdateHistory()`

**用途 / Purpose:** 更新 `history` 的状态或数据。

### GetRandomCraftName
`public TextObject GetRandomCraftName()`

**用途 / Purpose:** 获取 `random craft name` 的当前值。

### GenerateItem
`public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)`

**用途 / Purpose:** 处理 `generate item` 相关逻辑。

### GetCurrentCraftedItemObject
`public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)`

**用途 / Purpose:** 获取 `current crafted item object` 的当前值。

### GetStatDatasFromTemplate
`public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)`

**用途 / Purpose:** 获取 `stat datas from template` 的当前值。

### GetStatDatas
`public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)`

**用途 / Purpose:** 获取 `stat datas` 的当前值。

### GetXmlCodeForCurrentItem
`public string GetXmlCodeForCurrentItem(ItemObject item)`

**用途 / Purpose:** 获取 `xml code for current item` 的当前值。

### TryGetWeaponPropertiesFromXmlCode
`public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out (CraftingPiece, int) pieces)`

**用途 / Purpose:** 尝试获取 `get weapon properties from xml code`，通常以 out 参数返回结果。

### CreatePreCraftedWeaponOnDeserialize
`public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 创建一个 `pre crafted weapon on deserialize` 实例或对象。

### InitializePreCraftedWeaponOnLoad
`public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)`

**用途 / Purpose:** 初始化 `pre crafted weapon on load` 的状态、资源或绑定。

## 使用示例

```csharp
Crafting.FillWeapon(item, weaponDescription, weaponFlags, false, filledWeapon);
```

## 参见

- [完整类目录](../catalog)