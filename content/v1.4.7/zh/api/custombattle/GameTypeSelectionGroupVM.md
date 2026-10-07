---
title: "GameTypeSelectionGroupVM"
description: "CustomBattle 游戏类型选择组的 ViewModel，管理玩家类型与游戏类型的联动选择逻辑。"
---
# GameTypeSelectionGroupVM

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `class`
**基类：** `ViewModel`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs`（声明见第 10 行）

## 概述
`GameTypeSelectionGroupVM` 是 CustomBattle 模块中游戏类型选择组的视图模型。它继承自 `ViewModel`，负责管理玩家类型（`CustomBattlePlayerType`）与游戏类型之间的联动选择逻辑。当玩家类型发生变化时，可用的游戏类型列表会相应更新；当游戏类型发生变化时，上层逻辑通过回调通知并更新战斗配置。该类是 CustomBattle 准备界面中游戏模式选择的核心数据载体。

## 心智模型
将 `GameTypeSelectionGroupVM` 想象成一个"游戏模式选择面板"的大脑。它维护着两个关键信息：当前选择的玩家类型和当前选择的游戏类型。这两个选择之间存在依赖关系——某些游戏类型可能只在特定的玩家类型下可用。当玩家切换玩家类型时，ViewModel 会刷新可用的游戏类型列表（通过 `RefreshValues` 方法），确保 UI 只显示有效的选项。同时，它通过两个回调委托（`onPlayerTypeChange` 和 `onGameTypeChange`）将变化通知给上层逻辑，使战斗配置能够实时同步。`RandomizeAll` 方法则提供了一键随机化所有选择的功能，常用于快速生成随机战斗配置的场景。

## 怎么用
### 怎么拿到
`GameTypeSelectionGroupVM` 通常由 CustomBattle 的准备界面在初始化时创建。创建时需要传入两个回调委托：一个在玩家类型变化时触发，另一个在游戏类型变化时触发。上层代码通过持有该 ViewModel 的引用来响应选择变化，并将其同步到战斗配置对象中。

### 典型用法
在 CustomBattle 的准备阶段，系统会创建一个 `GameTypeSelectionGroupVM` 实例并绑定到游戏模式选择 UI 上。当玩家在下拉列表中选择不同的玩家类型时，ViewModel 内部状态更新并触发 `onPlayerTypeChange` 回调，上层逻辑据此刷新可用的游戏类型列表。当玩家选择具体的游戏类型时，`onGameTypeChange` 回调被触发，战斗配置中的游戏类型字段被更新。此外，`RandomizeAll` 方法可用于实现"随机战斗"功能，一键为玩家类型和游戏类型赋予随机值。

### 坑
- 回调委托在构造时绑定，之后无法更换。如果需要动态切换回调逻辑，必须重新创建 ViewModel 实例。
- `RefreshValues` 是一个 `override` 方法，其行为依赖于基类 `ViewModel` 的实现。在调用该方法前，确保所有相关属性已正确初始化，否则可能导致 UI 状态不一致。
- `RandomizeAll` 会同时随机化玩家类型和游戏类型，但不会自动验证随机结果的有效性。如果某些组合在特定地图或规则下无效，需要在调用后添加额外的验证逻辑。
- 该类不管理游戏类型的可用性规则（如哪些类型适用于哪些地图），这些规则需要由上层代码在回调中实现。

## 关键成员
| 成员 | 用途 |
|------|------|
| `GameTypeSelectionGroupVM(Action<CustomBattlePlayerType>, Action<string>)` | 构造函数，初始化玩家类型变化与游戏类型变化的回调（GameTypeSelectionGroupVM.cs:28） |
| `RefreshValues()` | 重写方法，刷新可用的游戏类型列表以响应玩家类型变化（GameTypeSelectionGroupVM.cs:39） |
| `RandomizeAll()` | 随机化所有选择项，用于快速生成随机战斗配置（GameTypeSelectionGroupVM.cs:66） |

## 真实示例
```csharp
// 在 CustomBattle 准备界面中创建游戏类型选择组 ViewModel
var onPlayerTypeChange = new Action<CustomBattlePlayerType>(playerType =>
{
    // 玩家类型变化时，刷新可用的游戏类型列表
    _gameTypeSelectionGroupVM.RefreshValues();
    _battleConfig.PlayerType = playerType;
});

var onGameTypeChange = new Action<string>(gameType =>
{
    // 游戏类型变化时，更新战斗配置
    _battleConfig.GameType = gameType;
    UpdateGameTypeDescription(gameType);
});

var gameTypeSelectionGroupVM = new GameTypeSelectionGroupVM(
    onPlayerTypeChange, onGameTypeChange);

// 实现"随机战斗"功能
gameTypeSelectionGroupVM.RandomizeAll();
```

## 参见
- [CustomBattleSiegeMachineVM](../CustomBattleSiegeMachineVM)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
