---
title: "LauncherModsDLLManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherModsDLLManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherModsDLLManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsDLLManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsDLLManager.cs`

## 概述

`LauncherModsDLLManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LauncherModsDLLManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShouldUpdateSaveData` | `public bool ShouldUpdateSaveData { get; }` |

## 主要方法

### GetSubModuleVerifyData
`public LauncherDLLData GetSubModuleVerifyData(SubModuleInfo subModuleInfo)`

**用途 / Purpose:** 获取 `sub module verify data` 的当前值。

## 使用示例

```csharp
var manager = LauncherModsDLLManager.Current;
```

## 参见

- [完整类目录](../catalog)