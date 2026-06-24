<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleInitializationModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## 概述

`BattleInitializationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleInitializationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAllAvailableTroopTypes
`public abstract List<FormationClass> GetAllAvailableTroopTypes()`

**用途 / Purpose:** 获取 `all available troop types` 的当前值。

### CanPlayerSideDeployWithOrderOfBattle
`public bool CanPlayerSideDeployWithOrderOfBattle()`

**用途 / Purpose:** 判断当前对象是否可以执行 `player side deploy with order of battle`。

### InitializeModel
`public void InitializeModel()`

**用途 / Purpose:** 初始化 `model` 的状态、资源或绑定。

### FinalizeModel
`public void FinalizeModel()`

**用途 / Purpose:** 处理 `finalize model` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomBattleInitializationModel();
```

## 参见

- [完整类目录](../catalog)