<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherDebugManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherDebugManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDebugManager.cs`

## 概述

`LauncherDebugManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LauncherDebugManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = LauncherDebugManager.Current;
```

## 参见

- [完整类目录](../catalog)