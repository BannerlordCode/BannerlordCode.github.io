<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherModsDLLManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherModsDLLManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsDLLManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsDLLManager.cs`

## 概述

`LauncherModsDLLManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShouldUpdateSaveData` | `public bool ShouldUpdateSaveData { get; }` |

## 主要方法

### GetSubModuleVerifyData
```csharp
public LauncherDLLData GetSubModuleVerifyData(SubModuleInfo subModuleInfo)
```

## 使用示例

```csharp
// LauncherModsDLLManager (Manager) 的典型用法
LauncherModsDLLManager.Current;
```

## 参见

- [完整类目录](../catalog)