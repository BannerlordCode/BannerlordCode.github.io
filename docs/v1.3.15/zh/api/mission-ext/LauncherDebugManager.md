<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherDebugManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherDebugManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDebugManager.cs`

## 概述

`LauncherDebugManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### OnFinalize
```csharp
public void OnFinalize()
```

## 使用示例

```csharp
// LauncherDebugManager (Manager) 的典型用法
LauncherDebugManager.Current;
```

## 参见

- [完整类目录](../catalog)