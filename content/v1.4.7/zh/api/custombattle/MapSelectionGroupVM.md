---
title: "MapSelectionGroupVM"
description: "自定义战斗地图选择分组视图模型，管理地图列表、游戏模式与出击配置。"
---
# MapSelectionGroupVM

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `class`
**基类：** `ViewModel`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/MapSelectionGroupVM.cs`（声明见第 12 行）

## 概述

`MapSelectionGroupVM` 是自定义战斗地图选择界面的视图模型，负责维护可用地图列表、当前选中的地图、游戏模式（GameType）以及出击（Sally Out）相关配置。它继承自 `ViewModel`，通过数据绑定驱动 UI 刷新，是地图选择面板与底层游戏逻辑之间的桥梁。

## 心智模型

把 `MapSelectionGroupVM` 想象成地图选择面板的"状态容器"。它不直接操作 UI 控件，而是暴露属性和命令，让视图层通过绑定来读取和触发行为。当用户切换地图或游戏模式时，视图模型更新内部状态并调用 `RefreshValues()` 通知界面刷新。`ExecuteSallyOutChange()` 处理出击配置的变更，`OnGameTypeChange(string)` 响应游戏模式切换并联动更新相关选项。

## 怎么用

### 怎么拿到

`MapSelectionGroupVM` 由自定义战斗的父级视图模型在初始化时创建并持有，通常作为地图选择面板的数据上下文。开发者一般不直接实例化它，而是通过自定义战斗的根视图模型间接访问。

### 典型用法

在自定义战斗地图选择界面中，当用户选择地图或切换游戏模式时，框架会调用 `OnGameTypeChange(string gameType)` 来同步状态。出击配置的修改通过 `ExecuteSallyOutChange()` 提交。任何需要刷新面板数据的场景都应调用 `RefreshValues()`。

### 坑

- `RefreshValues()` 是 `override` 方法，调用它会触发完整的属性通知链，频繁调用可能导致界面闪烁。
- `OnGameTypeChange(string)` 的参数是字符串而非枚举，调用时需确保传入有效的游戏模式标识符，否则可能导致状态不一致。
- 该视图模型与具体地图数据紧密耦合，直接修改其内部字段而不通过公开方法可能破坏数据绑定的一致性。

## 关键成员

| 成员 | 用途 |
|------|------|
| `MapSelectionGroupVM()` | 构造函数，初始化地图列表与默认选中项（MapSelectionGroupVM.cs:60） |
| `RefreshValues()` | 重写方法，刷新所有绑定属性通知（MapSelectionGroupVM.cs:75） |
| `ExecuteSallyOutChange()` | 处理出击配置变更逻辑（MapSelectionGroupVM.cs:121） |
| `OnGameTypeChange(string)` | 响应游戏模式切换，联动更新相关选项（MapSelectionGroupVM.cs:199） |

## 真实示例

```csharp
// 假设已通过自定义战斗根视图模型获取到 mapSelectionGroupVM 实例
mapSelectionGroupVM.OnGameTypeChange("Siege");
mapSelectionGroupVM.ExecuteSallyOutChange();
mapSelectionGroupVM.RefreshValues();
```

## 参见

- [MapSelectionGroupVM](../MapSelectionGroupVM)
- [../../core-extra/Game](../../core-extra/Game)
- [../../sandbox/AgentNavigator](../../sandbox/AgentNavigator)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
