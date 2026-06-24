<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyCompositionItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyCompositionItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs`

## 概述

`ArmyCompositionItemVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopTypes` | `public MBBindingList<CustomBattleTroopTypeVM> TroopTypes { get; set; }` |
| `InvalidHint` | `public HintViewModel InvalidHint { get; set; }` |
| `AddTroopTypeHint` | `public HintViewModel AddTroopTypeHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `CompositionValue` | `public int CompositionValue { get; set; }` |
| `CompositionValuePercentageText` | `public string CompositionValuePercentageText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject culture)`

**用途 / Purpose:** 设置 `current selected culture` 的值或状态。

### ExecuteRandomize
`public void ExecuteRandomize(int compositionValue)`

**用途 / Purpose:** 执行 `randomize` 操作或流程。

### ExecuteAddTroopTypes
`public void ExecuteAddTroopTypes()`

**用途 / Purpose:** 执行 `add troop types` 操作或流程。

### RefreshCompositionValue
`public void RefreshCompositionValue()`

**用途 / Purpose:** 刷新 `composition value` 的显示或缓存。

### GetTroopTypeIconData
`public static StringItemWithHintVM GetTroopTypeIconData(BasicCharacterObject basicCharacterObject, CompositionType type, bool isBig = false)`

**用途 / Purpose:** 获取 `troop type icon data` 的当前值。

## 使用示例

```csharp
var value = new ArmyCompositionItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)