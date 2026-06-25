---
title: "MissionNameMarkerHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNameMarkerHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerHelper

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public static class MissionNameMarkerHelper`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerHelper.cs`

## 概述

`MissionNameMarkerHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MissionNameMarkerHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
MissionNameMarkerHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)