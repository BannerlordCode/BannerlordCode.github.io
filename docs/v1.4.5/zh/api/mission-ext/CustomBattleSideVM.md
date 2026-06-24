<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleSideVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleSideVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSideVM.cs`

## 概述

`CustomBattleSideVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedCharacter` | `public BasicCharacterObject SelectedCharacter { get; }` |
| `CurrentSelectedCharacter` | `public CharacterViewModel CurrentSelectedCharacter { get; set; }` |
| `ArmorsList` | `public MBBindingList<CharacterEquipmentItemVM> ArmorsList { get; set; }` |
| `WeaponsList` | `public MBBindingList<CharacterEquipmentItemVM> WeaponsList { get; set; }` |
| `FactionText` | `public string FactionText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CharacterSelectionGroup` | `public SelectorVM<CharacterItemVM> CharacterSelectionGroup { get; set; }` |
| `CompositionGroup` | `public ArmyCompositionGroupVM CompositionGroup { get; set; }` |
| `FactionSelectionGroup` | `public CustomBattleFactionSelectionVM FactionSelectionGroup { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnPlayerTypeChange
`public void OnPlayerTypeChange(CustomBattlePlayerType playerType)`

**用途 / Purpose:** 当 `player type change` 事件触发时调用此方法。

### UpdateCharacterVisual
`public void UpdateCharacterVisual()`

**用途 / Purpose:** 更新 `character visual` 的状态或数据。

### Randomize
`public void Randomize(CustomBattleSideVM oppositeSide = null)`

**用途 / Purpose:** 处理 `randomize` 相关逻辑。

## 使用示例

```csharp
var value = new CustomBattleSideVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)