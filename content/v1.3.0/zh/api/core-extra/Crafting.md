---
title: "Crafting"
description: "Crafting 的自动生成类参考。"
---
# Crafting

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Crafting`
**Base:** 无
**File:** `TaleWorlds.Core/Crafting.cs`

## 概述

`Crafting` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentCulture` | `public BasicCultureObject CurrentCulture { get; }` |
| `CurrentCraftingTemplate` | `public CraftingTemplate CurrentCraftingTemplate { get; }` |
| `CurrentWeaponDesign` | `public WeaponDesign CurrentWeaponDesign { get; }` |
| `CurrentItemModifierGroup` | `public ItemModifierGroup CurrentItemModifierGroup { get; }` |
| `CraftedWeaponName` | `public TextObject CraftedWeaponName { get; }` |
| `UsablePiecesList` | `public List<WeaponDesignElement> UsablePiecesList { get; }` |
| `SelectedPieces` | `public WeaponDesignElement SelectedPieces { get; }` |
| `Output` | `public CraftingMaterials Output { get; }` |
| `OutputCount` | `public int OutputCount { get; }` |
| `Output2` | `public CraftingMaterials Output2 { get; }` |
| `Output2Count` | `public int Output2Count { get; }` |
| `Input1` | `public CraftingMaterials Input1 { get; }` |
| `Input1Count` | `public int Input1Count { get; }` |
| `Input2` | `public CraftingMaterials Input2 { get; }` |
| `Input2Count` | `public int Input2Count { get; }` |

## 主要方法

### SetCraftedWeaponName
`public void SetCraftedWeaponName(TextObject name)`

**用途 / Purpose:** 为 「crafted weapon name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.SetCraftedWeaponName(name);
```

### Init
`public void Init()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.Init();
```

### GetRandomPieceOfType
`public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)`

**用途 / Purpose:** 读取并返回当前对象中 「random piece of type」 的结果。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.GetRandomPieceOfType(pieceType, false);
```

### SwitchToCraftedItem
`public void SwitchToCraftedItem(ItemObject item)`

**用途 / Purpose:** 处理与 「switch to crafted item」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.SwitchToCraftedItem(item);
```

### Randomize
`public void Randomize()`

**用途 / Purpose:** 处理与 「randomize」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.Randomize();
```

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement piece)`

**用途 / Purpose:** 处理与 「switch to piece」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.SwitchToPiece(piece);
```

### ScaleThePiece
`public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)`

**用途 / Purpose:** 处理与 「scale the piece」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.ScaleThePiece(scalingPieceType, 0);
```

### ReIndex
`public void ReIndex(bool enforceReCreation = false)`

**用途 / Purpose:** 处理与 「re index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.ReIndex(false);
```

### Undo
`public bool Undo()`

**用途 / Purpose:** 处理与 「undo」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.Undo();
```

### Redo
`public bool Redo()`

**用途 / Purpose:** 处理与 「redo」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.Redo();
```

### UpdateHistory
`public void UpdateHistory()`

**用途 / Purpose:** 重新计算并更新 「history」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
crafting.UpdateHistory();
```

### GetRandomCraftName
`public TextObject GetRandomCraftName()`

**用途 / Purpose:** 读取并返回当前对象中 「random craft name」 的结果。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.GetRandomCraftName();
```

### GenerateItem
`public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject)`

**用途 / Purpose:** 生成「item」的实例、数据或表示。

```csharp
// 静态调用，不需要实例
Crafting.GenerateItem(weaponDesignTemplate, name, culture, itemModifierGroup, itemObject);
```

### GetCurrentCraftedItemObject
`public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false)`

**用途 / Purpose:** 读取并返回当前对象中 「current crafted item object」 的结果。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.GetCurrentCraftedItemObject(false);
```

### GetStatDatasFromTemplate
`public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)`

**用途 / Purpose:** 读取并返回当前对象中 「stat datas from template」 的结果。

```csharp
// 静态调用，不需要实例
Crafting.GetStatDatasFromTemplate(0, craftedItemObject, template);
```

### GetStatDatas
`public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「stat datas」 的结果。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.GetStatDatas(0);
```

### GetXmlCodeForCurrentItem
`public string GetXmlCodeForCurrentItem(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「xml code for current item」 的结果。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.GetXmlCodeForCurrentItem(item);
```

### TryGetWeaponPropertiesFromXmlCode
`public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple<CraftingPiece, int> pieces)`

**用途 / Purpose:** 尝试获取 「get weapon properties from xml code」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 Crafting 实例
Crafting crafting = ...;
var result = crafting.TryGetWeaponPropertiesFromXmlCode("example", craftingTemplate, valueTuple<CraftingPiece, 0);
```

### CreatePreCraftedWeapon
`public static ItemObject CreatePreCraftedWeapon(ItemObject itemObject, WeaponDesignElement usedPieces, string templateId, TextObject weaponName, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 构建一个新的 「pre crafted weapon」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Crafting.CreatePreCraftedWeapon(itemObject, usedPieces, "example", weaponName, itemModifierGroup);
```

### InitializePreCraftedWeaponOnLoad
`public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)`

**用途 / Purpose:** 为 「pre crafted weapon on load」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
Crafting.InitializePreCraftedWeaponOnLoad(itemObject, craftedData, itemName, culture);
```

### CreateRandomCraftedItem
`public static ItemObject CreateRandomCraftedItem(BasicCultureObject culture)`

**用途 / Purpose:** 构建一个新的 「random crafted item」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Crafting.CreateRandomCraftedItem(culture);
```

### GenerateCraftedItem
`public static ItemObject GenerateCraftedItem(ItemObject item, WeaponDesign weaponDesign, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 生成「crafted item」的实例、数据或表示。

```csharp
// 静态调用，不需要实例
Crafting.GenerateCraftedItem(item, weaponDesign, itemModifierGroup);
```

### FillWeapon
`public static void FillWeapon(ItemObject item, WeaponDescription weaponDescription, WeaponFlags weaponFlags, bool isAlternative, out WeaponComponentData filledWeapon)`

**用途 / Purpose:** 处理与 「fill weapon」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Crafting.FillWeapon(item, weaponDescription, weaponFlags, false, filledWeapon);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Crafting crafting = ...;
crafting.SetCraftedWeaponName(name);
```

## 参见

- [本区域目录](../)