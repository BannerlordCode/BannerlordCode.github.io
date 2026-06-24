<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyCompositionGroupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyCompositionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`

## 概述

`ArmyCompositionGroupVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MeleeInfantryComposition` | `public ArmyCompositionItemVM MeleeInfantryComposition { get; set; }` |
| `RangedInfantryComposition` | `public ArmyCompositionItemVM RangedInfantryComposition { get; set; }` |
| `MeleeCavalryComposition` | `public ArmyCompositionItemVM MeleeCavalryComposition { get; set; }` |
| `RangedCavalryComposition` | `public ArmyCompositionItemVM RangedCavalryComposition { get; set; }` |
| `ArmySizeTitle` | `public string ArmySizeTitle { get; set; }` |
| `ArmySize` | `public int ArmySize { get; set; }` |
| `MaxArmySize` | `public int MaxArmySize { get; set; }` |
| `MinArmySize` | `public int MinArmySize { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject selectedCulture)`

**用途 / Purpose:** 设置 `current selected culture` 的值或状态。

### ExecuteRandomize
`public void ExecuteRandomize(ArmyCompositionGroupVM oppositeSide = null)`

**用途 / Purpose:** 执行 `randomize` 操作或流程。

### OnPlayerTypeChange
`public void OnPlayerTypeChange(CustomBattlePlayerType playerType)`

**用途 / Purpose:** 当 `player type change` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ArmyCompositionGroupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)