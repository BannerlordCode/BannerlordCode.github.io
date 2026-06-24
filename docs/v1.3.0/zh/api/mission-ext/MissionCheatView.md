<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCheatView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCheatView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionCheatView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionCheatView.cs`

## 概述

`MissionCheatView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionCheatView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIsCheatsAvailable
`public abstract bool GetIsCheatsAvailable()`

**用途 / Purpose:** 获取 `is cheats available` 的当前值。

### InitializeScreen
`public abstract void InitializeScreen()`

**用途 / Purpose:** 初始化 `screen` 的状态、资源或绑定。

### FinalizeScreen
`public abstract void FinalizeScreen()`

**用途 / Purpose:** 处理 `finalize screen` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionCheatView();
```

## 参见

- [完整类目录](../catalog)