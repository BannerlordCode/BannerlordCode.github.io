---
title: "MapColorGradeManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapColorGradeManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapColorGradeManager

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapColorGradeManager : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/MapColorGradeManager.cs`

## 概述

`MapColorGradeManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapColorGradeManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### ApplyAtmosphere
`public void ApplyAtmosphere(bool forceLoadTextures)`

**用途 / Purpose:** 将 `atmosphere` 应用到当前对象。

### ApplyColorGrade
`public void ApplyColorGrade(float dt)`

**用途 / Purpose:** 将 `color grade` 应用到当前对象。

## 使用示例

```csharp
var manager = MapColorGradeManager.Current;
```

## 参见

- [完整类目录](../catalog)