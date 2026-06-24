<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletDefaultLoadingWindowManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletDefaultLoadingWindowManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletDefaultLoadingWindowManager : GlobalLayer, ILoadingWindowManager`
**Base:** `GlobalLayer`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletDefaultLoadingWindowManager.cs`

## 概述

`GauntletDefaultLoadingWindowManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GauntletDefaultLoadingWindowManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetCurrentModeIsMultiplayer
`public void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**用途 / Purpose:** 设置 `current mode is multiplayer` 的值或状态。

## 使用示例

```csharp
var manager = GauntletDefaultLoadingWindowManager.Current;
```

## 参见

- [完整类目录](../catalog)