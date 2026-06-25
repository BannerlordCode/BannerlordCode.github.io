---
title: "PopupSceneEmissionHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PopupSceneEmissionHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneEmissionHandler

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneEmissionHandler : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/PopupSceneEmissionHandler.cs`

## 概述

`PopupSceneEmissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `PopupSceneEmissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new PopupSceneEmissionHandler());
```

## 参见

- [完整类目录](../catalog)