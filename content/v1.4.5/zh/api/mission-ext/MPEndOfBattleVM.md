---
title: "MPEndOfBattleVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPEndOfBattleVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPEndOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPEndOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MPEndOfBattleVM.cs`

## 概述

`MPEndOfBattleVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `CountdownTitle` | `public string CountdownTitle { get; set; }` |
| `Countdown` | `public int Countdown { get; set; }` |
| `Header` | `public string Header { get; set; }` |
| `BattleResult` | `public int BattleResult { get; set; }` |
| `ResultText` | `public string ResultText { get; set; }` |
| `AllySide` | `public MPEndOfBattleSideVM AllySide { get; set; }` |
| `EnemySide` | `public MPEndOfBattleSideVM EnemySide { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var value = new MPEndOfBattleVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)