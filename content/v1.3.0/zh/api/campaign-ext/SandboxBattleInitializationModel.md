---
title: "SandboxBattleInitializationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxBattleInitializationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxBattleInitializationModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `SandBox/GameComponents/SandboxBattleInitializationModel.cs`

## 概述

`SandboxBattleInitializationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxBattleInitializationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**用途 / Purpose:** 获取 `all available troop types` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxBattleInitializationModel>(new MySandboxBattleInitializationModel());
```

## 参见

- [完整类目录](../catalog)