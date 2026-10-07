---
title: "CustomBattleSiegeMachineVM"
description: "CustomBattle 攻城器械选择界面的 ViewModel，封装器械类型与选择回调。"
---
# CustomBattleSiegeMachineVM

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `class`
**基类：** `ViewModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs`（声明见第 8 行）

## 概述
`CustomBattleSiegeMachineVM` 是 CustomBattle 模块中攻城器械（Siege Engine）选择界面的视图模型。它继承自 `ViewModel`，负责在战斗准备阶段向玩家展示可选的攻城器械类型，并在玩家做出选择或重置选择时通过回调通知上层逻辑。该类是连接 UI 层与战斗配置数据之间的桥梁，确保器械选择状态能够被正确传递到后续的战斗初始化流程中。

## 心智模型
将 `CustomBattleSiegeMachineVM` 想象成一个"器械选择器"的数据载体。它不直接渲染 UI，而是保存当前器械类型（`SiegeEngineType`）以及两个关键回调：一个在玩家选中某台器械时触发（`onSelection`），另一个在玩家取消选择时触发（`onResetSelection`）。UI 层绑定到该 ViewModel 的属性上，当玩家点击器械图标时，ViewModel 更新内部状态并调用对应回调，上层逻辑据此更新战斗配置。这种设计将界面交互与业务逻辑解耦，使得器械选择逻辑可以在不同界面间复用。

## 怎么用
### 怎么拿到
`CustomBattleSiegeMachineVM` 通常由 CustomBattle 的准备界面（如部署阶段或器械配置面板）在初始化时创建。创建时需要传入初始的 `SiegeEngineType` 以及两个回调委托。上层代码通过持有该 ViewModel 的引用来响应玩家的选择变化，并将其状态同步到战斗配置对象中。

### 典型用法
在 CustomBattle 的准备阶段，系统会为每种可用的攻城器械创建一个 `CustomBattleSiegeMachineVM` 实例。当玩家在器械选择列表中点击某台器械时，对应的 ViewModel 被激活，其 `onSelection` 回调被触发，上层逻辑将该器械类型记录到当前战斗配置中。如果玩家点击已选中的器械（即取消选择），则触发 `onResetSelection` 回调，清除该器械的配置。通过 `SetMachineType` 方法可以动态切换当前 ViewModel 所代表的器械类型，这在需要动态调整可用器械列表的场景中非常有用。

### 坑
- 回调委托（`onSelection` 和 `onResetSelection`）在构造时绑定，之后无法更换。如果需要在运行时切换回调逻辑，必须重新创建 ViewModel 实例。
- `SetMachineType` 仅更新器械类型属性，不会自动触发选择回调。如果需要模拟一次完整的选中流程，必须在调用 `SetMachineType` 后手动触发 `onSelection`。
- 该类不管理器械的可用性状态（如是否已解锁、是否适用于当前地图），这些逻辑需要由上层代码在创建 ViewModel 时通过传入正确的 `SiegeEngineType` 来处理。

## 关键成员
| 成员 | 用途 |
|------|------|
| `CustomBattleSiegeMachineVM(SiegeEngineType, Action<CustomBattleSiegeMachineVM>, Action<CustomBattleSiegeMachineVM>)` | 构造函数，初始化器械类型与选择/重置回调（CustomBattleSiegeMachineVM.cs:16） |
| `SetMachineType(SiegeEngineType)` | 设置当前器械类型，用于动态切换 ViewModel 所代表的器械（CustomBattleSiegeMachineVM.cs:24） |

## 真实示例
```csharp
// 在 CustomBattle 准备界面中创建攻城器械选择 ViewModel
var onSelection = new Action<CustomBattleSiegeMachineVM>(vm =>
{
    // 玩家选中了某台器械，将其类型记录到战斗配置
    _battleConfig.SiegeEngineType = vm.MachineType;
    RefreshDeploymentPanel();
});

var onResetSelection = new Action<CustomBattleSiegeMachineVM>(vm =>
{
    // 玩家取消选择，清除器械配置
    _battleConfig.SiegeEngineType = SiegeEngineType.None;
    RefreshDeploymentPanel();
});

var siegeMachineVM = new CustomBattleSiegeMachineVM(
    SiegeEngineType.BatteringRam, onSelection, onResetSelection);

// 动态切换器械类型（例如根据地图可用性调整）
siegeMachineVM.SetMachineType(SiegeEngineType.SiegeTower);
```

## 参见
- [CustomBattleSiegeMachineVM](../CustomBattleSiegeMachineVM)
- [../../core-extra/Game](../../core-extra/Game)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
