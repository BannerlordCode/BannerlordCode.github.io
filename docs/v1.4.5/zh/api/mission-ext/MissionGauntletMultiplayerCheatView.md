<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletMultiplayerCheatView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletMultiplayerCheatView

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerCheatView.cs`

## 概述

`MissionGauntletMultiplayerCheatView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletMultiplayerCheatView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**用途 / Purpose:** 获取 `is cheats available` 的当前值。

### InitializeScreen
`public override void InitializeScreen()`

**用途 / Purpose:** 初始化 `screen` 的状态、资源或绑定。

### FinalizeScreen
`public override void FinalizeScreen()`

**用途 / Purpose:** 处理 `finalize screen` 相关逻辑。

## 使用示例

```csharp
var view = new MissionGauntletMultiplayerCheatView();
```

## 参见

- [完整类目录](../catalog)