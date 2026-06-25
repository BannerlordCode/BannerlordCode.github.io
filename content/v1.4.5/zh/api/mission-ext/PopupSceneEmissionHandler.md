---
title: "PopupSceneEmissionHandler"
description: "PopupSceneEmissionHandler 的自动生成类参考。"
---
# PopupSceneEmissionHandler

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneEmissionHandler : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/PopupSceneEmissionHandler.cs`

## 概述

`PopupSceneEmissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `PopupSceneEmissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 PopupSceneEmissionHandler 实例
PopupSceneEmissionHandler popupSceneEmissionHandler = ...;
var result = popupSceneEmissionHandler.GetTickRequirement();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<PopupSceneEmissionHandler>();
```

## 参见

- [本区域目录](../)